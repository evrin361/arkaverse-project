// src/components/customer/CustomerNavbar.tsx

import Link from "next/link";

export function CustomerNavbar() {
  return (
    <header className="w-full border-b border-white/10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="text-xl font-bold tracking-wide"
        >
          ARKAVERSE
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-gray-300">

          <a href="#services" className="hover:text-cyan-300 transition">
            خدمات
          </a>

          <a href="#method" className="hover:text-cyan-300 transition">
            رویکرد
          </a>

          <a href="#about" className="hover:text-cyan-300 transition">
            درباره آرکاورس
          </a>

        </nav>

        <Link
          href="/dashboard"
          className="px-4 py-2 rounded-lg bg-cyan-500 text-black font-semibold"
        >
          ورود
        </Link>

      </div>
    </header>
  );
}