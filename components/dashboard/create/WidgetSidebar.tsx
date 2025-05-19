// components/dashboard/create/WidgetSidebar.tsx
"use client";
import { Draggable } from "@/components/dnd/Draggable";
import { availableWidgets } from "@/lib/widgets";
import { useState } from "react";

interface WidgetsSidebarProps {
  activeDraggableId: string | null;
}

export function WidgetsSidebar({ activeDraggableId }: WidgetsSidebarProps) {
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
    <div className="w-72 bg-gray-800 h-full p-4 rounded overflow-y-auto">
      <div className="mb-6">
        <h2 className="text-xl font-semibold mb-2">Widgets Disponibles</h2>
        <p className="text-sm text-gray-400">
          Arrastra o haz clic para añadir a tu dashboard
        </p>
      </div>

      <div className="space-y-3">
        {availableWidgets.map((widget) => (
          <Draggable
            key={widget.id}
            id={widget.id}
            // hideOriginal = true (por defecto)
            // isPositionedAbsolute = false (por defecto)
          >
            {/* Elimina la clase condicional opacity-0 de aquí, Draggable.tsx lo maneja */}
            <div className="group p-4 bg-gray-750 hover:bg-gray-700 rounded-lg cursor-pointer transition-colors border border-gray-700 hover:border-gray-600">
              <div className="flex items-start space-x-3">
                <div className="p-2 bg-gray-700 rounded-lg group-hover:bg-gray-600 transition-colors">
                  {widget.icon}
                </div>
                <div>
                  <h3 className="font-medium group-hover:text-white transition-colors">
                    {widget.title}
                  </h3>
                  <p className="text-sm text-gray-400">{widget.description}</p>
                  {widget.types && (
                    <div className="mt-2 flex flex-wrap gap-1">
                      {widget.types.map((type) => (
                        <span
                          key={type}
                          className="px-2 py-1 text-xs bg-gray-700 rounded-md"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  )}
                  {widget.metrics && (
                    <div className="mt-2">
                      <p className="text-xs text-gray-500">Incluye:</p>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {widget.metrics.map((metric) => (
                          <span
                            key={metric}
                            className="px-2 py-1 text-xs bg-gray-700 rounded-md"
                          >
                            {metric}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Draggable>
        ))}
      </div>

      <div className="mt-8 pt-6 border-t border-gray-700">
        <div className="flex justify-between items-center mb-3">
          <h3 className="font-medium">Tus Monedas</h3>
          <button
            className="text-emerald-500 hover:text-emerald-400 text-sm"
            onClick={handleAddCoin}
          >
            + Añadir
          </button>
        </div>
        <div className="space-y-2">
          {favoriteCoins.map((coin) => (
            <div
              key={coin}
              className="flex items-center justify-between p-2 hover:bg-gray-700 rounded-lg transition-colors"
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gray-600 rounded-full"></div>
                <span>{coin}</span>
              </div>
              <button
                className="text-gray-400 hover:text-white"
                onClick={() => handleRemoveCoin(coin)}
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
