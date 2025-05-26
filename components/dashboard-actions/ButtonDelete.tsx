import { Trash } from "lucide-react";
import { deleteDashboard } from "@/app/actions/dashboard";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export const ButtonDelete = ({ id }: { id: string }) => {
  const deleteMutation = useMutation({
    mutationFn: deleteDashboard,
    onSuccess: () => {
      toast.success("Dashboard deleted successfully");
    },
    onError: (error) => {
      console.error("Failed to delete dashboard: ", error);
      toast.error(`${error}`);
    },
  });

  return (
    <button
      onClick={() => deleteMutation.mutate({ id })}
      className="p-2 cursor-pointer bg-red-600 hover:bg-red-500 rounded-lg"
      title="Delete"
      aria-label={`Delete dashboard ${id}`}
    >
      <Trash className="w-4 h-4" />
    </button>
  );
};
