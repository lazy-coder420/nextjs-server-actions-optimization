"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const linkClass = (path) =>
    `px-4 py-2 rounded-lg transition ${
      pathname === path
        ? "bg-blue-500 text-white"
        : "text-gray-600 hover:bg-gray-100"
    }`;

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">
        
        {/* Logo */}
        <h1 className="text-xl font-bold text-blue-600">
          MyApp
        </h1>

        {/* Links */}
        <div className="flex gap-2">
          <Link href="/" className={linkClass("/")}>
            Home
          </Link>

          <Link href="/task" className={linkClass("/task")}>
            Tasks
          </Link>

          <Link href="/book" className={linkClass("/book")}>
            Books
          </Link>
        </div>

      </div>
    </nav>
  );
}