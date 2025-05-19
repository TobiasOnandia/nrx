"use client";
import DashboardCanvas from "@/components/dashboard/create/DashboardCanvas";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";
import {
  DndContext,
  DragEndEvent,
  DragStartEvent,
  DragOverlay,
} from "@dnd-kit/core";
import { useState } from "react";
import { getWidgetInfoById } from "@/lib/widgets";

interface DashboardWidget {
  id: string;
  typeId: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  config?: any;
}

export default function DashboardCustomizer() {
  const [dashboardWidgets, setDashboardWidgets] = useState<DashboardWidget[]>(
    []
  );
  const [activeDraggableId, setActiveDraggableId] = useState<string | null>(
    null
  );

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDraggableId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const draggedWidgetTypeId = event.active.id;
    const droppedOnId = event.over?.id;

    if (droppedOnId === "dashboard-dropzone") {
      const newWidgetInstanceId = `${draggedWidgetTypeId}-${Date.now()}`;

      setDashboardWidgets((prevWidgets) => [
        ...prevWidgets,
        {
          id: newWidgetInstanceId,
          typeId: String(draggedWidgetTypeId),
          x: 0,
          y: 0,
          width: 300,
          height: 200,
          config: {},
        },
      ]);
      console.log(`Widget ${draggedWidgetTypeId} soltado en el dashboard.`);
    } else {
      console.log(
        "Widget soltado fuera del área de drop o en un área no deseada."
      );
    }
    setActiveDraggableId(null);
  };
  const handleDragCancel = () => {
    setActiveDraggableId(null);
  };

  const activeWidgetInfo = activeDraggableId
    ? getWidgetInfoById(activeDraggableId)
    : null;

  return (
    <main className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6">
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <WidgetsSidebar />
        <DashboardCanvas widgets={dashboardWidgets} />
        <DragOverlay>
          {activeWidgetInfo ? (
            <div className="group p-4 bg-gray-600/80 rounded-lg shadow-xl cursor-grabbing transition-colors border border-gray-500 flex items-start space-x-3 opacity-90">
              <div className="p-2 bg-gray-600 rounded-lg">
                {activeWidgetInfo.icon}
              </div>
              <div>
                <h3 className="font-medium text-white">
                  {activeWidgetInfo.title} (Arrastrando)
                </h3>
                <p className="text-sm text-gray-300">
                  {activeWidgetInfo.description}
                </p>
              </div>
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>
    </main>
  );
}
