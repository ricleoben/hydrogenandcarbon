import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import "./globals.css";
import { GlobalImageWatermark } from "@/components/global-image-watermark";
import { LanguageProvider } from "@/components/language-provider";
import { SiteFooter, SiteHeader } from "@/components/site-shell";
import { getCommonUi } from "@/data/translations/common";
import { SITE_NAME, SITE_URL } from "@/lib/metadata";
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
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} Centre`,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    "Research centre for methane pyrolysis, hydrogen storage, and carbon utilisation at Montanuniversitaet Leoben.",
  applicationName: SITE_NAME,
  openGraph: {
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const ui = getCommonUi(locale);

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
          <a
            href="#main-content"
            className="sr-only rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[100]"
          >
            {ui.skipToContent}
          </a>
          <div className="flex min-h-full flex-col">
            <SiteHeader />
            <main id="main-content" className="flex-1">
              {children}
            </main>
            <SiteFooter />
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
