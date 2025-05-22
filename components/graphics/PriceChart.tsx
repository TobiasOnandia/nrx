"use client";
import { coinMarketHistory } from "@/app/actions/coinMarket";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Line } from "react-chartjs-2";
import { useCoinMarketStore } from "@/store/coinmarket.store";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale, 
  PointElement, 
  LineElement, 
  Tooltip,
  Legend, 
} from "chart.js";
import { X } from "lucide-react";
import { useWidgetsStore } from "@/store/widgets.store";
import { DeleteWidget } from "@/app/actions/dashboard";
import { toast } from "sonner";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);


export const PriceChart = ({id}:{ id: string}) => {
  const [timeRange, setTimeRange] = useState(1);
  const selectedCoin = useCoinMarketStore((state) => state.selectedCoin);
  const removeWidget = useWidgetsStore(state => state.removeWidget)

  const {
    data: coinHistory,
    isLoading,
    error: coinHistoryError,
  } = useQuery({
    queryKey: ["coinHistory", timeRange, selectedCoin],
    queryFn: () => coinMarketHistory(timeRange, selectedCoin),
    enabled: !!selectedCoin,
  });

  if (coinHistoryError || !coinHistory?.success) {
    const errorMessage =
      coinHistoryError?.message || "Error al cargar datos históricos.";
    return (
      <p className="flex justify-center items-center h-screen bg-gray-900 text-red-500">
        {errorMessage}
      </p>
    );
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-screen bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-500"></div>
      </div>
    );

    const handleClick = async  () => {
      const response = await DeleteWidget({id})
      
      if(!response.success){
        toast.error("Failed in deleted widget", response?.message)
      }

      toast.success("Deleted widget")
    }


  return (
    <article className="bg-gray-800 p-6 rounded-xl mb-8">
      <section className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{selectedCoin} Price Chart</h2>
        
        <div className="flex gap-2">
          {[1, 7, 30, 90, 365].map((range) => (
            <button
              key={range}
              onClick={() => setTimeRange(range)}
              className={`px-3 py-1 rounded-lg ${
                timeRange === range ? "bg-emerald-600" : "bg-gray-700"
              }`}
            >
              {range}D
            </button>
          ))}
        </div>
        <button onClick={handleClick} className="hover:bg-red-400 p-px cursor-pointer transition-colors rounded"><X /> </button>

      </section>
      <div className="h-84">
        <Line
          data={{
            labels:
              coinHistory?.data?.prices?.map(([timestamp]) =>
                new Date(timestamp).toLocaleDateString("en-US", {
                  hour: "2-digit",
                  minute: "2-digit",
                  day: "numeric",
                  month: "short",
                })
              ) || [],
            datasets: [
              {
                label: selectedCoin,
                data:
                  coinHistory?.data?.prices?.map(([_, price]) => price) || [],
                borderColor: "#10B981",
                tension: 0.4,
                fill: false,
              },
            ],
          }}
          options={{
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
              legend: { display: false },
            },
            scales: {
              x: {
                grid: { color: "#374151" },
                ticks: { color: "#9CA3AF" },
              },
              y: {
                type: "linear", 
                grid: { color: "#374151" },
                ticks: { color: "#9CA3AF" },
              },
            },
          }}
        />
      </div>
    </article>
  );
};
