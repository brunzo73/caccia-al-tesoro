// Dati finti: unico punto da sostituire con il database.

export const brand = {
  name: "CacciaFesta",
  logo: "🗺️", // sostituisci con un URL immagine o un componente logo
};

export type Tier = {
  id: "base" | "plus" | "premium";
  name: string;
  price: number;
  recommended?: boolean;
  includes: string[];
};

export const tiers: Tier[] = [
  {
    id: "base",
    name: "Base",
    price: 8,
    includes: ["PDF con 8 indizi stampabili", "Istruzioni per l'organizzatore", "Mappa del tesoro"],
  },
  {
    id: "plus",
    name: "Plus",
    price: 14,
    recommended: true,
    includes: [
      "Tutto del Base",
      "Nome del festeggiato negli indizi",
      "12 indizi e giochi extra",
      "Diplomi per i partecipanti",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: 27,
    includes: [
      "Tutto del Plus",
      "Inviti alla festa personalizzati",
      "Decorazioni stampabili a tema",
      "Versione per squadre con punteggi",
    ],
  },
];

export type Package = {
  slug: string;
  title: string;
  ageRange: string;
  location: string;
  theme: string;
  emoji: string;
  short: string;
  description: string;
  plot: string;
};

export const ageGroups = [
  { label: "3-4 anni", value: "3-4", emoji: "🐣" },
  { label: "5-7 anni", value: "5-7", emoji: "🌟" },
  { label: "8-10 anni", value: "8-10", emoji: "🔍" },
  { label: "11+ anni", value: "11+", emoji: "🚀" },
];

export const packages: Package[] = [
  {
    slug: "animali-del-bosco",
    title: "Animali del bosco",
    ageRange: "3-4",
    location: "Casa",
    theme: "Animali",
    emoji: "🐸",
    short: "Piccoli esploratori alla ricerca degli amici del bosco.",
    description:
      "Avventura semplicissima con indizi illustrati e colorati, pensata per i più piccoli che ancora non leggono. Ogni indizio mostra un animale da trovare.",
    plot: "Gli animaletti del bosco si sono nascosti in casa! Aiuta la volpina Lilli a ritrovarli tutti prima della festa.",
  },
  {
    slug: "pirati-in-giardino",
    title: "Pirati in giardino",
    ageRange: "5-7",
    location: "Giardino",
    theme: "Pirati",
    emoji: "🏴‍☠️",
    short: "Una ciurma all'arrembaggio tra cespugli e aiuole.",
    description:
      "Caccia al tesoro piratesca pensata per il giardino: indizi nascosti, enigmi semplici e un forziere finale da trovare.",
    plot: "Il Capitano Barbabuffa ha seppellito il suo tesoro in giardino. Solo la ciurma più coraggiosa potrà ritrovarlo!",
  },
  {
    slug: "magia-e-fate-in-casa",
    title: "Magia e fate in casa",
    ageRange: "5-7",
    location: "Casa",
    theme: "Magia",
    emoji: "🧚",
    short: "Un incantesimo da spezzare stanza dopo stanza.",
    description:
      "Avventura incantata da giocare in casa, con indizi illustrati adatti anche a chi non sa ancora leggere.",
    plot: "La Fata Lucina ha perso la sua bacchetta magica. Aiutiamola a ritrovarla prima del tramonto!",
  },
  {
    slug: "missione-spia-in-asilo",
    title: "Missione spia in asilo",
    ageRange: "5-7",
    location: "Asilo",
    theme: "Spie",
    emoji: "🕶️",
    short: "Agenti segreti in azione per una missione speciale.",
    description:
      "Missione per piccoli agenti segreti con messaggi in codice e prove di squadra, ideale per l'asilo.",
    plot: "Un messaggio top secret è stato diviso in pezzi. Gli agenti devono ricomporlo per salvare la festa!",
  },
  {
    slug: "detective-al-parco",
    title: "Detective al parco",
    ageRange: "8-10",
    location: "Parco",
    theme: "Detective",
    emoji: "🕵️",
    short: "Un mistero da risolvere tra alberi e panchine.",
    description:
      "Un'indagine all'aperto con indizi, codici segreti e deduzioni: perfetta per piccoli investigatori.",
    plot: "La torta della festa è sparita! I detective devono seguire le tracce e scoprire chi l'ha nascosta.",
  },
  {
    slug: "escape-room-casa",
    title: "Escape Room in casa",
    ageRange: "8-10",
    location: "Casa",
    theme: "Escape Room",
    emoji: "🔐",
    short: "Enigmi e lucchetti da risolvere contro il tempo.",
    description:
      "Una vera escape room casalinga con enigmi a catena, codici e lucchetti da aprire. Perfetta per bambini che amano le sfide.",
    plot: "Una strana busta è arrivata a casa: contiene una serie di enigmi da risolvere entro 45 minuti. Riuscirete a farcela?",
  },
  {
    slug: "avventura-fantasy",
    title: "Avventura fantasy",
    ageRange: "11+",
    location: "Parco",
    theme: "Fantasy",
    emoji: "⚔️",
    short: "Un'epica quest tra draghi, magie e prove di coraggio.",
    description:
      "Avventura fantasy per ragazzi con indizi narrativi complessi, prove fisiche e mentali, e una storia a bivi. Consigliata per 6+ partecipanti.",
    plot: "Il regno di Eldoria è minacciato da un drago oscuro. Solo il gruppo che supererà le prove dei Saggi potrà forgiare la spada del destino.",
  },
  {
    slug: "mystery-party",
    title: "Mystery Party",
    ageRange: "11+",
    location: "Casa",
    theme: "Giallo",
    emoji: "🔎",
    short: "Chi è il colpevole? Un vero gioco di ruolo investigativo.",
    description:
      "Un giallo interattivo dove ogni partecipante ha un ruolo e un alibi. Con indizi, false piste e un colpo di scena finale.",
    plot: "Durante la festa qualcuno ha rubato il regalo del festeggiato. Ogni invitato è sospettato. Chi ha il movente?",
  },
];

export const locations = ["Casa", "Giardino", "Asilo", "Parco", "Area all'aperto"];
export const durations = [30, 45, 60];

export const faqs = [
  { q: "Come ricevo la caccia al tesoro?", a: "Dopo il pagamento scarichi subito il PDF pronto da stampare." },
  { q: "Serve preparare molto?", a: "No: bastano 15 minuti per nascondere gli indizi seguendo le istruzioni." },
  { q: "Posso personalizzarla?", a: "Sì, inserisci nome, età, luogo e durata nel configuratore." },
  { q: "Quanti bambini possono giocare?", a: "Da pochi bambini fino a gruppi numerosi divisi in squadre." },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
export const getTier = (id: string) => tiers.find((t) => t.id === id);
