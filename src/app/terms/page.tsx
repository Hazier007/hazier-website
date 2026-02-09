import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Algemene Voorwaarden | Hazier",
  description: "Algemene Voorwaarden van Hazier. Lees onze voorwaarden voor SEO, webdesign en programmatic SEO diensten.",
};

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <Section size="xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Algemene <span className="text-accent">Voorwaarden</span>
            </h1>
            <p className="text-text-secondary mb-2">Laatst bijgewerkt: februari 2025</p>
            <p className="text-lg text-text-secondary mb-12">
              Deze algemene voorwaarden zijn van toepassing op alle diensten van Hazier, waaronder SEO, webdesign en programmatic SEO.
            </p>

            {/* Toepasselijkheid */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Toepasselijkheid</h2>
              <p className="text-text-secondary mb-2">
                Deze algemene voorwaarden zijn van toepassing op elk aanbod, elke offerte en elke overeenkomst tussen Hazier en de opdrachtgever, tenzij schriftelijk anders overeengekomen.
              </p>
              <p className="text-text-secondary">
                Door een opdracht te verstrekken aan Hazier, aanvaardt de opdrachtgever deze voorwaarden.
              </p>
            </div>

            {/* Offertes */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Offertes & overeenkomsten</h2>
              <p className="text-text-secondary mb-2">
                Alle offertes zijn vrijblijvend en geldig gedurende 30 dagen, tenzij anders vermeld. Een overeenkomst komt tot stand na schriftelijke bevestiging door beide partijen of na aanvang van de werkzaamheden.
              </p>
              <p className="text-text-secondary">
                Hazier behoudt zich het recht voor om een opdracht te weigeren zonder opgave van reden.
              </p>
            </div>

            {/* Prijzen & betaling */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Prijzen & betaling</h2>
              <ul className="list-disc list-inside text-text-secondary space-y-2">
                <li>Alle vermelde prijzen zijn exclusief BTW, tenzij anders aangegeven.</li>
                <li>Facturen dienen binnen 14 dagen na factuurdatum betaald te worden.</li>
                <li>Bij laattijdige betaling is een wettelijke intrest verschuldigd, vermeerderd met een forfaitaire schadevergoeding van 10% met een minimum van €50.</li>
                <li>Hazier behoudt zich het recht voor om werkzaamheden op te schorten bij openstaande facturen.</li>
              </ul>
            </div>

            {/* Uitvoering diensten */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Uitvoering van diensten</h2>
              <p className="text-text-secondary mb-2">
                Hazier zal de overeengekomen diensten naar beste inzicht en vermogen uitvoeren. Het betreft een inspanningsverbintenis, geen resultaatsverbintenis.
              </p>
              <p className="text-text-secondary mb-2">
                Voor SEO-diensten kan Hazier geen specifieke posities in zoekmachines garanderen, aangezien resultaten afhankelijk zijn van vele externe factoren.
              </p>
              <p className="text-text-secondary">
                De opdrachtgever zorgt tijdig voor alle benodigde informatie, materialen en toegangen die nodig zijn voor de uitvoering van de opdracht.
              </p>
            </div>

            {/* Aansprakelijkheid */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Aansprakelijkheid</h2>
              <p className="text-text-secondary mb-2">
                De aansprakelijkheid van Hazier is beperkt tot het bedrag dat voor de betreffende opdracht in rekening is gebracht.
              </p>
              <p className="text-text-secondary mb-2">
                Hazier is niet aansprakelijk voor indirecte schade, gevolgschade, gederfde winst of gemiste besparingen.
              </p>
              <p className="text-text-secondary">
                Hazier is niet verantwoordelijk voor wijzigingen in algoritmes van zoekmachines of het beleid van derde platformen.
              </p>
            </div>

            {/* Intellectueel eigendom */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Intellectueel eigendom</h2>
              <p className="text-text-secondary mb-2">
                Alle door Hazier ontwikkelde materialen (ontwerpen, code, teksten, strategieën) blijven eigendom van Hazier totdat volledige betaling heeft plaatsgevonden.
              </p>
              <p className="text-text-secondary">
                Na volledige betaling worden de gebruiksrechten overgedragen aan de opdrachtgever, tenzij schriftelijk anders overeengekomen. Hazier behoudt het recht om het werk te gebruiken voor portfolio- en referentiedoeleinden.
              </p>
            </div>

            {/* Opzegging */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Opzegging</h2>
              <p className="text-text-secondary mb-2">
                Doorlopende overeenkomsten (zoals maandelijkse SEO-pakketten) kunnen door beide partijen worden opgezegd met een opzegtermijn van 1 maand, tenzij anders overeengekomen.
              </p>
              <p className="text-text-secondary">
                Bij voortijdige opzegging door de opdrachtgever zijn de reeds geleverde diensten en gemaakte kosten verschuldigd.
              </p>
            </div>

            {/* Klachten */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Klachten</h2>
              <p className="text-text-secondary">
                Klachten dienen binnen 14 dagen na levering van de diensten schriftelijk gemeld te worden aan{" "}
                <a href="mailto:info@hazier.be" className="text-accent hover:underline">info@hazier.be</a>.
                Na deze termijn wordt de levering als aanvaard beschouwd. Hazier zal klachten binnen een redelijke termijn behandelen.
              </p>
            </div>

            {/* Toepasselijk recht */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">9. Toepasselijk recht</h2>
              <p className="text-text-secondary">
                Op alle overeenkomsten tussen Hazier en de opdrachtgever is het Belgisch recht van toepassing. Eventuele geschillen worden voorgelegd aan de bevoegde rechtbanken in België.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">10. Contact</h2>
              <p className="text-text-secondary">
                Vragen over deze voorwaarden? Neem contact op via{" "}
                <a href="mailto:info@hazier.be" className="text-accent hover:underline">info@hazier.be</a>{" "}
                of bel naar <strong className="text-foreground">0477 19 09 18</strong>.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
