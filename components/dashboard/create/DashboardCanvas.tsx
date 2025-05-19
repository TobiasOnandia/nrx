// components/dashboard/create/DashboardCanvas.tsx
"use client";
import { Droppable } from "@/components/dnd/Droppable";
import { Draggable } from "@/components/dnd/Draggable"; // <--- Asegúrate de importar Draggable
import { EmptyWidget } from "@/components/empty/WidgetEmpty";
import { getWidgetInfoById } from "@/lib/widgets";

interface DashboardWidget {
  id: string;
  typeId: string;
  x: number; // Estas deben ser obligatorias ahora
  y: number;
  width: number;
  height: number;
  config?: any;
}

interface DashboardCanvasProps {
  widgets: DashboardWidget[];
}

export default function DashboardCanvas({ widgets }: DashboardCanvasProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  return (
    <section className="flex-1 p-6 bg-gray-900/50 overflow-y-auto">
      <Droppable id="dashboard-dropzone">
        {/* El div que contiene los Draggables DEBE tener 'position: relative' */}
        <div className="max-w-7xl mx-auto h-full min-h-[calc(100vh-100px)] relative border border-dashed border-gray-700 rounded-xl p-4">
          {widgets.length === 0 && <EmptyWidget />}

          {widgets.map((widgetInstance) => {
            const widgetInfo = getWidgetInfoById(widgetInstance.typeId);
            return (
              <Draggable
                key={widgetInstance.id}
                id={widgetInstance.id}
                x={widgetInstance.x}
                y={widgetInstance.y}
                width={widgetInstance.width}
                height={widgetInstance.height}
                hideOriginal={false} // No ocultar el original en el canvas
                isPositionedAbsolute={true} // Posicionar absolutamente en el canvas
              >
                {/* El contenido del Draggable debe llenar su contenedor */}
                <article className="bg-gray-700 p-4 rounded-lg shadow-lg w-full h-full">
                  <h4 className="font-semibold text-lg">
                    {widgetInfo?.title || "Widget desconocido"}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {widgetInfo?.description}
                  </p>
                  <div className="absolute top-2 right-2 text-xs text-gray-500">
                    ID: {widgetInstance.id.substring(0, 8)}...
                  </div>
                </article>
              </Draggable>
            );
          })}
        </div>
      </Droppable>
    </section>
  );
}
