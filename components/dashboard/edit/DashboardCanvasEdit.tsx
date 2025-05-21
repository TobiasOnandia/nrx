export default function DashboardCanvasEdit() {
  const mockWidgets = [
    {
      id: 1,
      type: "metrics",
      cols: 2,
      config: {
        title: "Métricas Clave",
        metrics: [
          { label: "Cap. Mercado", value: "$2.43T" },
          { label: "Vol 24h", value: "$98.7B" },
        ],
      },
    },
    {
      id: 2,
      type: "lineChart",
      cols: 3,
      config: {
        title: "Precio BTC/USD",
        data: [63000, 63500, 62800, 64200, 63700, 64500],
      },
    },
    {
      id: 3,
      type: "volumeChart",
      cols: 3,
      config: {
        title: "Volumen BTC 24h",
        data: [45000, 52000, 48000, 61000, 58000, 65000],
      },
    },
    {
      id: 4,
      type: "candlestick",
      cols: 3,
      config: {
        title: "Velas ETH/USD",
        data: [
          { o: 4321, h: 4400, l: 4280, c: 4350 },
          { o: 4350, h: 4380, l: 4290, c: 4330 },
        ],
      },
    },
    {
      id: 5,
      type: "pieChart",
      cols: 2,
      config: {
        title: "Distribución",
        data: [
          { label: "BTC", value: 45 },
          { label: "ETH", value: 30 },
          { label: "Otros", value: 25 },
        ],
      },
    },
  ];

  const renderWidgetContent = (widget: any) => {
    switch (widget.type) {
      case "metrics":
        return (
          <div className="grid grid-cols-2 gap-4">
            {widget.config.metrics.map((metric: any, idx: number) => (
              <div key={idx} className="p-3 bg-gray-700/30 rounded-lg">
                <div className="text-sm text-gray-400">{metric.label}</div>
                <div className="text-2xl font-bold mt-1">{metric.value}</div>
              </div>
            ))}
          </div>
        );

      case "lineChart":
        return (
          <div className="h-64 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-transparent w-1/3" />
            <div className="h-full border-2 border-emerald-500/30 rounded-lg">
              {/* Mock línea del gráfico */}
              <svg viewBox="0 0 500 200" className="w-full h-full">
                <path
                  d="M 0 180 L 100 120 L 200 160 L 300 80 L 400 140 L 500 100"
                  stroke="#10B981"
                  strokeWidth="2"
                  fill="none"
                />
              </svg>
            </div>
          </div>
        );

      case "volumeChart":
        return (
          <div className="h-64 flex items-end gap-1 justify-between">
            {[45, 60, 52, 75, 65, 80].map((height, idx) => (
              <div
                key={idx}
                className="w-8 bg-emerald-500/50 hover:bg-emerald-400/70 transition-colors"
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        );

      case "candlestick":
        return (
          <div className="h-64 flex items-center justify-center gap-4">
            {widget.config.data.map((candle: any, idx: number) => (
              <div key={idx} className="flex flex-col items-center h-3/4">
                <div className="w-6 bg-red-500/50 relative">
                  <div className="absolute w-full h-full bg-gray-700/30 -inset-y-4" />
                </div>
                <div className="w-6 bg-green-500/50 mt-1" />
              </div>
            ))}
          </div>
        );

      case "pieChart":
        return (
          <div className="h-48 w-48 mx-auto relative">
            <div className="absolute inset-0 border-8 border-emerald-500/30 rounded-full" />
            <div className="absolute inset-8 border-8 border-purple-500/30 rounded-full" />
            <div className="absolute inset-16 border-8 border-blue-500/30 rounded-full" />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex-1 p-6 bg-gray-900/50 overflow-y-auto">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-min">
          {mockWidgets.map((widget) => (
            <div
              key={widget.id}
              className={`relative group ${
                widget.cols === 3 ? "lg:col-span-3" : "lg:col-span-2"
              } bg-gray-800 rounded-xl border-2 border-dashed border-emerald-500/30 hover:border-emerald-500/50 transition-all`}
            >
              {/* Header del Widget */}
              <div className="flex justify-between items-center p-4 border-b border-gray-700">
                <div className="flex items-center space-x-2">
                  <span className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <h4 className="font-medium">{widget.config.title}</h4>
                </div>
                <div className="flex space-x-2">
                  <button className="p-1.5 hover:bg-gray-700 rounded-lg text-gray-400 hover:text-white">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                      />
                    </svg>
                  </button>
                  <button className="p-1.5 hover:bg-red-600/20 rounded-lg text-red-400 hover:text-red-300">
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Contenido del Widget */}
              <div className="p-4">{renderWidgetContent(widget)}</div>

              {/* Indicador de tamaño */}
              <div className="absolute bottom-2 right-2 text-xs text-gray-400">
                {widget.cols === 3 ? "Large" : "Medium"}
              </div>
            </div>
          ))}

          {/* Área para nuevos widgets */}
          <div className="lg:col-span-2 border-2 border-dashed border-gray-700 rounded-xl p-6 min-h-[200px] flex items-center justify-center">
            <div className="text-center text-gray-400">
              <svg
                className="w-12 h-12 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Arrastra widgets aquí
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
