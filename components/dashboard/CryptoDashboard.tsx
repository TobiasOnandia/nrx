"use client";
import { DollarSign, PieChart, Star } from "lucide-react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { coinMarket } from "@/app/actions/coinMarket";
import { useQuery } from "@tanstack/react-query";
import { MetricCard } from "@/components/MetricCard";
import { PriceChart } from "@/components/graphics/PriceChart";
import { TopCoins } from "@/components/tables/TopCoins";
import { useCoinMarketStore } from "@/store/coinmarket.store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const CryptoDashboard = () => {
  const selectedCoin = useCoinMarketStore((state) => state.selectedCoin);

  const { data, isLoading, error } = useQuery({
    queryKey: ["marketData"],
    queryFn: () => coinMarket(),
    refetchInterval: 300000,
  });

  if (error || !data || !data.success) {
    const errorMessage = error?.message || "Error al cargar datos históricos.";
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

  return (
    <main className=" max-w-7xl mx-auto p-6">
      <section className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <MetricCard
          title="Total Market Cap"
          value={
            "$" +
            (
              data?.data.reduce((acc, coin) => acc + coin.market_cap, 0) / 1e12
            ).toFixed(2) +
            "T"
          }
          icon={<PieChart className="text-3xl text-emerald-500" />}
        />

        <MetricCard
          title="24h Volume"
          value={
            "$" +
            (
              data?.data.reduce((acc, coin) => acc + coin.total_volume, 0) / 1e9
            ).toFixed(2) +
            "B"
          }
          icon={<DollarSign className="text-3xl text-emerald-500" />}
        />

        <MetricCard
          title="BTC Dominance"
          value={
            (
              data?.data.reduce((acc, coin) => {
                if (coin.id === selectedCoin) {
                  return acc + coin.market_cap;
                }
                return acc;
              }, 0) / data?.data.reduce((acc, coin) => acc + coin.market_cap, 0)
            ).toFixed(2) + "%"
          }
          icon={<Star className="text-3xl text-emerald-500" />}
        />
      </section>
      <PriceChart id="price-chart"/>

      <TopCoins id="top-coins"/>
    </main>
  );
};
