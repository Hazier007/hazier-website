import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import niches from "@/data/niches.json";
import steden from "@/data/steden.json";

export const metadata: Metadata = {
  title: "SEO Services | Hazier - Hoger in Google, Meer Klanten",
  description: "Professionele SEO optimalisatie voor meer organisch verkeer en betere conversies. Technische SEO, content marketing, link building en lokale SEO. Bewezen resultaten.",
};

export default function SEOPage() {
  const seoServices = [
    {
      icon: "🔍",
      title: "Technische SEO Audit",
      description: "Volledige analyse van je website: snelheid, indexering, crawlfouten, structured data, mobile-friendliness en meer. We vinden élke bottleneck.",
      features: ["Core Web Vitals optimalisatie", "Crawl & indexatie analyse", "Schema markup implementatie", "Site architectuur review"]
    },
    {
      icon: "📝",
      title: "Content & On-Page SEO",
      description: "Keyword research, content strategie en on-page optimalisatie die je doelgroep aanspreekt én Google overtuigt.",
      features: ["Keyword research & mapping", "Content gap analyse", "Meta tags & heading optimalisatie", "Interne linkstructuur"]
    },
    {
      icon: "🔗",
      title: "Link Building",
      description: "Hoogwaardige, relevante backlinks die je domeinautoriteit verhogen. Geen spam, alleen kwaliteit.",
      features: ["Outreach campagnes", "Guest posting", "Digital PR", "Broken link building"]
    },
    {
      icon: "📍",
      title: "Lokale SEO",
      description: "Domineer de lokale zoekresultaten met Google Business Profile optimalisatie en lokale rankings.",
      features: ["Google Business Profile", "Lokale citations", "Review management", "Lokale content strategie"]
    },
    {
      icon: "🛒",
      title: "E-commerce SEO",
      description: "Meer organisch verkeer naar je webshop. Product SEO, categoriepagina's en commerciële keywords.",
      features: ["Product page optimalisatie", "Categorie structuur", "Rich snippets voor producten", "Conversie optimalisatie"]
    },
    {
      icon: "📊",
      title: "Rapportage & Analytics",
      description: "Maandelijkse rapportages met duidelijke KPI's. Je weet altijd precies waar je staat en waar je naartoe gaat.",
      features: ["Google Analytics setup", "Search Console monitoring", "Maandelijkse performance reports", "Competitor tracking"]
    },
  ];

  const process = [
    {
      step: "01",
      title: "SEO Audit & Analyse",
      description: "We starten met een grondige technische en strategische analyse van je website, concurrenten en markt."
    },
    {
      step: "02",
      title: "Strategie & Roadmap",
      description: "Op basis van de audit maken we een geprioriteerde roadmap met quick wins en lange termijn acties."
    },
    {
      step: "03",
      title: "Implementatie",
      description: "We voeren de optimalisaties uit: technische fixes, content creatie, on-page SEO en link building."
    },
    {
      step: "04",
      title: "Monitor & Optimaliseer",
      description: "Continue monitoring van rankings, traffic en conversies. We optimaliseren maandelijks op basis van data."
    },
  ];

  const results = [
    { metric: "+350%", label: "Gemiddelde traffic groei" },
    { metric: "Top 3", label: "Rankings voor target keywords" },
    { metric: "6 mnd", label: "Gemiddelde tijd tot ROI" },
    { metric: "50+", label: "Tevreden klanten" },
  ];

  const featuredNiches = niches.slice(0, 12);
  const featuredSteden = steden.slice(0, 12);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              SEO Services
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Hoger in Google, <span className="text-accent">Meer Klanten</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              SEO is geen magie — het is strategie, techniek en consistentie. Wij zorgen dat jouw 
              bedrijf gevonden wordt door de mensen die actief zoeken naar wat jij aanbiedt.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Gratis SEO Analyse Aanvragen</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/prijzen">Bekijk SEO Pakketten</a>
              </Button>
            </div>
            <div className="mt-8 text-sm text-text-tertiary">
              ⚡ Gratis audit • 🎯 Bewezen methodes • 📈 Meetbare resultaten
            </div>
          </div>
        </Section>

        {/* Results Bar */}
        <Section className="bg-accent/5 border-y border-accent/10">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {results.map((item, index) => (
                <div key={index}>
                  <div className="text-3xl md:text-4xl font-bold text-accent mb-1">{item.metric}</div>
                  <div className="text-sm text-text-secondary">{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Services Grid */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Wat Onze SEO Services Omvatten
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Een complete SEO aanpak die alle aspecten van zoekmachine optimalisatie dekt.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {seoServices.map((service, index) => (
                <Card key={index} className="p-6 h-full">
                  <CardHeader className="p-0 mb-4">
                    <div className="text-3xl mb-3">{service.icon}</div>
                    <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-text-secondary mb-4">
                      {service.description}
                    </CardDescription>
                    <ul className="space-y-2">
                      {service.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-2 text-sm">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ons SEO Proces
              </h2>
              <p className="text-lg text-text-secondary">
                Een bewezen aanpak in vier stappen voor duurzame groei.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {process.map((item, index) => (
                <Card key={index} className="p-6 text-center relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <CardHeader className="p-0 mb-3 pt-4">
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

        {/* Pricing Preview */}
        <Section>
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SEO Pakketten
              </h2>
              <p className="text-lg text-text-secondary">
                Transparante prijzen, geen verborgen kosten. Maandelijks opzegbaar.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: "SEO Starter",
                  price: "€349",
                  period: "/maand",
                  description: "Perfect voor kleine bedrijven die willen starten met SEO.",
                  features: ["Technische SEO audit", "5 target keywords", "On-page optimalisatie", "Maandelijkse rapportage", "Google Business Profile"],
                  highlight: false
                },
                {
                  name: "SEO Professional",
                  price: "€699",
                  period: "/maand",
                  description: "Voor bedrijven die serieus willen groeien via organisch verkeer.",
                  features: ["Alles van Starter", "15 target keywords", "Content creatie (4 artikelen/mnd)", "Link building (5 links/mnd)", "Competitor analyse", "Conversie optimalisatie"],
                  highlight: true
                },
                {
                  name: "SEO Enterprise",
                  price: "Op maat",
                  period: "",
                  description: "Voor grote websites en ambitieuze groeidoelen.",
                  features: ["Alles van Professional", "Onbeperkt keywords", "Dedicated SEO specialist", "Wekelijkse rapportage", "Programmatic SEO", "Technical consulting"],
                  highlight: false
                },
              ].map((pkg, index) => (
                <Card key={index} className={`p-6 h-full flex flex-col ${pkg.highlight ? 'ring-2 ring-accent bg-accent/5' : ''}`}>
                  {pkg.highlight && (
                    <Badge className="self-start mb-4">Meest Populair</Badge>
                  )}
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-xl text-foreground">{pkg.name}</CardTitle>
                    <div className="mt-2">
                      <span className="text-3xl font-bold text-accent">{pkg.price}</span>
                      <span className="text-text-tertiary">{pkg.period}</span>
                    </div>
                    <CardDescription className="text-text-secondary mt-2">
                      {pkg.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="p-0 flex-1 flex flex-col">
                    <ul className="space-y-3 mb-6 flex-1">
                      {pkg.features.map((feature, fIndex) => (
                        <li key={fIndex} className="flex items-start space-x-3 text-sm">
                          <span className="text-accent">✓</span>
                          <span className="text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      className="w-full"
                      variant={pkg.highlight ? 'primary' : 'outline'}
                      asChild
                    >
                      <a href="/contact">Offerte Aanvragen</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-8">
              <Link href="/prijzen" className="text-accent hover:text-accent/80 transition-colors font-medium">
                Bekijk alle pakketten en diensten →
              </Link>
            </div>
          </div>
        </Section>

        {/* SEO per Niche */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SEO Per Sector
              </h2>
              <p className="text-lg text-text-secondary">
                Gespecialiseerde SEO strategieën voor jouw branche.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {featuredNiches.map((niche) => (
                <Link
                  key={niche.slug}
                  href={`/diensten/seo/bedrijven/${niche.slug}`}
                  className="px-4 py-3 bg-background border border-border rounded-lg text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors text-center"
                >
                  SEO voor {niche.naam}
                </Link>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-text-tertiary text-sm">
                En {niches.length - featuredNiches.length}+ andere sectoren
              </p>
            </div>
          </div>
        </Section>

        {/* SEO per Stad */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Lokale SEO Per Stad
              </h2>
              <p className="text-lg text-text-secondary">
                Domineer de zoekresultaten in jouw regio.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
              {featuredSteden.map((stad) => (
                <Link
                  key={stad.slug}
                  href={`/diensten/seo/locaties/${stad.slug}`}
                  className="px-4 py-3 bg-background border border-border rounded-lg text-sm text-text-secondary hover:text-accent hover:border-accent/30 transition-colors text-center"
                >
                  SEO bureau {stad.naam}
                </Link>
              ))}
            </div>

            <div className="text-center mt-6">
              <p className="text-text-tertiary text-sm">
                En {steden.length - featuredSteden.length}+ andere steden in België en Nederland
              </p>
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section className="bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar Om Hoger Te Ranken?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Vraag een gratis SEO analyse aan en ontdek precies waar jouw kansen liggen. 
              Binnen 48 uur heb je een concreet rapport met actiepunten.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Gratis SEO Analyse</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:+32477190918">Bel 0477 19 09 18</a>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
