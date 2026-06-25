"use client";

import Link from "next/link";
import { ArkaOrb } from "../src/components/arkaverse/ArkaOrb";
import { useIdentityRender } from "../src/runtime/useIdentityRender";
import { CustomerNavbar } from "../src/components/customer/CustomerNavbar";

export default function HomePage() {
  const { render, trigger } = useIdentityRender();

  return (
    <main className="min-h-screen bg-black text-white">

  <CustomerNavbar />



      <section className="px-6 pt-24 pb-20 flex flex-col items-center text-center">
        <div className="max-w-5xl w-full flex flex-col items-center gap-10">

          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-bold tracking-tight">
              ARKAVERSE
            </h1>

            <div className="text-cyan-300 text-lg md:text-xl font-medium space-y-1">
  <p>معماری سیستم‌های کسب‌وکار</p>
  <p>تحول دیجیتال</p>
  <p>طراحی هوشمند سازمان</p>
</div>

<p className="max-w-3xl text-gray-300 text-lg leading-relaxed mx-auto">
  نظام‌مندی، هوشمندسازی و راهبری سیستم‌های اداری و تجاری
</p>
          </div>

          <div
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
      </section>

     <section
  id="services"
  className="px-6 py-20"
>
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">

          <div className="border border-cyan-500/20 rounded-2xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-4">
  معماری سیستم‌های کسب‌وکار
</h3>

<p className="text-gray-400 leading-relaxed">
  طراحی ساختارها، فرآیندها، نقش‌ها و چارچوب‌های مدیریتی
  برای ایجاد انسجام، شفافیت و اجرای مؤثر.
</p>
          </div>

          <div className="border border-cyan-500/20 rounded-2xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-4">
  تحول دیجیتال
</h3>

<p className="text-gray-400 leading-relaxed">
  تبدیل عملیات سنتی به سیستم‌های دیجیتال یکپارچه،
  قابل اندازه‌گیری و مبتنی بر داده.
</p>
          </div>

          <div className="border border-cyan-500/20 rounded-2xl p-8 bg-white/5">
            <h3 className="text-2xl font-semibold mb-4">
  طراحی هوشمند سازمان
</h3>

<p className="text-gray-400 leading-relaxed">
  ایجاد سازمان‌های یادگیرنده، چابک و مقیاس‌پذیر
  با تکیه بر هوشمندی عملیاتی و تصمیم‌گیری آگاهانه.
</p>
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
              <div className="text-cyan-400 text-sm mb-3">
                01
              </div>

              <h3 className="text-2xl font-semibold mb-4">
  شناخت و تحلیل
</h3>

<p className="text-gray-400">
  بررسی وضعیت موجود، ساختارها،
  فرآیندها و چالش‌های سازمان.
</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-cyan-400 text-sm mb-3">
                02
              </div>

              <h3 className="text-2xl font-semibold mb-4">
  طراحی و نظام‌مندسازی
</h3>

<p className="text-gray-400">
  ایجاد معماری عملیاتی،
  فرآیندها و چارچوب‌های مدیریتی.
</p>
            </div>

            <div className="border border-white/10 rounded-2xl p-8">
              <div className="text-cyan-400 text-sm mb-3">
                03
              </div>

              <h3 className="text-2xl font-semibold mb-4">
  استقرار و توسعه
</h3>

<p className="text-gray-400">
  پیاده‌سازی راهکارها،
  هوشمندسازی و بهبود مستمر.
</p>
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