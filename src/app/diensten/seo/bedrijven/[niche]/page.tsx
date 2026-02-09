import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

import nichesData from "@/data/niches.json";

interface Props {
  params: Promise<{ niche: string }>;
}

export async function generateStaticParams() {
  return nichesData.map((niche) => ({
    niche: niche.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { niche: nicheSlug } = await params;
  const niche = nichesData.find(n => n.slug === nicheSlug);
  
  if (!niche) {
    return {
      title: "Niche niet gevonden | Hazier",
      description: "De gevraagde niche pagina kon niet worden gevonden.",
    };
  }

  return {
    title: niche.seoTitle,
    description: niche.beschrijving,
    openGraph: {
      title: niche.seoTitle,
      description: niche.beschrijving,
    },
  };
}

export default async function SEONichePage({ params }: Props) {
  const { niche: nicheSlug } = await params;
  const niche = nichesData.find(n => n.slug === nicheSlug);

  if (!niche) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">404 - Pagina niet gevonden</h1>
          <p className="text-text-secondary mb-8">De gevraagde niche pagina bestaat niet.</p>
          <Button asChild>
            <Link href="/diensten/seo">Terug naar SEO services</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        <Section size="xl">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <Badge variant="secondary" className="mb-4">Specialistische SEO</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                SEO voor <span className="text-accent">{niche.naam}</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                {niche.beschrijving}. Bewezen strategieën die werken voor {niche.naam.toLowerCase()}.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Waarom SEO voor {niche.naam}?
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    In de competitieve wereld van {niche.naam.toLowerCase()} is online zichtbaarheid cruciaal. 
                    Onze gespecialiseerde SEO aanpak zorgt ervoor dat jouw bedrijf gevonden wordt door de juiste klanten.
                  </p>
                  <p>
                    We begrijpen de unieke uitdagingen en kansen binnen {niche.naam.toLowerCase()} en 
                    passen onze strategieën daarop aan voor maximaal resultaat.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Wat je krijgt:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      `Keyword research specifiek voor ${niche.naam.toLowerCase()}`,
                      "Technische SEO optimalisatie",
                      "Content strategie op maat", 
                      "Lokale SEO (indien van toepassing)",
                      "Competitor analyse binnen jouw niche",
                      "Maandelijkse rapportage en optimalisatie"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-text-secondary">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-8">
                <div className="p-6 bg-background-secondary rounded-xl border border-border">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Resultaten die tellen
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Gemiddelde traffic groei</span>
                      <span className="font-bold text-accent">+250%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Nieuwe leads per maand</span>
                      <span className="font-bold text-accent">+150%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">ROI verbetering</span>
                      <span className="font-bold text-accent">+400%</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2">🎯 Gratis SEO Audit</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Ontdek direct waar je website kan verbeteren met onze gratis, gespecialiseerde audit voor {niche.naam.toLowerCase()}.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Aanvragen</Link>
                  </Button>
                </div>

                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/cases">Bekijk onze cases</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}