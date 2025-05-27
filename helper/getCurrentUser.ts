import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { isTokenBlocked } from '@/utils/blocklist';

const AUTH_TOKEN_COOKIE_NAME = process.env.AUTH_TOKEN_COOKIE_NAME!;

export async function getCurrentUser(): Promise<
  | {
      success: true;
      id: string;
      email: string;
    }
  | { success: false; message: string }
> {
  const cookiesStore = await cookies();
  const authToken = cookiesStore.get(AUTH_TOKEN_COOKIE_NAME);

  if (!authToken) {
    return {
      success: false,
      message: 'Authentication token missing',
    };
  }

  try {
    const secret = new TextEncoder().encode(process.env.JWT_SECRET);
    const { payload } = await jwtVerify(authToken.value, secret);

    if (payload.jti && (await isTokenBlocked(payload.jti))) {
      return {
        success: false,
        message: 'Token blocked',
      };
    }

    return {
      success: true,
      id: payload.userId as string,
      email: payload.email as string,
    };
  } catch (error) {
    return {
      success: false,
      message: 'An error occurred while getting the current user',
    };
  }
}
