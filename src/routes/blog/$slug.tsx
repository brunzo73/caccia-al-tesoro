import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { formatDate, getPost } from "@/data/blog";

export const Route = createFileRoute("/blog/$slug")({
  // Niente loader: i post sono dati statici importati nel bundle, non serve
  // andarli a prendere in modo asincrono — e un loader non può restituire un
  // componente React (non è serializzabile per l'hydration).
  beforeLoad: ({ params }) => {
    if (!getPost(params.slug)) throw notFound();
  },
  head: ({ params }) => {
    const post = getPost(params.slug);
    if (!post) return {};
    return {
      meta: [
        { title: post.title },
        { name: "description", content: post.description },
        { property: "og:type", content: "article" },
        { property: "og:title", content: post.title },
        { property: "og:description", content: post.description },
      ],
    };
  },
  component: BlogPost,
});

function BlogPost() {
  const { slug } = Route.useParams();
  const post = getPost(slug);
  if (!post) return null; // beforeLoad already redirected to notFound.
  const { Content } = post;

  return (
    <article className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <Link to="/blog" className="text-sm font-bold text-primary hover:underline">
        ← Tutti gli articoli
      </Link>
      <p className="mt-5 text-sm font-bold text-muted-foreground">
        {formatDate(post.publishedAt)} · {post.readingMinutes} min di lettura
      </p>
      <h1 className="mt-1 text-balance font-display text-3xl font-extrabold sm:text-4xl">
        {post.title}
      </h1>
      <div className="mt-6">
        <Content />
      </div>
    </article>
  );
}
