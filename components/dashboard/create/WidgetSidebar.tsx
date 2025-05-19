"use client";
import { Draggable } from "@/components/dnd/Draggable";
import { availableWidgets } from "@/lib/widgets";
import { Plus, X } from "lucide-react";
import { useState } from "react";

export function WidgetsSidebar() {
  const [favoriteCoins, setFavoriteCoins] = useState([
    "BTC",
    "ETH",
    "SOL",
    "ADA",
  ]);

  const handleAddCoin = () => {
    alert("Lógica para añadir moneda");
  };

  const handleRemoveCoin = (coinToRemove: string) => {
    setFavoriteCoins(favoriteCoins.filter((coin) => coin !== coinToRemove));
  };

  return (
    <aside
      className="w-72 bg-gray-800 h-full p-4 rounded overflow-y-auto"
      aria-label="Barra lateral de widgets"
    >
      <header>
        <h2 className="text-xl font-semibold mb-2">Widgets Disponibles</h2>
        <p className="text-sm text-gray-400 mb-6">
          Arrastra o haz clic para añadir a tu dashboard
        </p>
      </header>

      <section aria-labelledby="widgets-list">
        <ul id="widgets-list" className="space-y-3">
          {availableWidgets.map((widget) => (
            <li key={widget.id}>
              <Draggable id={widget.id}>
                <article
                  className="group p-4 bg-gray-750 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors border border-gray-700 hover:border-gray-600"
                  role="button"
                  aria-label={`Widget ${widget.title}`}
                >
                  <div className="flex items-start space-x-3">
                    <span className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                      {widget.icon}
                    </span>
                    <div>
                      <h3 className="font-medium group-hover:text-white transition-colors">
                        {widget.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {widget.description}
                      </p>

                      {widget.types && (
                        <p
                          className="mt-2 flex flex-wrap gap-1"
                          aria-label="Tipos del widget"
                        >
                          {widget.types.map((type) => (
                            <span
                              key={type}
                              className="px-2 py-1 text-xs bg-gray-700 rounded-md"
                            >
                              {type}
                            </span>
                          ))}
                        </p>
                      )}

                      {widget.metrics && (
                        <p className="mt-2">
                          <span className="text-xs text-gray-500">
                            Incluye:
                          </span>
                          {widget.metrics.map((metric) => (
                            <span
                              key={metric}
                              className="px-2 py-1 flex w-fit flex-wrap gap-1 mt-1 text-xs bg-gray-700 rounded-md"
                            >
                              {metric}
                            </span>
                          ))}
                        </p>
                      )}
                    </div>
                  </div>
                </article>
              </Draggable>
            </li>
          ))}
        </ul>
      </section>

      <section
        className="mt-8 pt-6 border-t border-gray-700"
        aria-labelledby="favorite-coins"
      >
        <header className="flex justify-between items-center mb-3">
          <h3 id="favorite-coins" className="font-medium">
            Tus Monedas
          </h3>
          <button
            className="text-emerald-500 flex items-center hover:text-emerald-400 text-sm"
            onClick={handleAddCoin}
            aria-label="Añadir nueva moneda favorita"
          >
            <Plus className="w-4 h-4 mr-2" /> Añadir
          </button>
        </header>

        <ul className="space-y-2">
          {favoriteCoins.map((coin) => (
            <li
              key={coin}
              className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <p className="flex items-center space-x-2">
                <span>{coin}</span>
              </p>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => handleRemoveCoin(coin)}
                aria-label={`Eliminar moneda ${coin}`}
              >
                <X />
              </button>
            </li>
          ))}
        </ul>
      </section>
    </aside>
  );
}
