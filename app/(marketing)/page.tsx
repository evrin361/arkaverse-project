"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";


// رجیستر کردن بومی در محیط کلاینت
if (typeof window !== "undefined") {
  gsap.registerPlugin(useGSAP);
}

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    // انیمیشن ورودی لوگو و متن اصلی
    tl.fromTo(logoRef.current, { opacity: 0, y: -20 }, { opacity: 1, y: 0 })
      .fromTo(".nav-item", { opacity: 0, y: -20 }, { opacity: 1, y: 0, stagger: 0.1 }, "-=0.7")
      .fromTo(".btn-cta", { opacity: 0, scale: 0.9 }, { opacity: 1, scale: 1 }, "-=0.5")
      .fromTo(heroTextRef.current, { opacity: 0, y: 40 }, { opacity: 1, y: 0 }, "-=0.5");
  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="min-h-screen flex flex-col overflow-x-hidden">
      {/* هدر سایت */}
      <header className="border-b border-arkaText/10 backdrop-blur-md sticky top-0 z-50 bg-arkaBg/80">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* لوگو */}
          <div ref={logoRef} className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-arkaCyan flex items-center justify-center font-bold text-arkaBg">A</div>
            <span className="text-xl font-black tracking-wider text-white">Arka<span className="text-arkaCyan">Verse</span></span>
          </div>

          {/* آیتم‌های منو */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#" className="nav-item text-arkaCyan transition-colors">صفحه اصلی</a>
            <a href="#" className="nav-item text-arkaText/70 hover:text-white transition-colors">نظام‌مندی</a>
            <a href="#" className="nav-item text-arkaText/70 hover:text-white transition-colors">مکانیزاسیون</a>
            <a href="#" className="nav-item text-arkaText/70 hover:text-white transition-colors">راهبری سیستم‌ها</a>
          </nav>

          {/* دکمه */}
          <div>
            <button className="btn-cta bg-arkaCyan/10 hover:bg-arkaCyan text-arkaCyan hover:text-arkaBg border border-arkaCyan/30 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-300">
              ورود به پنل مدیریت
            </button>
          </div>

        </div>
      </header>

      {/* بخش مرکزی یا Hero */}
      <main className="flex-1 max-w-7xl mx-auto px-6 flex flex-col justify-center items-center text-center relative py-20">
        
        {/* افکت نئونی پس‌زمینه */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[500px] h-[300px] bg-arkaCyan/10 blur-[120px] rounded-full pointer-events-none" />

        <div ref={heroTextRef} className="relative z-10 space-y-6 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-arkaGreen/10 border border-arkaGreen/20 px-4 py-1.5 rounded-full text-xs font-medium text-arkaGreen">
            <span className="w-1.5 h-1.5 rounded-full bg-arkaGreen" />
            آینده مدیریت کسب‌وکار در دستان شما
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white leading-tight md:leading-snug">
            خلق نظام‌مندی و <br className="hidden md:block"/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-arkaCyan to-arkaGreen">مکانیزاسیون هوشمند</span> اداری
          </h1>
          
          <p className="text-base md:text-lg text-arkaText/70 max-w-2xl mx-auto leading-relaxed">
            مجموعه آرکاوِرس (ArkaVerse) بستر راهبری سیستم‌های اداری و تجاری مدرن را بر پایه پایداری فراهم می‌کند.
          </p>
        </div>

      </main>
    </div>
  );
}
