import { PrismaClient } from "@/generated/main";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export async function GET(
    request: NextRequest,
    { params }: { params: { "query-id": string } }
) {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: "unauthorized" }, { status: 401 });
        }
        const queryId = await params["query-id"];
        if (!queryId) {
            return NextResponse.json({ error: "query ID is required" }, { status: 400 });
        }
        // Fetch the query history entry
        const queryHistory = await prisma.queryHistory.findUnique({
            where: {
                id: queryId,
                userId: session.user.id // Ensure the query belongs to the current user
            },
            include: {
                visualization: true
            }
        });

        if (!queryHistory) {
            return NextResponse.json({ error: "query not found" }, { status: 404 });
        }

        return NextResponse.json({
            id: queryHistory.id,
            userQuery: queryHistory.userQuery,
            sqlQuery: queryHistory.sqlQuery,
            relatedQueries: queryHistory.relatedQueries,
            results: queryHistory.results,
            executionTime: queryHistory.executionTime,
            successful: queryHistory.successful,
            errorMessage: queryHistory.errorMessage,
            createdAt: queryHistory.createdAt,
            visualization: queryHistory.visualization
        });
    } catch (error) {
        console.error("Error fetching query history:", error);
        return NextResponse.json(
            { error: "Failed to fetch query history" },
            { status: 500 }
        );
    }
} 