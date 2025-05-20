// components/dashboard/widgets/VolumeChart.tsx
import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  TimeScale
);

interface VolumeChartConfig {
  timeFrame: "24H" | "7D" | "1M" | "1Y";
  cryptocurrencies: string[];
}

interface VolumeChartProps {
  config: VolumeChartConfig;
}

const generateMockData = () => {
  const data = [];
  const now = Date.now();
  const oneDay = 24 * 60 * 60 * 1000;

  for (let i = 0; i < 24; i++) {
    data.push({
      timestamp: now - (24 - i) * oneDay,
      volume: Math.floor(Math.random() * 50000) + 20000,
    });
  }

  return data;
};

export const VolumeChart = ({ config }: VolumeChartProps) => {
  const mockData = generateMockData();

  const data = {
    labels: mockData.map((d) =>
      new Date(d.timestamp).toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
        hour: "2-digit",
      })
    ),
    datasets: [
      {
        label: "Volumen (24h)",
        data: mockData.map((d) => d.volume),
        backgroundColor: (context) => {
          const ctx = context.chart.ctx;
          const gradient = ctx.createLinearGradient(0, 0, 0, 400);
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

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        backgroundColor: "#1F2937",
        titleColor: "#E5E7EB",
        bodyColor: "#D1D5DB",
        borderColor: "#374151",
        borderWidth: 1,
        callbacks: {
          title: (context) => {
            const date = new Date(mockData[context[0].dataIndex].timestamp);
            return date.toLocaleString("es-ES", {
              weekday: "long",
              day: "numeric",
              month: "long",
              hour: "2-digit",
              minute: "2-digit",
            });
          },
          label: (context) => {
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
          color: "#9CA3AF",
          maxRotation: 0,
          autoSkip: true,
          maxTicksLimit: 6,
        },
      },
      y: {
        grid: {
          color: "#374151",
        },
        ticks: {
          color: "#9CA3AF",
          callback: (value) => `$${Number(value) / 1000}K`,
        },
      },
    },
  };

  return (
    <article className="h-full p-4 bg-gray-800 rounded-lg">
      <header className="flex justify-between items-center mb-4">
        <h5 className="text-xl font-bold text-purple-300">
          Volumen de Mercado
        </h5>
        <div className="flex space-x-2">
          {["24H", "7D", "1M", "1Y"].map((timeframe) => (
            <button
              key={timeframe}
              className={`px-3 py-1 rounded-md text-sm ${
                config.timeFrame === timeframe
                  ? "bg-purple-600 text-white"
                  : "bg-gray-700 text-gray-300 hover:bg-gray-600"
              }`}
            >
              {timeframe}
            </button>
          ))}
        </div>
      </header>

      <div className="relative h-64">
        <Bar data={data} options={options} />

        {!mockData.length && (
          <div className="absolute inset-0 bg-gray-800/50 flex items-center justify-center">
            <span className="text-gray-400">Cargando datos...</span>
          </div>
        )}
      </div>
    </article>
  );
};
