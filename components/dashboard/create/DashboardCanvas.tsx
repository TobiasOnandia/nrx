"use client";
import { EmptyWidget } from "@/components/empty/WidgetEmpty";
import { PriceChart } from "@/components/graphics/PriceChart";
import { VolumeChart } from "@/components/graphics/VolumeChart";
import { MetricCard } from "@/components/MetricCard";
import { TopCoins } from "@/components/tables/TopCoins";
import { getWidgetInfoById } from "@/lib/widgets";
import { useWidgetsStore } from "@/store/widgets.store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
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
  types: string[]; 
  x: number;
  y: number;
  w: number;
  h: number;
  config?: any;
}

export const DashboardCanvas = () => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const widgets = useWidgetsStore((state) => state.widgets);
  const clientQuery = new QueryClient();
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

  const handleClick = () => {

  }


  return (
    <QueryClientProvider client={clientQuery}>
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
              isDraggable={true}
              isResizable={true}
              compactType="vertical"
              preventCollision={true}
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
                let WidgetComponent;

                if (widgetInstance.types.includes("price-chart")) {
                  WidgetComponent = PriceChart;
                } else if (widgetInstance.types.includes("volume-chart")) {
                  WidgetComponent = VolumeChart;
                } else if (widgetInstance.types.includes("metric-card")) {
                  WidgetComponent = MetricCard;
                 
                }
                else if (widgetInstance.types.includes("top-coins")){
                  WidgetComponent = TopCoins
                }
                else {
                  WidgetComponent = () => (
                    <div className="flex justify-center items-center h-full text-red-400">
                      Tipo de widget desconocido o no soportado:{" "}
                      {widgetInstance.types.join(", ")}
                    </div>
                  );
                }

                return (
                  <div
                    key={widgetInstance.id}
                    data-grid={{
                      i: widgetInstance.id,
                      x: widgetInstance.x,
                      y: widgetInstance.y,
                      w: widgetInstance.w,
                      h: widgetInstance.h,
                    }}
                    className="relative w-full h-full"
                  >
                    <WidgetComponent
                      config={widgetInstance.config}
                      title={widgetInstance.config.title}
                      value={widgetInstance.config.value}
                      icon={widgetInstance.config.icon}
                    />
                  </div>
                );
              })}
            </ResponsiveGridLayout>
          )}
        </div>

      </section>
    </QueryClientProvider>
  );
};
