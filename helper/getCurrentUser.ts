import { cookies } from "next/headers";
import { jwtVerify } from "jose";
import { isTokenBlocked } from "@/utils/blocklist";

const AUTH_TOKEN_COOKIE_NAME = process.env.AUTH_TOKEN_COOKIE_NAME!;

export async function getCurrentUser(): Promise<{
  id: string;
  email: string;
} | null> {
  const cookiesStore = await cookies();
  const authToken = cookiesStore.get(AUTH_TOKEN_COOKIE_NAME);

  if (!authToken) {
    return null;
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(authToken.value, secret);

    if (payload.jti && (await isTokenBlocked(payload.jti))) {
      console.warn("Token blocked");
      return null;
    }

    return { id: payload.userId as string, email: payload.email as string };
  } catch (error) {
    console.error(error);
    return null;
  }
}
