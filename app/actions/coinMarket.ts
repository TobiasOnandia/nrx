import {
  CoinMarketDataSchema,
  CoinMarketHistoryDataSchema,
  CoinMarketHistoryResponse,
  CoinMarketResponse,
} from "@/types/schema/schema.coinmarket";

export async function coinMarket(): Promise<CoinMarketResponse> {
  const url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd";

  try {
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
        message: "An error occurred while fetching coin market data",
      };
    }

    const rawData = await response.json();

    const validationResult = CoinMarketDataSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors
        .map((err) => err.message)
        .join(", ");
      return {
        success: false,
        message: errorMessages,
      };
    }

    return {
      success: true,
      data: validationResult.data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while fetching coin market data",
    };
  }
}

export async function coinMarketHistory(
  days: number,
  coinId: string
): Promise<CoinMarketHistoryResponse> {
  const url = `https://api.coingecko.com/api/v3/coins/${coinId}/market_chart?vs_currency=usd&days=${days}`;

  try {
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
        message: "An error occurred while fetching coin market data",
      };
    }

    const rawData = await response.json();

    const validationResult = CoinMarketHistoryDataSchema.safeParse(rawData);

    if (!validationResult.success) {
      const errorMessages = validationResult.error.errors
        .map((err) => err.message)
        .join(", ");
      return {
        success: false,
        message: errorMessages,
      };
    }

    return {
      success: true,
      data: validationResult.data,
    };
  } catch (error) {
    console.error(error);
    return {
      success: false,
      message: "An error occurred while fetching coin market data",
    };
  }
}
