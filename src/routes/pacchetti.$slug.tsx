import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { getPackage, tiers } from "@/data/packages";

export const Route = createFileRoute("/pacchetti/$slug")({
  loader: ({ params }) => {
    const p = getPackage(params.slug);
    if (!p) throw notFound();
    return p;
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.title} – caccia al tesoro` },
          { name: "description", content: loaderData.description },
          { property: "og:title", content: loaderData.title },
          { property: "og:description", content: loaderData.description },
        ]
      : [{ title: "Pacchetto non trovato" }, { name: "robots", content: "noindex" }],
  }),
  component: Pacchetto,
});

function Pacchetto() {
  const p = Route.useLoaderData();
  return (
    <div className="space-y-8">
      <div className="flex h-56 items-center justify-center rounded-3xl bg-accent text-8xl">{p.emoji}</div>
      <div>
        <p className="font-bold text-secondary">{p.ageRange} anni · {p.location} · {p.theme}</p>
        <h1 className="text-4xl font-extrabold">{p.title}</h1>
        <p className="mt-3 text-lg">{p.description}</p>
        <div className="card-fun mt-4 p-4">
          <h2 className="text-xl font-bold text-primary">La trama</h2>
          <p className="mt-1">{p.plot}</p>
        </div>
      </div>
      <div className="grid gap-4 sm:grid-cols-3">
        {tiers.map((t) => (
          <div key={t.id} className={`card-fun relative flex flex-col p-5 ${t.recommended ? "border-primary" : ""}`}>
            {t.recommended && (
              <span className="absolute -top-3 left-5 rounded-full bg-primary px-3 py-1 text-xs font-extrabold text-primary-foreground">
                Consigliato
              </span>
            )}
            <h3 className="text-2xl font-bold">{t.name}</h3>
            <p className="text-4xl font-extrabold text-primary">{t.price} €</p>
            <ul className="mt-3 flex-1 space-y-1 text-sm">
              {t.includes.map((i) => <li key={i}>✅ {i}</li>)}
            </ul>
            <Link
              to="/configuratore"
              search={{ pacchetto: p.slug, livello: t.id }}
              className={`btn mt-4 ${t.recommended ? "bg-primary text-primary-foreground" : "bg-secondary text-secondary-foreground"}`}
            >
              Scegli {t.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
