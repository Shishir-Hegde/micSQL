import { PrismaClient } from "@/generated/main";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../../auth/[...nextauth]/route";
import sharp from "sharp";

const prisma = new PrismaClient();

export const POST = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const { userId } = params;
    if (session.user.role !== "ADMIN" && session.user.id !== userId) {
      return NextResponse.json(
        { error: "unauthorized: can only update own profile picture" },
        { status: 403 }
      );
    }

    const formData = await req.formData();
    const file = formData.get("file") as File;
    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 });
    }

    // Convert file to buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Resize image to 500x500 and convert to PNG
    const resizedBuffer = await sharp(buffer)
      .resize(500, 500, {
        fit: "cover",
        position: "center",
      })
      .png()
      .toBuffer();

    // Convert to base64
    const base64Image = `data:image/png;base64,${resizedBuffer.toString(
      "base64"
    )}`;

    // Update user's profile picture
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { profilePicture: base64Image },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error updating profile picture:", err);
    return NextResponse.json(
      { error: "Error updating profile picture" },
      { status: 500 }
    );
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    const { userId } = params;
    if (session.user.role !== "ADMIN" && session.user.id !== userId) {
      return NextResponse.json(
        { error: "unauthorized: can only delete own profile picture" },
        { status: 403 }
      );
    }

    // Remove profile picture
    const updatedUser = await prisma.user.update({
      where: { id: userId },
      data: { profilePicture: null },
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Error deleting profile picture:", err);
    return NextResponse.json(
      { error: "Error deleting profile picture" },
      { status: 500 }
    );
  }
};
