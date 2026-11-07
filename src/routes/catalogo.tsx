import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { packages } from "@/data/packages";
import { PackageCard } from "@/components/PackageCard";

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      { title: "Catalogo cacce al tesoro" },
      { name: "description", content: "Filtra le cacce al tesoro per età, luogo e tema." },
      { property: "og:title", content: "Catalogo cacce al tesoro" },
      { property: "og:description", content: "Filtra le cacce al tesoro per età, luogo e tema." },
    ],
  }),
  component: Catalogo,
});

const uniq = (k: "ageRange" | "location" | "theme") => [...new Set(packages.map((p) => p[k]))];

function Catalogo() {
  const [age, setAge] = useState("");
  const [loc, setLoc] = useState("");
  const [theme, setTheme] = useState("");
  const list = packages.filter(
    (p) => (!age || p.ageRange === age) && (!loc || p.location === loc) && (!theme || p.theme === theme),
  );
  const filters = [
    { label: "Fascia d'età", v: age, set: setAge, opts: uniq("ageRange"), suffix: " anni" },
    { label: "Luogo", v: loc, set: setLoc, opts: uniq("location"), suffix: "" },
    { label: "Tema", v: theme, set: setTheme, opts: uniq("theme"), suffix: "" },
  ];
  return (
    <div>
      <h1 className="text-4xl font-extrabold">Catalogo</h1>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {filters.map((f) => (
          <label key={f.label} className="text-sm font-bold">
            {f.label}
            <select className="field mt-1" value={f.v} onChange={(e) => f.set(e.target.value)}>
              <option value="">Tutti</option>
              {f.opts.map((o) => <option key={o} value={o}>{o}{f.suffix}</option>)}
            </select>
          </label>
        ))}
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => <PackageCard key={p.slug} p={p} />)}
      </div>
      {list.length === 0 && <p className="mt-6 text-muted-foreground">Nessun pacchetto con questi filtri.</p>}
    </div>
  );
}
