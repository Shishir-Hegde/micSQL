// import { PrismaClient } from "@/generated/main";
// import { NextRequest, NextResponse } from "next/server";
// import { getServerSession } from "next-auth";
// import { authOptions } from "../auth/[...nextauth]/route";
// import { writeFile } from "fs/promises";
// import path from "path";
// import fs from "fs";

// const prisma = new PrismaClient();

// // Create a new voice profile for a user
// export const POST = async (req: NextRequest) => {
//   try {
//     const session = await getServerSession(authOptions);
//     if (!session?.user) {
//       return NextResponse.json({ error: "unauthorized" }, { status: 401 });
//     }

//     // Parse the form data
//     const formData = await req.formData();
//     const user_id = formData.get("user_id") as string;
//     const file = formData.get("file") as File;

//     if (!user_id || !file) {
//       return NextResponse.json(
//         { error: "user_id and file are required" },
//         { status: 400 }
//       );
//     }

//     // Admin can create voice profiles for any user
//     // Regular users can only create profiles for themselves
//     if (session.user.role !== "ADMIN" && user_id !== session.user.id) {
//       return NextResponse.json(
//         { error: "unauthorized: can only create voice profiles for yourself" },
//         { status: 403 }
//       );
//     }

//     // Validate that the user exists
//     const user = await prisma.user.findUnique({
//       where: { id: user_id },
//     });

//     if (!user) {
//       return NextResponse.json({ error: "user not found" }, { status: 404 });
//     }

//     // Save the audio file
//     const fileName = `voice_enrollment_${user_id}_${Date.now()}.wav`;
//     const filePath = path.join(process.cwd(), "public", "Audio", fileName);
//     const webPath = `/Audio/${fileName}`;

//     try {
//       // Ensure the Audio directory exists
//       const audioDir = path.join(process.cwd(), "public", "Audio");
//       if (!fs.existsSync(audioDir)) {
//         fs.mkdirSync(audioDir, { recursive: true });
//       }

//       // Convert File to buffer and write to file
//       const audioBuffer = Buffer.from(await file.arrayBuffer());
//       await writeFile(filePath, audioBuffer);
//       console.log(`Audio file saved to: ${filePath}`);

//       // Verify the file was written
//       if (!fs.existsSync(filePath)) {
//         throw new Error("Failed to verify audio file was written");
//       }

//       console.log(`File size: ${fs.statSync(filePath).size} bytes`);

//       return NextResponse.json(
//         {
//           success: true,
//           message: "Audio file saved successfully",
//           audioPath: webPath,
//           downloadUrl: webPath, // Add download URL
//         },
//         { status: 201 }
//       );
//     } catch (error) {
//       console.error("Error saving audio file:", error);
//       return NextResponse.json(
//         { error: "Failed to save audio file" },
//         { status: 500 }
//       );
//     }
//   } catch (err) {
//     console.error("Error in voice profile enrollment:", err);
//     return NextResponse.json(
//       { error: "error saving audio file" },
//       { status: 500 }
//     );
//   }
// };

import { PrismaClient } from "@/generated/main";
import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";
import axios from "axios";
import { writeFile } from "fs/promises";
import path from "path";
import fs from "fs";

const prisma = new PrismaClient();

// Create a new voice profile for a user
export const POST = async (req: NextRequest) => {
  try {
    const session = await getServerSession(authOptions);
    if (!session?.user) {
      return NextResponse.json({ error: "unauthorized" }, { status: 401 });
    }

    // Parse the form data
    const formData = await req.formData();
    const user_id = formData.get("user_id") as string;
    const file = formData.get("file") as File;

    if (!user_id || !file) {
      return NextResponse.json(
        { error: "user_id and file are required" },
        { status: 400 }
      );
    }

    // Admin can create voice profiles for any user
    // Regular users can only create profiles for themselves
    if (session.user.role !== "ADMIN" && user_id !== session.user.id) {
      return NextResponse.json(
        { error: "unauthorized: can only create voice profiles for yourself" },
        { status: 403 }
      );
    }

    // Validate that the user exists
    const user = await prisma.user.findUnique({
      where: { id: user_id },
    });

    if (!user) {
      return NextResponse.json({ error: "user not found" }, { status: 404 });
    }

    // Save the audio file
    const fileName = `voice_enrollment_${user_id}_${Date.now()}.wav`;
    const filePath = path.join(process.cwd(), "public", "Audio", fileName);
    const webPath = `/Audio/${fileName}`;

    try {
      // Ensure the Audio directory exists
      const audioDir = path.join(process.cwd(), "public", "Audio");
      if (!fs.existsSync(audioDir)) {
        fs.mkdirSync(audioDir, { recursive: true });
      }

      // Convert File to buffer and write to file
      const audioBuffer = Buffer.from(await file.arrayBuffer());
      await writeFile(filePath, audioBuffer);
      console.log(`Audio file saved to: ${filePath}`);

      // Verify the file was written
      if (!fs.existsSync(filePath)) {
        throw new Error("Failed to verify audio file was written");
      }

      console.log(`File size: ${fs.statSync(filePath).size} bytes`);
    } catch (error) {
      console.error("Error saving audio file:", error);
      return NextResponse.json(
        { error: "Failed to save audio file" },
        { status: 500 }
      );
    }

    // Enroll with the speaker diarization model
    try {
      console.log(`Sending enrollment request to voice service`);
      
      // Create form data to send the file
      const voiceFormData = new FormData();
      voiceFormData.append('user_id', user.userId.toString());
      voiceFormData.append('file', new Blob([await file.arrayBuffer()], { type: 'audio/wav' }), fileName);

      const response = await axios.post(
        `${process.env.VOICE_AUTH_API_URL || 'http://localhost:8000'}/enroll`,
        voiceFormData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
      );
      console.log("Voice service response:", response.data);

      return NextResponse.json(
        {
          success: true,
          message: "Voice profile enrolled successfully",
          audioPath: webPath,
        },
        { status: 201 }
      );
    } catch (error) {
      if (axios.isAxiosError(error) && error.response) {
        console.error("Voice service enrollment error:", error.response.data);
        return NextResponse.json(
          {
            error: "Failed to enroll voice profile",
            details: error.response.data,
          },
          { status: error.response.status }
        );
      }
      console.error("Error in enroll request:", error);
      throw error;
    }
  } catch (err) {
    console.error("Error in voice profile enrollment:", err);
    return NextResponse.json(
      { error: "error enrolling voice profile" },
      { status: 500 }
    );
  }
};

