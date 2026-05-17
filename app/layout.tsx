import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "Ezz El-Din Al-Muliki | Portfolio",
  description: "Mechatronics Engineer Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      {/* هنا قمنا بوضع كلاسات الوضع الفاتح (bg-slate-50) والوضع الداكن (dark:bg-slate-900) */}
      <body className="bg-slate-50 text-slate-900 dark:bg-slate-900 dark:text-slate-50 transition-colors duration-300">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}