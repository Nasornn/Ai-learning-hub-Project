import { AlertTriangle, CheckCircle2, ListChecks } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

export function WeakTopicAnalysis({
  weakSubjects,
  strongSubjects,
  nextSteps
}: {
  weakSubjects: string[];
  strongSubjects: string[];
  nextSteps: string[];
}) {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-semibold">
            <AlertTriangle className="h-5 w-5 text-amber-600" aria-hidden="true" />
            Weak subjects
          </div>
          <div className="mt-4 grid gap-2">
            {(weakSubjects.length ? weakSubjects : ["No major weak topic in this mock result"]).map((subject) => (
              <span key={subject} className="rounded-lg bg-amber-50 px-3 py-2 text-sm text-amber-900">
                {subject}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-semibold">
            <CheckCircle2 className="h-5 w-5 text-emerald-600" aria-hidden="true" />
            Strong subjects
          </div>
          <div className="mt-4 grid gap-2">
            {(strongSubjects.length ? strongSubjects : ["Keep building consistent accuracy"]).map((subject) => (
              <span key={subject} className="rounded-lg bg-emerald-50 px-3 py-2 text-sm text-emerald-900">
                {subject}
              </span>
            ))}
          </div>
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-5">
          <div className="flex items-center gap-2 font-semibold">
            <ListChecks className="h-5 w-5 text-blue-600" aria-hidden="true" />
            Recommended next steps
          </div>
          <ul className="mt-4 grid gap-2 text-sm leading-6 text-muted-foreground">
            {nextSteps.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
