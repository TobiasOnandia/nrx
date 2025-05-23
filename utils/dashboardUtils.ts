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
  widgets: Array<{ id: string; widgetId?: string; widgetTemplateId?: string; [key: string]: any }>,
  userId: string
): Promise<{ map: Map<string, string>; error?: string }> {
  console.log("Procesando widgets:", JSON.stringify(widgets, null, 2));
  
  const dashboardWidgetIdToWidgetIdMap = new Map<string, string>();

  // Verificar que tengamos datos válidos para procesar
  if (!widgets || widgets.length === 0) {
    console.error("No hay widgets para procesar");
    return { 
      map: dashboardWidgetIdToWidgetIdMap,
      error: "No hay widgets para procesar" 
    };
  }

  // Separar widgets que ya tienen widgetId (existentes) de los que necesitan ser creados
  const existingWidgets = widgets.filter(w => w.widgetId);
  const newWidgetsWithTemplate = widgets.filter(w => !w.widgetId && w.widgetTemplateId);
  const unprocessableWidgets = widgets.filter(w => !w.widgetId && !w.widgetTemplateId);
  
  console.log(`Widgets existentes: ${existingWidgets.length}, nuevos con plantilla: ${newWidgetsWithTemplate.length}, sin procesar: ${unprocessableWidgets.length}`);
  
  if (unprocessableWidgets.length > 0) {
    console.error("Hay widgets que no tienen widgetId ni widgetTemplateId:", JSON.stringify(unprocessableWidgets, null, 2));
    return {
      map: dashboardWidgetIdToWidgetIdMap,
      error: "Algunos widgets no tienen datos suficientes para ser procesados"
    };
  }

  // Para widgets existentes, simplemente mapear el ID del dashboardWidget al ID del widget
  for (const widget of existingWidgets) {
    console.log(`Procesando widget existente con id: ${widget.id}, widgetId: ${widget.widgetId}`);
    dashboardWidgetIdToWidgetIdMap.set(widget.id, widget.widgetId!);
  }

  // Para widgets nuevos que tienen widgetTemplateId, crear nuevas instancias
  for (const widget of newWidgetsWithTemplate) {
    console.log(`Procesando nuevo widget con templateId: ${widget.widgetTemplateId}`);
    
    try {
      // Verificar si ya existe un widget para esta plantilla y este usuario
      const existingWidgetForTemplate = await prisma.widget.findFirst({
        where: { 
          templateId: widget.widgetTemplateId, 
          userId: userId 
        },
      });

      if (existingWidgetForTemplate) {
        console.log(`Widget encontrado para plantilla ${widget.widgetTemplateId}: ${existingWidgetForTemplate.id}`);
        dashboardWidgetIdToWidgetIdMap.set(widget.id, existingWidgetForTemplate.id);
      } else {
        // Si no existe, crear uno nuevo basado en la plantilla
        const template = await prisma.widgetTemplates.findUnique({
          where: { id: widget.widgetTemplateId },
        });

        if (!template) {
          console.error(`Widget template con ID ${widget.widgetTemplateId} no encontrado.`);
          return {
            map: dashboardWidgetIdToWidgetIdMap,
            error: `Widget template con ID ${widget.widgetTemplateId} no encontrado.`,
          };
        }

        console.log(`Creando nuevo widget para plantilla ${widget.widgetTemplateId} (${template.title})`);
        
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
      console.error(`Error al procesar widget con templateId ${widget.widgetTemplateId}:`, error);
      return {
        map: dashboardWidgetIdToWidgetIdMap,
        error: `Error al procesar widget: ${error instanceof Error ? error.message : 'Error desconocido'}`,
      };
    }
  }

  console.log("Mapa final de dashboardWidgetId -> widgetId:", 
    Array.from(dashboardWidgetIdToWidgetIdMap.entries())
      .map(([k, v]) => `${k} -> ${v}`)
      .join(', '));
  
  return { map: dashboardWidgetIdToWidgetIdMap };
}

export function prepareDashboardWidgetOperations(
  dashboardId: string,
  incomingDashboardWidgetData: Array<any>,
  existingDashboardWidgets: Array<{ id: string; widgetId: string }>
) {
  const operations: any[] = [];
  
  // Crear un mapa para buscar rápidamente los dashboardWidgets existentes por widgetId
  const existingWidgetMap = new Map(
    existingDashboardWidgets.map(dw => [dw.widgetId, dw.id])
  );
  
  const existingWidgetIds = existingDashboardWidgets.map(dw => dw.widgetId);
  
  // Widgets a crear (no existen en la base de datos)
  const dashboardWidgetsToCreate = incomingDashboardWidgetData.filter(
    dw => !existingWidgetIds.includes(dw.widgetId)
  );
  
  // Widgets a actualizar (ya existen en la base de datos)
  const dashboardWidgetsToUpdate = incomingDashboardWidgetData.filter(
    dw => existingWidgetIds.includes(dw.widgetId)
  );
  
  // Crear nuevos widgets
  if (dashboardWidgetsToCreate.length > 0) {
    operations.push(
      prisma.dashboardWidget.createMany({
        data: dashboardWidgetsToCreate,
        skipDuplicates: true,
      })
    );
  }
  
  // Actualizar widgets existentes usando su ID real
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
  
  // Eliminar widgets que ya no están en el dashboard
  const widgetsToDelete = existingWidgetIds.filter(
    dbWidgetId => !incomingDashboardWidgetData.some(w => w.widgetId === dbWidgetId)
  );
  
  if (widgetsToDelete.length > 0) {
    const dashboardWidgetIdsToDelete = widgetsToDelete
      .map(widgetId => existingWidgetMap.get(widgetId))
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
