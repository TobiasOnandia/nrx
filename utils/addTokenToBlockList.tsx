import { redis } from "@/lib/redis";

export async function addTokenToBlockList(
  jti: string,
  exp: number
): Promise<void> {
  if (
    !process.env.UPSTASH_REDIS_REST_URL ||
    !process.env.UPSTASH_REDIS_REST_TOKEN
  ) {
    console.error(
      "Redis configuration not available. Cannot add token to blocklist."
    );
    throw new Error("Redis service not configured.");
  }

  const nowInSeconds = Math.floor(Date.now() / 1000);
  const ttl = exp - nowInSeconds; // Tiempo de vida restante en segundos

  if (ttl > 0) {
    await redis.set(`blocked_jwt:${jti}`, "blocked", { ex: ttl });
    console.log(`Token JTI ${jti} añadido a la lista negra con TTL ${ttl}s.`);
  } else {
    console.log(
      `Token JTI ${jti} ya expirado (TTL <= 0). No se añadió a la lista negra.`
    );
  }
}
