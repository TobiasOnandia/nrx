"use server";

import { getCurrentUser } from "@/helper/getCurrentUser";
import {
  SaveDashboardLayoutRequestSchema,
  SaveDashboardLayoutResponse,
} from "@/types/schema/schema.dashboard";
import {
  verifyDashboardOwnership,
  processIncomingWidgets,
  prepareDashboardWidgetOperations,
} from "@/utils/dashboardUtils";
import prisma from "@/lib/prisma";
import { z } from "zod";
import { validateAndExtract } from "@/utils/validationUtils";

export async function saveDashboardLayout(
  request: z.infer<typeof SaveDashboardLayoutRequestSchema>
): Promise<SaveDashboardLayoutResponse> {
  const validationResult = validateAndExtract(
    SaveDashboardLayoutRequestSchema,
    request
  );
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

  const isOwner = await verifyDashboardOwnership(dashboardId, userId);
  if (!isOwner) {
    return {
      success: false,
      message: "Dashboard not found or not owned by user",
    };
  }

  let existingDashboardWidgets: Array<{ id: string; widgetId: string }> = [];
  try {
    existingDashboardWidgets = await prisma.dashboardWidget.findMany({
      where: { dashboardId },
      select: { id: true, widgetId: true },
    });
  } catch (error) {
    console.error("Error fetching existing DashboardWidgets:", error);
    return {
      success: false,
      message: "Failed to fetch existing dashboard widgets",
    };
  }

  const { map: templateIdToWidgetIdMap, error: widgetProcessError } =
    await processIncomingWidgets(widgets, userId);

  if (widgetProcessError) {
    return { success: false, message: widgetProcessError };
  }

  const incomingDashboardWidgetData = [];
  for (const widget of widgets) {
    const mappedWidgetId = templateIdToWidgetIdMap.get(widget.id);
    if (!mappedWidgetId) {
      console.error(
        `No se encontró widgetId para el widget con id ${widget.id}`
      );
      return {
        success: false,
        message: `Error al procesar widget: no se pudo encontrar o crear el widget correspondiente`,
      };
    }

    incomingDashboardWidgetData.push({
      widgetId: mappedWidgetId,
      dashboardId: dashboardId,
      x: widget.x,
      y: widget.y,
      w: widget.w,
      h: widget.h,
      instanceConfig: widget.config,
    });
  }

  const operations = prepareDashboardWidgetOperations(
    dashboardId,
    incomingDashboardWidgetData,
    existingDashboardWidgets
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
