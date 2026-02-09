import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { ShapeBlur } from "@/components/ui/ShapeBlur";
import { Section } from "@/components/ui/Section";
import { Mail, Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <Section size="xl" className="relative overflow-hidden">
      <ShapeBlur className="opacity-60" intensity={1.2} />
      
      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-accent font-medium">Gratis en vrijblijvend</span>
          </div>
        </div>

        <h2 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-center">
          Klaar om te <span className="text-accent">groeien</span>?
        </h2>
        
        <p className="text-xl md:text-2xl text-text-secondary mb-10 max-w-3xl mx-auto leading-relaxed text-center">
          Laat ons jouw online aanwezigheid transformeren. 
          Meer klanten, meer omzet, meer groei — dat is wat we leveren.
        </p>

        {/* Main CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button size="xl" className="group whitespace-nowrap" asChild>
            <Link href="/contact" className="inline-flex items-center gap-2">
              Start jouw groei <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </Button>
          
          <Button variant="secondary" size="xl" className="whitespace-nowrap" asChild>
            <Link href="/contact">
              Gratis SEO audit
            </Link>
          </Button>
        </div>

        {/* Contact cards */}
        <div className="grid sm:grid-cols-3 gap-6 mb-16">
          <a href="mailto:info@hazier.be" className="group">
            <div className="text-center p-6 rounded-2xl bg-background-secondary/60 backdrop-blur-sm border border-border hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
              <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-xl w-fit group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Email</h3>
              <span className="text-text-secondary group-hover:text-accent transition-colors text-sm">
                info@hazier.be
              </span>
            </div>
          </a>

          <a href="tel:+32477190918" className="group">
            <div className="text-center p-6 rounded-2xl bg-background-secondary/60 backdrop-blur-sm border border-border hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
              <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-xl w-fit group-hover:bg-accent/20 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Telefoon</h3>
              <span className="text-text-secondary group-hover:text-accent transition-colors text-sm">
                0477 19 09 18
              </span>
            </div>
          </a>

          <a href="https://wa.me/32477190918" target="_blank" rel="noopener noreferrer" className="group">
            <div className="text-center p-6 rounded-2xl bg-background-secondary/60 backdrop-blur-sm border border-border hover:border-accent/50 transition-all hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5">
              <div className="mx-auto mb-4 p-4 bg-accent/10 rounded-xl w-fit group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">WhatsApp</h3>
              <span className="text-text-secondary group-hover:text-accent transition-colors text-sm">
                Start een chat
              </span>
            </div>
          </a>
        </div>

        {/* Trust bar */}
        <div className="rounded-2xl bg-background-secondary/40 backdrop-blur-sm border border-border p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent mb-1">50+</div>
              <div className="text-text-secondary text-sm">Tevreden klanten</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">&lt;24u</div>
              <div className="text-text-secondary text-sm">Response tijd</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">5★</div>
              <div className="text-text-secondary text-sm">Gemiddelde review</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent mb-1">100%</div>
              <div className="text-text-secondary text-sm">Nederlandse service</div>
            </div>
          </div>
          
          <div className="mt-6 pt-6 border-t border-border text-center">
            <p className="text-text-tertiary text-sm">
              Geen lange contracten · Geen verborgen kosten · Alleen resultaten die tellen
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
