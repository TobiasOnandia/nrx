"use server";

import { getCurrentUser } from "@/helper/getCurrentUser";
import prisma from "@/lib/prisma";
import {
  DashboardSchema,
  ResponseCreateDashboard,
} from "@/types/schema/schema.dashboard";
import { z } from "zod";

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

const WidgetSaveSchema = z.object({
  id: z.string().uuid(), // ID del DashboardWidget (el que está en la DB)
  typeId: z.string(), // El typeId del widget (ej. 'price-chart')
  x: z.number().int().min(0),
  y: z.number().int().min(0),
  w: z.number().int().min(1),
  h: z.number().int().min(1),
  config: z.any().optional(), // Configuración del widget, puede ser un JSON (se stringifica)
});

// Esquema para la validación de la solicitud completa de guardado
const SaveDashboardLayoutRequestSchema = z.object({
  dashboardId: z.string().uuid(),
  widgets: z.array(WidgetSaveSchema),
});

type ResponseSaveDashboardLayout = {
  success: boolean;
  message: string;
  errors?: z.ZodIssue[];
};

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
