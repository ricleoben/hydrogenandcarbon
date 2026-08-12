"use client";

import { useState } from "react";
import Link from "next/link";

export type ResearchCardView = {
  id: string;
  title: string;
  candidate: string;
  chair: string;
  duration: string;
  summary: string;
  publicationId: string | null;
};

export type ResearchTrackView = {
  key: string;
  label: string;
  items: ResearchCardView[];
};

type ResearchTrackExplorerProps = {
  tracks: ResearchTrackView[];
  labels: {
    candidate: string;
    chair: string;
    duration: string;
    learnMore: string;
    relatedPublication: string;
  };
};

export function ResearchTrackExplorer({ tracks, labels }: ResearchTrackExplorerProps) {
  const [activeKey, setActiveKey] = useState(() => tracks[0]?.key ?? "");
  const activeTrack = tracks.find((track) => track.key === activeKey) ?? tracks[0];

  if (!activeTrack) return null;

  return (
    <>
      <div className="mt-8 flex flex-wrap gap-3">
        {tracks.map((track) => {
          const isActive = track.key === activeTrack.key;
          return (
            <button
              key={track.key}
              type="button"
              onClick={() => setActiveKey(track.key)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-[var(--color-teal)] bg-[var(--color-teal)] text-white"
                  : "border-[var(--color-teal)]/35 bg-[var(--color-surface-soft)] text-[var(--color-teal)] hover:bg-[var(--color-mint)]/40"
              }`}
            >
              {track.label}
            </button>
          );
        })}
      </div>

      <div className="mt-10 rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:mt-14 sm:p-8">
        <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-teal)] sm:text-3xl">
          {activeTrack.label}
        </h2>
        <div className="mt-7 grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
          {activeTrack.items.map((article) => (
            <article key={article.id} className="rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-white p-5">
              <h3 className="text-base font-semibold leading-6 text-[var(--color-charcoal)]">{article.title}</h3>
              <p className="mt-2 text-sm text-[var(--color-muted)]">
                <strong>{labels.candidate}</strong> {article.candidate}
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                <strong>{labels.chair}</strong> {article.chair}
              </p>
              <p className="mt-1 text-sm text-[var(--color-muted)]">
                <strong>{labels.duration}</strong> {article.duration}
              </p>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">{article.summary}</p>
              <div className="mt-4 flex items-center justify-between gap-3">
                {article.publicationId ? (
                  <Link
                    href={`/publications/${article.publicationId}`}
                    className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
                  >
                    <span aria-hidden>←</span> {labels.relatedPublication}
                  </Link>
                ) : (
                  <span />
                )}
                <Link
                  href={`/research/${article.id}`}
                  className="inline-flex items-center gap-1 text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
                >
                  {labels.learnMore} <span aria-hidden>→</span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </>
  );
}
