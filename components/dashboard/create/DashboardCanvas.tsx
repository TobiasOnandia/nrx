"use client";
import { EmptyWidget } from "@/components/empty/WidgetEmpty";
import { PriceChart } from "@/components/graphics/PriceChart";
import { VolumeChart } from "@/components/graphics/VolumeChart";
import { TopCoins } from "@/components/tables/TopCoins";
import { useWidgetsStore } from "@/store/widgets.store";
import type { DashboardWidgetData } from "@/store/widgets.store";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react";
import { WidthProvider } from "react-grid-layout";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";
import { Layout } from "react-grid-layout";
import { WidgetComponentType } from "@/types/widgets/widgets.types";

const GRID_COLS = 12;
const ROW_HEIGHT_PX = 30;

interface LayoutItem extends Layout {
  i: string;
  x: number;
  y: number;
  w: number;
  h: number;
  minW?: number;
  minH?: number;
  maxW?: number;
  maxH?: number;
  static?: boolean;
  isDraggable?: boolean;
  isResizable?: boolean;
  resizeHandles?: Array<"s" | "w" | "e" | "n" | "sw" | "nw" | "se" | "ne">;
  isBounded?: boolean;
}

const WIDGET_COMPONENTS: Record<string, WidgetComponentType> = {
  "price-chart": PriceChart,
  "volume-chart": VolumeChart,
  "top-coins": TopCoins,
};

const UnknownWidgetComponent: WidgetComponentType = ({ id }) => (
  <div className="flex justify-center items-center h-full text-red-400">
    Tipo de widget desconocido o no soportado para ID: {id}
  </div>
);

const ResponsiveGridLayout = WidthProvider(GridLayout);
const clientQuery = new QueryClient();

export const DashboardCanvas = ({
  initialWidgets,
}: {
  initialWidgets?: DashboardWidgetData[];
}) => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const widgets = useWidgetsStore((state) => state.widgets);
  const setWidgets = useWidgetsStore((state) => state.setWidgets);
  const updateWidgetsLayout = useWidgetsStore(
    (state) => state.updateWidgetsLayout
  );

  useEffect(() => {
    if (initialWidgets && initialWidgets.length > 0 && widgets.length === 0) {
      setWidgets(initialWidgets);
    } else if (
      initialWidgets &&
      initialWidgets.length === 0 &&
      widgets.length > 0
    ) {
      setWidgets([]);
    }
  }, [initialWidgets, setWidgets, widgets.length]);

  const handleLayoutChange = (newLayout: LayoutItem[]) => {
    const updatedWidgets: DashboardWidgetData[] = newLayout.map((item) => {
      const originalWidget = widgets.find((w) => w.id === item.i);
      return {
        ...originalWidget,
        id: item.i,
        x: item.x,
        y: item.y,
        w: item.w,
        h: item.h,
      } as DashboardWidgetData;
    });
    updateWidgetsLayout(updatedWidgets);
  };

  const layout = widgets.map((widget) => ({
    i: widget.id,
    x: widget.x,
    y: widget.y,
    w: widget.w,
    h: widget.h,
  }));

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
              onLayoutChange={handleLayoutChange}
            >
              {widgets.map((widgetInstance) => {
                const WidgetComponent =
                  WIDGET_COMPONENTS[widgetInstance.types[0]!] ||
                  UnknownWidgetComponent;

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
                    <WidgetComponent id={widgetInstance.id} />
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
