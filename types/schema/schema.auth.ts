import { z } from "zod";

export const RegisterSchema = z.object({
  email: z.string().email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters long" }),
  name: z
    .string()
    .min(2, { message: "Name must be at least 2 characters long" }),
});

export type ResponseAuth = {
  success: boolean;
  message: string;
  user?: {
    email: string;
    name: string;
    id: string;
  };
  errors?: z.ZodError<
    z.infer<typeof RegisterSchema>
  >["formErrors"]["fieldErrors"];
};

export const LoginSchema = z.object({
  email: z.string().email({message:"Email is invaid "}),
  password: z.string().min(6, {message: "Password must be at least 6 characters long"}),
})