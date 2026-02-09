import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export const metadata: Metadata = {
  title: "Contact | Hazier - Gratis SEO Strategiegesprek",
  description: "Neem contact op voor een gratis SEO strategiegesprek. Bel 0477 19 09 18 of mail info@hazier.be. Ook bereikbaar via WhatsApp.",
};

export default function ContactPage() {
  const contactInfo = [
    {
      icon: "📞",
      title: "Telefonisch",
      value: "0477 19 09 18",
      link: "tel:0477190918",
      description: "Ma-vr 9:00-18:00"
    },
    {
      icon: "✉️",
      title: "Email",
      value: "info@hazier.be",
      link: "mailto:info@hazier.be",
      description: "Reactie binnen 4 uur"
    },
    {
      icon: "💬",
      title: "WhatsApp",
      value: "0477 19 09 18",
      link: "https://wa.me/32477190918",
      description: "Direct contact"
    },
    {
      icon: "📍",
      title: "Locatie",
      value: "België, Vlaanderen",
      link: "https://maps.app.goo.gl/Fh6KXt3koFZ69mMJ7",
      description: "Bekijk op Google Maps"
    },
    {
      icon: "📸",
      title: "Instagram",
      value: "@hazier.be",
      link: "https://www.instagram.com/hazier.be/",
      description: "Volg ons werk"
    },
    {
      icon: "👍",
      title: "Facebook",
      value: "hazier.be",
      link: "https://www.facebook.com/hazier.be",
      description: "Like onze pagina"
    }
  ];

  const services = [
    "SEO Services",
    "Webdesign & Development", 
    "Programmatic SEO",
    "Linkbuilding",
    "Local SEO",
    "E-commerce SEO",
    "Website Onderhoud",
    "Anders/Custom Project"
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="pt-16">
        {/* Hero Section */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Contact
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              Laten We <span className="text-accent">Praten</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Klaar om jouw online aanwezigheid naar het volgende niveau te tillen? 
              Boek een gratis strategiegesprek en ontdek hoe wij jouw bedrijf kunnen helpen groeien.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="#contact-form">Formulier Invullen</a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="tel:0477190918">Direct Bellen</a>
              </Button>
            </div>
            <div className="mt-8 text-sm text-text-tertiary">
              ⚡ Gratis gesprek • 🎯 Persoonlijk advies • 📈 Concrete strategie
            </div>
          </div>
        </Section>

        {/* Main Content */}
        <Section>
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Contact Form */}
              <div className="lg:col-span-2" id="contact-form">
                <Card className="p-8">
                  <CardHeader className="p-0 mb-8">
                    <CardTitle className="text-2xl text-foreground">Gratis Strategiegesprek Aanvragen</CardTitle>
                    <CardDescription className="text-text-secondary">
                      Vertel ons over jouw project en ontvang binnen 4 uur een persoonlijke reactie.
                    </CardDescription>
                  </CardHeader>

                  <CardContent className="p-0">
                    <form className="space-y-6">
                      {/* Name & Email Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="naam" className="block text-sm font-medium text-foreground mb-2">
                            Naam *
                          </label>
                          <input
                            type="text"
                            id="naam"
                            name="naam"
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background-secondary/50 text-foreground placeholder-text-tertiary focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                            placeholder="Jouw volledige naam"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                            Email *
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background-secondary/50 text-foreground placeholder-text-tertiary focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                            placeholder="jouw@email.com"
                          />
                        </div>
                      </div>

                      {/* Phone & Service Row */}
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label htmlFor="telefoon" className="block text-sm font-medium text-foreground mb-2">
                            Telefoon
                          </label>
                          <input
                            type="tel"
                            id="telefoon"
                            name="telefoon"
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background-secondary/50 text-foreground placeholder-text-tertiary focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                            placeholder="0477 19 09 18"
                          />
                        </div>
                        <div>
                          <label htmlFor="dienst" className="block text-sm font-medium text-foreground mb-2">
                            Interesse in
                          </label>
                          <select
                            id="dienst"
                            name="dienst"
                            className="w-full px-4 py-3 border border-border rounded-lg bg-background-secondary/50 text-foreground focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                          >
                            <option value="">Selecteer een dienst</option>
                            {services.map((service, index) => (
                              <option key={index} value={service}>{service}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      {/* Website */}
                      <div>
                        <label htmlFor="website" className="block text-sm font-medium text-foreground mb-2">
                          Huidige Website (optioneel)
                        </label>
                        <input
                          type="url"
                          id="website"
                          name="website"
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background-secondary/50 text-foreground placeholder-text-tertiary focus:ring-2 focus:ring-accent focus:border-transparent transition-colors"
                          placeholder="https://jouwwebsite.be"
                        />
                      </div>

                      {/* Message */}
                      <div>
                        <label htmlFor="bericht" className="block text-sm font-medium text-foreground mb-2">
                          Vertel ons over jouw project *
                        </label>
                        <textarea
                          id="bericht"
                          name="bericht"
                          rows={6}
                          required
                          className="w-full px-4 py-3 border border-border rounded-lg bg-background-secondary/50 text-foreground placeholder-text-tertiary focus:ring-2 focus:ring-accent focus:border-transparent transition-colors resize-none"
                          placeholder="Beschrijf jouw doelen, uitdagingen en wat je wilt bereiken. Hoe meer details, hoe beter wij je kunnen helpen."
                        ></textarea>
                      </div>

                      {/* Submit Button */}
                      <Button type="submit" size="lg" className="w-full md:w-auto">
                        Gratis Strategiegesprek Aanvragen
                      </Button>

                      <div className="text-sm text-text-tertiary">
                        * Door dit formulier in te vullen ga je akkoord met ons privacybeleid. 
                        We gebruiken je gegevens alleen om contact met je op te nemen over jouw project.
                      </div>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info Sidebar */}
              <div className="space-y-6">
                <Card className="p-6">
                  <CardHeader className="p-0 mb-6">
                    <CardTitle className="text-xl text-foreground">Direct Contact</CardTitle>
                    <CardDescription className="text-text-secondary">
                      Liever direct contact? Hier zijn alle manieren om ons te bereiken.
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="p-0 space-y-4">
                    {contactInfo.map((item, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="text-2xl">{item.icon}</div>
                        <div className="flex-1">
                          <div className="font-medium text-foreground">{item.title}</div>
                          {item.link ? (
                            <a 
                              href={item.link} 
                              className="text-accent hover:text-accent/80 transition-colors font-medium"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <div className="text-text-secondary font-medium">{item.value}</div>
                          )}
                          <div className="text-sm text-text-tertiary">{item.description}</div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <Card className="p-6 bg-accent/5">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-foreground">Waarom Hazier?</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">5+ jaar SEO expertise</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Bewezen resultaten</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Transparante communicatie</span>
                    </div>
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-sm text-text-secondary">Maandelijks opzegbaar</span>
                    </div>
                  </CardContent>
                </Card>

                <Card className="p-6">
                  <CardHeader className="p-0 mb-4">
                    <CardTitle className="text-lg text-foreground">Snel Contact</CardTitle>
                  </CardHeader>
                  <CardContent className="p-0 space-y-3">
                    <Button asChild className="w-full" variant="outline">
                      <a href="https://wa.me/32477190918?text=Hoi%20Hazier%2C%20ik%20wil%20graag%20een%20gratis%20strategiegesprek%20boeken.">
                        WhatsApp Bericht
                      </a>
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                      <a href="tel:0477190918">
                        Direct Bellen
                      </a>
                    </Button>
                    <Button asChild className="w-full" variant="outline">
                      <a href="mailto:info@hazier.be?subject=Strategiegesprek%20Aanvragen">
                        Email Versturen
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </Section>

        {/* FAQ Section */}
        <Section className="bg-background-secondary/30">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Veelgestelde Vragen
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Hoe snel krijg ik antwoord?</h3>
                <p className="text-text-secondary text-sm">
                  We reageren binnen 4 uur op werkdagen. Voor urgente vragen kun je ons direct bellen of WhatsApp'en.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Kost het strategiegesprek iets?</h3>
                <p className="text-text-secondary text-sm">
                  Nee, het eerste strategiegesprek is altijd gratis. We bespreken jouw doelen en geven concrete adviezen.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Werken jullie alleen in Vlaanderen?</h3>
                <p className="text-text-secondary text-sm">
                  We werken voornamelijk remote en bedienen klanten door heel België, Nederland en Europa.
                </p>
              </Card>

              <Card className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-3">Wat als mijn project niet past?</h3>
                <p className="text-text-secondary text-sm">
                  Dan zijn we eerlijk en verwijzen we je door naar een specialist die je beter kan helpen.
                </p>
              </Card>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}