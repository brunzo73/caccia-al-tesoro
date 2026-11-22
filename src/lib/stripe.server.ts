// Server-only Stripe client. Never import this from client code: the secret key
// must never reach the browser bundle. TanStack Start's server-function build
// already strips server-only modules from client bundles, but keeping this file
// named ".server.ts" and only importing it from createServerFn handlers is an
// extra guardrail.
import Stripe from "stripe";

let stripeSingleton: Stripe | undefined;

export function getStripe(): Stripe {
  if (stripeSingleton) return stripeSingleton;

  const secretKey = process.env["STRIPE_SECRET_KEY"];
  if (!secretKey) {
    throw new Error(
      "STRIPE_SECRET_KEY non impostata. In locale: creala in un file .env. " +
        "Su Netlify: Project configuration -> Environment variables.",
    );
  }

  // No explicit apiVersion: the installed `stripe` package pins its own
  // matching default (see node_modules/stripe/.../apiVersion.d.ts). Letting
  // the SDK choose avoids silently requesting a version it doesn't support.
  stripeSingleton = new Stripe(secretKey);
  return stripeSingleton;
}
