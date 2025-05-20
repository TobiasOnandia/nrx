// lib/widgets.ts

// Asegúrate de que esta interfaz esté definida para incluir 'defaultConfig'
export interface WidgetInfo {
  id: string;
  title: string;
  description: string;
  types?: string[];
  metrics?: string[];
  icon: JSX.Element; // O un tipo más específico para tu SVG
  defaultConfig: { [key: string]: any }; // Añade esta línea para la configuración por defecto
  // Puedes añadir un defaultLayout aquí también si los layouts iniciales varían por widget.
  // defaultLayout?: { x: number; y: number; w: number; h: number; };
}

export const availableWidgets: WidgetInfo[] = [
  {
    id: "price-chart",
    title: "Gráfico de Precios",
    description: "Muestra el histórico de precios de una criptomoneda",
    types: ["Lineal", "Velas", "Área"],
    icon: (
      <svg
        className="w-5 h-5 text-blue-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 12l5-5 5 5m-5-5v14m5-10h2a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2h2"
        />
      </svg>
    ),
    // Configuración por defecto para el gráfico de precios
    defaultConfig: {
      chartType: "Lineal",
      coinId: "bitcoin",
      timeRange: "24h",
      showGrid: true,
      showLegend: false,
    },
  },
  {
    id: "market-table",
    title: "Tabla de Mercado",
    description: "Lista de criptomonedas con precios y cambios",
    icon: (
      <svg
        className="w-5 h-5 text-purple-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M3 10h18M3 14h18m-9-4v8m-7 0h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
    // Configuración por defecto para la tabla de mercado
    defaultConfig: {
      columns: ["price", "24h_change", "market_cap"], // Columnas visibles por defecto
      pageSize: 10, // Número de filas por página
      sortBy: "market_cap",
      sortOrder: "desc",
    },
  },
  {
    id: "metrics-card",
    title: "Métricas Clave",
    description: "Tarjetas con datos importantes del mercado",
    metrics: ["Cap. de Mercado", "Volumen 24h", "Dominancia BTC"],
    icon: (
      <svg
        className="w-5 h-5 text-emerald-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
    // Configuración por defecto para las métricas clave
    defaultConfig: {
      selectedMetrics: ["Cap. de Mercado", "Volumen 24h"], // Métricas a mostrar por defecto
      refreshInterval: 60, // Intervalo de actualización en segundos
    },
  },
  {
    id: "portfolio-summary",
    title: "Resumen de Portafolio",
    description: "Balance y distribución de tus activos",
    icon: (
      <svg
        className="w-5 h-5 text-yellow-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    // Configuración por defecto para el resumen de portafolio
    defaultConfig: {
      currency: "USD", // Moneda base por defecto
      showAllocationChart: true, // Mostrar gráfico de distribución
    },
  },
  {
    id: "coin-selector",
    title: "Selector de Monedas",
    description: "Elige qué criptomonedas mostrar en tu dashboard",
    icon: (
      <svg
        className="w-5 h-5 text-red-400"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
    // Configuración por defecto para el selector de monedas
    defaultConfig: {
      selectedCoins: [], // Inicialmente sin monedas seleccionadas
      enableSearch: true,
    },
  },
];

export function getWidgetInfoById(id: string): WidgetInfo | undefined {
  return availableWidgets.find((widget) => widget.id === id);
}
