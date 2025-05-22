import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route"; // Adjust path if necessary
import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");
const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" }); // Using flash model

interface RelatedQueryData {
    description: string;
    sql: string;
    results: {
        columns: string[];
        rows: any[];
        executionTime?: number; // Optional, but might be useful context
        error?: string; // Include if a related query failed
    };
}

export async function POST(req: NextRequest) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { relatedQueryData } = await req.json() as { relatedQueryData: RelatedQueryData[] };

        if (!relatedQueryData || !Array.isArray(relatedQueryData) || relatedQueryData.length === 0) {
            return NextResponse.json({ error: "Missing or invalid relatedQueryData" }, { status: 400 });
        }

        // Construct the prompt for Gemini
        let prompt = "Analyze the following data sets, which represent the results of related database queries. Generate useful insights based on this data. Each item includes a description of the query and its results:\n\n";

        relatedQueryData.forEach((item, index) => {
            prompt += `--- Query ${index + 1} ---\n`;
            prompt += `Description: ${item.description}\n`;
            // Avoid sending excessively large results; summarize or truncate if necessary
            const resultsString = JSON.stringify(item.results.rows.slice(0, 20)); // Limit to first 20 rows for brevity
            const resultsPreview = resultsString.length > 1000 ? resultsString.substring(0, 1000) + "... (truncated)" : resultsString;
            prompt += `Results (preview): ${resultsPreview}\n`;
            if (item.results.error) {
                 prompt += `Error executing this query: ${item.results.error}\n`;
            }
            prompt += `\n`;
        });

        prompt += "Please provide a concise summary of insights derived from analyzing these related queries together.";

        // Call Gemini
        const result = await model.generateContent(prompt);
        const response = result.response;
        const insights = response.text();

        return NextResponse.json({ insights });

    } catch (error) {
        console.error("Error generating insights:", error);
        let errorMessage = "Failed to generate insights";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        return NextResponse.json(
            { error: errorMessage },
            { status: 500 }
        );
    }
} 