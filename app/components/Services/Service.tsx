"use client";

import { useEffect, useState, type ComponentType } from "react";
import {
  Monitor,
  Code2,
  Star,
  Search,
  ShieldCheck,
  ArrowLeft,
} from "lucide-react"

interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: ComponentType<{ className?: string; strokeWidth?: number }> | "ai";
}

const services: ServiceItem[] = [
  {
    id: "web-design",
    title: "طراحی وب",
    description:
      "ما تجربه‌های دیجیتالی خلق می‌کنیم که هویت برند شما را به نمایش می‌گذارند و در عین حال استفاده از آن‌ها برای کاربران، ساده، لذت‌بخش و طبیعی است.",
    icon: Monitor,
  },
  {
    id: "web-development",
    title: "توسعه وب",
    description:
      "توسعه بر بستر فناوری‌های مدرن؛ سریع، مقیاس‌پذیر و بهینه برای ارائه بهترین عملکرد از اولین روز.",
    icon: Code2,
  },
  {
    id: "ai-telegram",
    title: "هوش مصنوعی و تلگرام",
    description: "طراحی ربات‌های تلگرامی و خلق نوآوری توسط انواع هوش مصنوعی.",
    icon: "ai",
  },
  {
    id: "ui-ux",
    title: "طراحی رابط کاربری/تجربه کاربری",
    description:
      "طراحی تجربه‌های کاربری مبتنی بر تحقیق که پیچیدگی را به سادگی تبدیل می‌کنند و کارهای گرافیکی مانند: طراحی بنر و پوستر و ....",
    icon: Star,
  },
  {
    id: "content-creation",
    title: "تولید محتوا",
    description: "خلق کردن محتوایی که کسب و کار و نام برند و محصول شما را معرفی می‌کنند.",
    icon: Search,
  },
  {
    id: "support",
    title: "پشتیبانی",
    description: "پشتیبانی مستمر و ارتباط مستقیم با تیم ما، حتی مدت‌ها پس از راه‌اندازی.",
    icon: ShieldCheck,
  },
];

export default function Service() {
  const [highlight, setHighlight] = useState(false);

  useEffect(() => {
    const onHighlight = () => {
      setHighlight(true);
      const timer = setTimeout(() => setHighlight(false), 1100);
      return () => clearTimeout(timer);
    };

    window.addEventListener("services-highlight", onHighlight);
    return () => window.removeEventListener("services-highlight", onHighlight);
  }, []);

  return (
    <section
      id="Services"
      dir="rtl"
      className={`w-full py-9 md:py-15 lg:py-14 lg:py-0 scroll-mt-24 transition-all duration-1000 ease-out ${
        highlight
          ? " rounded-3xl bg-green-300 shadow-[0_0_0_1px_rgba(18,62,97,0.12),0_20px_60px_rgba(18,62,97,0.10)]"
          : " bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start gap-3 text-right md:ml-auto md:mr-0 md:max-w-xl">
          <div className="flex w-full items-center justify-start gap-2 text-sm font-medium text-[#123E61]">
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#123E61]" />
            <span className="text-[17px]">کاری که انجام می‌دهیم</span>
          </div>

          <h2 className="text-3xl font-extrabold leading-tight text-[#123E61] sm:text-4xl md:text-5xl">
            خدماتی که ارائه می‌کنیم
          </h2>

          <p className="max-w-xl text-base leading-relaxed text-slate-500 md:text-lg">
            اولین ایده تا انتشار نهایی، محصولات دیجیتال را با دقت و وسواس خلق می‌کنیم؛ جایی که هر پیکسل و هر
            خط کد به یک اندازه اهمیت دارد.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.id}
              className="group relative flex flex-col items-center gap-4 rounded-[28px] bg-[#A7C4DE] px-6 pb-16 pt-8 text-center shadow-[0_8px_24px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#4795c9] hover:to-[#3177ad] sm:px-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-[#2F6FA4] to-[#123E61] shadow-md">
                {service.icon === "ai" ? (
                  <span className="text-lg font-bold text-white">Ai</span>
                ) : (
                  <service.icon className="h-6 w-6 text-white" strokeWidth={1.75} />
                )}
              </div>

              <h3 className="text-lg font-bold text-[#123E61] transition-colors duration-300 group-hover:text-white md:text-xl">
                {service.title}
              </h3>

              <p className="max-w-[280px] text-sm leading-relaxed text-slate-700 transition-colors duration-300 group-hover:text-white md:text-base">
                {service.description}
              </p>

              <button
                type="button"
                aria-label={`مشاهده جزئیات ${service.title}`}
                className="absolute bottom-6 left-6 flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#123E61] text-[#123E61] transition-colors duration-300 group-hover:border-white group-hover:text-white"
              >
                <ArrowLeft className="h-4 w-4 rotate-180" strokeWidth={2} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
