/*
  Warnings:

  - You are about to drop the `column_metadata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dashboard_widgets` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `dashboards` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `database_metadata` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `query_history` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_settings` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `users` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `visualizations` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "column_metadata" DROP CONSTRAINT "column_metadata_databaseMetadataId_fkey";

-- DropForeignKey
ALTER TABLE "dashboard_widgets" DROP CONSTRAINT "dashboard_widgets_dashboardId_fkey";

-- DropForeignKey
ALTER TABLE "dashboards" DROP CONSTRAINT "dashboards_userId_fkey";

-- DropForeignKey
ALTER TABLE "query_history" DROP CONSTRAINT "query_history_userId_fkey";

-- DropForeignKey
ALTER TABLE "user_settings" DROP CONSTRAINT "user_settings_userId_fkey";

-- DropForeignKey
ALTER TABLE "visualizations" DROP CONSTRAINT "visualizations_queryId_fkey";

-- DropTable
DROP TABLE "column_metadata";

-- DropTable
DROP TABLE "dashboard_widgets";

-- DropTable
DROP TABLE "dashboards";

-- DropTable
DROP TABLE "database_metadata";

-- DropTable
DROP TABLE "query_history";

-- DropTable
DROP TABLE "user_settings";

-- DropTable
DROP TABLE "users";

-- DropTable
DROP TABLE "visualizations";

-- DropEnum
DROP TYPE "UserRole";
