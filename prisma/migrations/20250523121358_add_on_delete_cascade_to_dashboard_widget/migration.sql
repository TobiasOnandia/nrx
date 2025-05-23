-- DropForeignKey
ALTER TABLE "DashboardWidget" DROP CONSTRAINT "DashboardWidget_dashboardId_fkey";

-- DropForeignKey
ALTER TABLE "DashboardWidget" DROP CONSTRAINT "DashboardWidget_widgetId_fkey";

-- AddForeignKey
ALTER TABLE "DashboardWidget" ADD CONSTRAINT "DashboardWidget_dashboardId_fkey" FOREIGN KEY ("dashboardId") REFERENCES "Dashboard"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DashboardWidget" ADD CONSTRAINT "DashboardWidget_widgetId_fkey" FOREIGN KEY ("widgetId") REFERENCES "Widget"("id") ON DELETE CASCADE ON UPDATE CASCADE;
