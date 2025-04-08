import { PrismaClient } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export const GET = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorised" }, { status: 401 });
    }
    const { userId } = await params;
    if (session.user.role !== "ADMIN" && session.user.id !== userId) {
      return NextResponse.json(
        { error: "unauthorised: can only access own data" },
        { status: 403 }
      );
    }
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: {
        id: true,
        name: true,
        role: true,
        password: false,
        settings: true,
      },
    });

    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    return NextResponse.json(user);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error fetching user" }, { status: 500 });
  }
};

export const PATCH = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorised" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "unauthorised: must be admin" },
        { status: 403 }
      );
    }

    const { name, password, role, voiceEnabled, autoSuggestEnabled } =
      await req.json();
    const { userId } = params;

    console.log("PATCH request received:", {
      userId,
      name,
      role,
      voiceEnabled,
      autoSuggestEnabled,
    });

    // Only include fields that are provided in the update
    const updateData: {
      name?: string;
      password?: string;
      role?: "USER" | "ADMIN";
      settings?: {
        update: {
          voiceEnabled?: boolean;
          autoSuggestEnabled?: boolean;
        };
      };
    } = {};

    if (name !== undefined) updateData.name = name;
    if (password !== undefined) updateData.password = password;
    if (role !== undefined) {
      if (role !== "USER" && role !== "ADMIN") {
        return NextResponse.json(
          { error: "Invalid role value" },
          { status: 400 }
        );
      }
      updateData.role = role;
    }

    // Handle user settings updates
    if (voiceEnabled !== undefined || autoSuggestEnabled !== undefined) {
      updateData.settings = {
        update: {
          ...(voiceEnabled !== undefined && { voiceEnabled }),
          ...(autoSuggestEnabled !== undefined && { autoSuggestEnabled }),
        },
      };
    }

    console.log("Update data:", updateData);

    const response = await prisma.user.update({
      where: { id: userId },
      data: updateData,
      include: {
        settings: true,
      },
    });

    console.log("Prisma response:", response);

    return NextResponse.json(response);
  } catch (err) {
    console.log("Error updating user:", err);
    return NextResponse.json({ error: "error updating user" }, { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { userId: string } }
) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorised" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "unauthorised: must be admin" },
        { status: 403 }
      );
    }

    const { userId } = await params;

    const response = await prisma.user.delete({
      where: { id: userId },
    });

    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error deleting user" }, { status: 500 });
  }
};
