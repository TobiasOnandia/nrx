import { DashboardCanvas } from '@/components/dashboard/create/DashboardCanvas';
import { DashboardEmpty } from '@/components/empty/DashboardEmpty';
import { MetricCard } from '@/components/MetricCard';
import prisma from '@/lib/prisma';
import {
  DashboardWidgetWithRelations,
  processDashboardWidgets,
} from '@/utils/dashboardUtils';
import { DollarSign } from 'lucide-react';
import { coinMarket } from './actions/coinMarket';
import { PieChart } from 'lucide-react';

export default async function Home() {
  const data = await coinMarket();

  if (!data || !data.success) {
    const errorMessage = data?.message || 'Error al cargar datos históricos.';
    return (
      <p className="flex justify-center items-center h-screen bg-gray-900 text-red-500">
        {errorMessage}
      </p>
    );
  }

  const defaultDashboard = await prisma.dashboard.findFirst({
    where: {
      isDefault: true,
    },
    include: {
      dashboardWidgets: {
        include: {
          widget: {
            include: {
              widgetTemplate: true,
            },
          },
        },
      },
    },
  });

  const initialDashboardWidgets = processDashboardWidgets(
    (defaultDashboard?.dashboardWidgets as DashboardWidgetWithRelations[]) ??
      [],
  );

  return (
    <>
      <section className="grid max-w-7xl mx-auto grid-cols-1 mt-8 md:grid-cols-2 gap-6 mb-8">
        <MetricCard
          title="Total Market Cap"
          value={
            '$' +
            (
              data?.data.reduce((acc, coin) => acc + coin.market_cap, 0) / 1e12
            ).toFixed(2) +
            'T'
          }
          icon={<PieChart className="text-3xl text-emerald-500" />}
        />

        <MetricCard
          title="24h Total Volume"
          value={
            '$' +
            (
              data?.data.reduce((acc, coin) => acc + coin.total_volume, 0) / 1e9
            ).toFixed(2) +
            'B'
          }
          icon={<DollarSign className="text-3xl text-emerald-500" />}
        />
      </section>
      {initialDashboardWidgets.length === 0 && <DashboardEmpty />}

      {initialDashboardWidgets.length > 0 && (
        <DashboardCanvas initialWidgets={initialDashboardWidgets} />
      )}
    </>
  );
}
