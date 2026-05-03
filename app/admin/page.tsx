import { Activity, Bot, ChartNoAxesCombined, Users } from "lucide-react";

import { AdminStats } from "@/components/admin/AdminStats";
import { CourseManager } from "@/components/admin/CourseManager";
import { QuestionForm } from "@/components/admin/QuestionForm";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { adminStats, courses, users } from "@/lib/mockData";

export default function AdminPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700">Admin Panel</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Manage courses, questions, users, and learning analytics.</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Basic admin dashboard for mock data now, ready for authenticated admin-only Supabase operations later.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <AdminStats />
      </div>

      <div className="mt-8 grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <Users className="h-5 w-5 text-blue-600" aria-hidden="true" />
              View users
            </div>
            <div className="mt-4 grid gap-3">
              {users.map((user) => (
                <div key={user.id} className="flex items-center justify-between gap-3 rounded-xl border bg-slate-50 p-3">
                  <div>
                    <p className="font-semibold">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                  <Badge variant="outline">{user.role}</Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <ChartNoAxesCombined className="h-5 w-5 text-teal-600" aria-hidden="true" />
              Test analytics
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-xs text-muted-foreground">Average score</p>
                <p className="mt-1 text-2xl font-bold">{adminStats.averageScore}%</p>
              </div>
              <div className="rounded-xl bg-emerald-50 p-4">
                <p className="text-xs text-muted-foreground">Active courses</p>
                <p className="mt-1 text-2xl font-bold">{courses.length}</p>
              </div>
              <div className="rounded-xl bg-amber-50 p-4">
                <p className="text-xs text-muted-foreground">Revenue</p>
                <p className="mt-1 text-sm font-semibold">{adminStats.revenuePlaceholder}</p>
              </div>
            </div>
            <div className="mt-5 rounded-xl border bg-slate-50 p-4">
              <div className="flex items-center gap-2 font-semibold">
                <Bot className="h-5 w-5 text-blue-600" aria-hidden="true" />
                AI tutor usage mock data
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {adminStats.aiTutorMessages.toLocaleString()} tutor messages, with peak usage after school hours and before GED/SAT mock deadlines.
              </p>
            </div>
            <div className="mt-5 rounded-xl border bg-slate-50 p-4">
              <div className="flex items-center gap-2 font-semibold">
                <Activity className="h-5 w-5 text-red-500" aria-hidden="true" />
                Content QA queue
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                7 questions flagged for review, mostly SAT Math answer-choice validation and IELTS Not Given explanations.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-8 xl:grid-cols-[0.95fr_1.05fr]">
        <CourseManager />
        <QuestionForm />
      </div>
    </div>
  );
}
