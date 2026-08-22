"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const faqItems: FaqItem[] = [
  {
    id: "project-duration",
    question: "یک پروژه چقدر طول می کشد؟",
    answer:
      "بسته به پیچیدگی و حجم امکانات پروژه متفاوته؛ یک وب‌سایت معمولی معمولاً بین ۲ تا ۴ هفته و پروژه‌های بزرگ‌تر مثل فروشگاه‌ها یا پنل‌های اختصاصی چند هفته بیشتر زمان می‌بره. بعد از بررسی نیازمندی‌ها، یک زمان‌بندی دقیق بهتون ارائه می‌کنیم.",
  },
  {
    id: "website-cost",
    question: "هزینه یک وب سایت چقدر است؟",
    answer:
      "هزینه بر اساس نوع پروژه (سایت معرفی، فروشگاهی، اختصاصی)، تعداد صفحات و امکانات موردنیازتون محاسبه می‌شه. برای برآورد دقیق، کافیه از طریق راه های ارتباطی اخر صفحه با ما در ارتباط باشید تا یک پیش‌فاکتور شفاف دریافت کنید.",
  },
  {
    id: "support",
    question: "آیا پشتیبانی ارائه می دهید؟",
    answer:
      "بله، بعد از تحویل پروژه هم کنارتون هستیم؛ از رفع باگ‌های احتمالی گرفته تا به‌روزرسانی و توسعه‌ی امکانات جدید. بسته‌های پشتیبانی ماهانه و پشتیبانی موردی هر دو در دسترس هستن.",
  },
];

export default function Faq() {
  const [openId, setOpenId] = useState<string | null>(faqItems[0]?.id ?? null);

  return (
    <section dir="rtl" className="w-full py-16 md:py-17">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-right">
          <div dir="ltr" className="flex items-center gap-2 text-sm font-medium text-[#123E61]">
            <span>پرسش و پاسخ</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#123E61]" />
          </div>
          <h2 className="text-2xl font-extrabold leading-tight text-[#123E61] sm:text-3xl md:text-4xl lg:text-5xl">
            سوالات متداول
          </h2>
        </div>

        {/* Accordion */}
        <div className="mt-10 flex flex-col gap-4 sm:mt-12">
          {faqItems.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="overflow-hidden rounded-2xl bg-gradient-to-br from-[#B8D2E6] to-[#A7C4DE] shadow-sm transition-shadow duration-300 sm:rounded-3xl"
              >
                <button
                  type="button"
                  onClick={() => setOpenId(isOpen ? null : item.id)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 px-5 py-5 text-right sm:px-8 sm:py-6"
                >
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 border-[#123E61] text-[#123E61] transition-transform duration-300 sm:h-10 sm:w-10">
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 sm:h-5 sm:w-5 ${
                        isOpen ? "-rotate-180" : "rotate-0"
                      }`}
                      strokeWidth={2.25}
                    />
                  </span>

                  <span className="flex-1 text-sm font-bold leading-relaxed text-[#123E61] sm:text-base md:text-lg">
                    {item.question}
                  </span>
                </button>

                {/* Answer panel - انیمیشن ارتفاع نرم با تکنیک grid-rows */}
                <div
                  className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-[#1E4A70] sm:px-8 sm:pb-7 sm:text-base">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
