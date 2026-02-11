import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { IntakeForm } from "@/components/intake/IntakeForm";

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

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <Section size="xl">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Bedankt!</h1>
            <p className="text-lg text-text-secondary mb-8">
              Je betaling is gelukt. Vul hieronder de intake in, dan kunnen we meteen starten.
            </p>

            <IntakeForm checkoutSessionId={sessionId} />

            <p className="mt-6 text-sm text-text-tertiary">
              Liever gewoon bellen? <a className="underline hover:text-accent" href="tel:0477190918">0477 19 09 18</a>
            </p>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
