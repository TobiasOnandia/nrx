import { useState, useRef, useEffect } from "react";
import { Settings, User } from "lucide-react";
import { Session } from "./Session";

export const ProfileDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative">
      <button
        ref={buttonRef}
        onClick={() => setShowDropdown(!showDropdown)}
        className="p-2 rounded-lg hover:bg-gray-800 transition-colors relative"
        aria-haspopup="true"
        aria-expanded={showDropdown}
      >
        <Settings className="text-gray-300 w-5 h-5" />
      </button>

      {showDropdown && (
        <section
          ref={dropdownRef}
          className="absolute right-0 *:cursor-pointer mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-xl overflow-hidden z-50"
        >
          <button
            className="w-full px-4 py-2.5 text-left text-gray-300 hover:bg-gray-700 transition-colors flex items-center space-x-2"
            onClick={() => {
              setShowDropdown(false);
            }}
          >
            <User className="w-4 h-4" />
            <span>Perfil</span>
          </button>

          <button
            className="w-full px-4 py-2.5 text-left text-gray-300 hover:bg-gray-700 transition-colors flex items-center space-x-2"
            onClick={() => {
              setShowDropdown(false);
            }}
          >
            <Settings className="w-4 h-4" />
            <span>Configuración</span>
          </button>

          <div className="border-t border-gray-700 my-1">
            <Session />
          </div>
        </section>
      )}
    </div>
  );
};
