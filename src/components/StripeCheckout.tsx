"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type CheckoutMode = "payment" | "subscription";

interface StripeCheckoutProps {
  priceId?: string;
  mode: CheckoutMode;
  pakketNaam: string;
  popular?: boolean;
  label?: string;
}

export function StripeCheckout({ priceId, mode, pakketNaam, popular, label }: StripeCheckoutProps) {
  const [loading, setLoading] = useState(false);

  const handleCheckout = async () => {
    if (!priceId) return;

    setLoading(true);
    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ priceId, mode, pakketNaam }),
      });

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Er ging iets mis. Probeer het opnieuw of neem contact op.");
      }
    } catch {
      alert("Er ging iets mis. Probeer het opnieuw of neem contact op.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      className={`w-full ${popular ? "bg-accent hover:bg-accent/90" : ""}`}
      variant={popular ? "primary" : "outline"}
      onClick={handleCheckout}
      disabled={loading || !priceId}
      title={!priceId ? "Stripe priceId ontbreekt (env vars nog niet gezet)" : undefined}
    >
      {loading ? "Laden..." : !priceId ? "Setup nodig" : label || "Bestellen"}
    </Button>
  );
}
