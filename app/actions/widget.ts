import prisma from "@/lib/prisma";

export async function getWidgetTemplate() {
  const widgetTemplate = await prisma.widgetTemplates.findMany();
  return widgetTemplate;
}
