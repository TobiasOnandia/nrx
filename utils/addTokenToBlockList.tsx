import { redisClient } from "@/lib/redis";

export async function addTokenToBlockList(
  jti: string,
  exp: number
): Promise<void> {
  // Asegúrate de que el cliente esté listo antes de usarlo
  if (!redisClient.isReady) {
    console.error("Redis client not ready. Cannot add token to blocklist.");
    // Dependiendo de tu tolerancia, podrías lanzar un error o simplemente registrarlo
    throw new Error("Servicio de lista negra no disponible.");
  }

  const nowInSeconds = Math.floor(Date.now() / 1000);
  const ttl = exp - nowInSeconds; // Tiempo de vida restante en segundos

  // Solo agregamos a la blocklist si el token aún no ha expirado
  if (ttl > 0) {
    // Usa el JTI como clave, almacena un valor dummy (ej: 'blocked') y establece la expiración
    // La clave expirará automáticamente en Redis, limpiando la lista negra.
    await redisClient.set(`blocked_jwt:${jti}`, "blocked", { EX: ttl });
    console.log(`Token JTI ${jti} añadido a la lista negra con TTL ${ttl}s.`);
  } else {
    console.log(
      `Token JTI ${jti} ya expirado (TTL <= 0). No se añadió a la lista negra.`
    );
  }
}
