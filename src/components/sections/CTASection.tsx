import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ShapeBlur } from "@/components/ui/ShapeBlur";
import { Section } from "@/components/ui/Section";
import { Mail, Phone, MessageCircle, ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <Section size="xl" className="relative">
      <ShapeBlur className="opacity-60" intensity={1.2} />
      
      <div className="relative z-10 text-center max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
          Klaar om te <span className="text-accent">groeien</span>?
        </h2>
        
        <p className="text-xl md:text-2xl text-text-secondary mb-8 max-w-3xl mx-auto leading-relaxed">
          Laat ons jouw online aanwezigheid transformeren. 
          Meer klanten, meer omzet, meer groei — dat is wat we leveren.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="xl" className="group" asChild>
            <Link href="/contact">
              Start jouw groei
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button variant="secondary" size="xl" asChild>
            <Link href="/contact">
              Gratis SEO audit
            </Link>
          </Button>
        </div>

        {/* Contact options */}
        <div className="grid sm:grid-cols-3 gap-6 mb-12">
          <div className="text-center group">
            <div className="mx-auto mb-3 p-4 bg-background-secondary/80 backdrop-blur-sm border border-border rounded-xl w-fit group-hover:border-accent transition-colors">
              <Mail className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Email</h3>
            <a 
              href="mailto:info@hazier.be" 
              className="text-text-secondary hover:text-accent transition-colors text-sm"
            >
              info@hazier.be
            </a>
          </div>

          <div className="text-center group">
            <div className="mx-auto mb-3 p-4 bg-background-secondary/80 backdrop-blur-sm border border-border rounded-xl w-fit group-hover:border-accent transition-colors">
              <Phone className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
            <a 
              href="tel:+32123456789" 
              className="text-text-secondary hover:text-accent transition-colors text-sm"
            >
              +32 123 456 789
            </a>
          </div>

          <div className="text-center group">
            <div className="mx-auto mb-3 p-4 bg-background-secondary/80 backdrop-blur-sm border border-border rounded-xl w-fit group-hover:border-accent transition-colors">
              <MessageCircle className="w-6 h-6 text-accent" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
            <a 
              href="https://wa.me/32123456789" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-accent transition-colors text-sm"
            >
              Start chat
            </a>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-2xl font-bold text-accent mb-1">50+</div>
            <div className="text-text-secondary text-sm">Tevreden klanten</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">24u</div>
            <div className="text-text-secondary text-sm">Response tijd</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">5★</div>
            <div className="text-text-secondary text-sm">Gemiddelde review</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-accent mb-1">100%</div>
            <div className="text-text-secondary text-sm">Nederlandse service</div>
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-12 max-w-2xl mx-auto">
          <p className="text-text-secondary text-sm leading-relaxed">
            Join de 50+ bedrijven die al vertrouwen op onze bewezen aanpak. 
            Geen lange contracten, geen verborgen kosten — alleen resultaten die tellen.
          </p>
        </div>
      </div>
    </Section>
  );
}