// components/dashboard/create/DashboardCanvas.tsx
"use client";
import { EmptyWidget } from "@/components/empty/WidgetEmpty";
import { PriceChart } from "@/components/graphics/PriceChart";
import { VolumeChart } from "@/components/graphics/VolumeChart";
import { MetricCard } from "@/components/MetricCard";
import { TopCoins } from "@/components/tables/TopCoins";
import { useWidgetsStore } from "@/store/widgets.store";
import type { DashboardWidgetData } from "@/store/widgets.store"; // Importa la interfaz correcta
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { useEffect, useRef } from "react"; // Necesitas useEffect
import { WidthProvider } from "react-grid-layout";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const GRID_COLS = 12;
const ROW_HEIGHT_PX = 30;

const ResponsiveGridLayout = WidthProvider(GridLayout);

export const DashboardCanvas = ({
  initialWidgets,
}: {
  initialWidgets?: DashboardWidgetData[]; // Puede ser opcional si el dashboard está vacío
}) => {
  const canvasContainerRef = useRef<HTMLDivElement>(null);
  const widgets = useWidgetsStore((state) => state.widgets);
  const setWidgets = useWidgetsStore((state) => state.setWidgets); // Para inicializar el store
  const clientQuery = new QueryClient();
  const updateWidgetsLayout = useWidgetsStore(
    (state) => state.updateWidgetsLayout
  );

  // Usa useEffect para inicializar el store de Zustand con los widgets cargados desde el servidor
  useEffect(() => {
    // Solo inicializa si el store de Zustand está vacío y hay widgets iniciales
    // (o si quieres re-inicializar si cambian, lo cual es menos común para el estado inicial)
    if (initialWidgets && initialWidgets.length > 0 && widgets.length === 0) {
      setWidgets(initialWidgets);
    } else if (
      initialWidgets &&
      initialWidgets.length === 0 &&
      widgets.length > 0
    ) {
      // Si el servidor dice que no hay widgets pero Zustand sí, resetea Zustand.
      // Esto es crucial para un dashboard "vacío" o recién creado.
      setWidgets([]);
    }
  }, [initialWidgets, setWidgets, widgets.length]);

  const handleLayoutChange = (newLayout: any[]) => {
    const updatedWidgets: DashboardWidgetData[] = newLayout.map((item: any) => {
      const originalWidget = widgets.find((w) => w.id === item.i);
      // Asegúrate de preservar todas las propiedades originales (widgetId, types, instanceConfig)
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
                let WidgetComponent;

                // Ahora usas widgetInstance.types para el renderizado
                if (widgetInstance.types.includes("price-chart")) {
                  WidgetComponent = PriceChart;
                } else if (widgetInstance.types.includes("volume-chart")) {
                  WidgetComponent = VolumeChart;
                } else if (widgetInstance.types.includes("metric-card")) {
                  WidgetComponent = MetricCard;
                } else if (widgetInstance.types.includes("top-coins")) {
                  WidgetComponent = TopCoins;
                } else {
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
                      // Asegúrate de que los componentes de widget esperan 'instanceConfig'
                      // o mapea 'instanceConfig' a 'config' si tus componentes lo esperan así.
                      config={widgetInstance.instanceConfig}
                      title={widgetInstance.instanceConfig?.title}
                      value={widgetInstance.instanceConfig?.value}
                      icon={widgetInstance.instanceConfig?.icon}
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
