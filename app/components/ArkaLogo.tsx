"use client";

import React from 'react';

export default function ArkaLogo() {
  return (
    // لایه اصلی: چیدمان عمودی برای تراز مرکزی شعار در زیربنا
    <div className="flex flex-col items-center justify-center select-none cursor-pointer group" style={{ direction: 'rtl' }}>
      
      {/* استایل‌های بومی ماتریکس سه‌بعدی و انیمیشن چرخش مداری گوی */}
      <style>{`
        @keyframes rotate3D {
          0% { transform: rotateX(15deg) rotateY(0deg); }
          100% { transform: rotateX(15deg) rotateY(360deg); }
        }
        .sphere-wrapper {
          transform-style: preserve-3d;
          animation: rotate3D 12s linear infinite;
        }
        .ring-3d {
          position: absolute;
          width: 100%;
          height: 100%;
          border: 2px solid #00F2FE;
          border-radius: 50%;
          box-shadow: 0 0 10px rgba(0, 242, 254, 0.4), inset 0 0 10px rgba(0, 242, 254, 0.2);
          transform-style: preserve-3d;
        }
      `}</style>

      {/* ردیف اول: نام برند و گوی (نوشته‌های دوطبقه در چپ، کره چرخنده بزرگ‌تر شده در راست) */}
      <div className="flex items-center gap-4">
        
        {/* باکس دو طبقه متون برند در سمت چپِ کره طبق استاندارد لاتین */}
        <div className="flex flex-col items-start space-y-0" style={{ direction: 'ltr' }}>
          {/* کلمه Arka باریک و مینی‌مال */}
          <span className="text-lg md:text-xl font-light text-[#E2E8F0] leading-tight transition-colors group-hover:text-white">
            Arka
          </span>
          {/* کلمه Verse ضخیم و نئونی */}
          <span className="text-lg md:text-xl font-extrabold text-[#00F2FE] leading-tight drop-shadow-[0_0_8px_rgba(0,242,254,0.4)]">
            Verse
          </span>
        </div>

        {/* سازه کروی کاملاً سه‌بعدی، فیزیکی و چرخنده (اندازه با هماهنگی دقیق افزایش یافته است) */}
        <div className="w-11 h-11 relative flex items-center justify-center bg-transparent">
          <div className="sphere-wrapper w-9.5 h-9.5 relative">
            <div className="ring-3d" style={{ transform: 'rotateX(90deg)' }}></div>
            <div className="ring-3d" style={{ transform: 'rotateY(0deg)', borderColor: '#05CD99', boxShadow: '0 0 10px rgba(5,205,153,0.3)' }}></div>
            <div className="ring-3d" style={{ transform: 'rotateY(45deg)' }}></div>
            <div className="ring-3d" style={{ transform: 'rotateY(90deg)', borderColor: '#05CD99', boxShadow: '0 0 10px rgba(5,205,153,0.3)' }}></div>
            <div className="ring-3d" style={{ transform: 'rotateY(135deg)' }}></div>
            <div className="absolute w-1.5 h-1.5 bg-white rounded-full left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 shadow-[0_0_8px_#ffffff]"></div>
          </div>
        </div>

      </div>

      {/* ردیف دوم: شعار سازمانی مقتدر وسیع و تراز شده در زیربنا به صورت کاملاً وسط‌چین */}
      <span className="text-[7.5px] md:text-[8.5px] text-[#05CD99] font-semibold tracking-[0.22em] mt-2 pr-0.5 opacity-90 text-center w-full">
        SYSTEMS & GOVERNANCE
      </span>

    </div>
  );
}
