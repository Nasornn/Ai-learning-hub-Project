import Link from "next/link";
import { ArrowRight, Clock, Layers3, ListChecks } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import type { Course } from "@/lib/types";

export function CourseCard({ course }: { course: Course }) {
  return (
    <Card className="flex h-full flex-col transition hover:-translate-y-1 hover:shadow-soft">
      <CardHeader>
        <div className="flex flex-wrap gap-2">
          <Badge variant="secondary">{course.examType}</Badge>
          <Badge variant={course.level === "Exam Mode" ? "warning" : "outline"}>{course.level}</Badge>
          <Badge variant="success">{course.language}</Badge>
        </div>
        <CardTitle className="mt-3 leading-6">{course.title}</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-1 flex-col">
        <p className="text-sm leading-6 text-muted-foreground">{course.description}</p>
        <div className="mt-5 grid gap-3 text-sm">
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Layers3 className="h-4 w-4" aria-hidden="true" />
              Lessons
            </span>
            <span className="font-semibold">{course.lessons}</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-muted-foreground">
              <ListChecks className="h-4 w-4" aria-hidden="true" />
              Practice
            </span>
            <span className="font-semibold">{course.practiceQuestions} questions</span>
          </div>
          <div className="flex items-center justify-between gap-3">
            <span className="flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden="true" />
              Study time
            </span>
            <span className="font-semibold">{course.estimatedStudyTime}</span>
          </div>
        </div>
        <div className="mt-5">
          <div className="mb-2 flex items-center justify-between text-sm">
            <span className="text-muted-foreground">Progress</span>
            <span className="font-semibold">{course.progress}%</span>
          </div>
          <Progress value={course.progress} />
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full" variant={course.progress ? "default" : "outline"}>
          <Link href={`/courses/${course.id}`}>
            {course.progress ? "Continue" : "Start"}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}
