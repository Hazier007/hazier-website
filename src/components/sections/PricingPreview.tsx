import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Section } from "@/components/ui/Section";
import { Check, ArrowRight } from "lucide-react";

// Import pricing data
import pricingData from "@/data/pakketten.json";

// Select featured packages for homepage
const featuredPackages = [
  {
    category: "SEO",
    package: pricingData.seo.find(p => p.naam === "Local SEO")!,
    href: "/prijzen/seo"
  },
  {
    category: "Webdesign", 
    package: pricingData.webdesign.find(p => p.naam === "Business Site")!,
    href: "/prijzen/webdesign"
  },
  {
    category: "Linkbuilding",
    package: pricingData.linkbuilding.find(p => p.naam === "Growth")!,
    href: "/prijzen/linkbuilding"
  }
];

function PricingCard({ item }: { item: typeof featuredPackages[0] }) {
  const { category, package: pkg, href } = item;
  const isPopular = 'populair' in pkg && pkg.populair;

  return (
    <Card className={`relative ${isPopular ? 'border-accent shadow-accent/20 shadow-lg' : ''}`}>
      {isPopular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <Badge className="px-4 py-1">Meest gekozen</Badge>
        </div>
      )}
      
      <CardHeader className="pb-6">
        <div className="text-center">
          <div className="text-accent font-medium text-sm mb-2 uppercase tracking-wider">
            {category}
          </div>
          
          <CardTitle className="text-2xl mb-2">
            {pkg.naam}
          </CardTitle>
          
          <div className="mb-4">
            {typeof pkg.prijs === 'number' ? (
              <div className="flex items-baseline justify-center">
                <span className="text-4xl font-bold text-foreground">
                  €{pkg.prijs}
                </span>
                <span className="text-text-secondary ml-1">
                  /{pkg.periode}
                </span>
              </div>
            ) : (
              <div className="text-2xl font-bold text-accent">
                {pkg.prijs}
              </div>
            )}
          </div>

          <CardDescription className="text-base">
            {pkg.beschrijving}
          </CardDescription>
        </div>
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          {/* Features list */}
          <ul className="space-y-3">
            {pkg.features.slice(0, 5).map((feature, index) => (
              <li key={index} className="flex items-start">
                <Check className="w-4 h-4 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-text-secondary text-sm">
                  {feature}
                </span>
              </li>
            ))}
            {pkg.features.length > 5 && (
              <li className="flex items-start">
                <span className="text-text-tertiary text-sm ml-7">
                  + {pkg.features.length - 5} meer features
                </span>
              </li>
            )}
          </ul>

          {/* CTA Button */}
          <div className="pt-4">
            {'contact_required' in pkg && pkg.contact_required ? (
              <Button 
                variant={isPopular ? "primary" : "secondary"} 
                className="w-full" 
                asChild
              >
                <Link href="/contact">
                  Offerte aanvragen
                </Link>
              </Button>
            ) : (
              <Button 
                variant={isPopular ? "primary" : "secondary"} 
                className="w-full group" 
                asChild
              >
                <Link href={href}>
                  Bekijk alle features
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            )}
          </div>

          {/* Delivery info */}
          {'delivery' in pkg && pkg.delivery && (
            <div className="text-center text-xs text-text-tertiary">
              Oplevering: {pkg.delivery}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}

export function PricingPreview() {
  return (
    <Section size="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Transparante <span className="text-accent">Prijzen</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Geen verborgen kosten, geen lange contracten. Kies het pakket dat bij jouw bedrijf past.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {featuredPackages.map((item, index) => (
          <PricingCard key={index} item={item} />
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="text-center mt-12">
        <div className="space-y-4">
          <Button size="lg" asChild>
            <Link href="/prijzen">
              Bekijk alle pakketten
            </Link>
          </Button>
          
          <p className="text-text-secondary text-sm">
            Aangepaste pakketten mogelijk • Geen setup kosten • 30 dagen geld terug garantie
          </p>
        </div>
      </div>
    </Section>
  );
}