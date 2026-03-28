import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent, CardTitle } from "@/components/ui/Card";
import { BreadcrumbSchema } from "@/components/seo/JsonLd";
import blogPosts from "@/data/blog-posts.json";

// Try to load full content; fall back to summary
async function getPostContent(slug: string) {
  try {
    const mod = await import(`@/data/blog/${slug}.json`);
    return mod.default;
  } catch {
    return null;
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) return {};

  return {
    title: `${post.titel} | Hazier Blog`,
    description: post.beschrijving,
    keywords: post.keywords,
    openGraph: {
      title: post.titel,
      description: post.beschrijving,
      type: "article",
      url: `https://hazier.be/blog/${post.slug}`,
    },
  };
}

const categoryLabels: Record<string, string> = {
  "seo-basics": "SEO Basics",
  "technische-seo": "Technische SEO",
  "local-seo": "Local SEO",
  "linkbuilding": "Linkbuilding",
  "content-marketing": "Content Marketing",
  "webdesign": "Webdesign",
  "niche-seo": "Niche SEO",
  "programmatic-seo": "Programmatic SEO",
  "seo-trends": "SEO Trends",
  "analytics": "Analytics",
};

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = blogPosts.find((p) => p.slug === slug);
  if (!post) notFound();

  const content = await getPostContent(slug);

  // Related posts: same category, exclude current
  const related = blogPosts
    .filter((p) => p.categorie === post.categorie && p.slug !== post.slug)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <BreadcrumbSchema
        items={[
          { name: "Home", href: "/" },
          { name: "Blog", href: "/blog" },
          { name: post.titel, href: `/blog/${post.slug}` },
        ]}
      />
      <Header />

      <main id="main" className="pt-16">
        <article>
          {/* Hero */}
          <Section size="xl">
            <div className="max-w-3xl mx-auto">
              <div className="flex items-center gap-2 mb-4">
                <Link href="/blog">
                  <Badge variant="secondary" className="hover:bg-accent hover:text-white transition-colors">
                    ← Blog
                  </Badge>
                </Link>
                <Badge variant="secondary">
                  {categoryLabels[post.categorie] ?? post.categorie}
                </Badge>
              </div>

              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 leading-tight">
                {post.titel}
              </h1>

              <p className="text-xl text-text-secondary mb-8">
                {post.beschrijving}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {post.keywords.map((kw) => (
                  <span
                    key={kw}
                    className="text-sm text-text-tertiary bg-background-secondary px-3 py-1 rounded-full"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </Section>

          {/* Content */}
          <Section>
            <div className="max-w-3xl mx-auto">
              {content?.sections ? (
                <div className="prose prose-invert prose-lg max-w-none">
                  {content.sections.map(
                    (
                      section: { heading: string; body: string },
                      i: number
                    ) => (
                      <div key={i} className="mb-10">
                        <h2 className="text-2xl font-bold text-foreground mb-4">
                          {section.heading}
                        </h2>
                        <div
                          className="text-text-secondary leading-relaxed space-y-4"
                          dangerouslySetInnerHTML={{
                            __html: section.body
                              .split("\n\n")
                              .map((p: string) => `<p>${p}</p>`)
                              .join(""),
                          }}
                        />
                      </div>
                    )
                  )}
                </div>
              ) : (
                <div className="text-center py-16">
                  <p className="text-text-secondary text-lg mb-6">
                    Dit artikel wordt binnenkort gepubliceerd.
                  </p>
                  <Button asChild>
                    <Link href="/blog">Terug naar alle artikelen</Link>
                  </Button>
                </div>
              )}
            </div>
          </Section>

          {/* CTA in article */}
          {content?.sections && (
            <Section className="bg-accent/5">
              <div className="max-w-3xl mx-auto text-center">
                <h2 className="text-2xl font-bold text-foreground mb-3">
                  Hulp nodig met {categoryLabels[post.categorie] ?? "SEO"}?
                </h2>
                <p className="text-text-secondary mb-6">
                  Onze experts helpen je graag. Vraag een gratis strategiegesprek
                  aan.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Button asChild>
                    <Link href="/contact">Gratis Strategiegesprek</Link>
                  </Button>
                  {post.internalLinks?.[0] && (
                    <Button variant="outline" asChild>
                      <Link href={post.internalLinks[0]}>Bekijk onze diensten</Link>
                    </Button>
                  )}
                </div>
              </div>
            </Section>
          )}
        </article>

        {/* Related Posts */}
        {related.length > 0 && (
          <Section size="lg">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-2xl font-bold text-foreground mb-6">
                Gerelateerde Artikelen
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {related.map((rel) => (
                  <Link key={rel.slug} href={`/blog/${rel.slug}`}>
                    <Card className="h-full hover:border-accent/50 transition-colors group">
                      <CardContent className="pt-6">
                        <Badge variant="secondary" className="text-xs mb-3">
                          {categoryLabels[rel.categorie] ?? rel.categorie}
                        </Badge>
                        <CardTitle className="text-base group-hover:text-accent transition-colors mb-2 leading-tight">
                          {rel.titel}
                        </CardTitle>
                        <p className="text-sm text-text-secondary line-clamp-2">
                          {rel.beschrijving}
                        </p>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          </Section>
        )}
      </main>

      <Footer />
    </div>
  );
}
