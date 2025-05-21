import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  TooltipItem,
  ScriptableContext,
   CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  Chart
} from "chart.js";
import { useQuery } from "@tanstack/react-query";
import { useCoinMarketStore } from "@/store/coinmarket.store";
import { coinMarketHistory } from "@/app/actions/coinMarket";

Chart.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

const TIME_FRAME_OPTIONS = [
  { label: "24H", days: 1 },
  { label: "7D", days: 7 },
  { label: "1M", days: 30 },
  { label: "1Y", days: 365 },
] as const;

type TimeFrameLabel = typeof TIME_FRAME_OPTIONS[number]['label'];

interface VolumeChartConfig {
  timeFrame: TimeFrameLabel;
  cryptocurrencies: string[];
}

interface VolumeChartProps {
  config: VolumeChartConfig;
}

const getDaysFromLabel = (label: TimeFrameLabel): number => {
  return TIME_FRAME_OPTIONS.find(opt => opt.label === label)?.days || 1;
};

export const VolumeChart = ({ config }: VolumeChartProps) => {
  const [timeRange, setTimeRange] = useState(() => getDaysFromLabel(config.timeFrame));
  const selectedCoin = useCoinMarketStore((state) => state.selectedCoin);

  const { data: coinVolume, isLoading, error } = useQuery({
    queryKey: ["volume-coin", timeRange, selectedCoin],
    queryFn: () => coinMarketHistory(timeRange, selectedCoin),
    enabled: !!selectedCoin, // Only run query if a coin is selected
  });

  const renderContent = () => {
    if (!selectedCoin) {
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-gray-400">Selecciona una moneda para ver el volumen.</p>
        </div>
      );
    }

    if (isLoading) {
      return (
        <div className="flex justify-center items-center h-full">
          <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-500"></div>
        </div>
      );
    }

    if (error || !coinVolume?.success) {
      const apiErrorMessage = (coinVolume as any)?.message; // Attempt to get message from API response if success is false
      const errorMessage = (error as Error)?.message || apiErrorMessage || "Error al cargar datos históricos.";
      return (
        <div className="flex items-center justify-center h-full">
          <p className="text-red-500">{errorMessage}</p>
        </div>
      );
    }
    
    // Assuming coinVolume.data.total_volumes is an array of [timestamp, volume]
    const chartDataPoints = coinVolume.data?.total_volumes;

    if (!chartDataPoints || chartDataPoints.length === 0) {
      return (
        <div className="flex items-center justify-center h-full">
          <span className="text-gray-400">No hay datos de volumen disponibles para el período y moneda seleccionados.</span>
        </div>
      );
    }

    const dataForChart = {
      labels: chartDataPoints.map((d: [number, number]) =>
        new Date(d[0]).toLocaleDateString("es-ES", {
          day: "numeric",
          month: "short",
          // Only show hour for 24H view or if data is granular enough
          ...(timeRange === 1 && { hour: "2-digit" }), 
        })
      ),
      datasets: [
        {
          label: "Volumen", // Simplified label
          data: chartDataPoints.map((d: [number, number]) => d[1]),
          backgroundColor: (context: ScriptableContext<"bar">) => {
            const ctx = context.chart.ctx;
            const gradient = ctx.createLinearGradient(0, 0, 0, context.chart.height || 400); // Use chart height
            gradient.addColorStop(0, "rgba(124, 58, 237, 0.8)");
            gradient.addColorStop(1, "rgba(124, 58, 237, 0.2)");
            return gradient;
          },
          borderColor: "rgba(124, 58, 237, 1)",
          borderWidth: 0,
          borderRadius: 4,
          barThickness: 16,
        },
      ],
    };

    const optionsForChart = {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          display: false,
        },
        tooltip: {
          backgroundColor: "#1F2937", // gray-800
          titleColor: "#E5E7EB",    // gray-200
          bodyColor: "#D1D5DB",     // gray-300
          borderColor: "#374151",   // gray-700
          borderWidth: 1,
          callbacks: {
            title: (tooltipItems: TooltipItem<"bar">[]) => {
              // chartDataPoints is guaranteed to be populated here
              const item = tooltipItems[0];
              if (!chartDataPoints || !chartDataPoints[item.dataIndex]) return '';
              const date = new Date(chartDataPoints[item.dataIndex][0]);
              return date.toLocaleString("es-ES", {
                weekday: "long",
                day: "numeric",
                month: "long",
                hour: "2-digit",
                minute: "2-digit",
              });
            },
            label: (context: TooltipItem<"bar">) => {
              return `Volumen: $${context.parsed.y.toLocaleString()}`;
            },
          },
        },
      },
      scales: {
        x: {
          grid: {
            display: false,
          },
          ticks: {
            color: "#9CA3AF", // gray-400
            maxRotation: 0,
            autoSkip: true,
            maxTicksLimit: timeRange === 1 ? 12 : 7, // More ticks for 24h view
          },
        },
        y: {
          grid: {
            color: "#374151", // gray-700
          },
          ticks: {
            color: "#9CA3AF", // gray-400
            callback: (value: string | number) => `$${(Number(value) / 1000).toFixed(0)}K`,
          },
        },
      },
    };

    return (
      <div className="relative h-64"> {/* Chart container with fixed height */}
        <Bar data={dataForChart} options={optionsForChart as any} /> {/* Added 'as any' for options due to complex Chart.js types */}
      </div>
    );
  };

  return (
    <article className="h-full p-4 bg-gray-800 rounded-lg flex flex-col text-white">
      <header className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
        <h5 className="text-xl font-bold text-purple-300 mb-2 sm:mb-0">
          Volumen de Mercado {selectedCoin ? `(${selectedCoin.charAt(0).toUpperCase() + selectedCoin.slice(1)})` : ''}
        </h5>
        <div className="flex space-x-1 sm:space-x-2">
          {TIME_FRAME_OPTIONS.map((option) => (
            <button
              key={option.label}
              onClick={() => setTimeRange(option.days)}
              className={`px-2 py-1 sm:px-3 sm:py-1 rounded-md text-xs sm:text-sm transition-colors duration-150 ${
                timeRange === option.days
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600 hover:text-white"
              }`}
            >
              {option.label}
            </button>
          ))}
        </div>
      </header>
      <div className="flex-grow min-h-0"> {/* Ensure this container can shrink and grow */}
        {renderContent()}
      </div>
    </article>
  );
};


