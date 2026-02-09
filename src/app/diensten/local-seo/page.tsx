import { Metadata } from "next";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Local SEO | Hazier - Domineer Lokale Zoekresultaten",
  description:
    "Local SEO diensten voor meer lokale klanten. Google Maps rankings, Google Business Profile optimalisatie, citation building en review management. Bewezen resultaten in België.",
};

const benefits = [
  {
    icon: "📍",
    title: "Google Maps Rankings",
    description:
      "Verschijn bovenaan in het Google Maps 3-pack wanneer lokale klanten naar jouw diensten zoeken.",
  },
  {
    icon: "👥",
    title: "Meer Lokale Klanten",
    description:
      "Trek gericht klanten aan uit jouw regio die actief op zoek zijn naar wat jij aanbiedt.",
  },
  {
    icon: "📈",
    title: "Hogere Conversies",
    description:
      "Lokale zoekopdrachten hebben een conversieratio die tot 5x hoger ligt dan reguliere zoekopdrachten.",
  },
];

const included = [
  {
    icon: "🏢",
    title: "Google Business Profile Optimalisatie",
    description:
      "Volledige setup en optimalisatie van je Google Business profiel met alle relevante informatie, foto's en categorieën.",
  },
  {
    icon: "🔑",
    title: "Lokale Keyword Research",
    description:
      "Diepgaand onderzoek naar zoekwoorden die jouw lokale doelgroep gebruikt, inclusief 'in de buurt' en stadsnaam variaties.",
  },
  {
    icon: "📋",
    title: "NAP Consistency",
    description:
      "Je bedrijfsnaam, adres en telefoonnummer (NAP) wordt consistent vermeld op alle belangrijke platforms en directories.",
  },
  {
    icon: "🏗️",
    title: "Citation Building",
    description:
      "Vermeldingen opbouwen in relevante lokale en branchegerichte directories om je lokale autoriteit te versterken.",
  },
  {
    icon: "⭐",
    title: "Review Management",
    description:
      "Strategie voor het verzamelen en beheren van Google reviews die je reputatie en rankings versterken.",
  },
  {
    icon: "✍️",
    title: "Lokale Content Creatie",
    description:
      "Geoptimaliseerde content gericht op lokale zoektermen, evenementen en topics die resoneren met je doelgroep.",
  },
];

const process = [
  {
    step: "01",
    title: "Analyse & Audit",
    description:
      "We analyseren je huidige lokale online aanwezigheid, concurrentie en kansen in jouw regio.",
  },
  {
    step: "02",
    title: "Strategie & Setup",
    description:
      "Op basis van de audit stellen we een local SEO strategie op en optimaliseren we je Google Business profiel.",
  },
  {
    step: "03",
    title: "Optimalisatie & Building",
    description:
      "Citation building, NAP consistency, lokale content creatie en on-page optimalisatie worden uitgevoerd.",
  },
  {
    step: "04",
    title: "Monitoring & Groei",
    description:
      "Maandelijkse rapportage, review management en continue optimalisatie voor duurzame lokale groei.",
  },
];

const faqs = [
  {
    question: "Wat is het verschil tussen SEO en Local SEO?",
    answer:
      "Reguliere SEO richt zich op landelijke of internationale zoekresultaten, terwijl Local SEO specifiek gericht is op zoekresultaten in jouw regio. Local SEO focust op Google Maps, Google Business Profile en lokale zoektermen zoals 'loodgieter Gent' of 'restaurant in de buurt'.",
  },
  {
    question: "Hoe snel zie ik resultaten met Local SEO?",
    answer:
      "De eerste verbeteringen zijn vaak binnen 4-8 weken zichtbaar, vooral in Google Maps. Significante resultaten in lokale zoekresultaten zie je doorgaans na 3-6 maanden, afhankelijk van je concurrentie en markt.",
  },
  {
    question: "Heb ik een fysiek adres nodig voor Local SEO?",
    answer:
      "Een fysiek adres helpt enorm voor Google Maps rankings, maar het is niet altijd verplicht. Service-area businesses zonder fysieke locatie kunnen ook profiteren van Local SEO met de juiste aanpak.",
  },
  {
    question: "Werkt Local SEO ook voor meerdere locaties?",
    answer:
      "Absoluut! We optimaliseren elke locatie afzonderlijk met een uniek Google Business profiel, lokale content en specifieke citaties per vestiging.",
  },
  {
    question: "Hoeveel kost Local SEO?",
    answer:
      "De investering hangt af van je markt, concurrentie en het aantal locaties. Neem contact op voor een vrijblijvende offerte op maat.",
  },
];

export default function LocalSEOPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <Section size="xl" className="pt-32 pb-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-6">
            📍 Local SEO
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
            Domineer de <span className="text-accent">lokale zoekresultaten</span>
          </h1>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto mb-8">
            Word gevonden door klanten in jouw regio. Met onze Local SEO strategie verschijn je
            bovenaan in Google Maps en lokale zoekresultaten — precies wanneer potentiële klanten
            naar jouw diensten zoeken.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link href="/contact">Gratis analyse aanvragen</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link href="/prijzen">Bekijk prijzen</Link>
            </Button>
          </div>
        </div>
      </Section>

      {/* Wat is Local SEO */}
      <Section size="lg" className="py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6 text-center">
            Wat is <span className="text-accent">Local SEO</span>?
          </h2>
          <div className="text-text-secondary text-lg leading-relaxed space-y-4">
            <p>
              Local SEO (lokale zoekmachineoptimalisatie) is het proces van het optimaliseren van je
              online aanwezigheid om meer klanten aan te trekken uit relevante lokale zoekopdrachten.
              Denk aan zoekopdrachten als &quot;tandarts Antwerpen&quot;, &quot;loodgieter in de buurt&quot; of
              &quot;beste restaurant Gent&quot;.
            </p>
            <p>
              Wanneer iemand een lokale zoekopdracht uitvoert, toont Google een speciaal
              &quot;Map Pack&quot; met de top 3 bedrijven. Met Local SEO zorgen we ervoor dat jouw bedrijf
              daar tussen staat — zichtbaar voor klanten die klaar zijn om actie te ondernemen.
            </p>
          </div>
        </div>
      </Section>

      {/* Benefits */}
      <Section size="lg" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Waarom <span className="text-accent">Local SEO</span>?
        </h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {benefits.map((benefit, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="text-4xl mb-4">{benefit.icon}</div>
                <CardTitle>{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{benefit.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* What's included */}
      <Section size="lg" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
          Wat zit er <span className="text-accent">inbegrepen</span>?
        </h2>
        <p className="text-text-secondary text-center mb-12 max-w-2xl mx-auto">
          Een compleet Local SEO pakket dat alle aspecten van je lokale online zichtbaarheid dekt.
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {included.map((item, i) => (
            <Card key={i}>
              <CardHeader>
                <div className="text-3xl mb-2">{item.icon}</div>
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section size="lg" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Ons <span className="text-accent">proces</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-8">
          {process.map((step, i) => (
            <div key={i} className="flex gap-6">
              <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center">
                <span className="text-accent font-bold text-xl">{step.step}</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">{step.title}</h3>
                <p className="text-text-secondary">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section size="lg" className="py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Veelgestelde <span className="text-accent">vragen</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, i) => (
            <Card key={i}>
              <CardHeader>
                <CardTitle className="text-lg">{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{faq.answer}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section size="lg" className="py-20">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Klaar om lokaal te <span className="text-accent">domineren</span>?
          </h2>
          <p className="text-xl text-text-secondary mb-8">
            Ontvang een gratis analyse van je lokale online zichtbaarheid en ontdek hoeveel klanten
            je mist.
          </p>
          <Button asChild size="lg">
            <Link href="/contact">Gratis analyse aanvragen →</Link>
          </Button>
        </div>
      </Section>

      <Footer />
    </div>
  );
}
