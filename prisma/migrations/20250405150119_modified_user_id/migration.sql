/*
  Warnings:

  - The `userId` column on the `users` table would be dropped and recreated. This will lead to data loss if there is data in the column.

*/
-- AlterTable
ALTER TABLE "users" DROP COLUMN "userId",
ADD COLUMN     "userId" SERIAL NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "users_userId_key" ON "users"("userId");
