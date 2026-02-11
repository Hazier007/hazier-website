import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();

    // TODO: Wire this into CRM/Notion/email.
    console.log("intake.submitted", payload);

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("intake.error", err);
    return NextResponse.json({ ok: false }, { status: 500 });
  }
}
