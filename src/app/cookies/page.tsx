import { Metadata } from "next";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";

export const metadata: Metadata = {
  title: "Cookie Policy | Hazier",
  description: "Cookie Policy van Hazier. Ontdek welke cookies wij gebruiken en hoe u deze kunt beheren.",
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-16">
        <Section size="xl">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Cookie <span className="text-accent">Policy</span>
            </h1>
            <p className="text-text-secondary mb-2">Laatst bijgewerkt: februari 2025</p>
            <p className="text-lg text-text-secondary mb-12">
              Deze cookie policy legt uit wat cookies zijn, welke cookies wij gebruiken op hazier.be en hoe u ze kunt beheren.
            </p>

            {/* Wat zijn cookies */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Wat zijn cookies?</h2>
              <p className="text-text-secondary">
                Cookies zijn kleine tekstbestanden die op uw computer of mobiel apparaat worden opgeslagen wanneer u een website bezoekt. Ze worden veelvuldig gebruikt om websites te laten werken, efficiënter te maken en informatie te verstrekken aan de eigenaren van de website.
              </p>
            </div>

            {/* Welke cookies */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Welke cookies gebruiken wij?</h2>

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">Functionele cookies</h3>
                <p className="text-text-secondary">
                  Deze cookies zijn noodzakelijk voor het correct functioneren van de website. Ze onthouden bijvoorbeeld uw voorkeuren en zorgen ervoor dat de website naar behoren werkt. Deze cookies verzamelen geen persoonsgegevens.
                </p>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-foreground mb-2">Analytische cookies – Google Analytics 4 (GA4)</h3>
                <p className="text-text-secondary mb-3">
                  Wij gebruiken Google Analytics 4 om inzicht te krijgen in hoe bezoekers onze website gebruiken. Dit helpt ons om de website te verbeteren. GA4 verzamelt geanonimiseerde gegevens, zoals:
                </p>
                <ul className="list-disc list-inside text-text-secondary space-y-1">
                  <li>Aantal bezoekers en sessies</li>
                  <li>Bezochte pagina&apos;s</li>
                  <li>Sessieduur</li>
                  <li>Herkomst van het verkeer (bv. zoekmachine, social media)</li>
                  <li>Apparaat- en browserinformatie</li>
                </ul>
              </div>

              {/* Cookie overzicht tabel */}
              <div className="mt-6 overflow-x-auto">
                <table className="w-full text-left text-text-secondary">
                  <thead>
                    <tr className="border-b border-foreground/10">
                      <th className="py-3 pr-4 text-foreground font-semibold">Cookie</th>
                      <th className="py-3 pr-4 text-foreground font-semibold">Type</th>
                      <th className="py-3 pr-4 text-foreground font-semibold">Doel</th>
                      <th className="py-3 text-foreground font-semibold">Bewaartermijn</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-mono text-sm">_ga</td>
                      <td className="py-3 pr-4">Analytisch</td>
                      <td className="py-3 pr-4">Unieke bezoekers onderscheiden</td>
                      <td className="py-3">2 jaar</td>
                    </tr>
                    <tr className="border-b border-foreground/5">
                      <td className="py-3 pr-4 font-mono text-sm">_ga_*</td>
                      <td className="py-3 pr-4">Analytisch</td>
                      <td className="py-3 pr-4">Sessiestatus bewaren</td>
                      <td className="py-3">2 jaar</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Cookies beheren */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Cookies beheren of uitschakelen</h2>
              <p className="text-text-secondary mb-4">
                U kunt cookies op elk moment beheren of uitschakelen via de instellingen van uw browser. Hieronder vindt u links naar instructies voor de meest gebruikte browsers:
              </p>
              <ul className="space-y-2 text-text-secondary">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Google Chrome</a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/nl/kb/cookies-verwijderen-gegevens-wissen" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Mozilla Firefox</a>
                </li>
                <li>
                  <a href="https://support.apple.com/nl-be/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Safari</a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/nl-be/microsoft-edge/cookies-verwijderen-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-accent hover:underline">Microsoft Edge</a>
                </li>
              </ul>
              <p className="text-text-secondary mt-4">
                Let op: het uitschakelen van cookies kan de werking van de website beïnvloeden.
              </p>
            </div>

            {/* Meer info */}
            <div className="bg-background-secondary/50 rounded-2xl p-6 md:p-8 mb-8">
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Meer informatie</h2>
              <p className="text-text-secondary mb-2">
                Heeft u vragen over ons cookiebeleid? Neem dan contact met ons op via{" "}
                <a href="mailto:info@hazier.be" className="text-accent hover:underline">info@hazier.be</a>.
              </p>
              <p className="text-text-secondary">
                Lees ook onze{" "}
                <a href="/privacy" className="text-accent hover:underline">Privacy Policy</a>{" "}
                voor meer informatie over hoe wij omgaan met uw persoonsgegevens.
              </p>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
