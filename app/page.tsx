"use client";

import Link from "next/link";
import { ArkaOrb } from "../src/components/arkaverse/ArkaOrb";
import { useIdentityRender } from "../src/runtime/useIdentityRender";
import { CustomerNavbar } from "../src/components/customer/CustomerNavbar";
import { CustomerValueSection } from "../src/components/customer/CustomerValueSection";

export default function HomePage() {
  const { render, trigger } = useIdentityRender();

  return (
    <main className="min-h-screen bg-black text-white">

  <CustomerNavbar />


<section className="px-6 pt-20 pb-10 ">
  
  <div className="max-w-7xl mx-auto">

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center lg:[direction:ltr]">

      {/* Orb */}
      <div className="relative flex justify-center">

        <div className="absolute w-[650px] h-[650px] rounded-full bg-cyan-500/5 blur-3xl" />

        <div
          className="relative scale-125 lg:scale-150"
          onMouseEnter={() => trigger("hover")}
          onMouseLeave={() => trigger("load")}
          onClick={() => trigger("click")}
          onFocus={() => trigger("focus")}
          tabIndex={0}
        >
          <ArkaOrb
            scale={render?.scale ?? 1}
            glow={render?.glow ?? "soft"}
            blur={render?.blur ?? "0px"}
            state={render?.state ?? "idle"}
          />
        </div>

      </div>

      {/* Content */}
      <div className="text-center space-y-8">

        <div className="space-y-6">

          <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
            ARKAVERSE
          </h1>

          <div className="space-y-4 text-cyan-300">

            <p>معماری سیستم‌های کسب‌وکار</p>

            <div className="w-16 h-px bg-cyan-500/40 mx-auto" />

            <p>تحول دیجیتال</p>

            <div className="w-16 h-px bg-cyan-500/40 mx-auto" />

            <p>طراحی هوشمند سازمان</p>

          </div>

          <p className="max-w-2xl text-gray-400 text-xl leading-loose mx-auto">
            نظام‌مندی، هوشمندسازی و راهبری سیستم‌های اداری و تجاری
          </p>

        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">

          <Link
            href="/dashboard"
            className="px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition shadow-[0_0_30px_rgba(34,211,238,0.35)]"
          >
            آشنایی با آرکاورس
          </Link>

          <a
            href="#services"
            className="px-8 py-4 rounded-xl border border-white/10 hover:border-cyan-400 hover:bg-white/5 transition"
          >
            مشاهده خدمات
          </a>

        </div>

      </div>

    </div>

  </div>
</section>

<CustomerValueSection />
     <section
  id="services"
  className="px-6 py-20"
>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="border border-cyan-500/20 rounded-2xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-4 text-center">
  معماری سیستم‌های کسب‌وکار
</h3>

<div className="w-[220px] mx-auto">
  <p className="text-gray-400 leading-relaxed text-right">
  طراحی ساختارها، فرآیندها، نقش‌ها و چارچوب‌های مدیریتی
  برای ایجاد انسجام، شفافیت و اجرای مؤثر.
</p>
          </div>
          </div>

          <div className="border border-cyan-500/20 rounded-2xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-4 text-center">
  تحول دیجیتال
</h3>
<div className="max-w-xs mx-auto ">

<p className="text-gray-400 leading-relaxed text-right">
  تبدیل عملیات سنتی به سیستم‌های دیجیتال یکپارچه،
  قابل اندازه‌گیری و مبتنی بر داده.
</p>
          </div>
</div>
          <div className="border border-cyan-500/20 rounded-2xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-4 text-center">
  طراحی هوشمند سازمان
</h3>

<div className="w-[220px] mx-auto">
  <p className="text-gray-400 leading-relaxed text-right">
  ایجاد سازمان‌های یادگیرنده، چابک و مقیاس‌پذیر
  با تکیه بر هوشمندی عملیاتی و تصمیم‌گیری آگاهانه.
</p>
          </div>
</div>
        </div>
      </section>

      <section
  id="about"
  className="px-6 py-24"
>
        <div className="max-w-4xl mx-auto text-center">

          <h2 className="text-4xl font-bold mb-8">
  چرا بسیاری از سازمان‌ها به نتایج پایدار نمی‌رسند؟
</h2>

          <p className="text-gray-300 text-lg leading-relaxed">
  بخش بزرگی از چالش‌های سازمانی نه به دلیل کمبود تلاش،
  بلکه به دلیل نبود نظام‌های منسجم، فرآیندهای شفاف،
  مسئولیت‌های مشخص و جریان مؤثر اطلاعات شکل می‌گیرند.
</p>

          <p className="text-gray-400 text-lg leading-relaxed mt-6">
  آرکاورس با تمرکز بر معماری سیستم‌های کسب‌وکار،
  تحول دیجیتال و طراحی هوشمند سازمان،
  به ایجاد شفافیت عملیاتی، انسجام ساختاری
  و تصمیم‌گیری آگاهانه کمک می‌کند.
</p>

        </div>
      </section>

<section
  id="method"
  className="px-6 py-24"
>        <div className="max-w-5xl mx-auto">

         <h2 className="text-4xl font-bold text-center mb-16">
  رویکرد آرکاورس
</h2>

          <div className="grid md:grid-cols-3 gap-8">

            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-cyan-400 text-sm mb-3 text-center">
                01
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-center">
  شناخت و تحلیل
</h3>

<div className="w-[220px] mx-auto">
  <p className="text-gray-400 leading-relaxed text-right">
  بررسی وضعیت موجود، ساختارها،
  فرآیندها و چالش‌های سازمان.
</p>
            </div>
</div>
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-cyan-400 text-sm mb-3 text-center">
                02
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-center">
                 طراحی و نظام‌مندسازی
              </h3>

              <div className="w-[220px] mx-auto">
                <p className="text-gray-400 leading-relaxed text-right">
                ایجاد معماری عملیاتی،
                فرآیندها و چارچوب‌های مدیریتی.
                </p>
              </div>
              </div>
            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-cyan-400 text-sm mb-3 text-center">
                03
              </div>

              <h3 className="text-2xl font-semibold mb-4 text-center">
                 استقرار و توسعه
</h3>

<div className="w-[220px] mx-auto">
  <p className="text-gray-400 leading-relaxed text-right">
  پیاده‌سازی راهکارها،
  هوشمندسازی و بهبود مستمر.
</p>
            </div>
</div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 text-center">
        <div className="max-w-3xl mx-auto">

          <h2 className="text-4xl font-bold mb-6">
  آماده تحول هستید؟
</h2>

          <p className="text-gray-400 mb-10 text-lg">
  برای آشنایی بیشتر با رویکرد و راهکارهای آرکاورس،
  وارد اکوسیستم شوید.
</p>

          <Link
  href="/dashboard"
  className="inline-flex px-8 py-4 rounded-xl bg-cyan-500 text-black font-bold hover:scale-105 transition"
>
  آشنایی با آرکاورس
</Link>

        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-6xl mx-auto text-center">

          <h3 className="font-bold text-xl mb-3">
            ARKAVERSE
          </h3>

          <p className="text-gray-500">
  معماری سیستم‌های کسب‌وکار · تحول دیجیتال · طراحی هوشمند سازمان
</p>

        </div>
      </footer>

    </main>
  );
}