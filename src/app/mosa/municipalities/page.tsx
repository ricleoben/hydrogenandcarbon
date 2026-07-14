"use client";

import { MosaAudiencePage } from "@/components/mosa-audience-page";
import { useLanguage } from "@/components/language-provider";
import { getMosaMunicipalitiesTranslations } from "@/data/translations/mosa-municipalities";

export default function MosaMunicipalitiesPage() {
  const { locale } = useLanguage();
  const t = getMosaMunicipalitiesTranslations(locale);

  return <MosaAudiencePage t={t} heroImage="/MOSA%208.jpeg" />;
}
