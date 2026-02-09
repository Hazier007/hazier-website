import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Privacy Policy | Hazier",
  description: "Privacy Policy van Hazier. Lees hoe wij omgaan met uw persoonsgegevens conform de GDPR/AVG wetgeving.",
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <Section size="xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Privacy <span className="text-accent">Policy</span>
            </h1>
            <p className="text-text-secondary mb-2">Laatst bijgewerkt: februari 2025</p>
            <p className="text-lg text-text-secondary mb-12">
              Hazier hecht veel belang aan de bescherming van uw persoonsgegevens. In dit privacy beleid leggen wij uit welke gegevens wij verzamelen, waarom, en wat uw rechten zijn.
            </p>

            {/* Verantwoordelijke */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Verantwoordelijke</h2>
              <p className="text-text-secondary mb-2">
                Hazier is verantwoordelijk voor de verwerking van persoonsgegevens zoals beschreven in dit privacy beleid.
              </p>
              <ul className="text-text-secondary space-y-1">
                <li><strong className="text-foreground">Bedrijf:</strong> Hazier</li>
                <li><strong className="text-foreground">Website:</strong>{" "}
                  <a href="https://hazier.be" className="text-accent hover:underline">hazier.be</a>
                </li>
                <li><strong className="text-foreground">E-mail:</strong>{" "}
                  <a href="mailto:info@hazier.be" className="text-accent hover:underline">info@hazier.be</a>
                </li>
                <li><strong className="text-foreground">Telefoon:</strong> 0477 19 09 18</li>
                <li><strong className="text-foreground">Land:</strong> België</li>
              </ul>
            </div>

            {/* Welke gegevens */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Welke gegevens verzamelen wij?</h2>
              <p className="text-text-secondary mb-4">
                Wij verzamelen enkel persoonsgegevens die u zelf actief aan ons verstrekt, bijvoorbeeld via contactformulieren op onze website:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Naam</li>
                <li>E-mailadres</li>
                <li>Telefoonnummer</li>
                <li>Eventuele bijkomende informatie die u in een bericht vermeldt</li>
              </ul>
            </div>

            {/* Doel verwerking */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Waarvoor gebruiken wij uw gegevens?</h2>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Om uw vragen of aanvragen te beantwoorden</li>
                <li>Om u een offerte of voorstel te bezorgen</li>
                <li>Om onze dienstverlening te verbeteren</li>
                <li>Om onze website te analyseren en verbeteren (via Google Analytics)</li>
              </ul>
            </div>

            {/* Cookies & Analytics */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Cookies & Google Analytics</h2>
              <p className="text-text-secondary mb-4">
                Onze website maakt gebruik van cookies en Google Analytics 4 (GA4) om het gebruik van de website te analyseren. Google Analytics verzamelt geanonimiseerde gegevens over uw surfgedrag, zoals bezochte pagina&apos;s en sessieduur.
              </p>
              <p className="text-text-secondary">
                Voor meer informatie over ons cookiebeleid, raadpleeg onze{" "}
                <a href="/cookies" className="text-accent hover:underline">Cookie Policy</a>.
              </p>
            </div>

            {/* Bewaartermijn */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Bewaartermijn</h2>
              <p className="text-text-secondary">
                Wij bewaren uw persoonsgegevens niet langer dan strikt noodzakelijk is voor het doel waarvoor ze zijn verzameld. Gegevens uit contactformulieren worden maximaal 2 jaar bewaard, tenzij er een lopende klantrelatie is.
              </p>
            </div>

            {/* Rechten */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Uw rechten (GDPR/AVG)</h2>
              <p className="text-text-secondary mb-4">
                Op basis van de Algemene Verordening Gegevensbescherming (AVG/GDPR) heeft u de volgende rechten:
              </p>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li><strong className="text-foreground">Recht op inzage</strong> – U kunt opvragen welke gegevens wij van u bewaren.</li>
                <li><strong className="text-foreground">Recht op correctie</strong> – U kunt onjuiste gegevens laten aanpassen.</li>
                <li><strong className="text-foreground">Recht op verwijdering</strong> – U kunt vragen om uw gegevens te laten verwijderen.</li>
                <li><strong className="text-foreground">Recht op beperking</strong> – U kunt de verwerking van uw gegevens laten beperken.</li>
                <li><strong className="text-foreground">Recht op overdraagbaarheid</strong> – U kunt uw gegevens in een gestructureerd formaat ontvangen.</li>
                <li><strong className="text-foreground">Recht van bezwaar</strong> – U kunt bezwaar maken tegen de verwerking van uw gegevens.</li>
              </ul>
            </div>

            {/* Contact */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Contact</h2>
              <p className="text-text-secondary">
                Heeft u vragen over dit privacy beleid of wilt u een van uw rechten uitoefenen? Neem dan contact met ons op via{" "}
                <a href="mailto:info@hazier.be" className="text-accent hover:underline">info@hazier.be</a>{" "}
                of bel naar <strong className="text-foreground">0477 19 09 18</strong>.
              </p>
              <p className="text-text-secondary mt-4">
                U heeft ook het recht om een klacht in te dienen bij de Belgische Gegevensbeschermingsautoriteit (GBA):{" "}
                <a href="https://www.gegevensbeschermingsautoriteit.be" className="text-accent hover:underline" target="_blank" rel="noopener noreferrer">
                  www.gegevensbeschermingsautoriteit.be
                </a>
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
