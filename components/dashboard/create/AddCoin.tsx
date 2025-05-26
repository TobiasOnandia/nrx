"use client";
import { X } from "lucide-react";
import { useState } from "react";

export const AddCoin = () => {
  const [favoriteCoins] = useState(["BTC", "ETH", "SOL", "ADA"]);

  return (
    <section
      className="mt-8 pt-6 border-t border-gray-700"
      aria-labelledby="coins-section"
    >
      <header className="flex justify-between items-center mb-3">
        <h3 id="coins-section" className="font-medium">
          Tus Monedas
        </h3>
        <button
          type="button"
          className="text-emerald-500 hover:text-emerald-400 text-sm"
          aria-label="Añadir nueva moneda"
        >
          + Añadir
        </button>
      </header>
      <ul role="list" className="space-y-2">
        {favoriteCoins.map((coin) => (
          <li key={coin}>
            <article className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg transition-colors">
              <p className="flex items-center space-x-2">
                <span>{coin}</span>
              </p>
              <button
                type="button"
                className="text-gray-400 hover:text-white"
                aria-label={`Eliminar ${coin} de favoritos`}
              >
                <X />
              </button>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
};
