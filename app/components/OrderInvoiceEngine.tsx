'use client';
import { useState } from 'react';

interface ServiceItem {
  id: string;
  name: string;
  price: number;
  desc: string;
}

const SERVICES_DATABASE: ServiceItem[] = [
  { id: 'saas', name: 'توسعه نرم‌افزار تخصصی و تحت وب (SaaS)', price: 3800000000, desc: 'طراحی فرانت‌اند دایرکت، وب‌سرویس‌ها، دیتابیس ابری و هسته اتوماسیون فرآیندها' },
  { id: 'corp', name: 'طراحی سایت شرکتی و تخصصی لوکس', price: 1200000000, desc: 'انیمیشن‌های فوق پیشرفته GSAP، بهینه‌سازی لود و سئو تجاری به همراه UI/UX اختصاصی' },
  { id: 'shop', name: 'پلتفرم فروشگاهی پیشرفته و چندمنظوره', price: 2400000000, desc: 'سیستم انبارداری دیجیتال، مهار تراکنش‌های همزمان، درگاه‌های موازی و پنل پیشرفته کاربران' },
];

export default function OrderInvoiceEngine() {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [invoiceStep, setInvoiceStep] = useState<'order' | 'invoice' | 'paid'>('order');
  const [customerName, setCustomerName] = useState('');
  const [customerPhone, setCustomerPhone] = useState('');
  const [customerOrg, setCustomerOrg] = useState('');

  const toggleService = (id: string) => {
    setSelectedServices(prev => prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]);
  };

  return (
    <section id="invoice-engine" className="py-24 px-8 md:px-32 bg-[#0B0F19] text-right border-t border-white/[0.02]">
      <div className="max-w-4xl mx-auto bg-[#070A11] border border-white/[0.04] rounded-2xl overflow-hidden shadow-2xl">
        
        {/* هدر ماژول اصلاح شده */}
<div className="border-b border-white/[0.04] p-8 flex flex-row-reverse justify-between items-center bg-white/[0.01]">
  {/* بخش انگلیسی در سمت چپ (با استفاده از order-1) */}
  <span className="font-mono text-xs text-[#00F2FE]/60 uppercase order-1">
    {invoiceStep === 'order' && 'STEP 01 // CONFIGURATION & CUSTOMER DATA'}
  </span>
  
  {/* بخش فارسی در سمت راست (با استفاده از order-2) */}
  <h3 className="text-lg font-bold text-white order-2">صدور هوشمند فاکتور رسمی آرکاورس</h3>
</div>

        {invoiceStep === 'order' && (
          <div className="p-8">
            <p className="text-sm text-[#E2E8F0]/40 mb-6 text-right">۱. زیرساخت‌های دیجیتال مورد نیاز خود را انتخاب کنید:</p>
            
            <div className="flex flex-col gap-4 mb-8">
              {SERVICES_DATABASE.map((service) => (
                <div 
                  key={service.id}
                  onClick={() => toggleService(service.id)}
                  className={`p-5 rounded-xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    selectedServices.includes(service.id) 
                      ? 'bg-[#00F2FE]/5 border-[#00F2FE]' 
                      : 'bg-white/[0.01] border-white/[0.05] hover:border-white/20'
                  }`}
                >
                  {/* سمت راست: چک‌باکس */}
                  <div className={`w-5 h-5 rounded flex items-center justify-center border ${
                    selectedServices.includes(service.id) ? 'bg-[#00F2FE] border-[#00F2FE] text-[#0B0F19]' : 'border-white/30'
                  }`}>
                    {selectedServices.includes(service.id) && '✓'}
                  </div>

                  {/* وسط: متن (راست‌چین) */}
                  <div className="flex-1 text-right px-6">
                    <h4 className="text-white font-bold text-sm mb-1">{service.name}</h4>
                    <p className="text-xs text-[#E2E8F0]/30">{service.desc}</p>
                  </div>

                  {/* سمت چپ: قیمت */}
                  <div className="text-left font-mono text-sm text-[#00F2FE] whitespace-nowrap" style={{ direction: 'ltr' }}>
                    {service.price.toLocaleString('fa-IR')} ریال
                  </div>
                </div>
              ))}
            </div>

            <p className="text-sm text-[#E2E8F0]/40 mb-4 text-right">۲. اطلاعات متقاضی جهت درج در فاکتور:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <input type="text" placeholder="نام و نام خانوادگی" value={customerName} onChange={(e) => setCustomerName(e.target.value)} className="bg-[#0B0F19]/50 border border-white/[0.05] p-4 rounded-xl text-sm text-white text-right outline-none focus:border-[#00F2FE]" />
              <input type="text" placeholder="شماره تماس (الزامی)" value={customerPhone} onChange={(e) => setCustomerPhone(e.target.value)} className="bg-[#0B0F19]/50 border border-white/[0.05] p-4 rounded-xl text-sm text-white text-right outline-none focus:border-[#00F2FE]" />
              <input type="text" placeholder="نام سازمان / شرکت (اختیاری)" value={customerOrg} onChange={(e) => setCustomerOrg(e.target.value)} className="bg-[#0B0F19]/50 border border-white/[0.05] p-4 rounded-xl text-sm text-white text-right outline-none focus:border-[#00F2FE]" />
            </div>

            <button 
              disabled={selectedServices.length === 0 || !customerName || !customerPhone}
              onClick={() => setInvoiceStep('invoice')}
              className="w-full py-4 rounded-xl font-bold text-sm bg-white text-[#0B0F19] hover:bg-[#00F2FE] transition-all"
            >
              صدور و مشاهده پیش‌فاکتور رسمی آرکاورس
            </button>
          </div>
        )}
      </div>
    </section>
  );
}