import { DashboardWidgetData } from "@/store/widgets.store";

export function transformDashboardWidgets(
  dashboardWidgets: any[]
): DashboardWidgetData[] {
  return dashboardWidgets
    .map((dw) => {
      if (!dw.widget || !dw.widget.widgetTemplate) {
        console.warn(
          `DashboardWidget ${dw.id} missing linked Widget or WidgetTemplate.`
        );
        return null;
      }

      return {
        id: dw.id,
        widgetId: dw.widgetId,
        types: dw.widget.widgetTemplate.types,
        x: dw.x,
        y: dw.y,
        w: dw.w,
        h: dw.h,
        // Asumiendo que instanceConfig se almacena como JSON en la DB
        instanceConfig: dw.instanceConfig,
        widgetTemplateId: dw.widget.widgetTemplate.id,
      };
    })
    .filter(Boolean) as DashboardWidgetData[];
}