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
  await prisma.voiceProfile.deleteMany();
  await prisma.user.deleteMany();

  console.log("Database cleanup completed. Starting seeding process...");

  // Set the sequence to start from 5000
  await prisma.$executeRaw`ALTER SEQUENCE "users_userId_seq" RESTART WITH 5000;`;

  // Create admin user with a fixed salt for development
  // const salt = "$2a$10$CwTycUXWue0Thq9StjUM0u"; // Fixed salt for development
  // const hashedPassword = await bcrypt.hash("admin123", salt);
  const hashedPassword = "admin123"; //Test time password

  // Function to process and convert image to base64
  const processImage = async (imagePath) => {
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
    } catch (err) {
      console.error(`Error processing image ${imagePath}:`, err);
      return null;
    }
  };

  // Create admin user
  await prisma.user.upsert({
    where: { userId: 42069 },
    update: {
      password: hashedPassword,
    },
    create: {
      name: "Admin User",
      password: hashedPassword,
      role: "ADMIN",
      settings: {
        create: {
          language: "en",
          voiceEnabled: true,
          autoSuggestEnabled: true,
        },
      },
    },
  });

  // Create test users
  const testUsers = [
    {
      name: "Rahul Sharma",
      password: "test123",
      role: "USER",
      settings: {
        language: "en",
        voiceEnabled: false,
        autoSuggestEnabled: true,
      },
    },
    {
      name: "Priya Patel",
      password: "test123",
      role: "USER",
      settings: {
        language: "en",
        voiceEnabled: true,
        autoSuggestEnabled: false,
      },
    },
    {
      name: "Amit Singh",
      password: "test123",
      role: "USER",
      settings: {
        language: "en",
        voiceEnabled: true,
        autoSuggestEnabled: true,
      },
    },
    {
      name: "Neha Gupta",
      password: "test123",
      role: "USER",
      settings: {
        language: "en",
        voiceEnabled: false,
        autoSuggestEnabled: false,
      },
    },
    {
      name: "Vikram Reddy",
      password: "test123",
      role: "USER",
      settings: {
        language: "en",
        voiceEnabled: true,
        autoSuggestEnabled: true,
      },
    },
  ];

  // Create test users with profile pictures
  for (const [index, user] of testUsers.entries()) {
    const imagePath = path.join(
      process.cwd(),
      "public",
      "pfp",
      `user${index + 1}.png`
    );
    const profilePicture = await processImage(imagePath);

    const createdUser = await prisma.user.create({
      data: {
        name: user.name,
        password: user.password,
        role: user.role,
        profilePicture,
        settings: {
          create: user.settings,
        },
      },
    });

    // Create sample dashboard for the user
    await prisma.dashboard.create({
      data: {
        userId: createdUser.id,
        widgets: {
          create: [
            {
              title: "User Statistics",
              description: "Overview of user activity",
              sqlQuery:
                "SELECT role, COUNT(*) as count FROM users GROUP BY role",
              chartType: "table",
              chartOptions: {
                title: "User Distribution by Role",
              },
            },
          ],
        },
      },
    });

    // Create sample query history for the user
    await prisma.queryHistory.create({
      data: {
        userId: createdUser.id,
        userQuery: "Show me the number of users by role",
        sqlQuery: "SELECT role, COUNT(*) as count FROM users GROUP BY role",
        successful: true,
        executionTime: 120,
        visualization: {
          create: {
            chartType: "table",
            title: "User Distribution",
            chartOptions: {
              columns: ["role", "count"],
            },
          },
        },
      },
    });
  }

  // Create sample database metadata
  await prisma.databaseMetadata.upsert({
    where: { tableName: "users" },
    update: {},
    create: {
      tableName: "users",
      description: "Stores user information and authentication details",
      isVisible: true,
      columns: {
        create: [
          {
            columnName: "id",
            dataType: "String",
            description: "Unique identifier for the user",
            isIdentifier: true,
            isSensitive: false,
          },
          {
            columnName: "name",
            dataType: "String",
            description: "Full name of the user",
            isIdentifier: false,
            isSensitive: true,
          },
          {
            columnName: "role",
            dataType: "String",
            description: "User role (ADMIN/USER)",
            isIdentifier: false,
            isSensitive: false,
          },
        ],
      },
    },
  });

  console.log("Seed data created successfully");
}

main()
  .catch((e) => {
    console.error("Error seeding database:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
