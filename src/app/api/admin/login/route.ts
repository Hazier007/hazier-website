import { NextRequest, NextResponse } from "next/server";
import { setAdminSession, verifyAdminPassword } from "@/lib/admin-auth";

export async function POST(request: NextRequest) {
  const { password } = await request.json().catch(() => ({ password: "" }));

  if (!verifyAdminPassword(String(password || ""))) {
    return NextResponse.json({ error: "Ongeldig wachtwoord" }, { status: 401 });
  }

  await setAdminSession();
  return NextResponse.json({ ok: true });
}
