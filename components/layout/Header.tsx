"use client";
import { Search } from "lucide-react";
import { useState, useEffect } from "react";
import { ProfileDropdown } from "@/components/auh/ProfileDropwon";
import { useRouter } from "next/navigation";

export const Header = () => {
  const searchParams = new URLSearchParams()
  const router = useRouter()
  

  const handleSearch = (term:string) => {
    const params = new URLSearchParams(searchParams)

    if(term) {
      params.set("search",term)
    }else {
      params.delete("search", term)
    }

    router.replace(`?${params}`)
  }

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
      <a href="/dashboard/create">Create Dashboard</a>
          <label className="relative">
            <input
            type="search"
            placeholder="Search coin..."
            onChange={(event) => {handleSearch(event.target.value)}}
            className="bg-gray-800 rounded-lg pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 w-64"
            />
            <Search className="absolute left-2 top-1.5 text-gray-400" />
          </label >

      <ProfileDropdown />
    </header>
  );
};
