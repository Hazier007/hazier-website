"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";

type Props = {
  checkoutSessionId?: string;
};

export function IntakeForm({ checkoutSessionId }: Props) {
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    vat: "",
    website: "",
    goals: "",
    notes: "",
  });

  // checkoutSessionId is optional and only used for matching intake -> payment.

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/intake", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, checkoutSessionId }),
      });

      if (!res.ok) throw new Error("submit failed");
      setDone(true);
    } catch {
      alert("Er ging iets mis. Probeer opnieuw of mail info@hazier.be");
    } finally {
      setLoading(false);
    }
  };

  if (done) {
    return (
      <Card className="p-6">
        <h2 className="text-xl font-bold text-foreground">Intake ontvangen ✅</h2>
        <p className="mt-2 text-text-secondary">
          Merci! We nemen snel contact op. Als het dringend is: bel 0477 19 09 18.
        </p>
      </Card>
    );
  }

  return (
    <Card className="p-6">
      <form onSubmit={onSubmit} className="grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm font-semibold text-foreground">Naam</label>
          <input
            className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-foreground"
            value={form.name}
            onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
            required
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-foreground">Email</label>
          <input
            type="email"
            className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-foreground"
            value={form.email}
            onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
            required
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-foreground">Bedrijf</label>
          <input
            className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-foreground"
            value={form.company}
            onChange={(e) => setForm((f) => ({ ...f, company: e.target.value }))}
            required
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-foreground">BTW-nummer</label>
          <input
            className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-foreground"
            value={form.vat}
            onChange={(e) => setForm((f) => ({ ...f, vat: e.target.value }))}
            placeholder="BE0xxx..."
          />
          <p className="text-xs text-text-tertiary">(Je geeft dit ook in Stripe in; dit is voor dubbele zekerheid.)</p>
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-foreground">Website URL</label>
          <input
            className="h-11 rounded-lg border border-white/10 bg-white/5 px-3 text-foreground"
            value={form.website}
            onChange={(e) => setForm((f) => ({ ...f, website: e.target.value }))}
            placeholder="https://..."
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-foreground">Doelen</label>
          <textarea
            className="min-h-28 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-foreground"
            value={form.goals}
            onChange={(e) => setForm((f) => ({ ...f, goals: e.target.value }))}
            placeholder="Wat wil je bereiken? (leads, omzet, lokale zichtbaarheid, ... )"
          />
        </div>

        <div className="grid gap-2">
          <label className="text-sm font-semibold text-foreground">Extra info</label>
          <textarea
            className="min-h-24 rounded-lg border border-white/10 bg-white/5 px-3 py-2 text-foreground"
            value={form.notes}
            onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
            placeholder="Toegang, tools, concurrenten, deadlines, ..."
          />
        </div>

        <Button type="submit" disabled={loading}>
          {loading ? "Versturen..." : "Verstuur intake"}
        </Button>
      </form>
    </Card>
  );
}
