import { Plus } from "lucide-react";
import { createDashboard } from "@/app/actions/dashboard";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

export const ButtonCreate = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
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

  return (
    <button onClick={handleCreateDashboard} className={className}>
      {children}
    </button>
  );
};
