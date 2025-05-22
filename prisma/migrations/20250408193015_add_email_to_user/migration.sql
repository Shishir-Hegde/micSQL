/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN "email" TEXT;

-- Update existing users with a placeholder email
UPDATE "users" SET "email" = CONCAT('user_', id, '@placeholder.com') WHERE "email" IS NULL;

-- Now make the column NOT NULL
ALTER TABLE "users" ALTER COLUMN "email" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_email_key" ON "users"("email");
