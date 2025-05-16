import { redis } from "@/lib/redis";

const BLOCKLIST_KEY_PREFIX = "blocked_jwt:";

export async function isTokenBlocked(jti: string): Promise<boolean> {
  if (!jti) {
    return false;
  }
  try {
    const client = redis;
    const key = `${BLOCKLIST_KEY_PREFIX}${jti}`;

    const isBlocked = await client.exists(key);
    return isBlocked === 1;
  } catch (error) {
    console.error("Error checking token blocklist status:", error);
    throw new Error("Failed to check token blocklist status");
  }
}
