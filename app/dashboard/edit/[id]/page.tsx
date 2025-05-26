import { DashboardCanvas } from "@/components/dashboard/create/DashboardCanvas";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";
import { SaveButton } from "@/components/dashboard/create/SaveButton";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import {
  DashboardWidgetWithRelations,
  processDashboardWidgets,
} from "@/utils/dashboardUtils";
import { WidgetTemplateData } from "@/types/widgets/widgets.types";

export default async function DashboardEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const dashboardId = (await params).id;

  const dashboard = await prisma.dashboard.findUnique({
    where: {
      id: dashboardId,
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

  const availableWidgets: WidgetTemplateData[] =
    await prisma.widgetTemplates.findMany();

  if (!dashboard) {
    redirect("/dashboard");
  }

  const initialDashboardWidgets = processDashboardWidgets(
    dashboard.dashboardWidgets as DashboardWidgetWithRelations[]
  );

  return (
    <main className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6 relative">
      <WidgetsSidebar availableWidgets={availableWidgets} />
      <DashboardCanvas initialWidgets={initialDashboardWidgets} />

      <div className="fixed bottom-6 right-6 z-50">
        <SaveButton />
      </div>
    </main>
  );
}
