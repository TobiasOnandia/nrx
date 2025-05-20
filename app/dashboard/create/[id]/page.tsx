"use client";
import DashboardCanvas from "@/components/dashboard/create/DashboardCanvas";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";

export default function DashboardCustomizerPage() {
  return (
    <main className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6">
      <WidgetsSidebar />
      <DashboardCanvas />
    </main>
  );
}
