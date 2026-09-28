import { h2cPublicationPosters } from "@/data/h2c-publications";
import { h2cResearchItems } from "@/data/h2c-research";
import type { Locale } from "@/lib/i18n";

export type ChairContact = {
  name: string;
  email: string;
};

export type ChairGroup = {
  chairKey: string;
  chair: string;
  contacts: ChairContact[];
};

/**
 * Which chairs appear is derived from project data: each research project's `chair` field
 * plus publication authors mapped via `authorSurnameToChair`.
 * The directory shows each chair's current head (`chairHeads`) under its current MUL name
 * (German names in `chairLabelsDe`), taken from unileoben.ac.at/en/university/departments-and-chairs/.
 * Project supervisors stay on the research detail pages via `supervisorAffiliations`.
 */

export const supervisorAffiliations: Record<string, string> = {
  "Univ.-Prof. Markus Lehner": "Chair of Process Technology and Industrial Environmental Protection, Montanuniversität Leoben",
  "Univ.-Prof. Johannes Schenk": "Chair of Ferrous Metallurgy, Montanuniversität Leoben",
  "Univ.-Prof. Helmut Antrekowitsch": "Chair of Nonferrous Metallurgy, Montanuniversität Leoben",
  "Ao.Univ.-Prof. Clemens Brand": "Chair of Applied Mathematics, Montanuniversität Leoben",
  "Univ.-Prof. Helmut Flachberger": "Chair of Mineral Processing, Montanuniversität Leoben",
  "Univ.-Prof. Thomas Prohaska": "Chair of General and Analytical Chemistry, Montanuniversität Leoben",
  "Univ.-Prof. Christian Mitterer": "Chair of Functional Materials and Materials Systems, Montanuniversität Leoben",
  "Univ.-Prof. Oskar Paris": "Chair of Physics, Montanuniversität Leoben",
  "Bruno Deme": "Institut Laue-Langevin, Grenoble",
  "Priv.-Doz. David Holec": "Chair of Physical Metallurgy, Montanuniversität Leoben",
  "Assoc. Prof. Peter Puschnig": "University of Graz",
  "Univ.-Prof. Wolfgang Kern": "Chair of Chemistry of Polymeric Materials, Montanuniversität Leoben",
  "Priv.-Doz. Markus Puschenreiter": "University of Natural Resources and Life Sciences, Tulln",
  "Ao.Univ.-Prof. Gregor Mori": "Chair of General and Analytical Chemistry, Montanuniversität Leoben",
  "Univ.-Prof. Ronald Schnitzer": "Chair of Physical Metallurgy, Montanuniversität Leoben",
  "Ass.Prof. Gisbert Riess": "Chair of Chemistry of Polymeric Materials, Montanuniversität Leoben",
  "Univ.-Prof. Gregor Trimmel": "Graz University of Technology",
  "Assoc. Prof. Thomas Lucyshyn": "Chair of Polymer Processing, Montanuniversität Leoben",
  "Assoc. Prof. Daniel Kiener": "Chair of Materials Physics, Montanuniversität Leoben",
  "Univ.-Prof. Juergen Eckert": "Chair of Materials Physics, Montanuniversität Leoben",
  "Mag. Florian Spieckermann": "Chair of Materials Physics, Montanuniversität Leoben",
  "Univ.-Prof. Krishna Ravi": "Chair of Drilling and Completion Engineering, Montanuniversität Leoben",
  "Univ.-Prof. Johann Raith": "Chair of Resource Mineralogy, Montanuniversität Leoben",
  "Priv.-Doz. David Misch": "Chair of Energy Geosciences, Montanuniversität Leoben",
  "Univ.-Prof. Reinhard Sachsenhofer": "Chair of Energy Geosciences, Montanuniversität Leoben",
  "Ao.Univ.Prof. Andreas Loibner": "University of Natural Resources and Life Sciences, Vienna",
  "Univ.-Prof. Holger Ott": "Chair of Reservoir Engineering, Montanuniversität Leoben",
  "Priv.-Doz. Roland Brunner": "Materials Centre Leoben",
  "Assoc. Prof. Edith Bucher": "Chair of Physical Chemistry, Montanuniversität Leoben",
  "Dr. Christoph Gammer": "Austrian Academy of Sciences",
  "Univ.-Prof. Werner Sitte": "Chair of Physical Chemistry, Montanuniversität Leoben",
  "Univ.-Prof. Thomas Kienberger": "Chair of Energy Network Technology, Montanuniversität Leoben",
};

export const supervisorDisplayNames: Record<string, string> = {
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
  "Univ.-Prof. Juergen Eckert": "Univ.-Prof. Dipl.-Ing. Dr.-Ing.habil. Dr.h.c. Jürgen Eckert",
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

const chairHeads: Record<string, ChairContact> = {
  "Chair of Chemistry of Polymeric Materials": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.techn. Thomas Grießer",
    email: "thomas.griesser@unileoben.ac.at",
  },
  "Chair of Energy Geosciences": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.mont. David Misch",
    email: "david.misch@unileoben.ac.at",
  },
  "Chair of Energy Network Technology": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.techn. Thomas Kienberger",
    email: "thomas.kienberger@unileoben.ac.at",
  },
  "Chair of Ferrous Metallurgy": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.mont. Susanne Michelic",
    email: "susanne.michelic@unileoben.ac.at",
  },
  "Chair of Functional Materials and Materials Systems": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.mont. Christian Mitterer",
    email: "christian.mitterer@unileoben.ac.at",
  },
  "Chair of General and Analytical Chemistry": {
    name: "Univ.-Prof. Dipl.-Ing. Dr. techn. Thomas Prohaska",
    email: "thomas.prohaska@unileoben.ac.at",
  },
  "Chair of Materials Physics": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.-Ing.habil. Dr.h.c. Jürgen Eckert",
    email: "juergen.eckert@unileoben.ac.at",
  },
  "Chair of Mineral Processing": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.mont. Helmut Flachberger",
    email: "helmut.flachberger@unileoben.ac.at",
  },
  "Chair of Nonferrous Metallurgy": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.mont. Helmut Antrekowitsch",
    email: "helmut.antrekowitsch@unileoben.ac.at",
  },
  "Chair of Physical Chemistry": {
    name: "Univ.-Prof. Mag. et Dr.rer.nat. Christoph Rameshan",
    email: "christoph.rameshan@unileoben.ac.at",
  },
  "Chair of Physical Metallurgy": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.mont. Ronald Schnitzer",
    email: "ronald.schnitzer@unileoben.ac.at",
  },
  "Chair of Physics": {
    name: "Univ.-Prof. Mag. et Dr.rer.nat. Oskar Paris",
    email: "oskar.paris@unileoben.ac.at",
  },
  "Chair of Polymer Processing": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.mont. Clemens Holzer",
    email: "clemens.holzer@unileoben.ac.at",
  },
  "Chair of Process Technology and Industrial Environmental Protection": {
    name: "Univ.-Prof. Dipl.-Ing. Dr.-Ing. Markus Lehner",
    email: "markus.lehner@unileoben.ac.at",
  },
  "Chair of Reservoir Engineering": {
    name: "Univ.-Prof. Dipl.-Phys. Dr.rer.nat. Holger Ott",
    email: "holger.ott@unileoben.ac.at",
  },
  "Chair of Resource Mineralogy": {
    name: "Univ.-Prof. Dr.rer.nat.habil. M.Sc. Mathias Burisch-Hassel",
    email: "mathias.burisch-hassel@unileoben.ac.at",
  },
};

/** Maps publication author surnames to MUL chairs (from research supervisors & symposium affiliations). */
const authorSurnameToChair: Record<string, string> = {
  Antrekowitsch: "Chair of Nonferrous Metallurgy",
  Bandl: "Chair of Functional Materials and Materials Systems",
  Bensing: "Chair of Energy Geosciences",
  Bhosale: "Chair of General and Analytical Chemistry",
  Brunner: "Chair of Physical Chemistry",
  Bucher: "Chair of Physical Chemistry",
  Buxbaum: "Chair of Physical Chemistry",
  Cvetkovska: "Chair of Energy Network Technology",
  Daghagheleh: "Chair of Ferrous Metallurgy",
  Drexler: "Chair of Physical Chemistry",
  Eckert: "Chair of Materials Physics",
  Egger: "Chair of Physical Chemistry",
  Eichinger: "Chair of General and Analytical Chemistry",
  Grießer: "Chair of Functional Materials and Materials Systems",
  Hamed: "Chair of General and Analytical Chemistry",
  Hartig: "Chair of Mineral Processing",
  Holzer: "Chair of Polymer Processing",
  Jammernegg: "Chair of Reservoir Engineering",
  Jasek: "Chair of Reservoir Engineering",
  Jyothsna: "Chair of Polymer Processing",
  Kern: "Chair of Chemistry of Polymeric Materials",
  Kienberger: "Chair of Energy Network Technology",
  Kiener: "Chair of Materials Physics",
  Knabl: "Chair of Functional Materials and Materials Systems",
  Kohns: "Chair of Functional Materials and Materials Systems",
  Kostoglou: "Chair of Functional Materials and Materials Systems",
  Lehner: "Chair of Process Technology and Industrial Environmental Protection",
  Leiner: "Chair of Functional Materials and Materials Systems",
  Lucyshyn: "Chair of Polymer Processing",
  "Maier-Kiener": "Chair of Materials Physics",
  Misch: "Chair of Energy Geosciences",
  Mitterer: "Chair of Functional Materials and Materials Systems",
  Mori: "Chair of General and Analytical Chemistry",
  Moshtaghi: "Chair of General and Analytical Chemistry",
  Neumueller: "Chair of Physical Chemistry",
  Neuschitzer: "Chair of Nonferrous Metallurgy",
  Ott: "Chair of Reservoir Engineering",
  Paris: "Chair of Physics",
  Pretschuh: "Chair of Physical Chemistry",
  Pustahija: "Chair of Chemistry of Polymeric Materials",
  Rafailovic: "Chair of Physical Chemistry",
  Rameshan: "Chair of Physical Chemistry",
  Rauscher: "Chair of Functional Materials and Materials Systems",
  Riess: "Chair of Chemistry of Polymeric Materials",
  Rollenitz: "Chair of Physical Chemistry",
  Sammer: "Chair of Reservoir Engineering",
  Scheiblehner: "Chair of Nonferrous Metallurgy",
  Schenk: "Chair of Ferrous Metallurgy",
  Schrenk: "Chair of Physical Chemistry",
  Schweiger: "Chair of Materials Physics",
  Seyffertitz: "Chair of Functional Materials and Materials Systems",
  Sharifian: "Chair of Chemistry of Polymeric Materials",
  Sitte: "Chair of Physical Chemistry",
  Skerbisch: "Chair of Energy Geosciences",
  Spieckermann: "Chair of Materials Physics",
  Sprung: "Chair of Nonferrous Metallurgy",
  Stiedl: "Chair of Reservoir Engineering",
  Stock: "Chair of Functional Materials and Materials Systems",
  Strassburg: "Chair of Functional Materials and Materials Systems",
  Tkadletz: "Chair of Functional Materials and Materials Systems",
  Weiss: "Chair of Process Technology and Industrial Environmental Protection",
  Wibner: "Chair of Nonferrous Metallurgy",
  Zeiler: "Chair of Functional Materials and Materials Systems",
};

const chairLabelsDe: Record<string, string> = {
  "Chair of Chemistry of Polymeric Materials": "Lehrstuhl für Chemie der Kunststoffe",
  "Chair of Energy Geosciences": "Lehrstuhl für Energy Geosciences",
  "Chair of Energy Network Technology": "Lehrstuhl für Energieverbundtechnik",
  "Chair of Ferrous Metallurgy": "Lehrstuhl für Eisen- und Stahlmetallurgie",
  "Chair of Functional Materials and Materials Systems":
    "Lehrstuhl für Funktionale Werkstoffe und Werkstoffsysteme",
  "Chair of General and Analytical Chemistry": "Lehrstuhl für Allgemeine und Analytische Chemie",
  "Chair of Materials Physics": "Lehrstuhl für Materialphysik",
  "Chair of Mineral Processing": "Lehrstuhl für Aufbereitung und Veredlung",
  "Chair of Nonferrous Metallurgy": "Lehrstuhl für Nichteisenmetallurgie",
  "Chair of Physical Chemistry": "Lehrstuhl für Physikalische Chemie",
  "Chair of Physical Metallurgy": "Lehrstuhl für Metallkunde",
  "Chair of Physics": "Lehrstuhl für Physik",
  "Chair of Polymer Processing": "Lehrstuhl für Kunststoffverarbeitung",
  "Chair of Process Technology and Industrial Environmental Protection":
    "Lehrstuhl für Verfahrenstechnik des industriellen Umweltschutzes",
  "Chair of Reservoir Engineering": "Lehrstuhl für Reservoir Engineering",
  "Chair of Resource Mineralogy": "Lehrstuhl für Rohstoffmineralogie",
};

function parseAuthorSurnames(authors: string) {
  return authors.split(";").map((entry) => {
    const trimmed = entry.trim();
    const comma = trimmed.indexOf(",");
    return comma >= 0 ? trimmed.slice(0, comma).trim() : trimmed;
  });
}

function collectActiveChairKeys() {
  const chairs = new Set<string>();
  for (const item of h2cResearchItems) {
    for (const part of item.chair.split(" / ")) {
      const name = part.trim();
      if (name) chairs.add(name);
    }
  }
  for (const poster of h2cPublicationPosters) {
    for (const surname of parseAuthorSurnames(poster.authors)) {
      const chair = authorSurnameToChair[surname];
      if (chair) chairs.add(chair);
    }
  }
  return chairs;
}

function localizeChairName(chairKey: string, locale: Locale) {
  if (locale === "de") return chairLabelsDe[chairKey] ?? chairKey;
  return chairKey;
}

export function getH2CChairNames(locale: Locale) {
  const activeChairs = collectActiveChairKeys();
  const sorted = [...activeChairs].sort((a, b) => a.localeCompare(b));
  return sorted.map((chair) => localizeChairName(chair, locale));
}

export function getH2CChairGroups(locale: Locale): ChairGroup[] {
  return [...collectActiveChairKeys()]
    .filter((chairKey) => chairKey in chairHeads)
    .map((chairKey) => ({
      chairKey,
      chair: localizeChairName(chairKey, locale),
      contacts: [chairHeads[chairKey]],
    }))
    .sort((a, b) => a.chair.localeCompare(b.chair, locale));
}
