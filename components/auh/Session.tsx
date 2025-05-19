import { logoutAction } from "@/app/actions/auth";
import { useAuthStore } from "@/hooks/useAuthStore";
import { LogOut } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

export const Session = () => {
  const user = useAuthStore()

  console.log(user)
  
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
      {user?.id ? (
        <button
          className="w-full cursor-pointer px-4 py-2.5 text-left text-red-400 hover:bg-red-900/50 transition-colors flex items-center space-x-2"
          onClick={handleLogout}
        >
          <LogOut className="w-4 h-4" />
          <span>Cerrar sesión</span>
        </button>
      ) : (
        <Link
          href="/login"
          className="w-full cursor-pointer px-4 py-2.5  text-left bg-gray-800 hover:bg-gray-700 transition-colors flex items-center space-x-2"
        >
          <LogOut className="w-4 h-4" />
          <span>Iniciar sesión</span>
        </Link>
      )}
    </>
  );
};
