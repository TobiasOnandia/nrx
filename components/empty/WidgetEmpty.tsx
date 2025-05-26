import { Plus } from "lucide-react";
import { FileChartColumnIncreasing } from "lucide-react";
import Link from "next/link";

export const EmptyWidget = () => {
  return (
    <article className=" flex flex-col items-center justify-center rounded-xl text-center p-8">
      <span className="text-gray-400 mb-4">
        <FileChartColumnIncreasing className="w-16 h-16 mx-auto" />
      </span>
      <h3 className="text-xl font-semibold mb-2">Dashboard Vacío</h3>
      <p className="text-gray-400 mb-4">
        Arrastra widgets desde el panel lateral para comenzar
      </p>
      <Link
        href="/dashboard"
        className="text-emerald-500 hover:text-emerald-400 flex items-center justify-center"
      >
        <Plus className="w-5 h-5 mr-2" />
        Añadir primer widget
      </Link>
    </article>
  );
};
