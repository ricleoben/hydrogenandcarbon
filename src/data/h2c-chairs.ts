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
 * Chair contacts are built from Research project data (`h2c-research.ts`):
 * each project's `supervisors` list → affiliation → MUL chair name.
 * If several projects share a chair but have different supervisors, all are listed.
 * Publications only decide which chairs appear in the directory (via author → chair map).
 * E-mails use the `supervisorEmails` table (MUL @unileoben.ac.at pattern; verify on request).
 */

export const supervisorAffiliations: Record<string, string> = {
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
  "Priv.-Doz. Roland Brunner": "Materials Centre Leoben",
  "Assoc. Prof. Edith Bucher": "Chair of Physical Chemistry, Montanuniversitaet Leoben",
  "Dr. Christoph Gammer": "Austrian Academy of Sciences",
  "Univ.-Prof. Werner Sitte": "Chair of Physical Chemistry, Montanuniversitaet Leoben",
  "Univ.-Prof. Thomas Kienberger": "Chair of Energy Network Technology, Montanuniversitaet Leoben",
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

const supervisorEmails: Record<string, string> = {
  "Univ.-Prof. Markus Lehner": "markus.lehner@unileoben.ac.at",
  "Univ.-Prof. Johannes Schenk": "johannes.schenk@unileoben.ac.at",
  "Univ.-Prof. Helmut Antrekowitsch": "helmut.antrekowitsch@unileoben.ac.at",
  "Univ.-Prof. Helmut Flachberger": "helmut.flachberger@unileoben.ac.at",
  "Univ.-Prof. Thomas Prohaska": "thomas.prohaska@unileoben.ac.at",
  "Univ.-Prof. Christian Mitterer": "christian.mitterer@unileoben.ac.at",
  "Univ.-Prof. Oskar Paris": "oskar.paris@unileoben.ac.at",
  "Priv.-Doz. David Holec": "david.holec@unileoben.ac.at",
  "Univ.-Prof. Wolfgang Kern": "wolfgang.kern@unileoben.ac.at",
  "Ao.Univ.-Prof. Gregor Mori": "gregor.mori@unileoben.ac.at",
  "Ass.Prof. Gisbert Riess": "gisbert.riess@unileoben.ac.at",
  "Assoc. Prof. Thomas Lucyshyn": "thomas.lucyshyn@unileoben.ac.at",
  "Assoc. Prof. Daniel Kiener": "daniel.kiener@unileoben.ac.at",
  "Univ.-Prof. Juergen Eckert": "juergen.eckert@unileoben.ac.at",
  "Mag. Florian Spieckermann": "florian.spieckermann@unileoben.ac.at",
  "Univ.-Prof. Johann Raith": "johann.raith@unileoben.ac.at",
  "Priv.-Doz. David Misch": "david.misch@unileoben.ac.at",
  "Univ.-Prof. Reinhard Sachsenhofer": "reinhard.sachsenhofer@unileoben.ac.at",
  "Univ.-Prof. Holger Ott": "holger.ott@unileoben.ac.at",
  "Assoc. Prof. Edith Bucher": "edith.bucher@unileoben.ac.at",
  "Univ.-Prof. Werner Sitte": "werner.sitte@unileoben.ac.at",
  "Univ.-Prof. Thomas Kienberger": "thomas.kienberger@unileoben.ac.at",
};

/** Maps publication author surnames to MUL chairs (from research supervisors & symposium affiliations). */
const authorSurnameToChair: Record<string, string> = {
  Antrekowitsch: "Chair of Nonferrous Metallurgy",
  Bandl: "Chair of Functional Materials and Materials Systems",
  Bensing: "Chair of Petroleum Geology",
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
  Misch: "Chair of Petroleum Geology",
  Mitterer: "Chair of Functional Materials and Materials Systems",
  Mori: "Chair of General and Analytical Chemistry",
  Moshtaghi: "Chair of General and Analytical Chemistry",
  Neumueller: "Chair of Physical Chemistry",
  Neuschitzer: "Chair of Nonferrous Metallurgy",
  Ott: "Chair of Reservoir Engineering",
  Paris: "Institute of Physics",
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
  Skerbisch: "Chair of Petroleum Geology",
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
  "Chair of Energy Network Technology": "Lehrstuhl für Energienetztechnik",
  "Chair of Ferrous Metallurgy": "Lehrstuhl für Metallurgie der Stahlproduktion",
  "Chair of Functional Materials and Materials Systems":
    "Lehrstuhl für Funktionale Werkstoffe und Werkstoffsysteme",
  "Chair of General and Analytical Chemistry": "Lehrstuhl für Allgemeine und Analytische Chemie",
  "Chair of Materials Physics": "Lehrstuhl für Werkstoffphysik",
  "Chair of Mineral Processing": "Lehrstuhl für Aufbereitung und Recycling",
  "Chair of Nonferrous Metallurgy": "Lehrstuhl für Metallurgie der NE-Metalle",
  "Chair of Petroleum Geology": "Lehrstuhl für Erdölgeologie",
  "Chair of Physical Chemistry": "Lehrstuhl für Physikalische Chemie",
  "Chair of Physical Metallurgy and Metallic Materials":
    "Lehrstuhl für Physikalische Metallurgie und Werkstoffkunde",
  "Chair of Polymer Processing": "Lehrstuhl für Kunststoffverarbeitung",
  "Chair of Process Technology and Industrial Environmental Protection":
    "Lehrstuhl für Verfahrenstechnik und industriellen Umweltschutz",
  "Chair of Reservoir Engineering": "Lehrstuhl für Reservoir Engineering",
  "Chair of Resource Mineralogy": "Lehrstuhl für Rohstoffmineralogie",
  "Institute of Physics": "Institut für Physik",
};

function parseAuthorSurnames(authors: string) {
  return authors.split(";").map((entry) => {
    const trimmed = entry.trim();
    const comma = trimmed.indexOf(",");
    return comma >= 0 ? trimmed.slice(0, comma).trim() : trimmed;
  });
}

function extractChairKey(affiliation: string) {
  const first = affiliation.split(",")[0]?.trim();
  if (!first) return null;
  if (first.startsWith("Chair of ") || first.startsWith("Institute of ")) return first;
  return null;
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

function contactForSupervisor(supervisorKey: string): ChairContact | null {
  const email = supervisorEmails[supervisorKey];
  if (!email) return null;
  return {
    name: supervisorDisplayNames[supervisorKey] ?? supervisorKey,
    email,
  };
}

function buildChairContactMap() {
  const activeChairs = collectActiveChairKeys();
  const byChair = new Map<string, Map<string, ChairContact>>();

  const addContact = (chairKey: string, supervisorKey: string) => {
    if (!activeChairs.has(chairKey)) return;
    const contact = contactForSupervisor(supervisorKey);
    if (!contact) return;
    if (!byChair.has(chairKey)) byChair.set(chairKey, new Map());
    byChair.get(chairKey)!.set(contact.email, contact);
  };

  for (const item of h2cResearchItems) {
    for (const supervisorKey of item.supervisors) {
      const affiliation = supervisorAffiliations[supervisorKey];
      if (!affiliation) continue;
      const chairKey = extractChairKey(affiliation);
      if (chairKey) addContact(chairKey, supervisorKey);
    }
  }

  const contactsByChair = new Map<string, ChairContact[]>();
  for (const [chairKey, contacts] of byChair) {
    contactsByChair.set(
      chairKey,
      [...contacts.values()].sort((a, b) => a.name.localeCompare(b.name)),
    );
  }

  return { activeChairs, byChair: contactsByChair };
}

function localizeChairName(chairKey: string, locale: Locale) {
  if (locale === "de") return chairLabelsDe[chairKey] ?? chairKey;
  return chairKey;
}

export function getH2CChairNames(locale: Locale) {
  const { activeChairs } = buildChairContactMap();
  const sorted = [...activeChairs].sort((a, b) => a.localeCompare(b));
  return sorted.map((chair) => localizeChairName(chair, locale));
}

export function getH2CChairGroups(locale: Locale): ChairGroup[] {
  const { activeChairs, byChair: contactsByChair } = buildChairContactMap();
  return [...activeChairs]
    .sort((a, b) => a.localeCompare(b))
    .map((chairKey) => ({
      chairKey,
      chair: localizeChairName(chairKey, locale),
      contacts: contactsByChair.get(chairKey) ?? [],
    }))
    .filter((group) => group.contacts.length > 0);
}
