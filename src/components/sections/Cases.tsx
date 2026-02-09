import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ChromaGrid } from "@/components/ui/ChromaGrid";
import { Section } from "@/components/ui/Section";
import { ExternalLink, TrendingUp } from "lucide-react";

// Import cases data
import casesData from "@/data/cases.json";

// Select featured cases for homepage
const featuredCases = casesData.slice(0, 6);

export function Cases() {
  return (
    <Section size="xl">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Onze <span className="text-accent">Cases</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Echte resultaten voor echte bedrijven. Bekijk hoe we anderen hebben geholpen groeien.
        </p>
      </div>

      <ChromaGrid columns={3} gap={6}>
        {featuredCases.map((caseItem, index) => (
          <Card key={caseItem.slug} className="group h-full hover:shadow-2xl transition-all duration-300">
            {/* Case Image */}
            <div className="relative h-48 rounded-t-xl overflow-hidden bg-background-tertiary">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/10 to-purple-500/10" />
              
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-2xl font-bold text-foreground mb-1">
                    {caseItem.website}
                  </div>
                  <div className="text-text-secondary text-sm">
                    {caseItem.type}
                  </div>
                </div>
              </div>

              {/* Hover overlay */}
              <div className="absolute inset-0 bg-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* External link icon */}
              <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-8 h-8 bg-background-secondary rounded-full flex items-center justify-center">
                  <ExternalLink className="w-4 h-4 text-accent" />
                </div>
              </div>
            </div>

            <CardHeader className="pb-4">
              <div className="flex items-start justify-between mb-2">
                <CardTitle className="text-xl group-hover:text-accent transition-colors">
                  {caseItem.titel}
                </CardTitle>
                <Badge variant="outline" className="text-xs">
                  {caseItem.timeline}
                </Badge>
              </div>
              
              <CardDescription className="line-clamp-2">
                {caseItem.beschrijving}
              </CardDescription>
            </CardHeader>

            <CardContent className="pt-0">
              <div className="space-y-4">
                {/* Services */}
                <div className="flex flex-wrap gap-1">
                  {caseItem.services.slice(0, 3).map((service) => (
                    <Badge key={service} variant="secondary" className="text-xs">
                      {service}
                    </Badge>
                  ))}
                </div>

                {/* Key Result */}
                <div className="p-3 bg-background-secondary rounded-lg border border-border">
                  <div className="flex items-center mb-1">
                    <TrendingUp className="w-4 h-4 mr-2 text-accent" />
                    <span className="font-medium text-foreground text-sm">Top Resultaat</span>
                  </div>
                  <p className="text-accent font-semibold text-sm">
                    {Object.values(caseItem.resultaten)[0]}
                  </p>
                </div>

                {/* CTA */}
                <Button variant="outline" className="w-full group-hover:border-accent group-hover:text-accent transition-colors" asChild>
                  <Link href={`/cases/${caseItem.slug}`}>
                    Bekijk case study
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </ChromaGrid>

      {/* View all cases button */}
      <div className="text-center mt-12">
        <Button size="lg" variant="secondary" asChild>
          <Link href="/cases">
            Bekijk alle cases
          </Link>
        </Button>
      </div>
    </Section>
  );
}