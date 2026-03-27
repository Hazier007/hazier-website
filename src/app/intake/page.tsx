import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { IntakeForm } from "@/components/intake/IntakeForm";
import { Card } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Intake | Hazier",
  description: "Bedankt! Vul de intake in zodat we direct kunnen starten.",
};

export default async function IntakePage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const sp = await searchParams;
  const sessionIdRaw = sp.session_id;
  const sessionId = Array.isArray(sessionIdRaw) ? sessionIdRaw[0] : sessionIdRaw;

  // Server-side verification of checkout session
  let verified = false;
  let customerEmail: string | null = null;
  let customerName: string | null = null;
  let pakket: string | null = null;

  if (sessionId) {
    try {
      const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000";
      const res = await fetch(`${baseUrl}/api/checkout/verify?session_id=${sessionId}`, {
        cache: "no-store",
      });
      if (res.ok) {
        const data = await res.json();
        verified = data.verified === true;
        customerEmail = data.customerEmail ?? null;
        customerName = data.customerName ?? null;
        pakket = data.pakket ?? null;
      }
    } catch {
      // Verification failed, show error state
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <Section size="xl">
          <div className="max-w-3xl mx-auto">
            {!sessionId ? (
              <Card className="p-6">
                <h1 className="text-2xl font-bold text-foreground mb-2">Geen betaling gevonden</h1>
                <p className="text-text-secondary mb-4">
                  Je bent hier terechtgekomen zonder een geldige checkout sessie.
                </p>
                <Button asChild>
                  <a href="/prijzen">Bekijk onze pakketten</a>
                </Button>
              </Card>
            ) : !verified ? (
              <Card className="p-6">
                <h1 className="text-2xl font-bold text-foreground mb-2">Betaling niet bevestigd</h1>
                <p className="text-text-secondary mb-4">
                  We konden je betaling niet verifiëren. Neem contact op als je denkt dat dit een fout is.
                </p>
                <div className="flex gap-3">
                  <Button asChild>
                    <a href="/prijzen">Terug naar pakketten</a>
                  </Button>
                  <Button variant="outline" asChild>
                    <a href="mailto:info@hazier.be">Contact</a>
                  </Button>
                </div>
              </Card>
            ) : (
              <>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Bedankt!</h1>
                <p className="text-lg text-text-secondary mb-2">
                  Je betaling is gelukt{pakket ? ` voor ${pakket}` : ""}. Vul hieronder de intake in, dan kunnen we meteen starten.
                </p>

                <IntakeForm
                  checkoutSessionId={sessionId}
                  defaultName={customerName ?? undefined}
                  defaultEmail={customerEmail ?? undefined}
                />

                <p className="mt-6 text-sm text-text-tertiary">
                  Liever gewoon bellen? <a className="underline hover:text-accent" href="tel:0477190918">0477 19 09 18</a>
                </p>
              </>
            )}
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
