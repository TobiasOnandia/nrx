import { z } from "zod";

export const DashboardSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
});

export const WidgetDeleteSchema = z.object({
  id: z.string().uuid()
})

export type ResponseDeleteWidget = {
  success: boolean;
  message: string;
  dashboard?: CreatedDashboard;
  errors?: z.ZodError<
    z.infer<typeof WidgetDeleteSchema>
  >["formErrors"]["fieldErrors"];
};


export const DashboardWidgetSchema = z.object({
  dashboardId: z.string(),
  widgetId: z.string(),
});



export type CreatedDashboard = {
  id: string;
  name: string;
  userId: string;
  createAt: Date;
  updateAt: Date;
};

export type ResponseCreateDashboard = {
  success: boolean;
  message: string;
  dashboard?: CreatedDashboard;
  errors?: z.ZodError<
    z.infer<typeof DashboardSchema>
  >["formErrors"]["fieldErrors"];
};

export type ResponseDashboardWidget = {
  success: boolean;
  message: string;
  dashboardWidget?: {
    dashboardId: string;
    widgetId: string;
  };
  errors?: z.ZodError<
    z.infer<typeof DashboardWidgetSchema>
  >["formErrors"]["fieldErrors"];
};

export const WidgetDataSchema = z.object({
  id: z.string().uuid(),
  x: z.number().int().min(0),
  y: z.number().int().min(0),
  w: z.number().int().min(1),
  h: z.number().int().min(1),
  config: z.any().optional(),
});

export const SaveDashboardLayoutRequestSchema = z.object({
  widgets: z.array(WidgetDataSchema),
  dashboardId: z.string().uuid(),
});

export type SaveDashboardLayoutResponse =
  | {
      success: true;
      message?: string;
      data: z.infer<typeof SaveDashboardLayoutRequestSchema>;
    }
  | {
      success: false;
      message: string;
      errors?: z.ZodError<
        z.infer<typeof SaveDashboardLayoutRequestSchema>
      >["formErrors"]["fieldErrors"];
    };
