"use client";
import { Check, Edit2, Plus, Trash } from "lucide-react";
import {
  createDashboard,
  deleteDashboard,
  setDefaultDashboard,
} from "@/app/actions/dashboard";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Dashboard, DashboardWidget } from "@/app/generated/prisma";

type DashboardWithWidgets = Dashboard & {
  dashboardWidgets: DashboardWidget[];
};

export const DashboardList = ({
  dashboards,
}: {
  dashboards: DashboardWithWidgets[];
}) => {
  const router = useRouter();

  const handleCreateDashboard = async () => {
    const response = await createDashboard({ name: "Nuevo Dashboard" });

    if (!response.success) {
      console.error("Failed to create dashboard: ", response.message);
      toast.error(response.message);
      return;
    }

    if (!response.dashboard) {
      console.error(response.errors);
      toast.error(response.message);
      return;
    }

    router.push(`/dashboard/create/${response.dashboard.id}`);
    toast.success("Dashboard created successfully");
  };

  const handleDeleteDashboard = async (dashboardId: string) => {
    const response = await deleteDashboard({ id: dashboardId });
    console.log(dashboardId);
    if (!response.success) {
      console.error("Failed to delete dashboard: ", response.message);
      toast.error(response.message);
      return;
    }

    toast.success("Dashboard deleted successfully");
    router.refresh();
  };

  const handleSetDefaultDashboard = async (dashboardId: string) => {
    const response = await setDefaultDashboard({ id: dashboardId });
    console.log(dashboardId);
    if (!response.success) {
      console.error("Failed to set default dashboard: ", response.message);
      toast.error(response.message);
      return;
    }

    toast.success("Dashboard set as default successfully");
    router.refresh();
  };

  return (
    <main className="min-h-screen max-w-7xl mx-auto bg-gray-900 text-gray-100 p-6">
      <header className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold">My Dashboards</h1>
          <p className="text-gray-400 mt-2">
            Manage your crypto analytics dashboards
          </p>
        </div>
        <button
          onClick={handleCreateDashboard}
          className="cursor-pointer bg-emerald-600 hover:bg-emerald-500 px-4 py-2 rounded-lg flex items-center"
        >
          <Plus className="w-5 h-5 mr-2" />
          Create New
        </button>
      </header>

      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article className="border-2 border-dashed border-gray-700 hover:border-emerald-500/30 rounded-xl p-6 flex items-center justify-center cursor-pointer transition-colors h-64">
          <form action={handleCreateDashboard} className="text-center">
            <button
              type="submit"
              className="w-full h-full flex flex-col items-center justify-center text-gray-400"
            >
              <Plus className="w-12 h-12 mx-auto mb-2" />
              <span className="text-emerald-500">New Dashboard</span>
            </button>
          </form>
        </article>

        {dashboards.map((dashboard) => (
          <article
            key={dashboard.id}
            className="bg-gray-800 rounded-xl p-6 border-2 border-gray-700 hover:border-emerald-500/30 transition-colors h-64 relative group"
          >
            <header className="flex justify-between items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold mb-1">{dashboard.name}</h3>
                <p className="text-sm text-gray-400">
                  Last updated:
                  {dashboard.updateAt.toISOString().split("T")[0]}
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
              <button
                className="p-2 cursor-pointer bg-emerald-600 hover:bg-emerald-500 rounded-lg"
                title="Use"
                onClick={() => handleSetDefaultDashboard(dashboard.id)}
                aria-label={`Use dashboard ${dashboard.name}`}
              >
                <Check className="w-4 h-4" />
              </button>
              <button
                onClick={() => handleDeleteDashboard(dashboard.id)}
                className="p-2 cursor-pointer bg-red-600 hover:bg-red-500 rounded-lg"
                title="Delete"
                aria-label={`Delete dashboard ${dashboard.name}`}
              >
                <Trash className="w-4 h-4" />
              </button>
            </footer>
          </article>
        ))}
      </section>
    </main>
  );
};
