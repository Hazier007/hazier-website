"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";

type CheckoutMode = "payment" | "subscription";

interface StripeCheckoutProps {
  packageKey?: string;
  mode: CheckoutMode;
  pakketNaam: string;
  popular?: boolean;
  label?: string;
}

export function StripeCheckout({ packageKey, popular, label }: StripeCheckoutProps) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckout = async () => {
    if (!packageKey) return;

    setLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ packageKey }),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        throw new Error(data?.error || `Server error (${response.status})`);
      }

      const data = await response.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        throw new Error("Geen checkout URL ontvangen");
      }
    } catch (err) {
      const message = err instanceof Error ? err.message : "Onbekende fout";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Button
        className={`w-full ${popular ? "bg-accent hover:bg-accent/90" : ""}`}
        variant={popular ? "primary" : "outline"}
        onClick={handleCheckout}
        disabled={loading || !packageKey}
        title={!packageKey ? "Stripe package key ontbreekt" : undefined}
      >
        {loading ? "Laden..." : !packageKey ? "Setup nodig" : label || "Bestellen"}
      </Button>
      {error && (
        <p className="mt-2 text-sm text-red-400 text-center">
          {error} — Neem <a href="mailto:info@hazier.be" className="underline">contact</a> op als dit aanhoudt.
        </p>
      )}
    </div>
  );
}
