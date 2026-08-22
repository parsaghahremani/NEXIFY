import { Star, Code2, Zap, ShieldCheck, type LucideIcon } from "lucide-react";

interface Reason {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

const reasons: Reason[] = [
  {
    id: "modern-design",
    title: "طراحی مدرن",
    description: "طراحی های مدرن و کارآمد؛ ساخت وب سایت های مدرن و امروزی.",
    icon: Star,
  },
  {
    id: "clean-code",
    title: "کد نویسی تمیز",
    description:
      "کد های قابل نگهداری و مستندسازی‌شده؛ تیم آینده شما از ما به خاطر این موضوع تشکر خواهد کرد.",
    icon: Code2,
  },
  {
    id: "great-performance",
    title: "عملکرد عالی",
    description: "زمان بارگذاری زیر یک ثانیه و تعاملات روان.",
    icon: Zap,
  },
  {
    id: "support",
    title: "پشتیبانی",
    description: "افراد واقعی بعد از عرضه در دسترس هستند، و از سایت شما پشتیبانی می کنند.",
    icon: ShieldCheck,
  },
];

export default function WhyChooseUs() {
  return (
    <section dir="rtl" className="w-full py-3 md:py-0 xl:py-6">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col items-start gap-2 text-right">
          <div dir="ltr" className="flex items-center gap-2 text-sm font-medium text-[#123E61]">
            <span>چرا مارا انتخاب کنید</span>
            <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#123E61]" />
          </div>
          <h2 className="text-2xl font-extrabold leading-tight text-[#123E61] sm:text-3xl md:text-4xl lg:text-5xl">
            چرا کسب و کارها نکسی‌فای انتخاب می‌کنند؟
          </h2>
        </div>

        {/* Cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason) => (
            <div
              key={reason.id}
              className="group flex flex-col items-center gap-4 rounded-3xl bg-[#A7C4DE] px-6 py-10 text-center shadow-[0_4px_24px_rgba(0,0,0,0.50)] transition-all duration-500 hover:-translate-y-1 hover:bg-gradient-to-br hover:from-[#4795c9] hover:to-[#3177ad] "
            >
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#1C6FA8] to-[#0B3D63] shadow-md shadow-[#123E61]/20 transition-colors duration-300 ">
                <reason.icon
                  className="h-6 w-6 text-white transition-colors duration-300"
                  strokeWidth={1.75}
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                <h3 className="text-lg font-bold text-[#123E61] transition-colors duration-300 group-hover:text-white">
                  {reason.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600 transition-colors duration-300 group-hover:text-white">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
