import type { Metadata } from "next";
import { getRouteMeta } from "@/data/translations/meta";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";
import { HomePageContent } from "./home-page-content";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "home");
  return buildPageMetadata({ locale, path: "/", ...routeMeta });
}

export default async function HydrogenAndCarbonHomePage() {
  const locale = await getLocale();

  return <HomePageContent locale={locale} />;
}
