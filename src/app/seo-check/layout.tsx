import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gratis SEO Check | Hazier - Test Jouw Website in 30 Seconden",
  description:
    "Gratis SEO analyse tool. Check jouw website op technische SEO, snelheid, mobile-friendliness en content kwaliteit. Direct resultaat met concrete tips.",
};

export default function SeoCheckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
