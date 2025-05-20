import { DashboardWidget } from "@/components/dashboard/create/DashboardCanvas";
import { create } from "zustand";

interface WidgetsStore {
  widgets: DashboardWidget[];
  addWidget: (widget: DashboardWidget) => void;
  updateWidgetsLayout: (newLayout: DashboardWidget[]) => void;
  removeWidget: (id: string) => void;
}

export const useWidgetsStore = create<WidgetsStore>((set) => ({
  widgets: [],
  addWidget: (widget) =>
    set((state) => ({
      widgets: [...state.widgets, widget],
    })),

  updateWidgetsLayout: (newLayout) =>
    set(() => ({
      widgets: newLayout,
    })),

  removeWidget: (id) =>
    set((state) => ({
      widgets: state.widgets.filter((w) => w.id !== id),
    })),
}));
