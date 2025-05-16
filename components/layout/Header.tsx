"use client";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { ProfileDropdown } from "@/components/auh/ProfileDropwon";

export const Header = () => {
  const [livePrices, setLivePrices] = useState({
    btc: 63421.5,
    eth: 4321.75,
    marketCap: 2.43,
  });

  // Simular actualización de precios en tiempo real
  useEffect(() => {
    const interval = setInterval(() => {
      setLivePrices((prev) => ({
        btc: prev.btc * (1 + (Math.random() * 0.02 - 0.01)),
        eth: prev.eth * (1 + (Math.random() * 0.02 - 0.01)),
        marketCap: prev.marketCap * (1 + (Math.random() * 0.005 - 0.0025)),
      }));
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-900 max-w-7xl mx-auto px-4 flex items-center justify-between h-16 sm:px-6 lg:px-8 ">
      <nav className="hidden md:flex gap-6">
        <a
          href="#"
          className="text-gray-300 hover:text-emerald-500 transition-colors"
        >
          Portfolio
        </a>
      </nav>

      <section className="hidden lg:flex items-center gap-3 bg-gray-800 px-4 py-2 rounded-lg">
        <p className="text-gray-400">BTC:</p>
        <p className="text-emerald-500">
          $
          {livePrices.btc.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </p>
        <p className="text-xs text-emerald-500">+2.4%</p>
        <div className="h-4 w-px bg-gray-600"></div>
        <p className="text-gray-400">ETH:</p>
        <p className="text-emerald-500">
          $
          {livePrices.eth.toLocaleString(undefined, {
            maximumFractionDigits: 2,
          })}
        </p>
        <p className="text-xs text-red-500">-1.2%</p>
        <div className="h-4 w-px bg-gray-600"></div>
        <p className="text-gray-400">Market Cap:</p>
        <p className="text-emerald-500">${livePrices.marketCap.toFixed(2)}T</p>
      </section>

      <form>
        <label htmlFor="search" className="relative">
          <input
            type="search"
            placeholder="Search coin..."
            className="bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
          />
          <Search className="absolute left-2 top-0 text-gray-400" />
        </label>
      </form>

      <ProfileDropdown />
    </header>
  );
};
