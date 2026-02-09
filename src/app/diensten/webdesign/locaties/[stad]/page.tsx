import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

import stedenData from "@/data/steden.json";

interface Props {
  params: Promise<{ stad: string }>;
}

export async function generateStaticParams() {
  return stedenData.map((stad) => ({
    stad: stad.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { stad: stadSlug } = await params;
  const stad = stedenData.find(s => s.slug === stadSlug);
  
  if (!stad) {
    return {
      title: "Stad niet gevonden | Hazier",
      description: "De gevraagde stad pagina kon niet worden gevonden.",
    };
  }

  return {
    title: `Webdesign ${stad.naam} | Websites die Converteren - Hazier`,
    description: `Professionele webdesign in ${stad.naam}, ${stad.provincie}. Moderne, responsive websites die indruk maken en verkopen.`,
    openGraph: {
      title: `Webdesign ${stad.naam} | Moderne Websites`,
      description: `Professionele webdesign services in ${stad.naam}. Websites die indruk maken.`,
    },
  };
}

export default async function WebdesignStadPage({ params }: Props) {
  const { stad: stadSlug } = await params;
  const stad = stedenData.find(s => s.slug === stadSlug);

  if (!stad) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">404 - Pagina niet gevonden</h1>
          <p className="text-text-secondary mb-8">De gevraagde stad pagina bestaat niet.</p>
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
              <Badge variant="secondary" className="mb-4">Lokale Webdesign</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Webdesign in <span className="text-accent">{stad.naam}</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Professionele webdesign services in {stad.naam}, {stad.provincie}. 
                Moderne websites die indruk maken en verkopen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Webdesign expertise in {stad.naam}
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Als bedrijf in {stad.naam} wil je een website die niet alleen mooi is, 
                    maar ook daadwerkelijk bezoekers omzet in klanten. Onze webdesign expertise 
                    combineert visuele aantrekkingskracht met strategische conversie-optimalisatie.
                  </p>
                  <p>
                    We begrijpen de lokale markt in {stad.provincie} en weten hoe we jouw 
                    website kunnen laten opvallen tussen de concurrentie in {stad.naam}.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Webdesign Services:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      "Moderne, responsive webdesign",
                      "SEO-geoptimaliseerde ontwikkeling",
                      "Snelle laadtijden (Core Web Vitals)", 
                      "Content Management System (CMS)",
                      "E-commerce functionaliteit",
                      `Lokale optimalisatie voor ${stad.naam}`,
                      "Onderhoud en hosting service"
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
                      <span className="text-text-secondary">Laadtijd verbetering</span>
                      <span className="font-bold text-accent">-60%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Mobiele ervaring</span>
                      <span className="font-bold text-accent">100% responsive</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Klanttevredenheid</span>
                      <span className="font-bold text-accent">5★ gemiddeld</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2">🎨 Gratis Design Consult</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Ontdek hoe een nieuwe website jouw bedrijf in {stad.naam} kan helpen groeien. 
                    Gratis strategiesessie en website analyse.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Gratis consult boeken</Link>
                  </Button>
                </div>

                <div className="p-6 bg-background-tertiary rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-4">📞 Lokale service</h4>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p>📧 Email: info@hazier.be</p>
                    <p>📱 Telefoon: 0477 19 09 18</p>
                    <p>📍 Actief in heel {stad.provincie}</p>
                    <p>⏱️ Lokale meetings mogelijk</p>
                  </div>
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