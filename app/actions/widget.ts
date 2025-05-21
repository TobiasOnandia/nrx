// app/actions/dashboardActions.ts
"use server";

import prisma from "@/lib/prisma";
import { verifyAuthToken } from "@/utils/verifyAuthToken";
import { cookies } from "next/headers";
import { z } from "zod";

const AUTH_TOKEN_COOKIE_NAME = "auth_token";

const WidgetDataSchema = z.object({
  id: z.string().uuid(),
  x: z.number().int().min(0),
  y: z.number().int().min(0),
  w: z.number().int().min(1),
  h: z.number().int().min(1),
  config: z.any().optional(),
});

const SaveDashboardLayoutRequestSchema = z.object({
  widgets: z.array(WidgetDataSchema),
  dashboardId: z.string().uuid(),
});

type SaveDashboardLayoutResponse =
  | { success: true; message: string; data: any[] }
  | { success: false; message: string; errors?: z.ZodError };

export async function saveDashboardLayout(
  request: z.infer<typeof SaveDashboardLayoutRequestSchema>
): Promise<SaveDashboardLayoutResponse> {
  // 1. Validar la solicitud
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

  let authPayload;
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get(AUTH_TOKEN_COOKIE_NAME);
    authPayload = await verifyAuthToken(token?.value);
  } catch (error) {
    console.error("Token verification failed:", error);
    return { success: false, message: "Invalid token" };
  }

  if (!authPayload.success || !authPayload.payload?.userId) {
    return {
      success: false,
      message: authPayload.message || "User ID not found in token",
    };
  }

  const userId = authPayload.payload.userId;

  try {
    const existingDashboard = await prisma.dashboard.findUnique({
      where: { id: dashboardId, userId: userId },
    });
    if (!existingDashboard) {
      return { success: false, message: "Dashboard not found or not owned by user" };
    }
  } catch (error) {
    console.error("Error verifying dashboard ownership:", error);
    return { success: false, message: "Failed to verify dashboard ownership" };
  }

  let existingWidgetIds: string[] = [];
  try {
    existingWidgetIds = (
      await prisma.dashboardWidget.findMany({
        where: { dashboardId },
        select: { id: true },
      })
    ).map((w) => w.id);
  } catch (error) {
    console.error("Error fetching existing widget IDs:", error);
    return { success: false, message: "Failed to fetch existing widget IDs" };
  }

  const widgetsToCreate = widgets.filter((w) => !existingWidgetIds.includes(w.id));
  const widgetsToUpdate = widgets.filter((w) => existingWidgetIds.includes(w.id));

  try {
    const operations: any[] = [];

    if (widgetsToCreate.length > 0) {
      operations.push(
        prisma.dashboardWidget.createMany({
          data: widgetsToCreate.map((widget) => ({
            id: widget.id, 
            dashboardId,
            widgetId: widget.id,  
            x: widget.x,
            y: widget.y,
            w: widget.w,
            h: widget.h,
            config: widget.config, 
          })),
          skipDuplicates: true,
        })
      );
    }

    if (widgetsToUpdate.length > 0) {
      operations.push(
        prisma.dashboardWidget.updateMany({
          where: {
            id: { in: widgetsToUpdate.map((w) => w.id) },
            dashboardId,
          },
          data: widgetsToUpdate.map((widget) => ({
            x: widget.x,
            y: widget.y,
            w: widget.w,
            h: widget.h,
            config: widget.config, // No es necesario stringificar con Prisma
          })),
        })
      );
    }

    // 6c. Eliminar widgets que ya no están en el layout
    const widgetsToDelete = existingWidgetIds.filter(dbId => !widgets.some(w => w.id === dbId));
    if (widgetsToDelete.length > 0) {
        operations.push(
            prisma.dashboardWidget.deleteMany({
                where: {
                    id: { in: widgetsToDelete },
                    dashboardId
                }
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
      // Puedes añadir más detalles del error si es necesario
    };
  }
}