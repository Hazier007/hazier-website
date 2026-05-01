import { NextRequest, NextResponse } from "next/server";
import { createCase, databaseIsConfigured, listCases } from "@/lib/cases";
import { requireAdminSession } from "@/lib/admin-auth";

export async function GET() {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }

  const cases = await listCases({ includeUnpublished: true });
  return NextResponse.json({ cases, databaseConfigured: databaseIsConfigured() });
}

export async function POST(request: NextRequest) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }

  if (!databaseIsConfigured()) {
    return NextResponse.json({ error: "DATABASE_URL is niet geconfigureerd" }, { status: 503 });
  }

  try {
    const created = await createCase(await request.json());
    return NextResponse.json({ case: created }, { status: 201 });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Case kon niet aangemaakt worden";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}
