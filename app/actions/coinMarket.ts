"use server";

import {
  CoinMarketDataSchema,
  CoinMarketHistoryDataSchema,
  CoinMarketHistoryResponse,
  CoinMarketResponse,
} from "@/types/schema/schema.coinmarket";
import { redis } from "@/lib/redis";

const CACHE_TTL_MARKET = 60;
const CACHE_TTL_HISTORY = 300;

export async function coinMarket(): Promise<CoinMarketResponse> {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";
  const cacheKey = "coingecko:markets:usd";

  try {
    const cachedData = await redis.get(cacheKey);

    if (cachedData) {
      console.log("Serving coinMarket from Redis cache.");
      try {
        const parsedData = JSON.parse(cachedData as string);
        const validationResult = CoinMarketDataSchema.safeParse(parsedData);
        if (validationResult.success) {
          return { success: true, data: validationResult.data };
        } else {
          console.warn(
            "Cached data for coinMarket is invalid (Zod schema mismatch), fetching from API.",
            validationResult.error
          );
          await redis.del(cacheKey);
        }
      } catch (parseError: any) {
        console.error(
          `Failed to parse cached data for ${cacheKey}. Data might be corrupt or malformed JSON.`,
          parseError
        );
        await redis.del(cacheKey);
      }
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
      return {
        success: false,
        message: `Error fetching coin market data: ${errorText}`,
      };
    }

    const rawData = await response.json();
    const validationResult = CoinMarketDataSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors
        .map((err) => err.message)
        .join(", ");
      console.error("CoinMarket API data validation failed:", errorMessages);
      return {
        success: false,
        message: `CoinMarket API data validation failed: ${errorMessages}`,
      };
    }

    await redis.set(cacheKey, JSON.stringify(validationResult.data), {
      ex: CACHE_TTL_MARKET,
    });
    console.log(`coinMarket data cached for ${CACHE_TTL_MARKET} seconds.`);

    return {
      success: true,
      data: validationResult.data,
    };
  } catch (error: any) {
    console.error(
      "Error in coinMarket Server Action (network or Redis client error):",
      error
    );
    return {
      success: false,
      message: `An unexpected error occurred in coinMarket: ${
        error.message || "Unknown error"
      }`,
    };
  }
}

export async function coinMarketHistory(
  days: number,
  coinId: string
): Promise<CoinMarketHistoryResponse> {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;
  const cacheKey = `coingecko:history:${coinId}:${days}d`;

  try {
    const cachedData = await redis.get(cacheKey);
    if (cachedData) {
      console.log(
        `Serving coinMarketHistory for ${coinId} (${days}d) from Redis cache.`
      );
      try {
        const parsedData = JSON.parse(cachedData as string);
        const validationResult =
          CoinMarketHistoryDataSchema.safeParse(parsedData);
        if (validationResult.success) {
          return { success: true, data: validationResult.data };
        } else {
          console.warn(
            `Cached data for ${coinId} (${days}d) is invalid (Zod schema mismatch), fetching from API.`,
            validationResult.error
          );
          await redis.del(cacheKey);
        }
      } catch (parseError: any) {
        console.error(
          `Failed to parse cached data for ${cacheKey}. Data might be corrupt or malformed JSON.`,
          parseError
        );
        await redis.del(cacheKey);
      }
    }

    const response = await fetch(url, {
      method: "GET",
      headers: {
        accept: "application/json",
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(
        `HTTP error! status: ${response.status}, message: ${errorText}`
      );
      return {
        success: false,
        message: `Error fetching coin market history data: ${errorText}`,
      };
    }

    const rawData = await response.json();
    const validationResult = CoinMarketHistoryDataSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors
        .map((err) => err.message)
        .join(", ");
      console.error(
        "CoinMarketHistory API data validation failed:",
        errorMessages
      );
      return {
        success: false,
        message: `CoinMarketHistory API data validation failed: ${errorMessages}`,
      };
    }

    await redis.set(cacheKey, JSON.stringify(validationResult.data), {
      ex: CACHE_TTL_HISTORY,
    });
    console.log(
      `coinMarketHistory data for ${coinId} (${days}d) cached for ${CACHE_TTL_HISTORY} seconds.`
    );

    return {
      success: true,
      data: validationResult.data,
    };
  } catch (error: any) {
    console.error(
      "Error in coinMarketHistory Server Action (network or Redis client error):",
      error
    );
    return {
      success: false,
      message: `An unexpected error occurred in coinMarketHistory: ${
        error.message || "Unknown error"
      }`,
    };
  }
}
