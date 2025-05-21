"use server";

import { getCurrentUser } from "@/helper/getCurrentUser";
import prisma from "@/lib/prisma";
import {
  DashboardSchema,
  ResponseCreateDashboard,
  SaveDashboardLayoutRequestSchema,
} from "@/types/schema/schema.dashboard";

export async function createDashboard(request: {
  name: string;
}): Promise<ResponseCreateDashboard> {
  const validationResult = DashboardSchema.safeParse(request);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.errors
      .map((err) => err.message)
      .join(", ");
    const errors = validationResult.error.flatten().fieldErrors;
    return {
      success: false,
      message: errorMessages,
      errors,
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
  const validationResult = SaveDashboardLayoutRequestSchema.safeParse(request);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.errors
      .map((err) => err.message)
      .join(", ");
    const errors = validationResult.error.flatten().fieldErrors;
    return {
      success: false,
      message: errorMessages,
      errors,
    };
  }
}
