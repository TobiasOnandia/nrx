"use client";
import DashboardCanvas from "@/components/dashboard/create/DashboardCanvas";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";
import { useState, useRef, useCallback } from "react";
import { getWidgetInfoById } from "@/lib/widgets";

const GRID_COLS = 12;
const ROW_HEIGHT_PX = 30;
const DEFAULT_WIDGET_GRID_W = 4;
const DEFAULT_WIDGET_GRID_H = 6;

interface DashboardWidget {
  id: string;
  typeId: string;
  x: number;
  y: number;
  w: number; 
  h: number;   config?: any;
}

export default function DashboardCustomizerPage() {
  const [dashboardLayout, setDashboardLayout] = useState<DashboardWidget[]>([]);


  const handleAddWidgetFromSidebar = useCallback((widgetTypeId: string) => {
    const newWidgetInstanceId = `${widgetTypeId}-${Date.now()}`;

    let newX = 0;
    let newY = 0;

    setDashboardLayout((prevLayout) => [
      ...prevLayout,
      {
        id: newWidgetInstanceId,
        typeId: widgetTypeId,
        x: newX,
        y: newY,
        w: DEFAULT_WIDGET_GRID_W,
        h: DEFAULT_WIDGET_GRID_H,
        config: {},
      },
    ]);
    console.log(`Nuevo Widget '${getWidgetInfoById(widgetTypeId)?.title}' añadido al dashboard.`);
  }, []);

  const handleLayoutChange = useCallback((newLayout: DashboardWidget[]) => {
    setDashboardLayout(newLayout);
  }, []);


  return (
    <main className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6">
      <WidgetsSidebar onAddWidget={handleAddWidgetFromSidebar} />
      <DashboardCanvas
        widgets={dashboardLayout}
        onLayoutChange={handleLayoutChange}
      />
    </main>
  );
}