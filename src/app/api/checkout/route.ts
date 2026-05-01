import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { getCheckoutPackage } from "@/lib/stripe/catalog";

function getStripe() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;

  return new Stripe(stripeSecretKey);
}

export async function POST(request: NextRequest) {
  try {
    const stripe = getStripe();
    if (!stripe) {
      return NextResponse.json({ error: "Stripe is niet geconfigureerd" }, { status: 500 });
    }

    const { packageKey } = await request.json();
    const checkoutPackage = typeof packageKey === "string" ? getCheckoutPackage(packageKey) : null;

    if (!checkoutPackage) {
      return NextResponse.json({ error: "Onbekend pakket" }, { status: 400 });
    }

    if (!checkoutPackage.priceId) {
      return NextResponse.json(
        { error: `Stripe price ID ontbreekt voor ${checkoutPackage.name}` },
        { status: 500 }
      );
    }

    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://hazier.be";

    const sessionParams: Stripe.Checkout.SessionCreateParams = {
      mode: checkoutPackage.mode,
      payment_method_types: ["card", "bancontact", "ideal"],
      line_items: [{ price: checkoutPackage.priceId, quantity: 1 }],

      // VAT + invoices
      automatic_tax: { enabled: true },
      tax_id_collection: { enabled: true },
      billing_address_collection: "required",

      // Always create a customer for future reference
      customer_creation: checkoutPackage.mode === "payment" ? "always" : undefined,

      // Generate invoice for one-time payments too
      ...(checkoutPackage.mode === "payment" && {
        invoice_creation: {
          enabled: true,
        },
      }),

      success_url: `${baseUrl}/intake?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${baseUrl}/prijzen`,
      metadata: {
        packageKey: checkoutPackage.key,
        pakket: checkoutPackage.name,
      },
    };

    const session = await stripe.checkout.sessions.create(sessionParams);

    return NextResponse.json({ url: session.url });
  } catch (error) {
    console.error("Stripe checkout error:", error);
    return NextResponse.json(
      { error: "Er ging iets mis bij het aanmaken van de checkout sessie." },
      { status: 500 }
    );
  }
}
