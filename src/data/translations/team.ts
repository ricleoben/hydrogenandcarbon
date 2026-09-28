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
    mentors: "Mentors",
    chairs: "Chairs",
    contactPerson: "Contact person",
  },
  de: {
    title: "Organisationsstruktur von SCoRe A⁺ Hydrogen and Carbon",
    clusterManagers: "Cluster-Manager",
    mentors: "Mentoren",
    chairs: "Lehrstühle",
    contactPerson: "Kontaktperson",
  },
} as const;

export const teamClusterManagers: Record<Locale, TeamMemberCard[]> = {
  en: [
    {
      name: "David Scheiblehner",
      image: "/Scheiblehner-David-1-scaled.jpg",
      label: "Focus Hydrogen",
      details: ["Hydrogen Research Centre", "Montanuniversität Leoben", "Dorfstrasse 1, Leitendorf", "8700 Leoben"],
      phone: "03842-402-5217",
      email: "david.scheiblehner@unileoben.ac.at",
    },
    {
      name: "Robert Obenaus-Emler",
      image: "/Robert_Obenaus_Emler.jpg",
      label: "Focus Carbon",
      details: ["Resources Innovation Centre", "Montanuniversität Leoben", "Peter Tunner-Strasse 15", "8700 Leoben"],
      phone: "03842-402-7613",
      email: "emler@unileoben.ac.at",
    },
  ],
  de: [
    {
      name: "David Scheiblehner",
      image: "/Scheiblehner-David-1-scaled.jpg",
      label: "Schwerpunkt Wasserstoff",
      details: ["Hydrogen Research Centre", "Montanuniversität Leoben", "Dorfstrasse 1, Leitendorf", "8700 Leoben"],
      phone: "03842-402-5217",
      email: "david.scheiblehner@unileoben.ac.at",
    },
    {
      name: "Robert Obenaus-Emler",
      image: "/Robert_Obenaus_Emler.jpg",
      label: "Schwerpunkt Kohlenstoff",
      details: ["Resources Innovation Centre", "Montanuniversität Leoben", "Peter Tunner-Strasse 15", "8700 Leoben"],
      phone: "03842-402-7613",
      email: "emler@unileoben.ac.at",
    },
  ],
};

export const teamMentors: Record<Locale, TeamMemberCard[]> = {
  en: [
    {
      name: "Helmut Antrekowitsch",
      image: "/HelmutAntrekowitsch.jpg",
      label: "Mentor",
      position: "Univ.-Prof. Dipl.-Ing. Dr.mont.",
      details: ["Vice-Rector for Research and Sustainability", "Montanuniversität Leoben", "Franz Josef-Strasse 18", "8700 Leoben"],
      phone: "03842-402-0",
      email: "helmut.antrekowitsch@unileoben.ac.at",
    },
    {
      name: "Markus Lehner",
      image: "/markuslehner.jpg",
      label: "Mentor",
      position: "Univ.-Prof. Dipl.-Ing. Dr.-Ing.",
      details: [
        "Chair of Process Technology and Industrial Environmental Protection",
        "Montanuniversität Leoben",
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
      position: "Univ.-Prof. Dipl.-Ing. Dr.mont.",
      details: ["Vizerektor für Forschung und Nachhaltigkeit", "Montanuniversität Leoben", "Franz Josef-Strasse 18", "8700 Leoben"],
      phone: "03842-402-0",
      email: "helmut.antrekowitsch@unileoben.ac.at",
    },
    {
      name: "Markus Lehner",
      image: "/markuslehner.jpg",
      label: "Mentor",
      position: "Univ.-Prof. Dipl.-Ing. Dr.-Ing.",
      details: [
        "Lehrstuhl für Verfahrenstechnik des industriellen Umweltschutzes",
        "Montanuniversität Leoben",
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

export function getTeamClusterManagers(locale: Locale) {
  return teamClusterManagers[locale];
}

export function getTeamMentors(locale: Locale) {
  return teamMentors[locale];
}
