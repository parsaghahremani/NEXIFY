import ContactCard from "./ContactCard";
import Link from "next/link";

export default function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="relative mx-auto w-full  max-w-[1200px] px-5 pt-14 pb-0 sm:px-8 lg:px-0"
    >
      {/* مسیر صفحه (Breadcrumb) — قرص‌شکل، با سایه، سمت چپ */}
      <nav
        aria-label="مسیر صفحه"
        className="mb-16 flex w-fit items-center gap-2 rounded-full bg-white/70 px-4 py-2 text-sm text-[#1F3B57]/80 shadow-[0_8px_24px_rgba(0,96,172,0.12)] backdrop-blur-md [direction:rtl] ms-auto"
      >
        
        <Link
          href="/"
          className="transition-colors duration-300 hover:text-[#0060AC]"
        >
            خانه
        </Link>

        <span aria-hidden="true" className="text-[#1F3B57]/40">
          &lsaquo;
        </span>
        <span className="text-[#0060AC]" aria-current="page">
          تماس با ما
        </span>
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-[#0060AC]"
        />
      </nav>

      <div className="relative flex flex-col items-start gap-4 text-right [direction:rtl] ps-2 sm:ps-10 md:ps-16 lg:ps-24">
        {/* آیکون تزئینی — بدون پس‌زمینه، کمی بالا و راستِ عنوان */}
        <svg
          aria-hidden="true"
          width="82"
          height="79"
          viewBox="0 0 82 79"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="-mb-5 h-12 w-12 translate-x-2 sm:h-14 sm:w-14 sm:translate-x-8 md:translate-x-12"
        >
          <path
            d="M10.5438 57.6337C10.8369 56.351 10.7251 55.0132 10.2227 53.7923C6.72663 46.8039 5.90487 38.8506 7.90239 31.3354C9.8999 23.8202 14.5883 17.2262 21.1404 12.7167C27.6926 8.20727 35.6873 6.07221 43.7142 6.68821C51.741 7.30422 59.2841 10.6317 65.0126 16.0836C70.7411 21.5355 74.2868 28.7615 75.0242 36.4865C75.7616 44.2116 73.6433 51.9394 69.043 58.3064C64.4427 64.6734 57.656 69.2705 49.8804 71.2866C42.1049 73.3027 33.84 72.6082 26.5441 69.3257C25.3466 68.8877 24.0455 68.7828 22.7892 69.0229L11.1281 72.3079C10.5656 72.4518 9.97424 72.4548 9.41018 72.3167C8.84612 72.1786 8.32803 71.9039 7.90503 71.5188C7.48203 71.1337 7.16815 70.6509 6.99315 70.1162C6.81815 69.5814 6.78784 69.0125 6.90508 68.4633L10.5438 57.6337Z"
            stroke="#0060AC"
            strokeOpacity="0.93"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M26.7457 43.0219C24.9141 41.1761 23.8959 38.7185 23.9048 36.165C23.9136 33.6115 24.9489 31.1605 26.7932 29.3266C28.6376 27.4927 31.1476 26.4183 33.7965 26.3291C36.4454 26.2398 39.0272 27.1426 41 28.848C42.4718 27.5751 44.2944 26.7397 46.248 26.4425C48.2015 26.1452 50.2027 26.3988 52.01 27.1727C53.8173 27.9465 55.3536 29.2076 56.4337 30.8038C57.5138 32.4001 58.0914 34.2632 58.097 36.1686C58.1053 38.7223 57.0865 41.1798 55.2544 43.0252L43.4771 54.941C43.1577 55.2645 42.7733 55.522 42.3473 55.6978C41.9214 55.8737 41.4627 55.9642 40.9993 55.9639C40.5359 55.9636 40.0773 55.8725 39.6516 55.6961C39.2259 55.5196 38.8419 55.2616 38.5229 54.9377L26.7457 43.0219Z"
            stroke="#0060AC"
            strokeOpacity="0.93"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <h1
          id="contact-heading"
          className="ms-0 text-[40px] font-extrabold leading-[1.15] tracking-[-0.02em] text-[#123E61] sm:text-[48px] lg:text-[56px]"
        >
          تماس با ما
        </h1>

        <p className="-ms-5 max-w-[520px] text-lg leading-8 text-[#123E61]/80 sm:text-xl sm:leading-9">
          ما آماده پاسخ‌گویی به پرسش‌ها و درخواست‌های شما هستیم.
          <br className="hidden sm:block" />
          پیام خود را ارسال کنید تا در سریع‌ترین زمان با شما ارتباط بگیریم.
        </p>
      </div>

      <ContactCard />
    </section>
  );
}
