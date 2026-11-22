import { createFileRoute, Link } from "@tanstack/react-router";
import { formatDate, posts } from "@/data/blog";

const TITLE = "Blog — idee e consigli per feste di compleanno con i bambini";
const DESCRIPTION =
  "Idee per cacce al tesoro, giochi senza animatore e consigli pratici per organizzare feste di compleanno con bambini di ogni età.";

export const Route = createFileRoute("/blog/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: BlogIndex,
});

function BlogIndex() {
  return (
    <div className="mx-auto max-w-3xl px-4 py-10 sm:py-14">
      <p className="text-sm font-extrabold uppercase tracking-widest text-primary">Blog</p>
      <h1 className="mt-2 text-balance font-display text-3xl font-extrabold sm:text-4xl">
        Idee e consigli per feste di compleanno
      </h1>
      <p className="mt-3 text-lg text-muted-foreground">
        Caccia al tesoro, giochi senza animatore e consigli pratici, scritti dopo decine di feste
        organizzate davvero.
      </p>

      <ul className="mt-10 space-y-5">
        {posts.map((post) => (
          <li key={post.slug}>
            <Link
              to="/blog/$slug"
              params={{ slug: post.slug }}
              className="card-fun block p-6 transition-transform hover:-translate-y-0.5"
            >
              <p className="text-sm font-bold text-muted-foreground">
                {formatDate(post.publishedAt)} · {post.readingMinutes} min di lettura
              </p>
              <h2 className="mt-1 text-xl font-extrabold sm:text-2xl">{post.title}</h2>
              <p className="mt-2 text-muted-foreground">{post.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
