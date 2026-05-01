import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export const runtime = "nodejs";

const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;

function getStripe() {
  const stripeSecretKey = process.env.STRIPE_SECRET_KEY;
  if (!stripeSecretKey) return null;

  return new Stripe(stripeSecretKey);
}

export async function POST(req: NextRequest) {
  if (!webhookSecret) {
    return NextResponse.json({ error: "Missing STRIPE_WEBHOOK_SECRET" }, { status: 500 });
  }

  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json({ error: "Stripe is niet geconfigureerd" }, { status: 500 });
  }

  const signature = req.headers.get("stripe-signature");
  if (!signature) {
    return NextResponse.json({ error: "Missing stripe-signature" }, { status: 400 });
  }

  const body = await req.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(body, signature, webhookSecret);
  } catch (err) {
    console.error("Stripe webhook signature verification failed", err);
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 });
  }

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        console.log("checkout.session.completed", {
          id: session.id,
          mode: session.mode,
          customer: session.customer,
          customerEmail: session.customer_details?.email,
          pakket: session.metadata?.pakket,
          amountTotal: session.amount_total,
        });

        // TODO: Send confirmation email via Resend/Postmark/SendGrid
        // TODO: Create record in CRM/Notion
        // TODO: Notify team via Slack webhook
        break;
      }

      case "invoice.paid": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log("invoice.paid", {
          id: invoice.id,
          customer: invoice.customer,
          amountPaid: invoice.amount_paid,
          billingReason: invoice.billing_reason,
        });
        break;
      }

      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        console.log("invoice.payment_failed", {
          id: invoice.id,
          customer: invoice.customer,
          attemptCount: invoice.attempt_count,
        });

        // TODO: Send dunning email to customer
        break;
      }

      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        console.log(event.type, {
          id: sub.id,
          customer: sub.customer,
          status: sub.status,
          cancelAtPeriodEnd: sub.cancel_at_period_end,
        });

        // TODO: Update subscription status in DB/CRM
        break;
      }

      default:
        break;
    }
  } catch (err) {
    console.error("Stripe webhook handler failed", err);
    return NextResponse.json({ error: "Webhook handler error" }, { status: 500 });
  }

  return NextResponse.json({ received: true });
}
