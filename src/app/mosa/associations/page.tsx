import type { Metadata } from "next";
import { MosaAudiencePage } from "@/components/mosa-audience-page";
import { getRouteMeta } from "@/data/translations/meta";
import { getMosaAssociationsTranslations } from "@/data/translations/mosa-associations";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";

const associationsHeroImages = [
  "/associations1.jpeg",
  "/associations2.jpeg",
  "/associations3.jpeg",
  "/associations4.jpeg",
  "/associations5.jpeg",
];

const benefitsImageAltByLocale = {
  en: "Association members taking part in a MOSA outdoor workshop at the research centre",
  de: "Vereinsmitglieder bei einem MOSA-Outdoor-Workshop am Forschungszentrum",
} as const;

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "mosaAssociations");
  return buildPageMetadata({ locale, path: "/mosa/associations", ...routeMeta });
}

export default async function MosaAssociationsPage() {
  const locale = await getLocale();
  const t = getMosaAssociationsTranslations(locale);

  return (
    <MosaAudiencePage
      locale={locale}
      t={t}
      heroImages={associationsHeroImages}
      benefitsImage="/associations3.jpeg"
      benefitsImageAlt={benefitsImageAltByLocale[locale]}
    />
  );
}
