// store/widgets.store.ts
import { create } from "zustand";

export interface DashboardWidgetData {
  id: string;
  widgetId: string;
  types: string[];
  x: number;
  y: number;
  w: number;
  h: number;
  instanceConfig?: Record<string, any>;
  widgetTemplateId?: string;
}

interface WidgetsStore {
  widgets: DashboardWidgetData[];
  hasUnsavedChanges: boolean;
  addWidget: (widget: DashboardWidgetData) => void;
  updateWidgetsLayout: (newLayout: DashboardWidgetData[]) => void;
  removeWidget: (dashboardWidgetId: string) => void;
  setWidgets: (widgets: DashboardWidgetData[]) => void;
  setHasUnsavedChanges: (hasChanges: boolean) => void;
}

export const useWidgetsStore = create<WidgetsStore>((set) => ({
  widgets: [],
  hasUnsavedChanges: false,
  addWidget: (widget) =>
    set((state) => ({
      widgets: [...state.widgets, widget],
      hasUnsavedChanges: true,
    })),
  updateWidgetsLayout: (newLayout) =>
    set(() => ({
      widgets: newLayout,
      hasUnsavedChanges: true,
    })),
  removeWidget: (dashboardWidgetId) =>
    set((state) => ({
      widgets: state.widgets.filter((w) => w.id !== dashboardWidgetId),
      hasUnsavedChanges: true,
    })),
  setWidgets: (newWidgets) =>
    set({ widgets: newWidgets, hasUnsavedChanges: false }),
  setHasUnsavedChanges: (hasChanges) => set({ hasUnsavedChanges: hasChanges }),
}));
