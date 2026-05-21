import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionIntro } from "@/components/sections";
import { getCommonUi } from "@/data/translations/common";
import { getResearchUi } from "@/data/translations/research";
import { getResearchItemById } from "@/data/h2c-research";
import { getLocale } from "@/lib/server-i18n";

const supervisorAffiliations: Record<string, string> = {
  "Univ.-Prof. Markus Lehner": "Chair of Process Technology and Industrial Environmental Protection, Montanuniversitaet Leoben",
  "Univ.-Prof. Johannes Schenk": "Chair of Ferrous Metallurgy, Montanuniversitaet Leoben",
  "Univ.-Prof. Helmut Antrekowitsch": "Chair of Nonferrous Metallurgy, Montanuniversitaet Leoben",
  "Ao.Univ.-Prof. Clemens Brand": "Chair of Applied Mathematics, Montanuniversitaet Leoben",
  "Univ.-Prof. Helmut Flachberger": "Chair of Mineral Processing, Montanuniversitaet Leoben",
  "Univ.-Prof. Thomas Prohaska": "Chair of General and Analytical Chemistry, Montanuniversitaet Leoben",
  "Univ.-Prof. Christian Mitterer": "Chair of Functional Materials and Materials Systems, Montanuniversitaet Leoben",
  "Univ.-Prof. Oskar Paris": "Institute of Physics, Montanuniversitaet Leoben",
  "Bruno Deme": "Institut Laue-Langevin, Grenoble",
  "Priv.-Doz. David Holec": "Chair of Physical Metallurgy and Metallic Materials, Montanuniversitaet Leoben",
  "Assoc. Prof. Peter Puschnig": "University of Graz",
  "Univ.-Prof. Wolfgang Kern": "Chair of Chemistry of Polymeric Materials, Montanuniversitaet Leoben",
  "Priv.-Doz. Markus Puschenreiter": "University of Natural Resources and Life Sciences, Tulln",
  "Ao.Univ.-Prof. Gregor Mori": "Chair of General and Analytical Chemistry, Montanuniversitaet Leoben",
  "Univ.-Prof. Ronald Schnitzer": "Chair of Design of Steels, Montanuniversitaet Leoben",
  "Ass.Prof. Gisbert Riess": "Chair of Chemistry of Polymeric Materials, Montanuniversitaet Leoben",
  "Univ.-Prof. Gregor Trimmel": "Graz University of Technology",
  "Assoc. Prof. Thomas Lucyshyn": "Chair of Polymer Processing, Montanuniversitaet Leoben",
  "Assoc. Prof. Daniel Kiener": "Chair of Materials Physics, Montanuniversitaet Leoben",
  "Univ.-Prof. Juergen Eckert": "Chair of Materials Physics, Montanuniversitaet Leoben",
  "Mag. Florian Spieckermann": "Chair of Materials Physics, Montanuniversitaet Leoben",
  "Univ.-Prof. Krishna Ravi": "Chair of Drilling and Completion Engineering, Montanuniversitaet Leoben",
  "Univ.-Prof. Johann Raith": "Chair of Resource Mineralogy, Montanuniversitaet Leoben",
  "Priv.-Doz. David Misch": "Chair of Petroleum Geology, Montanuniversitaet Leoben",
  "Univ.-Prof. Reinhard Sachsenhofer": "Chair of Petroleum Geology, Montanuniversitaet Leoben",
  "Ao.Univ.Prof. Andreas Loibner": "University of Natural Resources and Life Sciences, Vienna",
  "Univ.-Prof. Holger Ott": "Chair of Reservoir Engineering, Montanuniversitaet Leoben",
  "Priv.-Doz. Roland Brunner": "Materials Center Leoben",
  "Assoc. Prof. Edith Bucher": "Chair of Physical Chemistry, Montanuniversitaet Leoben",
  "Dr. Christoph Gammer": "Austrian Academy of Sciences",
  "Univ.-Prof. Werner Sitte": "Chair of Physical Chemistry, Montanuniversitaet Leoben",
  "Univ.-Prof. Thomas Kienberger": "Chair of Energy Network Technology, Montanuniversitaet Leoben",
};

const supervisorDisplayNames: Record<string, string> = {
  "Univ.-Prof. Markus Lehner": "Univ.-Prof. Dipl.-Ing. Dr.-Ing. Markus Lehner",
  "Univ.-Prof. Johannes Schenk": "Univ.-Prof. Dipl.-Ing. Dr. techn. Johannes Schenk",
  "Univ.-Prof. Helmut Antrekowitsch": "Univ.-Prof. Dipl.-Ing. Dr.mont. Helmut Antrekowitsch",
  "Ao.Univ.-Prof. Clemens Brand": "Ao.Univ.-Prof. Mag. et Dr.rer.nat. Clemens Brand",
  "Univ.-Prof. Helmut Flachberger": "Univ.-Prof. Dipl.-Ing. Dr.mont. Helmut Flachberger",
  "Univ.-Prof. Thomas Prohaska": "Univ.-Prof. Dipl.-Ing. Dr. techn. Thomas Prohaska",
  "Univ.-Prof. Christian Mitterer": "Univ.-Prof. Dipl.-Ing. Dr.mont. Christian Mitterer",
  "Univ.-Prof. Oskar Paris": "Univ.-Prof. Mag. et Dr.rer.nat. Oskar Paris",
  "Priv.-Doz. David Holec": "Priv.-Doz. Mgr. David Holec, PhD",
  "Assoc. Prof. Peter Puschnig": "Assoc. Prof. Dipl.-Ing. Dr. Peter Puschnig",
  "Univ.-Prof. Wolfgang Kern": "Univ.-Prof. Mag.rer.nat. Dr.techn. Wolfgang Kern",
  "Priv.-Doz. Markus Puschenreiter": "Priv.-Doz. Dr. Markus Puschenreiter",
  "Ao.Univ.-Prof. Gregor Mori": "Ao.Univ.-Prof. Dipl.-Ing. Dr.mont. Gregor Mori",
  "Univ.-Prof. Ronald Schnitzer": "Univ.-Prof. Dipl.-Ing. Dr.mont. Ronald Schnitzer",
  "Ass.Prof. Gisbert Riess": "Ass.Prof. Dipl.-Chem. Dr.rer.nat. Gisbert Riess",
  "Univ.-Prof. Gregor Trimmel": "Univ.-Prof. Dipl.-Ing. Dr.techn. Gregor Trimmel",
  "Assoc. Prof. Thomas Lucyshyn": "Assoc. Prof. Dipl.-Ing. Dr.mont. Thomas Lucyshyn",
  "Assoc. Prof. Daniel Kiener": "Assoc. Prof. Dipl.-Ing. Dr.mont. Daniel Kiener",
  "Univ.-Prof. Juergen Eckert": "Univ.-Prof. Dipl.-Ing. Dr.h.c. Dr.-Ing.habil. Juergen Eckert",
  "Mag. Florian Spieckermann": "Mag. et Dr.rer.nat. Florian Spieckermann",
  "Univ.-Prof. Krishna Ravi": "Univ.-Prof. MBA PhD Krishna Ravi",
  "Univ.-Prof. Johann Raith": "Univ.-Prof. Dr.phil. Johann Raith",
  "Priv.-Doz. David Misch": "Priv.-Doz. Dipl.-Ing. Dr.mont. David Misch",
  "Univ.-Prof. Reinhard Sachsenhofer": "Univ.-Prof. Mag.rer.nat. Dr.mont. Reinhard Sachsenhofer",
  "Ao.Univ.Prof. Andreas Loibner": "Ao.Univ.Prof. Dipl.-Ing. Dr.nat.techn. Andreas Loibner",
  "Univ.-Prof. Holger Ott": "Univ.-Prof. Dipl.-Phys. Dr.rer.nat. Holger Ott",
  "Priv.-Doz. Roland Brunner": "Priv.-Doz. Dr. Roland Brunner",
  "Assoc. Prof. Edith Bucher": "Assoc. Prof. Dipl.-Ing. Dr.mont. Edith Bucher",
  "Dr. Christoph Gammer": "Dr. Christoph Gammer",
  "Univ.-Prof. Werner Sitte": "Univ.-Prof. Dipl.-Ing. Dr.techn. Werner Sitte",
  "Univ.-Prof. Thomas Kienberger": "Univ.-Prof. Dipl.-Ing. Dr.techn. Thomas Kienberger",
  "Bruno Deme": "Bruno Deme",
};

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

  return (
    <>
      <section className="px-6 pt-24 pb-14 sm:px-10 lg:px-16">
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

      <section className="px-6 pb-16 sm:px-10 lg:px-16">
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
        </div>
      </section>
    </>
  );
}
