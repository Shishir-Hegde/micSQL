import { PrismaClient } from "@/generated/main";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

// Get column metadata for a specific table or all columns
export const GET = async (req: NextRequest) => {
    try {
        const session = await getServerSession(authOptions);
        if (!session?.user) {
            return NextResponse.json({ error: "unauthorized" }, { status: 401 });
        }

        const searchParams = req.nextUrl.searchParams;
        const tableId = searchParams.get("tableId");
        const columnId = searchParams.get("id");

        // Build the query where clause
        let where: any = {};

        if (columnId) {
            where.id = columnId;
        } else if (tableId) {
            where.databaseMetadataId = tableId;
        }

        // If user is not admin, only include columns from visible tables
        if (session.user.role !== "ADMIN") {
            // Get IDs of visible tables
            const visibleTables = await prisma.databaseMetadata.findMany({
                where: { isVisible: true },
                select: { id: true }
            });
            
            const visibleTableIds = visibleTables.map(table => table.id);
            
            // Add to where clause
            where.databaseMetadataId = { in: visibleTableIds };
        }

        // Get columns with their parent table information
        const columns = await prisma.columnMetadata.findMany({
            where,
            include: {
                databaseMetadata: {
                    select: { tableName: true, description: true }
                }
            }
        });

        return NextResponse.json(columns);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "error fetching column metadata" }, { status: 500 });
    }
};

// Create a new column (admin only)
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
            databaseMetadataId,
            columnName,
            dataType,
            description,
            isIdentifier,
            isSensitive
        } = await req.json();

        if (!databaseMetadataId || !columnName || !dataType) {
            return NextResponse.json({ 
                error: "databaseMetadataId, columnName, and dataType are required" 
            }, { status: 400 });
        }

        // Check if the table exists
        const table = await prisma.databaseMetadata.findUnique({
            where: { id: databaseMetadataId }
        });

        if (!table) {
            return NextResponse.json({ error: "database table metadata not found" }, { status: 404 });
        }

        // Check if column already exists in this table
        const existingColumn = await prisma.columnMetadata.findFirst({
            where: {
                databaseMetadataId,
                columnName
            }
        });

        if (existingColumn) {
            return NextResponse.json({ 
                error: "column with this name already exists in the table" 
            }, { status: 409 });
        }

        // Create the column
        const column = await prisma.columnMetadata.create({
            data: {
                databaseMetadataId,
                columnName,
                dataType,
                description,
                isIdentifier: isIdentifier || false,
                isSensitive: isSensitive || false
            }
        });

        return NextResponse.json(column, { status: 201 });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "error creating column metadata" }, { status: 500 });
    }
};

// Update an existing column (admin only)
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
            columnName,
            dataType,
            description,
            isIdentifier,
            isSensitive
        } = await req.json();

        if (!id) {
            return NextResponse.json({ error: "column id is required" }, { status: 400 });
        }

        // Check if column exists
        const existingColumn = await prisma.columnMetadata.findUnique({
            where: { id }
        });

        if (!existingColumn) {
            return NextResponse.json({ error: "column metadata not found" }, { status: 404 });
        }

        // Update the column
        const updatedColumn = await prisma.columnMetadata.update({
            where: { id },
            data: {
                columnName: columnName || existingColumn.columnName,
                dataType: dataType || existingColumn.dataType,
                description: description !== undefined ? description : existingColumn.description,
                isIdentifier: isIdentifier !== undefined ? isIdentifier : existingColumn.isIdentifier,
                isSensitive: isSensitive !== undefined ? isSensitive : existingColumn.isSensitive
            }
        });

        return NextResponse.json(updatedColumn);
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "error updating column metadata" }, { status: 500 });
    }
};

// Delete a column (admin only)
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
            return NextResponse.json({ error: "column id is required" }, { status: 400 });
        }

        // Check if column exists
        const existingColumn = await prisma.columnMetadata.findUnique({
            where: { id }
        });

        if (!existingColumn) {
            return NextResponse.json({ error: "column metadata not found" }, { status: 404 });
        }

        // Delete the column
        await prisma.columnMetadata.delete({
            where: { id }
        });

        return NextResponse.json({ success: true, message: "Column metadata deleted" });
    } catch (err) {
        console.log(err);
        return NextResponse.json({ error: "error deleting column metadata" }, { status: 500 });
    }
}; 