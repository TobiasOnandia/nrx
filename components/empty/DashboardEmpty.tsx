import { FileChartColumnIncreasing, Plus } from 'lucide-react';
import Link from 'next/link';

export const DashboardEmpty = () => {
  return (
    <article className="relative  max-w-7xl mx-auto flex flex-col items-center justify-center rounded-xl text-center p-8 border-2 border-dashed border-emerald-500/30 hover:border-emerald-500/50 transition-all group bg-gradient-to-br from-gray-800/30 to-gray-900/50 hover:from-gray-800/40 hover:to-gray-900/60">
      <div className="mb-6 p-4 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-full transform group-hover:scale-110 transition-transform">
        <FileChartColumnIncreasing className="w-16 h-16 mx-auto text-emerald-400/80 group-hover:text-emerald-300 transition-colors" />
      </div>

      <div className="space-y-3 mb-6">
        <h3 className="text-2xl font-semibold text-gray-100 group-hover:text-white transition-colors">
          ¡Tu espacio de análisis está listo!
        </h3>
        <p className="text-gray-400/90 max-w-md mx-auto text-sm leading-relaxed">
          Comienza construyendo tu panel personalizado con los indicadores y
          gráficos más relevantes del mercado crypto.
        </p>
      </div>

      <Link
        href="/dashboard"
        className="inline-flex items-center justify-center space-x-2 px-6 py-3 bg-emerald-600/80 hover:bg-emerald-500 text-white rounded-lg transform group-hover:-translate-y-1 transition-all shadow-lg shadow-emerald-500/10 hover:shadow-emerald-500/20"
      >
        <Plus className="w-5 h-5 text-white/80 group-hover:text-white transition-colors" />
        <span className="font-medium">Crear primer dashboard</span>
      </Link>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-4 -left-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl" />
        <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-emerald-500/5 rounded-full blur-xl" />
      </div>
    </article>
  );
};
