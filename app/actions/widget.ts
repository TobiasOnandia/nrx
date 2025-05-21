"use server";

import { getCurrentUser } from "@/helper/getCurrentUser";
import prisma from "@/lib/prisma";
import {
  SaveDashboardLayoutRequestSchema,
  SaveDashboardLayoutResponse,
} from "@/types/schema/schema.dashboard";
import { z } from "zod";

export async function saveDashboardLayout(
  request: z.infer<typeof SaveDashboardLayoutRequestSchema>
): Promise<SaveDashboardLayoutResponse> {
  const validation = SaveDashboardLayoutRequestSchema.safeParse(request);
  if (!validation.success) {
    console.error("Validation failed:", validation.error.flatten().fieldErrors);
    return {
      success: false,
      message: "Invalid dashboard layout data",
      errors: validation.error.flatten().fieldErrors,
    };
  }

  const { widgets, dashboardId } = validation.data;

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return {
      success: false,
      message: "User not found",
    };
  }

  const userId = currentUser.id;

  try {
    const existingDashboard = await prisma.dashboard.findUnique({
      where: { id: dashboardId, userId: userId },
    });
    if (!existingDashboard) {
      return {
        success: false,
        message: "Dashboard not found or not owned by user",
      };
    }
  } catch (error) {
    console.error("Error verifying dashboard ownership:", error);
    return { success: false, message: "Failed to verify dashboard ownership" };
  }

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
          success: false,
          message: `Widget template con ID ${templateId} no encontrado.`,
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

  const incomingDashboardWidgetData = widgets.map((w) => ({
    widgetId: templateIdToWidgetIdMap.get(w.id)!,
    dashboardId: dashboardId,
    x: w.x,
    y: w.y,
    w: w.w,
    h: w.h,
    instanceConfig: w.config,
  }));

  const dashboardWidgetsToCreate = incomingDashboardWidgetData.filter(
    (dw) => !existingWidgetIdsInDashboardWidget.includes(dw.widgetId)
  );
  const dashboardWidgetsToUpdate = incomingDashboardWidgetData.filter((dw) =>
    existingWidgetIdsInDashboardWidget.includes(dw.widgetId)
  );

  try {
    const operations: any[] = [];

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

    const results = await prisma.$transaction(operations);

    return {
      success: true,
      message: "Dashboard layout saved successfully",
      data: results,
    };
  } catch (error) {
    console.error("Error saving dashboard layout:", error);
    return {
      success: false,
      message: "Failed to save dashboard layout",
    };
  }
}
