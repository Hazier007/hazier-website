type JsonLdProps = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  data: Record<string, any>;
};

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

/* ─── Pre-built schema helpers ─── */

export function OrganizationSchema() {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        name: "Hazier",
        url: "https://hazier.be",
        logo: "https://hazier.be/logo.webp",
        image: "https://hazier.be/og-image.jpg",
        description:
          "Professionele SEO en webdesign agency in België. Meer klanten, meer groei, meer omzet via Google.",
        telephone: "+32477190918",
        email: "info@hazier.be",
        address: {
          "@type": "PostalAddress",
          addressRegion: "Vlaanderen",
          addressCountry: "BE",
        },
        areaServed: [
          { "@type": "Country", name: "België" },
          { "@type": "Country", name: "Nederland" },
        ],
        sameAs: [
          "https://www.facebook.com/hazier.be",
          "https://www.instagram.com/hazier.be/",
        ],
        priceRange: "€€",
        serviceType: [
          "SEO Optimalisatie",
          "Webdesign",
          "Programmatic SEO",
          "Local SEO",
          "Link Building",
        ],
      }}
    />
  );
}

export function BreadcrumbSchema({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, i) => ({
          "@type": "ListItem",
          position: i + 1,
          name: item.name,
          item: `https://hazier.be${item.href}`,
        })),
      }}
    />
  );
}

export function ServiceSchema({
  name,
  description,
  url,
}: {
  name: string;
  description: string;
  url: string;
}) {
  return (
    <JsonLd
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name,
        description,
        url: `https://hazier.be${url}`,
        provider: {
          "@type": "ProfessionalService",
          name: "Hazier",
          url: "https://hazier.be",
        },
        areaServed: [
          { "@type": "Country", name: "België" },
          { "@type": "Country", name: "Nederland" },
        ],
      }}
    />
  );
}
