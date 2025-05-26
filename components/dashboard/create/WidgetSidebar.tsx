'use client';
import { WidgetTemplateData } from '@/types/widgets/widgets.types';
import { useWidgetsStore } from '@/store/widgets.store';

const DEFAULT_WIDGET_GRID_W = 4;
const DEFAULT_WIDGET_GRID_H = 6;

export function WidgetsSidebar({
  availableWidgets,
}: {
  availableWidgets: WidgetTemplateData[];
}) {
  const addWidget = useWidgetsStore((state) => state.addWidget);
  const handleAddWidget = (widget: WidgetTemplateData) => {
    console.log('Añadiendo widget de plantilla:', widget.id);
    const newX = 0;
    const newY = 0;

    const dashboardWidgetId = crypto.randomUUID();

    addWidget({
      id: dashboardWidgetId,
      widgetId: '',
      widgetTemplateId: widget.id,
      types: [widget.types?.[0] as string],
      x: newX,
      y: newY,
      w: DEFAULT_WIDGET_GRID_W,
      h: DEFAULT_WIDGET_GRID_H,
      instanceConfig: {
        chartType: 'Lineal',
        coinId: 'bitcoin',
        timeRange: '24h',
        showGrid: true,
        showLegend: false,
      },
    });
  };
  return (
    <aside
      className="w-72 bg-gray-800 h-full p-4 rounded overflow-y-auto"
      aria-label="Barra lateral de widgets y monedas"
    >
      <header className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Widgets available</h2>
        <p className="text-sm text-gray-400">Click to add to your dashboard</p>
      </header>

      <section aria-labelledby="widgets-list">
        <ul id="widgets-list" className="space-y-3" role="list">
          {availableWidgets.map((widget) => (
            <li key={widget.id}>
              <button
                type="button"
                className="group w-full text-left  p-4 bg-gray-750 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors border border-gray-700 hover:border-gray-600"
                onClick={() => handleAddWidget(widget)}
                aria-label={`Add widget ${widget.title}`}
              >
                <h3 className="font-medium group-hover:text-white transition-colors">
                  {widget.title}
                </h3>
                <p className="text-sm text-gray-400">{widget.description}</p>
                {widget.types && (
                  <p className="mt-2 flex flex-wrap gap-1">
                    {widget.types.map((type) => (
                      <span
                        key={type}
                        className="px-2 py-1 text-xs bg-gray-700 rounded-md"
                      >
                        {type}
                      </span>
                    ))}
                  </p>
                )}
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
