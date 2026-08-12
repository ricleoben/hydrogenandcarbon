"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { getCommonUi } from "@/data/translations/common";
import type { Locale } from "@/lib/i18n";

export type PublicationCardView = {
  id: string;
  title: string;
  authors: string;
  category: string;
  categoryLabel: string;
};

type PublicationBrowserProps = {
  locale: Locale;
  posters: PublicationCardView[];
  filters: { key: string; label: string }[];
};

const ALL_FILTER = "All";

export function PublicationBrowser({ locale, posters, filters }: PublicationBrowserProps) {
  const ui = getCommonUi(locale);
  const [activeFilter, setActiveFilter] = useState(ALL_FILTER);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosters = useMemo(() => {
    const normalizedQuery = searchQuery.trim().toLowerCase();

    return posters.filter((poster) => {
      if (activeFilter !== ALL_FILTER && poster.category !== activeFilter) {
        return false;
      }
      if (!normalizedQuery) {
        return true;
      }
      return `${poster.title} ${poster.authors}`.toLowerCase().includes(normalizedQuery);
    });
  }, [activeFilter, posters, searchQuery]);

  return (
    <div className="mt-10 rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:mt-14 sm:p-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => {
          const isActive = activeFilter === filter.key;
          return (
            <button
              key={filter.key}
              type="button"
              onClick={() => setActiveFilter(filter.key)}
              aria-pressed={isActive}
              className={`rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
                isActive
                  ? "border-[var(--color-teal)] bg-[var(--color-teal)] text-white"
                  : "border-[var(--color-teal)]/35 bg-[var(--color-surface-soft)] text-[var(--color-teal)] hover:bg-[var(--color-mint)]/40"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>

      <div className="mt-6">
        <label htmlFor="publication-search" className="sr-only">
          {ui.searchPublications}
        </label>
        <div className="relative">
          <svg
            aria-hidden="true"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[var(--color-muted)]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M10.5 18a7.5 7.5 0 1 0 0-15 7.5 7.5 0 0 0 0 15z"
            />
          </svg>
          <input
            id="publication-search"
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder={ui.searchPlaceholder}
            className="w-full rounded-[1rem] border border-[rgba(56,56,55,0.12)] bg-white py-3 pl-11 pr-10 text-sm text-[var(--color-charcoal)] outline-none transition-colors placeholder:text-[var(--color-muted)] focus:border-[var(--color-teal)]/50 focus:ring-2 focus:ring-[var(--color-teal)]/15"
          />
          {searchQuery ? (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full px-2 py-1 text-xs font-semibold text-[var(--color-muted)] transition-colors hover:text-[var(--color-teal)]"
              aria-label={ui.clearSearch}
            >
              {ui.clear}
            </button>
          ) : null}
        </div>
        {/* Always rendered so screen readers announce updates; collapses when idle. */}
        <p className="mt-2 text-sm text-[var(--color-muted)] empty:mt-0" role="status" aria-live="polite">
          {searchQuery.trim() ? ui.resultsFor(filteredPosters.length, searchQuery.trim()) : ""}
        </p>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
        {filteredPosters.map((poster) => (
          <Link
            key={poster.id}
            href={`/publications/${poster.id}`}
            className="group flex flex-col rounded-[1.25rem] border border-[rgba(56,56,55,0.1)] bg-white p-5 transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-teal)]/35 hover:shadow-[0_22px_44px_-28px_rgba(0,114,125,0.45)] sm:p-6"
          >
            <span className="inline-flex w-fit rounded-full bg-[var(--color-surface-soft)] px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-[var(--color-teal)]">
              {poster.categoryLabel}
            </span>
            <h3 className="mt-4 flex-1 text-base font-semibold leading-6 tracking-tight text-[var(--color-charcoal)] transition-colors group-hover:text-[var(--color-teal)] sm:text-[1.05rem] sm:leading-7">
              {poster.title}
            </h3>
            <div className="mt-5 border-t border-[rgba(56,56,55,0.08)] pt-4">
              <p className="text-[11px] font-semibold uppercase tracking-[0.12em] text-[var(--color-muted)]/80">
                {ui.authors}
              </p>
              <p className="mt-1 text-sm leading-6 text-[var(--color-charcoal)]">{poster.authors}</p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--color-teal)]">
              {ui.viewPoster}
              <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                →
              </span>
            </span>
          </Link>
        ))}
      </div>

      {filteredPosters.length === 0 ? (
        <p className="mt-6 text-sm text-[var(--color-muted)]">
          {searchQuery.trim() ? ui.noSearchResults : ui.noCategoryPosters}
        </p>
      ) : null}
    </div>
  );
}
