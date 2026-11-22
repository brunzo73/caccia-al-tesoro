import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { brand } from "@/data/packages";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app's name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root's preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Facciamo Festa: cacce al tesoro in PDF per feste di bambini" },
      {
        name: "description",
        content: "Cacce al tesoro in PDF pronte per compleanni ed eventi per bambini.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;800&family=Nunito:wght@400;600;800&display=swap",
      },
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.ico", type: "image/x-icon" },
      { rel: "icon", href: "/images/icon-missionefesta.png", type: "image/png", sizes: "512x512" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="it">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <header className="sticky top-0 z-50 border-b-2 border-foreground bg-background/90 px-4 py-2 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-3">
          <Link to="/" className="flex shrink-0 items-center" aria-label={`${brand.name} — home`}>
            <img
              src="/images/logo-missionefesta.png"
              alt={brand.name}
              className="h-12 w-auto sm:h-14"
            />
          </Link>
          <nav className="hidden items-center gap-7 text-sm font-extrabold md:flex">
            <Link to="/" hash="come-funziona" className="transition-colors hover:text-primary">
              Come funziona
            </Link>
            <Link to="/" hash="cosa-ricevi" className="transition-colors hover:text-primary">
              Cosa ricevi
            </Link>
            <Link to="/" hash="faq" className="transition-colors hover:text-primary">
              Domande
            </Link>
            <Link to="/blog" className="transition-colors hover:text-primary">
              Blog
            </Link>
          </nav>
          <Link
            to="/"
            hash="pacchetti"
            className="btn shrink-0 bg-primary px-4 py-2 text-sm text-primary-foreground"
          >
            <span className="hidden sm:inline">Scopri i pacchetti</span>
            <span className="sm:hidden">Pacchetti</span>
          </Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
      <footer className="bg-foreground px-4 text-background">
        <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-between gap-4 py-6 text-sm font-semibold">
          <span>© {brand.name} · Cacce al tesoro in PDF pronte da stampare</span>
          <nav className="flex gap-5">
            <Link to="/privacy">Privacy Policy</Link>
            <Link to="/termini">Termini</Link>
            <Link to="/contatti">Contatti</Link>
          </nav>
        </div>
      </footer>
    </QueryClientProvider>
  );
}
