import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Webdesign & Development | Hazier - Moderne Websites",
  description: "Professionele webdesign en development services. Responsive designs, Next.js, WordPress, snelle laadtijden, CMS integratie en e-commerce oplossingen.",
};

export default function WebdesignPage() {
  const features = [
    {
      title: "Responsive Design",
      description: "Websites die perfect werken op alle apparaten - van smartphone tot desktop.",
    },
    {
      title: "Snelle Laadtijden",
      description: "Optimalisatie voor Core Web Vitals en Google PageSpeed voor betere rankings.",
    },
    {
      title: "Modern Tech Stack",
      description: "Next.js, React, TypeScript voor toekomstbestendige en onderhoudbare websites.",
    },
    {
      title: "CMS Integratie",
      description: "WordPress, Strapi of headless CMS voor eenvoudig contentbeheer.",
    },
    {
      title: "E-commerce Ready",
      description: "WooCommerce, Shopify of custom webshop oplossingen voor online verkoop.",
    },
    {
      title: "SEO Optimized",
      description: "Technische SEO en prestaties geoptimaliseerd vanaf dag één.",
    }
  ];

  const results = [
    "95+ Google PageSpeed scores",
    "100% mobiel responsive",
    "WCAG toegankelijkheid conform", 
    "3 seconden of sneller laden",
    "Cross-browser compatibility",
    "Google Analytics & Search Console"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Webdesign & Development
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Moderne Websites Die <span className="text-accent">Converteren</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Van concept tot lancering - wij ontwerpen en ontwikkelen professionele websites 
              die niet alleen mooi zijn, maar ook resultaten leveren voor jouw bedrijf.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Project Starten</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cases">Portfolio Bekijken</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Features Section */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Onze Webdesign Services
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Wij combineren creatief design met technische excellentie voor websites die impact maken.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-foreground">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-text-secondary">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Results Section */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Gegarandeerde Kwaliteit
              </h2>
              <p className="text-lg text-text-secondary">
                Onze websites voldoen aan de hoogste industrie standaarden.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {results.map((result, index) => (
                <div key={index} className="flex items-center space-x-3 p-4 bg-background-secondary/50 rounded-lg">
                  <div className="w-2 h-2 bg-accent rounded-full flex-shrink-0"></div>
                  <span className="text-foreground font-medium">{result}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Technology Stack */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Moderne Technologieën
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Wij werken met de nieuwste tools en frameworks voor optimale prestaties.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Frontend Development</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Next.js</Badge>
                    <span className="text-text-secondary">React framework voor productie</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">TypeScript</Badge>
                    <span className="text-text-secondary">Type-safe JavaScript development</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Tailwind CSS</Badge>
                    <span className="text-text-secondary">Utility-first CSS framework</span>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-foreground mb-6">Backend & CMS</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">WordPress</Badge>
                    <span className="text-text-secondary">Headless of traditioneel CMS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Strapi</Badge>
                    <span className="text-text-secondary">Modern headless CMS</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Badge variant="secondary">Node.js</Badge>
                    <span className="text-text-secondary">Server-side JavaScript runtime</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar Voor Een Nieuwe Website?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Laat ons jouw visie omzetten in een krachtige online aanwezigheid. 
              Van concept tot lancering begeleiden wij het volledige proces.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Gratis Offerte Aanvragen</a>
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