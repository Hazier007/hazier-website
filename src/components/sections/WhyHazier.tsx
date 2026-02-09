import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { FloatingLines } from "@/components/ui/FloatingLines";
import { Section } from "@/components/ui/Section";
import { Target, BarChart3, Zap, Shield } from "lucide-react";

const reasons = [
  {
    icon: Target,
    title: "Resultaatgericht",
    description: "Geen vage beloften, maar meetbare resultaten. Elke actie is gericht op het behalen van jouw business doelen.",
    stats: "ROI tracking vanaf dag 1"
  },
  {
    icon: BarChart3,
    title: "Transparant",
    description: "Volledige inzage in alle processen. Maandelijkse rapportages en realtime dashboard toegang.",
    stats: "100% transparante rapportage"
  },
  {
    icon: Zap,
    title: "Data-driven",
    description: "Alle beslissingen gebaseerd op data en analytics. Geen gokwerk, maar bewezen strategieën.",
    stats: "50+ datapunten per project"
  },
  {
    icon: Shield,
    title: "Schaalbaar",
    description: "Van lokale zichtbaarheid tot enterprise scaling. Onze oplossingen groeien mee met jouw bedrijf.",
    stats: "Van 1 tot 1000+ pagina's"
  }
];

export function WhyHazier() {
  return (
    <Section size="xl" className="relative">
      <FloatingLines className="opacity-40" />
      
      <div className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Waarom <span className="text-accent">Hazier</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            Niet zomaar een SEO bureau, maar een strategische partner die écht begrijpt hoe je online groeit
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((reason, index) => (
            <Card key={index} className="text-center group hover:scale-105 transition-all duration-300">
              <CardHeader className="pb-4">
                <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-2xl w-fit group-hover:bg-accent/20 transition-colors">
                  <reason.icon className="w-8 h-8 text-accent" />
                </div>
                
                <CardTitle className="text-xl mb-2">
                  {reason.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="pt-0">
                <CardDescription className="mb-4 leading-relaxed">
                  {reason.description}
                </CardDescription>

                <div className="p-3 bg-background-secondary rounded-lg border border-border">
                  <div className="text-accent font-semibold text-sm">
                    {reason.stats}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Klaar om het verschil te ervaren?
            </h3>
            <p className="text-text-secondary mb-6">
              Join de 50+ bedrijven die al vertrouwen op onze aanpak
            </p>
            
            <div className="inline-flex items-center space-x-2 text-accent">
              <span className="text-sm font-medium">Scroll verder voor onze prijzen</span>
              <div className="w-4 h-4 animate-bounce">↓</div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}