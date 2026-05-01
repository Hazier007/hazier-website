"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Card } from "@/components/ui/Card";
import type { CaseInput, CaseRecord } from "@/lib/cases";

type Props = {
  initialCases: CaseRecord[];
  databaseConfigured: boolean;
};

type FormState = {
  id?: number;
  slug: string;
  title: string;
  website: string;
  client: string;
  type: string;
  description: string;
  timeline: string;
  screenshotUrl: string;
  servicesText: string;
  tagsText: string;
  resultsText: string;
  challenge: string;
  solution: string;
  quote: string;
  quoteAuthor: string;
  published: boolean;
  sortOrder: number;
};

const emptyForm: FormState = {
  slug: "",
  title: "",
  website: "",
  client: "",
  type: "",
  description: "",
  timeline: "",
  screenshotUrl: "",
  servicesText: "",
  tagsText: "",
  resultsText: "",
  challenge: "",
  solution: "",
  quote: "",
  quoteAuthor: "",
  published: true,
  sortOrder: 0,
};

function slugify(value: string) {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function caseToForm(item: CaseRecord): FormState {
  return {
    id: item.id,
    slug: item.slug,
    title: item.title,
    website: item.website,
    client: item.client,
    type: item.type,
    description: item.description,
    timeline: item.timeline,
    screenshotUrl: item.screenshotUrl,
    servicesText: item.services.join(", "),
    tagsText: item.tags.join(", "),
    resultsText: Object.entries(item.results)
      .map(([key, value]) => `${key}: ${value}`)
      .join("\n"),
    challenge: item.challenge ?? "",
    solution: item.solution ?? "",
    quote: item.quote ?? "",
    quoteAuthor: item.quoteAuthor ?? "",
    published: item.published,
    sortOrder: item.sortOrder,
  };
}

function parseList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function parseResults(value: string) {
  return value.split("\n").reduce<Record<string, string>>((acc, line) => {
    const [key, ...rest] = line.split(":");
    const cleanKey = key?.trim();
    const cleanValue = rest.join(":").trim();
    if (cleanKey && cleanValue) acc[cleanKey] = cleanValue;
    return acc;
  }, {});
}

function formToInput(form: FormState): CaseInput {
  return {
    slug: form.slug,
    title: form.title,
    website: form.website,
    client: form.client,
    type: form.type,
    description: form.description,
    timeline: form.timeline,
    screenshotUrl: form.screenshotUrl,
    services: parseList(form.servicesText),
    tags: parseList(form.tagsText),
    results: parseResults(form.resultsText),
    challenge: form.challenge,
    solution: form.solution,
    quote: form.quote,
    quoteAuthor: form.quoteAuthor,
    published: form.published,
    sortOrder: Number(form.sortOrder) || 0,
  };
}

export function AdminCasesClient({ initialCases, databaseConfigured }: Props) {
  const router = useRouter();
  const [cases, setCases] = useState(initialCases);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState<"all" | "published" | "draft">("all");
  const [message, setMessage] = useState<string | null>(null);
  const [saving, setSaving] = useState(false);

  const filteredCases = useMemo(() => {
    const q = query.toLowerCase();
    return cases.filter((item) => {
      const matchesQuery =
        item.title.toLowerCase().includes(q) ||
        item.website.toLowerCase().includes(q) ||
        item.type.toLowerCase().includes(q);
      const matchesStatus =
        status === "all" ||
        (status === "published" && item.published) ||
        (status === "draft" && !item.published);
      return matchesQuery && matchesStatus;
    });
  }, [cases, query, status]);

  function updateField<K extends keyof FormState>(key: K, value: FormState[K]) {
    setForm((current) => ({ ...current, [key]: value }));
  }

  async function refreshCases() {
    const response = await fetch("/api/admin/cases");
    if (!response.ok) return;
    const data = await response.json();
    setCases(data.cases);
    router.refresh();
  }

  async function saveCase(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSaving(true);
    setMessage(null);

    const url = form.id ? `/api/admin/cases/${form.id}` : "/api/admin/cases";
    const method = form.id ? "PATCH" : "POST";
    const response = await fetch(url, {
      method,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formToInput(form)),
    });

    const data = await response.json().catch(() => null);
    setSaving(false);

    if (!response.ok) {
      setMessage(data?.error || "Opslaan mislukt");
      return;
    }

    setMessage("Case opgeslagen");
    setForm(emptyForm);
    await refreshCases();
  }

  async function removeCase(item: CaseRecord) {
    if (!window.confirm(`Case "${item.title}" definitief verwijderen?`)) return;
    const response = await fetch(`/api/admin/cases/${item.id}`, { method: "DELETE" });
    if (!response.ok) {
      const data = await response.json().catch(() => null);
      setMessage(data?.error || "Verwijderen mislukt");
      return;
    }
    setMessage("Case verwijderd");
    await refreshCases();
  }

  async function logout() {
    await fetch("/api/admin/logout", { method: "POST" });
    router.push("/admin/login");
    router.refresh();
  }

  return (
    <div className="mx-auto grid max-w-7xl gap-8">
      <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-sm font-semibold text-accent">Hazier admin</p>
          <h1 className="mt-1 text-3xl font-bold">Cases beheren</h1>
        </div>
        <Button type="button" variant="outline" onClick={logout}>
          Uitloggen
        </Button>
      </header>

      {!databaseConfigured && (
        <Card className="border-yellow-500/40 bg-yellow-500/10 p-4 text-sm text-yellow-100">
          DATABASE_URL is niet geconfigureerd. Je ziet fallback data uit JSON; opslaan en verwijderen werkt pas met Neon.
        </Card>
      )}

      <div className="grid gap-8 lg:grid-cols-[1fr_420px]">
        <section className="grid gap-4">
          <div className="flex flex-col gap-3 md:flex-row">
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Zoeken op titel, website of type"
              className="h-11 flex-1 rounded-lg border border-white/10 bg-white/5 px-3 text-sm outline-none focus:border-accent"
            />
            <select
              value={status}
              onChange={(event) => setStatus(event.target.value as typeof status)}
              className="h-11 rounded-lg border border-white/10 bg-background-secondary px-3 text-sm outline-none focus:border-accent"
            >
              <option value="all">Alle statussen</option>
              <option value="published">Gepubliceerd</option>
              <option value="draft">Concept</option>
            </select>
          </div>

          <div className="grid gap-3">
            {filteredCases.map((item) => (
              <Card key={item.id} className="p-4">
                <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <h2 className="text-lg font-bold">{item.title}</h2>
                      <Badge variant={item.published ? "secondary" : "outline"}>
                        {item.published ? "Live" : "Concept"}
                      </Badge>
                    </div>
                    <p className="mt-1 text-sm text-text-secondary">{item.website || item.slug}</p>
                    <p className="mt-2 max-w-2xl text-sm text-text-secondary">{item.description}</p>
                  </div>
                  <div className="flex gap-2">
                    <Button type="button" variant="outline" size="sm" onClick={() => setForm(caseToForm(item))}>
                      Bewerken
                    </Button>
                    <Button type="button" variant="ghost" size="sm" onClick={() => removeCase(item)}>
                      Verwijderen
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        <Card className="p-5">
          <form onSubmit={saveCase} className="grid gap-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-xl font-bold">{form.id ? "Case bewerken" : "Nieuwe case"}</h2>
              {form.id && (
                <Button type="button" variant="ghost" size="sm" onClick={() => setForm(emptyForm)}>
                  Nieuw
                </Button>
              )}
            </div>

            <label className="grid gap-1 text-sm font-semibold">
              Titel
              <input
                value={form.title}
                onChange={(event) => {
                  updateField("title", event.target.value);
                  if (!form.id) updateField("slug", slugify(event.target.value));
                }}
                className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent"
                required
              />
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Slug
              <input
                value={form.slug}
                onChange={(event) => updateField("slug", slugify(event.target.value))}
                className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent"
                required
              />
            </label>

            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-1 text-sm font-semibold">
                Website
                <input value={form.website} onChange={(event) => updateField("website", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" />
              </label>
              <label className="grid gap-1 text-sm font-semibold">
                Klant
                <input value={form.client} onChange={(event) => updateField("client", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" />
              </label>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-1 text-sm font-semibold">
                Type
                <input value={form.type} onChange={(event) => updateField("type", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" required />
              </label>
              <label className="grid gap-1 text-sm font-semibold">
                Timeline
                <input value={form.timeline} onChange={(event) => updateField("timeline", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" />
              </label>
            </div>

            <label className="grid gap-1 text-sm font-semibold">
              Beschrijving
              <textarea value={form.description} onChange={(event) => updateField("description", event.target.value)} className="min-h-24 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-normal outline-none focus:border-accent" required />
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Screenshot URL of public path
              <input value={form.screenshotUrl} onChange={(event) => updateField("screenshotUrl", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" placeholder="/images/cases/voorbeeld.jpg" />
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Services
              <input value={form.servicesText} onChange={(event) => updateField("servicesText", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" placeholder="SEO, Webdesign, Local SEO" />
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Tags
              <input value={form.tagsText} onChange={(event) => updateField("tagsText", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" placeholder="B2B, Local Business" />
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Resultaten
              <textarea value={form.resultsText} onChange={(event) => updateField("resultsText", event.target.value)} className="min-h-24 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-normal outline-none focus:border-accent" placeholder="traffic: 300 clicks/maand&#10;ranking: Top 3 in Google" />
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Uitdaging
              <textarea value={form.challenge} onChange={(event) => updateField("challenge", event.target.value)} className="min-h-20 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-normal outline-none focus:border-accent" />
            </label>

            <label className="grid gap-1 text-sm font-semibold">
              Oplossing
              <textarea value={form.solution} onChange={(event) => updateField("solution", event.target.value)} className="min-h-20 rounded-lg border border-white/10 bg-white/5 px-3 py-2 font-normal outline-none focus:border-accent" />
            </label>

            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-1 text-sm font-semibold">
                Quote
                <input value={form.quote} onChange={(event) => updateField("quote", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" />
              </label>
              <label className="grid gap-1 text-sm font-semibold">
                Quote auteur
                <input value={form.quoteAuthor} onChange={(event) => updateField("quoteAuthor", event.target.value)} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" />
              </label>
            </div>

            <div className="grid gap-3 md:grid-cols-2">
              <label className="grid gap-1 text-sm font-semibold">
                Sorteervolgorde
                <input type="number" value={form.sortOrder} onChange={(event) => updateField("sortOrder", Number(event.target.value))} className="h-10 rounded-lg border border-white/10 bg-white/5 px-3 font-normal outline-none focus:border-accent" />
              </label>
              <label className="flex items-center gap-2 pt-6 text-sm font-semibold">
                <input type="checkbox" checked={form.published} onChange={(event) => updateField("published", event.target.checked)} />
                Gepubliceerd
              </label>
            </div>

            {message && <p className="text-sm text-text-secondary">{message}</p>}
            <Button type="submit" disabled={saving || !databaseConfigured}>
              {saving ? "Opslaan..." : "Opslaan"}
            </Button>
          </form>
        </Card>
      </div>
    </div>
  );
}
