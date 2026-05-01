import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/admin-auth";
import { databaseIsConfigured, listCases } from "@/lib/cases";
import { AdminCasesClient } from "./AdminCasesClient";

export const metadata = {
  title: "Cases beheren | Hazier",
};

export default async function AdminCasesPage() {
  if (!(await requireAdminSession())) {
    redirect("/admin/login");
  }

  const cases = await listCases({ includeUnpublished: true });

  return (
    <main className="min-h-screen bg-background px-4 py-8 text-foreground">
      <AdminCasesClient initialCases={cases} databaseConfigured={databaseIsConfigured()} />
    </main>
  );
}
