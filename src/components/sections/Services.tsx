import Link from "next/link";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { ScrollStack } from "@/components/ui/ScrollStack";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Search, Code, Zap, TrendingUp, Globe, Target } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimalisatie",
    description: "Hoger in Google met bewezen SEO strategieën die resultaat leveren.",
    features: [
      "Technische SEO audit",
      "Keyword research & strategy", 
      "Content optimalisatie",
      "Link building campagnes",
      "Local SEO voor lokale bedrijven",
      "Performance tracking & rapportage"
    ],
    href: "/diensten/seo",
    badge: "Meest populair",
    stats: "+250% gemiddelde groei"
  },
  {
    icon: Code,
    title: "Webdesign & Development",
    description: "Moderne, snelle websites die converteren en indruk maken.",
    features: [
      "Responsive design voor alle apparaten",
      "SEO-vriendelijke ontwikkeling",
      "Snelle laadtijden (Core Web Vitals)",
      "CMS integratie (WordPress/Headless)",
      "E-commerce functionaliteit",
      "Onderhoud & hosting service"
    ],
    href: "/diensten/webdesign",
    badge: "Volledig op maat",
    stats: "3.2s gemiddelde laadtijd"
  },
  {
    icon: Zap,
    title: "Programmatic SEO",
    description: "Automatische generatie van honderden SEO-pagina's voor maximale dekking.",
    features: [
      "Geautomatiseerde content generatie",
      "Schaalbare template systemen",
      "Data-driven page creation",
      "Bulk content optimalisatie", 
      "Long-tail keyword targeting",
      "Enterprise-level scaling"
    ],
    href: "/diensten/programmatic-seo",
    badge: "Geavanceerd",
    stats: "500+ pagina's per project"
  }
];

export function Services() {
  return (
    <Section size="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Onze <span className="text-accent">Diensten</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Complete digitale groei oplossingen die je business naar het volgende level tillen
        </p>
      </div>

      <ScrollStack>
        {services.map((service, index) => (
          <Card key={index} className="max-w-4xl mx-auto">
            <CardHeader className="pb-6">
              <div className="flex items-start justify-between mb-4">
                <div className="p-3 bg-accent/10 rounded-xl">
                  <service.icon className="w-8 h-8 text-accent" />
                </div>
                <Badge variant="secondary">{service.badge}</Badge>
              </div>
              
              <CardTitle className="text-2xl md:text-3xl mb-2">
                {service.title}
              </CardTitle>
              
              <CardDescription className="text-lg">
                {service.description}
              </CardDescription>
            </CardHeader>

            <CardContent>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-foreground mb-4 flex items-center">
                    <Target className="w-4 h-4 mr-2 text-accent" />
                    Wat je krijgt:
                  </h4>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 mr-3 flex-shrink-0" />
                        <span className="text-text-secondary">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-6">
                  <div className="p-4 bg-background-secondary rounded-lg border border-border">
                    <div className="flex items-center mb-2">
                      <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                      <span className="font-semibold text-foreground">Resultaat</span>
                    </div>
                    <p className="text-accent font-bold text-lg">{service.stats}</p>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button className="flex-1" asChild>
                      <Link href={service.href}>
                        Meer info
                      </Link>
                    </Button>
                    <Button variant="outline" className="flex-1" asChild>
                      <Link href="/contact">
                        Offerte aanvragen
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </ScrollStack>
    </Section>
  );
}