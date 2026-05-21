"use client";

import { useState } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { SectionIntro } from "@/components/sections";
import { getCommonUi } from "@/data/translations/common";
import { getResearchTrackLabel, getResearchUi } from "@/data/translations/research";
import { getRelatedPublicationId, getTrackItems, researchTracks, type ResearchTrack } from "@/data/h2c-research";

export default function HydrogenAndCarbonResearchPage() {
  const { locale } = useLanguage();
  const ui = getCommonUi(locale);
  const researchLabels = getResearchUi(locale);
  const [activeTrack, setActiveTrack] = useState<ResearchTrack>(researchTracks[0]);
  const filteredArticles = getTrackItems(activeTrack);

  return (
    <>
      <section className="px-6 pt-24 pb-14 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <SectionIntro title={researchLabels.title} />
          <div className="mt-8 flex flex-wrap gap-3">
            {researchTracks.map((track) => (
              <button
                key={track}
                onClick={() => setActiveTrack(track)}
                className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                  track === activeTrack
                    ? "border-[var(--color-teal)] bg-[var(--color-teal)] text-white"
                    : "border-[var(--color-teal)]/35 bg-[var(--color-surface-soft)] text-[var(--color-teal)] hover:bg-[var(--color-mint)]/40"
                }`}
              >
                {getResearchTrackLabel(locale, track)}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
          <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-teal)] sm:text-3xl">
            {getResearchTrackLabel(locale, activeTrack)}
          </h2>
          <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filteredArticles.map((article) => (
              <article key={article.id} className="rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-white p-5">
                <h3 className="text-base font-semibold leading-6 text-[var(--color-charcoal)]">{article.title}</h3>
                <p className="mt-2 text-sm text-[var(--color-muted)]">
                  <strong>{ui.candidate}</strong> {article.candidate}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  <strong>{ui.chair}</strong> {article.chair}
                </p>
                <p className="mt-1 text-sm text-[var(--color-muted)]">
                  <strong>{ui.duration}</strong> {article.start} - {article.end}
                </p>
                <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{article.summary}</p>
                {(() => {
                  const publicationId = getRelatedPublicationId(article.id);
                  return (
                    <div className="mt-4 flex items-center justify-between gap-3">
                      {publicationId ? (
                        <Link
                          href={`/publications/${publicationId}`}
                          className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
                        >
                          <span aria-hidden>←</span> {ui.relatedPublication}
                        </Link>
                      ) : (
                        <span />
                      )}
                      <Link
                        href={`/research/${article.id}`}
                        className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
                      >
                        {ui.learnMore} <span aria-hidden>→</span>
                      </Link>
                    </div>
                  );
                })()}
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
