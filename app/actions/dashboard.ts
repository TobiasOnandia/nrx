'use server';

import { getCurrentUser } from '@/helper/getCurrentUser';
import prisma from '@/lib/prisma';
import {
  DashboardSchema,
  ResponseCreateDashboard,
  ResponseDeleteWidget,
  SaveDashboardLayoutRequestSchema,
  WidgetDeleteSchema,
} from '@/types/schema/schema.dashboard';
import { verifyDashboardOwnership } from '@/utils/dashboardUtils';
import { validateAndExtract } from '@/utils/validationUtils';
import { revalidatePath } from 'next/cache';

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

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
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
      message: 'Dashboard created successfully',
    };
  } catch (error) {
    console.error('Error creating dashboard: ', error);
    return {
      success: false,
      message: 'An error occurred while creating dashboard',
    };
  }
}

export async function addWidgetToDashboard(request: {
  dashboardId: string;
  widgetTypeId: string;
}) {
  const validationResult = validateAndExtract(
    SaveDashboardLayoutRequestSchema,
    request,
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

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
    };
  }

  const userId = currentUser.id;

  const isOwner = await verifyDashboardOwnership(dashboardId, userId);
  if (!isOwner) {
    return {
      success: false,
      message: 'Dashboard not found or not owned by user',
    };
  }
}

export async function DeleteWidget(request: {
  id: string;
}): Promise<ResponseDeleteWidget> {
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

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
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
        message:
          'El widget especificado no se encontró en el layout del dashboard.',
      };
    }

    const isOwnerOfDashboard = await verifyDashboardOwnership(
      dashboardWidgetToDelete.dashboardId,
      userId,
    );

    if (!isOwnerOfDashboard) {
      return {
        success: false,
        message: 'Not authorized: Dashboard not found or not owned by user.',
      };
    }

    await prisma.dashboardWidget.delete({
      where: { id: dashboardWidgetInstanceId },
    });

    revalidatePath(`/dashboard/${dashboardWidgetToDelete.dashboardId}`);
    revalidatePath('/dashboard');

    return {
      success: true,
      message: 'Widget removido del dashboard exitosamente.',
    };
  } catch (error) {
    console.error('Error al remover widget del dashboard: ', error);
    return {
      success: false,
      message: 'Ocurrió un error al remover el widget del dashboard.',
    };
  }
}

export async function deleteDashboard(request: { id: string }) {
  const validationResult = validateAndExtract(WidgetDeleteSchema, request);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    };
  }

  const { id: dashboardId } = validationResult.data;

  const currentUser = await getCurrentUser();

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
    };
  }

  const userId = currentUser.id;

  const isOwner = await verifyDashboardOwnership(dashboardId, userId);
  if (!isOwner) {
    return {
      success: false,
      message: 'Dashboard not found or not owned by user',
    };
  }

  try {
    await prisma.dashboard.delete({
      where: { id: dashboardId },
    });

    revalidatePath(`/dashboard/${dashboardId}`);
    revalidatePath('/dashboard');

    return {
      success: true,
      message: 'Dashboard deleted successfully',
    };
  } catch (error) {
    console.error('Error deleting dashboard: ', error);
    return {
      success: false,
      message: 'An error occurred while deleting dashboard',
    };
  }
}

export async function setDefaultDashboard(request: { id: string }) {
  const validationResult = validateAndExtract(WidgetDeleteSchema, request);

  if (!validationResult.success) {
    return {
      success: false,
      message: validationResult.message,
      errors: validationResult.errors,
    };
  }

  const { id: dashboardId } = validationResult.data;

  const currentUser = await getCurrentUser();

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
    };
  }

  const userId = currentUser.id;

  const isOwner = await verifyDashboardOwnership(dashboardId, userId);
  if (!isOwner) {
    return {
      success: false,
      message: 'Dashboard not found or not owned by user',
    };
  }

  try {
    await prisma.$transaction(async (tx) => {
      await tx.dashboard.updateMany({
        where: {
          userId: userId,
          isDefault: true,
        },
        data: {
          isDefault: false,
        },
      });

      await tx.dashboard.update({
        where: {
          id: dashboardId,
          userId: userId,
        },
        data: {
          isDefault: true,
        },
      });
    });

    revalidatePath(`/dashboard/${dashboardId}`);
    revalidatePath('/dashboard');
    revalidatePath('/');

    return {
      success: true,
      message: 'Dashboard set as default successfully',
    };
  } catch (error) {
    console.error('Error setting default dashboard: ', error);
    return {
      success: false,
      message: 'An error occurred while setting default dashboard',
    };
  }
}

export async function getDashboardForUser() {
  const currentUser = await getCurrentUser();

  if (!currentUser.success) {
    return {
      success: false,
      message: currentUser.message,
    };
  }

  const userId = currentUser.id;

  try {
    let dashboard = await prisma.dashboard.findFirst({
      where: {
        userId: userId,
        isDefault: true,
      },
      include: {
        dashboardWidgets: {
          include: {
            widget: {
              include: {
                widgetTemplate: true,
              },
            },
          },
        },
      },
    });

    if (!dashboard) {
      dashboard = await prisma.dashboard.findFirst({
        where: {
          userId: userId,
        },
        include: {
          dashboardWidgets: {
            include: {
              widget: {
                include: {
                  widgetTemplate: true,
                },
              },
            },
          },
        },
        orderBy: {
          createAt: 'asc',
        },
      });
    }

    if (!dashboard) {
      return {
        success: false,
        message: 'Dashboard not found',
      };
    }

    return {
      success: true,
      dashboard: dashboard,
      message: 'Dashboard retrieved successfully',
    };
  } catch (error) {
    console.error('Error retrieving dashboard: ', error);
    return {
      success: false,
      message: 'An error occurred while retrieving dashboard',
    };
  }
}
