import { NextRequest, NextResponse } from "next/server";
import { databaseIsConfigured, deleteCase, updateCase } from "@/lib/cases";
import { requireAdminSession } from "@/lib/admin-auth";

type Params = {
  params: Promise<{ id: string }>;
};

function parseId(id: string) {
  const value = Number(id);
  return Number.isInteger(value) && value > 0 ? value : null;
}

export async function PATCH(request: NextRequest, { params }: Params) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }

  if (!databaseIsConfigured()) {
    return NextResponse.json({ error: "DATABASE_URL is niet geconfigureerd" }, { status: 503 });
  }

  const { id } = await params;
  const caseId = parseId(id);
  if (!caseId) {
    return NextResponse.json({ error: "Ongeldig case ID" }, { status: 400 });
  }

  try {
    const updated = await updateCase(caseId, await request.json());
    if (!updated) {
      return NextResponse.json({ error: "Case niet gevonden" }, { status: 404 });
    }
    return NextResponse.json({ case: updated });
  } catch (error) {
    const message = error instanceof Error ? error.message : "Case kon niet opgeslagen worden";
    return NextResponse.json({ error: message }, { status: 400 });
  }
}

export async function DELETE(_request: NextRequest, { params }: Params) {
  if (!(await requireAdminSession())) {
    return NextResponse.json({ error: "Niet ingelogd" }, { status: 401 });
  }

  if (!databaseIsConfigured()) {
    return NextResponse.json({ error: "DATABASE_URL is niet geconfigureerd" }, { status: 503 });
  }

  const { id } = await params;
  const caseId = parseId(id);
  if (!caseId) {
    return NextResponse.json({ error: "Ongeldig case ID" }, { status: 400 });
  }

  await deleteCase(caseId);
  return NextResponse.json({ ok: true });
}
