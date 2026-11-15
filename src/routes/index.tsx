import { createFileRoute } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Pricing } from "@/components/Pricing";
import { faqs, photos, reviews } from "@/data/packages";

const TITLE = "Caccia al tesoro pronta in 15 minuti: kit PDF per feste di bambini";
const DESCRIPTION =
  "Kit completi in PDF divisi per età (3-11+ anni), per la casa e per il giardino: scarichi, stampi su A4 e la festa è pronta. Senza animatore.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

const pains = [
  {
    e: "🌙",
    t: "Le serate perse nel fai-da-te",
    d: "Ore su Google e Pinterest a cercare indovinelli sconclusionati, senza una storia che li tenga insieme. E al giorno della festa arrivi già esausta.",
  },
  {
    e: "💸",
    t: "Evitare i costi per l'animazione",
    d: "150-250 € per due ore di animazione, con la solita cassa bluetooth e i soliti giochi. E il dubbio che i bambini non si lascino coinvolgere.",
  },
  {
    e: "🌧️",
    t: "L'ansia del meteo, senza piano B",
    d: "Hai organizzato tutto al parco e il cielo si copre. Dieci bambini chiusi in salotto e nessuna idea di come tenerli occupati.",
  },
];

const steps = [
  {
    e: "📲",
    photo: photos.passo1,
    t: "Scarica il kit",
    d: "Dopo il pagamento ricevi subito il PDF via email, sul telefono o sul computer.",
  },
  {
    e: "✂️",
    photo: photos.passo2,
    t: "Stampa e ritaglia in 10 minuti",
    d: "Basta una normale stampante A4. Poi scrivi a penna il nome del festeggiato sui diplomi: è il tocco che li rende suoi.",
  },
  {
    e: "🗺️",
    photo: photos.passo3,
    t: "Nascondi gli indizi e parti",
    d: "Segui la guida per i nascondigli: tu leggi la storia, i bambini superano le prove e trovano il tesoro.",
  },
];

const contents = [
  {
    img: "/images/kit/dino-guida.jpg",
    t: "Guida per l'organizzatore",
    d: "Lista dei materiali, soluzioni e nascondigli intelligenti: sai sempre cosa fare.",
  },
  {
    img: "/images/kit/dino-storia.jpg",
    t: "Storia a capitoli",
    d: "Da leggere ad alta voce, con un cattivo simpatico che tiene i bambini incollati.",
  },
  {
    img: "/images/kit/fate-carte.jpg",
    t: "6 prove da superare insieme",
    d: "Sfide fisiche e mentali adatte all'età: ogni prova superata sblocca un indizio.",
  },
  {
    img: "/images/kit/pirati-carte.jpg",
    t: "Carte-indizio illustrate",
    d: "A colori, con la linea tratteggiata per ritagliarle in un attimo.",
  },
  {
    img: "/images/kit/dino-diploma.jpg",
    t: "Diplomi finali",
    d: "Uno per ogni partecipante, da compilare a mano e portare a casa.",
  },
];

const reasons = [
  {
    e: "📖",
    t: "Una storia vera, non indovinelli a caso",
    d: "Ogni avventura ha un inizio, un cattivo simpatico e un finale. I bambini vogliono sapere come va a finire.",
  },
  {
    e: "🤝",
    t: "Si gioca tutti insieme",
    d: "Niente squadre e nessun perdente: il gruppo collabora e alla fine ogni bambino riceve il suo diploma.",
  },
  {
    e: "🎯",
    t: "Pensata per la loro età",
    d: "Immagini e gioco di movimento per i più piccoli, enigmi e codici da decifrare per i più grandi.",
  },
];

function Index() {
  return (
    <>
      {/* 1. HERO */}
      <Band className="pt-8 sm:pt-12" confetti>
        <div className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr]">
          <div className="text-center lg:text-left">
            <h1 className="text-balance text-4xl font-extrabold sm:text-5xl">
              Organizza una caccia al tesoro memorabile{" "}
              <span className="text-primary">in 15 minuti</span>, senza spostare un mobile e senza
              spendere nulla per l'animazione
            </h1>
            <p className="mx-auto mt-5 max-w-xl text-lg text-muted-foreground lg:mx-0">
              Kit completi in PDF pronti all'uso, divisi per età (3-11+ anni), sia per la casa che
              per il giardino: scarichi all'istante, stampi in 2 minuti e la festa è pronta.
            </p>
            <a
              href="#pacchetti"
              className="btn mt-7 bg-primary px-8 py-4 text-lg text-primary-foreground"
            >
              Scopri i Pacchetti Festa
            </a>
            <ul className="mt-5 flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm font-bold lg:justify-start">
              <li>⚡ Download istantaneo</li>
              <li>🖨️ Stampi a casa su fogli A4</li>
              <li>🎒 16 avventure dai 3 agli 11+ anni</li>
            </ul>
          </div>
          <HeroMockup />
        </div>
      </Band>

      {/* 2. IL PROBLEMA */}
      <Band tone="muted">
        <Heading kicker="Ti suona familiare?">
          Organizzare la festa non dovrebbe costarti tre serate
        </Heading>
        <div className="mt-10 grid items-center gap-8 lg:grid-cols-[1fr_1.4fr]">
          <Photo
            src={photos.stress}
            emoji="😩"
            caption="Mezzanotte, venti schede aperte"
            tone="dark"
          />
          <ul className="space-y-4">
            {pains.map((p) => (
              <li key={p.t} className="pop flex gap-4 rounded-3xl bg-card p-5">
                <span className="text-4xl" aria-hidden>
                  {p.e}
                </span>
                <div>
                  <h3 className="text-xl font-extrabold">{p.t}</h3>
                  <p className="mt-1 text-muted-foreground">{p.d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Band>

      {/* 3. LA SOLUZIONE IN 3 PASSI */}
      <Band id="come-funziona">
        <div className="grid items-center gap-8 lg:grid-cols-[1.4fr_1fr]">
          <div>
            <Heading kicker="Come funziona" align="left">
              Dal download al tesoro in 3 passi
            </Heading>
            <p className="mt-4 text-lg text-muted-foreground">
              Hai già tutto: la storia, le prove, gli indizi e i diplomi. A te resta solo la parte
              bella.
            </p>
          </div>
          <Photo
            src={photos.gioia}
            emoji="🥳"
            caption="Loro giocano, tu ti godi la festa"
            tone="light"
          />
        </div>
        <ol className="mt-10 grid gap-5 md:grid-cols-3">
          {steps.map((s, i) => (
            <li key={s.t} className="card-fun overflow-hidden">
              {s.photo ? (
                <img
                  src={s.photo}
                  alt=""
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              ) : (
                <div
                  className="flex aspect-[4/3] items-center justify-center bg-accent text-7xl"
                  aria-hidden
                >
                  {s.e}
                </div>
              )}
              <div className="p-5">
                <p className="text-sm font-extrabold uppercase tracking-wide text-primary">
                  Passo {i + 1}
                </p>
                <h3 className="text-2xl font-extrabold">{s.t}</h3>
                <p className="mt-1 text-muted-foreground">{s.d}</p>
              </div>
            </li>
          ))}
        </ol>
      </Band>

      {/* 4. ANTEPRIMA */}
      <Band tone="warm" id="cosa-ricevi">
        <Heading kicker="Pagine vere, dai nostri kit">Cosa c'è dentro ogni kit</Heading>
        <ul className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {contents.map((c) => (
            <li key={c.t} className="min-w-0">
              <img
                src={c.img}
                alt={`Pagina del kit: ${c.t}`}
                loading="lazy"
                className="pop-sm aspect-[1/1.414] w-full rounded-xl object-cover object-top"
              />
              <h3 className="mt-3 text-lg font-extrabold">{c.t}</h3>
              <p className="text-sm text-muted-foreground">{c.d}</p>
            </li>
          ))}
        </ul>
      </Band>

      {/* 5. FIDUCIA: recensioni vere se presenti, altrimenti i motivi per cui funziona */}
      <Band>
        {reviews.length > 0 ? (
          <>
            <Heading kicker="Chi l'ha già provata">Cosa dicono i genitori</Heading>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {reviews.map((r) => (
                <li key={r.name} className="card-fun flex flex-col gap-3 p-5">
                  {r.photo && (
                    <img
                      src={r.photo}
                      alt=""
                      loading="lazy"
                      className="aspect-square w-full -rotate-1 rounded-lg border-8 border-white object-cover shadow-md"
                    />
                  )}
                  <p className="text-amber-500" aria-label="5 stelle su 5">
                    ★★★★★
                  </p>
                  <p className="flex-1">«{r.text}»</p>
                  <p className="font-extrabold">
                    {r.name}
                    {r.role && (
                      <span className="font-semibold text-muted-foreground"> · {r.role}</span>
                    )}
                  </p>
                </li>
              ))}
            </ul>
          </>
        ) : (
          <>
            <Heading kicker="Perché funziona">
              I bambini restano dentro la storia fino al tesoro
            </Heading>
            <ul className="mt-10 grid gap-5 md:grid-cols-3">
              {reasons.map((r) => (
                <li key={r.t} className="card-fun p-6">
                  <span className="text-5xl" aria-hidden>
                    {r.e}
                  </span>
                  <h3 className="mt-3 text-xl font-extrabold">{r.t}</h3>
                  <p className="mt-1 text-muted-foreground">{r.d}</p>
                </li>
              ))}
            </ul>
          </>
        )}
      </Band>

      {/* 6. PRICING */}
      <Band tone="muted" id="pacchetti">
        <Heading kicker="Scegli il tuo pacchetto">
          Una festa riuscita costa meno di una torta
        </Heading>
        <p className="mx-auto mt-3 max-w-xl text-center text-muted-foreground">
          Pagamento unico, download immediato. I file restano tuoi e puoi ristamparli quando vuoi.
        </p>
        <div className="mt-10">
          <Pricing />
        </div>
      </Band>

      {/* 7. FAQ */}
      <Band id="faq">
        <div className="mx-auto max-w-3xl">
          <Heading kicker="Domande frequenti">Tutto quello che ti serve sapere</Heading>
          <div className="mt-8 space-y-3">
            {faqs.map((f) => (
              <details key={f.q} className="pop group rounded-2xl bg-card px-5 py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-extrabold">
                  {f.q}
                  <span
                    className="text-2xl text-primary transition-transform group-open:rotate-45"
                    aria-hidden
                  >
                    +
                  </span>
                </summary>
                <p className="mt-3 text-muted-foreground">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </Band>

      {/* 8. ULTIMO RICHIAMO */}
      <Band tone="cta" confetti>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-3xl font-extrabold sm:text-4xl">
            La prossima festa può essere pronta stasera
          </h2>
          <p className="mt-4 text-lg">
            Storia, prove, indizi e diplomi sono già fatti. Con il Pack Età hai 4 avventure, 2 per
            la casa e 2 per l'aperto: qualunque tempo faccia, la festa è salva.
          </p>
          <a href="#pacchetti" className="btn mt-7 bg-accent px-8 py-4 text-lg text-foreground">
            Sblocca i 4 Kit Età a 24,90 €
          </a>
        </div>
      </Band>
    </>
  );
}

/* ── Elementi di layout ───────────────────────────────────────────────── */

const tones = {
  plain: "",
  muted: "bg-muted",
  warm: "bg-amber-50",
  cta: "bg-secondary text-foreground",
};

function Band({
  children,
  tone = "plain",
  id,
  className = "",
  confetti = false,
}: {
  children: ReactNode;
  tone?: keyof typeof tones;
  id?: string;
  className?: string;
  confetti?: boolean;
}) {
  return (
    <section
      id={id}
      className={`relative scroll-mt-20 px-4 py-14 sm:py-20 ${confetti ? "overflow-hidden" : ""} ${tones[tone]} ${className}`}
    >
      {confetti && <Confetti />}
      <div className="relative z-10 mx-auto max-w-5xl">{children}</div>
    </section>
  );
}

/** Coriandoli decorativi sparsi nei bordi della sezione (non coprono il testo). */
function Confetti() {
  const pieces = [
    { l: "3%", t: "16%", c: "var(--primary)", s: "bar", r: -18, z: 18 },
    { l: "14%", t: "72%", c: "var(--secondary)", s: "dot", r: 0, z: 13 },
    { l: "24%", t: "9%", c: "var(--accent)", s: "diamond", r: 20, z: 14 },
    { l: "34%", t: "85%", c: "var(--primary)", s: "dot", r: 0, z: 11 },
    { l: "47%", t: "7%", c: "var(--secondary)", s: "bar", r: 28, z: 16 },
    { l: "58%", t: "88%", c: "var(--accent)", s: "diamond", r: -16, z: 15 },
    { l: "68%", t: "12%", c: "var(--primary)", s: "dot", r: 0, z: 12 },
    { l: "78%", t: "78%", c: "var(--secondary)", s: "bar", r: -24, z: 18 },
    { l: "88%", t: "18%", c: "var(--accent)", s: "diamond", r: 14, z: 15 },
    { l: "95%", t: "64%", c: "var(--primary)", s: "dot", r: 0, z: 12 },
    { l: "9%", t: "40%", c: "var(--accent)", s: "dot", r: 0, z: 10 },
    { l: "92%", t: "40%", c: "var(--secondary)", s: "diamond", r: 22, z: 13 },
  ];
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0">
      {pieces.map((p, i) => {
        const base = { position: "absolute" as const, left: p.l, top: p.t, background: p.c };
        const style =
          p.s === "dot"
            ? { ...base, width: p.z, height: p.z, borderRadius: 999 }
            : p.s === "bar"
              ? {
                  ...base,
                  width: p.z * 1.9,
                  height: p.z * 0.55,
                  borderRadius: 999,
                  transform: `rotate(${p.r}deg)`,
                }
              : {
                  ...base,
                  width: p.z,
                  height: p.z,
                  borderRadius: 3,
                  transform: `rotate(${p.r}deg)`,
                };
        return <span key={i} style={style} />;
      })}
    </div>
  );
}

function Heading({
  children,
  kicker,
  align = "center",
}: {
  children: ReactNode;
  kicker: string;
  align?: "center" | "left";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : ""}>
      <p className="text-sm font-extrabold uppercase tracking-widest text-primary">{kicker}</p>
      <h2 className="mt-2 text-balance text-3xl font-extrabold sm:text-4xl">{children}</h2>
    </div>
  );
}

/** Foto lifestyle: mostra la foto se presente in `photos`, altrimenti un'illustrazione. */
function Photo({
  src,
  emoji,
  caption,
  tone,
}: {
  src: string | null;
  emoji: string;
  caption: string;
  tone: "dark" | "light";
}) {
  if (src) {
    return (
      <img
        src={src}
        alt={caption}
        loading="lazy"
        className="pop aspect-[4/3] w-full rounded-3xl object-cover"
      />
    );
  }
  return (
    <div
      className={`pop flex aspect-[4/3] w-full flex-col items-center justify-center gap-3 rounded-3xl p-6 text-center ${
        tone === "dark"
          ? "bg-gradient-to-br from-slate-700 to-slate-900 text-white"
          : "bg-gradient-to-br from-[#FFE100] to-[#00C4E8] text-foreground"
      }`}
    >
      <span className="text-8xl" aria-hidden>
        {emoji}
      </span>
      <p className="font-display text-xl font-extrabold">{caption}</p>
    </div>
  );
}

/** Pagine reali di un kit disposte a ventaglio, come fogli appena stampati sul tavolo. */
function HeroMockup() {
  const sheet = "absolute w-[46%] rounded-md border-2 border-foreground shadow-xl";
  return (
    <div className="pop relative mx-auto aspect-[5/4] w-full max-w-lg rounded-[2rem] bg-gradient-to-br from-[#FFE100] to-[#00C4E8]">
      <img
        src="/images/kit/dino-storia.jpg"
        alt=""
        className={`${sheet} left-[5%] top-[12%] -rotate-12`}
      />
      <img
        src="/images/kit/dino-carte.jpg"
        alt=""
        className={`${sheet} right-[5%] top-[12%] rotate-12`}
      />
      <img
        src="/images/kit/dino-copertina.jpg"
        alt="Le pagine stampate del kit Dinosauri in azione: copertina, storia e carte-indizio"
        className={`${sheet} left-[27%] top-[6%] -rotate-2`}
      />
      <span className="absolute bottom-[6%] left-[4%] -rotate-6 rounded-full bg-white px-4 py-2 text-sm font-extrabold shadow-lg">
        ✂️ Stampa e ritaglia
      </span>
      <span className="absolute bottom-[8%] right-[4%] rotate-3 rounded-full bg-primary px-4 py-2 text-sm font-extrabold text-primary-foreground shadow-lg">
        🏆 Diploma incluso
      </span>
    </div>
  );
}
