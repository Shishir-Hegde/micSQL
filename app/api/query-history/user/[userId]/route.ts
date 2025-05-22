import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { PrismaClient } from "@/generated/main";

const prisma = new PrismaClient();

// Get all query histories for a specific user
export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const session = await getServerSession(authOptions);
    if (!session) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    // Debug logging
    const { userId } = await params;
    // Get the userId from the session
    const targetUserId = session.user.id;
    // console.log("Session user:", session.user);
    // console.log("Params userId:", userId);

    // Security check: Only allow access to your own queries or if you're an admin
    if (targetUserId !== userId && session.user.role !== "AD  MIN") {
      console.log("Access denied - userId mismatch:", {
        targetUserId,
        paramsUserId: params.userId,
      });
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    // Fetch all queries for the specified user
    const queries = await prisma.queryHistory.findMany({
      where: {
        userId: targetUserId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

    console.log("Found queries:", queries);

    // Return an empty array if no queries found
    return NextResponse.json(queries || []);
  } catch (error) {
    console.error("Error fetching query history:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
