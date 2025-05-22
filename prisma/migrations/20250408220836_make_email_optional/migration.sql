/*
  Warnings:

  - You are about to drop the column `hasVoiceModel` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `voice_profiles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "voice_profiles" DROP CONSTRAINT "voice_profiles_userId_fkey";

-- AlterTable
ALTER TABLE "users" DROP COLUMN "hasVoiceModel",
ALTER COLUMN "email" DROP NOT NULL;

-- DropTable
DROP TABLE "voice_profiles";
