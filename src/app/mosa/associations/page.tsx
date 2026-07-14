"use client";

import { MosaAudiencePage } from "@/components/mosa-audience-page";
import { useLanguage } from "@/components/language-provider";
import { getMosaAssociationsTranslations } from "@/data/translations/mosa-associations";

export default function MosaAssociationsPage() {
  const { locale } = useLanguage();
  const t = getMosaAssociationsTranslations(locale);

  return <MosaAudiencePage t={t} heroImage="/MOSA%209.jpeg" />;
}
