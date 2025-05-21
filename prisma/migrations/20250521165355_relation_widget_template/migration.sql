/*
  Warnings:

  - Added the required column `h` to the `DashboardWidget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `w` to the `DashboardWidget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `x` to the `DashboardWidget` table without a default value. This is not possible if the table is not empty.
  - Added the required column `y` to the `DashboardWidget` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "DashboardWidget" ADD COLUMN     "h" INTEGER NOT NULL,
ADD COLUMN     "instanceConfig" JSONB,
ADD COLUMN     "w" INTEGER NOT NULL,
ADD COLUMN     "x" INTEGER NOT NULL,
ADD COLUMN     "y" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Widget" ADD COLUMN     "templateId" TEXT;

-- AddForeignKey
ALTER TABLE "Widget" ADD CONSTRAINT "Widget_templateId_fkey" FOREIGN KEY ("templateId") REFERENCES "WidgetTemplates"("id") ON DELETE CASCADE ON UPDATE CASCADE;
