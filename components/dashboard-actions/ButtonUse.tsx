import { Check } from "lucide-react";
import { setDefaultDashboard } from "@/app/actions/dashboard";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Dashboard } from "@/app/generated/prisma";

export const ButtonUse = ({ id }: { id: string }) => {
  const router = useRouter();
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
    <button
      className="p-2 cursor-pointer bg-emerald-600 hover:bg-emerald-500 rounded-lg"
      title="Use"
      onClick={() => handleSetDefaultDashboard(id)}
      aria-label={`Use dashboard ${id}`}
    >
      <Check className="w-4 h-4" />
    </button>
  );
};
