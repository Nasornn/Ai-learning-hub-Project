import { CalendarCheck, Flag, ListChecks } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import type { StudyPlan } from "@/lib/types";

export function WeeklyPlan({ plan }: { plan: StudyPlan }) {
  return (
    <section className="grid gap-5">
      <Card className="shadow-soft">
        <CardContent className="p-6">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <Badge variant="secondary">{plan.targetExam}</Badge>
              <h2 className="mt-3 text-3xl font-bold tracking-tight">{plan.title}</h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Current score {plan.currentScore} to target {plan.targetScore} by {plan.examDate}
              </p>
            </div>
            <div className="rounded-xl bg-blue-50 p-4">
              <p className="text-xs font-semibold uppercase text-blue-700">Readiness prediction</p>
              <p className="mt-1 text-2xl font-bold text-blue-950">{plan.readinessPrediction}</p>
            </div>
          </div>
          <div className="mt-5 grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl border bg-white p-4">
              <p className="text-sm text-muted-foreground">Study days</p>
              <p className="mt-1 text-xl font-bold">{plan.studyDaysPerWeek} days/week</p>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <p className="text-sm text-muted-foreground">Time per day</p>
              <p className="mt-1 text-xl font-bold">{plan.timePerDayMinutes} min</p>
            </div>
            <div className="rounded-xl border bg-white p-4">
              <p className="text-sm text-muted-foreground">Language</p>
              <p className="mt-1 text-xl font-bold">{plan.preferredLanguage}</p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-4">
        {plan.weeklySchedule.map((week) => (
          <Card key={week.week}>
            <CardContent className="grid gap-5 p-5 lg:grid-cols-[220px_1fr_260px]">
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold text-blue-700">
                  <CalendarCheck className="h-4 w-4" aria-hidden="true" />
                  Week {week.week}
                </div>
                <h3 className="mt-2 text-lg font-semibold">{week.focus}</h3>
              </div>
              <div>
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <ListChecks className="h-4 w-4 text-teal-600" aria-hidden="true" />
                  Daily tasks and review days
                </div>
                <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                  {week.tasks.map((task) => (
                    <li key={task}>{task}</li>
                  ))}
                  <li>Friday review day: retry mistakes and update weak-topic log</li>
                </ul>
              </div>
              <div className="rounded-xl bg-slate-50 p-4">
                <div className="flex items-center gap-2 text-sm font-semibold">
                  <Flag className="h-4 w-4 text-amber-600" aria-hidden="true" />
                  Milestone
                </div>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{week.milestone}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
