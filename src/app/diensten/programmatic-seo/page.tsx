import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Programmatic SEO | Hazier - 1000+ Pagina's Automatisch",
  description: "Programmatic SEO expertise: automatische content generatie, schaalbare templates, 500+ SEO-pagina's, long-tail keyword dominantie. De geheime wapen voor SEO succes.",
};

export default function ProgrammaticSEOPage() {
  const benefits = [
    {
      title: "Schaalbare Content Generatie",
      description: "Genereer honderden tot duizenden SEO-geoptimaliseerde pagina's automatisch vanuit je data.",
      stat: "500+ pagina's"
    },
    {
      title: "Long-tail Keyword Dominantie", 
      description: "Target specifieke, low-competition keywords die je concurrenten missen.",
      stat: "10x meer traffic"
    },
    {
      title: "Template-driven Aanpak",
      description: "Herbruikbare templates die consistent hoogwaardige content produceren.",
      stat: "95% tijdsbesparing"
    },
    {
      title: "Data-gedreven Optimalisatie",
      description: "Gebruik je bestaande product- en servicedata voor automatische content creatie.",
      stat: "0 handmatig werk"
    }
  ];

  const useCases = [
    {
      category: "E-commerce",
      examples: [
        "Product + locatie pagina's (iPhone reparatie Amsterdam)",
        "Merk + service combinaties (Samsung scherm vervangen)",
        "Prijsvergelijking pagina's per product"
      ]
    },
    {
      category: "Dienstverlening",
      examples: [
        "Service + stad pagina's (loodgieter Antwerpen)",
        "Probleem + oplossing content (lekkage badkamer)",
        "FAQ pagina's per dienst/locatie"
      ]
    },
    {
      category: "SaaS & Tools",
      examples: [
        "Tool + use case pagina's (CRM voor tandartsen)",
        "Integratie pagina's (Slack + Trello koppeling)",
        "Sector-specifieke landingspagina's"
      ]
    }
  ];

  const process = [
    {
      step: "1",
      title: "Data Analyse & Strategie",
      description: "We analyseren je bestaande data en identificeren schaalbare content kansen."
    },
    {
      step: "2", 
      title: "Template Ontwikkeling",
      description: "Creëren van flexibele templates die je data omzetten in SEO-content."
    },
    {
      step: "3",
      title: "Automatische Generatie",
      description: "Implementatie van systemen die automatisch pagina's genereren en publiceren."
    },
    {
      step: "4",
      title: "Performance Monitoring",
      description: "Continue optimalisatie gebaseerd op ranking en traffic data."
    }
  ];

  const results = [
    { metric: "1000+", label: "Automatisch gegenereerde pagina's", },
    { metric: "800%", label: "Gemiddelde traffic groei" },
    { metric: "500+", label: "Long-tail keyword rankings" },
    { metric: "95%", label: "Minder handmatig content werk" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="default" className="mb-6 bg-gradient-to-r from-accent to-purple-600">
              🚀 Hazier's Geheime Wapen
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              <span className="text-accent">Programmatic SEO</span><br/>
              1000+ Pagina's Automatisch
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Terwijl je concurrenten handmatig 10 pagina's maken, genereren wij er automatisch 1000. 
              Programmatic SEO is de toekomst van schaalbare content marketing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Strategie Gesprek Boeken</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cases/poxy-programmatic">Case Study Bekijken</a>
              </Button>
            </div>
            <div className="mt-8 text-sm text-text-tertiary">
              ⚡ Resultaat: 800% meer organisch traffic in 4 maanden
            </div>
          </div>
        </Section>

        {/* Results Bar */}
        <Section className="py-8 bg-accent/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {results.map((result, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl font-bold text-accent">{result.metric}</div>
                  <div className="text-sm text-text-secondary">{result.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Benefits Section */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Waarom Programmatic SEO?
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Traditionele SEO schaalt niet. Programmatic SEO wel. Dit is hoe je echt domineert.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-6 relative overflow-hidden">
                  <div className="absolute top-4 right-4">
                    <Badge variant="secondary" className="text-accent font-bold">
                      {benefit.stat}
                    </Badge>
                  </div>
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-xl text-foreground pr-20">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-text-secondary text-base">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Use Cases Section */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perfect Voor Elke Sector
              </h2>
              <p className="text-lg text-text-secondary">
                Programmatic SEO werkt voor elke business met schaalbare data.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {useCases.map((useCase, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-xl text-accent flex items-center">
                      {useCase.category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3">
                    {useCase.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="flex items-start space-x-3">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-secondary text-sm">{example}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Process Section */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ons Programmatic SEO Proces
              </h2>
              <p className="text-lg text-text-secondary">
                Van data tot dominantie in 4 stappen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="p-6 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <CardHeader className="p-0 mb-4 pt-4">
                    <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-text-secondary text-sm">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Social Proof */}
        <Section className="bg-gradient-to-r from-accent/10 to-purple-600/10">
          <div className="max-w-4xl mx-auto text-center">
            <blockquote className="text-2xl md:text-3xl font-bold text-foreground mb-6">
              "Van 200 naar 15.000 organieke bezoekers per maand. 
              Programmatic SEO heeft ons business getransformeerd."
            </blockquote>
            <cite className="text-text-secondary">
              — Poxy.be Case Study
            </cite>
            <div className="mt-8">
              <Button variant="outline" size="lg" asChild>
                <a href="/cases/poxy-programmatic">Volledige Case Study →</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-accent text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Klaar Om Te Schalen?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
              Programmatic SEO is niet voor iedereen. Het is alleen voor businesses die serieus zijn 
              over dominantie in hun markt. Ben jij er klaar voor?
            </p>
            <div className="space-y-4">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact" className="bg-white text-accent hover:bg-gray-100">
                  Strategie Gesprek Boeken
                </a>
              </Button>
              <div className="text-sm opacity-75">
                📞 <a href="tel:0477190918" className="hover:opacity-100 transition-opacity">0477 19 09 18</a> • 
                ✉️ <a href="mailto:info@hazier.be" className="hover:opacity-100 transition-opacity">info@hazier.be</a>
              </div>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}