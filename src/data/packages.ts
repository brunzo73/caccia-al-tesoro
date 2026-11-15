// Contenuti della landing: unico punto da modificare per testi, prezzi e immagini.

// Nome del brand: cambiando questa riga si aggiorna tutto il sito.
export const brand = {
  name: "MissioneFesta",
  logo: "🎉", // sostituisci con l'URL del logo quando è pronto
};

export type Place = "Casa" | "All'aperto";

export type Package = {
  slug: string;
  title: string;
  ageRange: string;
  place: Place;
  emoji: string;
  short: string;
};

export const ageGroups = [
  { label: "3-4 anni", value: "3-4", emoji: "🐣" },
  { label: "5-7 anni", value: "5-7", emoji: "🌟" },
  { label: "8-10 anni", value: "8-10", emoji: "🔍" },
  { label: "11+ anni", value: "11+", emoji: "🚀" },
];

// 16 avventure: per ogni fascia d'età 2 per la casa e 2 per l'aperto.
export const packages: Package[] = [
  // 3-4 anni
  {
    slug: "cuccioli-da-trovare",
    title: "Cuccioli da trovare",
    ageRange: "3-4",
    place: "Casa",
    emoji: "🐶",
    short: "I cuccioli si sono nascosti ovunque: aiutaci a trovarli!",
  },
  {
    slug: "trenino-scomparso",
    title: "Il trenino scomparso",
    ageRange: "3-4",
    place: "Casa",
    emoji: "🚂",
    short: "Il trenino ha perso i suoi vagoni: ritroviamoli!",
  },
  {
    slug: "animali-del-bosco",
    title: "Animali del bosco",
    ageRange: "3-4",
    place: "All'aperto",
    emoji: "🐸",
    short: "Piccoli esploratori alla ricerca degli amici del bosco.",
  },
  {
    slug: "festa-delle-fate",
    title: "La festa delle fate",
    ageRange: "3-4",
    place: "All'aperto",
    emoji: "🧚",
    short: "Un percorso incantato tra fiori, stelle e bacchette magiche.",
  },
  // 5-7 anni
  {
    slug: "magia-e-fate",
    title: "Magia e fate",
    ageRange: "5-7",
    place: "Casa",
    emoji: "💎",
    short: "Trilli la fatina dispettosa ha rubato le 6 gemme magiche.",
  },
  {
    slug: "missione-spia",
    title: "Missione spia",
    ageRange: "5-7",
    place: "Casa",
    emoji: "🕶️",
    short: "Recupera i 6 dossier segreti rubati dal Professor Misterio.",
  },
  {
    slug: "pirati-del-tesoro",
    title: "Pirati del tesoro",
    ageRange: "5-7",
    place: "All'aperto",
    emoji: "🏴‍☠️",
    short: "Ricomponi la mappa del Capitano e trova il forziere.",
  },
  {
    slug: "dinosauri-in-azione",
    title: "Dinosauri in azione",
    ageRange: "5-7",
    place: "All'aperto",
    emoji: "🦕",
    short: "Ptero il Combinaguai ha rubato le uova: riportale al nido!",
  },
  // 8-10 anni
  {
    slug: "escape-room",
    title: "Escape Room",
    ageRange: "8-10",
    place: "Casa",
    emoji: "🔐",
    short: "6 livelli da sbloccare per battere il Computer Malefico.",
  },
  {
    slug: "scienziati-pazzi",
    title: "Scienziati pazzi",
    ageRange: "8-10",
    place: "Casa",
    emoji: "🧪",
    short: "Recupera le formule segrete mescolate dal Professor Caos.",
  },
  {
    slug: "detective-in-azione",
    title: "Detective in azione",
    ageRange: "8-10",
    place: "All'aperto",
    emoji: "🕵️",
    short: "Un caso da risolvere con indizi, deduzioni e codici.",
  },
  {
    slug: "agenti-segreti",
    title: "Agenti segreti",
    ageRange: "8-10",
    place: "All'aperto",
    emoji: "🔭",
    short: "Missione classificata: recupera i file e smaschera la Talpa.",
  },
  // 11+ anni
  {
    slug: "mystery-party",
    title: "Mystery Party",
    ageRange: "11+",
    place: "Casa",
    emoji: "🔎",
    short: "Chi è il colpevole? Un vero giallo da risolvere insieme.",
  },
  {
    slug: "escape-room-estrema",
    title: "Escape Room estrema",
    ageRange: "11+",
    place: "Casa",
    emoji: "💀",
    short: "Enigmi a più livelli e colpi di scena, per chi vuole la sfida vera.",
  },
  {
    slug: "avventura-fantasy",
    title: "Avventura fantasy",
    ageRange: "11+",
    place: "All'aperto",
    emoji: "⚔️",
    short: "Un'epica missione tra draghi, magie e prove di coraggio.",
  },
  {
    slug: "sopravvivenza-nel-bosco",
    title: "Sopravvivenza nel bosco",
    ageRange: "11+",
    place: "All'aperto",
    emoji: "🌲",
    short: "Prove di orientamento e lavoro di squadra.",
  },
];

export const getPackage = (slug: string) => packages.find((p) => p.slug === slug);
export const packagesByAge = (age: string) => packages.filter((p) => p.ageRange === age);

// ── Offerta ────────────────────────────────────────────────────────────────

export type OfferId = "singolo" | "eta" | "completo";

export type Offer = {
  id: OfferId;
  name: string;
  tagline: string;
  badge?: string;
  featured?: boolean;
  price: number;
  /** Prezzo di confronto reale: somma dei kit singoli inclusi. */
  compareAt?: number;
  compareLabel?: string;
  perUnit?: string;
  description: string;
  includes: string[];
  bonus?: string[];
  cta: string;
};

const SINGLE = 12.9;

export const offers: Offer[] = [
  {
    id: "singolo",
    name: "Kit Singolo",
    tagline: "Salva la Festa",
    price: SINGLE,
    description: "Per chi ha già le idee chiare sul tema e cerca una soluzione rapida.",
    includes: [
      "1 caccia al tesoro completa in PDF",
      "A scelta tra tutti i 16 temi",
      "Diplomi finali inclusi",
    ],
    cta: "Scegli il tuo Kit",
  },
  {
    id: "eta",
    name: "Pack Età 4-in-1",
    tagline: "Zero Imprevisti: Casa + Giardino",
    badge: "Il più scelto",
    featured: true,
    price: 24.9,
    compareAt: SINGLE * 4,
    compareLabel: "4 kit acquistati singolarmente",
    perUnit: "6,23 € a caccia invece di 12,90 €",
    description: "La tranquillità assoluta per la fascia d'età del tuo bambino, a prova di meteo.",
    includes: [
      "Tutti e 4 i kit PDF dell'età scelta",
      "2 avventure per la casa + 2 per parco o giardino",
    ],
    bonus: [
      "Inviti digitali WhatsApp da personalizzare",
      "Checklist organizzativa per merenda e giochi extra",
    ],
    cta: "Sblocca i 4 Kit Età",
  },
  {
    id: "completo",
    name: "Cofanetto Completo",
    tagline: `${brand.name} VIP Pass`,
    badge: "Miglior valore",
    price: 47,
    compareAt: SINGLE * 16,
    compareLabel: "16 kit acquistati singolarmente",
    perUnit: "Meno di 3 € a kit",
    description:
      "Per famiglie con più figli, educatori, o per essere coperti per tutte le feste future.",
    includes: [
      "Tutti i 16 kit PDF, dai 3 agli 11+ anni",
      "Avventure per la casa e per l'aperto in ogni fascia d'età",
      "Nessuna scelta richiesta: un unico archivio",
    ],
    bonus: ["Inviti WhatsApp e checklist organizzativa", "Cartelli segnaposto stampabili"],
    cta: "Prendi Tutti i 16 Kit",
  },
];

export const getOffer = (id: string) => offers.find((o) => o.id === id);
export const euro = (n: number) => `${n.toFixed(2).replace(".", ",")} €`;

// ── Recensioni ─────────────────────────────────────────────────────────────
// Inserisci qui SOLO recensioni vere di clienti reali (con il loro consenso).
// Finché l'elenco è vuoto la sezione non viene mostrata.
// `photo` è facoltativa: una foto inviata dal cliente, es. "/images/recensioni/elena.jpg".

export type Review = { name: string; role?: string; text: string; photo?: string };

export const reviews: Review[] = [];

// ── Foto lifestyle ─────────────────────────────────────────────────────────
// Quando hai le foto, salvale in public/images/foto/ e scrivi qui il percorso
// (es. "/images/foto/stress.jpg"). Finché il valore è null viene mostrata
// un'illustrazione al posto della foto.

export const photos: Record<"stress" | "gioia" | "passo1" | "passo2" | "passo3", string | null> = {
  stress: null, // genitore stanco davanti al computer di sera, fogli sparsi
  gioia: null, // 3-4 bambini che ridono guardando un indizio sul pavimento
  passo1: null, // download su smartphone o laptop
  passo2: null, // mani che ritagliano le carte e compilano il diploma
  passo3: null, // bambini che corrono in giardino verso il tesoro
};

// ── FAQ ────────────────────────────────────────────────────────────────────

export const faqs = [
  {
    q: "Come e quando ricevo i file?",
    a: "Subito dopo il pagamento ricevi un'email con il link per scaricare i PDF. Puoi salvarli e ristamparli tutte le volte che vuoi.",
  },
  {
    q: "Come si stampano i kit?",
    a: "Sono PDF in formato A4 standard, pensati per qualsiasi normale stampante di casa. Se non hai la stampante, basta una copisteria.",
  },
  {
    q: "Cosa serve oltre al PDF?",
    a: "Solo un paio di forbici, una penna per scrivere i nomi sui diplomi e qualche piccolo premio o caramella come tesoro finale.",
  },
  {
    q: "Quanti bambini possono giocare?",
    a: "Da 2 fino a un gruppo numeroso. Si gioca tutti insieme, senza squadre: nessuno perde e alla fine ogni bambino riceve il suo diploma.",
  },
  {
    q: "E se piove?",
    a: "Con il Pack Età 4-in-1 o il Cofanetto Completo hai già le avventure per la casa pronte: sposti tutto in salotto in 5 minuti.",
  },
  {
    q: "Come funziona per i rimborsi e l'assistenza?",
    a: "Trattandosi di file digitali scaricabili all'istante, non è previsto il rimborso dopo il download. Per qualsiasi difficoltà con la stampa o con i file, scrivici: ti rispondiamo via email per aiutarti a far riuscire la festa.",
  },
];
