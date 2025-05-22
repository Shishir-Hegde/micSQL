import { PrismaClient } from "@/generated/main";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

const prisma = new PrismaClient();

export const GET = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    // Get the user's voice profile
    const voiceProfile = await prisma.voiceProfile.findFirst({
      where: {
        userId: session.user.id,
        isActive: true,
      },
    });

    if (!voiceProfile) {
      return NextResponse.json(
        { error: "No voice model found" },
        { status: 404 }
      );
    }

    // Check if embeddings is an empty object or array
    const embeddings = voiceProfile.embeddings;
    if (
      !embeddings ||
      (typeof embeddings === "object" && Object.keys(embeddings).length === 0)
    ) {
      return NextResponse.json(
        { error: "Voice model has no embeddings" },
        { status: 404 }
      );
    }

    return NextResponse.json({ hasVoiceModel: true });
  } catch (error) {
    console.error("Error checking voice model:", error);
    return NextResponse.json(
      { error: "Error checking voice model" },
      { status: 500 }
    );
  }
};
