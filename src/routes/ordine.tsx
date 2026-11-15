import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import {
  ageGroups,
  euro,
  getOffer,
  getPackage,
  offers,
  packages,
  packagesByAge,
} from "@/data/packages";

type Search = { offerta?: string | undefined; tema?: string | undefined; eta?: string | undefined };

const str = (v: unknown) => (typeof v === "string" ? v : undefined);

export const Route = createFileRoute("/ordine")({
  validateSearch: (s: Record<string, unknown>): Search => ({
    offerta: str(s["offerta"]),
    tema: str(s["tema"]),
    eta: str(s["eta"]),
  }),
  head: () => ({
    meta: [
      { title: "Riepilogo dell'ordine" },
      { name: "description", content: "Controlla il tuo pacchetto e completa l'acquisto." },
      { property: "og:title", content: "Riepilogo dell'ordine" },
      { property: "og:description", content: "Controlla il tuo pacchetto e completa l'acquisto." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Ordine,
});

function Ordine() {
  const search = Route.useSearch();
  const navigate = useNavigate();
  const offer = getOffer(search.offerta ?? "") ?? offers[1]!;
  const age = ageGroups.find((g) => g.value === search.eta);
  const single = getPackage(search.tema ?? "");

  const kits =
    offer.id === "completo"
      ? packages
      : offer.id === "eta"
        ? age
          ? packagesByAge(age.value)
          : []
        : single
          ? [single]
          : [];
  const incomplete = kits.length === 0;

  return (
    <div className="mx-auto max-w-xl px-4 py-10">
      <h1 className="text-3xl font-extrabold">Riepilogo dell'ordine</h1>

      <div className="card-fun mt-6 p-6">
        <p className="text-sm font-extrabold uppercase tracking-wide text-accent-foreground">
          {offer.tagline}
        </p>
        <h2 className="text-2xl font-extrabold">
          {offer.name}
          {offer.id === "eta" && age ? ` · ${age.label}` : ""}
        </h2>

        {incomplete ? (
          <p className="mt-4 text-muted-foreground">
            Manca la scelta {offer.id === "eta" ? "dell'età" : "del tema"}. Torna ai pacchetti e
            selezionala.
          </p>
        ) : (
          <>
            <p className="mt-4 font-bold">
              {kits.length === 1 ? "Il tuo kit:" : `I tuoi ${kits.length} kit:`}
            </p>
            <ul className="mt-2 grid gap-2 sm:grid-cols-2">
              {kits.map((p) => (
                <li
                  key={p.slug}
                  className="flex items-center gap-2 rounded-xl bg-muted px-3 py-2 text-sm font-bold"
                >
                  <span className="text-xl">{p.emoji}</span>
                  <span className="flex-1">{p.title}</span>
                </li>
              ))}
            </ul>
            {offer.bonus && (
              <ul className="mt-4 space-y-1 text-sm">
                {offer.bonus.map((b) => (
                  <li key={b}>
                    🎁 <b>Bonus:</b> {b}
                  </li>
                ))}
              </ul>
            )}
          </>
        )}

        <div className="mt-6 flex items-baseline justify-between border-t-2 border-border pt-4">
          <span className="font-bold">Totale</span>
          <span className="font-display text-4xl font-extrabold">{euro(offer.price)}</span>
        </div>
      </div>

      <div className="mt-6 flex flex-col-reverse gap-3 sm:flex-row sm:justify-between">
        <Link to="/" hash="pacchetti" className="btn bg-muted">
          Cambia pacchetto
        </Link>
        <button
          type="button"
          disabled={incomplete}
          onClick={() => navigate({ to: "/conferma" })}
          className="btn bg-primary text-primary-foreground"
        >
          Paga {euro(offer.price)}
        </button>
      </div>
      <p className="mt-4 text-center text-sm text-muted-foreground">
        Download immediato: ricevi i PDF via email subito dopo il pagamento.
      </p>
    </div>
  );
}
