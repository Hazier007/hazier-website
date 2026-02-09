import { Card, CardContent } from "@/components/ui/Card";
import { CardSwap } from "@/components/ui/CardSwap";
import { Section } from "@/components/ui/Section";
import { Star, Quote, MapPin } from "lucide-react";

// Import testimonials data
import testimonialsData from "@/data/testimonials.json";

function TestimonialCard({ testimonial }: { testimonial: typeof testimonialsData[0] }) {
  return (
    <Card className="max-w-3xl mx-auto">
      <CardContent className="p-8">
        <div className="text-center">
          {/* Quote icon */}
          <div className="mx-auto mb-6 p-3 bg-accent/10 rounded-full w-fit">
            <Quote className="w-6 h-6 text-accent" />
          </div>

          {/* Stars */}
          <div className="flex justify-center mb-4">
            {[...Array(testimonial.beoordeling)].map((_, i) => (
              <Star key={i} className="w-5 h-5 text-accent fill-current" />
            ))}
          </div>

          {/* Review text */}
          <blockquote className="text-lg md:text-xl text-foreground leading-relaxed mb-6 italic">
            "{testimonial.review}"
          </blockquote>

          {/* Result highlight */}
          <div className="inline-block px-4 py-2 bg-accent/10 rounded-full mb-6">
            <span className="text-accent font-semibold">
              {testimonial.resultaat}
            </span>
          </div>

          {/* Author info */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-12 h-12 bg-background-secondary rounded-full flex items-center justify-center">
              <span className="text-accent font-bold text-lg">
                {testimonial.naam.split(' ').map(n => n[0]).join('')}
              </span>
            </div>
            
            <div className="text-left">
              <div className="font-semibold text-foreground">
                {testimonial.naam}
              </div>
              <div className="text-text-secondary text-sm">
                {testimonial.functie} bij {testimonial.bedrijf}
              </div>
              <div className="flex items-center text-text-tertiary text-xs mt-1">
                <MapPin className="w-3 h-3 mr-1" />
                {testimonial.locatie}
              </div>
            </div>
          </div>

          {/* Service */}
          <div className="mt-4 text-center">
            <span className="inline-block px-3 py-1 bg-background-secondary rounded-full text-xs text-text-secondary">
              {testimonial.service}
            </span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

export function Testimonials() {
  return (
    <Section size="xl" className="bg-background-secondary/20">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
          Wat onze <span className="text-accent">klanten</span> zeggen
        </h2>
        <p className="text-xl text-text-secondary max-w-3xl mx-auto">
          Echte verhalen van ondernemers die hun online aanwezigheid hebben getransformeerd
        </p>
      </div>

      <CardSwap 
        autoPlay={true} 
        interval={6000} 
        showIndicators={true}
      >
        {testimonialsData.map((testimonial) => (
          <TestimonialCard 
            key={testimonial.id} 
            testimonial={testimonial} 
          />
        ))}
      </CardSwap>

      {/* Trust indicators */}
      <div className="mt-12 text-center">
        <div className="inline-flex items-center space-x-6 text-text-tertiary text-sm">
          <div className="flex items-center">
            <Star className="w-4 h-4 text-accent fill-current mr-1" />
            <span>4.9/5 gemiddelde beoordeling</span>
          </div>
          <div className="w-px h-4 bg-border" />
          <div>50+ tevreden klanten</div>
          <div className="w-px h-4 bg-border" />
          <div>100% Nederlandse service</div>
        </div>
      </div>
    </Section>
  );
}