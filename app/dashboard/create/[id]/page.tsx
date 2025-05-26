import { DashboardCanvas } from "@/components/dashboard/create/DashboardCanvas";
import { WidgetsSidebar } from "@/components/dashboard/create/WidgetSidebar";
import { SaveButton } from "@/components/dashboard/create/SaveButton";
import prisma from "@/lib/prisma";

export default async function DashboardCustomizerPage() {
  const availableWidgets = await prisma.widgetTemplates.findMany();

  return (
    <main className="min-h-screen flex mx-auto bg-gray-900 text-gray-100 p-6 relative">
      <WidgetsSidebar availableWidgets={availableWidgets} />
      <DashboardCanvas />

      <div className="fixed bottom-6 right-6 z-50">
        <SaveButton />
      </div>
    </main>
  );
}
