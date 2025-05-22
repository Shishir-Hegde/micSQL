import { PrismaClient as OrgPrismaClient, Prisma } from "@/generated/org";
import { NextRequest, NextResponse } from "next/server";

const prisma = new OrgPrismaClient();

interface QueryRequest {
  query: string;
  xAxis: string;
  yAxis: string;
  title: string;
  description: string;
  chartType?: "bar" | "pie";
  stackKey?: string;
}

interface QueryResponse {
  data: Array<{ [key: string]: string | number }>;
  metadata: {
    xAxis: string;
    yAxis: string;
    title: string;
    description: string;
    chartType?: "bar" | "pie";
    stackKey?: string;
  };
}

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

export async function POST(req: NextRequest) {
  try {
    const {
      query,
      xAxis,
      yAxis,
      title,
      description,
      chartType,
      stackKey,
    }: QueryRequest = await req.json();

    if (!query || !xAxis || !yAxis) {
      return NextResponse.json(
        { error: "Missing required parameters" },
        { status: 400 }
      );
    }

    // Execute the query
    const results = await prisma.$queryRaw(Prisma.raw(query));

    // Convert BigInt values to strings
    const convertedResults = convertBigIntToString(results) as Array<{
      [key: string]: string | number;
    }>;

    // Format the response
    const response: QueryResponse = {
      data: convertedResults,
      metadata: {
        xAxis,
        yAxis,
        title: title || "Data Visualization",
        description: description || "",
        chartType,
        stackKey,
      },
    };

    return NextResponse.json(response);
  } catch (error) {
    console.error("Error executing query:", error);
    return NextResponse.json(
      { error: "Failed to execute query" },
      { status: 500 }
    );
  }
}
