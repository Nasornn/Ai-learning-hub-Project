import Link from "next/link";
import { Sparkles, UserPlus } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function SignUpPage() {
  return (
    <div className="mx-auto grid max-w-6xl gap-8 px-4 py-12 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
      <Card className="self-start shadow-soft">
        <CardContent className="p-6">
          <div className="flex items-center gap-2">
            <UserPlus className="h-5 w-5 text-blue-600" aria-hidden="true" />
            <h1 className="text-2xl font-bold">Create your DekReady account</h1>
          </div>
          <form className="mt-6 grid gap-4">
            <label className="grid gap-1 text-sm font-medium">
              Full name
              <Input placeholder="Maya Charoen" />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Email
              <Input type="email" placeholder="student@example.com" />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Password
              <Input type="password" placeholder="Create mock password" />
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Role
              <select className="h-10 rounded-lg border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                {["Student", "Parent", "Tutor", "Admin"].map((role) => (
                  <option key={role}>{role}</option>
                ))}
              </select>
            </label>
            <label className="grid gap-1 text-sm font-medium">
              Target exam
              <select className="h-10 rounded-lg border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
                {["GED", "SAT", "IELTS", "Thai Math", "English", "University Prep"].map((exam) => (
                  <option key={exam}>{exam}</option>
                ))}
              </select>
            </label>
            <Button type="button" className="mt-2">Sign up with mock auth</Button>
          </form>
          <p className="mt-5 text-sm text-muted-foreground">
            Already have an account? <Link href="/login" className="text-blue-700 hover:underline">Login</Link>
          </p>
        </CardContent>
      </Card>

      <div className="rounded-2xl bg-white p-8 shadow-soft">
        <Sparkles className="h-8 w-8 text-blue-600" aria-hidden="true" />
        <h2 className="mt-6 text-4xl font-bold tracking-tight">Start with bilingual exam prep from day one.</h2>
        <p className="mt-4 text-muted-foreground thai-copy">
          Students can practice realistic questions, parents can later view progress, and tutors/admins can manage content through the mock admin shell.
        </p>
      </div>
    </div>
  );
}
