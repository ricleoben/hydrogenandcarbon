import type { Locale } from "@/lib/i18n";

const mosaContent = {
  en: {
    hero: {
      pill: "MOSA",
      title: "MOSA - Montanuni Outdoor Science Activities",
      description:
        "An interactive learning environment at the Research Centre for Hydrogen and Carbon where visitors follow the Energiepfad through six connected stations — from biodiversity meadows to energy labs and carbon innovation.",
    },
    intro: {
      title: "How MOSA turns science into hands-on learning",
      paragraphs: [
        "MOSA is not only a circular-economy information format. It is a guided, station-based learning experience where school groups, educators, and visitors explore how energy, resources, biodiversity, soil health, and carbon applications are connected in real systems.",
        "Installed at the premises of the Research Centre for Hydrogen and Carbon at Montanuniversitaet Leoben, MOSA translates current research into understandable activities that combine demonstration, experimentation, and participation.",
        "The didactic design follows a clear narrative logic: participants move through stations with age-adapted, color-coded modules and interact with real experiments, materials, and landscape elements.",
      ],
    },
    video: {
      sectionLabel: "MOSA Video",
      title: "MOSA related video",
    },
    learningEnvironment: {
      conceptImageAlt: "MOSA concept in practice",
      title: "A real learning environment for primary and secondary students",
      description:
        "MOSA gives primary and lower-secondary school students a structured way to learn through direct experience. Instead of only listening in a classroom, children move through guided stations where they observe, test, discuss, and reflect with trained Ambassadors.",
      bullets: [
        "Age-adapted, color-coded activities for primary and secondary education groups.",
        "Hands-on experiments on energy, resources, biodiversity, and carbon applications.",
        "2 to 4 hour workshop formats that combine action, teamwork, and scientific thinking.",
        "A safe outdoor setting where curiosity grows into understanding and practical skills.",
      ],
    },
    objectives: {
      cards: [
        {
          title: "Explain complex topics simply",
          text: "MOSA turns current research into understandable stories and real examples for different age groups.",
        },
        {
          title: "Create memorable experiences",
          text: "Visitors do not only listen; they experiment, test, discuss, and apply results in a hands-on setting.",
        },
        {
          title: "Build long-term engagement",
          text: "The format encourages participants to share what they learn in schools, families, and communities.",
        },
      ],
    },
    programQuality: {
      sectionLabel: "Program Quality and Learning Standards",
      bullets: [
        "Circular economy topics are communicated through a sequential, color-coded narrative adapted to age groups from primary to secondary school level.",
        "Workshops are led by trained Ambassadors and can be adapted to 2-4 hour formats, depending on the target group.",
        "Mobile teaching and learning materials ensure continuity of educational activities under different weather conditions.",
        "Methods are designed for active interaction and holistic learning, involving observation, experimentation, and multisensory engagement.",
      ],
    },
    energiepfad: {
      sectionLabel: "The Energiepfad — 6 MOSA Stations",
      posterAlt: "MOSA Energiepfad learning path overview",
      intro:
        "MOSA is structured as the Energiepfad — a complete station journey for students, teachers, and the interested public. At each stop, research is made understandable and tangible through hands-on activities on future energy technologies, biodiversity, and carbon applications.",
      stations: [
        {
          title: "Station 1 — Habitat Biodiversity I: Wildflower Meadow",
          text: "In the wildflower meadow, participants examine plants and seeds up close and discover how flowering habitats support biodiversity and resilient landscapes.",
        },
        {
          title: "Station 2 — Circular Pavilion",
          text: "The circular wooden pavilion is a gathering and orientation point where groups are welcomed and introduced to circular resource use along the Energiepfad.",
        },
        {
          title: "Station 3 — Future Lab: Energy and Resources",
          text: "At the Future Lab, participants work together on interactive floor activities that explore future energy technologies and the effective use of resources.",
        },
        {
          title: "Station 4 — Habitat Biodiversity II",
          text: "At the pond and wetland biotope, participants observe aquatic habitats and learn how diverse ecosystems connect to climate-adapted land use.",
        },
        {
          title: "Station 5 — Carbon Innovation Lab I",
          text: "Hands-on laboratory-style activities at outdoor tables where participants experiment with carbon-related materials and applications in a researcher-like format.",
        },
        {
          title: "Station 6 — Carbon Innovation Lab II",
          text: "Field-based carbon innovation, including biochar production at an outdoor kiln, linking practical experiments to real-world carbon applications.",
        },
      ],
    },
    gallery: {
      sectionLabel: "MOSA in Pictures",
      slideCounter: (current: number, total: number) => `Slide ${current} / ${total}`,
      goToSlide: (index: number) => `Go to slide ${index}`,
    },
    photos: [
      {
        src: "/MOSA1.jpeg",
        alt: "MOSA learning station",
        title: "Interactive learning station",
        text: "Participants explore circular economy topics through guided practical tasks.",
      },
      {
        src: "/MOSA%202.jpeg",
        alt: "MOSA participants outdoors",
        title: "Outdoor teamwork",
        text: "School groups collaborate in field-based activities with Ambassador support.",
      },
      {
        src: "/MOSA%206.jpeg",
        alt: "MOSA field activity",
        title: "Experiment and observe",
        text: "Learners test ideas in real environments and discuss visible results.",
      },
      {
        src: "/MOSA%208.jpeg",
        alt: "MOSA workshop format",
        title: "Workshop format in action",
        text: "Hands-on sessions connect science communication with active participation.",
      },
      {
        src: "/MOSA%209.jpeg",
        alt: "MOSA biodiversity element",
        title: "Biodiversity awareness",
        text: "Participants discover how biodiversity links with resilient ecosystems.",
      },
      {
        src: "/MOSA%2014.jpeg",
        alt: "MOSA educational setup",
        title: "Age-adapted learning",
        text: "Tools and methods are tailored to primary and secondary student groups.",
      },
      {
        src: "/MOSA%2016.jpeg",
        alt: "MOSA practical station",
        title: "Research to practice",
        text: "MOSA translates research topics into clear, tangible learning experiences.",
      },
      {
        src: "/MOSA%2018.jpeg",
        alt: "MOSA engagement activity",
        title: "Community engagement",
        text: "Children, educators, and partners build shared understanding together.",
      },
    ],
  },
  de: {
    hero: {
      pill: "MOSA",
      title: "MOSA – Montanuni Outdoor Science Activities",
      description:
        "Eine interaktive Lernumgebung am Forschungszentrum für Wasserstoff und Kohlenstoff, in der Besucherinnen und Besucher den Energiepfad durch sechs miteinander verbundene Stationen erleben – von Biodiversitätswiesen über Energielabore bis hin zu Kohlenstoffinnovation.",
    },
    intro: {
      title: "Wie MOSA Wissenschaft in praxisnahes Lernen verwandelt",
      paragraphs: [
        "MOSA ist mehr als ein Informationsformat zur Kreislaufwirtschaft. Es ist ein geführtes, stationsbasiertes Lernerlebnis, in dem Schulklassen, Pädagoginnen und Pädagogen sowie Besucherinnen und Besucher erkunden, wie Energie, Ressourcen, Biodiversität, Bodengesundheit und Kohlenstoffanwendungen in realen Systemen zusammenhängen.",
        "Am Standort des Forschungszentrums für Wasserstoff und Kohlenstoff der Montanuniversität Leoben übersetzt MOSA aktuelle Forschung in verständliche Aktivitäten, die Demonstration, Experimentieren und Partizipation verbinden.",
        "Das didaktische Konzept folgt einer klaren Erzähllogik: Teilnehmende bewegen sich durch altersgerechte, farbcodierte Module und interagieren mit echten Experimenten, Materialien und Landschaftselementen.",
      ],
    },
    video: {
      sectionLabel: "MOSA-Video",
      title: "MOSA-bezogenes Video",
    },
    learningEnvironment: {
      conceptImageAlt: "MOSA-Konzept in der Praxis",
      title: "Eine echte Lernumgebung für Schülerinnen und Schüler der Primar- und Sekundarstufe",
      description:
        "MOSA bietet Schülerinnen und Schülern der Primar- und Sekundarstufe I einen strukturierten Weg zum Lernen durch unmittelbare Erfahrung. Statt nur im Klassenzimmer zuzuhören, bewegen sich Kinder durch geführte Stationen, an denen sie mit geschulten Ambassadors beobachten, experimentieren, diskutieren und reflektieren.",
      bullets: [
        "Altersgerechte, farbcodierte Aktivitäten für Primar- und Sekundarbildungsgruppen.",
        "Praxisnahe Experimente zu Energie, Ressourcen, Biodiversität und Kohlenstoffanwendungen.",
        "Workshopformate von 2 bis 4 Stunden, die Handeln, Teamarbeit und wissenschaftliches Denken verbinden.",
        "Eine sichere Outdoor-Umgebung, in der Neugier zu Verständnis und praktischen Fähigkeiten wächst.",
      ],
    },
    objectives: {
      cards: [
        {
          title: "Komplexe Themen verständlich erklären",
          text: "MOSA übersetzt aktuelle Forschung in verständliche Geschichten und greifbare Beispiele für verschiedene Altersgruppen.",
        },
        {
          title: "Bleibende Erlebnisse schaffen",
          text: "Besucherinnen und Besucher hören nicht nur zu – sie experimentieren, testen, diskutieren und wenden Ergebnisse in einer praxisnahen Umgebung an.",
        },
        {
          title: "Langfristiges Engagement fördern",
          text: "Das Format ermutigt Teilnehmende, ihr Gelerntes in Schulen, Familien und Gemeinschaften weiterzugeben.",
        },
      ],
    },
    programQuality: {
      sectionLabel: "Programmqualität und Lernstandards",
      bullets: [
        "Themen der Kreislaufwirtschaft werden durch eine sequenzielle, farbcodierte Erzählung vermittelt, die an Altersgruppen von der Primar- bis zur Sekundarstufe angepasst ist.",
        "Workshops werden von geschulten Ambassadors geleitet und können je nach Zielgruppe auf Formate von 2 bis 4 Stunden angepasst werden.",
        "Mobile Lehr- und Lernmaterialien gewährleisten die Kontinuität der Bildungsaktivitäten unter unterschiedlichen Wetterbedingungen.",
        "Die Methoden sind auf aktive Interaktion und ganzheitliches Lernen ausgelegt – mit Beobachtung, Experimentieren und multisensorischer Einbindung.",
      ],
    },
    energiepfad: {
      sectionLabel: "Der Energiepfad – 6 MOSA-Stationen",
      posterAlt: "Übersicht des MOSA-Energiepfads",
      intro:
        "MOSA ist als Energiepfad strukturiert – eine vollständige Stationsreise für Schülerinnen und Schüler, Lehrkräfte und die interessierte Öffentlichkeit. An jedem Stopp wird Forschung durch praxisnahe Aktivitäten zu zukünftigen Energietechnologien, Biodiversität und Kohlenstoffanwendungen verständlich und greifbar gemacht.",
      stations: [
        {
          title: "Station 1 – Lebensraum Biodiversität I: Blumenwiese",
          text: "Auf der Blumenwiese untersuchen Teilnehmende Pflanzen und Samen aus der Nähe und entdecken, wie blühende Lebensräume Biodiversität und resiliente Landschaften unterstützen.",
        },
        {
          title: "Station 2 – Circular Pavilion",
          text: "Der kreisförmige Holzpavillon ist ein Treff- und Orientierungspunkt, an dem Gruppen willkommen geheißen und in den kreislauforientierten Ressourceneinsatz entlang des Energiepfads eingeführt werden.",
        },
        {
          title: "Station 3 – Future Lab: Energie und Ressourcen",
          text: "Im Future Lab arbeiten Teilnehmende gemeinsam an interaktiven Bodenaktivitäten, die zukünftige Energietechnologien und die effektive Nutzung von Ressourcen erkunden.",
        },
        {
          title: "Station 4 – Lebensraum Biodiversität II",
          text: "Am Teich- und Feuchtbiotop beobachten Teilnehmende aquatische Lebensräume und lernen, wie vielfältige Ökosysteme mit klimagerechter Landnutzung zusammenhängen.",
        },
        {
          title: "Station 5 – Carbon Innovation Lab I",
          text: "Praxisnahe Laboraktivitäten an Outdoor-Tischen, an denen Teilnehmende in einem forschungsnahen Format mit kohlenstoffbezogenen Materialien und Anwendungen experimentieren.",
        },
        {
          title: "Station 6 – Carbon Innovation Lab II",
          text: "Feldnahe Kohlenstoffinnovation, einschließlich Biochar-Herstellung an einem Outdoor-Ofen, die praktische Experimente mit realen Kohlenstoffanwendungen verbindet.",
        },
      ],
    },
    gallery: {
      sectionLabel: "MOSA in Bildern",
      slideCounter: (current: number, total: number) => `Folie ${current} / ${total}`,
      goToSlide: (index: number) => `Zu Folie ${index} wechseln`,
    },
    photos: [
      {
        src: "/MOSA1.jpeg",
        alt: "MOSA-Lernstation",
        title: "Interaktive Lernstation",
        text: "Teilnehmende erkunden Themen der Kreislaufwirtschaft durch geführte praktische Aufgaben.",
      },
      {
        src: "/MOSA%202.jpeg",
        alt: "MOSA-Teilnehmende im Freien",
        title: "Teamarbeit im Freien",
        text: "Schulklassen arbeiten in feldnahen Aktivitäten mit Unterstützung der Ambassadors zusammen.",
      },
      {
        src: "/MOSA%206.jpeg",
        alt: "MOSA-Feldaktivität",
        title: "Experimentieren und Beobachten",
        text: "Lernende testen Ideen in realen Umgebungen und besprechen sichtbare Ergebnisse.",
      },
      {
        src: "/MOSA%208.jpeg",
        alt: "MOSA-Workshopformat",
        title: "Workshopformat in Aktion",
        text: "Praxisnahe Sessions verbinden Wissenschaftskommunikation mit aktiver Partizipation.",
      },
      {
        src: "/MOSA%209.jpeg",
        alt: "MOSA-Biodiversitätselement",
        title: "Biodiversitätsbewusstsein",
        text: "Teilnehmende entdecken, wie Biodiversität mit resilienten Ökosystemen zusammenhängt.",
      },
      {
        src: "/MOSA%2014.jpeg",
        alt: "MOSA-Bildungsaufbau",
        title: "Altersgerechtes Lernen",
        text: "Werkzeuge und Methoden sind auf Primar- und Sekundarschülergruppen zugeschnitten.",
      },
      {
        src: "/MOSA%2016.jpeg",
        alt: "MOSA-Praxisstation",
        title: "Von der Forschung in die Praxis",
        text: "MOSA übersetzt Forschungsthemen in klare, greifbare Lernerlebnisse.",
      },
      {
        src: "/MOSA%2018.jpeg",
        alt: "MOSA-Engagement-Aktivität",
        title: "Engagement in der Gemeinschaft",
        text: "Kinder, Pädagoginnen und Pädagogen sowie Partner entwickeln gemeinsam ein geteiltes Verständnis.",
      },
    ],
  },
} as const;

export function getMosaTranslations(locale: Locale) {
  return mosaContent[locale];
}
