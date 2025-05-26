import { DashboardCanvas } from "@/components/dashboard/create/DashboardCanvas";
import prisma from "@/lib/prisma";
import {
  DashboardWidgetWithRelations,
  processDashboardWidgets,
} from "@/utils/dashboardUtils";

export default async function Home() {
  const defaultDashboard = await prisma.dashboard.findFirst({
    where: {
      isDefault: true,
    },
    include: {
      dashboardWidgets: {
        include: {
          widget: {
            include: {
              widgetTemplate: true,
            },
          },
        },
      },
    },
  });

  const initialDashboardWidgets = processDashboardWidgets(
    (defaultDashboard?.dashboardWidgets as DashboardWidgetWithRelations[]) ?? []
  );

  return <DashboardCanvas initialWidgets={initialDashboardWidgets} />;
}
