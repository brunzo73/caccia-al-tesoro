import { createServerFn } from "@tanstack/react-start";
import { getStripe } from "@/lib/stripe.server";
import { ageGroups, getOffer, resolveKits } from "@/data/packages";

type CheckoutInput = {
  offerta: string;
  tema?: string;
  eta?: string;
  /** window.location.origin from the browser, to build absolute redirect URLs. */
  origin: string;
};

function isCheckoutInput(data: unknown): data is CheckoutInput {
  return (
    typeof data === "object" &&
    data !== null &&
    typeof (data as Record<string, unknown>)["offerta"] === "string" &&
    typeof (data as Record<string, unknown>)["origin"] === "string"
  );
}

/**
 * Creates a Stripe Checkout Session for the offer currently shown on /ordine.
 *
 * SECURITY: the price always comes from the server-side `offers` data (src/data/packages.ts),
 * never from the client — a tampered request can change which offer/kit is requested, but can
 * never change what it costs.
 */
export const createCheckoutSession = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    if (!isCheckoutInput(data)) {
      throw new Error("Richiesta di pagamento non valida.");
    }
    return data;
  })
  .handler(async ({ data }) => {
    const offer = getOffer(data.offerta);
    if (!offer) {
      throw new Error("Pacchetto non riconosciuto.");
    }

    const age = ageGroups.find((g) => g.value === data.eta);
    const kits = resolveKits(offer, data.tema, data.eta);

    if (kits.length === 0) {
      throw new Error("Manca la scelta dell'età o del tema per questo pacchetto.");
    }

    const stripe = getStripe();

    const productName =
      offer.id === "eta" && age ? `${offer.name} · ${age.label}` : offer.name;

    const session = await stripe.checkout.sessions.create({
      mode: "payment",
      line_items: [
        {
          price_data: {
            currency: "eur",
            unit_amount: Math.round(offer.price * 100),
            product_data: {
              name: productName,
              description: kits.map((k) => k.title).join(", "),
            },
          },
          quantity: 1,
        },
      ],
      // Stripe fills in {CHECKOUT_SESSION_ID} itself; keep the literal braces.
      success_url: `${data.origin}/conferma?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${data.origin}/ordine?${new URLSearchParams({
        offerta: data.offerta,
        ...(data.tema ? { tema: data.tema } : {}),
        ...(data.eta ? { eta: data.eta } : {}),
      }).toString()}`,
      // Read back in the webhook / confirmation step to know exactly what was bought.
      metadata: {
        offerId: offer.id,
        tema: data.tema ?? "",
        eta: data.eta ?? "",
      },
    });

    if (!session.url) {
      throw new Error("Stripe non ha restituito un link di pagamento.");
    }

    return { url: session.url };
  });
