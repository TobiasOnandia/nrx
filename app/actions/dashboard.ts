"use server";

import prisma from "@/lib/prisma";
import {
  DashboardSchema,
  ResponseCreateDashboard,
} from "@/types/schema/schema.dashboard";
import { verifyAuthToken } from "@/utils/verifyAuthToken";
import { cookies } from "next/headers";

const AUTH_TOKEN_COOKIE_NAME = "auth_token";

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

  let authPayload;
  try {
    const cookiesStore = await cookies();
    const token = cookiesStore.get(AUTH_TOKEN_COOKIE_NAME);
    authPayload = await verifyAuthToken(token?.value);
  } catch (error) {
    console.error("Token verification failed: ", error);
    return { success: false, message: "Invalid token" };
  }

  if (!authPayload.success) {
    return { success: false, message: authPayload.message || "Invalid token" };
  }

  if (!authPayload.payload?.userId) {
    return {
      success: false,
      message: "User ID not found in token payload",
    };
  }

  const userId = authPayload.payload.userId;

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
