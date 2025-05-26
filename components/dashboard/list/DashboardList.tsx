'use client';
import { Edit2, Plus } from 'lucide-react';
import { Dashboard, DashboardWidget } from '@/app/generated/prisma';
import { ButtonDelete } from '@/components/dashboard-actions/ButtonDelete';
import { ButtonUse } from '@/components/dashboard-actions/ButtonUse';
import { ButtonCreate } from '@/components/dashboard-actions/ButtonCreate';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { CreateDashboardDialog } from '@/components/dialog/CreateDashboardDialog';

type DashboardWithWidgets = Dashboard & {
  dashboardWidgets: DashboardWidget[];
};

const queryClient = new QueryClient();

export const DashboardList = ({
  dashboards,
}: {
  dashboards: DashboardWithWidgets[];
}) => {
  return (
    <QueryClientProvider client={queryClient}>
      <main className="min-h-screen max-w-7xl mx-auto bg-gray-900 text-gray-100 p-6">
        <header className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">My Dashboards</h1>
            <p className="text-gray-400 mt-2">
              Manage your crypto analytics dashboards
            </p>
          </div>
          <CreateDashboardDialog className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 text-white rounded-lg transition-colors">
            <Plus />
            New Dashboard
          </CreateDashboardDialog>
        </header>

        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <CreateDashboardDialog className="border-2 border-dashed border-gray-700 hover:border-emerald-500/30 rounded-xl p-6 cursor-pointer transition-colors h-64">
            <Plus className="w-12 h-12 mx-auto mb-2" />
            <span className="text-emerald-500">New Dashboard</span>
          </CreateDashboardDialog>
          {dashboards.map((dashboard) => (
            <article
              key={dashboard.id}
              className={`bg-gray-800 ${dashboard.isDefault ? 'border-emerald-500/70' : ' border-gray-700'} rounded-xl p-6 border-2 hover:border-emerald-500/30 transition-colors h-64 relative group`}
            >
              <header className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {dashboard.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Last updated:
                    {dashboard.updateAt.toISOString().split('T')[0]}
                  </p>
                </div>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                  {dashboard.dashboardWidgets.length} widgets
                </span>
              </header>

              <p className="bg-gray-700/30 rounded-lg h-32 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Dashboard Preview</span>
              </p>

              <footer className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                <a
                  href={`/dashboard/edit/${dashboard.id}`}
                  className="p-2 cursor-pointer bg-gray-700 hover:bg-gray-600 rounded-lg"
                  title="Edit"
                  aria-label={`Edit dashboard ${dashboard.name}`}
                >
                  <Edit2 className="w-4 h-4" />
                </a>
                <ButtonUse id={dashboard.id} />
                <ButtonDelete id={dashboard.id} />
              </footer>
            </article>
          ))}
        </section>
      </main>
    </QueryClientProvider>
  );
};
