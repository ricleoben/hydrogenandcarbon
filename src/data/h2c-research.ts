export const researchTracks = [
  "Methane Pyrolysis and Processing of Carbon",
  "Carbon and its applications",
  "Hydrogen Storage and applications",
  "Other routes to hydrogen & general considerations",
] as const;

export type ResearchTrack = (typeof researchTracks)[number];

export type H2CResearchItem = {
  id: string;
  track: ResearchTrack;
  title: string;
  candidate: string;
  chair: string;
  start: string;
  end: string;
  summary: string;
  candidateInfo: string;
  supervisors: string[];
  targets: string[];
  milestones: string[];
  workpackages: string[];
  context: string[];
};

export const h2cResearchItems: H2CResearchItem[] = [
  {
    id: "oday-plasma",
    track: "Methane Pyrolysis and Processing of Carbon",
    title: "Development of a Process Concept for Hydrogen and Carbon Black Production via Plasma",
    candidate: "Dipl.-Ing. Oday Daghagheleh",
    chair: "Chair of Ferrous Metallurgy / Chair of Process Technology and Industrial Environmental Protection",
    start: "03/2021",
    end: "02/2024",
    summary:
      "Thermal plasma pyrolysis research for low-CO2 hydrogen and carbon black production with pilot-scale process design.",
    candidateInfo:
      "PhD candidate in Metallurgy at MUL with strong background in process and reactor-related metallurgical research.",
    supervisors: [
      "Univ.-Prof. Markus Lehner",
      "Univ.-Prof. Johannes Schenk",
    ],
    targets: [
      "Understand fundamental principles for H2 and C yield and quality from thermal plasma pyrolysis.",
      "Determine essential data for upscaling the thermal plasma process.",
    ],
    milestones: [
      "Technical specifications for pilot-scale plasma testing facility available.",
      "Fluent flow reactor model available and verified.",
      "Hot commissioning of pilot plant.",
      "Parameter study on plasma stability, product yield, and carbon quality performed.",
      "Essential parameter set for upscaling available.",
    ],
    workpackages: [
      "Investigation of concept and pilot-scale plasma pyrolysis construction.",
      "Modelling and simulation of a plasma reactor.",
      "Experimental parameter studies.",
      "Adjustment of reactor layout and design.",
    ],
    context: [
      "Contribution to hydrogen production from methane pyrolysis with minimal CO2 footprint.",
      "Contribution to scientific understanding of pyrolysis parameters on carbon quality.",
      "Cooperation with simulation and modelling chairs and carbon characterisation partners at MUL.",
    ],
  },
  {
    id: "david-s-alloys",
    track: "Methane Pyrolysis and Processing of Carbon",
    title: "Investigations of Catalytic Alloy Systems for Hydrogen Production via Pyrolysis in Molten Metal Reactors",
    candidate: "Dipl.-Ing. David Scheiblehner",
    chair: "Chair of Nonferrous Metallurgy",
    start: "04/2021",
    end: "03/2024",
    summary:
      "Catalytic alloy development for methane decomposition in molten metal baths with reduced energy demand.",
    candidateInfo: "Metallurgy PhD researcher focused on molten-metal methane pyrolysis and catalyst behavior.",
    supervisors: ["Univ.-Prof. Helmut Antrekowitsch", "Univ.-Prof. Johannes Schenk"],
    targets: [
      "Develop knowledge of metal catalysts for CH4 decomposition in molten metals.",
      "Design alloy compositions for methane pyrolysis with minimal specific energy consumption.",
      "Enable low-CO2 hydrogen production and characterize resulting hydrogen and carbon quality.",
    ],
    milestones: [
      "First selection of feasible alloy systems completed.",
      "Physical properties of relevant alloy systems determined.",
      "Catalytic effect of alloy systems evaluated and compared with simulation.",
    ],
    workpackages: [
      "Literature review of alloy systems for molten bath methane pyrolysis.",
      "Initial experiments with selected alloy systems.",
      "Detailed parameter studies on promising alloys.",
      "Evaluation of process conditions and product quality.",
    ],
    context: [
      "Supports sustainable methane pyrolysis with reduced CO2 footprint and energy demand.",
      "Links atomistic modelling and experimental alloy screening.",
    ],
  },
  {
    id: "david-n-reactors",
    track: "Methane Pyrolysis and Processing of Carbon",
    title: "Technological Process Developments of Molten Metal Reactors for Methane Pyrolysis",
    candidate: "Dipl.-Ing. David Neuschitzer",
    chair: "Chair of Nonferrous Metallurgy",
    start: "03/2021",
    end: "02/2024",
    summary: "Optimization and upscaling of molten metal bubble-column reactors for methane pyrolysis.",
    candidateInfo: "PhD candidate in metallurgy and process engineering with industrial internships in metallurgical systems.",
    supervisors: ["Univ.-Prof. Helmut Antrekowitsch", "Univ.-Prof. Johannes Schenk"],
    targets: [
      "Optimize and upscale existing molten metal bubble column reactors.",
      "Develop continuous carbon discharge and improved gas injection concepts.",
      "Determine effects of process conditions on product quality.",
    ],
    milestones: [
      "Influence of carbon cover layers on process behavior evaluated.",
      "Influence of liquid metal bath height on methane conversion investigated.",
      "Input gas preheating and bottom gas injection implemented.",
    ],
    workpackages: [
      "Optimization of 0.25 dm3 reactor.",
      "Upscaling to 1.5 dm3 and experimental studies.",
      "Upscaling to 3 dm3 and experimental studies.",
      "FTIR-based product gas analysis.",
    ],
    context: [
      "Contributes to methane pyrolysis scale-up for sustainable hydrogen and carbon production.",
      "Supports carbon and gas characterization collaboration across MUL chairs.",
    ],
  },
  {
    id: "hanna-bubble-columns",
    track: "Methane Pyrolysis and Processing of Carbon",
    title: "Reactor and Process Design for Hydrogen Production in Liquid Metal Bubble Columns",
    candidate: "Dipl.-Ing. Hanna Weiss",
    chair: "Chair of Process Technology and Industrial Environmental Protection",
    start: "04/2021",
    end: "03/2024",
    summary: "Simulation-driven reactor and process-chain design for hydrogen production in liquid metal reactors.",
    candidateInfo: "PhD researcher in process technology focused on simulation of reactive bubble flows and scale-up.",
    supervisors: ["Ao.Univ.-Prof. Clemens Brand", "Univ.-Prof. Markus Lehner"],
    targets: [
      "Optimize total methane pyrolysis process in liquid metal baths.",
      "Simulate coupled bubble flow and reaction behavior.",
      "Generate fundamental scale-up knowledge for bubble-column reactors.",
    ],
    milestones: [
      "Reactor model validated for temperature profile and methane conversion.",
      "Upscaling of reactor design and process chain completed.",
    ],
    workpackages: [
      "Reactive bubble-flow simulation and literature review.",
      "COMSOL model establishment and validation.",
      "AspenPlus process-chain simulation for scale-up.",
      "Flow-sheet design for integrated process concept.",
    ],
    context: [
      "Provides simulation support for upscaling and process balancing.",
      "Contributes to industrially relevant methane pyrolysis process design.",
    ],
  },
  {
    id: "gerald-processing-carbon",
    track: "Methane Pyrolysis and Processing of Carbon",
    title: "Processing of Carbon from Methane Pyrolysis",
    candidate: "Dipl.-Ing. Gerald Hartig",
    chair: "Chair of Mineral Processing",
    start: "05/2021",
    end: "04/2024",
    summary: "Processing routes and quality engineering of pyrolytic carbon for marketable applications.",
    candidateInfo: "Mineral processing researcher with focus on carbon beneficiation, surface control, and product valorization.",
    supervisors: ["Univ.-Prof. Helmut Flachberger", "Univ.-Prof. Thomas Prohaska"],
    targets: [
      "Characterize pyrolytic carbon with mineral-processing relevant parameters.",
      "Develop technology routes to marketable carbon products.",
      "Establish a database for carbon applications.",
    ],
    milestones: [
      "Flow-sheet design and processing concept determined.",
      "Carbon application database available.",
    ],
    workpackages: [
      "Technology and market screening.",
      "Carbon characterization methodology.",
      "Laboratory beneficiation and quality tailoring.",
      "Application database development.",
    ],
    context: [
      "Supports full carbon valorization from methane pyrolysis toward zero-waste technology.",
    ],
  },
  {
    id: "sebastian-storage-mechanisms",
    track: "Carbon and its applications",
    title: "Basic Mechanisms of Hydrogen Storage in Nanoporous Carbon Materials",
    candidate: "Dipl.-Ing. Sebastian Stock",
    chair: "Institute of Physics",
    start: "07/2021",
    end: "06/2024",
    summary: "Fundamental hydrogen storage mechanisms in nanoporous carbon under low and high pressure.",
    candidateInfo: "Materials scientist specializing in neutron-scattering methods and nanoporous carbon systems.",
    supervisors: ["Univ.-Prof. Christian Mitterer", "Univ.-Prof. Oskar Paris", "Bruno Deme"],
    targets: [
      "Enable gaseous hydrogen storage at low pressure.",
      "Understand pore size and shape effects on storage.",
      "Design nanoporous carbons for maximum storage capacity.",
    ],
    milestones: [
      "Qualitative H2 storage-density understanding vs pore size achieved.",
      "Theoretical local-density model in nanoporous carbon available.",
    ],
    workpackages: [
      "Carbon material characterization and selection.",
      "Low-pressure neutron scattering experiments.",
      "High-pressure neutron scattering experiments.",
      "Inelastic neutron studies and dissemination.",
    ],
    context: [
      "Supports specific hydrogen storage applications through carbon design and characterization.",
    ],
  },
  {
    id: "thomas-leiner-functionalisation",
    track: "Carbon and its applications",
    title: "Interplay between Carbon Structures and their Surface Functionalisation for Improved Hydrogen Storage Capacity",
    candidate: "Dipl.-Ing. Thomas Leiner",
    chair: "Chair of Physical Metallurgy and Metallic Materials",
    start: "08/2021",
    end: "08/2024",
    summary: "Atomistic modelling of geometry and functional groups to optimize storage in nanoporous carbon.",
    candidateInfo: "Materials scientist with simulation focus, working on molecular and atomistic hydrogen storage models.",
    supervisors: ["Priv.-Doz. David Holec", "Assoc. Prof. Peter Puschnig"],
    targets: [
      "Combine quantum and atomistic model tools.",
      "Analyze effects of metals and functional groups on carbon.",
      "Determine geometry for maximum storage capacity.",
    ],
    milestones: [
      "Functional-group selection by simulation established.",
      "Optimal geometry knowledge base for storage capacity available.",
    ],
    workpackages: [
      "Structural molecular mechanics model development.",
      "Simulation with different functional groups.",
      "Geometry-effect studies for nanoporous carbon.",
    ],
    context: [
      "Builds scientific basis for strategic experimental carbon functionalisation design.",
    ],
  },
  {
    id: "florian-nanoporous-functionalisation",
    track: "Carbon and its applications",
    title: "Functionalisation of Nanoporous Carbon for Hydrogen Storage",
    candidate: "Dipl.-Ing. Florian Knabl",
    chair: "Chair of Functional Materials and Materials Systems",
    start: "06/2021",
    end: "05/2024",
    summary: "Process technology and characterization for nanoparticle deposition on carbon for improved H2 storage.",
    candidateInfo: "Materials science PhD candidate focused on plasma-assisted functionalisation and storage performance.",
    supervisors: ["Univ.-Prof. Christian Mitterer", "Univ.-Prof. Oskar Paris"],
    targets: [
      "Enable room-temperature hydrogen storage close to DOE targets.",
      "Develop functionalisation technologies for carbon.",
      "Improve nanoparticle deposition know-how for carbon surfaces.",
    ],
    milestones: [
      "Deposition know-how improved from Cu to Ag to Pt.",
      "Nanoparticle deposition recipes on nanoporous carbon implemented.",
      "Deposition optimized with respect to storage performance.",
    ],
    workpackages: [
      "Plasma-assisted nanoparticle deposition development.",
      "Deposited nanoparticle characterization.",
      "Functionalisation of nanoporous carbon.",
      "Hydrogen storage capacity determination.",
    ],
    context: [
      "Contributes to carbon valorisation and alternative storage concepts for high-tech applications.",
    ],
  },
  {
    id: "lucija-building-carbon",
    track: "Carbon and its applications",
    title: "Functionalised Pyrolytic Carbon for Applications in the Building Industry",
    candidate: "Lucija Pustahija, Mag. Ing. Chem.",
    chair: "Chair of Chemistry of Polymeric Materials",
    start: "10/2021",
    end: "09/2024",
    summary: "Carbon composite development for smart building materials using activated and functionalized pyrolytic carbon.",
    candidateInfo: "Chemical engineering researcher focusing on polymer-carbon systems and application-oriented material design.",
    supervisors: ["Univ.-Prof. Wolfgang Kern", "Univ.-Prof. Christian Mitterer"],
    targets: [
      "Surface activation of pyrolytic carbon.",
      "Functionalization with organic groups (e.g., epoxy).",
      "Preparation and curing of carbon/binder composites.",
      "Validation as added-value building materials.",
    ],
    milestones: [
      "Activation method identified.",
      "Reactive groups attached to carbon surfaces.",
      "Lab-scale composites prepared.",
      "Application demonstrated.",
    ],
    workpackages: [
      "Literature review and work conception.",
      "Oxidative surface activation.",
      "Coupling chemistry on carbon surface.",
      "Composite preparation, curing, and application tests.",
    ],
    context: [
      "Explores large-scale utilization pathways of pyrolytic carbon in building applications.",
    ],
  },
  {
    id: "nadine-pyochar",
    track: "Carbon and its applications",
    title: "Pyo-Char - Characterisation and Application of Carbon from Methane Pyrolysis",
    candidate: "Nadine AbuZahra, MSc",
    chair: "Chair of General and Analytical Chemistry",
    start: "08/2022",
    end: "07/2025",
    summary: "Carbon characterization and agriculture-application modelling with process feedback to pyrolysis.",
    candidateInfo: "Agricultural systems and agroecology specialist focusing on practical validation of carbon application effects.",
    supervisors: ["Priv.-Doz. Markus Puschenreiter", "Univ.-Prof. Thomas Prohaska"],
    targets: [
      "Develop robust characterization methodology for pyrolytic carbon.",
      "Model and evaluate carbon applications in agriculture.",
      "Assess long-term stability in field-relevant systems.",
    ],
    milestones: [
      "Fast and validated carbon characterization method available.",
      "Pyrolysis process conditions optimized for carbon applications.",
      "Quantified application effects for agriculture.",
      "Indicative long-term stability results obtained.",
    ],
    workpackages: [
      "Method development and validation.",
      "Feedback loop from application to process optimization.",
      "Agriculture application effect evaluation.",
      "Isotope-based degradation studies.",
    ],
    context: [
      "Builds applied pathways for high-volume carbon use and links pyrolysis parameters to end-use performance.",
    ],
  },
  {
    id: "matthias-embrittlement",
    track: "Hydrogen Storage and applications",
    title: "Hydrogen Embrittlement at High Pressures",
    candidate: "Dipl.-Ing. Matthias Eichinger",
    chair: "Chair of General and Analytical Chemistry",
    start: "07/2021",
    end: "06/2024",
    summary: "High-pressure hydrogen uptake and embrittlement risk assessment for steels.",
    candidateInfo: "PhD researcher with corrosion and steel-performance focus under severe hydrogen environments.",
    supervisors: ["Ao.Univ.-Prof. Gregor Mori", "Univ.-Prof. Ronald Schnitzer"],
    targets: [
      "Build high-temperature/high-pressure autoclave testing capability.",
      "Determine hydrogen uptake as function of pressure and temperature.",
      "Identify embrittlement thresholds for selected steels.",
    ],
    milestones: [
      "First 1000 bar autoclave tests completed.",
      "Hydrogen uptake curves for carbon and stainless steels determined.",
      "Critical hydrogen content values established.",
    ],
    workpackages: [
      "Laboratory infrastructure build-up and baseline experiments.",
      "Hydrogen uptake evaluation for carbon steel.",
      "Hydrogen uptake evaluation for stainless steel.",
      "Critical embrittlement threshold determination.",
    ],
    context: [
      "Supports safe material selection for automotive and industrial high-pressure hydrogen storage.",
    ],
  },
  {
    id: "sharifian-polymer-storage",
    track: "Hydrogen Storage and applications",
    title: "Development of Novel Chemical Storage Systems for Hydrogen based on Polymers",
    candidate: "Mohammadhossein Sharifian, MSc",
    chair: "Chair of Chemistry of Polymeric Materials",
    start: "01/2022",
    end: "12/2024",
    summary: "Reversible chemical hydrogen storage in functional copolymer systems.",
    candidateInfo: "Polymer scientist with prior R&D leadership in polymer technology and applied chemistry.",
    supervisors: ["Univ.-Prof. Wolfgang Kern", "Ass.Prof. Gisbert Riess", "Univ.-Prof. Gregor Trimmel"],
    targets: [
      "Identify polymer structures suitable for chemical hydrogen storage.",
      "Develop and characterize functional copolymers.",
      "Demonstrate reversible hydrogen uptake and release.",
    ],
    milestones: [
      "Structural motifs identified and validated.",
      "Copolymer synthesis completed.",
      "Uptake/release behavior characterized.",
      "Lab-scale applicability demonstrated.",
    ],
    workpackages: [
      "Literature and motif screening.",
      "Copolymer synthesis and physicochemical characterization.",
      "Hydrogen uptake/release experiments.",
      "Application demonstration.",
    ],
    context: [
      "Contributes to specific hydrogen applications through reversible polymer-based storage media.",
    ],
  },
  {
    id: "jyothsna-low-pressure-tanks",
    track: "Hydrogen Storage and applications",
    title: "Low-pressure Hydrogen Storage Tanks",
    candidate: "Dipl.-Ing. Jyothsna Surisetty",
    chair: "Chair of Polymer Processing",
    start: "07/2021",
    end: "06/2024",
    summary: "Tank material and process development for low-pressure hydrogen storage applications.",
    candidateInfo: "Polymer processing engineer experienced in material development, process optimization, and sensor integration.",
    supervisors: ["Assoc. Prof. Thomas Lucyshyn"],
    targets: [
      "Develop suitable thermoplastics and process concepts for LOHC tanks.",
      "Build and test demo-scale tanks for small mobility systems.",
      "Generate scale-up datasets for larger mobile applications.",
    ],
    milestones: [
      "Suitable thermoplastics selected.",
      "Long-term behavior characterized.",
      "Pilot-scale tank manufactured.",
      "Final product evaluated for scale-up.",
    ],
    workpackages: [
      "Hydrogen input aggregate state selection.",
      "Material development and evaluation.",
      "Tank production process definition.",
      "Final tank testing and validation.",
    ],
    context: [
      "Supports green mobility via scalable low-pressure hydrogen storage concepts.",
    ],
  },
  {
    id: "lukas-hybrid-materials",
    track: "Hydrogen Storage and applications",
    title: "Hydrogen Storage in Porous Metal-Hydride - Polymer Hybrid Materials",
    candidate: "Dipl.-Ing. Lukas Schweiger",
    chair: "Chair of Materials Physics",
    start: "06/2021",
    end: "05/2024",
    summary: "Hybrid porous alloy-polymer systems for stable and recyclable hydrogen storage.",
    candidateInfo: "Chemistry and materials science researcher developing interdisciplinary hydrogen storage materials.",
    supervisors: ["Assoc. Prof. Daniel Kiener", "Univ.-Prof. Juergen Eckert", "Mag. Florian Spieckermann", "Ao.Univ.-Prof. Gregor Mori"],
    targets: [
      "Prepare suitable porous alloy systems for hydrogen storage.",
      "Achieve stable long-term loading/unloading behavior.",
      "Understand sorption behavior for material optimization.",
    ],
    milestones: [
      "Nanoporous metals prepared by HPT.",
      "Polymer infiltration successful.",
      "Fast and stable loading/unloading verified.",
    ],
    workpackages: [
      "Alloy composition optimization (FeTi and HEAs).",
      "Porous structure preparation and stabilization.",
      "Microstructural and functional optimization.",
      "Hydrogen sorption characterization.",
    ],
    context: [
      "Contributes to safe stationary hydrogen storage with a focus on long-term stability and recyclability.",
    ],
  },
  {
    id: "thomas-sammer-cements",
    track: "Hydrogen Storage and applications",
    title: "Fundamental Investigation of Underground Hydrogen Storage with Emphasis on Interactions between Hydrogen and Well Cements",
    candidate: "Dipl.-Ing. Thomas Sammer",
    chair: "Chair of Resource Mineralogy",
    start: "07/2021",
    end: "06/2024",
    summary: "Hydrogen interaction studies with well cements for safe large-scale underground storage.",
    candidateInfo: "Applied geosciences specialist with background in mineralogical and technical geology investigations.",
    supervisors: ["Univ.-Prof. Krishna Ravi", "Univ.-Prof. Johann Raith"],
    targets: [
      "Understand interaction mechanisms of hydrogen with cement systems.",
      "Assess role of porosity, permeability, capillarity, and saturation.",
      "Validate hydrogen-cement interaction behavior experimentally.",
    ],
    milestones: [
      "Methodology for cement characterization established.",
      "Additive effects on cement properties clarified.",
      "Hydrogen interaction effects validated for dry and saturated cements.",
    ],
    workpackages: [
      "Literature and cement-type selection.",
      "Property characterization and additive studies.",
      "Thermodynamic modelling of hydrated cement-hydrogen systems.",
      "Autoclave experiments and saturation influence evaluation.",
    ],
    context: [
      "Supports safe long-term underground hydrogen storage and cross-chair collaboration.",
    ],
  },
  {
    id: "joel-barrier-rocks",
    track: "Hydrogen Storage and applications",
    title: "Barrier Rocks for Hydrogen Storage",
    candidate: "Joel Bensing, MSc",
    chair: "Chair of Petroleum Geology",
    start: "06/2021",
    end: "05/2024",
    summary: "Caprock integrity and geomechanical behavior under hydrogen storage conditions.",
    candidateInfo: "Geologist with extensive field and industry experience in sedimentary systems and subsurface risk contexts.",
    supervisors: ["Priv.-Doz. David Misch", "Univ.-Prof. Reinhard Sachsenhofer", "Assoc. Prof. Daniel Kiener"],
    targets: [
      "Assess textural and geomechanical changes in caprocks.",
      "Evaluate hydrogen-induced processes and storage risks.",
      "Determine implications for reservoir integrity at long-term scale.",
    ],
    milestones: [
      "Benchmark tests for key property determination completed.",
      "Hydrogen treatment methodology for caprock samples developed.",
      "Textural change evaluation for reservoir-like conditions completed.",
    ],
    workpackages: [
      "Comparative analysis of old/new caprock cores.",
      "Microstructural and geomechanical baseline experiments.",
      "Hydrogen treatment under reservoir conditions.",
    ],
    context: [
      "Enables risk-informed design for long-term geological hydrogen storage.",
    ],
  },
  {
    id: "gerald-in-situ-methanation",
    track: "Hydrogen Storage and applications",
    title: "In-situ Methanation of Hydrogen for Renewable Energy Storage",
    candidate: "Dipl.-Ing. Gerald Stiedl",
    chair: "Chair of Reservoir Engineering",
    start: "08/2021",
    end: "07/2024",
    summary: "Lab and reservoir-scale methanation studies for seasonal hydrogen energy storage.",
    candidateInfo: "Materials scientist working on underground hydrogen storage, core flooding, and power-to-gas systems.",
    supervisors: ["Ao.Univ.Prof. Andreas Loibner", "Univ.-Prof. Holger Ott"],
    targets: [
      "Demonstrate hydrogen conversion mechanisms experimentally.",
      "Quantify conversion rates at laboratory scale.",
      "Develop and calibrate operational-scale numerical models.",
    ],
    milestones: [
      "Hydrogen core-flooding equipment commissioned.",
      "Lab-scale conversion data acquired.",
      "Continuum-scale model based on experiments established.",
      "Reservoir-scale sensitivity analysis completed.",
    ],
    workpackages: [
      "Set up hydrogen laboratory infrastructure and core flooding setup.",
      "Lab and reservoir simulation work.",
      "Experimental campaign at lab scale.",
      "Model upscaling and sensitivity studies.",
    ],
    context: [
      "Supports long-term seasonal storage and hydrogen integration in transition energy systems.",
    ],
  },
  {
    id: "patrick-soec",
    track: "Other routes to hydrogen & general considerations",
    title: "Long-Term Stable Solid Oxide Electrolysis Cells for the Efficient Production of Hydrogen",
    candidate: "Dipl.-Ing. Patrick Pretschuh",
    chair: "Chair of Physical Chemistry",
    start: "07/2021",
    end: "06/2024",
    summary: "SOEC material and design optimization for efficient, stable hydrogen production.",
    candidateInfo: "Industrial energy engineering researcher focused on solid oxide electrolysis material chemistry and performance.",
    supervisors: ["Priv.-Doz. Roland Brunner", "Assoc. Prof. Edith Bucher"],
    targets: [
      "Synthesize and characterize novel SOEC anode materials.",
      "Understand material-morphology-electrochemistry relations.",
      "Develop long-term stable, high-performance SOEC design concepts.",
    ],
    milestones: [
      "Electrochemical characterization of first SOEC with novel anode completed.",
      "Comprehensive characterization of novel anode material completed.",
      "Enhanced morphology SOEC characterized.",
      "Improved long-term SOEC performance demonstrated.",
    ],
    workpackages: [
      "Literature review and benchmark characterization.",
      "Anode material synthesis and characterization.",
      "Porous electrode/cell preparation and testing.",
      "Structure-property investigation and design guideline development.",
      "Dissemination and thesis integration.",
    ],
    context: [
      "Contributes to efficient hydrogen production technologies and SOEC deployment pathways.",
    ],
  },
  {
    id: "daniela-hea",
    track: "Other routes to hydrogen & general considerations",
    title: "Nanostructured High Entropy Electrodes for Efficient Water Splitting",
    candidate: "Dipl.-Ing. Daniela Neumueller",
    chair: "Chair of Materials Physics",
    start: "06/2021",
    end: "05/2024",
    summary: "High-entropy electrode design for efficient electrochemical water splitting.",
    candidateInfo: "Advanced materials researcher working on microstructure and chemistry optimization in water-splitting electrodes.",
    supervisors: ["Univ.-Prof. Juergen Eckert", "Dr. Christoph Gammer", "Univ.-Prof. Werner Sitte"],
    targets: [
      "Understand microstructure and chemistry effects on water splitting efficiency.",
      "Optimize HEA composition and production technologies.",
      "Enable upscaling-relevant data generation for electrode systems.",
    ],
    milestones: [
      "HEA electrode preparation route optimized.",
      "Microstructure and chemistry influence evaluated.",
      "Upscaling-relevant dissemination data package available.",
    ],
    workpackages: [
      "HEA composition optimization.",
      "Lab-scale HEA electrode production.",
      "Multi-scale microstructural investigations.",
      "Electrochemical characterization.",
    ],
    context: [
      "Supports efficient hydrogen production from widely available materials.",
    ],
  },
  {
    id: "roberta-supply-chain",
    track: "Other routes to hydrogen & general considerations",
    title: "A Comprehensive Analysis of a Renewable Gases Supply Chain and Estimation of Future Infrastructure Requirements in the Austrian Gas Network",
    candidate: "Dipl.-Ing. Roberta Cvetkovska",
    chair: "Chair of Energy Network Technology",
    start: "05/2021",
    end: "04/2024",
    summary: "System-level hydrogen supply chain and gas infrastructure requirement analysis for Austria.",
    candidateInfo: "Energy systems and sector-coupling researcher focusing on green hydrogen production potentials and transport infrastructure.",
    supervisors: ["Univ.-Prof. Thomas Kienberger", "Univ.-Prof. Markus Lehner"],
    targets: [
      "Map domestic hydrogen production potentials spatially.",
      "Analyze future import routes and infrastructure constraints.",
      "Identify bottlenecks for dedicated hydrogen transport infrastructure.",
    ],
    milestones: [
      "Spatially resolved renewable-energy and demand potentials available.",
      "Site-specific H2 production potentials identified.",
      "Integrated electricity-gas-heat model established.",
      "Gas infrastructure bottlenecks identified.",
    ],
    workpackages: [
      "Methodology and data collection.",
      "Hydrogen production and application scenarios.",
      "Infrastructure model implementation and evaluation.",
      "Gas-network bottleneck validation.",
    ],
    context: [
      "Supports framework conditions for cross-sector energy transition and hydrogen infrastructure planning.",
    ],
  },
];

export function getTrackItems(track: ResearchTrack) {
  return h2cResearchItems.filter((item) => item.track === track);
}

export function getResearchItemById(id: string) {
  return h2cResearchItems.find((item) => item.id === id);
}

export const researchToPublicationMap: Record<string, string> = {
  "oday-plasma": "daghagheleh-thermal-plasma",
  "david-s-alloys": "scheiblehner-molten-catalysts",
  "david-n-reactors": "neuschitzer-bubble-column",
  "hanna-bubble-columns": "weiss-reactor-design",
  "gerald-processing-carbon": "hartig-processing-carbon",
  "sebastian-storage-mechanisms": "stock-sans-h2",
  "thomas-leiner-functionalisation": "leiner-interplay",
  "florian-nanoporous-functionalisation": "knabl-functionalization-nanoporous",
  "lucija-building-carbon": "pustahija-surface-modification",
  "matthias-embrittlement": "eichinger-embrittlement",
  "sharifian-polymer-storage": "sharifian-polymer-carriers",
  "jyothsna-low-pressure-tanks": "surisetty-lohc-hdpe-pok",
  "lukas-hybrid-materials": "schweiger-hybrid-materials",
  "thomas-sammer-cements": "sammer-cements",
  "joel-barrier-rocks": "bensing-seal-rocks",
  "gerald-in-situ-methanation": "stiedl-reactive-transport",
  "patrick-soec": "pretschuh-perovskites",
  "daniela-hea": "neumueller-her-surfaces",
  "roberta-supply-chain": "cvetkovska-multi-energy",
};

export function getRelatedPublicationId(researchId: string): string | undefined {
  return researchToPublicationMap[researchId];
}
