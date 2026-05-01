import { neon } from "@neondatabase/serverless";
import cases from "../src/data/cases.json" with { type: "json" };

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  console.error("DATABASE_URL is required.");
  process.exit(1);
}

const sql = neon(databaseUrl);

await sql`
  CREATE TABLE IF NOT EXISTS cases (
    id SERIAL PRIMARY KEY,
    slug TEXT NOT NULL UNIQUE,
    title TEXT NOT NULL,
    website TEXT DEFAULT '',
    client TEXT DEFAULT '',
    type TEXT NOT NULL,
    description TEXT NOT NULL,
    timeline TEXT DEFAULT '',
    screenshot_url TEXT DEFAULT '',
    services TEXT[] NOT NULL DEFAULT '{}',
    tags TEXT[] NOT NULL DEFAULT '{}',
    results JSONB NOT NULL DEFAULT '{}'::jsonb,
    challenge TEXT,
    solution TEXT,
    quote TEXT,
    quote_author TEXT,
    published BOOLEAN NOT NULL DEFAULT true,
    sort_order INTEGER NOT NULL DEFAULT 0,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW(),
    updated_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
  )
`;

for (const [index, item] of cases.entries()) {
  await sql`
    INSERT INTO cases (
      slug, title, website, client, type, description, timeline, screenshot_url,
      services, tags, results, published, sort_order
    ) VALUES (
      ${item.slug}, ${item.titel}, ${item.website}, ${item.klant}, ${item.type},
      ${item.beschrijving}, ${item.timeline}, ${item.screenshot}, ${item.services},
      ${item.tags}, ${JSON.stringify(item.resultaten)}::jsonb, true, ${index}
    )
    ON CONFLICT (slug) DO UPDATE SET
      title = EXCLUDED.title,
      website = EXCLUDED.website,
      client = EXCLUDED.client,
      type = EXCLUDED.type,
      description = EXCLUDED.description,
      timeline = EXCLUDED.timeline,
      screenshot_url = EXCLUDED.screenshot_url,
      services = EXCLUDED.services,
      tags = EXCLUDED.tags,
      results = EXCLUDED.results,
      sort_order = EXCLUDED.sort_order,
      updated_at = NOW()
  `;
}

console.log(`Seeded ${cases.length} cases.`);
