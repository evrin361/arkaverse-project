'use client';
import { useState } from 'react';

export default function ProjectEngageForm() {
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');

    // شبیه‌سازی ارسال (فردا به سوپابیس وصل می‌کنیم)
    setTimeout(() => {
      setStatus('success');
    }, 1500);
  };

  return (
    <div className="max-w-2xl mx-auto w-full">
        {status === 'success' ? (
          <div className="p-12 border border-[#00F2FE]/20 bg-[#00F2FE]/5 rounded-2xl text-center">
            <div className="text-[#00F2FE] text-4xl mb-4">✓</div>
            <h4 className="text-white font-bold text-xl">درخواست شما با موفقیت ثبت شد</h4>
            <p className="text-white/50 text-sm mt-2">تیم فنی آرکاورس در اولین فرصت بررسی و با شما تماس خواهند گرفت.</p>
            {/* دکمه بازگشت به حالت اولیه */}
    <button 
      onClick={() => setStatus('idle')}
      className="text-[#00F2FE] border border-[#00F2FE]/30 px-6 py-2 rounded-lg text-sm hover:bg-[#00F2FE]/10 transition-colors"
    >
      ارسال درخواست جدید
    </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <input 
              required
              type="text" 
              placeholder="نام متقاضی / عنوان سازمان" 
              className="w-full bg-[#0B0F19] border border-white/[0.05] p-5 rounded-xl text-white placeholder:text-white/20 focus:border-[#00F2FE] outline-none transition-all"
            />
            <input 
              required
              type="text" 
              placeholder="شماره تماس یا ایمیل" 
              className="w-full bg-[#0B0F19] border border-white/[0.05] p-5 rounded-xl text-white placeholder:text-white/20 focus:border-[#00F2FE] outline-none transition-all"
            />
            <textarea 
              required
              rows={5}
              placeholder="شرح جزییات و نیازمندی‌های سیستم شما..." 
              className="w-full bg-[#0B0F19] border border-white/[0.05] p-5 rounded-xl text-white placeholder:text-white/20 focus:border-[#00F2FE] outline-none transition-all resize-none"
            />
            <button 
              disabled={status === 'submitting'}
              type="submit"
              className="w-full py-5 mt-2 bg-[#00F2FE] text-[#0B0F19] font-black tracking-tight text-lg rounded-xl hover:bg-white transition-colors disabled:opacity-50"
            >
              {status === 'submitting' ? 'در حال ثبت در پایگاه داده...' : 'ثبت نهایی درخواست // ENGAGE'}
            </button>
          </form>
        )}
    </div>
  );
}