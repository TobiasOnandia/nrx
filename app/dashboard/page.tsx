"use client";
import { Check, Edit2, Plus, Trash } from "lucide-react";
import { createDashboard } from "@/app/actions/dashboard";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function DashboardListPage() {
  const router = useRouter();
  const mockDashboards = [
    {
      id: "1",
      name: "Main Portfolio",
      createdAt: new Date("2024-03-15"),
      updatedAt: new Date("2024-03-20"),
      widgetsCount: 5,
    },
    {
      id: "2",
      name: "Market Overview",
      createdAt: new Date("2024-03-10"),
      updatedAt: new Date("2024-03-19"),
      widgetsCount: 4,
    },
    {
      id: "3",
      name: "Technical Analysis",
      createdAt: new Date("2024-03-01"),
      updatedAt: new Date("2024-03-18"),
      widgetsCount: 6,
    },
  ];

  const handleCreateDashboard = async () => {
    const response = await createDashboard({ name: "Dashboard prueba" });
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

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
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
        </div>

        {/* Grid de Dashboards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card para crear nuevo */}
          <div className="border-2 border-dashed border-gray-700 hover:border-emerald-500/30 rounded-xl p-6 flex items-center justify-center cursor-pointer transition-colors h-64">
            <div className="text-center">
              <div className="text-gray-400 mb-2">
                <Plus className="w-12 h-12 mx-auto" />
              </div>
              <span className="text-emerald-500">New Dashboard</span>
            </div>
          </div>

          {/* Dashboards existentes */}
          {mockDashboards.map((dashboard) => (
            <div
              key={dashboard.id}
              className="bg-gray-800 rounded-xl p-6 border-2 border-gray-700 hover:border-emerald-500/30 transition-colors h-64 relative group"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold mb-1">
                    {dashboard.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    Last updated{" "}
                    {Math.floor(
                      (new Date() - dashboard.updatedAt) / (1000 * 60 * 60 * 24)
                    )}{" "}
                    days ago
                  </p>
                </div>
                <span className="text-xs bg-gray-700 px-2 py-1 rounded-full">
                  {dashboard.widgetsCount} widgets
                </span>
              </div>

              <div className="bg-gray-700/30 rounded-lg h-32 mb-4 flex items-center justify-center">
                <span className="text-gray-400">Dashboard Preview</span>
              </div>

              <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity flex space-x-2">
                <button
                  className="p-2 cursor-pointer bg-gray-700 hover:bg-gray-600 rounded-lg"
                  title="Edit"
                >
                  <Edit2 className="w-4 h-4" />
                </button>
                <button
                  className="p-2 cursor-pointer bg-emerald-600 hover:bg-emerald-500 rounded-lg"
                  title="Use"
                >
                  <Check className="w-4 h-4" />
                </button>
                <button
                  className="p-2 cursor-pointer bg-red-600 hover:bg-red-500 rounded-lg"
                  title="Delete"
                >
                  <Trash className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
