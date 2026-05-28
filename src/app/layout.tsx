import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { GlobalImageWatermark } from "@/components/global-image-watermark";
import { LanguageProvider } from "@/components/language-provider";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { getLocale } from "@/lib/server-i18n";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://hydrogenandcarbon.at"),
  title: "SCoRe A⁺ Hydrogen and Carbon",
  description:
    "Standalone website for the SCoRe A⁺ Hydrogen and Carbon Centre at Montanuniversitaet Leoben.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html
      lang={locale}
      suppressHydrationWarning
      className={`${inter.variable} ${manrope.variable} h-full scroll-smooth`}
      data-scroll-behaviour="smooth"
    >
      <body suppressHydrationWarning className="min-h-full bg-[var(--color-bg)] text-[var(--color-charcoal)] antialiased">
        <LanguageProvider initialLocale={locale}>
          <GlobalImageWatermark />
          <div className="flex min-h-full flex-col">
            <SiteHeader />
            <main className="flex-1">{children}</main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
