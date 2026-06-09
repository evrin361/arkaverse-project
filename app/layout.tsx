import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s | ArkaVerse",
    default: "ArkaVerse | آرکاورس",
  },
  description: "نظام‌مندی, مکانیزاسیون و راهبری سیستم‌های اداری و تجاری",
  metadataBase: new URL("https://ArkaVerse.ir"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className="bg-arkaBg text-arkaText antialiased"
        style={{
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
        }}
      >
        {children}
      </body>
    </html>
  );
}
