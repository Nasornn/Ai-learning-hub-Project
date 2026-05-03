import Link from "next/link";
import { Bot, CalendarDays, ClipboardCheck, Flame, Target } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const tasks = [
  "Retry GED Science table-analysis mistakes",
  "Finish SAT quadratic vertex-form drill",
  "Write one IELTS Task 2 thesis paragraph",
  "Review M.5 trigonometry signs in Thai"
];

const weakTopics = ["Experimental design", "Quadratic functions", "IELTS True / False / Not Given", "Trig quadrant signs"];

export function RecentActivity() {
  return (
    <div className="grid gap-5 lg:grid-cols-3">
      <Card className="lg:col-span-2">
        <CardContent className="p-5">
          <div className="flex items-center justify-between gap-3">
            <div>
              <h2 className="font-semibold">Continue learning</h2>
              <p className="text-sm text-muted-foreground">Upcoming study tasks based on weak-topic analysis</p>
            </div>
            <CalendarDays className="h-5 w-5 text-blue-600" aria-hidden="true" />
          </div>
          <div className="mt-4 grid gap-3">
            {tasks.map((task, index) => (
              <div key={task} className="flex items-center justify-between gap-3 rounded-xl border bg-slate-50 p-4">
                <div className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white font-semibold text-blue-700">
                    {index + 1}
                  </span>
                  <span className="text-sm font-medium">{task}</span>
                </div>
                <Button size="sm" variant={index === 0 ? "default" : "outline"}>
                  Start
                </Button>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <div className="grid gap-5">
        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <Target className="h-5 w-5 text-amber-600" aria-hidden="true" />
              Weak topics
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {weakTopics.map((topic) => (
                <Badge key={topic} variant="warning">{topic}</Badge>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <Bot className="h-5 w-5 text-blue-600" aria-hidden="true" />
              AI tutor history
            </div>
            <p className="mt-3 text-sm leading-6 text-muted-foreground">
              Last asked: “Why is my GED Science answer wrong if the graph seems to support it?”
            </p>
            <Button asChild className="mt-4 w-full" variant="outline">
              <Link href="/tutor">Continue chat</Link>
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <Flame className="h-5 w-5 text-red-500" aria-hidden="true" />
              Exam countdown
            </div>
            <p className="mt-3 text-3xl font-bold">70 days</p>
            <p className="text-sm text-muted-foreground">GED target date: July 12, 2026</p>
          </CardContent>
        </Card>

        <Card>
          <CardContent className="p-5">
            <div className="flex items-center gap-2 font-semibold">
              <ClipboardCheck className="h-5 w-5 text-emerald-600" aria-hidden="true" />
              Recent test result
            </div>
            <p className="mt-3 text-sm text-muted-foreground">GED Science Evidence Mini Test</p>
            <p className="mt-1 text-2xl font-bold">75%</p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
