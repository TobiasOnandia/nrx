"use server";

import { getCurrentUser } from "@/helper/getCurrentUser";
import prisma from "@/lib/prisma";
import {
  DashboardSchema,
  ResponseCreateDashboard,
  SaveDashboardLayoutRequestSchema,
} from "@/types/schema/schema.dashboard";
import { verifyDashboardOwnership } from "@/utils/dashboardUtils";
import { validateAndExtract } from "@/utils/validationUtils";

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
