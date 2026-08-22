"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  image?: string; // آدرس تصویر پروژه - اگر خالی باشه، پس‌زمینه گرادیانت پیش‌فرض نمایش داده می‌شه
  href?: string; // لینک صفحه پروژه
  swapFooter?: boolean; // true = متن سمت چپ و دکمه‌ی فلش سمت راست (فقط برای باکس سمت راستی)
}

// دسته‌بندی‌ها - "همه" همیشه اول آرایه باشه تا سمت راست (شروع در rtl) نمایش داده بشه
const categories = [
  "All",
  "Websites",
  "UI/UX Design",
  "AI  & Telegram bots",
  "Content Production",
] as const;

type Category = (typeof categories)[number];

// -----------------------------------------------------------------------
// داده‌ی پروژه‌ها: هر وقت پروژه‌ی جدیدی داشتید کافیه یک آبجکت به این آرایه
// اضافه کنید، فیلتر و گرید به‌صورت خودکار خودشون رو با اون هماهنگ می‌کنند.
// -----------------------------------------------------------------------
const projects: Project[] = [
  {
    id: "saas-command-center",
    title: "Aura Ecommerce",
    category: "AI  & Telegram bots",
    image: "",
    href: "#",
    swapFooter: true,
  },
  {
    id: "aura-ecommerce",
    title: "SaaS Command Center",
    category: "UI/UX Design",
    image: "",
    href: "#",
    swapFooter: true,
  },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
     const [highlight, setHighlight] = useState(false);

useEffect(() => {
  const onHighlight = () => {
    setHighlight(true);
    const timer = setTimeout(() => setHighlight(false), 1100);
    return () => clearTimeout(timer);
  };

  window.addEventListener("project-highlight", onHighlight);
  return () => window.removeEventListener("project-highlight", onHighlight);
}, []);




  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
  id="project"
  dir="rtl"
  className={`w-full py-7 md:py-6 scroll-mt-24 transition-all duration-1000 ease-out ${
    highlight
      ? " rounded-3xl bg-green-300 shadow-[0_0_0_1px_rgba(18,62,97,0.12),0_20px_60px_rgba(18,62,97,0.10)]"
      : " bg-transparent"
  }`}
>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-wrap items-end justify-between gap-x-6 gap-y-5">
          {/* Title */}
          <div className="flex flex-col items-start gap-2 text-right">
            <div className="flex items-center gap-2 text-sm font-medium text-[#123E61]">
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#123E61]" />
              <span>نمونه کار ها</span>
            </div>
            <h2 className="text-right text-2xl font-extrabold leading-tight text-[#123E61] sm:text-3xl md:text-4xl lg:text-5xl">
              پروژه های منتخب
            </h2>
          </div>

          {/* Filter tabs - باکس مستقل با بک‌گراند و شدو، اندازه‌ی آن فیت محتواست نه کل عرض صفحه */}
          <div className="flex w-fit max-w-full flex-wrap items-center gap-1.5 rounded-2xl bg-[#F4F8FB] p-1.5 shadow-[0_10px_30px_-14px_rgba(18,62,97,0.45)] ring-1 ring-[#123E61]/5 sm:gap-2 sm:p-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  aria-pressed={isActive}
                  className={`shrink-0 whitespace-nowrap rounded-full px-3.5 py-2 text-xs font-semibold transition-colors duration-300 sm:px-5 sm:py-2.5 sm:text-sm ${
                    isActive
                      ? "bg-[#123E61] text-white shadow-sm"
                      : "text-[#123E61] hover:bg-[#123E61]/10"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects grid */}
        {filteredProjects.length > 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8">
            {filteredProjects.map((project) => (
              <a
                key={project.id}
                href={project.href ?? "#"}
                className="group block overflow-hidden rounded-[24px] border border-[#123E61]/10 transition-shadow duration-300 hover:shadow-xl"
              >
                {/* Project image / placeholder */}
                <div className="relative aspect-[583/280] w-full overflow-hidden bg-gradient-to-b from-[#7FB0D9] via-[#4D7FA8] to-[#1C2C3C]">
                  {project.image ? (
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    />
                  ) : null}
                </div>

                {/* Footer bar */}
                <div
                  className={`flex items-center justify-between gap-4 bg-[#3580B1]/10 px-6 py-5 ${
                    project.swapFooter ? "flex-row-reverse" : ""
                  }`}
                >
                  <div className="text-left" dir="ltr">
                    <h3 className="text-base font-bold text-[#123E61] sm:text-lg">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-[#3580B1]">{project.category}</p>
                  </div>

                  <span
                    aria-hidden="true"
                    className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border-2 border-[#3580B1]/40 text-[#123E61] transition-colors duration-300 group-hover:bg-[#123E61] group-hover:text-white group-hover:border-[#123E61]"
                  >
                    <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <p className="mt-16 text-center text-sm text-slate-400">
            در حال حاضر پروژه‌ای در این دسته‌بندی وجود ندارد.
          </p>
        )}
      </div>
    </section>
  );
}
