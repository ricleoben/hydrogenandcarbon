import type { Locale } from "@/lib/i18n";
import type { NavItem } from "@/data/site-content";

export function getNavItems(locale: Locale): NavItem[] {
  if (locale === "de") {
    return [
      { label: "Startseite", href: "/" },
      { label: "Forschung", href: "/research" },
      { label: "Publikationen", href: "/publications" },
      { label: "Infrastruktur", href: "/infrastructure" },
      { label: "Team", href: "/team" },
      { label: "SAFE", href: "/safe" },
      { label: "MOSA", href: "/mosa" },
    ];
  }

  return [
    { label: "Home", href: "/" },
    { label: "Research", href: "/research" },
    { label: "Publications", href: "/publications" },
    { label: "Infrastructure", href: "/infrastructure" },
    { label: "Team", href: "/team" },
    { label: "SAFE", href: "/safe" },
    { label: "MOSA", href: "/mosa" },
  ];
}

export function getFooterLinks(locale: Locale): NavItem[] {
  if (locale === "de") {
    return [
      { label: "Impressum", href: "https://www.unileoben.ac.at/de/universitaet/rechtliches/impressum/" },
      { label: "Datenschutz", href: "https://www.unileoben.ac.at/de/universitaet/rechtliches/datenschutz/" },
      { label: "RIC Leoben", href: "https://www.linkedin.com/company/ric-leoben/" },
    ];
  }

  return [
    { label: "Imprint", href: "https://www.unileoben.ac.at/en/university/legal-information/imprint/" },
    { label: "Privacy", href: "https://www.unileoben.ac.at/en/university/legal-information/privacy-policy/" },
    { label: "RIC Leoben", href: "https://www.linkedin.com/company/ric-leoben/" },
  ];
}

export const commonUi = {
  en: {
    menu: "Menu",
    legal: "Legal",
    previous: "Previous",
    next: "Next",
    phone: "Phone:",
    email: "Email:",
    willBeAdded: "Will be added.",
    source: "Source:",
    adapted: "adapted",
    clearSearch: "Clear search",
    clear: "Clear",
    authors: "Authors",
    viewPoster: "View poster",
    learnMore: "Learn more",
    relatedPublication: "Related publication",
    relatedThesis: "Doctoral thesis (PURE)",
    viewOnPure: "View on PURE",
    relatedResearchProject: "Related research project",
    backToResearch: "Back to Research",
    backToPublications: "Back to Publications",
    candidate: "Candidate:",
    chair: "Chair:",
    duration: "Duration:",
    start: "Start:",
    end: "End:",
    candidateProfile: "Candidate profile:",
    generalInfo: "General Info",
    supervisors: "Supervisors / Mentors",
    targets: "Targets",
    milestones: "Milestones",
    workPackages: "Work Packages",
    context: "Context H₂-C",
    affiliationPending: "Affiliation information to be confirmed.",
    posterDetail: "Poster Detail",
    category: "Category:",
    downloadPoster: "Download Poster PDF",
    searchPublications: "Search publications",
    searchPlaceholder: "Search by project title or author name...",
    resultsFor: (count: number, query: string) =>
      `${count} result${count === 1 ? "" : "s"} for “${query}”`,
    noSearchResults: "No posters match your search. Try a different project title or author name.",
    noCategoryPosters: "No posters are available in this category.",
    filterAll: "All",
    homepageAria: "Go to Hydrogen and Carbon Centre homepage",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  de: {
    menu: "Menü",
    legal: "Rechtliches",
    previous: "Zurück",
    next: "Weiter",
    phone: "Telefon:",
    email: "E-Mail:",
    willBeAdded: "Wird ergänzt.",
    source: "Quelle:",
    adapted: "angepasst",
    clearSearch: "Suche löschen",
    clear: "Löschen",
    authors: "Autor*innen",
    viewPoster: "Poster ansehen",
    learnMore: "Mehr erfahren",
    relatedPublication: "Verwandte Publikation",
    relatedThesis: "Doktorarbeit (PURE)",
    viewOnPure: "Auf PURE ansehen",
    relatedResearchProject: "Verwandtes Forschungsprojekt",
    backToResearch: "Zurück zur Forschung",
    backToPublications: "Zurück zu den Publikationen",
    candidate: "Kandidat:",
    chair: "Lehrstuhl:",
    duration: "Laufzeit:",
    start: "Start:",
    end: "Ende:",
    candidateProfile: "Kandidatenprofil:",
    generalInfo: "Allgemeine Informationen",
    supervisors: "Betreuer / Mentoren",
    targets: "Ziele",
    milestones: "Meilensteine",
    workPackages: "Arbeitspakete",
    context: "Kontext H₂-C",
    affiliationPending: "Institutionsangabe wird noch bestätigt.",
    posterDetail: "Posterdetail",
    category: "Kategorie:",
    downloadPoster: "Poster-PDF herunterladen",
    searchPublications: "Publikationen durchsuchen",
    searchPlaceholder: "Nach Projekttitel oder Autor*in suchen...",
    resultsFor: (count: number, query: string) =>
      `${count} Ergebnis${count === 1 ? "" : "se"} für „${query}“`,
    noSearchResults: "Keine Poster entsprechen Ihrer Suche. Versuchen Sie einen anderen Projekttitel oder Autorennamen.",
    noCategoryPosters: "In dieser Kategorie sind keine Poster verfügbar.",
    filterAll: "Alle",
    homepageAria: "Zur Startseite des Hydrogen and Carbon Centres",
    openMenu: "Menü öffnen",
    closeMenu: "Menü schließen",
  },
} as const;

export function getCommonUi(locale: Locale) {
  return commonUi[locale];
}
