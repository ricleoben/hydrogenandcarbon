export type H2CThesisLink = {
  title: string;
  url: string;
  author?: string;
};

/** Completed doctoral theses on PURE, keyed by publication poster ID. */
export const publicationThesisMap: Record<string, H2CThesisLink> = {
  "daghagheleh-thermal-plasma": {
    title: "Investigation on thermal plasma pyrolysis of methane for hydrogen gas and solid carbon production",
    url: "https://pure.unileoben.ac.at/en/publications/investigation-on-thermal-plasma-pyrolysis-of-methane-for-hydrogen/",
    author: "Oday Daghagheleh",
  },
  "scheiblehner-molten-catalysts": {
    title: "Investigation of Molten Metals and Alloys as Catalysts for Methane Pyrolysis",
    url: "https://pure.unileoben.ac.at/en/publications/investigation-of-molten-metals-and-alloys-as-catalysts-for-methan/",
    author: "David Scheiblehner",
  },
  "knabl-functionalisation-nanoporous": {
    title: "Pathways Towards the Functionalization of Three-Dimensional Substrates",
    url: "https://pure.unileoben.ac.at/en/publications/pathways-towards-the-functionalization-of-three-dimensional-subst/",
    author: "Florian Knabl",
  },
  "stock-sans-h2": {
    title: "Supercritical Hydrogen Adsorption in Nanoporous Carbons: Understanding Confinement Effects Through Neutron Scattering",
    url: "https://pure.unileoben.ac.at/ws/portalfiles/portal/31781511/AC17502370.pdf",
    author: "Sebastian Stock",
  },
};

export function getPublicationThesisById(publicationId: string): H2CThesisLink | undefined {
  return publicationThesisMap[publicationId];
}
