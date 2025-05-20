import { z } from "zod";

export const DashboardSchema = z.object({
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
});

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
