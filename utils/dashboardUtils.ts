import { DashboardWidget, Widget } from "@/app/generated/prisma";
import prisma from "@/lib/prisma";
import { DashboardWidgetData } from "@/store/widgets.store";
import type { WidgetTemplateData } from "@/types/widgets/widgets.types";

export type DashboardWidgetWithRelations = DashboardWidget & {
  widget:
    | (Widget & {
        widgetTemplate: WidgetTemplateData;
      })
    | null;
};

export async function verifyDashboardOwnership(
  dashboardId: string,
  userId: string
): Promise<boolean> {
  try {
    const existingDashboard = await prisma.dashboard.findUnique({
      where: { id: dashboardId, userId: userId },
    });
    return !!existingDashboard;
  } catch (error) {
    console.error("Error verifying dashboard ownership:", error);
    return false;
  }
}

export async function processIncomingWidgets(
  widgets: Array<{
    id: string;
    widgetId?: string;
    widgetTemplateId?: string;
    [key: string]: any;
  }>,
  userId: string
): Promise<{ map: Map<string, string>; error?: string }> {
  console.log("Procesando widgets:", JSON.stringify(widgets, null, 2));

  const dashboardWidgetIdToWidgetIdMap = new Map<string, string>();

  if (!widgets || widgets.length === 0) {
    console.error("No hay widgets para procesar");
    return {
      map: dashboardWidgetIdToWidgetIdMap,
      error: "No hay widgets para procesar",
    };
  }

  const existingWidgets = widgets.filter((w) => w.widgetId);
  const newWidgetsWithTemplate = widgets.filter(
    (w) => !w.widgetId && w.widgetTemplateId
  );
  const unprocessableWidgets = widgets.filter(
    (w) => !w.widgetId && !w.widgetTemplateId
  );

  console.log(
    `Widgets existentes: ${existingWidgets.length}, nuevos con plantilla: ${newWidgetsWithTemplate.length}, sin procesar: ${unprocessableWidgets.length}`
  );

  if (unprocessableWidgets.length > 0) {
    console.error(
      "Hay widgets que no tienen widgetId ni widgetTemplateId:",
      JSON.stringify(unprocessableWidgets, null, 2)
    );
    return {
      map: dashboardWidgetIdToWidgetIdMap,
      error: "Algunos widgets no tienen datos suficientes para ser procesados",
    };
  }

  for (const widget of existingWidgets) {
    console.log(
      `Procesando widget existente con id: ${widget.id}, widgetId: ${widget.widgetId}`
    );
    dashboardWidgetIdToWidgetIdMap.set(widget.id, widget.widgetId!);
  }

  for (const widget of newWidgetsWithTemplate) {
    console.log(
      `Procesando nuevo widget con templateId: ${widget.widgetTemplateId}`
    );

    try {
      const existingWidgetForTemplate = await prisma.widget.findFirst({
        where: {
          templateId: widget.widgetTemplateId,
          userId: userId,
        },
      });

      if (existingWidgetForTemplate) {
        console.log(
          `Widget encontrado para plantilla ${widget.widgetTemplateId}: ${existingWidgetForTemplate.id}`
        );
        dashboardWidgetIdToWidgetIdMap.set(
          widget.id,
          existingWidgetForTemplate.id
        );
      } else {
        // Si no existe, crear uno nuevo basado en la plantilla
        const template = await prisma.widgetTemplates.findUnique({
          where: { id: widget.widgetTemplateId },
        });

        if (!template) {
          console.error(
            `Widget template con ID ${widget.widgetTemplateId} no encontrado.`
          );
          return {
            map: dashboardWidgetIdToWidgetIdMap,
            error: `Widget template con ID ${widget.widgetTemplateId} no encontrado.`,
          };
        }

        console.log(
          `Creando nuevo widget para plantilla ${widget.widgetTemplateId} (${template.title})`
        );

        const newWidget = await prisma.widget.create({
          data: {
            name: template.title,
            userId: userId,
            config: template.defaultConfig,
            layout: template.defaultLayout,
            templateId: template.id,
          },
        });

        console.log(`Widget creado con ID: ${newWidget.id}`);
        dashboardWidgetIdToWidgetIdMap.set(widget.id, newWidget.id);
      }
    } catch (error) {
      console.error(
        `Error al procesar widget con templateId ${widget.widgetTemplateId}:`,
        error
      );
      return {
        map: dashboardWidgetIdToWidgetIdMap,
        error: `Error al procesar widget: ${
          error instanceof Error ? error.message : "Error desconocido"
        }`,
      };
    }
  }

  console.log(
    "Mapa final de dashboardWidgetId -> widgetId:",
    Array.from(dashboardWidgetIdToWidgetIdMap.entries())
      .map(([k, v]) => `${k} -> ${v}`)
      .join(", ")
  );

  return { map: dashboardWidgetIdToWidgetIdMap };
}

export function prepareDashboardWidgetOperations(
  incomingDashboardWidgetData: Array<any>,
  existingDashboardWidgets: Array<{ id: string; widgetId: string }>
) {
  const operations: any[] = [];

  const existingWidgetMap = new Map(
    existingDashboardWidgets.map((dw) => [dw.widgetId, dw.id])
  );

  const existingWidgetIds = existingDashboardWidgets.map((dw) => dw.widgetId);

  const dashboardWidgetsToCreate = incomingDashboardWidgetData.filter(
    (dw) => !existingWidgetIds.includes(dw.widgetId)
  );

  const dashboardWidgetsToUpdate = incomingDashboardWidgetData.filter((dw) =>
    existingWidgetIds.includes(dw.widgetId)
  );

  if (dashboardWidgetsToCreate.length > 0) {
    operations.push(
      prisma.dashboardWidget.createMany({
        data: dashboardWidgetsToCreate,
        skipDuplicates: true,
      })
    );
  }

  for (const widgetData of dashboardWidgetsToUpdate) {
    const dashboardWidgetId = existingWidgetMap.get(widgetData.widgetId);
    if (dashboardWidgetId) {
      operations.push(
        prisma.dashboardWidget.update({
          where: { id: dashboardWidgetId },
          data: {
            x: widgetData.x,
            y: widgetData.y,
            w: widgetData.w,
            h: widgetData.h,
            instanceConfig: widgetData.instanceConfig,
          },
        })
      );
    }
  }

  const widgetsToDelete = existingWidgetIds.filter(
    (dbWidgetId) =>
      !incomingDashboardWidgetData.some((w) => w.widgetId === dbWidgetId)
  );

  if (widgetsToDelete.length > 0) {
    const dashboardWidgetIdsToDelete = widgetsToDelete
      .map((widgetId) => existingWidgetMap.get(widgetId))
      .filter(Boolean) as string[];

    if (dashboardWidgetIdsToDelete.length > 0) {
      operations.push(
        prisma.dashboardWidget.deleteMany({
          where: {
            id: { in: dashboardWidgetIdsToDelete },
          },
        })
      );
    }
  }

  return operations;
}

export function processDashboardWidgets(
  prismaDashboardWidgets: DashboardWidgetWithRelations[]
): DashboardWidgetData[] {
  return prismaDashboardWidgets
    .map((dw) => {
      if (!dw.widget || !dw.widget.widgetTemplate) {
        console.warn(
          `DashboardWidget con ID ${dw.id} o su Widget/WidgetTemplate asociado falta o es inválido. Se omitirá.`
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
        instanceConfig: dw.instanceConfig
          ? (dw.instanceConfig as Record<string, string>)
          : {},
        widgetTemplateId: dw.widget.widgetTemplate.id,
      };
    })
    .filter(Boolean) as DashboardWidgetData[];
}
