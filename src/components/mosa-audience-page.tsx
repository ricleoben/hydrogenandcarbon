"use client";

import Link from "next/link";
import { ContentImage } from "@/components/content-image";
import {
  HeroPageSection,
  HeroPill,
  HeroSliderBackground,
  HeroTextPanel,
  heroHomeDescriptionClassName,
  heroHomeTitleClassName,
} from "@/components/hero-text-panel";
import { MosaThematicAreasDiagram } from "@/components/mosa-thematic-areas-diagram";
import type { MosaAudienceTranslations } from "@/data/translations/mosa-audience";

const CONTACT_EMAIL = "ric-leoben@unileoben.ac.at";

type MosaAudiencePageProps = {
  t: MosaAudienceTranslations;
  heroImage?: string;
  heroImages?: string[];
  benefitsImage?: string;
  benefitsImageAlt?: string;
};

export function MosaAudiencePage({
  t,
  heroImage,
  heroImages,
  benefitsImage,
  benefitsImageAlt = "",
}: MosaAudiencePageProps) {
  const mailtoHref = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(t.cta.emailSubject)}`;
  const programmes = t.programmes;

  return (
    <>
      <HeroPageSection
        background={
          heroImages && heroImages.length > 0 ? (
            <HeroSliderBackground images={heroImages} />
          ) : (
            <div className="relative h-full min-h-full">
              <ContentImage
                src={heroImage ?? ""}
                alt=""
                aria-hidden
                fill
                className="object-cover object-center"
                data-no-watermark
              />
              <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(7,46,51,0.15)_0%,rgba(7,46,51,0.55)_42%,rgba(7,46,51,0.92)_100%)] sm:hidden" />
              <div className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-2/3 bg-[linear-gradient(to_top,rgba(7,46,51,0.90)_0%,rgba(7,46,51,0.62)_45%,rgba(7,46,51,0.18)_80%,transparent_100%)] sm:block" />
            </div>
          )
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

          <article className="overflow-hidden rounded-[1.75rem] bg-[linear-gradient(160deg,#0a4f58_0%,#0d7882_100%)] text-white editorial-shadow">
            <div
              className={
                benefitsImage
                  ? "grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-stretch"
                  : undefined
              }
            >
              {benefitsImage ? (
                <div className="relative min-h-[260px] sm:min-h-[320px] lg:min-h-[520px]">
                  <ContentImage
                    src={benefitsImage}
                    alt={benefitsImageAlt}
                    fill
                    className="object-cover object-[42%_center]"
                    sizes="(max-width: 1024px) 100vw, 46vw"
                    data-no-watermark
                  />
                  <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,79,88,0.35)_0%,transparent_45%)] lg:bg-[linear-gradient(to_right,rgba(10,79,88,0.45)_0%,transparent_58%)]" />
                </div>
              ) : null}
              <div className="p-7 sm:p-8">
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
              </div>
            </div>
          </article>

          {programmes ? (
            <article className="overflow-hidden rounded-[1.75rem] border border-[rgba(210,219,92,0.35)] bg-[linear-gradient(165deg,#f7f8ee_0%,#eef6f3_55%,#f4f7f2_100%)] p-7 editorial-shadow sm:p-8">
              <div className="max-w-3xl">
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#5a6b2c]">
                  {programmes.eyebrow}
                </p>
                <h2 className="mt-3 text-2xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-3xl">
                  {programmes.title}
                </h2>
              </div>
              <div className="mt-6 grid gap-5 lg:grid-cols-2">
                {programmes.items.map((item, index) => (
                  <article
                    key={item.title}
                    className="relative overflow-hidden rounded-[1.25rem] border border-[rgba(56,56,55,0.08)] bg-white p-5 shadow-[0_18px_40px_rgba(10,79,88,0.08)] sm:p-6"
                  >
                    <div
                      className="pointer-events-none absolute inset-y-0 left-0 w-1.5 bg-[linear-gradient(180deg,#d2db5c_0%,#4eb1d0_55%,#00727d_100%)]"
                      aria-hidden
                    />
                    <div className="pl-3">
                      <div className="flex items-start gap-3">
                        <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#d2db5c] text-sm font-bold text-[#3f4d1f]">
                          {index + 1}
                        </span>
                        <div>
                          <h3 className="text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                            {item.title.replace(/^\d+\.\s*/, "")}
                          </h3>
                          <p className="mt-1 text-sm font-semibold text-[var(--color-teal)]">{item.subtitle}</p>
                        </div>
                      </div>
                      <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">{item.description}</p>
                      <div className="mt-5 rounded-[0.9rem] bg-[var(--color-surface-soft)] p-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
                          {item.contentTitle}
                        </p>
                        <ul className="mt-3 space-y-2 text-sm leading-6 text-[var(--color-muted)]">
                          {item.contentItems.map((contentItem) => (
                            <li key={contentItem} className="flex items-start gap-2.5">
                              <span className="mt-[0.45rem] h-1.5 w-1.5 shrink-0 rounded-full bg-[#d2db5c]" />
                              {contentItem}
                            </li>
                          ))}
                        </ul>
                      </div>
                      {item.flowTitle && item.flowText ? (
                        <div className="mt-4 rounded-[0.9rem] border border-[rgba(0,114,125,0.12)] bg-[rgba(185,218,208,0.22)] p-4">
                          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">
                            {item.flowTitle}
                          </p>
                          <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{item.flowText}</p>
                        </div>
                      ) : null}
                      <div className="mt-5 flex flex-wrap gap-2">
                        <span className="rounded-full bg-[rgba(0,114,125,0.1)] px-3 py-1.5 text-xs font-medium text-[var(--color-teal)]">
                          {programmes.durationLabel}: {item.duration}
                        </span>
                        <span className="rounded-full bg-[rgba(210,219,92,0.28)] px-3 py-1.5 text-xs font-medium text-[#4f5d22]">
                          {programmes.targetGroupsLabel}: {item.targetGroups}
                        </span>
                        <span className="rounded-full bg-[rgba(78,177,208,0.16)] px-3 py-1.5 text-xs font-medium text-[#1f6678]">
                          {programmes.idealForLabel}: {item.idealFor}
                        </span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </article>
          ) : null}

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
