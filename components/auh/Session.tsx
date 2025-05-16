import { logoutAction } from "@/actions/auth";
import { LogOut } from "lucide-react";
import { toast } from "sonner";

export const Session = () => {
  let userId;

  const handleLogout = async () => {
    const response = await logoutAction();
    if (!response.success) {
      toast.error("Logout failed");
      console.error("Logout failed", response.message);
      return;
    }
    toast.success("Logout successful");
  };

  return (
    <>
      {userId ? (
        <button
          className="w-full px-4 py-2.5 text-left text-red-400 hover:bg-red-900/50 transition-colors flex items-center space-x-2"
          onClick={() => handleLogout}
        >
          <LogOut className="w-4 h-4" />
          <span>Cerrar sesión</span>
        </button>
      ) : (
        <button
          className="w-full px-4 py-2.5 text-left text-red-400 hover:bg-red-900/50 transition-colors flex items-center space-x-2"
          onClick={() => handleLogout}
        >
          <LogOut className="w-4 h-4" />
          <span>Iniciar sesión</span>
        </button>
      )}
    </>
  );
};
