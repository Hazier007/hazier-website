import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;

  return new Stripe(stripeSecretKey, {
    apiVersion: "2025-01-27.acacia",
  });
}

export async function GET(request: NextRequest) {
  const sessionId = request.nextUrl.searchParams.get("session_id");

  if (!sessionId) {
    return NextResponse.json({ error: "session_id is vereist" }, { status: 400 });
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is niet geconfigureerd" }, { status: 500 });
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId);

    if (session.payment_status !== "paid" && session.payment_status !== "no_payment_required") {
      return NextResponse.json({
        verified: false,
        status: session.payment_status,
      });
    }

    return NextResponse.json({
      verified: true,
      status: session.payment_status,
      customerEmail: session.customer_details?.email ?? null,
      customerName: session.customer_details?.name ?? null,
      pakket: session.metadata?.pakket ?? null,
    });
  } catch {
    return NextResponse.json({ error: "Ongeldige sessie" }, { status: 400 });
  }
}
