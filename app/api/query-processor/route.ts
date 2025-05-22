import { Prisma, PrismaClient } from "@/generated/main";
import { PrismaClient as OrgPrismaClient } from "@/generated/org";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import { GoogleGenerativeAI } from "@google/generative-ai";
import axios from "axios";
import FormData from "form-data";
import fs from "fs";
import path from "path";
import os from "os";

// Add a utility function to handle BigInt serialization
type JsonValue = string | number | boolean | null | JsonObject | JsonArray;
interface JsonObject {
  [key: string]: JsonValue;
}
type JsonArray = Array<JsonValue>;

function convertBigIntToString(obj: unknown): JsonValue {
  if (obj === null || obj === undefined) {
    return null;
  }

  if (typeof obj === "bigint") {
    return obj.toString();
  }

  if (Array.isArray(obj)) {
    return obj.map(convertBigIntToString);
  }

  if (typeof obj === "object") {
    const result: JsonObject = {};
    for (const key in obj) {
      result[key] = convertBigIntToString((obj as JsonObject)[key]);
    }
    return result;
  }

  return obj as JsonValue;
}

const prisma = new PrismaClient();
const orgPrisma = new OrgPrismaClient();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
// This is the main endpoint for processing natural language to SQL
export const POST = async (req: NextRequest) => {
  let textQuery: string | undefined;
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    // Get user role for permission checks
    const userRole = session.user.role || "USER";

    // Get request body which could contain:
    // - text query (converted from voice on client-side or directly typed)
    // - audio file or streaming data (would need to be processed by Whisper)
    // - optional parameters (date ranges, filters, etc.)
    const { query, audioFile, requestVoiceAuth = true } = await req.json();
    textQuery = query;

    // STEP 1: Handle voice authentication if requested
    if (requestVoiceAuth) {
      if (!audioFile) {
        return NextResponse.json(
          { error: "audio file required for voice authentication" },
          { status: 400 }
        );
      }

      // Save audio to temporary file
      const tempDir = os.tmpdir();
      const tempFilePath = path.join(tempDir, `auth-${Date.now()}.wav`);
      const buffer = Buffer.from(audioFile, "base64");
      fs.writeFileSync(tempFilePath, buffer);

      const { authenticated, transcription } =
        await verifyVoiceIdentityAndTranscribe(session.user.id, tempFilePath);
      // Clean up temp file
      fs.unlinkSync(tempFilePath);

      if (!authenticated) {
        return NextResponse.json(
          { error: "voice authentication failed" },
          { status: 401 }
        );
      }
      // Use the transcription from voice verification
      textQuery = transcription;
    }

    if (!textQuery) {
      return NextResponse.json(
        { error: "query text is required" },
        { status: 400 }
      );
    }

    // STEP 3: Fetch database schema metadata for context
    const dbMetadata = await prisma.databaseMetadata.findMany({
      include: {
        columns: true,
      },
    });

    // STEP 4: Process natural language to SQL using LLM (Gemini or other)
    // This would connect to your LLM service
    const { graphSqlQuery, relatedQueries, suggestedVisualization } =
      await processNaturalLanguageToSQL(textQuery, dbMetadata);

    // For non-admin users, add a message indicating limitations
    let userPermissionNote = null;
    if (userRole !== "ADMIN" && !isReadOnlyQuery(graphSqlQuery)) {
      return NextResponse.json(
        {
          error:
            "You don't have permission to execute modification queries. Please try a query that only retrieves data.",
        },
        { status: 403 }
      );
    }

    // STEP 5: Execute the SQL query against the database
    // Pass the user role to enforce permissions
    const queryResults = await executeQuery(graphSqlQuery, userRole);

    if (queryResults.data?.error) {
      // Save failed query to history
      const errorHistory = await prisma.queryHistory.create({
        data: {
          userId: session.user.id,
          userQuery: textQuery,
          sqlQuery: graphSqlQuery,
          successful: false,
          errorMessage: queryResults.data.error,
          executionTime: queryResults.executionTime,
        },
      });

      return NextResponse.json(
        {
          error: queryResults.data.error,
          queryId: errorHistory.id,
        },
        { status: 400 }
      );
    }

    // STEP 6: Save the query to history
    const queryHistory = await prisma.queryHistory.create({
      data: {
        userId: session.user.id,
        userQuery: textQuery,
        sqlQuery: graphSqlQuery,
        relatedQueries,
        results: queryResults,
        executionTime: queryResults.executionTime,
        successful: true,
        visualization: suggestedVisualization
          ? {
              create: {
                chartType: suggestedVisualization.chartType,
                chartOptions: suggestedVisualization.chartOptions,
                title: suggestedVisualization.title || textQuery,
                description: suggestedVisualization.description,
              },
            }
          : undefined,
      },
      include: {
        visualization: true,
      },
    });

    // STEP 7: Return the complete response
    return NextResponse.json({
      query: {
        original: textQuery,
        sql: graphSqlQuery,
        relatedQueries,
      },
      results: convertBigIntToString(queryResults.data),
      visualization: queryHistory.visualization,
      executionTime: queryResults.executionTime,
      queryId: queryHistory.id,
      userPermissionNote, // Include permission note if relevant
    });
  } catch (err) {
    console.log(err);

    // Save failed query to history if possible
    try {
      if (err instanceof Error) {
        await prisma.queryHistory.create({
          data: {
            userId: (await getServerSession(authOptions))?.user.id || "",
            userQuery: textQuery || "Unknown query",
            sqlQuery: "",
            successful: false,
            errorMessage: err.message,
          },
        });
      }
    } catch (historyErr) {
      console.log("Failed to save error to history:", historyErr);
    }

    let errorMessage = "Database query failed";
    if (err instanceof Error) {
      errorMessage = err.message;
    } else if (typeof err === "string") {
      errorMessage = err;
    }

    return NextResponse.json(
      {
        query: { original: textQuery },
        error: err instanceof Error ? err.message : "Unknown error",
        ...(err instanceof Prisma.PrismaClientKnownRequestError
          ? { prismaError: err.meta }
          : {}),
      },
      { status: 500 }
    );
  }
};

// Helper functions (would be implemented in separate files in production)

// Voice identity verification using the external diarization service
async function verifyVoiceIdentityAndTranscribe(
  userId: string,
  audioPath: string
): Promise<{ authenticated: boolean; transcription: string }> {
  try {
    // Get user info to map our internal ID to the userID used by the voice system
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      console.log("User not found");
      return { authenticated: false, transcription: "" };
    }

    // Create a form with the audio file and user ID
    const form = new FormData();
    form.append("file", fs.createReadStream(audioPath));

    // Use the numeric userId which was likely used during enrollment
    form.append("user_id", user.userId.toString());

    // Log the URL we're hitting
    const apiUrl = process.env.VOICE_AUTH_API_URL || "http://localhost:8000";
    const verifyUrl = `${apiUrl}/verify`;

    // Verify with the speaker diarization model
    try {
      const verificationResponse = await axios.post(verifyUrl, form, {
        headers: {
          ...form.getHeaders(),
        },
      });

      if (!verificationResponse.data.authenticated) {
        return { authenticated: false, transcription: "" };
      }

      const transcription = verificationResponse.data.transcription;
      console.log("Voice verification result:", verificationResponse.data);
      return { authenticated: true, transcription };
    } catch (error) {
      console.error("Voice verification API error:", error);
      // Add more detailed error logging
      if (axios.isAxiosError(error) && error.response) {
        console.error(`Status: ${error.response.status}`);
        console.error(`Error data:`, error.response.data);
      }
      return { authenticated: false, transcription: "" };
    }
  } catch (error) {
    console.error("Voice verification error:", error);
    return { authenticated: false, transcription: "" };
  }
}

// Helper function to clean the response text
function cleanResponseText(text: string): string {
  // Remove markdown code block syntax
  return text
    .replace(/```json\n?/g, "")
    .replace(/```\n?/g, "")
    .trim();
}

// Helper function to get database schema
async function getOrgDatabaseSchema() {
  try {
    // Get all tables from the org database
    const tables = await orgPrisma.$queryRaw<{ table_name: string }[]>`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `;

    const schema: any = {};

    // For each table, get its columns
    for (const table of tables) {
      const columns = await orgPrisma.$queryRaw`
        SELECT column_name, data_type, is_nullable
        FROM information_schema.columns
        WHERE table_schema = 'public'
        AND table_name = ${table.table_name}
      `;

      schema[table.table_name] = columns;
    }

    return schema;
  } catch (error) {
    console.error("Error fetching database schema:", error);
    throw error;
  }
}

// Process natural language to SQL using LLM
async function processNaturalLanguageToSQL(
  query: string,
  dbMetadata: any[]
): Promise<{
  graphSqlQuery: string;
  relatedQueries: any;
  suggestedVisualization?: any;
}> {
  try {
    console.log("Starting natural language to SQL processing...");

    // Get the org database schema
    const orgSchema = await getOrgDatabaseSchema();

    // Try using a different model name based on the available models
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      generationConfig: {
        temperature: 0.2,
      },
    });

    // Format the schema information in a more structured way
    const schemaInfo = dbMetadata.map((table) => ({
      tableName: table.tableName,
      description: table.description,
      columns: table.columns.map((col: any) => ({
        name: col.columnName,
        type: col.dataType,
        description: col.description,
      })),
    }));

    // Prepare the prompt with database schema and user query
    const prompt = `You are writing postgreSQL code to query/modify a company's database for visualization purposes. Given the database schema and user query, generate:
        1. A SINGLE visualization-specific postgreSQL query (only one query, no multiple statements)
        2. Related queries/code
        3. Visualization configuration matching EXACT component data structures:

        Database Schema: ${JSON.stringify(orgSchema)}
        User Query: ${query}

        IMPORTANT: 
        1. Only use columns that exist in the schema above
        2. Do not reference any columns that are not listed in the schema
        3. If the query requires columns that don't exist, suggest a modified query that uses available columns
        4. For revenue-related queries, use the 'total_spent' column from the customers table instead

        STRICT DATA STRUCTURE REQUIREMENTS:
        - StackedGraph (stacked area):
          • First column = xAxisKey (date/category)
          • Subsequent columns = numeric series values
          • Example row: {{"month": "2025-04", "sales": 5000, "expenses": 3000}}
          • Required SQL: Include PIVOT/GROUP BY for multiple series

        - Pie (pie chart):
          • Column 1 = nameKey (category)
          • Column 2 = valueKey (numeric)
          • Max 7 categories (aggregate extras as 'Other')
          • Example row: {{"department": "Marketing", "budget": 120000}}

        - Donut Chart:
          • Column 1 = nameKey (category)
          • Column 2 = valueKey (numeric)
          • Max 7 categories (aggregate extras as 'Other')
          • Example row: {{"department": "Marketing", "budget": 120000}}

        - BarGraph (single-series bar):
          • Column 1 = xAxisKey (category)
          • Column 2 = numeric value
          • Example row: {{"region": "EMEA", "revenue": 75000}}

        - Line Graph (line):
          • Column 1 = xAxisKey (category)
          • Column 2 = numeric value
          • Example row: {{"region": "EMEA", "revenue": 75000}}
          
        Required JSON response format:
        {
            "graphSqlQuery": "query structured for visualization",
            "relatedQueries": [
                {"description": "...", "sql": "..."}
            ],
            "suggestedVisualization": {
                "chartType": "StackedGraph|Pie|BarGraph2Cat|BarGraph|BarChartInteractive",
                "chartOptions": {
                    "xAxisKey": "first_column_name",
                    "yAxisKeys": ["sales", "expenses"] (for multi-series),
                    "nameKey": "category_column" (pie only),
                    "valueKey": "value_column" (pie only),
                    "dateFormat": "MMM yyyy" (if time-based)
                },
                "title": "Chart title",
                "description": "Why this visualization fits",
                "sampleData": [
                    {"first_column": "example1", "series1": 100, "series2": 200},
                    {"first_column": "example2", "series1": 150, "series2": 250}
                ]
            }
        }

        Focus on EXACT data shape requirements for each chart type. Never suggest visualizations that don't match the data structure rules.`;

    console.log("Sending prompt to Gemini API...");
    console.log(prompt);

    try {
      const result = await model.generateContent(prompt);
      console.log("Received response from Gemini API");
      const response = result.response;
      const text = response.text();
      console.log("Raw response text:", text);

      // Extract JSON from the response
      const jsonMatch = text.match(/\{[\s\S]*\}/);
      if (!jsonMatch) {
        throw new Error("No JSON found in response");
      }

      const cleanedText = jsonMatch[0];
      console.log(
        "Cleaned response text:",
        cleanedText.substring(0, 200) + "..."
      );
      const parsedResponse = JSON.parse(cleanedText);
      console.log("Successfully parsed JSON response");

      // Removing column validation check
      return {
        graphSqlQuery: parsedResponse.graphSqlQuery,
        relatedQueries: parsedResponse.relatedQueries,
        suggestedVisualization: parsedResponse.suggestedVisualization,
      };
    } catch (apiError) {
      console.log(
        "First model failed, trying fallback model... api error : ",
        apiError
      );
      const fallbackModel = genAI.getGenerativeModel({
        model: "gemini-2.0-flash-lite",
      });
      const fallbackResult = await fallbackModel.generateContent(prompt);
      const fallbackText = fallbackResult.response.text();
      console.log(
        "Fallback raw response:",
        fallbackText.substring(0, 200) + "..."
      );

      // Extract JSON from fallback response
      const fallbackJsonMatch = fallbackText.match(/\{[\s\S]*\}/);
      if (!fallbackJsonMatch) {
        throw new Error("No JSON found in fallback response");
      }

      const cleanedFallbackText = fallbackJsonMatch[0];
      console.log(
        "Cleaned fallback text:",
        cleanedFallbackText.substring(0, 200) + "..."
      );
      const parsedFallback = JSON.parse(cleanedFallbackText);
      console.log("Successfully parsed fallback JSON response");

      // Removed fallback query validation

      return {
        graphSqlQuery: parsedFallback.graphSqlQuery,
        relatedQueries: parsedFallback.relatedQueries,
        suggestedVisualization: parsedFallback.suggestedVisualization,
      };
    }
  } catch (error) {
    console.error("Error generating SQL with Gemini:", error);
    console.error("Error details:", JSON.stringify(error, null, 2));
    throw new Error("Failed to generate SQL query");
  }
}

// Helper function to validate modification queries
function validateModificationQuery(query: string): void {
  const normalizedQuery = query.trim();

  // Prevent dropping tables or databases
  if (
    normalizedQuery.includes("DROP TABLE") ||
    normalizedQuery.includes("DROP DATABASE") ||
    normalizedQuery.includes("TRUNCATE")
  ) {
    throw new Error("DROP and TRUNCATE operations are not allowed");
  }

  // List of protected system tables that should not be modified by user queries
  const protectedTables = [
    "USER",
    "USERS",
    "QUERY_HISTORY",
    "QUERYHISTORY",
    "VOICE_PROFILE",
    "VOICEPROFILE",
    "DATABASE_METADATA",
    "DATABASEMETADATA",
    "COLUMN_METADATA",
    "COLUMNMETADATA",
    "VISUALIZATION",
    "VISUALIZATIONS",
    "DASHBOARD",
    "DASHBOARDS",
    "DASHBOARD_WIDGET",
    "DASHBOARDWIDGET",
    "USER_SETTINGS",
    "USERSETTINGS",
  ];

  // Check if query attempts to modify protected tables
  const tablePattern =
    /\b(ALTER|UPDATE|DELETE|INSERT\s+INTO|CREATE\s+TABLE)\s+(?:IF\s+NOT\s+EXISTS\s+)?[`"']?(\w+)[`"']?/i;
  const tableMatch = query.match(tablePattern);

  if (tableMatch) {
    const operation = tableMatch[1];
    const tableName = tableMatch[2];

    if (protectedTables.includes(tableName)) {
      throw new Error(
        `Operation ${operation} not allowed on system table '${tableMatch[2]}'`
      );
    }
  }

  // Extra protection for system tables in case the regex doesn't catch something
  for (const table of protectedTables) {
    // For CREATE TABLE, only check exact matches to avoid false positives
    if (
      normalizedQuery.startsWith("CREATE TABLE") &&
      normalizedQuery.includes(` ${table} `)
    ) {
      throw new Error(`Cannot create table with reserved name '${table}'`);
    }

    // For other modification operations, check if the protected table is being targeted
    if (
      (normalizedQuery.startsWith("UPDATE") ||
        normalizedQuery.startsWith("DELETE") ||
        normalizedQuery.startsWith("ALTER")) &&
      normalizedQuery.includes(` ${table} `)
    ) {
      throw new Error(`Cannot modify system table '${table}'`);
    }
  }
}

// Execute SQL query against the org database
async function executeQuery(
  sqlQuery: string,
  userRole: string
): Promise<{ data: any; executionTime: number }> {
  const startTime = Date.now();

  try {
    if (typeof sqlQuery !== "string") {
      throw new Error("Invalid SQL query format");
    }
    // Check if the query is read-only
    const isReadOnly = isReadOnlyQuery(sqlQuery);
    const normalizedQuery = sqlQuery.trim();

    // Regular users can only execute read-only queries
    if (userRole !== "ADMIN" && !isReadOnly) {
      throw new Error(
        "You don't have permission to modify the database. Only SELECT queries are allowed for your role."
      );
    }

    // Perform validation based on user role
    if (!isReadOnly) {
      // Admin checks - admins can modify but still need to follow system table protections
      validateModificationQuery(sqlQuery);
    } else {
      // Read validation for all users
      validateReadQuery(sqlQuery);
    }

    // Execute the query using orgPrisma's raw query capabilities
    let results;

    // Handle different query types (SELECT, CREATE, INSERT, etc.)
    if (normalizedQuery.startsWith("SELECT")) {
      // For SELECT queries, use $queryRaw
      results = await orgPrisma.$queryRawUnsafe(sqlQuery);
      return {
        data: results,
        executionTime: Date.now() - startTime,
      };
    } else if (
      normalizedQuery.startsWith("CREATE") ||
      normalizedQuery.startsWith("ALTER") ||
      normalizedQuery.startsWith("DROP")
    ) {
      // For DDL statements, use $executeRawUnsafe
      const result = await orgPrisma.$executeRawUnsafe(sqlQuery);
      return {
        data: {
          message: "DDL statement executed successfully",
          rowsAffected: result,
        },
        executionTime: Date.now() - startTime,
      };
    } else {
      // For other query types (INSERT, UPDATE, DELETE, etc.) - only admins reach here
      // Use $executeRawUnsafe for DML statements
      const result = await orgPrisma.$executeRawUnsafe(sqlQuery);
      return {
        data: {
          message: "Query executed successfully",
          rowsAffected: result,
        },
        executionTime: Date.now() - startTime,
      };
    }
  } catch (error: any) {
    console.error("Database query error:", error);
    // Return a more user-friendly error message
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      return {
        data: {
          error: error.message,
          code: error.code,
          meta: error.meta,
        },
        executionTime: Date.now() - startTime,
      };
    }

    // Handle other error types
    return {
      data: {
        error:
          error instanceof Error ? error.message : "Unknown database error",
      },
      executionTime: Date.now() - startTime,
    };
  }
}

// Helper function to extract table name from SQL query
function extractTableName(sqlQuery: string): string | null {
  const normalizedQuery = sqlQuery.trim();
  const tableMatch = normalizedQuery.match(/FROM\s+([^\s,;]+)/i);
  return tableMatch ? tableMatch[1].toLowerCase() : null;
}

// Helper function to check if a table exists
async function checkTableExists(tableName: string): Promise<boolean> {
  try {
    const result = await orgPrisma.$queryRawUnsafe<[{ exists: boolean }]>(`
      SELECT EXISTS (
        SELECT FROM information_schema.tables 
        WHERE table_schema = 'public' 
        AND table_name = '${tableName}'
      );
    `);
    return result[0].exists;
  } catch (error) {
    console.error("Error checking table existence:", error);
    return false;
  }
}

// Helper function to check if a query is read-only
function isReadOnlyQuery(query: string): boolean {
  if (!query) return false;
  const normalizedQuery = query.trim();
  return (
    normalizedQuery.startsWith("SELECT") ||
    normalizedQuery.startsWith("SHOW") ||
    normalizedQuery.startsWith("DESCRIBE")
  );
}

// Helper function to validate read queries
function validateReadQuery(query: string): void {
  const normalizedQuery = query.trim();

  // Check for overly broad queries that might expose sensitive data
  if (
    normalizedQuery.includes("SELECT * FROM USERS") ||
    normalizedQuery.includes("SELECT * FROM USER")
  ) {
    throw new Error(
      "Direct access to all user data is restricted for security reasons"
    );
  }

  // Check for attempts to access password fields
  if (
    normalizedQuery.includes("PASSWORD") &&
    (normalizedQuery.includes("USER") || normalizedQuery.includes("USERS"))
  ) {
    throw new Error("Access to password fields is strictly forbidden");
  }

  // Restrict joining sensitive tables with user data
  if (
    (normalizedQuery.includes("JOIN") || normalizedQuery.includes("UNION")) &&
    (normalizedQuery.includes("USER") || normalizedQuery.includes("USERS")) &&
    normalizedQuery.includes("PASSWORD")
  ) {
    throw new Error(
      "Joining operations involving sensitive user data are restricted"
    );
  }
  // Add additional read restrictions as needed for your security requirements
}
