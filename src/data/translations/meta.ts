import type { Locale } from "@/lib/i18n";

export type MetaRouteKey =
  | "home"
  | "research"
  | "researchDetail"
  | "publications"
  | "publicationDetail"
  | "infrastructure"
  | "team"
  | "safe"
  | "mosa"
  | "mosaTeachers"
  | "mosaMunicipalities"
  | "mosaAssociations";

type MetaEntry = {
  title: string;
  description: string;
  image?: string;
};

const meta: Record<Locale, Record<MetaRouteKey, MetaEntry>> = {
  en: {
    // The root layout's title template does not apply to the root page, so this
    // title has to carry the site name itself.
    home: {
      title: "SCoRe A⁺ Hydrogen and Carbon Centre | Montanuniversität Leoben",
      description:
        "The SCoRe A⁺ Hydrogen and Carbon Centre at Montanuniversitaet Leoben researches methane pyrolysis, hydrogen storage, and carbon utilisation for a climate-neutral industry.",
    },
    research: {
      title: "Research",
      description:
        "Doctoral research projects across methane pyrolysis, carbon applications, hydrogen storage, and alternative hydrogen production routes at Montanuniversitaet Leoben.",
    },
    researchDetail: {
      title: "Research project",
      description: "Research project of the SCoRe A⁺ Hydrogen and Carbon Centre.",
    },
    publications: {
      title: "Publications",
      description:
        "Conference posters, doctoral theses, and publications from the SCoRe A⁺ Hydrogen and Carbon Centre research community.",
    },
    publicationDetail: {
      title: "Poster",
      description: "Publication of the SCoRe A⁺ Hydrogen and Carbon Centre.",
    },
    infrastructure: {
      title: "Infrastructure",
      description:
        "Laboratories, pilot plants, and analytical equipment available to the Hydrogen and Carbon Centre research programme.",
    },
    team: {
      title: "Team",
      description:
        "Researchers, supervisors, and chairs behind the SCoRe A⁺ Hydrogen and Carbon Centre at Montanuniversitaet Leoben.",
      image: "/team2025.png",
    },
    safe: {
      title: "SAFE",
      description:
        "Sustainable Agriculture and Forestry Experienced - a living lab connecting biodiversity, soil health, education, and resource use.",
      image: "/SAFE1.jpeg",
    },
    mosa: {
      title: "MOSA",
      description:
        "MOSA is the science communication and education programme of the Hydrogen and Carbon Centre, connecting research with schools, municipalities, and associations.",
      image: "/MOSA1.jpeg",
    },
    mosaTeachers: {
      title: "MOSA for teachers and schools",
      description:
        "Curriculum-linked workshops, field stations, and teaching material for schools visiting the MOSA learning environment.",
      image: "/MOSA1.jpeg",
    },
    mosaMunicipalities: {
      title: "MOSA for municipalities",
      description:
        "Programmes that help municipalities connect residents with energy transition topics through guided outdoor learning stations.",
      image: "/MOSA1.jpeg",
    },
    mosaAssociations: {
      title: "MOSA for associations",
      description:
        "Hands-on sustainability programmes for clubs, youth groups, NGOs, and civic associations at the research centre.",
      image: "/associations1.jpeg",
    },
  },
  de: {
    home: {
      title: "SCoRe A⁺ Wasserstoff- und Kohlenstoffzentrum | Montanuniversität Leoben",
      description:
        "Das SCoRe A⁺ Wasserstoff- und Kohlenstoffzentrum der Montanuniversität Leoben erforscht Methanpyrolyse, Wasserstoffspeicherung und Kohlenstoffnutzung für eine klimaneutrale Industrie.",
    },
    research: {
      title: "Forschung",
      description:
        "Dissertationsprojekte zu Methanpyrolyse, Kohlenstoffanwendungen, Wasserstoffspeicherung und alternativen Wasserstoffrouten an der Montanuniversität Leoben.",
    },
    researchDetail: {
      title: "Forschungsprojekt",
      description: "Forschungsprojekt des SCoRe A⁺ Wasserstoff- und Kohlenstoffzentrums.",
    },
    publications: {
      title: "Publikationen",
      description:
        "Konferenzposter, Dissertationen und Publikationen aus der Forschungsgemeinschaft des SCoRe A⁺ Wasserstoff- und Kohlenstoffzentrums.",
    },
    publicationDetail: {
      title: "Poster",
      description: "Publikation des SCoRe A⁺ Wasserstoff- und Kohlenstoffzentrums.",
    },
    infrastructure: {
      title: "Infrastruktur",
      description:
        "Labore, Pilotanlagen und Analysegeräte, die dem Forschungsprogramm des Wasserstoff- und Kohlenstoffzentrums zur Verfügung stehen.",
    },
    team: {
      title: "Team",
      description:
        "Forschende, Betreuende und Lehrstühle hinter dem SCoRe A⁺ Wasserstoff- und Kohlenstoffzentrum der Montanuniversität Leoben.",
      image: "/team2025.png",
    },
    safe: {
      title: "SAFE",
      description:
        "Sustainable Agriculture and Forestry Experienced - ein Living Lab, das Biodiversität, Bodengesundheit, Bildung und Ressourcennutzung verbindet.",
      image: "/SAFE1.jpeg",
    },
    mosa: {
      title: "MOSA",
      description:
        "MOSA ist das Wissenschaftskommunikations- und Bildungsprogramm des Wasserstoff- und Kohlenstoffzentrums für Schulen, Gemeinden und Vereine.",
      image: "/MOSA1.jpeg",
    },
    mosaTeachers: {
      title: "MOSA für Lehrkräfte und Schulen",
      description:
        "Lehrplanbezogene Workshops, Feldstationen und Unterrichtsmaterial für Schulklassen in der MOSA-Lernumgebung.",
      image: "/MOSA1.jpeg",
    },
    mosaMunicipalities: {
      title: "MOSA für Gemeinden",
      description:
        "Programme, die Gemeinden dabei unterstützen, Bürgerinnen und Bürger über geführte Outdoor-Lernstationen mit Energiewendethemen zu verbinden.",
      image: "/MOSA1.jpeg",
    },
    mosaAssociations: {
      title: "MOSA für Vereine",
      description:
        "Praxisnahe Nachhaltigkeitsprogramme für Vereine, Jugendgruppen, NGOs und zivilgesellschaftliche Organisationen am Forschungszentrum.",
      image: "/associations1.jpeg",
    },
  },
};

export function getRouteMeta(locale: Locale, key: MetaRouteKey): MetaEntry {
  return meta[locale][key];
}
