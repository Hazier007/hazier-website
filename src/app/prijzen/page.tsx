import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import pakkettenData from "@/data/pakketten.json";

export const metadata: Metadata = {
  title: "Prijzen & Pakketten | Hazier - Transparante SEO & Web Tarieven",
  description: "Transparante prijzen voor SEO, webdesign en linkbuilding services. Van €199 tot custom pakketten. Geen verrassingen, wel resultaten.",
};

export default function PrijzenPage() {
  const { seo, webdesign, linkbuilding, addons } = pakkettenData;

  const formatPrice = (price: string | number, periode: string) => {
    if (typeof price === "string") return price;
    return `€${price}${periode === "eenmalig" ? "" : `/${periode}`}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Prijzen & Pakketten
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Transparante <span className="text-accent">Tarieven</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Geen verborgen kosten, geen verrassingen. Onze prijzen zijn duidelijk en onze resultaten bewezen. 
              Kies het pakket dat perfect past bij jouw ambities.
            </p>
            <div className="text-sm text-text-tertiary">
              ✅ Geen setup kosten • ✅ Maandelijks opzegbaar • ✅ 100% transparant
            </div>
          </div>
        </Section>

        {/* SEO Pakketten */}
        <Section>
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                SEO Pakketten
              </h2>
              <p className="text-lg text-text-secondary">
                Van audit tot full-service SEO - alles wat je nodig hebt om hoger te ranken.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {seo.map((pakket, index) => (
                <Card key={index} className={`relative p-6 ${pakket.populair ? 'ring-2 ring-accent bg-accent/5' : ''}`}>
                  {pakket.populair && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Meest Populair
                    </Badge>
                  )}
                  
                  <CardHeader className="p-0 mb-6 text-center">
                    <CardTitle className="text-xl text-foreground">{pakket.naam}</CardTitle>
                    <div className="text-3xl font-bold text-accent mt-2">
                      {formatPrice(pakket.prijs, pakket.periode)}
                    </div>
                    {pakket.delivery && (
                      <div className="text-sm text-text-tertiary">Oplevering: {pakket.delivery}</div>
                    )}
                    <CardDescription className="text-text-secondary mt-2">
                      {pakket.beschrijving}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <ul className="space-y-3 mb-6">
                      {pakket.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${pakket.populair ? 'bg-accent hover:bg-accent/90' : ''}`} 
                      variant={pakket.populair ? 'primary' : 'outline'}
                      asChild
                    >
                      <a href={pakket.contact_required ? "/contact" : "/contact"}>
                        {pakket.contact_required ? "Contact Opnemen" : "Pakket Kiezen"}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Webdesign Pakketten */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Webdesign Pakketten
              </h2>
              <p className="text-lg text-text-secondary">
                Van one-pager tot complete webshop - moderne websites die converteren.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {webdesign.map((pakket, index) => (
                <Card key={index} className={`relative p-6 ${pakket.populair ? 'ring-2 ring-accent bg-accent/5' : ''}`}>
                  {pakket.populair && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Meest Populair
                    </Badge>
                  )}
                  
                  <CardHeader className="p-0 mb-6 text-center">
                    <CardTitle className="text-xl text-foreground">{pakket.naam}</CardTitle>
                    <div className="text-3xl font-bold text-accent mt-2">
                      {formatPrice(pakket.prijs, pakket.periode)}
                    </div>
                    {pakket.delivery && (
                      <div className="text-sm text-text-tertiary">Oplevering: {pakket.delivery}</div>
                    )}
                    <CardDescription className="text-text-secondary mt-2">
                      {pakket.beschrijving}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <ul className="space-y-3 mb-6">
                      {pakket.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${pakket.populair ? 'bg-accent hover:bg-accent/90' : ''}`} 
                      variant={pakket.populair ? 'primary' : 'outline'}
                      asChild
                    >
                      <a href="/contact">Pakket Kiezen</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Linkbuilding Pakketten */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Linkbuilding Pakketten
              </h2>
              <p className="text-lg text-text-secondary">
                Hoogwaardige backlinks voor meer autoriteit en betere rankings.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {linkbuilding.map((pakket, index) => (
                <Card key={index} className={`relative p-6 ${pakket.populair ? 'ring-2 ring-accent bg-accent/5' : ''}`}>
                  {pakket.populair && (
                    <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                      Meest Populair
                    </Badge>
                  )}
                  
                  <CardHeader className="p-0 mb-6 text-center">
                    <CardTitle className="text-xl text-foreground">{pakket.naam}</CardTitle>
                    <div className="text-3xl font-bold text-accent mt-2">
                      {formatPrice(pakket.prijs, pakket.periode)}
                    </div>
                    <CardDescription className="text-text-secondary mt-2">
                      {pakket.beschrijving}
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <ul className="space-y-3 mb-6">
                      {pakket.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-sm text-text-secondary">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <Button 
                      className={`w-full ${pakket.populair ? 'bg-accent hover:bg-accent/90' : ''}`} 
                      variant={pakket.populair ? 'primary' : 'outline'}
                      asChild
                    >
                      <a href="/contact">Pakket Kiezen</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Add-ons */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Extra Services
              </h2>
              <p className="text-lg text-text-secondary">
                Aanvullende services om jouw online aanwezigheid compleet te maken.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {addons.map((addon, index) => (
                <Card key={index} className="p-6 text-center">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-foreground">{addon.naam}</CardTitle>
                    <div className="text-2xl font-bold text-accent">
                      {formatPrice(addon.prijs, addon.periode)}
                    </div>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-text-secondary text-sm">
                      {addon.beschrijving}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Veelgestelde Vragen
              </h2>
            </div>

            <div className="space-y-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Zijn er setup kosten?</h3>
                <p className="text-text-secondary">
                  Nee, alle pakketten hebben geen setup kosten. Je betaalt alleen de maandelijkse of eenmalige prijs zoals vermeld.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Kan ik maandelijks opzeggen?</h3>
                <p className="text-text-secondary">
                  Ja, alle doorlopende pakketten zijn maandelijks opzegbaar. We geloven in resultaten, niet in contracten.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Wat als ik geen resultaten zie?</h3>
                <p className="text-text-secondary">
                  SEO is een marathon, geen sprint. We verwachten eerste resultaten binnen 3-6 maanden. Bij geen vooruitgang maken we samen een actieplan.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Welk pakket past bij mij?</h3>
                <p className="text-text-secondary">
                  Dat hangt af van je doelen en budget. Boek een gratis strategiegesprek en we adviseren je persoonlijk.
                </p>
              </Card>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar Om Te Beginnen?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Nog vragen over onze pakketten? Of wil je een custom oplossing? 
              Laten we het bespreken in een gratis strategiegesprek.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Gratis Strategiegesprek</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cases">Bekijk Onze Cases</a>
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