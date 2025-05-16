"use server";

import prisma from "@/lib/prisma";
import { LoginSchema, RegisterSchema, ResponseAuth } from "@/types/schema/schema.auth";
import bcrypt from "bcryptjs";
import { SignJWT } from "jose";
import { nanoid } from 'nanoid'
import { cookies } from "next/headers";



const JWT_SECRET_STRING = process.env.JWT_SECRET
const JWT_SECRET_KEY = new TextEncoder().encode(JWT_SECRET_STRING)
const JWT_EXPIRATION_TIME = "1h"


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


export async function loginAction(request: {
  email: string,
  password: string
}): Promise<ResponseAuth>{

 const validationResult = LoginSchema.safeParse(request);

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

  const { email, password } = validationResult.data;

  try {
    const user = await prisma.user.findUnique({
      where: { email }
    })

    if(!user) {
      return {
        success: false,
        message: "User not found"
      }
    }

    if(!await bcrypt.compare(password, user.password)){
      return{
        success: false,
        message: "Invalid credentials"
      }
    }

    const payload = { userId: user.id, email: user.email}
    const token = await new SignJWT(payload)
      .setProtectedHeader({ alg: 'HS256' })
      .setIssuedAt()
      .setJti(nanoid())
      .setExpirationTime(JWT_EXPIRATION_TIME) // Por ejemplo, '1h'
      .sign(JWT_SECRET_KEY);


    const ONE_HOUR_IN_ECONDS = 60 * 60

    const cookiesStore = await cookies()
    cookiesStore.set("auth_token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: ONE_HOUR_IN_ECONDS,
      path: "/"
    })

    return {
      success: true,
      message: "login successfully",
      user: { id: user.id, email: user.email, name: user.name },
    };

  }
  catch(error) {
  console.error(error);
    return {
      success: false,
      message: "An error occurred while Loging",
    };
  }

}