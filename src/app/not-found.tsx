import type { Metadata } from "next";
import Link from "next/link";
import { getCommonUi } from "@/data/translations/common";
import { getLocale } from "@/lib/server-i18n";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: false },
};

export default async function NotFound() {
  const locale = await getLocale();
  const ui = getCommonUi(locale);

  return (
    <section className="px-4 pt-24 pb-20 sm:px-10 sm:pt-28 lg:px-16">
      <div className="mx-auto max-w-3xl rounded-[1.75rem] bg-[var(--color-surface)] p-8 editorial-shadow sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">
          {ui.notFoundEyebrow}
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
          {ui.notFoundTitle}
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">{ui.notFoundDescription}</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/"
            className="rounded-full bg-[var(--color-teal)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {ui.backToHome}
          </Link>
          <Link
            href="/research"
            className="rounded-full border border-[var(--color-teal)]/35 px-5 py-3 text-sm font-semibold text-[var(--color-teal)] transition-colors hover:bg-[var(--color-mint)]/40"
          >
            {ui.browseResearch}
          </Link>
        </div>
      </div>
    </section>
  );
}
