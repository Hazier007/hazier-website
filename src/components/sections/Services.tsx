"use client";

import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Badge } from "@/components/ui/Badge";
import { Search, Code, Zap, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "SEO Optimalisatie",
    description: "Hoger in Google met bewezen strategieën die écht resultaat leveren.",
    href: "/diensten/seo",
    badge: "Meest populair",
    stat: "+250%",
    statLabel: "gemiddelde groei",
    featured: false,
  },
  {
    icon: Code,
    title: "Webdesign",
    description: "Moderne, razendsnelle websites die converteren en indruk maken.",
    href: "/diensten/webdesign",
    badge: "Op maat",
    stat: "100%",
    statLabel: "op maat gemaakt",
    featured: true,
  },
  {
    icon: Zap,
    title: "Programmatic SEO",
    description: "Honderden geoptimaliseerde pagina's automatisch gegenereerd.",
    href: "/diensten/programmatic-seo",
    badge: "Geavanceerd",
    stat: "500+",
    statLabel: "pagina's per project",
    featured: false,
  },
];

export function Services() {
  return (
    <Section size="xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Onze <span className="text-accent">Diensten</span>
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Complete digitale groei oplossingen die je business naar het volgende level tillen
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {services.map((service, index) => (
          <Link
            key={index}
            href={service.href}
            className={`group relative rounded-2xl p-[1px] transition-all duration-500 ${
              service.featured ? "md:-mt-4 md:-mb-4" : ""
            }`}
          >
            {/* Gradient border */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent/0 via-accent/0 to-accent/0 group-hover:from-accent/60 group-hover:via-accent/20 group-hover:to-accent/60 transition-all duration-500 opacity-0 group-hover:opacity-100" />

            {/* Glow effect */}
            <div className="absolute -inset-1 rounded-2xl bg-accent/0 group-hover:bg-accent/5 blur-xl transition-all duration-500" />

            {/* Card */}
            <div
              className={`relative rounded-2xl bg-background-secondary/80 backdrop-blur-sm border border-border group-hover:border-accent/30 p-8 transition-all duration-500 group-hover:scale-[1.02] h-full flex flex-col ${
                service.featured ? "md:py-12" : ""
              }`}
            >
              {/* Icon with glow */}
              <div className="relative mb-4">
                <div className="absolute inset-0 w-14 h-14 bg-accent/0 group-hover:bg-accent/20 rounded-xl blur-lg transition-all duration-500" />
                <div className="relative w-14 h-14 bg-accent/10 group-hover:bg-accent/20 rounded-xl flex items-center justify-center transition-all duration-300">
                  <service.icon className="w-7 h-7 text-accent" />
                </div>
              </div>

              {/* Badge */}
              <div className="mb-4">
                <Badge variant="secondary">{service.badge}</Badge>
              </div>

              {/* Title & description */}
              <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-accent transition-colors duration-300">
                {service.title}
              </h3>
              <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-2">
                {service.description}
              </p>

              {/* Stat */}
              <div className="mt-auto mb-6 p-4 rounded-xl bg-background/60 border border-border group-hover:border-accent/20 transition-all duration-300">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-accent" />
                  <span className="text-accent font-bold text-lg">{service.stat}</span>
                </div>
                <span className="text-text-secondary text-xs">{service.statLabel}</span>
              </div>

              {/* CTA */}
              <div className="flex items-center text-accent font-medium text-sm group-hover:translate-x-1 transition-transform duration-300">
                Meer info
                <svg className="w-4 h-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </Section>
  );
}
