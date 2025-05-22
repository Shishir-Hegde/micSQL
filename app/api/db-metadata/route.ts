import { PrismaClient } from "@/generated/main";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

// Get all database metadata
export const GET = async (req: NextRequest) => {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: "unauthorized" }, { status: 401 });
        }

        // If user is not admin, only return metadata for visible tables
        const where = session.user.role !== "ADMIN" ? { isVisible: true } : {};

        const dbMetadata = await prisma.databaseMetadata.findMany({
            where,
            include: {
                columns: true
            }
        });

        return NextResponse.json(dbMetadata);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "error fetching database metadata" }, { status: 500 });
    }
};

// Create new table metadata (admin only)
export const POST = async (req: NextRequest) => {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: "unauthorized" }, { status: 401 });
        }

        if (session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "unauthorized: must be admin" }, { status: 403 });
        }

        const {
            tableName,
            description,
            isVisible,
            columns
        } = await req.json();

        if (!tableName) {
            return NextResponse.json({ error: "table name is required" }, { status: 400 });
        }

        // Check if table metadata already exists
        const existingTable = await prisma.databaseMetadata.findUnique({
            where: { tableName }
        });

        if (existingTable) {
            return NextResponse.json({ error: "table metadata already exists" }, { status: 409 });
        }

        // Create table metadata with columns
        const tableMetadata = await prisma.databaseMetadata.create({
            data: {
                tableName,
                description,
                isVisible: isVisible !== undefined ? isVisible : true,
                columns: {
                    create: columns || []
                }
            },
            include: {
                columns: true
            }
        });

        return NextResponse.json(tableMetadata, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "error creating database metadata" }, { status: 500 });
    }
};

// Update existing table metadata (admin only)
export const PUT = async (req: NextRequest) => {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: "unauthorized" }, { status: 401 });
        }

        if (session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "unauthorized: must be admin" }, { status: 403 });
        }

        const {
            id,
            tableName,
            description,
            isVisible
        } = await req.json();

        if (!id) {
            return NextResponse.json({ error: "metadata id is required" }, { status: 400 });
        }

        // Check if metadata exists
        const existingMetadata = await prisma.databaseMetadata.findUnique({
            where: { id }
        });

        if (!existingMetadata) {
            return NextResponse.json({ error: "database metadata not found" }, { status: 404 });
        }

        // Update table metadata
        const updatedMetadata = await prisma.databaseMetadata.update({
            where: { id },
            data: {
                tableName: tableName || existingMetadata.tableName,
                description: description !== undefined ? description : existingMetadata.description,
                isVisible: isVisible !== undefined ? isVisible : existingMetadata.isVisible
            },
            include: {
                columns: true
            }
        });

        return NextResponse.json(updatedMetadata);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "error updating database metadata" }, { status: 500 });
    }
};

// Delete table metadata (admin only)   
export const DELETE = async (req: NextRequest) => {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: "unauthorized" }, { status: 401 });
        }

        if (session.user.role !== "ADMIN") {
            return NextResponse.json({ error: "unauthorized: must be admin" }, { status: 403 });
        }

        const { id } = await req.json();

        if (!id) {
            return NextResponse.json({ error: "metadata id is required" }, { status: 400 });
        }

        // Check if metadata exists
        const existingMetadata = await prisma.databaseMetadata.findUnique({
            where: { id }
        });

        if (!existingMetadata) {
            return NextResponse.json({ error: "database metadata not found" }, { status: 404 });
        }

        // Delete table metadata (will cascade delete column metadata)
        await prisma.databaseMetadata.delete({
            where: { id }
        });

        return NextResponse.json({ success: true, message: "Database metadata deleted" });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "error deleting database metadata" }, { status: 500 });
    }
}; 