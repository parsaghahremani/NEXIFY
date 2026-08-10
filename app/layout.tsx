import type { Metadata } from "next";
import { Vazirmatn, Inter } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexify",
  description: "Nexify official website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
     <html lang="fa" dir="rtl">
    <body className={`${vazirmatn.className} ${inter.variable}`}>
      {children}
    </body>
  </html>
  );
}
