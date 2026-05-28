export type NavItem = {
  label: string;
  href: string;
  children?: NavItem[];
};

export const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "Research", href: "/research" },
  { label: "Publications", href: "/publications" },
  { label: "Infrastructure", href: "/infrastructure" },
  { label: "Team", href: "/team" },
  { label: "SAFE", href: "/safe" },
  { label: "MOSA", href: "/mosa" },
];

export const footerLinks: NavItem[] = [
  { label: "Imprint", href: "https://www.unileoben.ac.at/en/university/legal-information/imprint/" },
  { label: "Privacy", href: "https://www.unileoben.ac.at/en/university/legal-information/privacy-policy/" },
  {
    label: "RIC Leoben",
    href: "https://www.linkedin.com/company/ric-leoben/",
  },
];

export const footerContactLines = [
  {
    label: "Franz Josef-Strasse 18, 8700 Leoben",
    href: "https://www.google.com/maps/search/?api=1&query=Franz+Josef-Strasse+18,+8700+Leoben",
  },
  { label: "+43 3842 402-7601", href: "tel:+4338424027601" },
  { label: "ric-leoben@unileoben.ac.at", href: "mailto:ric-leoben@unileoben.ac.at" },
  {
    label: "LinkedIn - Resources Innovation Centre",
    href: "https://www.linkedin.com/company/ric-leoben/",
  },
] as const;

export const footerPartnerLinks = {
  eitRawMaterials: {
    label: "EIT RawMaterials",
    href: "https://eit.europa.eu/eit-community/eit-rawmaterials",
  },
  sdgs: {
    label: "Sustainable Development Goals",
    href: "https://sdgs.un.org/goals",
  },
} as const;

export type HydrogenCarbonCategory = {
  id: string;
  title: string;
  summary: string;
  videoEmbedUrl?: string;
};

export type HydrogenCarbonArticle = {
  id: string;
  categoryId: string;
  title: string;
  summary: string;
  detail: string;
  authors?: string;
  image?: string;
};

export const hydrogenCarbonCategories: HydrogenCarbonCategory[] = [
  {
    id: "hydrogen-production",
    title: "Hydrogen Production",
    summary:
      "Research on methane pyrolysis, electrolysis, catalyst systems, and process engineering for climate-friendly hydrogen production pathways.",
  },
  {
    id: "hydrogen-storage-transport-applications",
    title: "Hydrogen storage, transport & applications",
    summary:
      "Research on storage materials, transport infrastructure, seal systems, and conversion mechanisms across mobile and stationary use cases.",
  },
  {
    id: "carbon-applications",
    title: "Carbon & its applications",
    summary:
      "Research on carbon in agriculture, porous carbons, functionalisation, and industrial utilisation pathways connected to circular economy goals.",
  },
  {
    id: "safe",
    title: "SAFE",
    summary:
      "Sustainable Agriculture and Forestry Experienced living lab activities connecting education, biodiversity, social health, and resource use.",
  },
];

export const hydrogenCarbonArticles: HydrogenCarbonArticle[] = [
  {
    id: "thermal-plasma-pyrolysis-clean-hydrogen-carbon",
    categoryId: "hydrogen-production",
    title: "The Potential of Thermal Plasma Pyrolysis for Clean Hydrogen Gas and High Quality Solid Carbon Production from Methane",
    authors: "Daghagheleh, Oday",
    summary: "Thermal plasma methane pyrolysis for low-emission hydrogen and high-grade carbon byproduct production.",
    detail:
      "This project investigates methane pyrolysis using thermal plasma as a non-catalytic high-temperature route for producing hydrogen-rich gas and valuable solid carbon with minimal CO2 emissions. The work covers process concept development, laboratory experiments with a DC transferred arc setup, and analysis of key operating parameters such as current, gas composition, arc distance, and reaction stability.",
  },
  {
    id: "high-entropy-perovskites-green-hydrogen-soec",
    categoryId: "hydrogen-production",
    title: "Tailoring high entropy perovskites for green hydrogen production via solid oxide electrolysis",
    authors: "Pretschuh, Patrick",
    summary: "High-entropy perovskite electrode materials for efficient and stable SOEC-based green hydrogen production.",
    detail:
      "This project focuses on solid oxide electrolysis cells and the use of high entropy perovskites as advanced air-electrode materials, with emphasis on synthesis, porosity control, and long-term electrochemical performance.",
  },
  {
    id: "methane-pyrolysis-molten-metallic-catalysts",
    categoryId: "hydrogen-production",
    title: "Methane Pyrolysis in Molten Metallic Catalysts",
    authors: "Scheiblehner, David",
    summary: "Catalytic methane pyrolysis in molten metal and alloy systems to increase conversion and support continuous operation.",
    detail:
      "This project examines methane decomposition in molten metallic catalysts and alloys as an alternative hydrogen production route with reduced direct CO2 emissions.",
  },
  {
    id: "novel-catalyst-materials-co2-utilisation",
    categoryId: "hydrogen-storage-transport-applications",
    title: "Development of Novel Catalyst Materials of CO2 Utilisation",
    authors: "Schrenk, Florian",
    summary: "Catalyst development for utilisation and conversion processes.",
    detail:
      "Research explores catalyst material systems supporting hydrogen-linked conversion pathways and CO2 utilisation, with focus on activity, selectivity, and durability.",
  },
  {
    id: "seal-rocks-underground-hydrogen-storage",
    categoryId: "hydrogen-storage-transport-applications",
    title: "Laboratory investigations of seal rocks for underground hydrogen storage",
    authors: "Bensing, Joel",
    summary: "Seal rock behaviour and integrity for subsurface storage systems.",
    detail:
      "This study explores geotechnical and material behaviour of seal rocks relevant to long-term underground hydrogen storage and containment reliability.",
  },
  {
    id: "carbon-steel-underground-hydrogen-storage-facilities",
    categoryId: "hydrogen-storage-transport-applications",
    title: "Sustainability of Carbon Steel in Underground Hydrogen Gas Storage Facilities",
    authors: "Bhosale, Saurabh",
    summary: "Material durability and sustainability of carbon steel infrastructures.",
    detail:
      "The article investigates long-term behaviour, integrity risks, and sustainability implications of carbon steel in underground hydrogen storage operations.",
  },
  {
    id: "hydrogen-uptake-embrittlement-pipeline-steel",
    categoryId: "hydrogen-storage-transport-applications",
    title: "Hydrogen uptake and embrittlement of line pipe steel under pressures up to 1000 bar",
    authors: "Eichinger, Matthias",
    summary: "Embrittlement and high-pressure behaviour of pipeline steels.",
    detail:
      "Research analyses hydrogen-material interactions in pipeline steels under extreme pressure conditions to inform infrastructure safety and standards.",
  },
  {
    id: "natural-gas-pipelines-hydrogen-transport",
    categoryId: "hydrogen-storage-transport-applications",
    title: "Repurposing Natural Gas Pipelines for 100% Hydrogen Transport",
    authors: "Hamed, Ahmed",
    summary: "Infrastructure adaptation for full hydrogen transport use.",
    detail:
      "The article studies technical readiness and engineering constraints for converting existing gas pipeline systems to 100% hydrogen operation.",
  },
  {
    id: "carbon-in-agriculture-soil-amendment",
    categoryId: "carbon-applications",
    title: "Carbon produced by methane pyrolysis - a potential soil amendment?",
    authors: "Abu Zahra, Nadine",
    summary: "Assessment of pyrolytic carbon for agricultural soils.",
    detail:
      "The study investigates whether methane pyrolysis-derived carbon can contribute to soil quality and agricultural resilience while supporting circular carbon utilisation.",
  },
  {
    id: "processing-carbon-from-methane-pyrolysis",
    categoryId: "carbon-applications",
    title: "Processing of carbon produced by methane pyrolysis",
    authors: "Hartig, Gerald",
    summary: "Processing pathways for methane pyrolysis carbon.",
    detail:
      "Research focuses on post-processing options, material properties, and practical value chains for carbon generated through methane pyrolysis technologies.",
  },
  {
    id: "nanoporous-carbons-hydrogen-storage",
    categoryId: "carbon-applications",
    title: "Functionalisation of Nanoporous Carbons for Hydrogen Storage",
    authors: "Knabl, Florian",
    summary: "Material functionalisation for improved storage behaviour.",
    detail:
      "This article explores nanoporous carbon modification strategies to improve hydrogen adsorption performance and storage potential in advanced energy systems.",
  },
  {
    id: "safe-living-lab-concept",
    categoryId: "safe",
    title: "SAFE Living Lab Concept",
    summary: "Living lab framework connecting science, society, and sustainability.",
    detail:
      "SAFE develops a living lab environment where research, education, and public engagement intersect through practical activities around biodiversity, forestry, and resource use.",
  },
];

export function getHydrogenCarbonArticleSlug(id: string) {
  return id
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getHydrogenCarbonArticleBySlug(slug: string) {
  return hydrogenCarbonArticles.find((article) => getHydrogenCarbonArticleSlug(article.id) === slug);
}
