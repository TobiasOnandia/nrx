// app/dashboard/[id]/edit/page.tsx
import { DashboardCanvas } from "@/components/dashboard/create/DashboardCanvas";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";
import { SaveButton } from "@/components/dashboard/create/SaveButton"; // Asegúrate de tener este componente
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";
import type { DashboardWidgetData } from "@/store/widgets.store"; // Importa la interfaz del store

// Interfaz para los templates de widgets disponibles
export interface WidgetTemplateData {
  id: string;
  title: string;
  description: string;
  types: string[]; // Asegúrate de que esto sea un array de strings
  defaultConfig: string; // JSON string
  defaultLayout: string; // JSON string
}

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

  const initialDashboardWidgets: DashboardWidgetData[] =
    dashboard.dashboardWidgets
      .map((dw) => {
        if (!dw.widget || !dw.widget.widgetTemplate) {
          console.warn(
            `DashboardWidget ${dw.id} missing linked Widget or WidgetTemplate.`
          );
          return null;
        }

        return {
          id: dw.id,
          widgetId: dw.widgetId,
          types: dw.widget.widgetTemplate.types,
          x: dw.x,
          y: dw.y,
          w: dw.w,
          h: dw.h,
          instanceConfig: dw.instanceConfig as Record<string, string>,
          widgetTemplateId: dw.widget.widgetTemplate.id,
        };
      })
      .filter(Boolean) as DashboardWidgetData[];

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
