import { Link, useNavigate } from "@tanstack/react-router";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { ageGroups, euro, offers, packagesByAge, type Offer } from "@/data/packages";

export function Pricing() {
  const [picker, setPicker] = useState<"singolo" | "eta" | null>(null);

  return (
    <>
      <div className="grid items-stretch gap-6 pt-4 lg:grid-cols-3">
        {offers.map((o) => (
          <OfferCard key={o.id} o={o} onPick={() => setPicker(o.id === "completo" ? null : o.id)} />
        ))}
      </div>
      <Picker kind={picker} onClose={() => setPicker(null)} />
    </>
  );
}

function OfferCard({ o, onPick }: { o: Offer; onPick: () => void }) {
  const ctaClass = `btn mt-6 w-full text-center text-base ${
    o.featured ? "bg-primary text-primary-foreground shadow-lg" : "bg-foreground text-background"
  }`;
  const label = `${o.cta} (${euro(o.price)})`;

  return (
    <div
      className={`relative flex flex-col rounded-3xl bg-card p-6 ${
        o.featured
          ? "order-first border-4 border-primary shadow-2xl lg:order-none lg:-mt-4 lg:mb-4"
          : "border-2 border-border shadow-md"
      }`}
    >
      {o.badge && (
        <span
          className={`absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full px-4 py-1 text-xs font-extrabold uppercase tracking-wide ${
            o.featured
              ? "bg-primary text-primary-foreground"
              : "bg-secondary text-secondary-foreground"
          }`}
        >
          {o.badge}
        </span>
      )}
      <h3 className="text-2xl font-extrabold">{o.name}</h3>
      <p className="font-bold text-accent-foreground">{o.tagline}</p>

      <div className="mt-4 flex flex-wrap items-baseline gap-x-3">
        <span className="font-display text-5xl font-extrabold text-foreground">
          {euro(o.price)}
        </span>
        {o.compareAt && (
          <span className="text-lg text-muted-foreground line-through">{euro(o.compareAt)}</span>
        )}
      </div>
      <p className="mt-1 min-h-10 text-sm text-muted-foreground">
        {o.compareAt ? (
          <>
            <b className="text-foreground">{o.perUnit}.</b> Prezzo barrato: {o.compareLabel}.
          </>
        ) : (
          "Pagamento unico, nessun abbonamento."
        )}
      </p>

      <p className="mt-4">{o.description}</p>
      <ul className="mt-4 flex-1 space-y-2">
        {o.includes.map((i) => (
          <li key={i} className="flex gap-2">
            <span aria-hidden className="font-extrabold text-secondary">
              ✓
            </span>
            <span>{i}</span>
          </li>
        ))}
        {o.bonus?.map((b) => (
          <li key={b} className="flex gap-2">
            <span aria-hidden>🎁</span>
            <span>
              <b>Bonus:</b> {b}
            </span>
          </li>
        ))}
      </ul>

      {o.id === "completo" ? (
        <Link to="/ordine" search={{ offerta: "completo" }} className={ctaClass}>
          {label}
        </Link>
      ) : (
        <button type="button" onClick={onPick} className={ctaClass}>
          {label}
        </button>
      )}
    </div>
  );
}

function Picker({ kind, onClose }: { kind: "singolo" | "eta" | null; onClose: () => void }) {
  const navigate = useNavigate();
  const [age, setAge] = useState("");
  const [slug, setSlug] = useState("");
  const ready = kind === "eta" ? !!age : !!slug;

  const go = () => {
    if (!kind || !ready) return;
    onClose();
    navigate({
      to: "/ordine",
      search: kind === "eta" ? { offerta: "eta", eta: age } : { offerta: "singolo", tema: slug },
    });
  };

  return (
    <Dialog open={kind !== null} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-h-[90vh] overflow-y-auto rounded-3xl sm:rounded-3xl">
        <DialogHeader>
          <DialogTitle className="font-display text-2xl font-extrabold">
            {kind === "eta" ? "Quanti anni ha il festeggiato?" : "Scegli la tua avventura"}
          </DialogTitle>
          <DialogDescription>
            {kind === "eta"
              ? "Ricevi tutte e 4 le avventure di quella fascia d'età: 2 per la casa e 2 per l'aperto."
              : "Scegli prima l'età dei bambini, poi il tema che preferisci."}
          </DialogDescription>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-2">
          {ageGroups.map((g) => (
            <button
              key={g.value}
              type="button"
              aria-pressed={age === g.value}
              onClick={() => {
                setAge(g.value);
                setSlug("");
              }}
              className={`rounded-2xl border-2 px-3 py-3 font-extrabold transition-colors ${
                age === g.value ? "border-primary bg-primary/10" : "border-border bg-card"
              }`}
            >
              {g.emoji} {g.label}
            </button>
          ))}
        </div>

        {age && (
          <ul className="space-y-2">
            {packagesByAge(age).map((p) =>
              kind === "eta" ? (
                <li key={p.slug} className="flex items-center gap-3 rounded-2xl bg-muted px-3 py-2">
                  <span className="text-2xl">{p.emoji}</span>
                  <span className="flex-1 font-bold">{p.title}</span>
                  <span className="text-xs font-bold text-muted-foreground">{p.place}</span>
                </li>
              ) : (
                <li key={p.slug}>
                  <button
                    type="button"
                    aria-pressed={slug === p.slug}
                    onClick={() => setSlug(p.slug)}
                    className={`flex w-full items-center gap-3 rounded-2xl border-2 px-3 py-2 text-left transition-colors ${
                      slug === p.slug ? "border-primary bg-primary/10" : "border-border bg-card"
                    }`}
                  >
                    <span className="text-3xl">{p.emoji}</span>
                    <span className="flex-1">
                      <span className="block font-extrabold">{p.title}</span>
                      <span className="block text-sm text-muted-foreground">{p.short}</span>
                    </span>
                    <span className="rounded-full bg-accent px-2 py-1 text-xs font-bold text-accent-foreground">
                      {p.place}
                    </span>
                  </button>
                </li>
              ),
            )}
          </ul>
        )}

        <button
          type="button"
          disabled={!ready}
          onClick={go}
          className="btn w-full bg-primary text-base text-primary-foreground"
        >
          Continua
        </button>
      </DialogContent>
    </Dialog>
  );
}
