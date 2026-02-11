import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;

  return new Stripe(stripeSecretKey, {
    apiVersion: "2025-01-27.acacia",
  });
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json({ error: "Stripe is niet geconfigureerd" }, { status: 500 });
    }

    const { priceId, pakketNaam, mode } = await request.json();

    if (!priceId) {
      return NextResponse.json({ error: "Price ID is vereist" }, { status: 400 });
    }

    if (mode !== "payment" && mode !== "subscription") {
      return NextResponse.json({ error: "Ongeldige checkout mode" }, { status: 400 });
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://hazier.be";

    const session = await stripe.checkout.sessions.create({
      mode,
      payment_method_types: ["card", "bancontact", "ideal"],
      line_items: [{ price: priceId, quantity: 1 }],

      // VAT + invoices
      automatic_tax: { enabled: true },
      tax_id_collection: { enabled: true },
      billing_address_collection: "required",

      // Allow business details on invoices
      customer_creation: mode === "payment" ? "always" : undefined,

      success_url: `${baseUrl}/intake?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/prijzen`,
      metadata: {
        pakket: pakketNaam || "",
      },
    });

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis bij het aanmaken van de checkout sessie." },
      { status: 500 }
    );
  }
}
