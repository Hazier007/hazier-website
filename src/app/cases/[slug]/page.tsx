import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import casesData from "@/data/cases.json";

interface CasePageProps {
  params: {
    slug: string;
  };
}

// Generate static params for all cases
export async function generateStaticParams() {
  return casesData.map((caseItem) => ({
    slug: caseItem.slug,
  }));
}

// Generate metadata for each case
export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const caseItem = casesData.find(c => c.slug === params.slug);
  
  if (!caseItem) {
    return {
      title: "Case Not Found | Hazier",
    };
  }

  return {
    title: `${caseItem.titel} Case Study | Hazier - ${caseItem.type}`,
    description: `${caseItem.beschrijving} Bekijk de volledige case study met resultaten, strategie en implementatie.`,
  };
}

export default function CasePage({ params }: CasePageProps) {
  const caseItem = casesData.find(c => c.slug === params.slug);

  if (!caseItem) {
    notFound();
  }

  // Get related cases (same type or similar services)
  const relatedCases = casesData
    .filter(c => 
      c.slug !== caseItem.slug && 
      (c.type === caseItem.type || c.services.some(s => caseItem.services.includes(s)))
    )
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Case Study
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              {caseItem.titel}
            </h1>
            <p className="text-xl text-text-secondary mb-8">
              {caseItem.beschrijving}
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {caseItem.services.map((service, index) => (
                <Badge key={index} variant="outline" className="text-accent">
                  {service}
                </Badge>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Vergelijkbaar Project Starten</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href={`https://${caseItem.website}`} target="_blank" rel="noopener noreferrer">
                  Website Bezoeken →
                </a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Project Info */}
        <Section className="py-8 bg-accent/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-lg font-bold text-foreground">Website</div>
                <div className="text-accent font-medium">{caseItem.website}</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-bold text-foreground">Project Type</div>
                <div className="text-text-secondary">{caseItem.type}</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-bold text-foreground">Timeline</div>
                <div className="text-text-secondary">{caseItem.timeline}</div>
              </div>
              <div className="space-y-2">
                <div className="text-lg font-bold text-foreground">Klant</div>
                <div className="text-text-secondary">{caseItem.klant}</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Project Overview */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Challenge */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    De Uitdaging
                  </h2>
                  <div className="prose prose-lg max-w-none text-text-secondary">
                    <p>
                      {caseItem.type === "Rank & Rent" && "Het doel was om vanuit het niets een dominante positie op te bouwen in de lokale markt voor slotenmaker services in Oost-Vlaanderen. Zonder bestaande website of online aanwezigheid moesten we snel zichtbaar worden voor relevante zoektermen."}
                      {caseItem.type === "E-commerce SEO" && "De webshop had moeite om organisch verkeer te genereren voor commerciële zoektermen. Product pagina's rankten slecht en de conversie van organisch verkeer was laag. We moesten de volledige SEO strategie herdenken."}
                      {caseItem.type === "Local SEO" && "Als lokale dienstverlener was de online zichtbaarheid minimaal. Google My Business was niet geoptimaliseerd en de website rankte niet voor lokale zoektermen. Telefonische leads waren schaars."}
                      {caseItem.type === "Medical Practice" && "Een moderne online aanwezigheid was nodig die voldoet aan GDPR-eisen en tegelijk gebruiksvriendelijk is voor patiënten. De oude website was verouderd en niet mobiel-vriendelijk."}
                      {caseItem.type === "Tool Site" && "Het doel was om een eenvoudige maar effectieve tool te maken die zou ranken voor 'btw calculator' en related keywords, terwijl het ook daadwerkelijk nuttig zou zijn voor de doelgroep."}
                      {caseItem.type === "Calculator Tool" && "Een accurate loonberekeningtool voor de Belgische markt die zou ranken voor gerelateerde zoektermen en tegelijk leads zou genereren voor HR-gerelateerde services."}
                      {caseItem.type === "Financial Tool" && "Het ontwikkelen van een betrouwbare interessentool die voldoet aan Belgische wetgeving en tegelijk goed zou ranken voor financiële zoektermen."}
                      {caseItem.type === "SaaS Platform" && "Als B2B SaaS platform was het belangrijk om vertrouwen op te bouwen en enterprise klanten aan te trekken via de website. De conversie van bezoeker naar trial was te laag."}
                      {caseItem.type === "Programmatic SEO" && "Het doel was om de content schaal dramatisch te vergroten en long-tail keywords te domineren door automatische content generatie, zonder kwaliteit in te boeten."}
                      {caseItem.type === "Health Tool" && "Een betrouwbare zwangerschapscalculator maken die medisch accurate informatie verstrekt en tegelijk goed rankt voor pregnancy-gerelateerde zoektermen."}
                    </p>
                  </div>
                </div>

                {/* Solution */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Onze Oplossing
                  </h2>
                  <div className="prose prose-lg max-w-none text-text-secondary space-y-4">
                    <p>
                      <strong className="text-foreground">Strategische aanpak:</strong> We hebben een multi-faceted strategie ontwikkeld die {caseItem.services.join(', ').toLowerCase()} combineerde voor maximaal resultaat.
                    </p>
                    
                    <div className="grid md:grid-cols-2 gap-6 not-prose">
                      <Card className="p-6">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-lg text-foreground">SEO Optimalisatie</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <ul className="space-y-2 text-sm text-text-secondary">
                            <li>• Uitgebreide keyword research</li>
                            <li>• Technische SEO optimalisaties</li>
                            <li>• Content strategie ontwikkeling</li>
                            <li>• Link building campagne</li>
                          </ul>
                        </CardContent>
                      </Card>

                      <Card className="p-6">
                        <CardHeader className="p-0 mb-4">
                          <CardTitle className="text-lg text-foreground">User Experience</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <ul className="space-y-2 text-sm text-text-secondary">
                            <li>• Mobile-first design approach</li>
                            <li>• Snelle laadtijden (&lt; 3 sec)</li>
                            <li>• Intuïtieve navigatie</li>
                            <li>• Conversie optimalisatie</li>
                          </ul>
                        </CardContent>
                      </Card>
                    </div>

                    <p>
                      Het implementatieproces verliep gefaseerd over {caseItem.timeline}, waarbij we continu hebben gemonitord en geoptimaliseerd op basis van performance data.
                    </p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                    Behaalde Resultaten
                  </h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {Object.entries(caseItem.resultaten).map(([key, value], index) => (
                      <Card key={index} className="p-6 text-center bg-accent/5">
                        <CardHeader className="p-0 mb-2">
                          <div className="text-2xl font-bold text-accent">{value}</div>
                        </CardHeader>
                        <CardContent className="p-0">
                          <div className="text-sm text-text-secondary capitalize">
                            {key.replace(/([A-Z])/g, ' $1').trim()}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Quote */}
                <Card className="p-8 bg-gradient-to-r from-accent/10 to-purple-600/10">
                  <blockquote className="text-xl md:text-2xl font-semibold text-foreground mb-4 text-center">
                    "De samenwerking met Hazier heeft onze online aanwezigheid volledig getransformeerd. 
                    De resultaten overtroffen onze verwachtingen."
                  </blockquote>
                  <cite className="text-text-secondary text-center block">
                    — {caseItem.klant}, {caseItem.titel}
                  </cite>
                </Card>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                <Card className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-xl text-foreground">Project Details</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <div>
                      <div className="text-sm font-medium text-foreground mb-1">Services</div>
                      <div className="flex flex-wrap gap-2">
                        {caseItem.services.map((service, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {service}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground mb-1">Tags</div>
                      <div className="flex flex-wrap gap-2">
                        {caseItem.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground mb-1">Timeline</div>
                      <div className="text-sm text-text-secondary">{caseItem.timeline}</div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6 bg-accent/5">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-foreground">Vergelijkbaar Project?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-4">
                    <p className="text-sm text-text-secondary">
                      Herken je je in deze uitdaging? Laten we bespreken hoe wij jouw project 
                      kunnen helpen slagen met een vergelijkbare aanpak.
                    </p>
                    <Button asChild className="w-full">
                      <a href="/contact">Gratis Strategiegesprek</a>
                    </Button>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-foreground">Meer Cases</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <Button variant="outline" asChild className="w-full">
                      <a href="/cases">Alle Cases Bekijken</a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        {/* Related Cases */}
        {relatedCases.length > 0 && (
          <Section className="bg-background-secondary/30">
            <div className="max-w-6xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                  Gerelateerde Cases
                </h2>
                <p className="text-lg text-text-secondary">
                  Andere projecten die je interessant kunnen vinden.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {relatedCases.map((relatedCase, index) => (
                  <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video bg-gradient-to-br from-accent/20 to-purple-600/20 p-6 flex items-center justify-center">
                      <div className="text-center">
                        <h3 className="text-lg font-bold text-foreground mb-2">{relatedCase.website}</h3>
                        <Badge variant="secondary">{relatedCase.type}</Badge>
                      </div>
                    </div>
                    
                    <CardHeader className="pb-4">
                      <CardTitle className="text-lg text-foreground">{relatedCase.titel}</CardTitle>
                      <CardDescription className="text-text-secondary text-sm">
                        {relatedCase.beschrijving}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pt-0">
                      <div className="flex items-center justify-between text-sm text-text-tertiary mb-4">
                        <span>Timeline: {relatedCase.timeline}</span>
                      </div>

                      <Button asChild className="w-full group-hover:bg-accent/90 transition-colors">
                        <a href={`/cases/${relatedCase.slug}`}>
                          Case Bekijken
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </Section>
        )}

        {/* CTA Section */}
        <Section className="bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar Voor Vergelijkbare Resultaten?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Elke case begint met een gesprek. Laten we bespreken hoe wij jouw project 
              kunnen helpen slagen met onze bewezen aanpak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Project Bespreken</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/prijzen">Bekijk Pakketten</a>
              </Button>
            </div>
            <div className="mt-8 text-sm text-text-tertiary">
              📞 <a href="tel:0477190918" className="hover:text-accent transition-colors">0477 19 09 18</a> • 
              ✉️ <a href="mailto:info@hazier.be" className="hover:text-accent transition-colors">info@hazier.be</a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}