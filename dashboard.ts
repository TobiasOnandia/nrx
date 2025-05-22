"use server";

import { getCurrentUser } from "@/helper/getCurrentUser";
import prisma from "@/lib/prisma";
import {
  DashboardSchema,
  ResponseCreateDashboard,
  ResponseDeleteWidget,
  SaveDashboardLayoutRequestSchema,
  WidgetDeleteSchema,
} from "@/types/schema/schema.dashboard";
import { verifyDashboardOwnership } from "@/utils/dashboardUtils";
import { validateAndExtract } from "@/utils/validationUtils";
import { revalidatePath } from "next/cache";

export async function createDashboard(request: {
  name: string;
}): Promise<ResponseCreateDashboard> {
  const validationResult = validateAndExtract(DashboardSchema, request);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    };
  }

  const validatedData = validationResult.data;
  const dashboardName = validatedData.name;

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return {
      success: false,
      message: "User not found",
    };
  }

  const userId = currentUser.id;

  try {
    const dashboard = await prisma.dashboard.create({
      data: {
        name: dashboardName,
        userId: userId,
      },
    });
    return {
      success: true,
      dashboard: dashboard,
      message: "Dashboard created successfully",
    };
  } catch (error) {
    console.error("Error creating dashboard: ", error);
    return {
      success: false,
      message: "An error occurred while creating dashboard",
    };
  }
}

export async function addWidgetToDashboard(request: {
  dashboardId: string;
  widgetTypeId: string;
}) {
  const validationResult = validateAndExtract(
    SaveDashboardLayoutRequestSchema,
    request
  );

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    };
  }

  const { dashboardId } = validationResult.data;

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return {
      success: false,
      message: "User not found",
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
}


export async function DeleteWidget(request: { id: string } ): Promise<ResponseDeleteWidget> {
  const validationResult = validateAndExtract(WidgetDeleteSchema, request);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    };
  }

  const dashboardWidgetInstanceId = validationResult.data.id; 

  const currentUser = await getCurrentUser();

  if (!currentUser) {
    return {
      success: false,
      message: "Authenthication required",
    };
  }
  const userId = currentUser.id;

  try {
    const dashboardWidgetToDelete = await prisma.dashboardWidget.findUnique({
      where: { id: dashboardWidgetInstanceId },
      select: { dashboardId: true, widgetId: true },
    });

    if (!dashboardWidgetToDelete) {
      return {
        success: false,
        message: "Widget not found in dashboard ",
      };
    }

    const isOwnerOfDashboard = await verifyDashboardOwnership(
      dashboardWidgetToDelete.dashboardId,
      userId
    );

    if (!isOwnerOfDashboard) {
      return {
        success: false,
        message: "Not Authorizated.",
      };
    }

    await prisma.dashboardWidget.delete({
      where: { id: dashboardWidgetInstanceId }, 
    });

    revalidatePath(`/dashboard/${dashboardWidgetInstanceId}/edit`); 
    revalidatePath(`/dashboard`)

    return {
      success: true,
      message: "Widget deleted.",
    };
  } catch (error: any) {
    console.error(" A ocurred Error in deleted widget ", error);
    return {
      success: false,
      message: "A ocurred Error in deleted widget",
    };
  }
}