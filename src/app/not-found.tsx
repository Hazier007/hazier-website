import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />

      <main id="main" className="flex-1 flex items-center justify-center pt-16">
        <div className="text-center px-4">
          <p className="text-accent text-lg font-semibold mb-2">404</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-4">
            Pagina niet gevonden
          </h1>
          <p className="text-lg text-text-secondary max-w-md mx-auto mb-8">
            Deze pagina bestaat niet (meer). Misschien vind je wat je zoekt via
            een van deze links.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild>
              <Link href="/">Naar homepage</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/diensten">Onze diensten</Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">Contact</Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
