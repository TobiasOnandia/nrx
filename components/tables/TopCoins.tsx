// components/tables/TopCoins.tsx
"use client";
import { ArrowDown, ArrowUp, Eye, EyeOff, X } from "lucide-react";
import { useCoinMarketStore } from "@/store/coinmarket.store";
import { useQuery } from "@tanstack/react-query";
import { coinMarket } from "@/app/actions/coinMarket";
import { useSearchParams } from "next/navigation";
import { useWidgetsStore } from "@/store/widgets.store";
import { toast } from "sonner"; // Asegúrate de importar toast
import { DeleteWidget } from "@/app/actions/dashboard";

export const TopCoins = ({ id }: { id: string }) => {
  const selectedCoin = useCoinMarketStore((state) => state.selectedCoin);
  const searchParams = useSearchParams();
  const query = searchParams.get("search");

  const removeWidget = useWidgetsStore((state) => state.removeWidget);
  const setSelectedCoin = useCoinMarketStore((state) => state.setSelectedCoin);

  const { data, isLoading, error } = useQuery({
    queryKey: ["marketData"],
    queryFn: () => coinMarket(),
    refetchInterval: 300000, // 5 minutos
  });

  const handleClick = async () => {
    const response = await DeleteWidget({ id });

    if (!response.success) {
      console.log(response.message);
      toast.error("Error al eliminar widget", {
        description: response.message,
      });
      return;
    }

    toast.success("Widget eliminado exitosamente.");
    removeWidget(id);
  };

  if (!data || error || !data.success) {
    const errorMessage = error?.message || "Error al cargar datos históricos.";
    return (
      <p className="flex justify-center items-center h-full bg-gray-900 text-red-500">
        {errorMessage}
      </p>
    );
  }

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-500"></div>
      </div>
    );

  const coinFiltered = query
    ? data.data.filter((coin) =>
        coin.name.toLowerCase().includes(query.toLowerCase())
      )
    : data.data;

  return (
    <article className="bg-gray-800 rounded-xl h-full flex flex-col">
      <div className="flex justify-between items-center p-6 pb-4">
        <h2 className="text-xl font-semibold">Top Coins</h2>
        <button
          onClick={handleClick}
          className="hover:bg-red-400 p-px cursor-pointer transition-colors rounded"
        >
          <X />
        </button>
      </div>

      <div className="flex-grow overflow-y-auto p-2">
        <table className="w-full text-left table-fixed">
          <thead className="bg-gray-700 ">
            <tr>
              <th className="px-6 py-4 text-left w-12"></th>
              <th className="px-6 py-4 text-left w-32">Coin</th>
              <th className="px-6 py-4 text-right w-24">Price</th>
              <th className="px-6 py-4 text-right w-24">24h Change</th>
              <th className="px-6 py-4 text-right w-28">Market Cap</th>
            </tr>
          </thead>
          <tbody>
            {coinFiltered.map((coin) => (
              <tr
                key={coin.id}
                className="border-b border-gray-700 hover:bg-gray-750 transition-colors"
              >
                <td className="px-6 py-4">
                  <button
                    onClick={() => setSelectedCoin(coin.id)}
                    className={`${
                      selectedCoin === coin.id
                        ? "text-emerald-500"
                        : "text-gray-400"
                    }`}
                  >
                    {selectedCoin === coin.id ? <Eye /> : <EyeOff />}
                  </button>
                </td>
                <td className="px-6 py-4 font-medium">{coin.name}</td>
                <td className="px-6 py-4 text-right">
                  ${coin.current_price.toLocaleString()}
                </td>
                <td className="px-6 py-4 text-right">
                  <div className="flex items-center justify-end">
                    {coin.price_change_percentage_24h > 0 ? (
                      <ArrowUp className="text-emerald-500 mr-1" />
                    ) : (
                      <ArrowDown className="text-red-500 mr-1" />
                    )}
                    <span
                      className={
                        coin.price_change_percentage_24h > 0
                          ? "text-emerald-500"
                          : "text-red-500"
                      }
                    >
                      {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  ${(coin.market_cap / 1e9).toFixed(2)}B
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </article>
  );
};
