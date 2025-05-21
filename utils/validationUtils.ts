import { z } from "zod";

export function validateAndExtract<T extends z.ZodSchema>(
  schema: T,
  data: unknown
):
  | { success: true; data: z.infer<T> }
  | {
      success: false;
      message: string;
      errors: z.ZodError<z.infer<T>>["formErrors"]["fieldErrors"];
    } {
  const validation = schema.safeParse(data);

  if (!validation.success) {
    const errorMessages = validation.error.errors
      .map((err) => err.message)
      .join(", ");
    const fieldErrors = validation.error.flatten().fieldErrors;
    return {
      success: false,
      message: errorMessages,
      errors: fieldErrors,
    };
  }

  return { success: true, data: validation.data };
}
