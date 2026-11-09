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

export const locations = ["Casa", "Giardino", "Parco", "Asilo"];

export const ageGroups = [
  { label: "3-4 anni", value: "3-4", emoji: "🐣" },
  { label: "5-7 anni", value: "5-7", emoji: "🌟" },
  { label: "8-10 anni", value: "8-10", emoji: "🔍" },
  { label: "11+ anni", value: "11+", emoji: "🚀" },
];

export const packages: Package[] = [
  // ── 🐣 3-4 anni ──────────────────────────────────────────────────────────
  {
    slug: "animali-del-bosco",
    title: "Animali del bosco",
    ageRange: "3-4",
    location: "Giardino",
    theme: "Animali",
    emoji: "🐸",
    short: "Piccoli esploratori alla ricerca degli amici del bosco.",
    description: "Avventura semplicissima con indizi illustrati e colorati, pensata per i più piccoli che ancora non leggono. Ogni indizio mostra un animale da trovare.",
    plot: "Gli animaletti del bosco si sono nascosti! Aiuta la volpina Lilli a ritrovarli tutti prima della festa.",
  },
  {
    slug: "cuccioli-da-trovare",
    title: "Cuccioli da trovare",
    ageRange: "3-4",
    location: "Casa",
    theme: "Animali",
    emoji: "🐶",
    short: "I cuccioli si sono nascosti ovunque, aiutaci a trovarli!",
    description: "Caccia tenera e coloratissima con indizi-foto di cuccioli da cercare. Perfetta anche per bambini che non leggono ancora.",
    plot: "I cuccioli della fattoria sono scappati e si sono nascosti in giro! Chi li ritroverà tutti vince una medaglia speciale.",
  },
  {
    slug: "festa-delle-fate",
    title: "La festa delle fate",
    ageRange: "3-4",
    location: "Casa",
    theme: "Magia",
    emoji: "🧚",
    short: "Un percorso incantato tra fiori, stelle e bacchette magiche.",
    description: "Avventura fatata con indizi illustrati pieni di glitter e colori pastello. Ogni tappa svela un dono magico.",
    plot: "La fatina Trilly ha perso i suoi petali magici! Aiutala a ritrovarli tutti prima che arrivi la notte.",
  },
  {
    slug: "trenino-scomparso",
    title: "Il trenino scomparso",
    ageRange: "3-4",
    location: "Asilo",
    theme: "Veicoli",
    emoji: "🚂",
    short: "Il trenino Tuff Tuff ha perso i suoi vagoni, ritroviamoli!",
    description: "Caccia semplicissima a tema treni e veicoli con indizi visivi. Ogni vagone nascosto porta a quello successivo.",
    plot: "Il trenino Tuff Tuff stava portando i regali alla festa, ma i vagoni si sono staccati uno a uno! Aiutalo a raccoglierli tutti.",
  },

  // ── 🌟 5-7 anni ──────────────────────────────────────────────────────────
  {
    slug: "pirati-del-tesoro",
    title: "Pirati del tesoro",
    ageRange: "5-7",
    location: "Giardino",
    theme: "Pirati",
    emoji: "🏴‍☠️",
    short: "Una ciurma all'arrembaggio verso il forziere nascosto.",
    description: "Caccia al tesoro piratesca con indizi nascosti, enigmi semplici e un forziere finale da trovare.",
    plot: "Il Capitano Barbabuffa ha seppellito il suo tesoro! Solo la ciurma più coraggiosa potrà ritrovarlo.",
  },
  {
    slug: "magia-e-fate",
    title: "Magia e fate",
    ageRange: "5-7",
    location: "Casa",
    theme: "Magia",
    emoji: "⭐",
    short: "Un incantesimo da spezzare stanza dopo stanza.",
    description: "Avventura incantata con indizi illustrati adatti anche a chi sa leggere poco. Ogni stanza nasconde un sortilegio da risolvere.",
    plot: "La Fata Lucina ha perso la sua bacchetta magica. Aiutiamola a ritrovarla prima del tramonto!",
  },
  {
    slug: "missione-spia",
    title: "Missione spia",
    ageRange: "5-7",
    location: "Asilo",
    theme: "Spie",
    emoji: "🕶️",
    short: "Agenti segreti in azione per una missione speciale.",
    description: "Missione per piccoli agenti segreti con messaggi in codice semplici e prove di squadra divertenti.",
    plot: "Un messaggio top secret è stato diviso in pezzi. Gli agenti devono ricomporlo per salvare la festa!",
  },
  {
    slug: "dinosauri-in-azione",
    title: "Dinosauri in azione",
    ageRange: "5-7",
    location: "Parco",
    theme: "Dinosauri",
    emoji: "🦕",
    short: "Piccoli paleontologi a caccia di impronte preistoriche.",
    description: "Avventura preistorica con indizi a forma di impronta, uova di dinosauro da trovare e un T-Rex da smascherare.",
    plot: "Le uova dei dinosauri sono sparite! Solo i migliori paleontologi riusciranno a trovarle tutte prima che si schiudano.",
  },

  // ── 🔍 8-10 anni ─────────────────────────────────────────────────────────
  {
    slug: "detective-in-azione",
    title: "Detective in azione",
    ageRange: "8-10",
    location: "Parco",
    theme: "Detective",
    emoji: "🕵️",
    short: "Un mistero da risolvere con indizi, deduzioni e codici.",
    description: "Un'indagine con indizi, codici segreti e deduzioni: perfetta per piccoli investigatori che amano ragionare.",
    plot: "La torta della festa è sparita! I detective devono seguire le tracce e scoprire chi l'ha nascosta.",
  },
  {
    slug: "escape-room",
    title: "Escape Room",
    ageRange: "8-10",
    location: "Casa",
    theme: "Escape Room",
    emoji: "🔐",
    short: "Enigmi a catena da risolvere contro il tempo.",
    description: "Una vera escape room con enigmi a catena, codici e combinazioni da trovare. Perfetta per chi ama le sfide.",
    plot: "Una strana busta è arrivata: contiene enigmi da risolvere entro 45 minuti. Riuscirete a farcela?",
  },
  {
    slug: "agenti-segreti",
    title: "Agenti segreti",
    ageRange: "8-10",
    location: "Giardino",
    theme: "Spie",
    emoji: "🔭",
    short: "Missione classificata: recupera i documenti rubati.",
    description: "Missione da agenti segreti con messaggi in codice Morse, indizi cifrati e una talpa da smascherare nel gruppo.",
    plot: "I documenti segreti dell'Agenzia sono stati rubati durante la festa. Solo il miglior agente sul campo può recuperarli.",
  },
  {
    slug: "scienziati-pazzi",
    title: "Scienziati pazzi",
    ageRange: "8-10",
    location: "Casa",
    theme: "Scienza",
    emoji: "🧪",
    short: "Esperimenti folli e formule segrete da scoprire.",
    description: "Caccia al tesoro a tema scienza con indizi sotto forma di esperimenti da osservare e formule da decodificare.",
    plot: "Il Professor Strambolio ha mescolato tutte le sue formule segrete! Aiutalo a ricostruire la ricetta del suo esperimento più importante.",
  },

  // ── 🚀 11+ anni ──────────────────────────────────────────────────────────
  {
    slug: "avventura-fantasy",
    title: "Avventura fantasy",
    ageRange: "11+",
    location: "Parco",
    theme: "Fantasy",
    emoji: "⚔️",
    short: "Un'epica quest tra draghi, magie e prove di coraggio.",
    description: "Avventura fantasy con indizi narrativi complessi, prove fisiche e mentali, e una storia a bivi. Consigliata per 6+ partecipanti.",
    plot: "Il regno di Eldoria è minacciato da un drago oscuro. Solo chi supererà le prove dei Saggi potrà forgiare la spada del destino.",
  },
  {
    slug: "mystery-party",
    title: "Mystery Party",
    ageRange: "11+",
    location: "Casa",
    theme: "Giallo",
    emoji: "🔎",
    short: "Chi è il colpevole? Un vero gioco di ruolo investigativo.",
    description: "Un giallo interattivo dove ogni partecipante ha un ruolo e un alibi. Con indizi, false piste e un colpo di scena finale.",
    plot: "Durante la festa qualcuno ha rubato il regalo del festeggiato. Ogni invitato è sospettato. Chi ha il movente?",
  },
  {
    slug: "escape-room-estrema",
    title: "Escape Room estrema",
    ageRange: "11+",
    location: "Casa",
    theme: "Escape Room",
    emoji: "💀",
    short: "La versione più difficile: enigmi a più livelli con colpi di scena.",
    description: "Escape room avanzata con enigmi a catena, false piste, stanze bloccate e un finale a sorpresa. Per chi vuole una vera sfida.",
    plot: "Siete rimasti intrappolati nella villa dello scienziato pazzo. Avete 60 minuti per trovare il codice di uscita. Nessuno ci è riuscito prima.",
  },
  {
    slug: "sopravvivenza-nel-bosco",
    title: "Sopravvivenza nel bosco",
    ageRange: "11+",
    location: "Parco",
    theme: "Avventura",
    emoji: "🌲",
    short: "Prove di orientamento, resistenza e lavoro di squadra.",
    description: "Caccia al tesoro da survival con prove fisiche, indizi nascosti e sfide a squadre. Perfetta per chi ama l'avventura vera.",
    plot: "La vostra squadra è dispersa in una zona sconosciuta. Dovete ritrovare i compagni e raccogliere i rifornimenti prima del tramonto.",
  },
];

export const durations = [30, 45, 60];

export const faqs = [
  { q: "Come ricevo la caccia al tesoro?", a: "Dopo il pagamento scarichi subito il PDF pronto da stampare." },
  { q: "Serve preparare molto?", a: "No: bastano 15 minuti per nascondere gli indizi seguendo le istruzioni." },
  { q: "Posso personalizzarla?", a: "Sì, inserisci nome, età, luogo e durata nel configuratore." },
  { q: "Quanti bambini possono giocare?", a: "Da pochi bambini fino a gruppi numerosi divisi in squadre." },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
export const getTier = (id: string) => tiers.find((t) => t.id === id);
