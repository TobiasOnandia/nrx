import { Trash } from "lucide-react";
import { deleteDashboard } from "@/app/actions/dashboard";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const ButtonDelete = ({ id }: { id: string }) => {
  const router = useRouter();
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

  return (
    <button
      onClick={() => handleDeleteDashboard(id)}
      className="p-2 cursor-pointer bg-red-600 hover:bg-red-500 rounded-lg"
      title="Delete"
      aria-label={`Delete dashboard ${id}`}
    >
      <Trash className="w-4 h-4" />
    </button>
  );
};
