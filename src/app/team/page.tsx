import type { Metadata } from "next";
import { ChairDirectory } from "@/components/chair-directory";
import { ContentImage } from "@/components/content-image";
import {
  HeroTextPanel,
  heroDesktopGradientClassName,
  heroMobileScrimClassName,
  heroTitleClassName,
} from "@/components/hero-text-panel";
import { getCommonUi } from "@/data/translations/common";
import { getH2CChairGroups } from "@/data/h2c-chairs";
import { getRouteMeta } from "@/data/translations/meta";
import { getTeamClusterManagers, getTeamMentors, getTeamUi, type TeamMemberCard } from "@/data/translations/team";
import { buildPageMetadata } from "@/lib/metadata";
import { getLocale } from "@/lib/server-i18n";

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const routeMeta = getRouteMeta(locale, "team");
  return buildPageMetadata({ locale, path: "/team", ...routeMeta });
}

function TeamMemberCardView({
  member,
  phoneLabel,
  emailLabel,
}: {
  member: TeamMemberCard;
  phoneLabel: string;
  emailLabel: string;
}) {
  return (
    <article className="overflow-hidden rounded-[1.1rem] border border-[rgba(56,56,55,0.1)] bg-[var(--color-surface-soft)]">
      <div className="p-4 sm:p-5">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
          {/* Portrait ratio at every width: a full-width, short crop on phones cut off faces. */}
          <ContentImage
            src={member.image}
            alt={member.name}
            width={320}
            height={427}
            className="aspect-[3/4] w-48 shrink-0 rounded-[0.85rem] border border-[rgba(56,56,55,0.12)] object-cover object-top sm:w-40"
            sizes="(min-width: 640px) 160px, 192px"
            data-no-watermark
          />
          <div className="min-w-0 flex-1">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[var(--color-teal)]">{member.label}</p>
            <h3 className="mt-1 text-xl font-semibold tracking-tight text-[var(--color-charcoal)]">{member.name}</h3>
            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
              {member.position ? (
                <>
                  {member.position}
                  <br />
                </>
              ) : null}
              {member.details.map((line) => (
                <span key={line}>
                  {line}
                  <br />
                </span>
              ))}
            </p>
            <div className="mt-3 border-t border-[rgba(56,56,55,0.12)] pt-3 text-sm leading-6 text-[var(--color-charcoal)]">
              <p>
                {phoneLabel} {member.phone}
              </p>
              <p className="break-all">
                {emailLabel} {member.email}
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function HydrogenAndCarbonTeamPage() {
  const locale = await getLocale();
  const t = getTeamUi(locale);
  const clusterManagers = getTeamClusterManagers(locale);
  const mentors = getTeamMentors(locale);
  const chairGroups = getH2CChairGroups(locale);
  const ui = getCommonUi(locale);

  return (
    <>
      <section className="relative min-h-[320px] overflow-hidden sm:min-h-[400px] lg:min-h-[520px]" data-no-watermark>
        <div className="absolute inset-0" data-no-watermark>
          <ContentImage
            src="/research-centre-hero.jpg"
            alt=""
            aria-hidden
            fill
            priority
            fetchPriority="high"
            quality={60}
            className="object-cover object-[center_35%] sm:object-[78%_center]"
            data-no-watermark
          />
          <div className={heroMobileScrimClassName()} />
          <div className={heroDesktopGradientClassName()} />
          <div className="pointer-events-none absolute inset-0 hidden bg-[radial-gradient(circle_at_top_left,_rgba(185,218,208,0.12),_transparent_42%),radial-gradient(circle_at_bottom_right,_rgba(0,114,125,0.58),_transparent_42%)] sm:block" />
        </div>

        <div className="relative mx-auto flex w-full min-h-[300px] max-w-7xl flex-col justify-end px-4 pb-6 sm:min-h-[380px] sm:px-10 sm:pb-8 lg:min-h-[480px] lg:px-16 lg:pb-10">
          <HeroTextPanel className="w-full pb-2 text-white">
            <h1
              className={`${heroTitleClassName()} max-w-none text-balance [text-shadow:0_1px_3px_rgba(0,0,0,0.65),0_4px_28px_rgba(7,46,51,0.5)]`}
            >
              {t.title}
            </h1>
          </HeroTextPanel>
        </div>
      </section>

      <section className="px-4 pb-12 pt-8 sm:px-10 sm:pb-16 lg:px-16">
        <div className="mx-auto max-w-7xl space-y-8">
          {[
            { title: t.clusterManagers, members: clusterManagers },
            { title: t.mentors, members: mentors },
          ].map((group) => (
            <article key={group.title} className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">{group.title}</p>
              <div className="mx-auto mt-5 grid max-w-6xl gap-5 lg:grid-cols-2">
                {group.members.map((member) => (
                  <TeamMemberCardView key={member.email} member={member} phoneLabel={ui.phone} emailLabel={ui.email} />
                ))}
              </div>
            </article>
          ))}

          <article className="rounded-[1.75rem] bg-[var(--color-surface)] p-7 editorial-shadow sm:p-8">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--color-teal)]">{t.chairs}</p>
            <ChairDirectory
              groups={chairGroups}
              contactPersonLabel={t.contactPerson}
              emailLabel={ui.email}
            />
          </article>
        </div>
      </section>
    </>
  );
}
