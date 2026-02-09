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
    title: niche.webdesignTitle,
    description: `Professionele webdesign voor ${niche.naam.toLowerCase()}. Websites die indruk maken en converteren.`,
    openGraph: {
      title: niche.webdesignTitle,
      description: `Professionele webdesign voor ${niche.naam.toLowerCase()}`,
    },
  };
}

export default async function WebdesignNichePage({ params }: Props) {
  const { niche: nicheSlug } = await params;
  const niche = nichesData.find(n => n.slug === nicheSlug);

  if (!niche) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">404 - Pagina niet gevonden</h1>
          <p className="text-text-secondary mb-8">De gevraagde niche pagina bestaat niet.</p>
          <Button asChild>
            <Link href="/diensten/webdesign">Terug naar Webdesign services</Link>
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
              <Badge variant="secondary" className="mb-4">Specialistische Webdesign</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Webdesign voor <span className="text-accent">{niche.naam}</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Professionele websites speciaal ontworpen voor {niche.naam.toLowerCase()}. 
                Visueel aantrekkelijk en strategisch gebouwd voor conversie.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Waarom specialistische webdesign voor {niche.naam}?
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Elke industrie heeft unieke behoeften als het gaat om webdesign. Voor {niche.naam.toLowerCase()} 
                    is het essentieel dat je website niet alleen professioneel oogt, maar ook optimaal is 
                    ingericht voor jouw specifieke doelgroep.
                  </p>
                  <p>
                    Onze websites voor {niche.naam.toLowerCase()} zijn ontworpen met begrip van jouw 
                    klanten, hun gedrag en wat hen aanzet tot actie.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Wat je website krijgt:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      `Design op maat voor ${niche.naam.toLowerCase()}`,
                      "Mobiel-first responsive ontwerp",
                      "SEO-geoptimaliseerde structuur", 
                      "Snelle laadtijden (Core Web Vitals)",
                      "Conversie-geoptimaliseerde call-to-actions",
                      "Gebruiksvriendelijk Content Management System",
                      "Professionele content en fotografie"
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
                    Webdesign Resultaten
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Conversie verbetering</span>
                      <span className="font-bold text-accent">+180%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Tijd op website</span>
                      <span className="font-bold text-accent">+120%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Mobiele ervaring</span>
                      <span className="font-bold text-accent">100%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Laadsnelheid</span>
                      <span className="font-bold text-accent">&lt;3 sec</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2">🎨 Gratis Design Preview</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Zie hoe een nieuwe website eruit kan zien voor jouw {niche.naam.toLowerCase()} bedrijf. 
                    Gratis mockup en strategiesessie.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Preview aanvragen</Link>
                  </Button>
                </div>

                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/cases">Bekijk onze websites</Link>
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