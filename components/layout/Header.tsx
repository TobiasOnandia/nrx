"use client";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";
import { Session } from "../auth/Session";
import Link from "next/link";
export const Header = () => {
  const searchParams = new URLSearchParams();
  const router = useRouter();

  const handleSearch = useDebouncedCallback((term: string) => {
    const params = new URLSearchParams(searchParams);

    if (term) {
      params.set("search", term);
    } else {
      params.delete("search", term);
    }

    router.replace(`?${params}`);
  }, 600);

  return (
    <header className="bg-gray-900 max-w-7xl mx-auto px-4 flex items-center justify-between h-16 sm:px-6 lg:px-8 ">
      <nav className="hidden md:flex gap-6">
        <Link
          href="/"
          className="text-gray-300 hover:text-emerald-500 transition-colors"
        >
          Home
        </Link>
      </nav>
      <Link href="/dashboard">Dashboard</Link>
      <label className="relative">
        <input
          type="search"
          placeholder="Search coin..."
          onChange={(event) => {
            handleSearch(event.target.value);
          }}
          className="bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
        />
        <Search className="absolute left-2 top-1.5 text-gray-400" />
      </label>
      <div>
        <Session />
      </div>
    </header>
  );
};
