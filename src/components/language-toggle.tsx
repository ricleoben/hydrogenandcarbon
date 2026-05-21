"use client";

import { useRouter } from "next/navigation";
import { LOCALE_COOKIE_NAME, type Locale } from "@/lib/i18n";
import { useLanguage } from "@/components/language-provider";

export function LanguageToggle() {
  const router = useRouter();
  const { locale, setLocale } = useLanguage();

  const updateLocale = (nextLocale: Locale) => {
    if (nextLocale === locale) {
      return;
    }

    document.cookie = `${LOCALE_COOKIE_NAME}=${nextLocale}; path=/; max-age=31536000; samesite=lax`;
    setLocale(nextLocale);
    router.refresh();
  };

  return (
    <div className="flex shrink-0 items-center gap-1 sm:gap-2">
      <button
        type="button"
        onClick={() => updateLocale("en")}
        aria-pressed={locale === "en"}
        className={
          locale === "en"
            ? "rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-[var(--color-charcoal)] shadow-[0_1px_4px_rgba(25,28,29,0.08)] sm:px-3.5 sm:py-2 sm:text-[13px]"
            : "rounded-full px-2 py-1 text-[11px] font-medium text-[var(--color-charcoal)]/55 sm:px-3 sm:py-2 sm:text-[13px]"
        }
      >
        EN
      </button>
      <button
        type="button"
        onClick={() => updateLocale("de")}
        aria-pressed={locale === "de"}
        className={
          locale === "de"
            ? "rounded-full bg-white px-2.5 py-1 text-[11px] font-semibold text-[var(--color-charcoal)] shadow-[0_1px_4px_rgba(25,28,29,0.08)] sm:px-3.5 sm:py-2 sm:text-[13px]"
            : "rounded-full px-2 py-1 text-[11px] font-medium text-[var(--color-charcoal)]/55 sm:px-3 sm:py-2 sm:text-[13px]"
        }
      >
        DE
      </button>
    </div>
  );
}
