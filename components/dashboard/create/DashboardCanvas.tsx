"use client";
import { EmptyWidget } from "@/components/empty/WidgetEmpty";
import { getWidgetInfoById } from "@/lib/widgets";
import { useWidgetsStore } from "@/store/widgets.store";
import { Save } from "lucide-react";
import { useRef } from "react";
import { WidthProvider } from "react-grid-layout";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GRID_COLS = 12; // Número de columnas en tu cuadrícula
const ROW_HEIGHT_PX = 30; // Altura de cada fila en píxeles

const ResponsiveGridLayout = WidthProvider(GridLayout);

export interface DashboardWidget {
  id: string;
  typeId: string;
  x: number;
  y: number;
  w: number;
  h: number;
  config?: any;
}

export const DashboardCanvas = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const widgets = useWidgetsStore((state) => state.widgets);

  const updateWidgetsLayout = useWidgetsStore(
    (state) => state.updateWidgetsLayout
  );

  const handleLayoutChange = (newLayout: DashboardWidget[]) => {
    updateWidgetsLayout(newLayout);
  };

  const layout = widgets.map((widget) => ({
    i: widget.id,
    x: widget.x,
    y: widget.y,
    w: widget.w,
    h: widget.h,
  }));

  return (
    <section className="flex-1 p-6  bg-gray-900/50 overflow-y-auto">
      <div
        ref={canvasContainerRef}
        className="max-w-7xl mx-auto h-full min-h-[calc(100vh-100px)] relative border border-dashed border-gray-700 rounded-xl p-4"
      >
        {widgets.length === 0 ? (
          <EmptyWidget />
        ) : (
          <ResponsiveGridLayout
            className="layout"
            layout={layout}
            cols={GRID_COLS}
            rowHeight={ROW_HEIGHT_PX}
            onLayoutChange={(newLayout) => {
              const updatedWidgets: DashboardWidget[] = newLayout.map(
                (item: any) => {
                  const originalWidget = widgets.find((w) => w.id === item.i);
                  return {
                    ...originalWidget,
                    id: item.i,
                    x: item.x,
                    y: item.y,
                    w: item.w,
                    h: item.h,
                  } as DashboardWidget;
                }
              );
              handleLayoutChange(updatedWidgets);
            }}
          >
            {widgets.map((widgetInstance) => {
              const widgetInfo = getWidgetInfoById(widgetInstance.typeId);
              return (
                <article
                  key={widgetInstance.id}
                  className="bg-gray-700 p-4 rounded-lg shadow-lg"
                >
                  <h4 className="font-semibold text-lg">
                    {widgetInfo?.title || "Widget desconocido"}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {widgetInfo?.description}
                  </p>
                  <p className="absolute top-2 right-2 text-xs text-gray-500">
                    ID: {widgetInstance.id.substring(0, 8)}...
                  </p>
                </article>
              );
            })}
          </ResponsiveGridLayout>
        )}
      </div>

      <button
        className="px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white font-medium rounded-lg transition-all duration-200 flex items-center justify-end space-x-2 disabled:opacity-70 disabled:cursor-not-allowed"
        title="Save current dashboard configuration"
        aria-label="Save dashboard"
      >
        <Save className="w-5 h-5" />
        <span>Save Dashboard</span>
      </button>
    </section>
  );
};
