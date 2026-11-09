import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { packages, ageGroups } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catalogo cacce al tesoro" },
      { name: "description", content: "Scegli la caccia al tesoro giusta per l'età del tuo bambino." },
      { property: "og:title", content: "Catalogo cacce al tesoro" },
      { property: "og:description", content: "Scegli la caccia al tesoro giusta per l'età del tuo bambino." },
    ],
  }),
  component: Catalogo,
});

const uniq = (k: "theme") => [...new Set(packages.map((p) => p[k]))];

function Catalogo() {
  const [age, setAge] = useState("");
  const [theme, setTheme] = useState("");
  const list = packages.filter(
    (p) => (!age || p.ageRange === age) && (!theme || p.theme === theme),
  );

  return (
    <div>
      <h1 className="text-4xl font-extrabold">Catalogo</h1>
      <p className="mt-2 text-muted-foreground">Trova l'avventura perfetta per l'età del tuo bambino</p>

      {/* Filtro fascia d'età come chip */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-bold uppercase tracking-wide text-muted-foreground">Fascia d'età</p>
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setAge("")}
            className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${age === "" ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
          >
            Tutte le età
          </button>
          {ageGroups.map((g) => (
            <button
              key={g.value}
              onClick={() => setAge(age === g.value ? "" : g.value)}
              className={`rounded-full px-4 py-2 text-sm font-bold transition-colors ${age === g.value ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"}`}
            >
              {g.emoji} {g.label}
            </button>
          ))}
        </div>
      </div>

      {/* Filtro tema */}
      <div className="mt-5">
        <label className="text-sm font-bold">
          Tema
          <select className="field mt-1" value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option value="">Tutti i temi</option>
            {uniq("theme").map((o) => <option key={o} value={o}>{o}</option>)}
          </select>
        </label>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <PackageCard key={p.slug} p={p} />)}
      </div>
      {list.length === 0 && (
        <p className="mt-6 text-muted-foreground">Nessun pacchetto con questi filtri. Prova a cambiare la fascia d'età.</p>
      )}
    </div>
  );
}
