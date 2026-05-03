import Link from "next/link";
import { LogIn, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8">
      <div className="rounded-2xl bg-slate-950 p-8 text-white shadow-soft">
        <ShieldCheck className="h-8 w-8 text-teal-300" aria-hidden="true" />
        <h1 className="mt-6 text-4xl font-bold tracking-tight">Welcome back to DekReady AI.</h1>
        <p className="mt-4 text-slate-300 thai-copy">
          Mock auth for students, parents, tutors, and admins. Supabase Auth can later replace this form without changing the route structure.
        </p>
        <div className="mt-8 grid gap-3 text-sm text-slate-200">
          <p>Student: continue learning and practice tests</p>
          <p>Parent: track progress and readiness</p>
          <p>Tutor/Admin: manage content and analytics</p>
        </div>
      </div>

      <Card className="self-start shadow-soft">
        <CardContent className="p-6">
          <div className="flex items-center gap-2">
            <LogIn className="h-5 w-5 text-blue-600" aria-hidden="true" />
            <h2 className="text-2xl font-bold">Login</h2>
          </div>
          <form className="mt-6 grid gap-4">
            <label className="grid gap-1 text-sm font-medium">
              Email
              <Input type="email" placeholder="student@example.com" />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Password
              <Input type="password" placeholder="Enter mock password" />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Role
              <select className="h-10 rounded-lg border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                {["Student", "Parent", "Tutor", "Admin"].map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </label>
            <Button type="button" className="mt-2">Continue with mock auth</Button>
          </form>
          <div className="mt-5 flex items-center justify-between text-sm">
            <Link href="/forgot-password" className="text-blue-700 hover:underline">Forgot password?</Link>
            <Link href="/signup" className="text-blue-700 hover:underline">Create account</Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
