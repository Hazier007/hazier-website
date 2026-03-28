import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import blogPosts from "@/data/blog-posts.json";

export const metadata: Metadata = {
  title: "Blog | Hazier - SEO Tips, Webdesign Gidsen & Digital Marketing",
  description:
    "Praktische SEO tips, webdesign gidsen en digital marketing inzichten. Leer hoe je meer klanten bereikt via Google.",
};

const categories = [
  { id: "all", label: "Alles" },
  { id: "seo-basics", label: "SEO Basics" },
  { id: "technische-seo", label: "Technische SEO" },
  { id: "local-seo", label: "Local SEO" },
  { id: "linkbuilding", label: "Linkbuilding" },
  { id: "content-marketing", label: "Content" },
  { id: "webdesign", label: "Webdesign" },
  { id: "niche-seo", label: "Niche SEO" },
  { id: "programmatic-seo", label: "Programmatic" },
  { id: "seo-trends", label: "Trends" },
  { id: "analytics", label: "Analytics" },
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main id="main" className="pt-16">
        {/* Hero */}
        <Section size="xl">
          <div className="max-w-4xl mx-auto text-center">
            <Badge variant="secondary" className="mb-6">
              Blog
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-6">
              SEO & Webdesign <span className="text-accent">Kennisbank</span>
            </h1>
            <p className="text-xl text-text-secondary mb-8 max-w-3xl mx-auto">
              Praktische gidsen, tips en strategieën om jouw website hoger in
              Google te krijgen en meer klanten aan te trekken.
            </p>
          </div>
        </Section>

        {/* Categories */}
        <Section className="py-4">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-2 justify-center">
              {categories.map((cat) => (
                <Badge
                  key={cat.id}
                  variant={cat.id === "all" ? "default" : "secondary"}
                  className="cursor-pointer hover:bg-accent hover:text-white transition-colors"
                >
                  {cat.label}
                </Badge>
              ))}
            </div>
          </div>
        </Section>

        {/* Blog Posts Grid */}
        <Section size="xl">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {blogPosts.map((post) => (
                <Link key={post.slug} href={`/blog/${post.slug}`}>
                  <Card className="h-full hover:border-accent/50 transition-colors group overflow-hidden">
                    {post.image && (
                      <div className="relative h-48 w-full overflow-hidden">
                        <Image
                          src={post.image}
                          alt={post.titel}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-300"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardHeader>
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="secondary" className="text-xs">
                          {categories.find((c) => c.id === post.categorie)?.label ?? post.categorie}
                        </Badge>
                      </div>
                      <CardTitle className="text-lg group-hover:text-accent transition-colors leading-tight">
                        {post.titel}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-text-secondary line-clamp-3">
                        {post.beschrijving}
                      </CardDescription>
                      <div className="mt-4 flex flex-wrap gap-1">
                        {post.keywords.slice(0, 3).map((kw) => (
                          <span
                            key={kw}
                            className="text-xs text-text-tertiary bg-background-secondary px-2 py-0.5 rounded"
                          >
                            {kw}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </Section>

        {/* CTA */}
        <Section size="lg" className="bg-accent/5">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Liever persoonlijk advies?
            </h2>
            <p className="text-text-secondary mb-6">
              Onze SEO experts bekijken je website en geven concrete verbeterpunten.
              Gratis en vrijblijvend.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" asChild>
                <Link href="/contact">Gratis SEO Audit</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/seo-check">SEO Check Tool</Link>
              </Button>
            </div>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
