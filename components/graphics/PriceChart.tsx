'use client';
import { coinMarketHistory } from '@/app/actions/coinMarket';
import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { useCoinMarketStore } from '@/store/coinmarket.store';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';
import { X } from 'lucide-react';
import { useWidgetsStore } from '@/store/widgets.store';
import { DeleteWidget } from '@/app/actions/dashboard';
import { toast } from 'sonner';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
);

export const PriceChart = ({ id }: { id: string }) => {
  const queryClient = useQueryClient();
  const [timeRange, setTimeRange] = useState(1);
  const selectedCoin = useCoinMarketStore((state) => state.selectedCoin);
  const removeWidget = useWidgetsStore((state) => state.removeWidget);
  const isNew = useWidgetsStore((state) => state.isNew);

  console.log(isNew);

  const deleteWidgetMutation = useMutation({
    mutationFn: DeleteWidget,
    onSuccess: (response) => {
      if (response.success) {
        removeWidget(id);
        toast.success(response.message || 'Widget eliminado correctamente.');
        queryClient.invalidateQueries({ queryKey: ['dashboard'] });
        queryClient.invalidateQueries({ queryKey: ['dashboards'] });
        queryClient.invalidateQueries({ queryKey: ['homepageDashboard'] });
      } else {
        console.error(
          'Error al eliminar widget (Server Action):',
          response.message,
        );
        toast.error(response.message || 'Fallo al eliminar el widget.');
      }
    },
    onError: (error) => {
      console.error('Error inesperado al eliminar widget:', error);
      toast.error(
        `Error inesperado al eliminar: ${error instanceof Error ? error.message : String(error)}`,
      );
    },
  });
  const {
    data: coinHistory,
    isLoading,
    error: coinHistoryError,
  } = useQuery({
    queryKey: ['coinHistory', timeRange, selectedCoin],
    queryFn: () => coinMarketHistory(timeRange, selectedCoin),
    enabled: !!selectedCoin,
  });

  if (isLoading)
    return (
      <div className="flex justify-center items-center h-full bg-gray-900">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-emerald-500"></div>
      </div>
    );
  if (coinHistoryError || !coinHistory?.success) {
    const errorMessage =
      coinHistoryError?.message || 'Error al cargar datos históricos.';
    return (
      <p className="flex justify-center items-center h-full bg-gray-900 text-red-500">
        {errorMessage}
      </p>
    );
  }

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();

    if (isNew) {
      removeWidget(id);
      toast.success('Widget eliminado correctamente.');
    } else {
      toast.success('Widget eliminado correctamente.');
      deleteWidgetMutation.mutate({ id });
    }
  };

  return (
    <article className="bg-gray-800 p-6 flex flex-col h-full rounded-xl mb-8">
      <section className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold">{selectedCoin} Price Chart</h2>

        <div className="flex gap-2">
          {[1, 7, 30, 90, 365].map((range) => (
            <button
              key={range}
              onClick={(e) => {
                e.stopPropagation();
                setTimeRange(range);
              }}
              className={`px-3 py-1 rounded-lg ${
                timeRange === range ? 'bg-emerald-600' : 'bg-gray-700'
              }`}
            >
              {range}D
            </button>
          ))}
        </div>
        <button
          onClick={handleClick}
          disabled={deleteWidgetMutation.isPending}
          className="hover:bg-red-400 p-px cursor-pointer transition-colors rounded"
        >
          {deleteWidgetMutation.isPending ? (
            <span className="animate-pulse">...</span>
          ) : (
            <X />
          )}
        </button>
      </section>
      <div className="h-full flex-grow">
        <Line
          data={{
            labels:
              coinHistory?.data?.prices?.map(([timestamp]) =>
                new Date(timestamp).toLocaleDateString('en-US', {
                  hour: '2-digit',
                  minute: '2-digit',
                  day: 'numeric',
                  month: 'short',
                }),
              ) || [],
            datasets: [
              {
                label: selectedCoin,
                data:
                  coinHistory?.data?.prices?.map(([, price]) => price) || [],
                borderColor: '#10B981',
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
                grid: { color: '#374151' },
                ticks: { color: '#9CA3AF' },
              },
              y: {
                type: 'linear',
                grid: { color: '#374151' },
                ticks: { color: '#9CA3AF' },
              },
            },
          }}
        />
      </div>
    </article>
  );
};
