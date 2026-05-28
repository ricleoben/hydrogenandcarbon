import type { Locale } from "@/lib/i18n";

const safeContent = {
  en: {
    hero: {
      pill: "SAFE",
      title: "SAFE - Sustainable Agriculture and Forestry Experienced",
      description:
        "A transdisciplinary platform that connects research, education, and practice for climate adaptation, healthy soils, and sustainable resource use.",
    },
    whyMatters: {
      title: "Why SAFE matters",
      overviewImageAlt: "SAFE transdisciplinary overview",
      paragraph1:
        "SAFE serves as a bridge between research and practice. It makes technologies and strategies for effective resource use more tangible through participatory education, applied research, and hands-on public engagement.",
      euMissionsPrefix: "The initiative responds directly to the EU Missions",
      healthySoils: "Healthy Soils",
      and: "and",
      climateChangeAdaptation: "Climate Change Adaptation",
      paragraph2:
        "Led by Montanuniversitaet Leoben, SAFE brings together partners from education, research, industry, and civil society to address climate-resilient energy systems, sustainable land and forestry management, and industrial transformation pathways.",
      calloutLabel: "From awareness to action",
      calloutText:
        "Through workshops and participatory projects, SAFE empowers participants from citizens to farmers to become contributors to climate-friendly transformation. The project demonstrates how science and society can co-create practical, forward-looking solutions for a sustainable, resilient, and economically stable Europe.",
    },
    coreObjectives: {
      sectionLabel: "Core Objectives",
      cards: [
        {
          title: "Research and Education",
          text: "Practice-oriented research, teaching, and public learning formats for all age groups in the thematic fields of Healthy Soils and Climate Change Adaptation.",
        },
        {
          title: "Transdisciplinary Exchange",
          text: "Network-building and knowledge transfer among academia, industry, schools, and citizens to strengthen transformative participation and visibility.",
        },
        {
          title: "Knowledge Transfer",
          text: "Active exchange through participatory methods, with SAFE acting as a regional beacon and interface between science and implementation.",
        },
      ],
    },
    livingLab: {
      sectionLabel: "Living Lab Concept",
      paragraph1:
        "SAFE is implemented on a dynamic 1.5-hectare site near Leoben. The area has a dual function: it supports research and educational initiatives for effective resource use, and it operates as an immersive public experience space in the format of a Living Lab.",
      paragraph2:
        "Do-it Labs for students of Montanuniversitaet Leoben combine theory with practice through interactive learning. For visitors of all ages, the site offers stations that demonstrate climate adaptation, soil protection, and sustainable land and forestry management in a concrete, hands-on format.",
      cards: [
        {
          title: "Forest of the Future",
          text: "Demonstrates how forests can adapt to climate challenges while preserving their role as long-term carbon sinks.",
        },
        {
          title: "Interactive soil and biodiversity stations",
          text: "Raised beds, carbon-enriched soil examples, flowering strips, and biotope elements show practical pathways to increase water retention, improve yields, and strengthen ecosystem resilience.",
        },
      ],
    },
    video: {
      sectionLabel: "SAFE Workshop Video",
      unsupported: "Your browser does not support the video tag.",
    },
    gallery: {
      sectionLabel: "SAFE in Pictures",
      slideCounter: (current: number, total: number) => `Slide ${current} / ${total}`,
      goToSlide: (index: number) => `Go to slide ${index}`,
    },
    slides: [
      {
        src: "/SAFE1.jpeg",
        alt: "SAFE activity 1",
        title: "Hands-on learning",
        text: "Participants engage directly with practical stations and field demonstrations.",
      },
      {
        src: "/SAFE2.jpeg",
        alt: "SAFE activity 2",
        title: "Soil and climate awareness",
        text: "SAFE formats explain how healthy soils and adaptation strategies are linked.",
      },
      {
        src: "/SAFE3.jpeg",
        alt: "SAFE activity 3",
        title: "Community participation",
        text: "Schools, families, and local stakeholders collaborate in transdisciplinary activities.",
      },
      {
        src: "/SAFE4.jpeg",
        alt: "SAFE activity 4",
        title: "Living Lab in practice",
        text: "Learning spaces connect scientific insights with everyday implementation pathways.",
      },
      {
        src: "/SAFE5.jpeg",
        alt: "SAFE activity 5",
        title: "Education for all ages",
        text: "Workshops are designed to inspire curiosity across age groups and backgrounds.",
      },
      {
        src: "/SAFE6.jpeg",
        alt: "SAFE activity 6",
        title: "Resource-conscious action",
        text: "Visitors explore practical approaches for sustainable land and forestry management.",
      },
      {
        src: "/SAFE7.jpeg",
        alt: "SAFE activity 7",
        title: "Knowledge transfer",
        text: "SAFE acts as a bridge between research institutions, industry, and society.",
      },
      {
        src: "/SAFE8.jpeg",
        alt: "SAFE activity 8",
        title: "Field-based experimentation",
        text: "Interactive exercises make complex sustainability topics understandable and tangible.",
      },
      {
        src: "/SAFE9.jpeg",
        alt: "SAFE activity 9",
        title: "From awareness to impact",
        text: "Participants are encouraged to bring climate-friendly practices back to their communities.",
      },
    ],
  },
  de: {
    hero: {
      pill: "SAFE",
      title: "SAFE – Nachhaltige Land- und Forstwirtschaft erleben",
      description:
        "Eine transdisziplinäre Plattform, die Forschung, Bildung und Praxis für Klimaanpassung, gesunde Böden und nachhaltige Ressourcennutzung verbindet.",
    },
    whyMatters: {
      title: "Warum SAFE wichtig ist",
      overviewImageAlt: "Transdisziplinäre SAFE-Übersicht",
      paragraph1:
        "SAFE dient als Brücke zwischen Forschung und Praxis. Es macht Technologien und Strategien für eine effektive Ressourcennutzung durch partizipative Bildung, angewandte Forschung und praxisnahe Öffentlichkeitsarbeit greifbar.",
      euMissionsPrefix: "Die Initiative reagiert direkt auf die EU-Missionen",
      healthySoils: "Gesunde Böden",
      and: "und",
      climateChangeAdaptation: "Anpassung an den Klimawandel",
      paragraph2:
        "Unter der Leitung der Montanuniversität Leoben bringt SAFE Partner aus Bildung, Forschung, Industrie und Zivilgesellschaft zusammen, um klimaresiliente Energiesysteme, nachhaltige Land- und Forstwirtschaft sowie industrielle Transformationspfade zu adressieren.",
      calloutLabel: "Vom Bewusstsein zur Handlung",
      calloutText:
        "Durch Workshops und partizipative Projekte befähigt SAFE Teilnehmende – von Bürgerinnen und Bürgern bis zu Landwirtinnen und Landwirten –, aktiv an einer klimafreundlichen Transformation mitzuwirken. Das Projekt zeigt, wie Wissenschaft und Gesellschaft gemeinsam praxisnahe, zukunftsorientierte Lösungen für ein nachhaltiges, resilientes und wirtschaftlich stabiles Europa entwickeln können.",
    },
    coreObjectives: {
      sectionLabel: "Kernziele",
      cards: [
        {
          title: "Forschung und Bildung",
          text: "Praxisorientierte Forschung, Lehre und öffentliche Lernformate für alle Altersgruppen in den Themenfeldern Gesunde Böden und Anpassung an den Klimawandel.",
        },
        {
          title: "Transdisziplinärer Austausch",
          text: "Netzwerkaufbau und Wissenstransfer zwischen Wissenschaft, Industrie, Schulen und Bürgerinnen und Bürgern zur Stärkung transformativer Partizipation und Sichtbarkeit.",
        },
        {
          title: "Wissenstransfer",
          text: "Aktiver Austausch durch partizipative Methoden, wobei SAFE als regionales Leuchtturmprojekt und Schnittstelle zwischen Wissenschaft und Umsetzung fungiert.",
        },
      ],
    },
    livingLab: {
      sectionLabel: "Living-Lab-Konzept",
      paragraph1:
        "SAFE wird auf einem dynamischen 1,5 Hektar großen Gelände in der Nähe von Leoben umgesetzt. Das Areal erfüllt eine Doppelfunktion: Es unterstützt Forschungs- und Bildungsinitiativen für eine effektive Ressourcennutzung und dient zugleich als immersiver Erlebnisraum im Format eines Living Labs.",
      paragraph2:
        "Do-it-Labs für Studierende der Montanuniversität Leoben verbinden Theorie und Praxis durch interaktives Lernen. Besucherinnen und Besucher aller Altersgruppen finden an Stationen greifbare, praxisnahe Beispiele für Klimaanpassung, Bodenschutz sowie nachhaltige Land- und Forstwirtschaft.",
      cards: [
        {
          title: "Wald der Zukunft",
          text: "Zeigt, wie Wälder sich an Klimaveränderungen anpassen können und dabei ihre Rolle als langfristige Kohlenstoffspeicher bewahren.",
        },
        {
          title: "Interaktive Boden- und Biodiversitätsstationen",
          text: "Hochbeete, kohlenstoffangereicherte Bodenbeispiele, Blühstreifen und Biotopelemente veranschaulichen praktische Wege zur Erhöhung der Wasserspeicherung, zur Steigerung der Erträge und zur Stärkung der Ökosystemresilienz.",
        },
      ],
    },
    video: {
      sectionLabel: "SAFE-Workshop-Video",
      unsupported: "Ihr Browser unterstützt das Video-Tag nicht.",
    },
    gallery: {
      sectionLabel: "SAFE in Bildern",
      slideCounter: (current: number, total: number) => `Folie ${current} / ${total}`,
      goToSlide: (index: number) => `Zu Folie ${index} wechseln`,
    },
    slides: [
      {
        src: "/SAFE1.jpeg",
        alt: "SAFE-Aktivität 1",
        title: "Lernen mit allen Sinnen",
        text: "Teilnehmende arbeiten direkt an praktischen Stationen und Felddemonstrationen.",
      },
      {
        src: "/SAFE2.jpeg",
        alt: "SAFE-Aktivität 2",
        title: "Boden- und Klimabewusstsein",
        text: "SAFE-Formate verdeutlichen den Zusammenhang zwischen gesunden Böden und Anpassungsstrategien.",
      },
      {
        src: "/SAFE3.jpeg",
        alt: "SAFE-Aktivität 3",
        title: "Gemeinschaftliche Partizipation",
        text: "Schulen, Familien und lokale Akteure arbeiten in transdisziplinären Aktivitäten zusammen.",
      },
      {
        src: "/SAFE4.jpeg",
        alt: "SAFE-Aktivität 4",
        title: "Living Lab in der Praxis",
        text: "Lernräume verbinden wissenschaftliche Erkenntnisse mit alltäglichen Umsetzungswegen.",
      },
      {
        src: "/SAFE5.jpeg",
        alt: "SAFE-Aktivität 5",
        title: "Bildung für alle Altersgruppen",
        text: "Workshops wecken Neugier über Altersgruppen und Hintergründe hinweg.",
      },
      {
        src: "/SAFE6.jpeg",
        alt: "SAFE-Aktivität 6",
        title: "Ressourcenbewusstes Handeln",
        text: "Besucherinnen und Besucher erkunden praktische Ansätze für nachhaltige Land- und Forstwirtschaft.",
      },
      {
        src: "/SAFE7.jpeg",
        alt: "SAFE-Aktivität 7",
        title: "Wissenstransfer",
        text: "SAFE fungiert als Brücke zwischen Forschungseinrichtungen, Industrie und Gesellschaft.",
      },
      {
        src: "/SAFE8.jpeg",
        alt: "SAFE-Aktivität 8",
        title: "Experimentieren im Freien",
        text: "Interaktive Übungen machen komplexe Nachhaltigkeitsthemen verständlich und greifbar.",
      },
      {
        src: "/SAFE9.jpeg",
        alt: "SAFE-Aktivität 9",
        title: "Vom Bewusstsein zur Wirkung",
        text: "Teilnehmende werden ermutigt, klimafreundliche Praktiken in ihre Gemeinschaften zurückzutragen.",
      },
    ],
  },
} as const;

export function getSafeTranslations(locale: Locale) {
  return safeContent[locale];
}
