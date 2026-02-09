import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import Link from "next/link";

import stedenData from "@/data/steden.json";

interface Props {
  params: { stad: string };
}

export async function generateStaticParams() {
  return stedenData.map((stad) => ({
    stad: stad.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const stad = stedenData.find(s => s.slug === params.stad);
  
  if (!stad) {
    return {
      title: "Stad niet gevonden | Hazier",
      description: "De gevraagde stad pagina kon niet worden gevonden.",
    };
  }

  return {
    title: `SEO ${stad.naam} | Lokale SEO Services - Hazier`,
    description: `Professionele SEO services in ${stad.naam}, ${stad.provincie}. Meer lokale klanten via Google met bewezen Local SEO strategieën.`,
    openGraph: {
      title: `SEO ${stad.naam} | Lokale SEO Services`,
      description: `Professionele SEO services in ${stad.naam}. Meer lokale klanten via Google.`,
    },
  };
}

export default function SEOStadPage({ params }: Props) {
  const stad = stedenData.find(s => s.slug === params.stad);

  if (!stad) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">404 - Pagina niet gevonden</h1>
          <p className="text-text-secondary mb-8">De gevraagde stad pagina bestaat niet.</p>
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
              <Badge variant="secondary" className="mb-4">Lokale SEO</Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                SEO in <span className="text-accent">{stad.naam}</span>
              </h1>
              <p className="text-xl text-text-secondary leading-relaxed">
                Professionele SEO services in {stad.naam}, {stad.provincie}. 
                Meer lokale klanten via Google met bewezen strategieën.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  Lokale SEO in {stad.naam}
                </h2>
                <div className="space-y-4 text-text-secondary">
                  <p>
                    Als lokaal bedrijf in {stad.naam} wil je gevonden worden door klanten in jouw omgeving. 
                    Onze Local SEO expertise zorgt ervoor dat jouw bedrijf bovenaan staat wanneer mensen 
                    zoeken naar jouw diensten in {stad.naam}.
                  </p>
                  <p>
                    We kennen de lokale markt in {stad.provincie} en weten precies hoe we jouw bedrijf 
                    zichtbaar kunnen maken voor potentiële klanten in {stad.naam} en omgeving.
                  </p>
                </div>

                <div className="mt-8">
                  <h3 className="text-xl font-semibold text-foreground mb-4">
                    Lokale SEO Services:
                  </h3>
                  <ul className="space-y-3">
                    {[
                      `Google My Business optimalisatie voor ${stad.naam}`,
                      "Lokale keyword optimalisatie",
                      "NAP consistency (Name, Address, Phone)", 
                      "Lokale citations en directory listings",
                      "Review management en reputatiebeheer",
                      `Geo-targeted content voor ${stad.provincie}`,
                      "Local pack optimalisatie"
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
                    Lokale Resultaten
                  </h3>
                  <div className="space-y-4">
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Local pack rankings</span>
                      <span className="font-bold text-accent">Top 3</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Google My Business views</span>
                      <span className="font-bold text-accent">+300%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Lokale leads</span>
                      <span className="font-bold text-accent">+250%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-text-secondary">Telefoonoproepen</span>
                      <span className="font-bold text-accent">+200%</span>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-accent/5 rounded-xl border border-accent/20">
                  <h4 className="font-semibold text-foreground mb-2">📍 Lokale SEO Audit</h4>
                  <p className="text-text-secondary text-sm mb-4">
                    Gratis analyse van jouw huidige lokale zichtbaarheid in {stad.naam} en 
                    concrete aanbevelingen voor verbetering.
                  </p>
                  <Button className="w-full" asChild>
                    <Link href="/contact">Gratis audit aanvragen</Link>
                  </Button>
                </div>

                <div className="p-6 bg-background-tertiary rounded-xl border border-border">
                  <h4 className="font-semibold text-foreground mb-4">📞 Direct contact</h4>
                  <div className="space-y-2 text-sm text-text-secondary">
                    <p>📧 Email: info@hazier.be</p>
                    <p>📱 Telefoon: +32 123 456 789</p>
                    <p>📍 Actief in heel {stad.provincie}</p>
                  </div>
                </div>

                <div className="text-center">
                  <Button variant="outline" asChild>
                    <Link href="/cases">Bekijk lokale cases</Link>
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