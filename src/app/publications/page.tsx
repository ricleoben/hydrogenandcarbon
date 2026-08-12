import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections";
import { getRouteMeta } from "@/data/translations/meta";
import { getPublicationUi } from "@/data/translations/publications";
import { h2cPublicationPosters } from "@/data/h2c-publications";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";
import { PublicationBrowser, type PublicationCardView } from "./publication-browser";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "publications");
  return buildPageMetadata({ locale, path: "/publications", ...routeMeta });
}

export default async function HydrogenAndCarbonPublicationsPage() {
  const locale = await getLocale();
  const pubUi = getPublicationUi(locale);

  const posters: PublicationCardView[] = h2cPublicationPosters.map((poster) => ({
    id: poster.id,
    title: poster.title,
    authors: poster.authors,
    category: poster.category,
    categoryLabel: pubUi.categoryShort[poster.category],
  }));

  const filters = [
    { key: "All", label: pubUi.filters.all },
    { key: "Hydrogen Production", label: pubUi.filters.hydrogenProduction },
    { key: "Hydrogen Storage, Transport, and Application", label: pubUi.filters.storageTransport },
    { key: "Carbon and its Applications", label: pubUi.filters.carbon },
  ];

  return (
    <section className="px-4 pt-20 pb-12 sm:px-10 sm:pt-24 sm:pb-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionIntro as="h1" title={pubUi.title} />
        <PublicationBrowser locale={locale} posters={posters} filters={filters} />
      </div>
    </section>
  );
}
