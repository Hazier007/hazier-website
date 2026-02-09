import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Over Hazier | SEO & Webdesign Bureau België",
  description: "Leer Hazier kennen: opgericht door ondernemers voor ondernemers. Data-driven SEO, transparante communicatie en resultaatgerichte aanpak sinds 2019.",
};

export default function OverOnsPage() {
  const coreValues = [
    {
      icon: "🎯",
      title: "Resultaatgericht",
      description: "Wij focussen op meetbare resultaten: meer traffic, hogere rankings en betere conversies. Geen mooie praatjes, wel concrete groei."
    },
    {
      icon: "📊",
      title: "Data-driven",
      description: "Alle strategieën zijn gebaseerd op data en onderzoek. We nemen geen beslissingen op gevoel, maar laten cijfers en trends onze koers bepalen."
    },
    {
      icon: "💎",
      title: "Transparant",
      description: "Geen verborgen kosten of onduidelijke rapportages. Je weet altijd wat we doen, waarom we het doen en welke resultaten we behalen."
    },
    {
      icon: "🤝",
      title: "Persoonlijk",
      description: "Elke klant verdient maatwerk. We luisteren naar jouw specifieke doelen en bouwen strategieën die perfect aansluiten bij jouw business."
    }
  ];

  const milestones = [
    {
      year: "2019",
      title: "De Start",
      description: "Hazier wordt opgericht door ondernemers die zelf ervaren hebben hoe moeilijk het is om online zichtbaar te worden."
    },
    {
      year: "2020",
      title: "Eerste Successen", 
      description: "Onze eerste klanten behalen Top 3 rankings en zien hun organic traffic met 300%+ groeien."
    },
    {
      year: "2021",
      title: "Programmatic SEO",
      description: "We ontwikkelen onze eigen programmatic SEO methodiek en helpen klanten honderden pagina's automatisch te genereren."
    },
    {
      year: "2022",
      title: "Scaling Up",
      description: "Met bewezen resultaten breiden we uit en helpen bedrijven van startup tot enterprise met hun online groei."
    },
    {
      year: "2023",
      title: "Innovatie",
      description: "We blijven innoveren met AI-gedreven content, advanced technical SEO en cutting-edge webdesign technieken."
    },
    {
      year: "2024+",
      title: "De Toekomst",
      description: "Doorlopende innovatie en het helpen van nog meer ondernemers om hun online doelen te bereiken."
    }
  ];

  const stats = [
    { number: "50+", label: "Tevreden klanten" },
    { number: "5+", label: "Jaar expertise" },
    { number: "300%+", label: "Gem. traffic groei" },
    { number: "100%", label: "Transparantie" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Over Hazier
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Van Ondernemers,<br/>
              Voor <span className="text-accent">Ondernemers</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Wij zijn Hazier: een team van ondernemers dat begrijpt hoe belangrijk online zichtbaarheid 
              is voor het succes van jouw business. Onze missie is simpel: jouw online groei versnellen 
              met bewezen SEO en webdesign strategieën.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Kennismaken</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cases">Onze Resultaten</a>
              </Button>
            </div>
          </div>
        </Section>

        {/* Stats Bar */}
        <Section className="py-8 bg-accent/5">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
              {stats.map((stat, index) => (
                <div key={index} className="space-y-2">
                  <div className="text-3xl font-bold text-accent">{stat.number}</div>
                  <div className="text-sm text-text-secondary">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Our Story */}
        <Section>
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Ons Verhaal
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Elke ondernemer kent de uitdaging: hoe krijg je je website hoger in Google? 
                Wij hebben die reis gemaakt en willen anderen helpen sneller te slagen.
              </p>
            </div>

            <div className="space-y-8 text-text-secondary">
              <div className="text-lg leading-relaxed">
                <strong className="text-foreground">Hazier is ontstaan uit frustratie.</strong> Frustratie over SEO-bureaus die beloven maar niet leveren. 
                Over onduidelijke rapportages en strategieën die nergens op slaan. Over het gebrek aan echte, 
                ondernemersgerichte aanpak in de SEO-wereld.
              </div>

              <div className="text-lg leading-relaxed">
                Als ondernemers hadden wij zelf ervaren hoe moeilijk het is om betrouwbare SEO-hulp te vinden. 
                Te veel bureaus focussen op technische jargon en indrukwekkende grafieken, terwijl wat echt telt 
                veel simpeler is: <strong className="text-foreground">meer klanten via je website</strong>.
              </div>

              <div className="text-lg leading-relaxed">
                Daarom besloten we een ander soort SEO-bureau te starten. Een bureau dat spreekt in 
                ondernemerstaal. Dat resultaten levert in plaats van excuses. Dat transparant is over 
                wat werkt en wat niet. <strong className="text-foreground">Een bureau zoals wij zelf hadden willen inhuren</strong>.
              </div>

              <div className="text-lg leading-relaxed">
                Vandaag de dag helpen wij ondernemers door heel België (en daarbuiten) om hun online doelen 
                te bereiken. Van lokale dienstverleners tot internationale e-commerce bedrijven - onze 
                data-driven aanpak zorgt voor meetbare groei.
              </div>
            </div>
          </div>
        </Section>

        {/* Core Values */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Onze Kernwaarden
              </h2>
              <p className="text-lg text-text-secondary">
                Deze waarden sturen alles wat we doen, van strategievorming tot klantcontact.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="p-6 text-center h-full">
                  <CardHeader className="p-0 mb-6">
                    <div className="text-4xl mb-4">{value.icon}</div>
                    <CardTitle className="text-xl text-foreground">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0">
                    <CardDescription className="text-text-secondary text-sm leading-relaxed">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </Section>

        {/* Timeline */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Onze Journey
              </h2>
              <p className="text-lg text-text-secondary">
                Van startup tot gevestigd SEO-bureau - hier is onze reis.
              </p>
            </div>

            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-accent/30 transform md:-translate-x-1/2"></div>

              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={index} className={`relative flex items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    {/* Timeline dot */}
                    <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 z-10 border-4 border-background"></div>

                    {/* Content */}
                    <div className={`w-full md:w-1/2 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                      <Card className={`p-6 ml-12 md:ml-0 ${index % 2 === 0 ? 'md:text-right' : ''}`}>
                        <CardHeader className="p-0 mb-4">
                          <Badge variant="secondary" className={`text-accent font-bold w-fit ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                            {milestone.year}
                          </Badge>
                          <CardTitle className="text-xl text-foreground">{milestone.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                          <CardDescription className="text-text-secondary">
                            {milestone.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* Team Section */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Het Team
              </h2>
              <p className="text-lg text-text-secondary mb-8">
                Ontmoet de mensen achter Hazier - experts in hun vakgebied, ondernemers in hart en nieren.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <Card className="p-8 text-center">
                <div className="w-32 h-32 bg-gradient-to-br from-accent/20 to-purple-600/20 rounded-full mx-auto mb-6 flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-2">Het Hazier Team</h3>
                <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
                  Ons team bestaat uit SEO-specialisten, webdevelopers en digital marketeers die allemaal 
                  één ding gemeen hebben: passie voor het helpen van ondernemers om online te slagen.
                </p>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-secondary">5+ jaar SEO ervaring</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-secondary">Certified professionals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full"></div>
                    <span className="text-text-secondary">Ondernemer mindset</span>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </Section>

        {/* Approach */}
        <Section>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Onze Aanpak
            </h2>
            <p className="text-lg text-text-secondary mb-12">
              Simpel maar effectief: we analyseren, we plannen, we voeren uit, we meten. En we herhalen 
              totdat je doelen behaald zijn.
            </p>

            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Diepgaande Analyse</h3>
                    <p className="text-text-secondary text-sm">
                      We beginnen altijd met een volledige audit van je huidige situatie: website, concurrenten, markt en mogelijkheden.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Strategische Planning</h3>
                    <p className="text-text-secondary text-sm">
                      Op basis van data maken we een helder plan met concrete doelen, tijdlijnen en verwachte resultaten.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Execution Excellence</h3>
                    <p className="text-text-secondary text-sm">
                      We voeren de strategie uit met oog voor detail en focus op kwaliteit. Elke actie heeft een doel.
                    </p>
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Continue Monitoring</h3>
                    <p className="text-text-secondary text-sm">
                      We meten alles: rankings, traffic, conversies. Je krijgt maandelijks heldere rapportages.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">5</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Optimalisatie & Groei</h3>
                    <p className="text-text-secondary text-sm">
                      We blijven optimaliseren en nieuwe kansen identificeren om je groei te versnellen.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-accent font-bold text-sm">6</span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">Transparante Communicatie</h3>
                    <p className="text-text-secondary text-sm">
                      Je weet altijd waar je aan toe bent. Geen verrassingen, wel duidelijke vooruitgang.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section className="bg-accent/5">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Klaar Om Samen Te Werken?
            </h2>
            <p className="text-lg text-text-secondary mb-8 max-w-2xl mx-auto">
              Nu je ons kent, zijn wij benieuwd naar jouw verhaal. Laten we bespreken hoe wij 
              jouw online groei kunnen versnellen met onze bewezen aanpak.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="/contact">Kennismakingsgesprek</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="/cases">Onze Resultaten Bekijken</a>
              </Button>
            </div>
            <div className="mt-8 text-sm text-text-tertiary">
              📞 <a href="tel:0477190918" className="hover:text-accent transition-colors">0477 19 09 18</a> • 
              ✉️ <a href="mailto:info@hazier.be" className="hover:text-accent transition-colors">info@hazier.be</a>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}