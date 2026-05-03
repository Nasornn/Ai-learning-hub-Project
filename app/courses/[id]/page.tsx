import Link from "next/link";
import { ArrowRight, Bot, Clock, Dumbbell, Gauge, GraduationCap, ListChecks, Target } from "lucide-react";

import { LessonList } from "@/components/courses/LessonList";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { getCourseById, getLessonsByCourseId, practiceTests } from "@/lib/mockData";

export default async function CourseDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const course = getCourseById(id);
  const courseLessons = getLessonsByCourseId(course.id);
  const suggestedTest = practiceTests.find((test) => test.exam === course.examType || test.subject === course.subject) ?? practiceTests[0];

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
        <div>
          <div className="flex flex-wrap gap-2">
            <Badge variant="secondary">{course.examType}</Badge>
            <Badge variant="outline">{course.subject}</Badge>
            <Badge variant="success">{course.language}</Badge>
          </div>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">{course.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-8 text-muted-foreground">{course.description}</p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button size="lg">
              {course.progress ? "Continue course" : "Start course"}
              <ArrowRight className="h-5 w-5" aria-hidden="true" />
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/tutor">
                <Bot className="h-5 w-5" aria-hidden="true" />
                Ask AI tutor
              </Link>
            </Button>
          </div>
        </div>

        <Card className="h-fit shadow-soft">
          <CardContent className="p-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground">Course progress</p>
                <p className="mt-1 text-3xl font-bold">{course.progress}%</p>
              </div>
              <Gauge className="h-8 w-8 text-blue-600" aria-hidden="true" />
            </div>
            <Progress value={course.progress} className="mt-4" />
            <div className="mt-5 grid gap-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <GraduationCap className="h-4 w-4" aria-hidden="true" />
                  Level
                </span>
                <span className="font-semibold">{course.level}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  Duration
                </span>
                <span className="font-semibold">{course.estimatedStudyTime}</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-2 text-muted-foreground">
                  <ListChecks className="h-4 w-4" aria-hidden="true" />
                  Questions
                </span>
                <span className="font-semibold">{course.practiceQuestions}</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <section className="mt-10 grid gap-5 md:grid-cols-3">
        {[
          { title: "Practice sets", value: `${Math.ceil(course.practiceQuestions / 40)} sets`, icon: Dumbbell },
          { title: "Mock tests", value: suggestedTest.title, icon: Target },
          { title: "Weak-topic review", value: course.topics.slice(0, 3).join(", "), icon: Gauge }
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.title}>
              <CardContent className="p-5">
                <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                <h2 className="mt-4 font-semibold">{item.title}</h2>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.value}</p>
              </CardContent>
            </Card>
          );
        })}
      </section>

      <section className="mt-10">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700">Lesson structure</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Every lesson includes notes, examples, mini quiz, and AI help.</h2>
          </div>
          <Button asChild variant="outline">
            <Link href={`/practice/${suggestedTest.id}`}>
              Open related test
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-6">
          <LessonList lessons={courseLessons} />
        </div>
      </section>
    </div>
  );
}
