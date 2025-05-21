"use client";
import { CryptoDashboard } from "@/components/dashboard/CryptoDashboard";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function Home() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <CryptoDashboard />
    </QueryClientProvider>
  );
}
