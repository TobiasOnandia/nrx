import { create } from "zustand";

interface CoinMarketStore {
  selectedCoin: string;
  setSelectedCoin: (coin: string) => void;
}

export const useCoinMarketStore = create<CoinMarketStore>((set) => ({
  selectedCoin: "bitcoin",
  setSelectedCoin: (coin: string) => set({ selectedCoin: coin }),
}));
