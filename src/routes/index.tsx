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
