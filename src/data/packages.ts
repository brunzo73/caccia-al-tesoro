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

export const packages: Package[] = [
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
    slug: "magia-e-fate-in-casa",
    title: "Magia e fate in casa",
    ageRange: "4-6",
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
    ageRange: "6-8",
    location: "Asilo",
    theme: "Spie",
    emoji: "🕶️",
    short: "Agenti segreti in azione per una missione speciale.",
    description:
      "Missione per piccoli agenti segreti con messaggi in codice e prove di squadra, ideale per l'asilo.",
    plot: "Un messaggio top secret è stato diviso in pezzi. Gli agenti devono ricomporlo per salvare la festa!",
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
