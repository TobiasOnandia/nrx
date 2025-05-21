import prisma from "@/lib/prisma";

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
  widgets: Array<{ id: string; [key: string]: any }>,
  userId: string
): Promise<{ map: Map<string, string>; error?: string }> {
  const templateIdToWidgetIdMap = new Map<string, string>();
  const uniqueTemplateIds = new Set(widgets.map((w) => w.id));

  for (const templateId of Array.from(uniqueTemplateIds)) {
    const existingWidgetForTemplate = await prisma.widget.findFirst({
      where: { templateId: templateId, userId: userId },
    });

    if (existingWidgetForTemplate) {
      templateIdToWidgetIdMap.set(templateId, existingWidgetForTemplate.id);
    } else {
      const template = await prisma.widgetTemplates.findUnique({
        where: { id: templateId },
      });

      if (!template) {
        console.error(`Widget template con ID ${templateId} no encontrado.`);
        return {
          map: templateIdToWidgetIdMap,
          error: `Widget template con ID ${templateId} no encontrado.`,
        };
      }

      const newWidget = await prisma.widget.create({
        data: {
          name: template.title,
          userId: userId,
          config: template.defaultConfig,
          layout: template.defaultLayout,
          templateId: template.id,
        },
      });
      templateIdToWidgetIdMap.set(templateId, newWidget.id);
    }
  }
  return { map: templateIdToWidgetIdMap };
}

export function prepareDashboardWidgetOperations(
  dashboardId: string,
  incomingDashboardWidgetData: Array<any>,
  existingWidgetIdsInDashboardWidget: string[]
) {
  const operations: any[] = [];

  const dashboardWidgetsToCreate = incomingDashboardWidgetData.filter(
    (dw) => !existingWidgetIdsInDashboardWidget.includes(dw.widgetId)
  );
  const dashboardWidgetsToUpdate = incomingDashboardWidgetData.filter((dw) =>
    existingWidgetIdsInDashboardWidget.includes(dw.widgetId)
  );

  if (dashboardWidgetsToCreate.length > 0) {
    operations.push(
      prisma.dashboardWidget.createMany({
        data: dashboardWidgetsToCreate,
        skipDuplicates: true,
      })
    );
  }

  if (dashboardWidgetsToUpdate.length > 0) {
    for (const widgetData of dashboardWidgetsToUpdate) {
      operations.push(
        prisma.dashboardWidget.updateMany({
          where: {
            dashboardId: widgetData.dashboardId,
            widgetId: widgetData.widgetId,
          },
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

  const widgetsToDelete = existingWidgetIdsInDashboardWidget.filter(
    (dbWidgetId) =>
      !incomingDashboardWidgetData.some((w) => w.widgetId === dbWidgetId)
  );
  if (widgetsToDelete.length > 0) {
    operations.push(
      prisma.dashboardWidget.deleteMany({
        where: {
          widgetId: { in: widgetsToDelete },
          dashboardId,
        },
      })
    );
  }

  return operations;
}
