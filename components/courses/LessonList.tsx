import { Bot, CheckCircle2, Lock, PlayCircle, StickyNote } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import type { Lesson } from "@/lib/types";

export function LessonList({ lessons }: { lessons: Lesson[] }) {
  if (!lessons.length) {
    return (
      <Card>
        <CardContent className="p-6 text-sm text-muted-foreground">
          Lessons are being prepared for this course. The mock CMS structure is ready for Supabase content.
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="grid gap-4">
      {lessons.map((lesson) => (
        <Card key={lesson.id} className="overflow-hidden">
          <CardContent className="grid gap-5 p-5 lg:grid-cols-[1fr_220px]">
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant={lesson.status === "Completed" ? "success" : lesson.status === "Locked" ? "outline" : "secondary"}>
                  {lesson.status}
                </Badge>
                <span className="text-sm text-muted-foreground">{lesson.durationMinutes} min</span>
              </div>
              <h3 className="mt-3 text-lg font-semibold">{lesson.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">{lesson.explanation}</p>
              <p className="mt-2 text-sm leading-6 text-muted-foreground thai-copy">{lesson.explanationThai}</p>
              <div className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <PlayCircle className="h-4 w-4 text-blue-600" aria-hidden="true" />
                  {lesson.videoPlaceholder}
                </span>
                <span className="flex items-center gap-2 text-muted-foreground">
                  <StickyNote className="h-4 w-4 text-teal-600" aria-hidden="true" />
                  Reading notes + example questions
                </span>
              </div>
            </div>
            <div className="rounded-xl bg-slate-50 p-4">
              <p className="text-sm font-semibold">Lesson includes</p>
              <ul className="mt-3 grid gap-2 text-sm text-muted-foreground">
                {["Reading notes", "Example questions", "Mini quiz", "AI help button"].map((item) => (
                  <li key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>
              <Button className="mt-4 w-full" disabled={lesson.status === "Locked"}>
                {lesson.status === "Locked" ? (
                  <>
                    <Lock className="h-4 w-4" aria-hidden="true" />
                    Locked
                  </>
                ) : (
                  <>
                    <Bot className="h-4 w-4" aria-hidden="true" />
                    AI Help
                  </>
                )}
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
