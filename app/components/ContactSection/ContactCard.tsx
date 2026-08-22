import Logo from "../shared/logo";

type FieldProps = {
  id: string;
  label: string;
  placeholder: string;
  type?: string;
};

function Field({ id, label, placeholder, type = "text" }: FieldProps) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id} className="text-sm font-bold text-[#123E61]">
        {label}
      </label>
      <input
        id={id}
        name={id}
        type={type}
        dir={
          type === "tel" ||
          type === "email" ||
          type === "text" ||
          type === "url"
            ? "rtl"
            : "auto"
        }
        placeholder={placeholder}
        className="rounded-xl border border-[#123E61]/10 bg-white/55 px-4 py-3 text-sm text-[#123E61] placeholder:text-[#123E61]/45 outline-none transition-colors focus:border-[#0060AC]/50"
      />
    </div>
  );
}

type InfoRowProps = {
  icon: React.ReactNode;
  label: string;
  value: React.ReactNode;
};

function InfoRow({ icon, label, value }: InfoRowProps) {
  return (
    <div className="flex items-center justify-between gap-4 rounded-2xl bg-white/45 px-5 py-4">
      <div>
        <p className="text-sm font-bold text-[#123E61]">{label}</p>
        <p className="mt-1 text-sm text-[#123E61]/70 [direction:ltr] text-right">
          {value}
        </p>
      </div>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#0060AC]/10 text-[#0060AC]">
        {icon}
      </span>
    </div>
  );
}

const iconProps = {
  width: 16,
  height: 16,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

const PhoneIcon = () => (
  <svg {...iconProps}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.362 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.338 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const MailIcon = () => (
  <svg {...iconProps}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 6-10 7L2 6" />
  </svg>
);

const InstagramIcon = () => (
  <svg {...iconProps}>
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <path d="M17.5 6.5h.01" />
  </svg>
);

const TelegramIcon = () => (
  <svg {...iconProps}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const ClockIcon = () => (
  <svg {...iconProps}>
    <circle cx="12" cy="12" r="10" />
    <path d="M12 6v6l4 2" />
  </svg>
);

const SendIcon = () => (
  <svg {...iconProps} width={18} height={18}>
    <path d="m22 2-7 20-4-9-9-4Z" />
    <path d="M22 2 11 13" />
  </svg>
);

const ArrowLeftIcon = () => (
  <svg {...iconProps} width={16} height={16} stroke="white">
    <path d="M19 12H5" />
    <path d="m12 19-7-7 7-7" />
  </svg>
);

export default function ContactCard() {
  return (
    <div
      dir="rtl"
      className="relative mt-20 overflow-visible rounded-t-[32px] rounded-b-none border border-b-0 border-white/50 bg-gradient-to-br from-[#eaf1f8] to-[#c3d9ec] p-6 pb-24 shadow-[0_20px_60px_rgba(0,60,120,0.15)] backdrop-blur-xl sm:p-10 sm:pb-28"
    >
      <div className="grid gap-12 md:grid-cols-2 md:gap-0">
        {/* اطلاعات تماس */}
        <div className="flex flex-col gap-4 md:pe-10">
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-2xl font-bold text-[#123E61]">اطلاعات تماس</h2>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0060AC]/10 text-[#0060AC]">
              <PhoneIcon />
            </span>
          </div>

          <InfoRow icon={<PhoneIcon />} label="تلفن" value="03933330000" />
          <InfoRow icon={<MailIcon />} label="ایمیل" value="info@nexify.ir" />
          <InfoRow
            icon={<InstagramIcon />}
            label="اینستاگرام"
            value="nexify@"
          />
          <InfoRow icon={<TelegramIcon />} label="تلگرام" value="nexify@" />
          <InfoRow
            icon={<ClockIcon />}
            label="ساعات کاری"
            value={
              <>
                شنبه تا پنجشنبه
                <br />
                از 8:00 صبح تا 5:00 بعد از ظهر
              </>
            }
          />
        </div>

        {/* فرم ارسال پیام */}
        <form className="flex flex-col gap-5 pt-10 md:border-r md:border-[#123E61]/15 md:pt-0 md:ps-10">
          <div className="mb-2 flex items-center gap-2">
            <h2 className="text-2xl font-bold text-[#123E61]">ارسال پیام</h2>
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#0060AC]/10 text-[#0060AC]">
              <SendIcon />
            </span>
          </div>

          <Field
            id="fullName"
            label="نام و نام خانوادگی"
            placeholder="نام و نام خانوادگی خود را وارد کنید."
          />
          <Field
            id="email"
            label="ایمیل"
            placeholder="ایمیل خود را وارد کنید."
            type="email"
          />
          <Field
            id="phone"
            label="شماره تلفن"
            placeholder="شماره تلفن خود را وارد کنید."
            type="tel"
          />

          <div className="flex flex-col gap-2">
            <label
              htmlFor="subject"
              className="text-sm font-bold text-[#123E61]"
            >
              موضوع پیام
            </label>
            <select
              id="subject"
              name="subject"
              defaultValue=""
              className="rounded-xl border border-[#123E61]/10 bg-white/55 px-4 py-3 text-sm text-[#123E61]/70 outline-none transition-colors focus:border-[#0060AC]/50"
            >
              <option value="" disabled>
                انتخاب موضوع
              </option>
              <option value="support">پشتیبانی</option>
              <option value="sales">همکاری و فروش</option>
              <option value="other">سایر</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="message"
              className="text-sm font-bold text-[#123E61]"
            >
              پیام شما
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              placeholder="پیام خود را وارد کنید..."
              className="resize-none rounded-xl border border-[#123E61]/10 bg-white/55 px-4 py-3 text-sm text-[#123E61] placeholder:text-[#123E61]/45 outline-none transition-colors focus:border-[#0060AC]/50"
            />
          </div>

          <button
            type="submit"
            className="mt-2 flex w-fit items-center gap-2 rounded-full bg-[#427EBA] px-6 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(66,126,186,0.4)] transition-transform hover:scale-[1.02]"
          >
            ارسال پیام
            <ArrowLeftIcon />
          </button>
        </form>
      </div>

      {/* کپسول لوگو - وسط، فقط بالاش گرد، پایینش صاف و چسبیده به ته صفحه */}
      <div className="absolute bottom-0 left-1/2 flex h-14 w-80 -translate-x-1/2 items-center justify-center rounded-t-full bg-[#3374A0]/90 pt-3 shadow-[0_-8px_24px_rgba(0,60,120,0.25)] backdrop-blur-md sm:h-18 sm:w-88 sm:pt-4">
        <Logo width={130} height={51} />
      </div>
    </div>
  );
}
