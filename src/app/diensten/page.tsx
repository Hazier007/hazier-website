import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Onze Diensten | Hazier - SEO, Webdesign & Programmatic SEO",
  description: "Ontdek alle Hazier services: SEO optimalisatie, moderne webdesign en programmatic SEO. Van lokale bedrijven tot enterprise: wij hebben de expertise.",
};

export default function DienstenPage() {
  const mainServices = [
    {
      title: "SEO Services",
      slug: "seo", 
      description: "Hoger in Google met bewezen SEO strategieën. Van technische optimalisatie tot content marketing.",
      icon: "🎯",
      features: [
        "Technische SEO audit",
        "Keyword research & strategie",
        "On-page optimalisatie",
        "Content marketing",
        "Local SEO",
        "Link building",
        "Performance tracking"
      ],
      results: [
        "Gemiddeld +350% organic traffic",
        "Top 3 rankings voor target keywords", 
        "Meetbare ROI binnen 6 maanden"
      ],
      startingPrice: "€349",
      cta: "SEO Pakket Bekijken",
      highlight: false
    },
    {
      title: "Webdesign & Development",
      slug: "webdesign",
      description: "Moderne, snelle websites die converteren. Van one-pager tot complexe webshops.",
      icon: "💻",
      features: [
        "Responsive design",
        "Next.js & React development",
        "CMS integratie",
        "E-commerce functionaliteit",
        "SEO geoptimaliseerd",
        "Performance optimalisatie",
        "Onderhoud & support"
      ],
      results: [
        "95+ Google PageSpeed scores",
        "100% mobile responsive",
        "Gemiddeld 40% hogere conversies"
      ],
      startingPrice: "€997",
      cta: "Website Laten Maken",
      highlight: true
    },
    {
      title: "Programmatic SEO",
      slug: "programmatic-seo",
      description: "Schaal je content met automatische generatie van honderden SEO-geoptimaliseerde pagina's.",
      icon: "⚡",
      features: [
        "Automatische content generatie",
        "Schaalbare template ontwikkeling", 
        "Data-driven page creation",
        "Long-tail keyword targeting",
        "Technical implementation",
        "Performance monitoring",
        "Continuous optimization"
      ],
      results: [
        "500+ automatische pagina's",
        "800% meer organic traffic",
        "Dominantie in long-tail keywords"
      ],
      startingPrice: "Op maat",
      cta: "Programmatic Strategie",
      highlight: false,
      badge: "Hazier's USP"
    }
  ];

  const additionalServices = [
    {
      title: "Local SEO",
      description: "Domineer je lokale markt met Google My Business optimalisatie en lokale rankings.",
      icon: "📍",
      price: "€349/maand"
    },
    {
      title: "E-commerce SEO", 
      description: "Verhoog je online verkopen met product SEO en commerciële keyword targeting.",
      icon: "🛒",
      price: "€699/maand"
    },
    {
      title: "Link Building",
      description: "Hoogwaardige backlinks voor meer autoriteit en betere rankings in Google.",
      icon: "🔗",
      price: "vanaf €199/maand"
    },
    {
      title: "Website Onderhoud",
      description: "Zorgeloze website met updates, security monitoring en performance optimalisatie.",
      icon: "🔧",
      price: "€99/maand"
    },
    {
      title: "SEO Audit",
      description: "Volledige technische en strategische analyse van je website en online aanwezigheid.", 
      icon: "🔍",
      price: "€297 eenmalig"
    },
    {
      title: "Content Marketing",
      description: "SEO-geoptimaliseerde content die je target audience aanspreekt en converteert.",
      icon: "✍️",
      price: "Op maat"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Onze Diensten
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Alles Voor Jouw <span className="text-accent">Online Succes</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Van SEO tot webdesign, van lokale zichtbaarheid tot programmatic scaling - wij hebben alle 
              expertise in huis om jouw online doelen te bereiken. Ontdek onze services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Gratis Strategiegesprek</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cases">Onze Resultaten</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Main Services */}
        <Section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Onze Hoofdservices
              </h2>
              <p className="text-lg text-text-secondary">
                De drie pijlers van succesvolle online groei.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {mainServices.map((service, index) => (
                <Card key={index} className={`relative p-6 h-full ${service.highlight ? 'ring-2 ring-accent bg-accent/5' : ''}`}>
                  {service.badge && (
                    <Badge className="absolute -top-3 left-4 bg-gradient-to-r from-accent to-purple-600">
                      {service.badge}
                    </Badge>
                  )}
                  {service.highlight && (
                    <Badge className="absolute -top-3 right-4">
                      Meest Populair
                    </Badge>
                  )}
                  
                  <CardHeader className="p-0 mb-6">
                    <div className="text-4xl mb-4">{service.icon}</div>
                    <CardTitle className="text-2xl text-foreground mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-text-secondary">
                      {service.description}
                    </CardDescription>
                    <div className="text-2xl font-bold text-accent mt-4">
                      vanaf {service.startingPrice}
                    </div>
                  </CardHeader>

                  <CardContent className="p-0 flex-1 flex flex-col">
                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-3 text-sm">Wat je krijgt:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start space-x-3 text-sm">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-text-secondary">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Results */}
                    <div className="mb-6">
                      <h4 className="font-bold text-foreground mb-3 text-sm">Typische resultaten:</h4>
                      <ul className="space-y-2">
                        {service.results.map((result, resultIndex) => (
                          <li key={resultIndex} className="flex items-start space-x-3 text-sm">
                            <div className="w-1.5 h-1.5 bg-green-500 rounded-full mt-1.5 flex-shrink-0"></div>
                            <span className="text-text-secondary">{result}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA */}
                    <div className="mt-auto">
                      <Button 
                        className={`w-full ${service.highlight ? 'bg-accent hover:bg-accent/90' : ''}`}
                        variant={service.highlight ? 'primary' : 'outline'}
                        asChild
                      >
                        <a href={`/diensten/${service.slug}`}>{service.cta}</a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Additional Services */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Aanvullende Services
              </h2>
              <p className="text-lg text-text-secondary">
                Specialized services voor specifieke behoeften en doelen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {additionalServices.map((service, index) => (
                <Card key={index} className="p-6 h-full">
                  <CardHeader className="p-0 mb-4">
                    <div className="flex items-center justify-between mb-3">
                      <div className="text-2xl">{service.icon}</div>
                      <Badge variant="secondary" className="text-accent">
                        {service.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-text-secondary text-sm">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Process */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ons Proces
              </h2>
              <p className="text-lg text-text-secondary">
                Hoe wij elke klant helpen van strategie tot succes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  step: "1",
                  title: "Strategiegesprek",
                  description: "We beginnen met een grondige analyse van jouw doelen, uitdagingen en huidige situatie."
                },
                {
                  step: "2", 
                  title: "Plan & Strategie",
                  description: "Op basis van onze bevindingen maken we een helder actieplan met concrete doelen."
                },
                {
                  step: "3",
                  title: "Uitvoering",
                  description: "We voeren de strategie stap voor stap uit met focus op kwaliteit en detail."
                },
                {
                  step: "4",
                  title: "Monitoring & Groei",
                  description: "Continue monitoring en optimalisatie om maximale resultaten te behalen."
                }
              ].map((item, index) => (
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

        {/* Why Choose Hazier */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Waarom Kiezen Voor Hazier?
              </h2>
              <p className="text-lg text-text-secondary">
                Wat maakt ons anders dan andere SEO en webdesign bureaus?
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {[
                {
                  title: "Ondernemers Voor Ondernemers",
                  description: "Wij zijn zelf ondernemers en begrijpen de uitdagingen waar je voor staat. Geen corporate bullshit, wel praktische oplossingen."
                },
                {
                  title: "Data-Driven Resultaten",
                  description: "Elke strategie is gebaseerd op data en onderzoek. We meten alles en optimaliseren continu voor betere resultaten."
                },
                {
                  title: "Transparante Communicatie",
                  description: "Je krijgt maandelijks heldere rapportages en weet altijd waar je aan toe bent. Geen verborgen kosten of onduidelijkheden."
                },
                {
                  title: "Bewezen Track Record",
                  description: "50+ tevreden klanten, gemiddeld 300%+ traffic groei en concrete ROI. Onze resultaten spreken voor zich."
                }
              ].map((item, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-foreground">{item.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-text-secondary">
                      {item.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar Voor Online Groei?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Welke service je ook nodig hebt - wij hebben de expertise om je te helpen slagen. 
              Laten we bespreken hoe wij jouw online doelen kunnen realiseren.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Gratis Strategiegesprek</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/prijzen">Bekijk Alle Pakketten</a>
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