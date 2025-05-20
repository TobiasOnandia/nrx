"use client";
import DashboardCanvas from "@/components/dashboard/create/DashboardCanvas";
import { useRef, useCallback } from "react";
import { getWidgetInfoById } from "@/lib/widgets";
import { useWidgetsStore } from "@/store/widgets.store";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";

const DEFAULT_WIDGET_GRID_W = 4;
const DEFAULT_WIDGET_GRID_H = 6;

interface DashboardWidget {
  id: string;
  typeId: string;
  x: number;
  y: number;
  w: number;
  h: number;
  config?: any;
}

export default function DashboardCustomizerPage() {
  const addWidget = useWidgetsStore((state) => state.addWidget);
  const updateWidgetsLayout = useWidgetsStore(
    (state) => state.updateWidgetsLayout
  );

  const handleAddWidgetFromSidebar = useCallback(
    (widgetTypeId: string) => {
      const newWidgetInstanceId = `${widgetTypeId}-${Date.now()}`;

      let newX = 0;
      let newY = 0;

      addWidget({
        id: newWidgetInstanceId,
        typeId: widgetTypeId,
        x: newX,
        y: newY,
        w: DEFAULT_WIDGET_GRID_W,
        h: DEFAULT_WIDGET_GRID_H,
        config: {},
      });

      console.log(
        `Nuevo Widget '${
          getWidgetInfoById(widgetTypeId)?.title
        }' añadido al dashboard.`
      );
    },
    [addWidget]
  );

  const handleLayoutChange = useCallback(
    (newLayout: DashboardWidget[]) => {
      updateWidgetsLayout(newLayout);
    },
    [updateWidgetsLayout]
  );
  return (
    <main className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6">
      <WidgetsSidebar onAddWidget={handleAddWidgetFromSidebar} />
      <DashboardCanvas onLayoutChange={handleLayoutChange} />
    </main>
  );
}
