import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionIntro } from "@/components/sections";
import { getCommonUi } from "@/data/translations/common";
import { getPublicationUi } from "@/data/translations/publications";
import { getPublicationPosterById } from "@/data/h2c-publications";
import { getRelatedResearchId } from "@/data/h2c-research";
import { getPublicationThesisById } from "@/data/h2c-theses";
import { getLocale } from "@/lib/server-i18n";

type PosterDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PosterDetailPage({ params }: PosterDetailPageProps) {
  const { id } = await params;
  const poster = getPublicationPosterById(id);
  const locale = await getLocale();
  const ui = getCommonUi(locale);
  const pubUi = getPublicationUi(locale);

  if (!poster) {
    notFound();
  }

  const encodedPdfPath = encodeURI(poster.pdfPath);
  const posterViewUrl = encodedPdfPath;
  const downloadFileName = poster.pdfPath.split("/").pop() ?? "poster.pdf";
  const thesis = getPublicationThesisById(id);
  const relatedResearchId = getRelatedResearchId(id);

  return (
    <>
      <section className="px-4 pt-20 pb-10 sm:px-10 sm:pt-24 sm:pb-14 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <Link
            href="/publications"
            className="text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
          >
            {ui.backToPublications}
          </Link>
          <SectionIntro eyebrow={ui.posterDetail} title={poster.title} description={poster.authors} />
        </div>
      </section>

      <section className="px-4 pb-12 sm:px-10 sm:pb-16 lg:px-16">
        <div className="mx-auto max-w-7xl rounded-[1.75rem] bg-[var(--color-surface)] p-6 editorial-shadow sm:p-8">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm leading-6 text-[var(--color-muted)]">
              <strong>{ui.category}</strong> {pubUi.categoryShort[poster.category]}
            </p>
            <a
              href={encodedPdfPath}
              download={downloadFileName}
              className="rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
            >
              {ui.downloadPoster}
            </a>
          </div>

          <div className="mt-5 overflow-hidden rounded-[1rem] border border-[rgba(56,56,55,0.12)]">
            <iframe
              src={posterViewUrl}
              title={`${poster.title} poster`}
              className="h-[78vh] min-h-[620px] w-full"
            />
          </div>

          {(thesis || relatedResearchId) && (
            <div className="mt-6 space-y-4 border-t border-[rgba(56,56,55,0.12)] pt-6">
              {thesis && (
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-[var(--color-teal)]">{ui.relatedThesis}</h2>
                  <p className="mt-2 text-sm leading-6 text-[var(--color-muted)]">
                    {thesis.author ? (
                      <>
                        <strong>{thesis.author}:</strong> {thesis.title}
                      </>
                    ) : (
                      thesis.title
                    )}
                  </p>
                  <a
                    href={thesis.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-3 inline-flex rounded-full bg-[var(--color-teal)] px-4 py-2 text-sm font-semibold text-white transition-opacity hover:opacity-90"
                  >
                    {ui.viewOnPure}
                  </a>
                </div>
              )}

              {relatedResearchId && (
                <div>
                  <h2 className="text-lg font-semibold tracking-tight text-[var(--color-teal)]">
                    {ui.relatedResearchProject}
                  </h2>
                  <Link
                    href={`/research/${relatedResearchId}`}
                    className="mt-2 inline-flex text-sm font-semibold text-[var(--color-teal)] underline-offset-2 hover:underline"
                  >
                    {ui.learnMore}
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
