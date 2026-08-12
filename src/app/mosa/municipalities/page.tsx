import type { Metadata } from "next";
import { MosaAudiencePage } from "@/components/mosa-audience-page";
import { getRouteMeta } from "@/data/translations/meta";
import { getMosaMunicipalitiesTranslations } from "@/data/translations/mosa-municipalities";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "mosaMunicipalities");
  return buildPageMetadata({ locale, path: "/mosa/municipalities", ...routeMeta });
}

export default async function MosaMunicipalitiesPage() {
  const locale = await getLocale();
  const t = getMosaMunicipalitiesTranslations(locale);

  return <MosaAudiencePage locale={locale} t={t} heroImage="/MOSA%208.jpeg" />;
}
