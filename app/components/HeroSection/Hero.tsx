import Image from "next/image";
import Link from "next/link";

const laptopImage = "/LapTopHero.png";

const sparkles = [
  { left: "18%", top: "18%", opacity: 0.55 },
  { left: "34%", top: "8%", opacity: 0.6 },
  { left: "55%", top: "3%", opacity: 0.5 },
  { left: "77%", top: "11%", opacity: 0.55 },
  { left: "92%", top: "30%", opacity: 0.6 },
  { left: "94%", top: "52%", opacity: 0.55 },
  { left: "84%", top: "74%", opacity: 0.5 },
  { left: "63%", top: "92%", opacity: 0.55 },
  { left: "42%", top: "95%", opacity: 0.6 },
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
          ? "absolute bottom-0 left-[40px] z-20 flex flex-col items-start"
          : "absolute left-[calc(6.5%+1px)] top-[20.07%] flex w-[44.9%] flex-col items-start"
      }
    >
      <div className={isLaptop ? "" : "-translate-x-[20px]"}>
        <h2
          id={titleId}
          dir="ltr"
          className={
            isLaptop
              ? "m-0  whitespace-nowrap text-left font-[family-name:var(--font-inter)] text-[clamp(26px,3.6vw,48px)] font-extrabold leading-[1.4] tracking-[-1px]"
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
          ? "mt-[34px] flex w-[350px] flex-row-reverse items-center m-auto gap-[30px]"
          : "mt-[37px] flex mr-auto ml-[59px] w-fit flex-row-reverse items-center justify-start gap-[30px]"
      }
    >





      {/* <div className="flex items-center  lg:ml-10 text-[#123E61]">

               <svg width="81" height="26" viewBox="0 0 81 26" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect x="55.05" y="0.5" width="25" height="25" rx="12.5" stroke="#123E61"/>
<path d="M67.55 8.91675V17.0834M71.6333 13.0001L67.55 17.0834L63.4667 13.0001" stroke="#123E61" strokeWidth="1.16667"/>
<path d="M4.8846e-05 15.015C4.8846e-05 14.655 0.0500489 14.255 0.150049 13.815C0.250049 13.375 0.410049 12.89 0.630049 12.36L1.71005 12.78C1.55005 13.2 1.43005 13.585 1.35005 13.935C1.27005 14.285 1.23005 14.61 1.23005 14.91C1.23005 15.46 1.36505 15.905 1.63505 16.245C1.91505 16.595 2.28505 16.85 2.74505 17.01C3.21505 17.17 3.73005 17.25 4.29005 17.25C4.97005 17.25 5.54005 17.175 6.00005 17.025C6.46005 16.885 6.82505 16.69 7.09505 16.44C7.36505 16.19 7.55505 15.905 7.66505 15.585C7.78505 15.275 7.84505 14.95 7.84505 14.61C7.84505 14.17 7.81005 13.755 7.74005 13.365C7.68005 12.975 7.59505 12.595 7.48505 12.225C7.38505 11.845 7.27505 11.46 7.15505 11.07L8.37005 10.74C8.48005 11.12 8.56505 11.43 8.62505 11.67C8.68505 11.9 8.73005 12.085 8.76005 12.225C8.80005 12.365 8.83505 12.49 8.86505 12.6C8.97505 12.97 9.12005 13.245 9.30005 13.425C9.48005 13.595 9.68505 13.71 9.91505 13.77C10.155 13.82 10.4 13.845 10.65 13.845C10.86 13.845 11.01 13.905 11.1 14.025C11.2 14.135 11.25 14.27 11.25 14.43C11.25 14.59 11.18 14.74 11.04 14.88C10.9 15.01 10.72 15.075 10.5 15.075C10.08 15.075 9.73005 15.005 9.45005 14.865C9.17005 14.715 8.95005 14.53 8.79005 14.31C8.64005 14.09 8.54005 13.86 8.49005 13.62L9.10505 14.385C9.07505 14.895 8.97505 15.39 8.80505 15.87C8.64505 16.36 8.38505 16.8 8.02505 17.19C7.66505 17.59 7.17505 17.905 6.55505 18.135C5.94505 18.365 5.17505 18.48 4.24505 18.48C3.67505 18.48 3.13505 18.41 2.62505 18.27C2.11505 18.13 1.66005 17.915 1.26005 17.625C0.870049 17.345 0.560049 16.985 0.330049 16.545C0.110049 16.115 4.8846e-05 15.605 4.8846e-05 15.015ZM4.53005 9.03C4.32005 9.03 4.14005 8.96 3.99005 8.82C3.85005 8.67 3.78005 8.495 3.78005 8.295C3.78005 8.095 3.85005 7.92 3.99005 7.77C4.14005 7.62 4.32005 7.545 4.53005 7.545C4.73005 7.545 4.90005 7.62 5.04005 7.77C5.19005 7.92 5.26505 8.095 5.26505 8.295C5.26505 8.495 5.19005 8.67 5.04005 8.82C4.90005 8.96 4.73005 9.03 4.53005 9.03ZM10.5071 15.075L10.6571 13.845C11.1571 13.845 11.5471 13.81 11.8271 13.74C12.1071 13.66 12.3171 13.515 12.4571 13.305C12.6071 13.085 12.7271 12.77 12.8171 12.36C12.9071 11.95 13.0171 11.415 13.1471 10.755L14.3171 10.98C14.2771 11.16 14.2321 11.36 14.1821 11.58C14.1321 11.8 14.0871 12.02 14.0471 12.24C14.0171 12.45 14.0021 12.635 14.0021 12.795C14.0021 12.945 14.0121 13.085 14.0321 13.215C14.0521 13.345 14.1271 13.455 14.2571 13.545C14.3871 13.635 14.6071 13.71 14.9171 13.77C15.2271 13.82 15.6721 13.845 16.2521 13.845C16.4621 13.845 16.6121 13.905 16.7021 14.025C16.8021 14.135 16.8521 14.27 16.8521 14.43C16.8521 14.59 16.7821 14.74 16.6421 14.88C16.5021 15.01 16.3221 15.075 16.1021 15.075C15.4921 15.075 15.0071 15.045 14.6471 14.985C14.2871 14.915 14.0121 14.815 13.8221 14.685C13.6421 14.555 13.5121 14.395 13.4321 14.205C13.3621 14.005 13.3071 13.775 13.2671 13.515L13.7171 13.545C13.5571 13.865 13.3821 14.125 13.1921 14.325C13.0121 14.525 12.8021 14.68 12.5621 14.79C12.3221 14.9 12.0321 14.975 11.6921 15.015C11.3621 15.055 10.9671 15.075 10.5071 15.075ZM14.2871 17.91C14.0771 17.91 13.8971 17.835 13.7471 17.685C13.6071 17.545 13.5371 17.375 13.5371 17.175C13.5371 16.975 13.6071 16.8 13.7471 16.65C13.8971 16.5 14.0771 16.425 14.2871 16.425C14.4871 16.425 14.6571 16.5 14.7971 16.65C14.9471 16.8 15.0221 16.975 15.0221 17.175C15.0221 17.375 14.9471 17.545 14.7971 17.685C14.6571 17.835 14.4871 17.91 14.2871 17.91ZM12.2321 17.91C12.0221 17.91 11.8421 17.835 11.6921 17.685C11.5521 17.545 11.4821 17.375 11.4821 17.175C11.4821 16.975 11.5521 16.8 11.6921 16.65C11.8421 16.5 12.0221 16.425 12.2321 16.425C12.4321 16.425 12.6021 16.5 12.7421 16.65C12.8921 16.8 12.9671 16.975 12.9671 17.175C12.9671 17.375 12.8921 17.545 12.7421 17.685C12.6021 17.835 12.4321 17.91 12.2321 17.91ZM16.1028 15.075L16.2528 13.845C16.8428 13.845 17.3028 13.825 17.6328 13.785C17.9628 13.735 18.1978 13.62 18.3378 13.44C18.4778 13.25 18.5478 12.955 18.5478 12.555C18.5478 12.305 18.5078 12.01 18.4278 11.67C18.3478 11.32 18.2428 10.95 18.1128 10.56C17.9828 10.17 17.8428 9.785 17.6928 9.405L18.9078 8.955C19.0378 9.275 19.1578 9.64 19.2678 10.05C19.3878 10.46 19.4878 10.865 19.5678 11.265C19.6478 11.665 19.6878 12.015 19.6878 12.315C19.6878 12.815 19.6178 13.24 19.4778 13.59C19.3478 13.94 19.1378 14.225 18.8478 14.445C18.5578 14.665 18.1828 14.825 17.7228 14.925C17.2728 15.025 16.7328 15.075 16.1028 15.075ZM18.8778 17.91C18.6678 17.91 18.4878 17.835 18.3378 17.685C18.1978 17.545 18.1278 17.375 18.1278 17.175C18.1278 16.975 18.1978 16.8 18.3378 16.65C18.4878 16.5 18.6678 16.425 18.8778 16.425C19.0778 16.425 19.2478 16.5 19.3878 16.65C19.5378 16.8 19.6128 16.975 19.6128 17.175C19.6128 17.375 19.5378 17.545 19.3878 17.685C19.2478 17.835 19.0778 17.91 18.8778 17.91ZM16.8228 17.91C16.6128 17.91 16.4328 17.835 16.2828 17.685C16.1428 17.545 16.0728 17.375 16.0728 17.175C16.0728 16.975 16.1428 16.8 16.2828 16.65C16.4328 16.5 16.6128 16.425 16.8228 16.425C17.0228 16.425 17.1928 16.5 17.3328 16.65C17.4828 16.8 17.5578 16.975 17.5578 17.175C17.5578 17.375 17.4828 17.545 17.3328 17.685C17.1928 17.835 17.0228 17.91 16.8228 17.91ZM24.9502 15.075C24.1502 15.075 23.5352 14.985 23.1052 14.805C22.6852 14.625 22.3952 14.345 22.2352 13.965C22.0752 13.585 21.9852 13.095 21.9652 12.495L21.6652 4.29H22.8952L23.1952 12.015C23.2152 12.505 23.2602 12.885 23.3302 13.155C23.4102 13.415 23.5802 13.595 23.8402 13.695C24.1102 13.795 24.5302 13.845 25.1002 13.845C25.3102 13.845 25.4602 13.905 25.5502 14.025C25.6502 14.135 25.7002 14.27 25.7002 14.43C25.7002 14.59 25.6302 14.74 25.4902 14.88C25.3502 15.01 25.1702 15.075 24.9502 15.075ZM24.9504 15.075L25.1004 13.845C25.6904 13.845 26.1504 13.825 26.4804 13.785C26.8104 13.735 27.0454 13.62 27.1854 13.44C27.3254 13.25 27.3954 12.955 27.3954 12.555C27.3954 12.305 27.3554 12.01 27.2754 11.67C27.1954 11.32 27.0904 10.95 26.9604 10.56C26.8304 10.17 26.6904 9.785 26.5404 9.405L27.7554 8.955C27.8854 9.275 28.0054 9.64 28.1154 10.05C28.2354 10.46 28.3354 10.865 28.4154 11.265C28.4954 11.665 28.5354 12.015 28.5354 12.315C28.5354 12.815 28.4654 13.24 28.3254 13.59C28.1954 13.94 27.9854 14.225 27.6954 14.445C27.4054 14.665 27.0304 14.825 26.5704 14.925C26.1204 15.025 25.5804 15.075 24.9504 15.075ZM26.6304 19.575C26.4304 19.575 26.2554 19.5 26.1054 19.35C25.9654 19.2 25.8954 19.025 25.8954 18.825C25.8954 18.625 25.9654 18.45 26.1054 18.3C26.2554 18.16 26.4304 18.09 26.6304 18.09C26.8404 18.09 27.0154 18.16 27.1554 18.3C27.3054 18.45 27.3804 18.625 27.3804 18.825C27.3804 19.025 27.3054 19.2 27.1554 19.35C27.0154 19.5 26.8404 19.575 26.6304 19.575ZM27.6504 17.925C27.4504 17.925 27.2754 17.85 27.1254 17.7C26.9854 17.55 26.9154 17.375 26.9154 17.175C26.9154 16.975 26.9854 16.8 27.1254 16.65C27.2754 16.51 27.4504 16.44 27.6504 16.44C27.8604 16.44 28.0354 16.51 28.1754 16.65C28.3254 16.8 28.4004 16.975 28.4004 17.175C28.4004 17.375 28.3254 17.55 28.1754 17.7C28.0354 17.85 27.8604 17.925 27.6504 17.925ZM25.6104 17.925C25.4104 17.925 25.2354 17.85 25.0854 17.7C24.9454 17.55 24.8754 17.375 24.8754 17.175C24.8754 16.975 24.9454 16.8 25.0854 16.65C25.2354 16.51 25.4104 16.44 25.6104 16.44C25.8204 16.44 25.9954 16.51 26.1354 16.65C26.2854 16.8 26.3604 16.975 26.3604 17.175C26.3604 17.375 26.2854 17.55 26.1354 17.7C25.9954 17.85 25.8204 17.925 25.6104 17.925ZM34.5216 18.45L34.2516 17.22C34.8516 17.14 35.4016 17.025 35.9016 16.875C36.4116 16.735 36.8466 16.53 37.2066 16.26C37.5766 15.99 37.8616 15.635 38.0616 15.195C38.2616 14.755 38.3616 14.205 38.3616 13.545C38.3616 13.235 38.3316 12.94 38.2716 12.66C38.2116 12.37 38.1216 12.115 38.0016 11.895C37.8816 11.675 37.7366 11.5 37.5666 11.37C37.4066 11.24 37.2216 11.175 37.0116 11.175C36.7816 11.175 36.5716 11.265 36.3816 11.445C36.2016 11.615 36.0566 11.835 35.9466 12.105C35.8466 12.375 35.7966 12.645 35.7966 12.915C35.7966 13.125 35.8366 13.31 35.9166 13.47C36.0066 13.62 36.1516 13.735 36.3516 13.815C36.5516 13.895 36.8116 13.935 37.1316 13.935C37.4216 13.935 37.7116 13.905 38.0016 13.845C38.3016 13.785 38.5566 13.705 38.7666 13.605L38.8266 14.655C38.5866 14.825 38.3016 14.945 37.9716 15.015C37.6516 15.085 37.3266 15.12 36.9966 15.12C36.6166 15.12 36.2766 15.08 35.9766 15C35.6866 14.92 35.4366 14.805 35.2266 14.655C35.0266 14.495 34.8716 14.295 34.7616 14.055C34.6616 13.815 34.6116 13.535 34.6116 13.215C34.6116 12.835 34.6716 12.455 34.7916 12.075C34.9116 11.685 35.0816 11.33 35.3016 11.01C35.5216 10.69 35.7866 10.435 36.0966 10.245C36.4066 10.045 36.7516 9.945 37.1316 9.945C37.5316 9.945 37.8816 10.05 38.1816 10.26C38.4816 10.46 38.7316 10.735 38.9316 11.085C39.1316 11.435 39.2816 11.83 39.3816 12.27C39.4816 12.71 39.5316 13.165 39.5316 13.635C39.5316 14.565 39.3416 15.365 38.9616 16.035C38.5916 16.715 38.0316 17.255 37.2816 17.655C36.5416 18.055 35.6216 18.32 34.5216 18.45ZM40.4206 18.48L39.9856 17.34C40.7156 17.1 41.3206 16.825 41.8006 16.515C42.2906 16.205 42.6756 15.875 42.9556 15.525C43.2456 15.175 43.4506 14.82 43.5706 14.46C43.6906 14.09 43.7506 13.735 43.7506 13.395C43.7506 12.905 43.6406 12.41 43.4206 11.91C43.2106 11.4 42.9756 10.92 42.7156 10.47L43.8106 9.915C44.0006 10.265 44.1656 10.61 44.3056 10.95C44.4556 11.29 44.5856 11.61 44.6956 11.91C44.8156 12.21 44.9106 12.485 44.9806 12.735C45.1206 13.165 45.3006 13.46 45.5206 13.62C45.7506 13.77 46.0606 13.845 46.4506 13.845C46.6606 13.845 46.8106 13.905 46.9006 14.025C47.0006 14.135 47.0506 14.27 47.0506 14.43C47.0506 14.59 46.9806 14.74 46.8406 14.88C46.7006 15.01 46.5206 15.075 46.3006 15.075C45.8606 15.075 45.5006 15 45.2206 14.85C44.9506 14.69 44.7456 14.485 44.6056 14.235C44.4656 13.975 44.3706 13.705 44.3206 13.425L44.8006 13.695C44.8006 14.355 44.6506 14.955 44.3506 15.495C44.0606 16.045 43.6856 16.52 43.2256 16.92C42.7656 17.33 42.2856 17.665 41.7856 17.925C41.2856 18.185 40.8306 18.37 40.4206 18.48ZM46.3079 15.075L46.4579 13.845C46.9479 13.845 47.3379 13.815 47.6279 13.755C47.9179 13.695 48.1279 13.575 48.2579 13.395C48.3879 13.205 48.4529 12.925 48.4529 12.555C48.4529 12.305 48.4129 12.01 48.3329 11.67C48.2529 11.32 48.1479 10.95 48.0179 10.56C47.8879 10.17 47.7479 9.785 47.5979 9.405L48.8129 8.955C48.9429 9.275 49.0629 9.64 49.1729 10.05C49.2929 10.46 49.3929 10.865 49.4729 11.265C49.5529 11.665 49.5929 12.015 49.5929 12.315C49.5929 12.715 49.5479 13.07 49.4579 13.38C49.3779 13.68 49.2529 13.94 49.0829 14.16C48.9129 14.37 48.6929 14.545 48.4229 14.685C48.1629 14.815 47.8579 14.915 47.5079 14.985C47.1579 15.045 46.7579 15.075 46.3079 15.075ZM47.9129 17.865C47.7029 17.865 47.5229 17.79 47.3729 17.64C47.2329 17.5 47.1629 17.33 47.1629 17.13C47.1629 16.93 47.2329 16.755 47.3729 16.605C47.5229 16.455 47.7029 16.38 47.9129 16.38C48.1129 16.38 48.2829 16.455 48.4229 16.605C48.5729 16.755 48.6479 16.93 48.6479 17.13C48.6479 17.33 48.5729 17.5 48.4229 17.64C48.2829 17.79 48.1129 17.865 47.9129 17.865Z" fill="#123E61"/>
</svg>


      </div> */}


         {/* ۲. دکمه آیکون شیشه‌ای و متن برو پایین */}
  <div className="flex items-center lg:ml-10 text-[#123E61] gap-1.5"> 
    {/* آیکون دایره‌ای شیشه‌ای کاملاً تمیز بدون باگ کادر مستطیلی */}
    <div className="relative flex h-[44px] w-[44px] items-center cursor-pointer justify-center rounded-full border-2 border-white/40 bg-gradient-to-br from-white/70 via-[#7C5CFF]/15 to-white/10 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105">
      {/* حلقه داخلی و فلش رو به پایین */}
      <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-[#123E61]">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1.5V10.5M10 6.5L6 10.5L2 6.5" stroke="#123E61" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>

   <span className="hidden whitespace-nowrap text-[16px] font-medium text-[#123E61] md:inline-block">
      برو پایین
    </span>
  </div>














      <Link
        href="/start-project"
        className={
          isLaptop
            ? "group flex h-[46px] w-[140px] justify-center shrink-0 items-center bgjustify-center gap-[6px] rounded-full bg-[rgba(66,126,186,0.93)] text-[15px] font-bold text-white shadow-[0_8px_30px_#3083BA] transition-all duration-300"
            : "group flex h-[50px] w-[150px] shrink-0 items-center justify-center gap-[6px] rounded-full bg-[rgba(66,126,186,0.93)] text-[15px] font-bold text-white shadow-[0_8px_30px_#3083BA] transition-all duration-300"
        }
      >
        <svg
          width="12"
          height="9"
          viewBox="0 0 12 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="transition-transform duration-300 ease-in-out group-hover:translate-x-1"
          aria-hidden="true"
        >
          <path
            d="M1 4.5H11M11 4.5L7.5 1M11 4.5L7.5 8"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        <span className="whitespace-nowrap">شروع پروژه</span>
      </Link>
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
      className="relative mt-[52px] sm:mt-[48px] pb-10 lg:mt-[100px] xl:mt-[100px] xl:mb-10 2xl:mb-10"
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
    href="/start-project"
    className="flex h-[50px] w-[160px] group items-center justify-center gap-[6px] rounded-full bg-[rgba(66,126,186,0.93)] text-[14px] font-bold text-white shadow-[0_8px_30px_#3083BA] transition-all duration-300 hover:opacity-95"
  >
    <svg width="12" className="transition-transform duration-300 ease-in-out group-hover:translate-x-1" height="9" viewBox="0 0 12 9" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1 4.5H11M11 4.5L7.5 1M11 4.5L7.5 8" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="whitespace-nowrap ">شروع پروژه</span>
  </Link>

  {/* ۲. دکمه آیکون شیشه‌ای و متن برو پایین */}
  <div className="flex items-center gap-[6px]"> 
    {/* آیکون دایره‌ای شیشه‌ای کاملاً تمیز بدون باگ کادر مستطیلی */}
    <div className="relative flex h-[44px] w-[44px] items-center cursor-pointer justify-center rounded-full border-2 border-white/40 bg-gradient-to-br from-white/70 via-[#7C5CFF]/15 to-white/10 backdrop-blur-md shadow-[0_4px_25px_rgba(0,0,0,0.4)] transition-transform duration-300 hover:scale-105">
      {/* حلقه داخلی و فلش رو به پایین */}
      <div className="flex h-[32px] w-[32px] items-center justify-center rounded-full border-2 border-[#123E61]">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 1.5V10.5M10 6.5L6 10.5L2 6.5" stroke="#123E61" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
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
        <div className="mx-auto 2xl:h-[20px] xl:h-[20px] lg:h-[20px] md:h-[20px] sm:h-[10px] h-[5px] w-[60%] 2xl:w-[90%] xl:w-[90%] lg:w-[90%] md:w-[90%] rounded-full bg-[#123E61] md:bg-[#4982BC]/20 shadow-none md:shadow-[0_7px_17px_rgba(0,0,0,0.5)]" />
        </>
  );
}
