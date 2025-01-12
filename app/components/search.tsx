"use client";
import React, { useState, FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function Search() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  function handleSearch(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSearch("");
    router.push(`/${search}/`);
  }

  return (
    <form
      onSubmit={handleSearch}
      className="flex items-center border-2 border-black rounded-md overflow-hidden"
    >
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="p-2 flex-grow text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search..."
      />
      <button
        className="p-2 bg-black text-white hover:bg-gray-800 transition-all duration-300"
        type="submit"
      >
        🔍
      </button>
    </form>
  );
}
