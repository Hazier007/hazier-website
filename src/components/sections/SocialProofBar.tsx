"use client";

import { useEffect, useRef, useState } from "react";
import { Section } from "@/components/ui/Section";

interface CounterProps {
  end: number;
  suffix?: string;
  duration?: number;
}

function Counter({ end, suffix = "", duration = 2000 }: CounterProps) {
  const [count, setCount] = useState(0);
  const [isInView, setIsInView] = useState(false);
  const elementRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isInView) {
          setIsInView(true);
        }
      },
      { threshold: 0.5 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [isInView]);

  useEffect(() => {
    if (!isInView) return;

    let startTime: number | null = null;
    const startValue = 0;

    const animate = (currentTime: number) => {
      if (startTime === null) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.round(startValue + (end - startValue) * easeOutQuart);

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);
  }, [isInView, end, duration]);

  return (
    <span ref={elementRef} className="font-bold text-3xl md:text-4xl text-accent">
      {count}
      {suffix}
    </span>
  );
}

const stats = [
  {
    number: 50,
    suffix: "+",
    label: "Tevreden klanten",
    description: "Bedrijven die ons vertrouwen"
  },
  {
    number: 500,
    suffix: "+", 
    label: "Pagina's gebouwd",
    description: "Hoogwaardige websites"
  },
  {
    number: 14,
    suffix: "+",
    label: "Actieve projecten", 
    description: "Continue groei"
  },
  {
    number: 250,
    suffix: "%",
    label: "Gemiddelde groei",
    description: "Meer organisch verkeer"
  }
];

export function SocialProofBar() {
  return (
    <Section size="md" className="bg-background-secondary/30 border-y border-border">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="space-y-2">
            <div className="space-y-1">
              <div>
                <Counter 
                  end={stat.number} 
                  suffix={stat.suffix}
                  duration={2000 + index * 200}
                />
              </div>
              <h3 className="font-semibold text-foreground text-lg">
                {stat.label}
              </h3>
            </div>
            <p className="text-text-secondary text-sm">
              {stat.description}
            </p>
          </div>
        ))}
      </div>

      {/* Decorative elements */}
      <div className="absolute left-0 top-1/2 w-32 h-px bg-gradient-to-r from-transparent to-accent/20" />
      <div className="absolute right-0 top-1/2 w-32 h-px bg-gradient-to-l from-transparent to-accent/20" />
    </Section>
  );
}