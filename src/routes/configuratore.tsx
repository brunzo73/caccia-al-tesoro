import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import { durations, getPackage, getTier, locations, packages, tiers } from "@/data/packages";

type Search = { pacchetto?: string | undefined; livello?: string | undefined };

export const Route = createFileRoute("/configuratore")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    pacchetto: typeof s["pacchetto"] === "string" ? s["pacchetto"] : undefined,
    livello: typeof s["livello"] === "string" ? s["livello"] : undefined,
  }),
  head: () => ({
    meta: [
      { title: "Personalizza la tua caccia al tesoro" },
      { name: "description", content: "Configura la caccia al tesoro in sei semplici passaggi." },
      { property: "og:title", content: "Personalizza la tua caccia al tesoro" },
      { property: "og:description", content: "Configura la caccia al tesoro in sei semplici passaggi." },
    ],
  }),
  component: Configuratore,
});

const TOTAL = 6;

function Configuratore() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const pkg = getPackage(search.pacchetto ?? "") ?? packages[0]!;
  const tier = getTier(search.livello ?? "") ?? tiers[1]!;
  const [step, setStep] = useState(1);
  const [f, setF] = useState({
    nome: "", eta: "", data: "", bambini: "", squadre: "", luogo: "", durata: "", note: "",
  });
  const set = (k: keyof typeof f) => (e: { target: { value: string } }) => setF({ ...f, [k]: e.target.value });

  const valid =
    (step === 1 && f.nome && f.eta) ||
    (step === 2 && f.data) ||
    (step === 3 && f.bambini && f.squadre) ||
    (step === 4 && f.luogo) ||
    (step === 5 && f.durata) ||
    step === 6;

  return (
    <div className="mx-auto max-w-xl">
      <h1 className="text-3xl font-extrabold">Personalizza: {pkg.title}</h1>
      <p className="text-muted-foreground">Livello {tier.name} · {tier.price} €</p>
      <div className="mt-5">
        <div className="mb-1 text-sm font-bold">Passaggio {step} di {TOTAL}</div>
        <div className="h-3 overflow-hidden rounded-full bg-muted">
          <div className="h-full rounded-full bg-secondary transition-all" style={{ width: `${(step / TOTAL) * 100}%` }} />
        </div>
      </div>

      <div className="card-fun mt-6 space-y-4 p-5">
        {step === 1 && (
          <>
            <Field label="Nome del festeggiato"><input className="field" value={f.nome} onChange={set("nome")} /></Field>
            <Field label="Età"><input className="field" type="number" min={1} max={14} value={f.eta} onChange={set("eta")} /></Field>
          </>
        )}
        {step === 2 && <Field label="Data della festa"><input className="field" type="date" value={f.data} onChange={set("data")} /></Field>}
        {step === 3 && (
          <>
            <Field label="Numero di bambini"><input className="field" type="number" min={1} value={f.bambini} onChange={set("bambini")} /></Field>
            <Field label="Numero di squadre"><input className="field" type="number" min={1} value={f.squadre} onChange={set("squadre")} /></Field>
          </>
        )}
        {step === 4 && (
          <Field label="Luogo">
            <select className="field" value={f.luogo} onChange={set("luogo")}>
              <option value="">Seleziona…</option>
              {locations.map((l) => <option key={l}>{l}</option>)}
            </select>
          </Field>
        )}
        {step === 5 && (
          <>
            <Field label="Durata">
              <div className="flex gap-2">
                {durations.map((d) => (
                  <button
                    key={d}
                    type="button"
                    onClick={() => setF({ ...f, durata: String(d) })}
                    className={`btn flex-1 ${f.durata === String(d) ? "bg-secondary text-secondary-foreground" : "bg-muted"}`}
                  >
                    {d} min
                  </button>
                ))}
              </div>
            </Field>
            <Field label="Note (facoltative)"><textarea className="field" rows={3} value={f.note} onChange={set("note")} /></Field>
          </>
        )}
        {step === 6 && (
          <div className="space-y-1">
            <h2 className="text-2xl font-bold">Riepilogo</h2>
            <p><b>Pacchetto:</b> {pkg.title} ({tier.name})</p>
            <p><b>Festeggiato:</b> {f.nome}, {f.eta} anni</p>
            <p><b>Data:</b> {f.data}</p>
            <p><b>Bambini / squadre:</b> {f.bambini} / {f.squadre}</p>
            <p><b>Luogo:</b> {f.luogo}</p>
            <p><b>Durata:</b> {f.durata} minuti</p>
            {f.note && <p><b>Note:</b> {f.note}</p>}
            <p className="pt-3 text-3xl font-extrabold text-primary">Totale: {tier.price} €</p>
          </div>
        )}
      </div>

      <div className="mt-5 flex justify-between gap-3">
        {step > 1 ? (
          <button className="btn bg-muted" onClick={() => setStep(step - 1)}>Indietro</button>
        ) : (
          <Link to="/pacchetti/$slug" params={{ slug: pkg.slug }} className="btn bg-muted">Indietro</Link>
        )}
        {step < TOTAL ? (
          <button className="btn bg-primary text-primary-foreground" disabled={!valid} onClick={() => setStep(step + 1)}>Avanti</button>
        ) : (
          <button className="btn bg-primary text-primary-foreground" onClick={() => navigate({ to: "/conferma" })}>Paga {tier.price} €</button>
        )}
      </div>
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <label className="block text-sm font-bold">
      <span className="mb-1 block">{label}</span>
      {children}
    </label>
  );
}
