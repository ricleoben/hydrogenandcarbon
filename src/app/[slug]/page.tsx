import Link from "next/link";
import { notFound } from "next/navigation";
import {
  getHydrogenCarbonArticleBySlug,
  hydrogenCarbonCategories,
} from "@/data/site-content";

type HydrogenCarbonArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export default async function HydrogenCarbonArticlePage({ params }: HydrogenCarbonArticlePageProps) {
  const { slug } = await params;
  const article = getHydrogenCarbonArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const category = hydrogenCarbonCategories.find((item) => item.id === article.categoryId);

  return (
    <main className="flex-1">
      <section className="px-6 pt-24 pb-10 sm:px-10 lg:px-16">
        <div className="mx-auto max-w-5xl">
          <Link
            href=""
            className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)] underline-offset-2 hover:underline"
          >
            Back to Hydrogen and Carbon
          </Link>
          <p className="mt-8 text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
            {category?.title ?? "Hydrogen and Carbon"}
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-4xl md:text-5xl">
            {article.title}
          </h1>
          {article.authors ? <p className="mt-4 text-base text-[var(--color-muted)]">{article.authors}</p> : null}
        </div>
      </section>

      <section className="px-6 pb-16 sm:px-10 lg:px-16">
        <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-[1fr_320px]">
          <article className="rounded-[1.75rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface)] p-8 editorial-shadow">
            <h2 className="text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">Overview</h2>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">{article.detail}</p>
            <p className="mt-4 text-base leading-7 text-[var(--color-muted)]">
              This page is ready for full article text, methodology, figures, publication links, and project context.
            </p>
          </article>

          <aside className="space-y-6">
            <div className="rounded-[1.25rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">Media</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                Related media will be added with the next content update.
              </p>
              <div className="mt-4 h-40 rounded-xl border-2 border-dashed border-[var(--color-teal)]/35 bg-white/70" />
            </div>
            <div className="rounded-[1.25rem] border border-[rgba(56,56,55,0.08)] bg-[var(--color-surface-soft)] p-6">
              <h3 className="text-sm font-semibold uppercase tracking-[0.18em] text-[var(--color-teal)]">Next step</h3>
              <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                We can connect related publications, downloadable files, and author contacts here.
              </p>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
