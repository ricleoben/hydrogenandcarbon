import type { Metadata } from "next";
import { SectionIntro } from "@/components/sections";
import { getCommonUi } from "@/data/translations/common";
import { getRouteMeta } from "@/data/translations/meta";
import { getResearchTrackLabel, getResearchUi } from "@/data/translations/research";
import { getRelatedPublicationId, getTrackItems, researchTracks } from "@/data/h2c-research";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";
import { ResearchTrackExplorer, type ResearchTrackView } from "./research-track-explorer";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "research");
  return buildPageMetadata({ locale, path: "/research", ...routeMeta });
}

export default async function HydrogenAndCarbonResearchPage() {
  const locale = await getLocale();
  const ui = getCommonUi(locale);
  const researchLabels = getResearchUi(locale);

  const tracks: ResearchTrackView[] = researchTracks.map((track) => ({
    key: track,
    label: getResearchTrackLabel(locale, track),
    items: getTrackItems(track).map((item) => ({
      id: item.id,
      title: item.title,
      candidate: item.candidate,
      chair: item.chair,
      duration: `${item.start} - ${item.end}`,
      summary: item.summary,
      publicationId: getRelatedPublicationId(item.id) ?? null,
    })),
  }));

  return (
    <section className="px-4 pt-20 pb-12 sm:px-10 sm:pt-24 sm:pb-16 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionIntro as="h1" title={researchLabels.title} />
        <ResearchTrackExplorer
          tracks={tracks}
          labels={{
            candidate: ui.candidate,
            chair: ui.chair,
            duration: ui.duration,
            learnMore: ui.learnMore,
            relatedPublication: ui.relatedPublication,
          }}
        />
      </div>
    </section>
  );
}
