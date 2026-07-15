"use client";

import Link from "next/link";
import { ContentImage } from "@/components/content-image";
import {
  HeroPageSection,
  HeroPill,
  HeroTextPanel,
  heroHomeDescriptionClassName,
  heroHomeTitleClassName,
} from "@/components/hero-text-panel";
import { MosaThematicAreasDiagram } from "@/components/mosa-thematic-areas-diagram";
import type { MosaAudienceTranslations } from "@/data/translations/mosa-audience";

const CONTACT_EMAIL = "ric-leoben@unileoben.ac.at";

type MosaAudiencePageProps = {
  t: MosaAudienceTranslations;
  heroImage: string;
};

export function MosaAudiencePage({ t, heroImage }: MosaAudiencePageProps) {
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.cta.emailSubject)}`;

  return (
    <>
      <HeroPageSection
        background={
          <div className="relative h-full min-h-full">
            <ContentImage
              src={heroImage}
              alt=""
              aria-hidden
              fill
              className="object-cover object-center"
              data-no-watermark
            />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,46,51,0.15)_0%,rgba(7,46,51,0.55)_42%,rgba(7,46,51,0.92)_100%)] sm:hidden" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/3 bg-[linear-gradient(to_top,rgba(7,46,51,0.90)_0%,rgba(7,46,51,0.62)_45%,rgba(7,46,51,0.18)_80%,transparent_100%)] sm:block" />
          </div>
        }
      >
        <div className="max-w-3xl pb-4 text-white">
          <Link
            href="/mosa"
            className="mb-5 inline-flex items-center gap-1.5 text-sm font-medium text-white/80 transition hover:text-white sm:mb-8"
          >
            <span aria-hidden>←</span>
            {t.meta.backToMosa}
          </Link>
          <HeroTextPanel>
            <HeroPill>{t.hero.pill}</HeroPill>
            <h1 className={heroHomeTitleClassName()}>{t.hero.title}</h1>
            <p className={heroHomeDescriptionClassName()}>{t.hero.description}</p>
          </HeroTextPanel>
        </div>
      </HeroPageSection>

      <section className="px-4 pt-10 pb-12 sm:px-10 sm:pt-14 sm:pb-16 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl">
              {t.intro.title}
            </h2>
            {t.intro.paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`${index === 0 ? "mt-5" : "mt-4"} text-base leading-7 text-[var(--color-muted)]`}
              >
                {paragraph}
              </p>
            ))}
          </article>

          <MosaThematicAreasDiagram />

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {t.steps.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl">
              {t.steps.title}
            </h2>
            <ol className="mt-8 grid gap-5 md:grid-cols-3">
              {t.steps.items.map((item, index) => (
                <li
                  key={item.title}
                  className="relative rounded-[1.25rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-5"
                >
                  {index < t.steps.items.length - 1 ? (
                    <span
                      className="pointer-events-none absolute top-1/2 -right-3 hidden h-px w-6 bg-[var(--color-teal)]/30 md:block"
                      aria-hidden
                    />
                  ) : null}
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[var(--color-teal)] text-sm font-bold text-white">
                    {index + 1}
                  </span>
                  <p className="mt-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
                    {item.step}
                  </p>
                  <h3 className="mt-1 text-lg font-semibold tracking-tight text-[var(--color-charcoal)]">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="rounded-[1.75rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] p-7 text-white editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">{t.benefits.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{t.benefits.title}</h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {t.benefits.items.map((item) => (
                <div
                  key={item.title}
                  className="rounded-[1rem] border border-white/15 bg-white/10 p-4 backdrop-blur-[2px]"
                >
                  <h3 className="text-base font-semibold tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/80">{item.text}</p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">
              {t.eligibility.eyebrow}
            </p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl">
              {t.eligibility.title}
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2">
              <div className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-5">
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">{t.eligibility.forTitle}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--color-muted)]">
                  {t.eligibility.forItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-teal)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-[1rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-5">
                <h3 className="text-lg font-semibold text-[var(--color-charcoal)]">{t.eligibility.noteTitle}</h3>
                <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--color-muted)]">
                  {t.eligibility.noteItems.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-mint)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">{t.faq.eyebrow}</p>
            <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl">
              {t.faq.title}
            </h2>
            <div className="mt-6 space-y-3">
              {t.faq.items.map((item) => (
                <details
                  key={item.question}
                  className="group rounded-[1rem] border border-[rgba(56,56,55,0.1)] bg-[var(--color-surface-soft)] px-5 py-1 open:bg-white"
                >
                  <summary className="cursor-pointer list-none py-4 text-base font-semibold text-[var(--color-charcoal)] marker:content-none [&::-webkit-details-marker]:hidden">
                    <span className="flex items-center justify-between gap-4">
                      {item.question}
                      <span className="text-[var(--color-teal)] transition group-open:rotate-45" aria-hidden>
                        +
                      </span>
                    </span>
                  </summary>
                  <p className="pb-4 text-sm leading-6 text-[var(--color-muted)]">{item.answer}</p>
                </details>
              ))}
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface-soft)] p-7 text-center editorial-shadow sm:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl">
              {t.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">{t.cta.description}</p>
            <a
              href={mailtoHref}
              className="mt-6 inline-flex items-center justify-center rounded-full bg-[var(--color-teal)] px-6 py-3 text-sm font-semibold text-white transition hover:opacity-90"
            >
              {t.cta.button}
            </a>
            <p className="mt-3 text-sm text-[var(--color-muted)]">{CONTACT_EMAIL}</p>
            <p className="mt-1 text-xs text-[var(--color-muted)]/80">{t.cta.responseNote}</p>
          </article>
        </div>
      </section>
    </>
  );
}
