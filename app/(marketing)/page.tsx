
'use client';

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import ArkaLogo from '@/app/components/ArkaLogo';
import OrderInvoiceEngine from '@/app/components/OrderInvoiceEngine';
// در ابتدای فایل import کنید
import ProjectEngageForm from '../components/ProjectEngageForm';

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

export default function MarketingPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollSectionRef = useRef<HTMLDivElement>(null);
  const cursorRef = useRef<HTMLDivElement>(null);

  // ماوس سفارشی لوکس
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const moveCursor = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        cursor.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
      });
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, []);

  useGSAP(() => {
    // ترنزیشن ورود متون هیرو
    const entryTl = gsap.timeline();
    entryTl.fromTo('.anim-title', 
      { y: 70, opacity: 0, rotateX: -20 },
      { y: 0, opacity: 1, rotateX: 0, stagger: 0.18, duration: 1.4, ease: 'power4.out', delay: 0.3 }
    )
    .fromTo('.hero-desc-text',
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' },
      '-=0.9'
    );

    // سیستم اسکرول قفل‌شونده ۳ گام (NMR)
    const steps = gsap.utils.toArray('.nmr-step');
    const bgColors = ['#05120e', '#05121b', '#0d0d11'];

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: scrollSectionRef.current,
        start: 'top top',
        end: `+=${steps.length * 120}%`,
        pin: true,
        scrub: 1.2,
      }
    });

    steps.forEach((step: any, index) => {
      if (index === 0) {
        tl.to(scrollSectionRef.current, { backgroundColor: bgColors[0], duration: 1 })
          .to('.progress-dot-1', { backgroundColor: '#05CD99', scale: 1.3, duration: 0.3 }, '-=1')
          .to(step.querySelector('.step-content'), { opacity: 0, y: -40, duration: 1 })
          .to(step.querySelector('.step-bg-text'), { x: -80, opacity: 0, duration: 1 }, '-=1');
      } else {
        tl.to(scrollSectionRef.current, { backgroundColor: bgColors[index], duration: 0.5 })
          .to(`.progress-dot-${index + 1}`, { backgroundColor: index === 1 ? '#00F2FE' : '#E2E8F0', scale: 1.3, duration: 0.3 }, '-=0.5')
          .to(`.progress-dot-${index}`, { backgroundColor: 'rgba(255,255,255,0.1)', scale: 1, duration: 0.3 }, '-=0.5')
          
          .fromTo(step, { display: 'none', opacity: 0 }, { display: 'flex', opacity: 1, duration: 0.5 })
          .fromTo(step.querySelector('.step-content'), { y: 40, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
          .fromTo(step.querySelector('.step-bg-text'), { x: 80, opacity: 0 }, { x: 0, opacity: 0.02, duration: 1 }, '-=1');
        
        if (index < steps.length - 1) {
          tl.to(step.querySelector('.step-content'), { opacity: 0, y: -40, duration: 1 })
            .to(step.querySelector('.step-bg-text'), { x: -80, opacity: 0, duration: 1 }, '-=1');
        }
      }
    });

    // فعال‌سازی روتین مانیتورینگ چراغ ۴ (سرویس‌ها) و چراغ ۵ (تماس با ما)
    gsap.to('.progress-dot-4', {
      scrollTrigger: {
        trigger: '#services-section',
        start: 'top center',
        end: 'bottom center',
        toggleActions: 'play reverse play reverse',
        onEnter: () => gsap.to('.progress-dot-4', { backgroundColor: '#00F2FE', scale: 1.3 }),
        onLeave: () => gsap.to('.progress-dot-4', { backgroundColor: 'rgba(255,255,255,0.1)', scale: 1 }),
        onEnterBack: () => gsap.to('.progress-dot-4', { backgroundColor: '#00F2FE', scale: 1.3 }),
        onLeaveBack: () => gsap.to('.progress-dot-4', { backgroundColor: 'rgba(255,255,255,0.1)', scale: 1 }),
      }
    });

    gsap.to('.progress-dot-5', {
      scrollTrigger: {
        trigger: '#contact-section',
        start: 'top center',
        end: 'bottom bottom',
        toggleActions: 'play reverse play reverse',
        onEnter: () => gsap.to('.progress-dot-5', { backgroundColor: '#05CD99', scale: 1.3 }),
        onLeaveBack: () => gsap.to('.progress-dot-5', { backgroundColor: 'rgba(255,255,255,0.1)', scale: 1 }),
      }
    });

  }, { scope: containerRef });

  return (
    <div ref={containerRef} className="bg-[#0B0F19] text-[#E2E8F0] min-h-screen relative overflow-x-hidden">
      
      <style>{`
        .custom-cursor {
          width: 24px;
          height: 24px;
          border: 1px solid rgba(255, 255, 255, 0.4);
          background-color: transparent !important;
          border-radius: 50%;
          position: fixed;
          top: 0;
          left: 0;
          pointer-events: none;
          z-index: 999999;
          margin: -12px 0 0 -12px;
          will-change: transform;
          transition: width 0.3s ease, height 0.3s ease, margin 0.3s ease, background-color 0.3s ease, border-color 0.3s ease;
        }
        .custom-cursor.cursor-hovered {
          width: 64px;
          height: 64px;
          margin: -32px 0 0 -32px;
          background-color: rgba(255, 255, 255, 0.07) !important;
          border-color: #00F2FE;
        }
      `}</style>
      
      <div ref={cursorRef} className="hidden md:block custom-cursor" />

      {/* ناوبری هوشمند چراغ‌ها متصل به ۵ موقعیت لایه‌ای سایت */}
      <div className="fixed left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-5 z-40">
        <div className="progress-dot-1 w-1.5 h-1.5 rounded-full bg-[#00F2FE] scale-130 transition-all duration-300" title="خانه" />
        <div className="progress-dot-2 w-1.5 h-1.5 rounded-full bg-white/10 transition-all duration-300" title="مکانیزاسیون" />
        <div className="progress-dot-3 w-1.5 h-1.5 rounded-full bg-white/10 transition-all duration-300" title="راهبری" />
        <div className="progress-dot-4 w-1.5 h-1.5 rounded-full bg-white/10 transition-all duration-300" title="خدمات و محاسبات" />
        <div className="progress-dot-5 w-1.5 h-1.5 rounded-full bg-white/10 transition-all duration-300" title="ارتباط با ما" />
      </div>

      {/* هدر ثابت شیشه‌ای */}
      <header className="fixed top-0 left-0 w-full z-50 px-8 md:px-16 bg-[#0B0F19]/60 backdrop-blur-md border-b border-b-white/[0.03] shadow-[0_4px_30px_rgba(0,0,0,0.4)] h-24 flex items-center">
        <div className="absolute left-8 md:left-16 top-1/2 -translate-y-1/2 flex flex-col gap-1.5 text-left" style={{ direction: 'ltr' }}>
          <div className="flex items-center gap-3 justify-start">
            <div className="w-1.5 h-1.5 rounded-full bg-[#00F2FE] shadow-[0_0_10px_#00F2FE]" />
            <span className="text-[10px] tracking-[0.35em] font-mono text-[#E2E8F0]/50 uppercase">
              OPERATIONAL EXCELLENCE // 2026
            </span>
          </div>
          <span className="text-[9px] tracking-[0.2em] font-mono text-[#00F2FE]/50 uppercase pl-4.5">
            THE CORE FRAMEWORK // SYSTEMS & GOVERNANCE
          </span>
        </div>
        <div className="absolute right-8 md:right-16 top-1/2 -translate-y-1/2 flex items-center">
          <ArkaLogo />
        </div>
      </header>

      {/* بخش هیرو */}
      <section className="min-h-screen w-full flex flex-col justify-center pt-36 pb-20 relative px-8 md:px-32 z-10 overflow-hidden bg-[#0B0F19]">
        <div className="max-w-6xl w-full mr-auto md:mr-16">
          <h1 className="text-6xl md:text-7.5xl font-extrabold leading-[1.45] text-white text-right tracking-tight">
            <div className="block overflow-hidden py-1">
              <span className="anim-title block interactive transition-colors duration-300 hover:text-[#00F2FE] origin-right">نظام‌مندی،</span>
            </div>
            <div className="block overflow-hidden py-1">
              <span className="anim-title block text-transparent bg-clip-text bg-gradient-to-r from-[#00F2FE] to-[#05CD99] origin-right">
                مکانیزاسیون و
              </span>
            </div>
            <div className="block overflow-hidden py-1">
              <span className="anim-title block text-white/90 origin-right">راهبری سیستم‌های اداری و تجاری</span>
            </div>
          </h1>

          <div className="hero-desc-block flex flex-col md:flex-row items-end md:items-start justify-end gap-6 mt-14 w-full">
            <div className="font-mono text-[9px] tracking-[0.2em] text-[#00F2FE] bg-[#00F2FE]/5 border border-[#00F2FE]/10 px-3 py-1 rounded-sm order-2 md:order-1 select-none pointer-events-none">
              // ARCHITECTURE ENGINE
            </div>
            <p className="hero-desc-text text-base md:text-lg text-[#E2E8F0]/40 max-w-2xl font-normal leading-relaxed border-r-2 border-[#00F2FE]/30 pr-6 text-right order-1 md:order-2">
              مهندسی زیرساخت‌های اداری و تجاری. ما فرآیندهای آشفته را به انضباط ساختاری بدل کرده، با ابزارهای هوشمند خودکارسازی می‌کنیم و تا پایداری مطلق، فرمان را در دست نگاه می‌داریم.
            </p>
          </div>
        </div>
      </section>

      {/* بخش ۳ گام اسکرول قفل‌شونده (NMR) */}
      <section ref={scrollSectionRef} className="h-screen w-full relative bg-[#070A11] border-t border-white/[0.01]">
        {/* گام ۱ */}
        <div className="nmr-step absolute inset-0 w-full h-full flex items-center px-8 md:px-32 overflow-hidden">
          <div className="step-bg-text absolute right-10 bottom-0 text-[22vw] font-black font-mono text-white select-none pointer-events-none leading-none opacity-[0.01] tracking-tighter translate-y-16">
            01/SYSTEM
          </div>
          <div className="step-content max-w-4xl z-10 mr-auto text-right md:mr-16">
            <span className="text-xs font-mono tracking-[0.4em] text-[#05CD99] block mb-4">// ARCHITECTURAL ORDER</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">نظام‌مندی ساختار</h2>
            <p className="text-base md:text-lg text-[#E2E8F0]/50 font-normal leading-relaxed max-w-3xl">
              هیچ ابزار مدرنی روی فرآیندهای سنتیِ آشفته معجزه نمی‌کند. ما ابتدا تمام لایه‌های اداری، مالی و تجاری شما را کالبدشکافی کرده و یک گرید منسجم، مکمل و شفاف خلق می‌کنیم. نظم، رکن اصلی قدرت سازمان است.
            </p>
          </div>
        </div>

        {/* گام ۲ */}
        <div className="nmr-step absolute inset-0 w-full h-full hidden items-center px-8 md:px-32 overflow-hidden">
          <div className="step-bg-text absolute right-10 bottom-0 text-[22vw] font-black font-mono text-white select-none pointer-events-none leading-none opacity-[0.01] tracking-tighter translate-y-16">
            02/AUTOMATE
          </div>
          <div className="step-content max-w-4xl z-10 mr-auto text-right md:mr-16">
            <span className="text-xs font-mono tracking-[0.4em] text-[#00F2FE] block mb-4">// COGNITIVE AUTOMATION</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">مکانیزاسیون هوشمند</h2>
            <p className="text-base md:text-lg text-[#E2E8F0]/50 font-normal leading-relaxed max-w-3xl">
              خروج مقتدرانه از عصر سنتی. فرآیندهای نظام‌مندشده را به نرم‌افزارهای تحت وب اختصاصی و موتورهای خودکارسازی متصل می‌کنیم. تزریق فناوری به قلب سازمان برای حذف خطای انسانی و جهش سرعت عملکرد.
            </p>
          </div>
        </div>

        {/* گام ۳ */}
        <div className="nmr-step absolute inset-0 w-full h-full hidden items-center px-8 md:px-32 overflow-hidden">
          <div className="step-bg-text absolute right-10 bottom-0 text-[22vw] font-black font-mono text-white select-none pointer-events-none leading-none opacity-[0.01] tracking-tighter translate-y-16">
            03/GOVERN
          </div>
          <div className="step-content max-w-4xl z-10 mr-auto text-right md:mr-16">
            <span className="text-xs font-mono tracking-[0.4em] text-white/30 block mb-4">// SUSTAINED STEWARDSHIP</span>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">راهبری و هدایت استراتژیک</h2>
            <p className="text-base md:text-lg text-[#E2E8F0]/50 font-normal leading-relaxed max-w-3xl mb-10">
              ما سیستم‌ها را رها نمی‌کنیم. با پایش مداوم داشبوردها، آموزش عمیق سرمایه‌های انسانی و استقرار پورتال‌های پشتیبانی، تضمین می‌کنیم که ارکان نوین سازمان شما همواره نظام‌مند، مدرن و پیشرو باقی بمانند.
            </p>
          </div>
        </div>
      </section>

      {/* 💻 بخش معرفی خدمات مهندسی نرم‌افزار و پلتفرم‌ها */}
      <section id="services-section" className="bg-[#080B11] py-32 px-8 md:px-32 relative border-t border-white/[0.02]">
        <div className="max-w-6xl mx-auto">
          <span className="text-xs font-mono tracking-[0.4em] text-[#00F2FE] block mb-4 uppercase">// ENGINE CAPABILITIES</span>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-16 text-right">توسعه کدهای اختصاصی و پلتفرم‌ها</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-[#0B0F19]/40 backdrop-blur-md p-8 rounded-xl border border-white/[0.03] hover:border-[#00F2FE]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#00F2FE]/10 flex items-center justify-center text-[#00F2FE] mb-6 text-xl font-mono">// 01</div>
              <h3 className="text-xl font-bold text-white mb-4 text-right">نرم‌افزارهای تخصصی تحت وب</h3>
              <p className="text-sm text-[#E2E8F0]/50 leading-relaxed text-right">
                طراحی سامانه‌های بسیار عمیق و پیچیده ابری (SaaS)، پنل‌های مانیتورینگ اداری و موتورهای پیشرفته پردازش داده با رندر آنی ساختار دیتابیس.
              </p>
            </div>

            <div className="bg-[#0B0F19]/40 backdrop-blur-md p-8 rounded-xl border border-white/[0.03] hover:border-[#05CD99]/30 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-[#05CD99]/10 flex items-center justify-center text-[#05CD99] mb-6 text-xl font-mono">// 02</div>
              <h3 className="text-xl font-bold text-white mb-4 text-right">سایت‌های حرفه‌ای و تخصصی</h3>
              <p className="text-sm text-[#E2E8F0]/50 leading-relaxed text-right">
                توسعه پلتفرم‌های مینی‌مال شرکتی و پورتال‌های برندینگ با تکیه بر فریم‌ورک‌های فوق‌مدرن و ترنزیشن‌های کاملاً کاستومایز شده روان و بی نقص.
              </p>
            </div>

            <div className="bg-[#0B0F19]/40 backdrop-blur-md p-8 rounded-xl border border-white/[0.03] hover:border-white/20 transition-all duration-300">
              <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center text-white/70 mb-6 text-xl font-mono">// 03</div>
              <h3 className="text-xl font-bold text-white mb-4 text-right">فروشگاه‌های اینترنتی لوکس</h3>
              <p className="text-sm text-[#E2E8F0]/50 leading-relaxed text-right">
                معماری فروشگاه‌های بزرگ متصل به هسته انبارداری هوشمند بدون افت سرعت، مجهز به لایه‌های پایداری تراکنش و درگاه‌های بانکی بدون قطعی.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 📑 موتور هوشمند سفارش، فاکتور و تسویه حساب */}
      <OrderInvoiceEngine />

      {/* 📞 بخش تماس با ما و شبکه ارتباطی جدید */}
          <section id="contact-section" className="bg-[#06090e] py-32 px-8 md:px-32 relative border-t border-white/[0.01] pb-40">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
              <div className="text-right">
                <span className="text-xs font-mono tracking-[0.4em] text-[#05CD99] block mb-4">// ARCHITECTURE NETWORK</span>
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">شروع توسعه کلان</h2>
                <p className="text-sm text-[#E2E8F0]/40 leading-relaxed mb-8">
                  پروژه، ساختار فرآیندی یا ایده استارتاپی خود را مطرح کنید. تیم فنی آرکاورس پس از پردازش فرم، سند پروپوزال فنی اولیه را ارسال خواهد کرد.
                </p>
                <div className="flex flex-col gap-5 font-mono text-xs text-[#E2E8F0]/70">
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-white hover:text-[#00F2FE] transition-colors">INFO@ARKAVERSE.IR</span>
                    <span className="text-[#05CD99]">// SECURE EMAIL</span>
                  </div>
                  <div className="flex items-center gap-3 justify-end">
                    <span className="text-white tracking-widest" style={{ direction: 'ltr' }}>+98 992 732 0627</span>
                    <span className="text-[#05CD99]">// DIRECT PHONE</span>
                  </div>
                </div>
              </div>

              {/* فراخوانی فرم هوشمند به جای فرم دستی */}
              <div className="w-full">
                <ProjectEngageForm />
              </div>
            </div>
          </section>
        </div>
      );
    }