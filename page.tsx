import { DashboardCanvas } from "@/components/dashboard/create/DashboardCanvas";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";
import { SaveButton } from "@/components/dashboard/create/SaveButton";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import type { DashboardWidgetData } from "@/store/widgets.store"; 
import { transformDashboardWidgets } from "@/helper/transformDashboardWidgets";

export interface WidgetTemplateData {
  id: string;
  title: string;
  description: string;
  types: string[]; 
  defaultConfig: string; 
  defaultLayout: string;
}


export default async function DashboardEditPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id: dashboardId } = await params;

  const [dashboard, availableWidgets] = await Promise.all([
    prisma.dashboard.findUnique({
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
    }),
    prisma.widgetTemplates.findMany(),
  ]);

  if (!dashboard) {
    redirect("/dashboard");
  }

  const initialDashboardWidgets = transformDashboardWidgets(
    dashboard.dashboardWidgets
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
