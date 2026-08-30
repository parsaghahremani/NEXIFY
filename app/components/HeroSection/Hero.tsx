"use client";
import Image from "next/image";
import Link from "next/link";

const laptopImage = "/LapTopHero.webp";

function scrollToGetStarted(e: React.MouseEvent) {
  e.preventDefault();
  const section = document.getElementById("GetStarted");
  if (!section) return;

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

function scrollToServices() {
  const section = document.getElementById("Services");
  if (!section) return;

  section.scrollIntoView({ behavior: "smooth", block: "start" });
}

const sparkles = [
  { left: "18%", top: "18%", opacity: 0.55 },
  { left: "34%", top: "8%", opacity: 0.6 },
  { left: "55%", top: "3%", opacity: 0.5 },
  { left: "77%", top: "11%", opacity: 0.55 },
  { left: "92%", top: "30%", opacity: 0.6 },
  { left: "94%", top: "52%", opacity: 0.55 },
  { left: "84%", top: "74%", opacity: 0.5 },
  { left: "63%", top: "92%", opacity: 0.55 },
  { left: "18%", top: "86%", opacity: 0.45 },
  { left: "6%", top: "66%", opacity: 0.55 },
  { left: "4%", top: "42%", opacity: 0.6 },
  { left: "28%", top: "48%", opacity: 0.45 },
  { left: "72%", top: "48%", opacity: 0.45 },
];

type HeroVariant = "laptop" | "desktop";

function HeroChip({ variant }: { variant: HeroVariant }) {
  const isLaptop = variant === "laptop";

  return (
    <div
      dir="ltr"
      className={
        isLaptop
          ? "absolute left-[40px] top-[clamp(10px,calc((1280px-100vw)*0.15),40px)] z-20 flex h-[33px] bg w-fit min-w-[300px] items-center gap-[8px] rounded-full border border-[#ffffff1f] bg-[#ffffff14] pl-[16px] pr-[16px] shadow-[0_4px_18px_rgba(0,0,0,0.45)] backdrop-blur-sm"
          : "absolute left-[3.3%] top-0 z-20 flex h-[35.6px] w-fit min-w-[330px] items-center gap-[9px] rounded-full border border-[#ffffff1f] bg-[#ffffff14] pl-[18.8px] pr-[18.8px] shadow-[0_4px_18px_rgba(0,0,0,0.45)] backdrop-blur-sm"
      }
    >
      <div
        className={
          isLaptop
            ? "h-[6px] w-[6px] shrink-0 rounded-full bg-[#4982BC] shadow-[0px_0px_10px_#0b1120]"
            : "h-[7px] w-[7px] shrink-0 rounded-full bg-[#4982BC] shadow-[0px_0px_10px_#0b1120]"
        }
      />

      <span
        className={
          isLaptop
            ? "whitespace-nowrap font-[family-name:var(--font-inter)] text-[15px] font-semibold text-[#4982BC]"
            : "whitespace-nowrap font-[family-name:var(--font-inter)] text-[16px] font-semibold text-[#4982BC]"
        }
      >
        We Build The Next Digital Experience
      </span>
    </div>
  );
}

function HeroTextBlock({
  titleId,
  variant,
}: {
  titleId: string;
  variant: HeroVariant;
}) {
  const isLaptop = variant === "laptop";

  return (
    <div
      className={
        isLaptop
          ? "absolute bottom-0 left-[40px] mb-[14px] z-20 flex flex-col items-start"
          : "absolute left-[calc(6.5%+1px)] mb-[14px] top-[20.07%] flex w-[44.9%] flex-col items-start"
      }
    >
      <div className={isLaptop ? "" : "-translate-x-[20px]"}>
        <h2
          id={titleId}
          dir="ltr"
          className={
            isLaptop
              ? "m-0 whitespace-nowrap text-left font-[family-name:var(--font-inter)] text-[clamp(26px,3.6vw,48px)] font-extrabold leading-[1.4] tracking-[-1px]"
              : "m-0 whitespace-nowrap text-left font-[family-name:var(--font-inter)] text-[49px] font-extrabold leading-[67px] tracking-[-1.24px]"
          }
        >
          <span className="block text-[#3374A0]">From website design</span>
          <span className="block text-[#1F3B57]">to content production,</span>
          <span className="block text-[#1F3B57]">
            from graphics to security;
          </span>
        </h2>

        <p
          dir="rtl"
          className={
            isLaptop
              ? "mt-[40px] w-fit text-right ml-9 mr-auto text-[clamp(19px,1.6vw,20px)] font-semibold leading-[1.6] tracking-[1px] text-[#4982BC]"
              : "mt-[40px] w-[510px] text-center text-[22px] font-semibold leading-[42px] tracking-[-0.3px] text-[#4982BC] mr-[75px]"
          }
        >
          <span className="block whitespace-nowrap">
            از طراحی سایت تا تولید محتوا، از گرافیک تا امنیت؛
          </span>

          <span className="mt-1 block whitespace-nowrap">
            همراه مطمئن کسب‌وکار شما در دنیای دیجیتال.
          </span>
        </p>
      </div>

      <HeroActions variant={variant} />
    </div>
  );
}

function HeroActions({ variant }: { variant: HeroVariant }) {
  const isLaptop = variant === "laptop";

  return (
    <div
      className={
        isLaptop
          ? "mt-[20px] flex w-[350px] flex-row-reverse items-center m-auto gap-[30px]"
          : "mt-[23px] flex mr-auto ml-[59px] w-fit flex-row-reverse items-center justify-start gap-[30px]"
      }
    >
      {/* ۲. دکمه آیکون شیشه‌ای و متن برو پایین */}
      {/* ۲. دکمه آیکون شیشه‌ای و متن برو پایین */}
      <div className="flex items-center xl:ml-[95px] lg:ml-[90px] text-[#123E61] gap-1.5">
        {/* آیکون دایره‌ای شیشه‌ای کاملاً تمیز بدون باگ کادر مستطیلی */}
        <div
          onClick={scrollToServices}
          className="relative flex h-[44px] w-[44px] items-center cursor-pointer justify-center rounded-full border-2 border-white/40 bg-gradient-to-br from-white/70 via-[#7C5CFF]/15 to-white/10 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105"
        >
          {/* حلقه داخلی و فلش رو به پایین */}
          <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-[#123E61]">
            <svg
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 1.5V10.5M10 6.5L6 10.5L2 6.5"
                stroke="#123E61"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        <span className="hidden whitespace-nowrap text-[16px] font-medium text-[#123E61] md:inline-block">
          برو پایین
        </span>
      </div>
    </div>
  );
}

function HeroLaptopVisual({ variant }: { variant: HeroVariant }) {
  const isLaptop = variant === "laptop";

  return (
    <div
      className={
        isLaptop
          ? "absolute bottom-[10px] right-[10px]  w-[min(52%,calc(100%-593px-16px))] max-w-[606px] min-w-[520px]"
          : "absolute left-[54%] top-[10.6%] w-[47.34%]"
      }
    >
      <Image
        src={laptopImage}
        alt="Nexify dashboard on laptop"
        width={606}
        height={432}
        priority
        className="block h-auto w-full object-contain"
      />

      <div className="pointer-events-none absolute inset-0">
        {sparkles.map((sparkle, index) => (
          <span
            key={index}
            className={
              isLaptop
                ? "absolute h-[3px] w-[3px] rounded-full bg-[#66D9FF] shadow-[0_0_10px_#4CCBFF]"
                : "absolute h-[4px] w-[4px] rounded-full bg-[#66D9FF] shadow-[0_0_12px_#4CCBFF]"
            }
            style={{
              left: sparkle.left,
              top: sparkle.top,
              opacity: sparkle.opacity,
            }}
          />
        ))}
      </div>

      <div
        className={
          isLaptop
            ? "absolute left-[41%] top-[38%] h-[18px] w-[18px] rounded-[9px] border border-[#00e5ff99] mix-blend-screen"
            : "absolute left-[41%] top-[38%] h-[22px] w-[22px] rounded-[11px] border border-[#00e5ff99] mix-blend-screen"
        }
      />
    </div>
  );
}

function DesktopLikeHero({
  titleId,
  variant,
}: {
  titleId: string;
  variant: HeroVariant;
}) {
  return (
    <>
      <HeroChip variant={variant} />
      <HeroTextBlock titleId={titleId} variant={variant} />
      <HeroLaptopVisual variant={variant} />
    </>
  );
}

export default function Hero() {
  return (
    <>
      <section
        id="home"
        aria-labelledby="hero-title-desktop"
        className="relative mt-[52px] sm:mt-[48px] 2xl:pb-10 xl:pb-10 lg:mt-[100px] xl:mt-[100px]"
      >
        {/* نسخه موبایل و تبلت — بدون تغییر */}
        <div className="mx-auto flex w-[calc(100%-3.25rem)] justify-center sm:w-[calc(100%-5rem)] lg:hidden">
          <h1 className="text-center text-[20px] md:text-[27px] font-normal leading-[1.65] text-[#4982BC] sm:mb-[5px] sm:text-[24px]">
            <span className="block">
              از طراحی سایت تا تولید محتوا، از گرافیک تا امنیت؛
            </span>

            <span className="mt-1 block">
              همراه مطمئن کسب و کار شما در دنیای دیجیتال.
            </span>
          </h1>
        </div>

        <div
          dir="rtl"
          className="relative mx-auto mb-[30px] mt-10 flex min-h-[100px] w-full max-w-[330px] md:max-w-[500px] -rotate-[5.82deg] flex-col items-center justify-center gap-[4px] rounded-[14px] border-[2px] border-[#00E5FF] bg-[linear-gradient(135deg,rgba(0,229,255,0.25)_0%,rgba(124,92,255,0.25)_100%)] shadow-[0_12px_32px_rgba(0,229,255,0.24)] backdrop-blur-[14px] sm:max-w-[435px] lg:hidden"
        >
          <div className="flex rotate-[5.82deg] flex-col items-center">
            <span className="text-[25px] font-extrabold leading-none tracking-[0.18em] text-[#4982BC] sm:text-[26px]">
              NEXIFY
            </span>

            <span className="mt-[5px] md:mt-[12px] text-[15px] font-medium leading-none text-[#4982BC] sm:text-[17px]">
              همراه شما تا پایان پروژه
            </span>
          </div>
        </div>

        {/* کانتینر اصلی فقط برای تبلت - عرض کامل و وسط‌چین */}
        <div className="mt-8 flex w-full flex-col items-center justify-center md:gap-5 gap-[7px] md:mt-[45px]  md:flex-row lg:hidden">
          {/* ۱. دکمه آبی‌رنگ شروع پروژه */}
          <Link
            href="#GetStarted"
            onClick={scrollToGetStarted}
            className="flex h-[50px] w-[160px] group items-center justify-center gap-[6px] rounded-full bg-[rgba(66,126,186,0.93)] text-[14px] font-bold text-white shadow-[0_8px_30px_#3083BA] transition-all duration-300 hover:opacity-95"
          >
            <svg
              width="12"
              className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
              height="9"
              viewBox="0 0 12 9"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 4.5H11M11 4.5L7.5 1M11 4.5L7.5 8"
                stroke="currentColor"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <span className="whitespace-nowrap ">شروع پروژه</span>
          </Link>

          {/* ۲. دکمه آیکون شیشه‌ای و متن برو پایین */}
          <div className="flex items-center gap-[6px]">
            {/* آیکون دایره‌ای شیشه‌ای کاملاً تمیز بدون باگ کادر مستطیلی */}
            <div
              onClick={scrollToServices}
              className="relative flex h-[44px] w-[44px] items-center cursor-pointer justify-center rounded-full border-2 border-white/40 bg-gradient-to-br from-white/70 via-[#7C5CFF]/15 to-white/10 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105"
            >
              {/* حلقه داخلی و فلش رو به پایین */}
              <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-[#123E61]">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 1.5V10.5M10 6.5L6 10.5L2 6.5"
                    stroke="#123E61"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <span className="text-[16px] font-medium text-[#123E61] whitespace-nowrap hidden md:inline-block lg:hidden">
              برو پایین
            </span>
          </div>
        </div>

        {/* نسخه لپ‌تاپ */}
        <div className="relative hidden min-h-[478px] w-full lg:block xl:hidden">
          <DesktopLikeHero titleId="hero-title-laptop" variant="laptop" />
        </div>

        {/* نسخه دسکتاپ — بدون تغییر */}
        <div className="relative mx-auto hidden min-h-[478px] w-full max-w-[1280px] xl:block">
          <DesktopLikeHero titleId="hero-title-desktop" variant="desktop" />
        </div>
      </section>
      <div className="mx-auto 2xl:h-[20px] xl:h-[20px] lg:h-[20px] md:h-[20px] sm:h-[12px] h-[9px] w-[80%] 2xl:w-[65%] xl:w-[90%] lg:w-[90%] md:w-[90%] sm:w-[80%] rounded-full mt-[12px] sm:mt-3 md:mt-[32px] lg:mt-[46px] bg-[#A2C3DA] shadow-none md:shadow-[0_7px_17px_rgba(0,0,0,0.5)]" />
    </>
  );
}
