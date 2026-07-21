"use client";

import { MosaAudiencePage } from "@/components/mosa-audience-page";
import { useLanguage } from "@/components/language-provider";
import { getMosaAssociationsTranslations } from "@/data/translations/mosa-associations";

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

export default function MosaAssociationsPage() {
  const { locale } = useLanguage();
  const t = getMosaAssociationsTranslations(locale);

  return (
    <MosaAudiencePage
      t={t}
      heroImages={associationsHeroImages}
      benefitsImage="/associations3.jpeg"
      benefitsImageAlt={benefitsImageAltByLocale[locale]}
    />
  );
}
