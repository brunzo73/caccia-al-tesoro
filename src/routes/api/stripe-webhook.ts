import { createFileRoute } from "@tanstack/react-router";
import { getOffer, resolveKits } from "@/data/packages";
import { sendOrderEmail } from "@/lib/order-email.server";
import { getStripe } from "@/lib/stripe.server";

/**
 * Stripe calls this endpoint directly (not our frontend), so it must be a raw
 * HTTP route with a stable URL — not a createServerFn RPC. Register this exact
 * URL (https://missionefesta.it/api/stripe-webhook) in the Stripe Dashboard
 * under Developers -> Webhooks, and put the resulting signing secret in
 * STRIPE_WEBHOOK_SECRET.
 */
export const Route = createFileRoute("/api/stripe-webhook")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const signature = request.headers.get("stripe-signature");
        const webhookSecret = process.env["STRIPE_WEBHOOK_SECRET"];

        if (!signature || !webhookSecret) {
          console.error("Stripe webhook: firma o STRIPE_WEBHOOK_SECRET mancanti.");
          return new Response("Webhook non configurato.", { status: 500 });
        }

        // MUST read the raw, unparsed body — Stripe signs these exact bytes.
        const rawBody = await request.text();

        const stripe = getStripe();
        let event;
        try {
          event = stripe.webhooks.constructEvent(rawBody, signature, webhookSecret);
        } catch (error) {
          console.error("Stripe webhook: firma non valida.", error);
          return new Response("Firma non valida.", { status: 400 });
        }

        if (event.type !== "checkout.session.completed") {
          // Acknowledge every other event type so Stripe doesn't retry it.
          return new Response("ok", { status: 200 });
        }

        const session = event.data.object;
        const customerEmail = session.customer_details?.email;
        const offerId = session.metadata?.["offerId"];
        const tema = session.metadata?.["tema"] || undefined;
        const eta = session.metadata?.["eta"] || undefined;

        if (!customerEmail || !offerId) {
          console.error("Stripe webhook: sessione senza email o offerId nei metadata.", {
            sessionId: session.id,
          });
          // Return 200 anyway: this is a data problem, not a transient one —
          // retrying won't fix it, and we don't want Stripe hammering us.
          return new Response("Dati ordine incompleti.", { status: 200 });
        }

        const offer = getOffer(offerId);
        if (!offer) {
          console.error(`Stripe webhook: offerta sconosciuta "${offerId}".`, {
            sessionId: session.id,
          });
          return new Response("Offerta sconosciuta.", { status: 200 });
        }

        const kits = resolveKits(offer, tema, eta);
        if (kits.length === 0) {
          console.error("Stripe webhook: nessun kit risolto per l'ordine.", {
            sessionId: session.id,
            offerId,
            tema,
            eta,
          });
          return new Response("Nessun kit da consegnare.", { status: 200 });
        }

        const origin = new URL(request.url).origin;

        try {
          await sendOrderEmail({
            to: customerEmail,
            origin,
            offerName: offer.name,
            kits,
          });
        } catch (error) {
          console.error("Stripe webhook: invio email fallito.", error, {
            sessionId: session.id,
          });
          // 500 so Stripe retries the webhook (it retries on non-2xx for a while).
          return new Response("Invio email fallito.", { status: 500 });
        }

        return new Response("ok", { status: 200 });
      },
    },
  },
});
