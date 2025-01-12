import Link from "next/link";
import Search from "./search";

export default function Navbar() {
  return (
    <header className="bg-gray-300 shadow-md">
      <nav className="flex items-center justify-between  px-10 py-4">
        <img className="w-16 h-16 " src="next.svg" alt="Globe icon" />

        <Search />
      </nav>
    </header>
  );
}
