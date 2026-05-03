import { Award, Clock, Target, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { ReadinessLevel } from "@/lib/types";
import { getReadinessDescription } from "@/lib/readiness";

export function ScoreSummary({
  percentage,
  correctCount,
  incorrectCount,
  timeUsedMinutes,
  readinessLevel
}: {
  percentage: number;
  correctCount: number;
  incorrectCount: number;
  timeUsedMinutes: number;
  readinessLevel: ReadinessLevel;
}) {
  return (
    <Card className="shadow-soft">
      <CardContent className="p-6">
        <div className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
          <div>
            <Badge variant={percentage >= 75 ? "success" : percentage >= 65 ? "warning" : "outline"}>
              {readinessLevel}
            </Badge>
            <h1 className="mt-4 text-5xl font-bold tracking-tight">{percentage}%</h1>
            <p className="mt-2 max-w-2xl text-sm leading-6 text-muted-foreground">
              {getReadinessDescription(readinessLevel)}
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            <div className="rounded-xl bg-emerald-50 p-4">
              <Award className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              <p className="mt-3 text-2xl font-bold">{correctCount}</p>
              <p className="text-xs text-muted-foreground">Correct</p>
            </div>
            <div className="rounded-xl bg-red-50 p-4">
              <XCircle className="h-5 w-5 text-red-600" aria-hidden="true" />
              <p className="mt-3 text-2xl font-bold">{incorrectCount}</p>
              <p className="text-xs text-muted-foreground">Incorrect</p>
            </div>
            <div className="rounded-xl bg-blue-50 p-4">
              <Clock className="h-5 w-5 text-blue-600" aria-hidden="true" />
              <p className="mt-3 text-2xl font-bold">{timeUsedMinutes}m</p>
              <p className="text-xs text-muted-foreground">Time used</p>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 font-semibold">
              <Target className="h-4 w-4 text-blue-600" aria-hidden="true" />
              Estimated exam readiness
            </span>
            <span>{percentage}%</span>
          </div>
          <Progress value={percentage} />
        </div>
      </CardContent>
    </Card>
  );
}
