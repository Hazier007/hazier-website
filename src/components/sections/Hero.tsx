"use client";

import dynamic from "next/dynamic";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { TrueFocus } from "@/components/ui/TrueFocus";
import { Section } from "@/components/ui/Section";

const LiquidEther = dynamic(() => import("@/components/ui/LiquidEther"), {
  ssr: false,
});

export function Hero() {
  return (
    <Section size="xl" className="relative min-h-screen flex items-center">
      {/* Liquid Ether Background */}
      <div className="absolute inset-0 z-0 opacity-40">
        <LiquidEther
          colors={['#F5911E', '#FF6B00', '#1a1a1a']}
          mouseForce={15}
          cursorSize={120}
          resolution={0.4}
          autoDemo={true}
          autoSpeed={0.4}
          autoIntensity={2.5}
        />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <TrueFocus duration={1200}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
            Meer klanten.{" "}
            <span className="text-accent">Meer groei.</span>{" "}
            <br />
            Meer omzet.
          </h1>
        </TrueFocus>

        <TrueFocus delay={300} duration={1000}>
          <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
            Professionele SEO en webdesign services die resultaat leveren. 
            Van lokale zichtbaarheid tot programmatic content scaling — 
            wij zorgen dat je bedrijf gevonden wordt op Google.
          </p>
        </TrueFocus>

        <TrueFocus delay={600} duration={800}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" asChild>
              <Link href="/diensten">
                Bekijk onze diensten
              </Link>
            </Button>
            
            <Button variant="secondary" size="lg" asChild>
              <Link href="/contact">
                Gratis SEO audit
              </Link>
            </Button>
          </div>
        </TrueFocus>

        <TrueFocus delay={900} duration={600}>
          <div className="mt-12 flex justify-center">
            <div className="text-text-tertiary text-sm">
              ↓ Ontdek waarom 50+ bedrijven ons vertrouwen
            </div>
          </div>
        </TrueFocus>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce z-10">
        <div className="w-6 h-10 border-2 border-border rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </Section>
  );
}
