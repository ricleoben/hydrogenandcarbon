import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionIntro } from "@/components/sections";
import { getCommonUi } from "@/data/translations/common";
import { getPublicationUi } from "@/data/translations/publications";
import { getPublicationPosterById } from "@/data/h2c-publications";
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
        </div>
      </section>
    </>
  );
}
