import { PrismaClient } from "@/generated/main";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
const prisma = new PrismaClient();

export const GET = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user) {
    return NextResponse.json({ error: "unauthorised" }, { status: 401 });
  }
  if (session?.user.role !== "ADMIN") {
    return NextResponse.json(
      { error: "unauthorised: must be an admin" },
      { status: 401 }
    );
  }
  try {
    const response = await prisma.user.findMany({
      select: {
        id: true,
        password: false,
        userId: true,
        name: true,
        // email: true,
        role: true,
        createdAt: true,
        profilePicture: true,
      },
    });
    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error fetching users" });
  }
};

export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorised" }, { status: 401 });
    }

    if (session.user.role !== "ADMIN") {
      return NextResponse.json(
        { error: "unauthorised : must be admin" },
        { status: 403 }
      );
    }

    const { name, password, role } = await req.json();

    


    const response = await prisma.user.create({
      data: {
        name,
        password,
        role,
      },
    });


    return NextResponse.json(response, { status: 201 });
  } catch (err) {
    console.error("Error adding user:", err);
    return NextResponse.json({ error: "error adding user" }, { status: 500 });
  }
};

export const PUT = async (req: NextRequest) => {
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

    const { id, name, password, role } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "user id is required" },
        { status: 400 }
      );
    }

    const response = await prisma.user.update({
      where: { id },
      data: {
        name,
        password,
        role,
      },
    });

    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error updating user" }, { status: 500 });
  }
};

export const DELETE = async (req: NextRequest) => {
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

    const { id } = await req.json();

    if (!id) {
      return NextResponse.json(
        { error: "user id is required" },
        { status: 400 }
      );
    }

    const response = await prisma.user.delete({
      where: { id },
    });

    return NextResponse.json(response);
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: "error deleting user" }, { status: 500 });
  }
};
