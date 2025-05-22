import { PrismaClient } from "@prisma/client";
import fs from "fs";
import path from "path";
import sharp from "sharp";
// import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  console.log("Starting database cleanup...");

  // Delete all data in reverse order of dependencies
  await prisma.visualization.deleteMany();
  await prisma.queryHistory.deleteMany();
  await prisma.dashboardWidget.deleteMany();
  await prisma.dashboard.deleteMany();
  await prisma.columnMetadata.deleteMany();
  await prisma.databaseMetadata.deleteMany();
  await prisma.userSettings.deleteMany();
  await prisma.user.deleteMany();

  console.log("Database cleanup completed. Starting seeding process...");

  // Set the sequence to start from 5000
  await prisma.$executeRaw`ALTER SEQUENCE "users_userId_seq" RESTART WITH 5000;`;

  // Function to convert image to base64
  const imageToBase64 = async (imagePath) => {
    try {
      const buffer = await fs.promises.readFile(imagePath);
      const resizedBuffer = await sharp(buffer)
        .resize(500, 500, {
          fit: "cover",
          position: "center",
        })
        .png()
        .toBuffer();
      return `data:image/png;base64,${resizedBuffer.toString("base64")}`;
    } catch (error) {
      console.error(`Error processing image ${imagePath}:`, error);
      return null;
    }
  };

  // Read profile pictures from public/pfp folder
  const pfpFolder = path.join(process.cwd(), "public", "pfp");

  // Create admin user with profile picture
  const adminPfpPath = path.join(pfpFolder, "user1.png");
  const adminPfpBase64 = await imageToBase64(adminPfpPath);

  await prisma.user.create({
    data: {
      name: "Rahul Sharma",
      password: "admin123",
      role: "ADMIN",
      profilePicture: adminPfpBase64,
    },
  });

  // Create regular users with profile pictures
  const regularUsers = [
    { name: "Priya Patel", pfp: "user2.png" },
    { name: "Amit Singh", pfp: "user3.png" },
    { name: "Neha Gupta", pfp: "user4.png" },
    { name: "Vikram Reddy", pfp: "user5.png" },
  ];

  for (const user of regularUsers) {
    const pfpPath = path.join(pfpFolder, user.pfp);
    const pfpBase64 = await imageToBase64(pfpPath);

    await prisma.user.create({
      data: {
        name: user.name,
        password: "password123",
        role: "USER",
        profilePicture: pfpBase64,
      },
    });
  }

  console.log("Database seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
