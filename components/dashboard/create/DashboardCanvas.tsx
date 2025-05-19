// components/dashboard/create/DashboardCanvas.tsx
"use client";
import { Droppable } from "@/components/dnd/Droppable";
import { EmptyWidget } from "@/components/empty/WidgetEmpty";
import { getWidgetInfoById } from "@/lib/widgets"; // <--- Importa el helper

interface DashboardWidget {
  id: string;
  typeId: string;
  x?: number;
  y?: number;
  width?: number;
  height?: number;
  config?: any;
}

interface DashboardCanvasProps {
  widgets: DashboardWidget[];
}

export default function DashboardCanvas({ widgets }: DashboardCanvasProps) {
  return (
    <section className="flex-1 p-6 bg-gray-900/50 overflow-y-auto">
      <Droppable id="dashboard-dropzone">
        {widgets.length === 0 && <EmptyWidget />}

        {widgets.map((widgetInstance) => {
          const widgetInfo = getWidgetInfoById(widgetInstance.typeId);
          return (
            <article
              key={widgetInstance.id}
              className=" bg-gray-700 p-4 rounded-lg shadow-lg"
            >
              <h4 className="font-semibold text-lg">
                {widgetInfo?.title || "Widget desconocido"}
              </h4>
              <p className="text-sm text-gray-400">{widgetInfo?.description}</p>
            </article>
          );
        })}
      </Droppable>
    </section>
  );
}
