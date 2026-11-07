import { Link } from "@tanstack/react-router";
import type { Package } from "@/data/packages";

export function PackageCard({ p }: { p: Package }) {
  return (
    <Link to="/pacchetti/$slug" params={{ slug: p.slug }} className="card-fun block overflow-hidden">
      <div className="flex h-32 items-center justify-center bg-accent text-6xl">{p.emoji}</div>
      <div className="p-4">
        <h3 className="text-xl font-bold">{p.title}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{p.short}</p>
        <div className="mt-3 flex flex-wrap gap-2 text-xs font-bold">
          <span className="rounded-full bg-primary/15 px-3 py-1 text-primary">{p.ageRange} anni</span>
          <span className="rounded-full bg-secondary/15 px-3 py-1 text-accent-foreground">{p.location}</span>
        </div>
      </div>
    </Link>
  );
}
