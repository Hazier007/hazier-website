import { redirect } from "next/navigation";
import { requireAdminSession } from "@/lib/admin-auth";
import { AdminLoginForm } from "./AdminLoginForm";

export const metadata = {
  title: "Admin Login | Hazier",
};

export default async function AdminLoginPage() {
  if (await requireAdminSession()) {
    redirect("/admin/cases");
  }

  return (
    <main className="min-h-screen bg-background px-4 py-16 text-foreground">
      <div className="mx-auto max-w-md">
        <div className="mb-8">
          <p className="text-sm font-semibold text-accent">Hazier admin</p>
          <h1 className="mt-2 text-3xl font-bold">Inloggen</h1>
        </div>
        <AdminLoginForm />
      </div>
    </main>
  );
}
