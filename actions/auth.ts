"use server";

import prisma from "@/lib/prisma";
import { RegisterSchema, ResponseAuth } from "@/types/schema/schema.auth";
import bcrypt from "bcryptjs";

export async function registerAction(request: {
  email: string;
  password: string;
  name: string;
}): Promise<ResponseAuth> {
  const validationResult = RegisterSchema.safeParse(request);

  if (!validationResult.success) {
    const errorMessages = validationResult.error.errors
      .map((err) => err.message)
      .join(", ");
    return {
      success: false,
      message: errorMessages,
      errors: validationResult.error.flatten().fieldErrors,
    };
  }

  const { email, password, name } = validationResult.data;

  try {
    const existingUser = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (existingUser) {
      return {
        success: false,
        message: "User already exists",
      };
    }

    const user = await prisma.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 10),
        name,
      },
    });

    return {
      success: true,
      message: "User created successfully",
      user: { id: user.id, email: user.email, name: user.name },
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while registering",
    };
  }
}
