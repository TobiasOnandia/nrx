import { DashboardCanvas } from "@/components/dashboard/create/DashboardCanvas";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";
import prisma from "@/lib/prisma";

export interface WidgetTemplate {
  id: string;
  title: string;
  description: string;
  types?: string[];
}

export default async function DashboardCustomizerPage() {
  const availableWidgets = await prisma.widgetTemplates.findMany();

  return (
    <main className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6">
      <WidgetsSidebar availableWidgets={availableWidgets} />
      <DashboardCanvas />
    </main>
  );
}
