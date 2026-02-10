import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "sk_live_PLACEHOLDER", {
  apiVersion: "2025-01-27.acacia",
});

export async function POST(request: NextRequest) {
  try {
    const { priceId, pakketNaam } = await request.json();

    if (!priceId) {
      return NextResponse.json({ error: "Price ID is vereist" }, { status: 400 });
    }

    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      payment_method_types: ["card", "bancontact", "ideal"],
      line_items: [
        {
          price: priceId,
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://hazier.be"}/bedankt?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || "https://hazier.be"}/prijzen`,
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
