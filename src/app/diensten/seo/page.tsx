import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "SEO Services | Hazier - Hoger in Google",
  description: "Professionele SEO services voor meer organisch verkeer. Technische SEO, content optimalisatie, link building en lokale SEO.",
};

export default function SEOPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              SEO <span className="text-accent">Services</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              Professionele SEO optimalisatie voor meer organisch verkeer en betere conversies.
            </p>
            <div className="text-text-tertiary">
              🚧 Deze pagina is in ontwikkeling. Binnenkort beschikbaar!
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}