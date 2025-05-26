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

  // 1. Obtener los datos del dashboard y sus DashboardWidgets
  // Necesitamos incluir el 'Widget' real para obtener su 'templateId' y luego el 'WidgetTemplates' para los 'types'
  const dashboard = await prisma.dashboard.findUnique({
    where: {
      id: dashboardId,
    },
    include: {
      dashboardWidgets: {
        include: {
          widget: {
            // Incluimos el modelo Widget relacionado
            include: {
              widgetTemplate: true, // E incluimos el WidgetTemplates relacionado al Widget
            },
          },
        },
      },
    },
  });

  // 2. Obtener los templates de widgets disponibles para la Sidebar
  const availableWidgets: WidgetTemplateData[] =
    await prisma.widgetTemplates.findMany();

  // 3. Manejo de errores
  if (!dashboard) {
    redirect("/dashboard"); // Redirige si el dashboard no existe
  }

  // 4. Transformar los datos de Prisma a la interfaz del frontend (DashboardWidgetData)
  const initialDashboardWidgets: DashboardWidgetData[] =
    dashboard.dashboardWidgets
      .map((dw) => {
        // Asegúrate de que el widget y su template existan antes de acceder a ellos
        if (!dw.widget || !dw.widget.widgetTemplate) {
          console.warn(
            `DashboardWidget ${dw.id} missing linked Widget or WidgetTemplate.`
          );
          // Podrías decidir omitir este widget o manejar el error de otra forma
          return null;
        }

        return {
          id: dw.id, // ID del DashboardWidget en la DB
          widgetId: dw.widgetId, // ID del Widget (instancia de usuario) en la DB
          types: dw.widget.widgetTemplate.types, // Array de strings del WidgetTemplate
          x: dw.x,
          y: dw.y,
          w: dw.w,
          h: dw.h,
          instanceConfig: dw.instanceConfig as Record<string, string>, // Casteo a Record<string, any> para Json
          widgetTemplateId: dw.widget.widgetTemplate.id, // Puedes añadir esto si lo necesitas en el frontend
        };
      })
      .filter(Boolean) as DashboardWidgetData[]; // Filtra los nulos si los hubo y asegura el tipo

  // console.log("Initial Dashboard Widgets:", initialDashboardWidgets); // Para depuración

  return (
    <main className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6 relative">
      <WidgetsSidebar availableWidgets={availableWidgets} />
      <DashboardCanvas initialWidgets={initialDashboardWidgets} />

      {/* Botón de guardar */}
      <div className="fixed bottom-6 right-6 z-50">
        <SaveButton />
      </div>
    </main>
  );
}
