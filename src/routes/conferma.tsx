import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/conferma")({
  head: () => ({
    meta: [
      { title: "Ordine confermato" },
      { name: "description", content: "Conferma dell'ordine della caccia al tesoro." },
      { property: "og:title", content: "Ordine confermato" },
      { property: "og:description", content: "Conferma dell'ordine della caccia al tesoro." },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: () => (
    <div className="px-4 py-10">
      <div className="card-fun mx-auto max-w-md p-8 text-center">
        <div className="text-6xl">🎉</div>
        <h1 className="mt-3 text-3xl font-extrabold text-primary">Grazie!</h1>
        <p className="mt-2 text-muted-foreground">
          Il pagamento è andato a buon fine. Riceverai a breve un'email con i tuoi PDF.
        </p>
        <Link to="/" className="btn mt-5 bg-secondary text-secondary-foreground">
          Torna alla home
        </Link>
      </div>
    </div>
  ),
});
