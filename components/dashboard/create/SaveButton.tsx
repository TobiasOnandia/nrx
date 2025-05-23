"use client";

import { Save } from "lucide-react";
import { useCallback } from "react";
import { useWidgetsStore } from "@/store/widgets.store";
import { useParams, useRouter } from "next/navigation";
import { saveDashboardLayout } from "@/app/actions/widget";
import { toast } from "sonner";

export const SaveButton = () => {
  const { id } = useParams();
  const widgets = useWidgetsStore((state) => state.widgets);
  const router = useRouter()

  const handleSave = useCallback(async () => {
    if (!id) {
      console.error("Dashboard ID is missing for saving.");
      return;
    }

    const widgetsToSave = widgets.map((widget) => {
      return {
        id: widget.id,
        widgetId: widget.widgetId,
        widgetTemplateId: widget.widgetTemplateId,
        x: widget.x,
        y: widget.y,
        w: widget.w,
        h: widget.h,
        config: widget.instanceConfig,
      };
    });

    const response = await saveDashboardLayout({
      dashboardId: id?.toString(),
      widgets: widgetsToSave,
    });

    if (!response.success) {
      console.error(
        "Failed to save dashboard:",
        response.message,
        response.errors
      );
    }

    toast.success("Dashboard saved")
    router.push("/dashboard")
  }, [id, widgets]);

  return (
    <button
      onClick={handleSave}
      className={`px-6 py-3 rounded-lg text-white font-semibold transition-colors duration-200
       bg-emerald-600 hover:bg-emerald-700
      `}
      title="Save current dashboard configuration"
      aria-label="Save dashboard"
    >
      <Save className="w-5 h-5 inline-block mr-2" />
      <span>Guardar Cambios</span>
    </button>
  );
};
