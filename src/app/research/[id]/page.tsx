import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionIntro } from "@/components/sections";
import { getCommonUi } from "@/data/translations/common";
import { getResearchUi } from "@/data/translations/research";
import { supervisorAffiliations, supervisorDisplayNames } from "@/data/h2c-chairs";
import { getRelatedPublicationId, getResearchItemById } from "@/data/h2c-research";
import { getPublicationThesisById } from "@/data/h2c-theses";
import { getLocale } from "@/lib/server-i18n";

type ResearchDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ResearchDetailPage({ params }: ResearchDetailPageProps) {
  const { id } = await params;
  const item = getResearchItemById(id);
  const locale = await getLocale();
  const ui = getCommonUi(locale);
  const researchLabels = getResearchUi(locale);

  if (!item) {
    notFound();
  }

  const relatedPublicationId = getRelatedPublicationId(id);
  const thesis = relatedPublicationId ? getPublicationThesisById(relatedPublicationId) : undefined;

  return (
    <>
      <section className="px-4 pt-20 pb-10 sm:px-10 sm:pt-24 sm:pb-14 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/research"
            className="text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
          >
            {ui.backToResearch}
          </Link>
          <SectionIntro eyebrow={researchLabels.detailEyebrow} title={item.title} description={item.summary} />
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-10 sm:pb-16 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-5">
          <article className="rounded-[1.25rem] border border-[rgba(56,56,55,0.12)] bg-[var(--color-surface)] p-6 editorial-shadow">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--color-teal)]">{ui.generalInfo}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              <p className="text-sm leading-6 text-[var(--color-muted)]">
                <strong>{ui.candidate}</strong> {item.candidate}
              </p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">
                <strong>{ui.chair}</strong> {item.chair}
              </p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">
                <strong>{ui.start}</strong> {item.start}
              </p>
              <p className="text-sm leading-6 text-[var(--color-muted)]">
                <strong>{ui.end}</strong> {item.end}
              </p>
            </div>
            <p className="mt-4 text-sm leading-6 text-[var(--color-muted)]">
              <strong>{ui.candidateProfile}</strong> {item.candidateInfo}
            </p>
          </article>

          <article className="rounded-[1.25rem] border border-[rgba(56,56,55,0.12)] bg-[var(--color-surface)] p-6 editorial-shadow">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--color-teal)]">{ui.supervisors}</h2>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {item.supervisors.map((supervisor) => (
                <div key={supervisor} className="rounded-[0.9rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-4">
                  <p className="text-sm font-semibold text-[var(--color-charcoal)]">
                    {supervisorDisplayNames[supervisor] ?? supervisor}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-[var(--color-muted)]">
                    {supervisorAffiliations[supervisor] ?? ui.affiliationPending}
                  </p>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[1.25rem] border border-[rgba(56,56,55,0.12)] bg-[var(--color-surface)] p-6 editorial-shadow">
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[var(--color-teal)]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-mint)]/60 text-sm">🎯</span>
              {ui.targets}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
              {item.targets.map((target) => (
                <li key={target}>{target}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.25rem] border border-[rgba(56,56,55,0.12)] bg-[var(--color-surface)] p-6 editorial-shadow">
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[var(--color-teal)]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-mint)]/60 text-sm">🏁</span>
              {ui.milestones}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
              {item.milestones.map((milestone) => (
                <li key={milestone}>{milestone}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.25rem] border border-[rgba(56,56,55,0.12)] bg-[var(--color-surface)] p-6 editorial-shadow">
            <h2 className="flex items-center gap-2 text-xl font-semibold tracking-tight text-[var(--color-teal)]">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-mint)]/60 text-sm">🧩</span>
              {ui.workPackages}
            </h2>
            <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-6 text-[var(--color-muted)]">
              {item.workpackages.map((workpackage) => (
                <li key={workpackage}>{workpackage}</li>
              ))}
            </ul>
          </article>

          <article className="rounded-[1.25rem] border border-[rgba(56,56,55,0.12)] bg-[var(--color-surface)] p-6 editorial-shadow">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--color-teal)]">{ui.context}</h2>
            <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-6 text-[var(--color-muted)]">
              {item.context.map((entry) => (
                <li key={entry}>{entry}</li>
              ))}
            </ul>
          </article>

          {(relatedPublicationId || thesis) && (
            <article className="rounded-[1.25rem] border border-[rgba(56,56,55,0.12)] bg-[var(--color-surface)] p-6 editorial-shadow">
              {relatedPublicationId && (
                <div className={thesis ? "pb-5" : undefined}>
                  <h2 className="text-xl font-semibold tracking-tight text-[var(--color-teal)]">{ui.relatedPublication}</h2>
                  <Link
                    href={`/publications/${relatedPublicationId}`}
                    className="mt-3 inline-flex text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
                  >
                    {ui.viewPoster}
                  </Link>
                </div>
              )}

              {thesis && (
                <div className={relatedPublicationId ? "border-t border-[rgba(56,56,55,0.12)] pt-5" : undefined}>
                  <h2 className="text-xl font-semibold tracking-tight text-[var(--color-teal)]">{ui.relatedThesis}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">{thesis.title}</p>
                  <a
                    href={thesis.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
                  >
                    {ui.viewOnPure}
                  </a>
                </div>
              )}
            </article>
          )}
        </div>
      </section>
    </>
  );
}
