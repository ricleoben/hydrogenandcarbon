import type { Metadata } from "next";
import type { Locale } from "@/lib/i18n";

export const SITE_URL = "https://hydrogenandcarbon.at";
export const SITE_NAME = "SCoRe A⁺ Hydrogen and Carbon";
export const DEFAULT_OG_IMAGE = "/forschunzentrum.jpeg";

type BuildPageMetadataInput = {
  locale: Locale;
  path: string;
  title: string;
  description: string;
  image?: string;
  type?: "website" | "article";
};

/**
 * Locale lives in a cookie rather than the URL, so every language shares one
 * canonical URL. `alternates.languages` is deliberately omitted for that reason.
 */
export function buildPageMetadata({
  locale,
  path,
  title,
  description,
  image = DEFAULT_OG_IMAGE,
  type = "website",
}: BuildPageMetadataInput): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      title,
      description,
      locale: locale === "de" ? "de_AT" : "en_GB",
      images: [{ url: encodeURI(image), alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [encodeURI(image)],
    },
  };
}
