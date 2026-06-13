import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { runtime } from "../src/runtime/arkasphere.runtime";
import { orchestrator } from "../src/core/orchestrator/arka.orchestrator";
orchestrator.init();
runtime.boot();
// ⚡ مپ کردن دقیق وزن‌های فونت بر اساس فایل‌های موجود در دایرکتوری شما
const vazirmatn = localFont({
  src: [
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../node_modules/vazirmatn/fonts/webfonts/Vazirmatn-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-vazirmatn",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arka Verse",
  description: "Operational Excellence Framework",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl" className={vazirmatn.variable}>
      <body className="antialiased select-none bg-[#0B0F19]">
        {children}
      </body>
    </html>
  );
}