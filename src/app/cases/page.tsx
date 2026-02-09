import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import casesData from "@/data/cases.json";

export const metadata: Metadata = {
  title: "Cases & Portfolio | Hazier - Bewezen SEO Resultaten",
  description: "Bekijk onze SEO cases en portfolio. Van 0 naar marktleider: echte resultaten voor lokale bedrijven, e-commerce en SaaS platforms.",
};

export default function CasesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Cases & Portfolio
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Bewezen <span className="text-accent">Resultaten</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Van lokale bedrijven tot internationale platforms - ontdek hoe wij onze klanten 
              hebben geholpen om hun online doelen te bereiken met SEO, webdesign en marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Jouw Project Bespreken</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/diensten">Onze Services</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Stats Section */}
        <Section className="py-8 bg-accent/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">{casesData.length}+</div>
                <div className="text-sm text-text-secondary">Succesvol afgeronde projecten</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">500%</div>
                <div className="text-sm text-text-secondary">Gemiddelde traffic groei</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">Top 3</div>
                <div className="text-sm text-text-secondary">Google rankings behaald</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-accent">100%</div>
                <div className="text-sm text-text-secondary">Tevreden klanten</div>
              </div>
            </div>
          </div>
        </Section>

        {/* Cases Grid */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Onze Cases
              </h2>
              <p className="text-lg text-text-secondary">
                Elk project is uniek. Bekijk hoe wij verschillende uitdagingen hebben aangepakt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {casesData.map((caseItem, index) => (
                <Card key={caseItem.slug} className="group hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-accent/20 to-purple-600/20 p-6 flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-bold text-foreground mb-2">{caseItem.website}</h3>
                      <Badge variant="secondary">{caseItem.type}</Badge>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-4">
                    <div className="flex items-center justify-between mb-2">
                      <CardTitle className="text-xl text-foreground">{caseItem.titel}</CardTitle>
                    </div>
                    <CardDescription className="text-text-secondary text-sm">
                      {caseItem.beschrijving}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="pt-0">
                    {/* Services Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {caseItem.services.map((service, serviceIndex) => (
                        <Badge key={serviceIndex} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>

                    {/* Key Results */}
                    <div className="space-y-2 mb-6">
                      {Object.entries(caseItem.resultaten).slice(0, 2).map(([key, value], resultIndex) => (
                        <div key={resultIndex} className="flex items-center text-sm">
                          <div className="w-2 h-2 bg-accent rounded-full mr-2 flex-shrink-0"></div>
                          <span className="text-text-secondary">{value}</span>
                        </div>
                      ))}
                    </div>

                    {/* Timeline */}
                    <div className="flex items-center justify-between text-sm text-text-tertiary mb-4">
                      <span>Timeline: {caseItem.timeline}</span>
                    </div>

                    <Button asChild className="w-full group-hover:bg-accent/90 transition-colors">
                      <a href={`/cases/${caseItem.slug}`}>
                        Case Study Bekijken
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Services Categories */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Onze Specialisaties
              </h2>
              <p className="text-lg text-text-secondary">
                Van lokale SEO tot programmatic scaling - wij dekken alle aspecten van digitale groei.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-6 text-center">
                <CardHeader className="p-0 mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🎯</span>
                  </div>
                  <CardTitle className="text-xl text-foreground">Local SEO</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-text-secondary mb-4">
                    Domineer je lokale markt met Google My Business optimalisatie en lokale rankings.
                  </CardDescription>
                  <div className="text-sm text-accent font-medium">
                    4 cases • Gemiddeld +300% lokale leads
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader className="p-0 mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">🛒</span>
                  </div>
                  <CardTitle className="text-xl text-foreground">E-commerce SEO</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-text-secondary mb-4">
                    Verhoog je online verkopen met product SEO en commerciële keyword targeting.
                  </CardDescription>
                  <div className="text-sm text-accent font-medium">
                    3 cases • Gemiddeld +250% organische verkopen
                  </div>
                </CardContent>
              </Card>

              <Card className="p-6 text-center">
                <CardHeader className="p-0 mb-6">
                  <div className="w-16 h-16 bg-accent/20 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">⚡</span>
                  </div>
                  <CardTitle className="text-xl text-foreground">Programmatic SEO</CardTitle>
                </CardHeader>
                <CardContent className="p-0">
                  <CardDescription className="text-text-secondary mb-4">
                    Schaal je content met automatische generatie van honderden SEO-pagina's.
                  </CardDescription>
                  <div className="text-sm text-accent font-medium">
                    2 cases • +1000 automatische pagina's
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar Voor Jouw Succes Verhaal?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Elk van deze cases begon met een gesprek. Laten we bespreken hoe wij jouw bedrijf 
              kunnen helpen groeien met bewezen SEO en marketing strategieën.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Gratis Strategiegesprek</a>
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