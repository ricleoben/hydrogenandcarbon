import type { Locale } from "@/lib/i18n";

export type TeamMemberCard = {
  name: string;
  image: string;
  label: string;
  position?: string;
  details: string[];
  phone: string;
  email: string;
};

export const teamUi = {
  en: {
    title: "SCoRe A⁺ Hydrogen and Carbon organisational structure",
    clusterManagers: "Cluster Managers",
    focusCarbon: "Focus Carbon",
    focusHydrogen: "Focus Hydrogen",
    mentor: "Mentor",
    mentors: "Mentors",
    chairs: "Chairs",
    contactPerson: "Contact person",
  },
  de: {
    title: "Organisationsstruktur von SCoRe A⁺ Hydrogen and Carbon",
    clusterManagers: "Cluster-Manager",
    focusCarbon: "Schwerpunkt Kohlenstoff",
    focusHydrogen: "Schwerpunkt Wasserstoff",
    mentor: "Mentor",
    mentors: "Mentoren",
    chairs: "Lehrstühle",
    contactPerson: "Kontaktperson",
  },
} as const;

export const teamMentors: Record<Locale, TeamMemberCard[]> = {
  en: [
    {
      name: "Helmut Antrekowitsch",
      image: "/HelmutAntrekowitsch.jpg",
      label: "Mentor",
      position: "Vice Rector, Prof. Dr.",
      details: ["Montanuniversitaet Leoben", "Franz Josef-Strasse 18", "8700 Leoben"],
      phone: "03842-402-0",
      email: "helmut.antrekowitsch@unileoben.ac.at",
    },
    {
      name: "Markus Lehner",
      image: "/markuslehner.jpg",
      label: "Mentor",
      position: "Univ.-Prof. DI Dr.-Ing.",
      details: [
        "Chair of Energy Process Engineering",
        "Montanuniversitaet Leoben",
        "Franz Josef-Strasse 18",
        "8700 Leoben",
      ],
      phone: "03842-402-5000",
      email: "markus.lehner@unileoben.ac.at",
    },
  ],
  de: [
    {
      name: "Helmut Antrekowitsch",
      image: "/HelmutAntrekowitsch.jpg",
      label: "Mentor",
      position: "Vizerektor, Prof. Dr.",
      details: ["Montanuniversitaet Leoben", "Franz Josef-Strasse 18", "8700 Leoben"],
      phone: "03842-402-0",
      email: "helmut.antrekowitsch@unileoben.ac.at",
    },
    {
      name: "Markus Lehner",
      image: "/markuslehner.jpg",
      label: "Mentor",
      position: "Univ.-Prof. DI Dr.-Ing.",
      details: [
        'Lehrstuhlleiter, Arbeitsgruppenleiter „Energieverfahrenstechnik"',
        "Montanuniversitaet Leoben",
        "Franz Josef-Strasse 18",
        "8700 Leoben",
      ],
      phone: "03842-402-5000",
      email: "markus.lehner@unileoben.ac.at",
    },
  ],
};

export function getTeamUi(locale: Locale) {
  return teamUi[locale];
}

export function getTeamMentors(locale: Locale) {
  return teamMentors[locale];
}
