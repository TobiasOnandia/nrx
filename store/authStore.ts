import { create } from "zustand";

interface AuthStore {
  user: { id: string; email: string } | null;
  setUser: (user: { id: string; email: string } | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));
