"use client";

import { useState } from "react";

import { StudyPlanForm } from "@/components/study-plan/StudyPlanForm";
import { WeeklyPlan } from "@/components/study-plan/WeeklyPlan";
import { Badge } from "@/components/ui/badge";
import { studyPlans } from "@/lib/mockData";
import type { StudyPlan } from "@/lib/types";

export default function StudyPlanPage() {
  const [plan, setPlan] = useState<StudyPlan>(studyPlans[0]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="max-w-3xl">
        <Badge variant="secondary" className="bg-blue-50 text-blue-700">AI Study Plan</Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Generate a study plan from your exam date and weak subjects.</h1>
        <p className="mt-3 text-muted-foreground thai-copy">
          Create weekly schedules, daily tasks, review days, weak-topic drills, milestones, practice tests, and readiness prediction with mock AI logic.
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[390px_1fr]">
        <StudyPlanForm onGenerate={setPlan} />
        <WeeklyPlan plan={plan} />
      </div>
    </div>
  );
}
