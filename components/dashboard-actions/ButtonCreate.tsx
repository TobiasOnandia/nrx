import { useRouter } from "next/navigation";
import { useMutation } from "@tanstack/react-query";
import { toast } from "sonner";
import { createDashboard } from "@/app/actions/dashboard";

export const ButtonCreate = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => {
  const router = useRouter();

  const createMutation = useMutation({
    mutationFn: createDashboard,
    onSuccess: (response) => {
      if (response.success) {
        toast.success(response.message || "Dashboard creado exitosamente.");
        if (response.dashboard?.id) {
          router.push(`/dashboard/edit/${response.dashboard.id}`);
        } else {
          console.error(
            "Dashboard creado, pero ID no encontrado en la respuesta."
          );
          toast.error("Dashboard creado, pero hubo un problema al redirigir.");
        }
      } else {
        console.error(
          "Error al crear dashboard (Server Action):",
          response.message,
          response.errors
        );
        toast.error(response.message || "No se pudo crear el dashboard.");
      }
    },
    onError: (error) => {
      console.error(
        "Error inesperado al crear dashboard (useMutation onError): ",
        error
      );
      toast.error(
        `Error de conexión o inesperado: ${
          error instanceof Error ? error.message : String(error)
        }`
      );
    },
  });

  return (
    <button
      onClick={() => createMutation.mutate({ name: "Nuevo Dashboard" })}
      className={className}
      disabled={createMutation.isPending}
    >
      {createMutation.isPending ? "Creando..." : children}
    </button>
  );
};
