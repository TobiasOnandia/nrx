import { z } from "zod";

const CoinSchema = z.object({
  id: z.string(),
  symbol: z.string(),
  name: z.string(),
  image: z.string().url(),
  current_price: z.number(),
  market_cap: z.number(),
  market_cap_rank: z.number().nullable(),
  fully_diluted_valuation: z.number().nullable(),
  total_volume: z.number(),
  high_24h: z.number(),
  low_24h: z.number(),
  price_change_24h: z.number(),
  price_change_percentage_24h: z.number(),
  market_cap_change_24h: z.number(),
  market_cap_change_percentage_24h: z.number(),
  circulating_supply: z.number(),
  total_supply: z.number().nullable(),
  max_supply: z.number().nullable(),
  ath: z.number(),
  ath_change_percentage: z.number(),
  ath_date: z.string(),
  atl: z.number(),
  atl_change_percentage: z.number(),
  atl_date: z.string(),
  roi: z
    .object({
      times: z.number().nullable(),
      currency: z.string().nullable(),
      percentage: z.number().nullable(),
    })
    .nullable(),
  last_updated: z.string(),
});

export const CoinMarketDataSchema = z.array(CoinSchema);

export type CoinMarketData = z.infer<typeof CoinMarketDataSchema>;

export type CoinMarketResponse =
  | { success: true; data: CoinMarketData }
  | { success: false; message: string; error?: any };

const DataPointSchema = z.tuple([z.number(), z.number()]);

// 2. Define el esquema para los arrays de estos pares
const PricesSchema = z.array(DataPointSchema);
const MarketCapsSchema = z.array(DataPointSchema);
const TotalVolumesSchema = z.array(DataPointSchema);

export const CoinMarketHistoryDataSchema = z.object({
  prices: PricesSchema,
  market_caps: MarketCapsSchema,
  total_volumes: TotalVolumesSchema,
});

export type CoinMarketHistoryData = z.infer<typeof CoinMarketHistoryDataSchema>;

export type CoinMarketHistoryResponse =
  | { success: true; data: CoinMarketHistoryData }
  | { success: false; message: string; error?: any };
