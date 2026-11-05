const fs = require('fs');

const data = {
  it: {
    home: {
      hero: { eyebrow: "Da oltre 40 anni" },
      stats: {
        years_label: "Anni di esperienza",
        supply_chain_label: "Filiera integrata",
        world_title: "Mondo",
        export_label: "Export & consulenza globale",
        countries: "Arabia Saudita, India, Cina, Spagna, Messico."
      },
      products: {
        kicker: "I nostri prodotti",
        campionari_title: "Campionari Tessili",
        campionari_desc: "Books, binder e sistemi espositivi",
        tirelle_title: "Tirelle & Memos",
        tirelle_desc: "Campioni, mazzette e cartelle colori"
      },
      contacts: { kicker: "Inizia un progetto" }
    },
    azienda: {
      paragraphs_top: [
        "Con oltre 40 anni di esperienza, Campionari Sara Group rappresenta un punto di riferimento nell'universo del campionario tessile. La nostra filosofia si fonda su tre pilastri imprescindibili: qualità assoluta, affidabilità costante e puntualità rigorosa in ogni consegna.",
        "Siamo orgogliosi di gestire internamente l'intera filiera produttiva. Dai reparti di confezione e legatoria alla serigrafia, dalla stampa a caldo alla saldatura PVC, fino alla stampa digitale e al nostro ufficio grafico dedicato, ogni fase è monitorata per garantire l'eccellenza."
      ],
      paragraphs_bottom: [
        "Questa struttura integrata ci permette di rispondere con estrema flessibilità alle esigenze del mercato, gestendo con la medesima cura sia piccoli lotti che volumi produttivi importanti, sempre attraverso soluzioni su misura progettate per valorizzare al meglio ogni materiale.",
        "Potrete sempre contare sul supporto di figure dedicate, pronte ad accompagnarvi in ogni fase del progetto e a individuare soluzioni puntuali per ogni vostra esigenza. Dietro a questo servizio vi è una squadra solida e altamente qualificata: abili operai di lunga esperienza, periti tessili, legatori, serigrafi, grafici ed esperti in comunicazione, che operano in sinergia per trasformare ogni richiesta in un risultato concreto, curato in ogni dettaglio.",
        "Per noi, ogni campionario non è semplicemente un prodotto, ma uno strumento strategico capace di esprimere al meglio l'identità e il valore del brand che rappresenta."
      ],
      products_title: "I nostri prodotti",
      view_all: "Vedi tutto"
    },
    how_we_work: {
      highlights: [
        {
          title: "Processo integrato",
          text: "Dal concept al campionario finito, con lavorazioni interne e controllo qualità."
        },
        {
          title: "Tempi e affidabilità",
          text: "Pianificazione, tracciabilità e rispetto rigoroso delle consegne."
        },
        {
          title: "Flessibilità produttiva",
          text: "Gestiamo piccoli lotti e volumi importanti, con soluzioni su misura."
        }
      ]
    }
  },
  en: {
    home: {
      hero: { eyebrow: "Over 40 years" },
      stats: {
        years_label: "Years of experience",
        supply_chain_label: "Integrated supply chain",
        world_title: "World",
        export_label: "Global export & consultancy",
        countries: "Saudi Arabia, India, China, Spain, Mexico."
      },
      products: {
        kicker: "Our products",
        campionari_title: "Textile Sample Books",
        campionari_desc: "Books, binders and display systems",
        tirelle_title: "Hangers & Memos",
        tirelle_desc: "Swatches, bunches and colour cards"
      },
      contacts: { kicker: "Start a project" }
    },
    azienda: {
      paragraphs_top: [
        "With over 40 years of experience, Campionari Sara Group is a benchmark in the textile sampling industry. Our philosophy is built on three essential pillars: absolute quality, constant reliability, and rigorous punctuality in every delivery.",
        "We take pride in managing the entire production chain in-house. From sewing and bookbinding to screen printing, from hot stamping to PVC welding, all the way to digital printing and our dedicated graphic department, every stage is monitored to ensure excellence."
      ],
      paragraphs_bottom: [
        "This integrated structure allows us to respond with extreme flexibility to market demands, handling both small batches and large production volumes with the same care, always through tailored solutions designed to best showcase every material.",
        "You can always count on the support of dedicated professionals, ready to accompany you at every stage of your project and identify precise solutions for every need. Behind this service is a solid and highly qualified team: skilled workers with many years of experience, textile specialists, bookbinders, screen printers, graphic designers and communication experts, all working in synergy to turn every request into a concrete result, crafted in every detail.",
        "For us, every sample book is not simply a product, but a strategic tool capable of best expressing the identity and value of the brand it represents."
      ],
      products_title: "Our Products",
      view_all: "View All"
    },
    how_we_work: {
      highlights: [
        {
          title: "Integrated Process",
          text: "From concept to finished sample, with internal processing and quality control."
        },
        {
          title: "Timing & Reliability",
          text: "Planning, traceability, and rigorous adherence to delivery schedules."
        },
        {
          title: "Production Flexibility",
          text: "We handle small batches and large volumes, with tailored solutions."
        }
      ]
    }
  },
  fr: {
    home: {
      hero: { eyebrow: "Depuis plus de 40 ans" },
      stats: {
        years_label: "Années d'expérience",
        supply_chain_label: "Chaîne d'approvisionnement intégrée",
        world_title: "Monde",
        export_label: "Export & conseil global",
        countries: "Arabie Saoudite, Inde, Chine, Espagne, Mexique."
      },
      products: {
        kicker: "Nos produits",
        campionari_title: "Échantillons Textiles",
        campionari_desc: "Livres, classeurs et systèmes d'exposition",
        tirelle_title: "Cintres & Mémos",
        tirelle_desc: "Échantillons, liasses et nuanciers"
      },
      contacts: { kicker: "Démarrer un projet" }
    },
    azienda: {
      paragraphs_top: [
        "Avec plus de 40 ans d'expérience, Campionari Sara Group est une référence dans l'industrie de l'échantillonnage textile. Notre philosophie repose sur trois piliers essentiels : une qualité absolue, une fiabilité constante et une ponctualité rigoureuse pour chaque livraison.",
        "Nous sommes fiers de gérer l'intégralité de la chaîne de production en interne. De la couture et de la reliure à la sérigraphie, du marquage à chaud à la soudure PVC, jusqu'à l'impression numérique et notre département graphique dédié, chaque étape est contrôlée pour garantir l'excellence."
      ],
      paragraphs_bottom: [
        "Cette structure intégrée nous permet de répondre avec une extrême flexibilité aux demandes du marché, en traitant aussi bien les petits lots que les grands volumes de production avec le même soin, toujours grâce à des solutions sur mesure conçues pour mettre en valeur au mieux chaque matériau.",
        "Vous pourrez toujours compter sur le soutien de professionnels dévoués, prêts à vous accompagner à chaque étape de votre projet et à identifier des solutions précises pour chaque besoin. Derrière ce service, une équipe solide et hautement qualifiée : ouvriers expérimentés, spécialistes du textile, relieurs, sérigraphes, graphistes et experts en communication, œuvrant tous en synergie pour transformer chaque demande en un résultat concret, soigné dans les moindres détails.",
        "Pour nous, chaque catalogue d'échantillons n'est pas simplement un produit, mais un outil stratégique capable d'exprimer au mieux l'identité et la valeur de la marque qu'il représente."
      ],
      products_title: "Nos Produits",
      view_all: "Voir Tout"
    },
    how_we_work: {
      highlights: [
        {
          title: "Processus intégré",
          text: "De la conception à l'échantillon final, avec traitement en interne et contrôle qualité."
        },
        {
          title: "Délais & Fiabilité",
          text: "Planification, traçabilité et respect rigoureux des délais de livraison."
        },
        {
          title: "Flexibilité de production",
          text: "Nous gérons les petites séries et les grands volumes, avec des solutions sur mesure."
        }
      ]
    }
  },
  de: {
    home: {
      hero: { eyebrow: "Seit über 40 Jahren" },
      stats: {
        years_label: "Jahre Erfahrung",
        supply_chain_label: "Integrierte Lieferkette",
        world_title: "Welt",
        export_label: "Globaler Export & Beratung",
        countries: "Saudi-Arabien, Indien, China, Spanien, Mexiko."
      },
      products: {
        kicker: "Unsere Produkte",
        campionari_title: "Textilmusterkollektionen",
        campionari_desc: "Bücher, Ordner und Präsentationssysteme",
        tirelle_title: "Musterbügel & Memos",
        tirelle_desc: "Stoffmuster, Bündel und Farbkarten"
      },
      contacts: { kicker: "Starten Sie ein Projekt" }
    },
    azienda: {
      paragraphs_top: [
        "Mit über 40 Jahren Erfahrung ist die Campionari Sara Group ein Maßstab in der Textilmusterindustrie. Unsere Philosophie basiert auf drei wesentlichen Säulen: absolute Qualität, ständige Zuverlässigkeit und strenge Pünktlichkeit bei jeder Lieferung.",
        "Wir sind stolz darauf, die gesamte Produktionskette im Haus zu verwalten. Von der Näherei und der Buchbinderei bis zum Siebdruck, vom Heißprägen bis zum PVC-Schweißen, bis hin zum Digitaldruck und unserer eigenen Grafikabteilung - jede Phase wird überwacht, um Spitzenqualität zu gewährleisten."
      ],
      paragraphs_bottom: [
        "Diese integrierte Struktur ermöglicht es uns, äußerst flexibel auf die Anforderungen des Marktes zu reagieren und sowohl kleine Chargen als auch große Produktionsmengen mit der gleichen Sorgfalt zu behandeln, immer durch maßgeschneiderte Lösungen, die so gestaltet sind, dass jedes Material bestmöglich präsentiert wird.",
        "Sie können jederzeit auf die Unterstützung engagierter Fachleute zählen, die bereit sind, Sie in jeder Phase Ihres Projekts zu begleiten und präzise Lösungen für jeden Bedarf zu finden. Hinter diesem Service steht ein solides und hochqualifiziertes Team: erfahrene Facharbeiter, Textilfachleute, Buchbinder, Siebdrucker, Grafiker und Kommunikationsexperten, die alle synergetisch zusammenarbeiten, um jede Anfrage in ein konkretes Ergebnis zu verwandeln, das bis ins kleinste Detail ausgearbeitet ist.",
        "Für uns ist jedes Musterbuch nicht einfach nur ein Produkt, sondern ein strategisches Instrument, das in der Lage ist, die Identität und den Wert der Marke, die es repräsentiert, am besten zum Ausdruck zu bringen."
      ],
      products_title: "Unsere Produkte",
      view_all: "Alle ansehen"
    },
    how_we_work: {
      highlights: [
        {
          title: "Integrierter Prozess",
          text: "Vom Konzept bis zum fertigen Muster, mit interner Verarbeitung und Qualitätskontrolle."
        },
        {
          title: "Timing & Zuverlässigkeit",
          text: "Planung, Rückverfolgbarkeit und strenge Einhaltung der Liefertermine."
        },
        {
          title: "Produktion Flexibilität",
          text: "Wir bearbeiten kleine Chargen und große Volumina mit maßgeschneiderten Lösungen."
        }
      ]
    }
  }
};

const langs = ['it', 'en', 'fr', 'de'];
langs.forEach(lang => {
  const path = `./src/dictionaries/${lang}.json`;
  let content = JSON.parse(fs.readFileSync(path, 'utf8'));
  
  // Merge dictionaries
  content.home.hero.eyebrow = data[lang].home.hero.eyebrow;
  content.home.stats = data[lang].home.stats;
  content.home.products = data[lang].home.products;
  content.home.contacts.kicker = data[lang].home.contacts.kicker;
  
  content.azienda.paragraphs_top = data[lang].azienda.paragraphs_top;
  content.azienda.paragraphs_bottom = data[lang].azienda.paragraphs_bottom;
  content.azienda.products_title = data[lang].azienda.products_title;
  content.azienda.view_all = data[lang].azienda.view_all;
  
  content.how_we_work.highlights = data[lang].how_we_work.highlights;
  
  fs.writeFileSync(path, JSON.stringify(content, null, 4));
});
