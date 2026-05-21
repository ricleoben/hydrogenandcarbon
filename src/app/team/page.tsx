import { ContentImage } from "@/components/content-image";
import {
  HeroTextPanel,
  heroDesktopGradientClassName,
  heroMobileScrimClassName,
  heroTitleClassName,
} from "@/components/hero-text-panel";
import { getCommonUi } from "@/data/translations/common";
import { getTeamUi } from "@/data/translations/team";
import { getLocale } from "@/lib/server-i18n";

export default async function HydrogenAndCarbonTeamPage() {
  const locale = await getLocale();
  const t = getTeamUi(locale);
  const ui = getCommonUi(locale);

  return (
    <>
      <section className="relative min-h-[280px] overflow-hidden sm:min-h-[360px] lg:min-h-[480px]" data-no-watermark>
        <div className="absolute inset-0 min-h-[300px] sm:min-h-[380px] lg:min-h-[520px]">
          <ContentImage
            src="/Forschungszentrum-Wasserstoff-und-Kohlenstoff.gif"
            alt=""
            aria-hidden
            fill
            className="object-cover object-[center_35%] sm:object-[78%_center]"
            data-no-watermark
          />
          <div className={heroMobileScrimClassName()} />
          <div className={heroDesktopGradientClassName()} />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 pb-8 pt-6 sm:px-10 sm:pb-10 lg:px-16">
          <HeroTextPanel className="max-w-3xl">
            <h1 className={heroTitleClassName()}>{t.title}</h1>
          </HeroTextPanel>
        </div>
      </section>

      <section className="px-4 pb-12 pt-8 sm:px-10 sm:pb-16 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">{t.clusterManagers}</p>
            <div className="mx-auto mt-5 grid max-w-6xl gap-5 lg:grid-cols-2">
              <article className="overflow-hidden rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-[var(--color-surface-soft)]">
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <ContentImage
                      src="/Robert_Obenaus_Emler.jpg"
                      alt="Robert Obenaus-Emler"
                      width={320}
                      height={448}
                      className="h-52 w-full shrink-0 rounded-[0.85rem] border border-[rgba(56,56,55,0.12)] object-cover object-top sm:h-56 sm:w-40"
                      sizes="160px"
                      data-no-watermark
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-teal)]">
                        {t.focusCarbon}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                        Robert Obenaus-Emler
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        Resources Innovation Center
                        <br />
                        Montanuniversitaet Leoben
                        <br />
                        Franz Josef-Strasse 18
                        <br />
                        8700 Leoben
                      </p>
                      <div className="mt-3 border-t border-[rgba(56,56,55,0.12)] pt-3 text-sm leading-6 text-[var(--color-charcoal)]">
                        <p>
                          {ui.phone} 03842-402-7613
                        </p>
                        <p>
                          {ui.email} robert.emler@unileoben.ac.at
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="overflow-hidden rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-[var(--color-surface-soft)]">
                <div className="p-4 sm:p-5">
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <ContentImage
                      src="/Scheiblehner-David-1-scaled.jpg"
                      alt="David Scheiblehner"
                      width={320}
                      height={448}
                      className="h-52 w-full shrink-0 rounded-[0.85rem] border border-[rgba(56,56,55,0.12)] object-cover object-top sm:h-56 sm:w-40"
                      sizes="160px"
                      data-no-watermark
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-teal)]">
                        {t.focusHydrogen}
                      </p>
                      <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">
                        David Scheiblehner
                      </h3>
                      <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                        Hydrogen Research Center
                        <br />
                        Montanuniversitaet Leoben
                        <br />
                        Dorfstrasse 1, Leitendorf
                        <br />
                        8700 Leoben
                      </p>
                      <div className="mt-3 border-t border-[rgba(56,56,55,0.12)] pt-3 text-sm leading-6 text-[var(--color-charcoal)]">
                        <p>
                          {ui.phone} 03842-402-5217
                        </p>
                        <p>
                          {ui.email} david.scheiblehner@unileoben.ac.at
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">{t.mentors}</p>
            <div className="mt-4 rounded-[1rem] border border-dashed border-[var(--color-teal)]/35 bg-[var(--color-surface-soft)] p-4">
              <p className="text-sm leading-6 text-[var(--color-muted)]">{ui.willBeAdded}</p>
            </div>
          </article>

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">{t.chairs}</p>
            <div className="mt-4 rounded-[1rem] border border-dashed border-[var(--color-teal)]/35 bg-[var(--color-surface-soft)] p-4">
              <p className="text-sm leading-6 text-[var(--color-muted)]">{ui.willBeAdded}</p>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
