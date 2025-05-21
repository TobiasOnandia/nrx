"use server";

import { getCurrentUser } from "@/helper/getCurrentUser"; // Asegúrate que la ruta sea correcta
import {
  SaveDashboardLayoutRequestSchema,
  SaveDashboardLayoutResponse,
} from "@/types/schema/schema.dashboard";
import {
  validateDashboardLayoutRequest,
  verifyDashboardOwnership,
  processIncomingWidgets,
  prepareDashboardWidgetOperations,
} from "@/utils/dashboardUtils"; // Importa las nuevas funciones
import prisma from "@/lib/prisma";
import { z } from "zod";

export async function saveDashboardLayout(
  request: z.infer<typeof SaveDashboardLayoutRequestSchema>
): Promise<SaveDashboardLayoutResponse> {
  const validationResult = validateDashboardLayoutRequest(request);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.message as string,
      errors: validationResult.errors,
    };
  }

  const { widgets, dashboardId } = validationResult.data;

  const currentUser = await getCurrentUser();
  if (!currentUser) {
    return {
      success: false,
      message: "User not authenticated",
    };
  }
  const userId = currentUser.id;

  // Verificación de propiedad del dashboard
  const isOwner = await verifyDashboardOwnership(dashboardId, userId);
  if (!isOwner) {
    return {
      success: false,
      message: "Dashboard not found or not owned by user",
    };
  }

  // Obtener IDs de widgets existentes en el dashboard
  let existingWidgetIdsInDashboardWidget: string[] = [];
  try {
    existingWidgetIdsInDashboardWidget = (
      await prisma.dashboardWidget.findMany({
        where: { dashboardId },
        select: { widgetId: true },
      })
    ).map((w) => w.widgetId);
  } catch (error) {
    console.error("Error fetching existing DashboardWidget IDs:", error);
    return {
      success: false,
      message: "Failed to fetch existing DashboardWidget IDs",
    };
  }

  // Procesar widgets entrantes (crear/obtener existentes)
  const { map: templateIdToWidgetIdMap, error: widgetProcessError } =
    await processIncomingWidgets(widgets, userId);

  if (widgetProcessError) {
    return { success: false, message: widgetProcessError };
  }

  // Preparar datos para DashboardWidget
  const incomingDashboardWidgetData = widgets.map((w) => ({
    widgetId: templateIdToWidgetIdMap.get(w.id)!,
    dashboardId: dashboardId,
    x: w.x,
    y: w.y,
    w: w.w,
    h: w.h,
    instanceConfig: w.config,
  }));

  // Preparar operaciones de base de datos
  const operations = prepareDashboardWidgetOperations(
    dashboardId,
    incomingDashboardWidgetData,
    existingWidgetIdsInDashboardWidget
  );

  try {
    await prisma.$transaction(operations);
    return {
      success: true,
      message: "Dashboard layout saved successfully",
      data: { widgets, dashboardId },
    };
  } catch (error) {
    console.error("Error saving dashboard layout:", error);
    return {
      success: false,
      message: "Failed to save dashboard layout",
    };
  }
}
