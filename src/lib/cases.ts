import { neon } from "@neondatabase/serverless";
import legacyCases from "@/data/cases.json";

export type CaseRecord = {
  id: number;
  slug: string;
  title: string;
  website: string;
  client: string;
  type: string;
  description: string;
  timeline: string;
  screenshotUrl: string;
  services: string[];
  tags: string[];
  results: Record<string, string>;
  challenge: string | null;
  solution: string | null;
  quote: string | null;
  quoteAuthor: string | null;
  published: boolean;
  sortOrder: number;
  createdAt: string;
  updatedAt: string;
};

export type CaseInput = {
  slug: string;
  title: string;
  website?: string;
  client?: string;
  type: string;
  description: string;
  timeline?: string;
  screenshotUrl?: string;
  services?: string[];
  tags?: string[];
  results?: Record<string, string>;
  challenge?: string | null;
  solution?: string | null;
  quote?: string | null;
  quoteAuthor?: string | null;
  published?: boolean;
  sortOrder?: number;
};

type CaseRow = {
  id: number;
  slug: string;
  title: string;
  website: string | null;
  client: string | null;
  type: string;
  description: string;
  timeline: string | null;
  screenshot_url: string | null;
  services: string[] | null;
  tags: string[] | null;
  results: Record<string, string> | null;
  challenge: string | null;
  solution: string | null;
  quote: string | null;
  quote_author: string | null;
  published: boolean;
  sort_order: number;
  created_at: Date | string;
  updated_at: Date | string;
};

let sqlClient: ReturnType<typeof neon> | null = null;

function hasDatabase() {
  return Boolean(process.env.DATABASE_URL);
}

function getSql() {
  const databaseUrl = process.env.DATABASE_URL;
  if (!databaseUrl) {
    throw new Error("DATABASE_URL is not configured");
  }

  if (!sqlClient) {
    sqlClient = neon(databaseUrl);
  }

  return sqlClient;
}

function normalizeSlug(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function sanitizeCaseInput(input: CaseInput): CaseInput {
  const slug = normalizeSlug(input.slug || input.title);
  const title = input.title.trim();
  const type = input.type.trim();
  const description = input.description.trim();

  if (!slug || !title || !type || !description) {
    throw new Error("Slug, titel, type en beschrijving zijn verplicht.");
  }

  return {
    slug,
    title,
    website: input.website?.trim() || "",
    client: input.client?.trim() || "",
    type,
    description,
    timeline: input.timeline?.trim() || "",
    screenshotUrl: input.screenshotUrl?.trim() || "",
    services: input.services ?? [],
    tags: input.tags ?? [],
    results: input.results ?? {},
    challenge: input.challenge?.trim() || null,
    solution: input.solution?.trim() || null,
    quote: input.quote?.trim() || null,
    quoteAuthor: input.quoteAuthor?.trim() || null,
    published: input.published ?? true,
    sortOrder: input.sortOrder ?? 0,
  };
}

function rowToCase(row: CaseRow): CaseRecord {
  return {
    id: row.id,
    slug: row.slug,
    title: row.title,
    website: row.website ?? "",
    client: row.client ?? "",
    type: row.type,
    description: row.description,
    timeline: row.timeline ?? "",
    screenshotUrl: row.screenshot_url ?? "",
    services: row.services ?? [],
    tags: row.tags ?? [],
    results: row.results ?? {},
    challenge: row.challenge,
    solution: row.solution,
    quote: row.quote,
    quoteAuthor: row.quote_author,
    published: row.published,
    sortOrder: row.sort_order,
    createdAt: new Date(row.created_at).toISOString(),
    updatedAt: new Date(row.updated_at).toISOString(),
  };
}

function legacyToCase(item: (typeof legacyCases)[number], index: number): CaseRecord {
  return {
    id: index + 1,
    slug: item.slug,
    title: item.titel,
    website: item.website,
    client: item.klant,
    type: item.type,
    description: item.beschrijving,
    timeline: item.timeline,
    screenshotUrl: item.screenshot,
    services: item.services,
    tags: item.tags,
    results: item.resultaten as unknown as Record<string, string>,
    challenge: null,
    solution: null,
    quote: null,
    quoteAuthor: null,
    published: true,
    sortOrder: index,
    createdAt: new Date(0).toISOString(),
    updatedAt: new Date(0).toISOString(),
  };
}

export async function ensureCasesTable() {
  const sql = getSql();
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
}

export async function listCases(options: { includeUnpublished?: boolean } = {}) {
  if (!hasDatabase()) {
    return legacyCases.map(legacyToCase);
  }

  await ensureCasesTable();
  const sql = getSql();
  const rows = options.includeUnpublished
    ? await sql`SELECT * FROM cases ORDER BY sort_order ASC, created_at DESC`
    : await sql`SELECT * FROM cases WHERE published = true ORDER BY sort_order ASC, created_at DESC`;

  return (rows as CaseRow[]).map(rowToCase);
}

export async function getCaseBySlug(slug: string, options: { includeUnpublished?: boolean } = {}) {
  if (!hasDatabase()) {
    return legacyCases.map(legacyToCase).find((item) => item.slug === slug) ?? null;
  }

  await ensureCasesTable();
  const sql = getSql();
  const rows = options.includeUnpublished
    ? await sql`SELECT * FROM cases WHERE slug = ${slug} LIMIT 1`
    : await sql`SELECT * FROM cases WHERE slug = ${slug} AND published = true LIMIT 1`;

  const caseRows = rows as unknown as CaseRow[];
  return caseRows[0] ? rowToCase(caseRows[0]) : null;
}

export async function createCase(input: CaseInput) {
  await ensureCasesTable();
  const data = sanitizeCaseInput(input);
  const sql = getSql();
  const rows = await sql`
    INSERT INTO cases (
      slug, title, website, client, type, description, timeline, screenshot_url,
      services, tags, results, challenge, solution, quote, quote_author, published, sort_order
    ) VALUES (
      ${data.slug}, ${data.title}, ${data.website}, ${data.client}, ${data.type},
      ${data.description}, ${data.timeline}, ${data.screenshotUrl}, ${data.services},
      ${data.tags}, ${JSON.stringify(data.results)}::jsonb, ${data.challenge},
      ${data.solution}, ${data.quote}, ${data.quoteAuthor}, ${data.published}, ${data.sortOrder}
    )
    RETURNING *
  `;

  return rowToCase((rows as unknown as CaseRow[])[0]);
}

export async function updateCase(id: number, input: CaseInput) {
  await ensureCasesTable();
  const data = sanitizeCaseInput(input);
  const sql = getSql();
  const rows = await sql`
    UPDATE cases SET
      slug = ${data.slug},
      title = ${data.title},
      website = ${data.website},
      client = ${data.client},
      type = ${data.type},
      description = ${data.description},
      timeline = ${data.timeline},
      screenshot_url = ${data.screenshotUrl},
      services = ${data.services},
      tags = ${data.tags},
      results = ${JSON.stringify(data.results)}::jsonb,
      challenge = ${data.challenge},
      solution = ${data.solution},
      quote = ${data.quote},
      quote_author = ${data.quoteAuthor},
      published = ${data.published},
      sort_order = ${data.sortOrder},
      updated_at = NOW()
    WHERE id = ${id}
    RETURNING *
  `;

  const caseRows = rows as unknown as CaseRow[];
  return caseRows[0] ? rowToCase(caseRows[0]) : null;
}

export async function deleteCase(id: number) {
  await ensureCasesTable();
  const sql = getSql();
  await sql`DELETE FROM cases WHERE id = ${id}`;
}

export function databaseIsConfigured() {
  return hasDatabase();
}
