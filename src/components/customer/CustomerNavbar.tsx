// src/components/customer/CustomerNavbar.tsx

import Link from "next/link";

export function CustomerNavbar() {
  return (
    <header
      className="
        sticky top-0 z-50
        w-full
        border-b border-white/10
        bg-black/70
        backdrop-blur-md
      "
    >
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

        <Link
          href="/"
          className="
            text-xl
            font-bold
            tracking-wide
            transition
            hover:text-cyan-300
          "
        >
          ARKAVERSE
        </Link>

        <nav className="hidden md:flex items-center gap-10 text-sm">

          <a
            href="#services"
            className="
              text-gray-300
              hover:text-cyan-300
              transition-colors
            "
          >
            خدمات
          </a>

          <a
            href="#method"
            className="
              text-gray-300
              hover:text-cyan-300
              transition-colors
            "
          >
            رویکرد
          </a>

          <a
            href="#about"
            className="
              text-gray-300
              hover:text-cyan-300
              transition-colors
            "
          >
            درباره آرکاورس
          </a>

        </nav>

        <Link
          href="/dashboard"
          className="
            px-5
            py-2.5
            rounded-xl
            bg-cyan-500
            text-black
            font-semibold
            transition
            hover:scale-105
            hover:shadow-[0_0_25px_rgba(6,182,212,0.5)]
          "
        >
          ورود
        </Link>

      </div>
    </header>
  );
}