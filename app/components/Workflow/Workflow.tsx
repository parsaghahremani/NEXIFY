"use client";

import { useEffect, useState } from "react";
import { Search, CalendarDays, PenTool, Code2, Check, Rocket } from "lucide-react";

// رفع خطای تایپ با استفاده از ComponentType استاندارد React
interface ProcessStep {
  number: string;
  title: string;
  icon: React.ComponentType<{ className?: string; strokeWidth?: number }>;
}

const steps: ProcessStep[] = [
  { number: "1", title: "جست و جو", icon: Search },
  { number: "2", title: "برنامه ریزی", icon: CalendarDays },
  { number: "3", title: "طراحی", icon: PenTool },
  { number: "4", title: "توسعه", icon: Code2 },
  { number: "5", title: "آزمایش", icon: Check },
  { number: "6", title: "تحویل", icon: Rocket },
];

const snakeOrder = [steps[0], steps[1], steps[3], steps[2], steps[4], steps[5]];

export default function Process() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const onHighlight = () => {
      setHighlight(true);
      // بعد از ۱.۱ ثانیه افکت ناپدید می‌شود
      const timer = setTimeout(() => setHighlight(false), 1100);
      return () => clearTimeout(timer);
    };

    window.addEventListener("process-highlight", onHighlight);
    return () => window.removeEventListener("process-highlight", onHighlight);
  }, []);

  return (
    <section
      id="process"
      dir="rtl"
      // تمام کدهای استایل و اندازه‌های اصلی شما کاملاً حفظ شده است
      // و فقط کلاس‌های افکت پالس و تغییر پس‌زمینه در زمان فعال شدن افکت اضافه شده است
      className={`w-full py-7 md:py-18 scroll-mt-24 transition-all duration-1000 ease-out ${
        highlight
          ? " rounded-3xl bg-green-300 shadow-[0_0_0_1px_rgba(0,96,172,0.12),0_20px_60px_rgba(0,96,172,0.10)]"
          : "scale-100 bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-right">
          <div dir="ltr" className="flex items-center gap-2 text-sm font-medium text-[#123E61]">
            <span>روند همکاری</span>
            <span className="h-1 w-1 shrink-0 rounded-full bg-[#123E61] sm:h-1.5 sm:w-1.5" />
          </div>
          <h2 className="text-2xl font-extrabold leading-tight text-[#123E61] sm:text-3xl md:text-4xl lg:text-5xl">
            گردش کار ما تا موفقیت
          </h2>
        </div>

        {/* Desktop / laptop (lg+): تایم‌لاین افقی */}
        <div dir="ltr" className="relative mt-16 hidden lg:grid lg:grid-cols-6 lg:gap-4 xl:gap-6">
          <div className="pointer-events-none absolute inset-x-0 top-10 h-px bg-[#123E61]/15" />
          {steps.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center gap-4 text-center">
              <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1C6FA8] to-[#0B3D63] opacity-100 shadow-lg shadow-[#123E61]/25 transition-all duration-300 hover:scale-105 hover:opacity-80">
                <step.icon className="h-8 w-8 text-white" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col items-center gap-1">
                <span className="text-xs font-bold tracking-wide text-[#3580B1]">{step.number}</span>
                <h3 className="text-base font-bold text-[#123E61] xl:text-lg">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* زیر lg (موبایل، sm، تبلت/md): چیدمان مارپیچ دو‌ستونه */}
        <div
          dir="ltr"
          className="relative mt-14 grid grid-cols-2 grid-rows-[140px_140px_140px] gap-x-4 gap-y-8 sm:grid-rows-[160px_160px_160px] sm:gap-x-8 sm:gap-y-10 lg:hidden"
        >
          <span className="pointer-events-none absolute left-1/4 top-[28px] h-px w-1/2 bg-[#123E61]/15 sm:top-[32px]" />
          <span className="pointer-events-none absolute left-3/4 top-[28px] h-[172px] w-px -translate-x-1/2 bg-[#123E61]/15 sm:top-[32px] sm:h-[200px]" />
          <span className="pointer-events-none absolute left-1/4 top-[200px] h-px w-1/2 bg-[#123E61]/15 sm:top-[232px]" />
          <span className="pointer-events-none absolute left-1/4 top-[200px] h-[172px] w-px -translate-x-1/2 bg-[#123E61]/15 sm:top-[232px] sm:h-[200px]" />
          <span className="pointer-events-none absolute left-1/4 top-[372px] h-px w-1/2 bg-[#123E61]/15 sm:top-[432px]" />

          {snakeOrder.map((step) => (
            <div key={step.number} className="relative z-10 flex flex-col items-center justify-start gap-2 text-center">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#1C6FA8] to-[#0B3D63] opacity-100 shadow-lg shadow-[#123E61]/25 transition-all duration-300 hover:opacity-80 sm:h-16 sm:w-16">
                <step.icon className="h-5 w-5 text-white sm:h-6 sm:w-6" strokeWidth={1.75} />
              </div>
              <div className="flex flex-col items-center gap-0.5">
                <span className="text-[11px] font-bold tracking-wide text-[#3580B1] sm:text-xs">
                  {step.number}
                </span>
                <h3 className="text-sm font-bold text-[#123E61] sm:text-base">{step.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
