// Articoli del blog: un oggetto per articolo. Il contenuto vero e proprio (il
// corpo dell'articolo) vive in un componente separato sotto src/content/blog/,
// referenziato qui tramite `Content` — così questo file resta leggero e la
// lista è facile da scorrere.

import type { ComponentType } from "react";
import { CacciaAlTesoroInCasa } from "@/content/blog/caccia-al-tesoro-in-casa";

export type BlogPost = {
  slug: string;
  title: string;
  /** Mostrata nei meta tag e nella card dell'elenco articoli. */
  description: string;
  /** YYYY-MM-DD */
  publishedAt: string;
  readingMinutes: number;
  /** Corpo dell'articolo, come componente React. */
  Content: ComponentType;
};

export const posts: BlogPost[] = [
  {
    slug: "caccia-al-tesoro-in-casa-per-bambini",
    title: "Caccia al tesoro in casa per bambini: la guida pratica (con idee pronte)",
    description:
      "Quanti indizi servono, dove nasconderli e come evitare gli errori più comuni: la guida per organizzare una caccia al tesoro in casa senza impazzire.",
    publishedAt: "2026-11-23",
    readingMinutes: 6,
    Content: CacciaAlTesoroInCasa,
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);

export const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("it-IT", { day: "numeric", month: "long", year: "numeric" });
