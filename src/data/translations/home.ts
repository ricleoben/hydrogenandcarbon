import type { Locale } from "@/lib/i18n";

type IconName =
  | "person"
  | "group"
  | "target"
  | "coin"
  | "house"
  | "file"
  | "hands"
  | "leaf"
  | "book"
  | "sprout"
  | "thermometer"
  | "cycle"
  | "handshake"
  | "calendar"
  | "hex";

const homeContent = {
  en: {
    hero: {
      pill: "SCoRe A⁺ Hydrogen and Carbon",
      h1Line1: "Advancing Clean Hydrogen and Carbon",
      h1Line2: "for a Climate-Neutral Industry.",
      paragraphStrong1: "To bundle",
      paragraphMiddle:
        "interdisciplinary research from lab to pilot scale — from low-emission hydrogen production and storage to circular carbon applications —",
      paragraphStrong2: "accelerating the transition to a climate-neutral industry.",
    },
    about: {
      eyebrow: "About",
      title: "SCoRe A⁺ Hydrogen and Carbon Center",
      description:
        "Since 2020, Montanuniversität Leoben has bundled interdisciplinary research in the strategic core research area SCoRe A⁺ Hydrogen and Carbon, connecting around 150 researchers from 26 organizational units across the full value chain.",
    },
    strategy: {
      eyebrow: "Strategy",
      title: "Integrated hydrogen and carbon research, from lab to pilot scale.",
      introCards: [
        "Around 150 researchers from 26 organizational units work along the full value chain — from low-emission production and storage to transport, industrial use and circular carbon applications.",
        "The network is strengthened through close partnerships with industry and research institutions, increasing national and international visibility while accelerating practical, scalable solutions.",
        "SCoRe A⁺ is designed as an implementation-oriented platform: scientific excellence, pilot-scale validation and real-world application pathways are developed together to support climate-neutral industry.",
      ],
      overviewImageAlt: "SCoRe A⁺ overview at Montanuniversität Leoben",
      pillars: [
        {
          eyebrow: "Hydrogen pathway",
          title: "Where clean hydrogen creates the most leverage.",
          items: [
            "Selective use in hard-to-electrify sectors such as metallurgy and heavy transport.",
            "Storage and transport research from small mobility tanks to subsurface systems.",
            "Use as feedstock and reducing agent to lower emissions in industrial value chains.",
          ],
        },
        {
          eyebrow: "Carbon co-product",
          title: "Solid carbon treated as a valuable material resource.",
          items: [
            "Application routes in metallurgy, agriculture, building materials and high-tech products.",
            "Carbon loops between industry and agriculture supporting circular economy concepts.",
            "Functionalised carbons engineered for long-term, low-emission material use.",
          ],
        },
        {
          eyebrow: "Why hydrogen and carbon together",
          title: "Two elements, one integrated transformation.",
          items: [
            "Hydrogen addresses hard-to-abate processes where direct electrification is limited.",
            "Carbon is retained as a material resource for industry, agriculture and construction.",
            "The combination supports circular loops instead of one-way emission pathways.",
          ],
        },
      ],
    },
    researchFocus: {
      eyebrow: "Research Focus",
      title: "Four streams, one integrated value chain.",
      description:
        "From low-emission hydrogen production to high-value circular carbon use, every research stream connects to the others — supported by an outdoor education program that brings the science to society.",
      researchCentreImageAlt: "Research Centre for Hydrogen and Carbon",
      coreTechnology: {
        eyebrow: "Core Technology",
        title: "Methane pyrolysis from lab to pilot scale.",
        description:
          "Splitting CH₄ into clean hydrogen and solid carbon without direct CO₂ — the central process innovation connecting all four research streams.",
        items: [
          "Plasma and molten-metal reactor systems",
          "Process modelling and scale-up",
          "Reactor design for continuous operation",
          "Low-CO₂ pathways for industrial H₂ supply",
        ],
      },
      hydrogenStorage: {
        eyebrow: "Hydrogen Storage & Transport",
        title: "Safe and scalable integration.",
        description:
          "Research covering the full spectrum from high-pressure vessel materials to underground storage and pipeline conversion.",
        items: [
          "High-pressure embrittlement studies",
          "Underground caprock and well-cement research",
          "Pipeline repurposing for 100% hydrogen",
          "Mobile and stationary storage materials",
        ],
      },
      carbonApplications: {
        eyebrow: "Carbon Applications",
        title: "Carbon as a circular material resource.",
        description:
          "Solid carbon from methane pyrolysis is treated as a high-value product, not waste — engineered for multiple end-use sectors.",
        items: [
          "Soil amendment and agriculture trials",
          "Functionalised carbons for building materials",
          "Nanoporous carbons for advanced storage",
          "Industrial valorisation routes",
        ],
      },
      educationOutreach: {
        eyebrow: "Education & Outreach",
        title: "Bringing research to schools and society.",
        items: [
          "MOSA (Montanuni Outdoor Science Activities)",
          "SAFE (Science Activities for Everyone) Living Lab",
          "School and educator programs",
          "Collaborative industry formats",
        ],
      },
      mosaImageAlt: "MOSA outdoor science activities",
    },
    keyMetrics: {
      eyebrow: "Key Metrics",
      title: "Facts & Figures",
      subtitle: "Research scale, infrastructure capacity and education impact at Montanuniversität Leoben.",
      metrics: [
        {
          icon: "person" as IconName,
          value: "120+",
          label: "Researchers",
          description: "Active scientists working across the SCoRe A⁺ Hydrogen and Carbon network.",
        },
        {
          icon: "group" as IconName,
          value: "26",
          label: "Chairs",
          description: "Organizational units of Montanuniversität Leoben contributing to the program.",
        },
        {
          icon: "target" as IconName,
          value: "4",
          label: "Focus Areas",
          description: "Research streams from low-emission production to circular carbon applications.",
        },
        {
          icon: "coin" as IconName,
          value: "EUR 28M",
          label: "Investments",
          description: "Cumulative project-related funding committed to the program.",
        },
        {
          icon: "house" as IconName,
          value: "750 m²",
          label: "Research Center",
          description: "New pilot-scale infrastructure in Leoben-Leitendorf opened in autumn 2024.",
        },
        {
          icon: "file" as IconName,
          value: "25",
          label: "PhD Projects",
          description: "Fully self-funded dissertations launched by Montanuniversität Leoben since 2021.",
        },
        {
          icon: "hands" as IconName,
          value: "1 600 m²",
          label: "MOSA outdoor area",
          description: "Teaching and learning environment for hands-on outdoor science activities.",
        },
        {
          icon: "leaf" as IconName,
          value: "1 600",
          label: "Plants at MOSA",
          description: "Climate-resilient species planted within the MOSA living-lab site.",
        },
        {
          icon: "book" as IconName,
          value: "180+",
          label: "Pupils trained",
          description: "School learners reached through MOSA activities since April 2025.",
        },
        {
          icon: "sprout" as IconName,
          value: "400 m²",
          label: "Field experiment",
          description: "Active soil and carbon trial running continuously since 2022.",
        },
        {
          icon: "thermometer" as IconName,
          value: "0 K → 1600 °C",
          label: "Research range",
          description: "From cryogenic hydrogen storage to high-temperature methane pyrolysis.",
        },
        {
          icon: "cycle" as IconName,
          value: "Full chain",
          label: "Value cycle",
          description: "Production, storage, transport, industrial use and recycling combined.",
        },
      ] satisfies Array<{ icon: IconName; value: string; label: string; description: string }>,
      highlights: [
        {
          icon: "handshake" as IconName,
          title: "Cooperation with significant industry partners",
          description:
            "Long-term partnerships with Austrian and international companies across the value chain.",
        },
        {
          icon: "calendar" as IconName,
          title: "Regular collaborative events",
          description:
            "Recurring formats that connect academia, industry and society throughout the year.",
        },
        {
          icon: "hex" as IconName,
          title: "Test plot at MOSA property",
          description: "Living-lab area for hands-on validation of circular carbon and soil concepts.",
        },
      ] satisfies Array<{ icon: IconName; title: string; description: string }>,
    },
    methanePyrolysis: {
      eyebrow: "Methane Pyrolysis",
      title: "Sustainable production of low-carbon hydrogen and high-purity carbon.",
      prose: [
        "Hydrogen is an essential element of the future green energy supply scenario with reduced CO₂ emissions. Carbon contributes to resilient agriculture and sustainable building materials.",
        "Methane pyrolysis can be used to convert natural gas almost emission-free into hydrogen and carbon — no direct CO₂ is generated during the reaction.",
      ],
      callouts: [
        {
          value: "80%+",
          text: "of global energy demand is currently met by fossil fuels (coal, oil and natural gas).",
        },
        {
          value: "CO₂",
          text: "emissions are the main cause of global warming due to the anthropogenic greenhouse effect.",
        },
        {
          value: "→ 0",
          text: "Decarbonisation of fossil fuels can make a significant contribution to a stable, sustainable energy supply while reducing CO₂ emissions.",
        },
      ],
      steps: [
        {
          step: "Step 1 — Input",
          title: "Natural gas and renewable energy",
          description:
            "Natural gas (CH₄) is supplied as feedstock. Regenerative energy drives the process, enabling a low-carbon energy input for the reaction.",
        },
        {
          step: "Step 2 — Reaction",
          title: "Methane pyrolysis",
          description:
            "Methane pyrolysis converts natural gas almost emission-free into hydrogen (H₂) and solid carbon (C). No direct CO₂ is produced during the reaction.",
        },
        {
          step: "Step 3 — Output",
          title: "Hydrogen and carbon pathways",
          description:
            "Hydrogen is used in mobility, homes, agriculture and industry. Solid carbon finds applications in soil enhancement, polymers, building materials, pigments and electronics.",
        },
      ],
      diagramAlt: "Pyrolysis system process diagram",
      sourceLabel: "Source:",
      sourceLinkText: "www.gas.info/…/methan-pyrolyse",
      sourceUrl: "https://www.gas.info/energietraeger-wasserstoff/erzeugung-von-wasserstoff/methan-pyrolyse",
      sourceAdapted: "adapted",
    },
    whyMethanePyrolysis: {
      eyebrow: "Why Methane Pyrolysis",
      title: "A complementary pathway in the hydrogen portfolio.",
      methanePyrolysisBox: {
        title: "Methane Pyrolysis",
        paragraphs: [
          "The thermal decomposition of methane (methane pyrolysis or methane electrolysis) involves splitting CH₄ into gaseous hydrogen and solid carbon.",
          "With the same energy input, pyrolysis can produce around four to five times the amount of hydrogen compared to water electrolysis.",
          "Considering the entire production chain, the CO₂ footprint of both production routes using renewable energy is comparable, approx. 2-3 kg CO₂ / kg H₂.",
        ],
        listItems: [
          "Plasma pyrolysis",
          "Pyrolysis by means of molten metal or salt",
          "Pyrolysis using solid catalysts",
        ],
        diagramAlt: "Methane Pyrolysis comparison diagram",
      },
      pureCarbonBox: {
        title: "Pure Carbon from Pyrolysis",
        paragraphs: [
          "Different carbon modifications are achievable depending on process and process parameters (graphite, graphene, carbon black, carbon tubes).",
          "Carbon represents a valuable second product from an economic and ecological point of view with a wide range of applications.",
        ],
        diagramAlt: "Pure Carbon from Pyrolysis comparison diagram",
      },
    },
    carbonApplicationsSection: {
      eyebrow: "Carbon Applications",
      title: "Carbon as a resource, not a waste stream.",
      description:
        "Solid carbon from methane pyrolysis is engineered for circular use across agriculture, construction and industry — keeping carbon in the material loop instead of releasing it to the atmosphere.",
      agriculture: {
        title: "Carbon in Agriculture",
        paragraphs: [
          "The use of carbon in agriculture has enormous potential to positively influence soils in the context of global climate change. Storing carbon in the soil leads to enhanced soil properties.",
        ],
        advantagesLabel: "The advantages are:",
        items: [
          "Improvement of mechanical, physical and chemical properties",
          "Increasing the water storage capacity",
          "Improvement of soil stability",
          "Reduction of nutrient losses and improved adsorption of organic and inorganic pollutants",
          "Medium and long-term humus build-up results in climate-fit and resilient soils.",
        ],
        closingParagraph:
          "Carbon can also be used as a fertilizer by mixing it with organic residues such as liquid manure, compost and dung or by activating it with soil/microorganisms.",
        imageAlt: "Carbon in agriculture",
      },
      buildingMaterials: {
        title: "Carbon in Building Materials",
        paragraphs: [
          "The annual global production of cement, the most important construction raw material, is around 2 – 4 billion tonnes. The possibility of substituting around 10% of cement with carbon from pyrolysis can be utilised without impairing the properties of the concrete.",
        ],
        advantagesLabel: "Advantages are:",
        items: [
          "Reduction of CO₂ emissions by up to 10% compared to conventional production",
          "Saving on raw materials",
        ],
        closingParagraph:
          "Carbon from pyrolysis (with the strongest possible ordered graphite structure) can also be used as an additive for XPS boards to increase insulation performance (deflection of heat radiation by graphite) and as a raw material in asphalt production.",
        imageAlt: "Carbon in building materials",
      },
      specialApplications: {
        title: "Carbon in Special Applications",
        intro:
          "Carbon from pyrolysis can be used in many other sectors, in addition to agriculture and construction. These include:",
        items: [
          "Use as a raw material in the refractory industry",
          "Rubber and activated carbon products",
          "Use as an additive in lubricants",
          "Additive in inks and pigments",
          "Storage of hydrogen",
          "Reducing agent in casting powders and in carbon electrodes for the metallurgical industry, e.g. steel and aluminium production",
          "High-tech products of electronics and electrical engineering as well as batteries",
          "Carbon nanotubes (CNT) for electronics and mechanical applications",
        ],
      },
    },
  },
  de: {
    hero: {
      pill: "SCoRe A⁺ Hydrogen and Carbon",
      h1Line1: "Sauberen Wasserstoff und Kohlenstoff",
      h1Line2: "für eine klimaneutrale Industrie voranbringen.",
      paragraphStrong1: "Zum Bündeln",
      paragraphMiddle:
        "interdisziplinärer Forschung vom Labor bis zur Pilotanlage — von der emissionsarmen Wasserstoffproduktion und -speicherung bis zu zirkulären Kohlenstoffanwendungen —",
      paragraphStrong2: "beschleunigen wir den Übergang zu einer klimaneutralen Industrie.",
    },
    about: {
      eyebrow: "Über uns",
      title: "SCoRe A⁺ Zentrum für Wasserstoff und Kohlenstoff",
      description:
        "Seit 2020 bündelt die Montanuniversität Leoben interdisziplinäre Forschung im strategischen Kernforschungsbereich SCoRe A⁺ Hydrogen and Carbon und vernetzt rund 150 Forschende aus 26 Organisationseinheiten entlang der gesamten Wertschöpfungskette.",
    },
    strategy: {
      eyebrow: "Strategie",
      title: "Integrierte Wasserstoff- und Kohlenstoffforschung — vom Labor bis zur Pilotanlage.",
      introCards: [
        "Rund 150 Forschende aus 26 Organisationseinheiten arbeiten entlang der gesamten Wertschöpfungskette — von emissionsarmer Produktion und Speicherung über Transport und industrielle Nutzung bis zu zirkulären Kohlenstoffanwendungen.",
        "Das Netzwerk wird durch enge Partnerschaften mit Industrie und Forschungseinrichtungen gestärkt, was die nationale und internationale Sichtbarkeit erhöht und praktische, skalierbare Lösungen beschleunigt.",
        "SCoRe A⁺ ist als implementierungsorientierte Plattform konzipiert: Wissenschaftliche Exzellenz, Validierung im Pilotmaßstab und anwendungsnahe Umsetzungswege werden gemeinsam entwickelt, um eine klimaneutrale Industrie zu unterstützen.",
      ],
      overviewImageAlt: "SCoRe A⁺ Überblick an der Montanuniversität Leoben",
      pillars: [
        {
          eyebrow: "Wasserstoffpfad",
          title: "Wo sauberer Wasserstoff den größten Hebel bietet.",
          items: [
            "Gezielter Einsatz in schwer zu elektrifizierenden Sektoren wie Metallurgie und Schwertransport.",
            "Forschung zu Speicherung und Transport — von mobilen Tanks bis zu unterirdischen Systemen.",
            "Einsatz als Rohstoff und Reduktionsmittel zur Senkung von Emissionen in industriellen Wertschöpfungsketten.",
          ],
        },
        {
          eyebrow: "Kohlenstoff-Nebenprodukt",
          title: "Fester Kohlenstoff als wertvolle Materialressource.",
          items: [
            "Anwendungswege in Metallurgie, Landwirtschaft, Baustoffen und Hightech-Produkten.",
            "Kohlenstoffkreisläufe zwischen Industrie und Landwirtschaft als Grundlage zirkulärer Wirtschaftskonzepte.",
            "Funktionalisierte Kohlenstoffe für langfristige, emissionsarme Materialnutzung.",
          ],
        },
        {
          eyebrow: "Warum Wasserstoff und Kohlenstoff gemeinsam",
          title: "Zwei Elemente, eine integrierte Transformation.",
          items: [
            "Wasserstoff adressiert schwer reduzierbare Prozesse, in denen direkte Elektrifizierung begrenzt ist.",
            "Kohlenstoff bleibt als Materialressource für Industrie, Landwirtschaft und Bauwesen erhalten.",
            "Die Kombination unterstützt zirkuläre Kreisläufe statt einseitiger Emissionspfade.",
          ],
        },
      ],
    },
    researchFocus: {
      eyebrow: "Forschungsschwerpunkte",
      title: "Vier Stränge, eine integrierte Wertschöpfungskette.",
      description:
        "Von der emissionsarmen Wasserstoffproduktion bis zur hochwertigen zirkulären Kohlenstoffnutzung — jeder Forschungsstrang ist mit den anderen verbunden, unterstützt durch ein Outdoor-Bildungsprogramm, das die Wissenschaft in die Gesellschaft trägt.",
      researchCentreImageAlt: "Forschungszentrum für Wasserstoff und Kohlenstoff",
      coreTechnology: {
        eyebrow: "Kerntechnologie",
        title: "Methanpyrolyse vom Labor bis zur Pilotanlage.",
        description:
          "Spaltung von CH₄ in sauberen Wasserstoff und festen Kohlenstoff ohne direktes CO₂ — die zentrale Prozessinnovation, die alle vier Forschungsstränge verbindet.",
        items: [
          "Plasma- und Schmelzmetall-Reaktorsysteme",
          "Prozessmodellierung und Scale-up",
          "Reaktordesign für kontinuierlichen Betrieb",
          "CO₂-arme Wege für die industrielle H₂-Versorgung",
        ],
      },
      hydrogenStorage: {
        eyebrow: "Wasserstoffspeicherung & Transport",
        title: "Sichere und skalierbare Integration.",
        description:
          "Forschung entlang des gesamten Spektrums — von Hochdruckbehältermaterialien über unterirdische Speicherung bis zur Umrüstung von Pipeline-Netzen.",
        items: [
          "Studien zur Versprödung unter Hochdruck",
          "Deckgestein & Zementierung für Untergrundspeicher",
          "Pipeline-Umrüstung für 100 % Wasserstoff",
          "Materialien für mobile und stationäre Speicherung",
        ],
      },
      carbonApplications: {
        eyebrow: "Kohlenstoffanwendungen",
        title: "Kohlenstoff als zirkuläre Materialressource.",
        description:
          "Fester Kohlenstoff aus der Methanpyrolyse wird als hochwertiges Produkt behandelt, nicht als Abfall — entwickelt für vielfältige Endanwendungssektoren.",
        items: [
          "Bodenverbesserung und landwirtschaftliche Versuche",
          "Funktionalisierte Kohlenstoffe für Baustoffe",
          "Nanoporöse Kohlenstoffe für fortgeschrittene Speicherung",
          "Industrielle Verwertungswege",
        ],
      },
      educationOutreach: {
        eyebrow: "Bildung & Outreach",
        title: "Forschung in Schulen und Gesellschaft bringen.",
        items: [
          "MOSA (Montanuni Outdoor Science Activities)",
          "SAFE Living Lab",
          "Programme für Schulen & Lehrkräfte",
          "Kooperation mit der Industrie",
        ],
      },
      mosaImageAlt: "MOSA Outdoor-Wissenschaftsaktivitäten",
    },
    keyMetrics: {
      eyebrow: "Kennzahlen",
      title: "Fakten & Zahlen",
      subtitle:
        "Forschungsumfang, Infrastrukturkapazität und Bildungswirkung an der Montanuniversität Leoben.",
      metrics: [
        {
          icon: "person" as IconName,
          value: "120+",
          label: "Forschende",
          description: "Aktive Wissenschaftlerinnen und Wissenschaftler im SCoRe A⁺ Hydrogen and Carbon Netzwerk.",
        },
        {
          icon: "group" as IconName,
          value: "26",
          label: "Lehrstühle",
          description: "Organisationseinheiten der Montanuniversität Leoben, die zum Programm beitragen.",
        },
        {
          icon: "target" as IconName,
          value: "4",
          label: "Schwerpunkte",
          description: "Forschungsstränge von emissionsarmer Produktion bis zu zirkulären Kohlenstoffanwendungen.",
        },
        {
          icon: "coin" as IconName,
          value: "EUR 28M",
          label: "Investitionen",
          description: "Kumulierte projektbezogene Fördermittel für das Programm.",
        },
        {
          icon: "house" as IconName,
          value: "750 m²",
          label: "Forschungszentrum",
          description: "Neue Pilotinfrastruktur in Leoben-Leitendorf, eröffnet im Herbst 2024.",
        },
        {
          icon: "file" as IconName,
          value: "25",
          label: "Dissertationsprojekte",
          description: "Vollständig selbst finanzierte Dissertationen der Montanuniversität Leoben seit 2021.",
        },
        {
          icon: "hands" as IconName,
          value: "1 600 m²",
          label: "MOSA-Außenfläche",
          description: "Lehr- und Lernumgebung für praxisnahe Outdoor-Wissenschaftsaktivitäten.",
        },
        {
          icon: "leaf" as IconName,
          value: "1 600",
          label: "Pflanzen bei MOSA",
          description: "Klimaresiliente Arten auf dem MOSA-Living-Lab-Gelände.",
        },
        {
          icon: "book" as IconName,
          value: "180+",
          label: "Ausgebildete Schülerinnen und Schüler",
          description: "Schülerinnen und Schüler erreicht durch MOSA-Aktivitäten seit April 2025.",
        },
        {
          icon: "sprout" as IconName,
          value: "400 m²",
          label: "Feldversuch",
          description: "Aktiver Boden- und Kohlenstoffversuch, durchgehend seit 2022.",
        },
        {
          icon: "thermometer" as IconName,
          value: "0 K → 1600 °C",
          label: "Forschungsspanne",
          description: "Von kryogener Wasserstoffspeicherung bis zur Hochtemperatur-Methanpyrolyse.",
        },
        {
          icon: "cycle" as IconName,
          value: "Ganze Kette",
          label: "Wertkreislauf",
          description: "Produktion, Speicherung, Transport, industrielle Nutzung und Recycling vereint.",
        },
      ] satisfies Array<{ icon: IconName; value: string; label: string; description: string }>,
      highlights: [
        {
          icon: "handshake" as IconName,
          title: "Zusammenarbeit mit bedeutenden Industriepartnern",
          description:
            "Langfristige Partnerschaften mit österreichischen und internationalen Unternehmen entlang der Wertschöpfungskette.",
        },
        {
          icon: "calendar" as IconName,
          title: "Regelmäßige Kooperationsveranstaltungen",
          description:
            "Wiederkehrende Formate, die Wissenschaft, Industrie und Gesellschaft das ganze Jahr über verbinden.",
        },
        {
          icon: "hex" as IconName,
          title: "Versuchsfläche auf dem MOSA-Gelände",
          description:
            "Living-Lab-Bereich für praxisnahe Validierung zirkulärer Kohlenstoff- und Bodenkonzepte.",
        },
      ] satisfies Array<{ icon: IconName; title: string; description: string }>,
    },
    methanePyrolysis: {
      eyebrow: "Methanpyrolyse",
      title: "Nachhaltige Produktion von kohlenstoffarmem Wasserstoff und hochreinem Kohlenstoff.",
      prose: [
        "Wasserstoff ist ein wesentliches Element des zukünftigen grünen Energieversorgungsszenarios mit reduzierten CO₂-Emissionen. Kohlenstoff trägt zu widerstandsfähiger Landwirtschaft und nachhaltigen Baustoffen bei.",
        "Methanpyrolyse kann Erdgas nahezu emissionsfrei in Wasserstoff und Kohlenstoff umwandeln — bei der Reaktion entsteht kein direktes CO₂.",
      ],
      callouts: [
        {
          value: "80%+",
          text: "des globalen Energiebedarfs werden derzeit durch fossile Brennstoffe (Kohle, Öl und Erdgas) gedeckt.",
        },
        {
          value: "CO₂",
          text: "Emissionen sind die Hauptursache der globalen Erwärmung durch den anthropogenen Treibhauseffekt.",
        },
        {
          value: "→ 0",
          text: "Die Dekarbonisierung fossiler Brennstoffe kann einen wesentlichen Beitrag zu einer stabilen, nachhaltigen Energieversorgung bei gleichzeitiger Senkung der CO₂-Emissionen leisten.",
        },
      ],
      steps: [
        {
          step: "Schritt 1 — Input",
          title: "Erdgas und erneuerbare Energie",
          description:
            "Erdgas (CH₄) wird als Rohstoff zugeführt. Regenerative Energie treibt den Prozess an und ermöglicht einen kohlenstoffarmen Energieeinsatz für die Reaktion.",
        },
        {
          step: "Schritt 2 — Reaktion",
          title: "Methanpyrolyse",
          description:
            "Methanpyrolyse wandelt Erdgas nahezu emissionsfrei in Wasserstoff (H₂) und festen Kohlenstoff (C) um. Bei der Reaktion entsteht kein direktes CO₂.",
        },
        {
          step: "Schritt 3 — Output",
          title: "Wasserstoff- und Kohlenstoffpfade",
          description:
            "Wasserstoff wird in Mobilität, Haushalten, Landwirtschaft und Industrie eingesetzt. Fester Kohlenstoff findet Anwendung in Bodenverbesserung, Polymeren, Baustoffen, Pigmenten und Elektronik.",
        },
      ],
      diagramAlt: "Prozessdiagramm des Pyrolyse-Systems",
      sourceLabel: "Quelle:",
      sourceLinkText: "www.gas.info/…/methan-pyrolyse",
      sourceUrl: "https://www.gas.info/energietraeger-wasserstoff/erzeugung-von-wasserstoff/methan-pyrolyse",
      sourceAdapted: "angepasst",
    },
    whyMethanePyrolysis: {
      eyebrow: "Warum Methanpyrolyse",
      title: "Ein ergänzender Pfad im Wasserstoffportfolio.",
      methanePyrolysisBox: {
        title: "Methanpyrolyse",
        paragraphs: [
          "Die thermische Zersetzung von Methan (Methanpyrolyse oder Methanelektrolyse) spaltet CH₄ in gasförmigen Wasserstoff und festen Kohlenstoff.",
          "Bei gleichem Energieeinsatz kann Pyrolyse etwa vier- bis fünfmal so viel Wasserstoff erzeugen wie Wasserelektrolyse.",
          "Betrachtet man die gesamte Produktionskette, ist der CO₂-Fußabdruck beider Produktionswege mit erneuerbarer Energie vergleichbar, ca. 2–3 kg CO₂ / kg H₂.",
        ],
        listItems: [
          "Plasmapyrolyse",
          "Pyrolyse mittels Schmelzmetall oder Salz",
          "Pyrolyse mit festen Katalysatoren",
        ],
        diagramAlt: "Vergleichsdiagramm Methanpyrolyse",
      },
      pureCarbonBox: {
        title: "Reiner Kohlenstoff aus der Pyrolyse",
        paragraphs: [
          "Je nach Prozess und Prozessparametern sind unterschiedliche Kohlenstoffmodifikationen erreichbar (Graphit, Graphen, Ruß, Kohlenstoffröhren).",
          "Kohlenstoff stellt aus wirtschaftlicher und ökologischer Sicht ein wertvolles Zweitprodukt mit einem breiten Anwendungsspektrum dar.",
        ],
        diagramAlt: "Vergleichsdiagramm reiner Kohlenstoff aus Pyrolyse",
      },
    },
    carbonApplicationsSection: {
      eyebrow: "Kohlenstoffanwendungen",
      title: "Kohlenstoff als Ressource, nicht als Abfallstrom.",
      description:
        "Fester Kohlenstoff aus der Methanpyrolyse wird für zirkuläre Nutzung in Landwirtschaft, Bauwesen und Industrie entwickelt — Kohlenstoff bleibt im Materialkreislauf, statt in die Atmosphäre freigesetzt zu werden.",
      agriculture: {
        title: "Kohlenstoff in der Landwirtschaft",
        paragraphs: [
          "Der Einsatz von Kohlenstoff in der Landwirtschaft birgt enormes Potenzial, Böden im Kontext des globalen Klimawandels positiv zu beeinflussen. Die Speicherung von Kohlenstoff im Boden führt zu verbesserten Bodeneigenschaften.",
        ],
        advantagesLabel: "Die Vorteile sind:",
        items: [
          "Verbesserung mechanischer, physikalischer und chemischer Eigenschaften",
          "Erhöhung der Wasserspeicherkapazität",
          "Verbesserung der Bodenstabilität",
          "Reduktion von Nährstoffverlusten und verbesserte Adsorption organischer und anorganischer Schadstoffe",
          "Mittel- und langfristiger Humusaufbau führt zu klimafitten und resilienten Böden.",
        ],
        closingParagraph:
          "Kohlenstoff kann auch als Dünger eingesetzt werden, indem er mit organischen Reststoffen wie Gülle, Kompost und Mist vermischt oder mit Boden/Mikroorganismen aktiviert wird.",
        imageAlt: "Kohlenstoff in der Landwirtschaft",
      },
      buildingMaterials: {
        title: "Kohlenstoff in Baustoffen",
        paragraphs: [
          "Die jährliche globale Zementproduktion, der wichtigste Baustoffrohstoff, beträgt rund 2–4 Milliarden Tonnen. Etwa 10 % des Zements können durch Kohlenstoff aus der Pyrolyse ersetzt werden, ohne die Betoneigenschaften zu beeinträchtigen.",
        ],
        advantagesLabel: "Vorteile sind:",
        items: [
          "Reduktion der CO₂-Emissionen um bis zu 10 % gegenüber konventioneller Produktion",
          "Einsparung von Rohstoffen",
        ],
        closingParagraph:
          "Kohlenstoff aus der Pyrolyse (mit möglichst geordneter Graphitstruktur) kann auch als Zusatzstoff für XPS-Platten zur Verbesserung der Dämmleistung (Ablenkung von Wärmestrahlung durch Graphit) und als Rohstoff in der Asphaltproduktion eingesetzt werden.",
        imageAlt: "Kohlenstoff in Baustoffen",
      },
      specialApplications: {
        title: "Kohlenstoff in Spezialanwendungen",
        intro:
          "Kohlenstoff aus der Pyrolyse kann neben Landwirtschaft und Bauwesen in vielen weiteren Sektoren eingesetzt werden. Dazu gehören:",
        items: [
          "Einsatz als Rohstoff in der feuerfesten Industrie",
          "Gummi- und Aktivkohleprodukte",
          "Einsatz als Zusatzstoff in Schmierstoffen",
          "Zusatzstoff in Tinten und Pigmenten",
          "Speicherung von Wasserstoff",
          "Reduktionsmittel in Gießpulvern und in Kohlenstoffelektroden für die metallurgische Industrie, z. B. Stahl- und Aluminiumproduktion",
          "Hightech-Produkte der Elektronik und Elektrotechnik sowie Batterien",
          "Kohlenstoffnanoröhren (CNT) für elektronische und mechanische Anwendungen",
        ],
      },
    },
  },
} as const;

export function getHomeTranslations(locale: Locale) {
  return homeContent[locale];
}
