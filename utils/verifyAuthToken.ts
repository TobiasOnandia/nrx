import { JWTPayload, jwtVerify } from "jose";

const JWT_SECRET_STRING = process.env.JWT_SECRET;
const JWT_SECRET_KEY = new TextEncoder().encode(JWT_SECRET_STRING);

interface MyJwtPayload extends JWTPayload {
  userId: string;
}

interface AuthResponse {
  success: boolean;
  payload?: MyJwtPayload;
  message?: string;
}

export async function verifyAuthToken(
  token: string | undefined
): Promise<AuthResponse> {
  if (!token) {
    return { success: false, message: "Authentication token missing" };
  }

  try {
    const { payload } = await jwtVerify(token, JWT_SECRET_KEY, {
      algorithms: ["HS256"],
    });

    if (typeof payload.userId !== "string" || !payload.userId) {
      return {
        success: false,
        message: "Invalid token payload: userId missing or invalid",
      };
    }

    return { success: true, payload: payload as MyJwtPayload };
  } catch (error) {
    console.error("Toekn verification failed: ", error);
    let message = "Invalid token";
    if (error && typeof error === "object" && "code" in error) {
      if (typeof error.code === "string") {
        if (error.code === "ERR_JWT_EXPIRED") {
          message = "Token expired";
        }

        if (error.code === "ERR_JWS_SIGNATURE_VERIFICATION_FAILED") {
          message = "Invalid token signature";
        }
      }
    }

    return { success: false, message };
  }
}
