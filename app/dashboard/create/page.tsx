// app/dashboard/create/DashboardCustomizer.tsx
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
  x: number;
  y: number;
  width: number;
  height: number;
  config?: any;
}

export default function DashboardCustomizer() {
  const [dashboardWidgets, setDashboardWidgets] = useState<DashboardWidget[]>(
    []
  );
  const [activeDraggableId, setActiveDraggableId] = useState<string | null>(
    null
  );

  const isExistingWidgetInstance = (id: string) =>
    dashboardWidgets.some((w) => w.id === id);
  const isNewWidgetType = (id: string) => getWidgetInfoById(id) !== undefined;

  const handleDragStart = (event: DragStartEvent) => {
    setActiveDraggableId(String(event.active.id));
  };

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over, delta } = event;
    const draggedId = String(active.id);
    const droppedOnId = over?.id;

    if (droppedOnId === "dashboard-dropzone" && isNewWidgetType(draggedId)) {
      const newWidgetInstanceId = `${draggedId}-${Date.now()}`;

      setDashboardWidgets((prevWidgets) => [
        ...prevWidgets,
        {
          id: newWidgetInstanceId,
          typeId: draggedId,
          x: 0,
          y: 0,
          width: 300,
          height: 200,
          config: {},
        },
      ]);
      console.log(
        `Nuevo Widget '${
          getWidgetInfoById(draggedId)?.title
        }' añadido al dashboard.`
      );
    }
    // Caso 2: Arrastro un widget YA EXISTENTE dentro del canvas para moverlo
    else if (isExistingWidgetInstance(draggedId)) {
      setDashboardWidgets((prevWidgets) =>
        prevWidgets.map((widget) => {
          if (widget.id === draggedId) {
            // Actualiza la posición del widget sumando el delta a su posición actual
            return {
              ...widget,
              x: widget.x + delta.x,
              y: widget.y + delta.y,
            };
          }
          return widget;
        })
      );
      console.log(
        `Widget '${
          getWidgetInfoById(draggedId)?.title || "Existente"
        }' movido dentro del dashboard.`
      );
    }

    setActiveDraggableId(null); // Limpiar el ID del elemento arrastrado al finalizar
  };

  const handleDragCancel = () => {
    setActiveDraggableId(null);
  };

  // Obtener la información del widget activo para mostrar en el DragOverlay
  // Esto es para la representación de "copia" que flota
  const activeWidgetInfo = activeDraggableId
    ? getWidgetInfoById(activeDraggableId)
    : null;

  return (
    <div className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6">
      <DndContext
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        {/* Sidebar para arrastrar nuevos widgets */}
        <WidgetsSidebar activeDraggableId={activeDraggableId} />

        {/* Canvas donde se ubican y mueven los widgets */}
        <DashboardCanvas widgets={dashboardWidgets} />

        {/* DragOverlay para la representación visual del arrastre */}
        <DragOverlay>
          {activeWidgetInfo ? (
            <div
              className="group p-4 bg-gray-600/80 rounded-lg shadow-xl cursor-grabbing transition-colors border border-gray-500 flex items-start space-x-3 opacity-90"
              style={{ width: 300, height: 200 }}
            >
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
    </div>
  );
}
