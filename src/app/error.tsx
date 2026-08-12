"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useLanguage } from "@/components/language-provider";
import { getCommonUi } from "@/data/translations/common";

export default function AppError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const { locale } = useLanguage();
  const ui = getCommonUi(locale);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="px-4 pt-24 pb-20 sm:px-10 sm:pt-28 lg:px-16">
      <div className="mx-auto max-w-3xl rounded-[1.75rem] bg-[var(--color-surface)] p-8 editorial-shadow sm:p-12">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[var(--color-teal)]">{ui.errorEyebrow}</p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight text-[var(--color-charcoal)] sm:text-4xl">
          {ui.errorTitle}
        </h1>
        <p className="mt-5 text-base leading-7 text-[var(--color-muted)]">{ui.errorDescription}</p>
        {error.digest ? (
          <p className="mt-3 text-xs text-[var(--color-muted)]/70">Reference: {error.digest}</p>
        ) : null}
        <div className="mt-8 flex flex-wrap gap-3">
          <button
            type="button"
            onClick={reset}
            className="rounded-full bg-[var(--color-teal)] px-5 py-3 text-sm font-semibold text-white transition-opacity hover:opacity-90"
          >
            {ui.tryAgain}
          </button>
          <Link
            href="/"
            className="rounded-full border border-[var(--color-teal)]/35 px-5 py-3 text-sm font-semibold text-[var(--color-teal)] transition-colors hover:bg-[var(--color-mint)]/40"
          >
            {ui.backToHome}
          </Link>
        </div>
      </div>
    </section>
  );
}
