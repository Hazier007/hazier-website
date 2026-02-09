import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { SocialProofBar } from "@/components/sections/SocialProofBar";
import { Services } from "@/components/sections/Services";
import { Cases } from "@/components/sections/Cases";
import { WhyHazier } from "@/components/sections/WhyHazier";
import { Testimonials } from "@/components/sections/Testimonials";
import { PricingPreview } from "@/components/sections/PricingPreview";
import { CTASection } from "@/components/sections/CTASection";

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        <SocialProofBar />
        <Services />
        <Cases />
        <WhyHazier />
        <Testimonials />
        <PricingPreview />
        <CTASection />
      </main>

      <Footer />
    </div>
  );
}
