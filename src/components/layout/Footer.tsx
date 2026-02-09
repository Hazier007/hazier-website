import Link from "next/link";
import { Mail, Phone, MapPin, Instagram, Facebook, MapPinned } from "lucide-react";

const footerNavigation = {
  diensten: [
    { name: "SEO", href: "/diensten/seo" },
    { name: "Webdesign", href: "/diensten/webdesign" },
    { name: "Programmatic SEO", href: "/diensten/programmatic-seo" },
    { name: "Local SEO", href: "/diensten/seo/lokale-seo" },
  ],
  bedrijf: [
    { name: "Over ons", href: "/over-ons" },
    { name: "Cases", href: "/cases" },
    { name: "Contact", href: "/contact" },
    { name: "Prijzen", href: "/prijzen" },
  ],
  support: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap.xml" },
  ],
};

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/hazier.be/",
    icon: Instagram,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/hazier.be",
    icon: Facebook,
  },
  {
    name: "Google Maps",
    href: "https://maps.app.goo.gl/Fh6KXt3koFZ69mMJ7",
    icon: MapPinned,
  },
];

export function Footer() {
  return (
    <footer className="bg-background border-t border-border">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          {/* Brand & Contact */}
          <div className="space-y-6">
            <div>
              <Link href="/" className="text-3xl font-bold text-foreground">
                Hazier
              </Link>
              <p className="mt-2 text-text-secondary max-w-sm">
                Professionele SEO en webdesign services voor meer klanten, meer groei en meer omzet via Google.
              </p>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center text-text-secondary">
                <Mail className="h-4 w-4 mr-2 text-accent" />
                <a href="mailto:info@hazier.be" className="hover:text-foreground transition-colors">
                  info@hazier.be
                </a>
              </div>
              <div className="flex items-center text-text-secondary">
                <Phone className="h-4 w-4 mr-2 text-accent" />
                <a href="tel:+32477190918" className="hover:text-foreground transition-colors">
                  0477 19 09 18
                </a>
              </div>
              <div className="flex items-center text-text-secondary">
                <MapPin className="h-4 w-4 mr-2 text-accent" />
                <span>België, Vlaanderen</span>
              </div>
            </div>

            {/* Social Links */}
            {socialLinks.length > 0 && (
              <div className="flex space-x-4">
                {socialLinks.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text-secondary hover:text-accent transition-colors"
                  >
                    <span className="sr-only">{item.name}</span>
                    <item.icon className="h-5 w-5" aria-hidden={true} />
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Navigation Links */}
          <div className="mt-12 xl:mt-0 grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Diensten
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.diensten.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-text-secondary hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Bedrijf
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.bedrijf.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-text-secondary hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-1">
              <div>
                <h3 className="text-sm font-semibold text-foreground tracking-wider uppercase">
                  Legal
                </h3>
                <ul className="mt-4 space-y-3">
                  {footerNavigation.support.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-text-secondary hover:text-foreground transition-colors"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 border-t border-border pt-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex space-x-6 md:order-2">
              <p className="text-xs text-text-tertiary">
                Ontwikkeld met ❤️ in België
              </p>
            </div>
            <p className="mt-8 text-xs text-text-tertiary md:order-1 md:mt-0">
              &copy; {new Date().getFullYear()} Hazier. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}