import { createFileRoute, Link } from "@tanstack/react-router";
import { packages, faqs } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Cacce al tesoro in PDF per feste di bambini" },
      { name: "description", content: "Scegli, personalizza e scarica una caccia al tesoro pronta per il compleanno." },
      { property: "og:title", content: "Cacce al tesoro in PDF per feste di bambini" },
      { property: "og:description", content: "Scegli, personalizza e scarica una caccia al tesoro pronta." },
    ],
  }),
  component: Index,
});

const steps = [
  { n: "1", t: "Scegli", d: "Trova l'avventura giusta per età e luogo.", e: "🔍" },
  { n: "2", t: "Personalizza", d: "Inserisci nome, età e dettagli della festa.", e: "✏️" },
  { n: "3", t: "Scarica", d: "Ricevi subito il PDF pronto da stampare.", e: "📄" },
];

const reviews = [
  {
    name: "Marta R.",
    role: "Mamma di Sofia, 7 anni",
    text: "Ho scaricato il pacchetto Pirati la mattina della festa e in 10 minuti avevo tutto pronto. I bambini si sono divertiti moltissimo e io non ho dovuto improvvisare nulla!",
    stars: 5,
    avatar: "👩",
  },
  {
    name: "Giulia T.",
    role: "Educatrice asilo nido",
    text: "Lo uso per le feste di fine anno scolastico. Ogni pacchetto è ben strutturato, i livelli di difficoltà sono perfetti e i bambini sono sempre entusiasti. Lo consiglio a tutte le colleghe.",
    stars: 5,
    avatar: "👩‍🏫",
  },
  {
    name: "Alessandro M.",
    role: "Papà di Luca, 9 anni",
    text: "Mio figlio voleva una festa da detective. Ho trovato il pacchetto perfetto, l'ho personalizzato con il suo nome e i suoi amici non parlavano d'altro per settimane. Vale ogni centesimo.",
    stars: 5,
    avatar: "👨",
  },
];

function Index() {
  return (
    <div className="space-y-14">
      <section className="text-center">
        <h1 className="text-4xl font-extrabold sm:text-5xl">
          La <span className="text-primary">caccia al tesoro</span> pronta per la tua <span className="text-secondary">festa</span>
        </h1>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Avventure in PDF per compleanni ed eventi per bambini, personalizzate in pochi minuti.
        </p>
        <Link to="/catalogo" className="btn mt-6 bg-primary text-primary-foreground">Scopri le avventure</Link>
      </section>

      <section className="grid gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <div key={s.n} className="card-fun p-5 text-center">
            <div className="text-4xl">{s.e}</div>
            <h2 className="mt-2 text-2xl font-bold text-primary">{s.n}. {s.t}</h2>
            <p className="mt-1 text-muted-foreground">{s.d}</p>
          </div>
        ))}
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-extrabold">I nostri pacchetti</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {packages.map((p) => <PackageCard key={p.slug} p={p} />)}
        </div>
      </section>

      {/* Sezione anteprima PDF */}
      <section className="rounded-2xl bg-amber-50 p-8">
        <h2 className="mb-2 text-3xl font-extrabold text-center">Cosa ricevi nel PDF</h2>
        <p className="mb-8 text-center text-muted-foreground">Tutto pronto da stampare: indizi, bigliettini e diploma finale</p>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="text-center">
            <img
              src="/images/pdf-cover.jpg"
              alt="Copertina del PDF"
              className="mx-auto w-full max-w-[220px] rounded-xl shadow-md"
            />
            <p className="mt-3 font-bold">Copertina personalizzata</p>
            <p className="text-sm text-muted-foreground">Con il nome del festeggiato e il tema scelto</p>
          </div>
          <div className="text-center">
            <img
              src="/images/clue-card.jpg"
              alt="Bigliettino indizio"
              className="mx-auto w-full max-w-[220px] rounded-xl shadow-md"
            />
            <p className="mt-3 font-bold">Bigliettini da ritagliare</p>
            <p className="text-sm text-muted-foreground">Indizi pronti da nascondere, con istruzioni per l'organizzatore</p>
          </div>
          <div className="text-center">
            <img
              src="/images/diploma.jpg"
              alt="Diploma finale"
              className="mx-auto w-full max-w-[220px] rounded-xl shadow-md"
            />
            <p className="mt-3 font-bold">Diploma finale</p>
            <p className="text-sm text-muted-foreground">Da consegnare ai bambini come premio al termine dell'avventura</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <Link to="/catalogo" className="btn bg-primary text-primary-foreground">Scegli il tuo pacchetto</Link>
        </div>
      </section>

      {/* Sezione recensioni */}
      <section>
        <h2 className="mb-2 text-3xl font-extrabold text-center">Cosa dicono i genitori</h2>
        <p className="mb-8 text-center text-muted-foreground">Oltre 500 feste organizzate con successo</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {reviews.map((r) => (
            <div key={r.name} className="card-fun p-5 flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <span className="text-4xl">{r.avatar}</span>
                <div>
                  <p className="font-bold">{r.name}</p>
                  <p className="text-xs text-muted-foreground">{r.role}</p>
                </div>
              </div>
              <div className="flex gap-0.5 text-amber-400">
                {"★".repeat(r.stars)}
              </div>
              <p className="text-sm text-muted-foreground italic">"{r.text}"</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="mb-4 text-3xl font-extrabold">Domande frequenti</h2>
        <div className="space-y-3">
          {faqs.map((f) => (
            <details key={f.q} className="card-fun p-4">
              <summary className="cursor-pointer font-bold">{f.q}</summary>
              <p className="mt-2 text-muted-foreground">{f.a}</p>
            </details>
          ))}
        </div>
      </section>
    </div>
  );
}
