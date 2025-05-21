import { DashboardList } from "@/components/dashboard/list/DashboardList";
import prisma from "@/lib/prisma";

export default async function DashboardListPage() {
  const dashboards = await prisma.dashboard.findMany({
    include: {
      dashboardWidgets: true,
    },
  });

  return <DashboardList dashboards={dashboards} />;
}
