/*
  Warnings:

  - Added the required column `defaultConfig` to the `WidgetTemplates` table without a default value. This is not possible if the table is not empty.
  - Added the required column `defaultLayout` to the `WidgetTemplates` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "WidgetTemplates" ADD COLUMN     "defaultConfig" JSONB NOT NULL,
ADD COLUMN     "defaultLayout" JSONB NOT NULL;
