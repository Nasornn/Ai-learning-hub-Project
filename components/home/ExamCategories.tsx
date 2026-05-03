import { BookOpen, Calculator, GraduationCap, Languages, PenTool, Target } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";

const categories = [
  { label: "GED", icon: GraduationCap, detail: "Math, RLA, Science, Social Studies" },
  { label: "SAT", icon: Target, detail: "Math and Reading & Writing" },
  { label: "IELTS", icon: PenTool, detail: "Listening, Reading, Writing, Speaking" },
  { label: "Thai Math M.4", icon: Calculator, detail: "Sets, logic, functions, algebra" },
  { label: "Thai Math M.5", icon: Calculator, detail: "Logs, trig, sequences, probability" },
  { label: "Thai Math M.6", icon: Calculator, detail: "Calculus, vectors, matrices, conics" },
  { label: "English Grammar", icon: Languages, detail: "School, IELTS, SAT foundations" },
  { label: "University Prep", icon: BookOpen, detail: "International pathway planning" }
];

export function ExamCategories() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-700">Exam categories</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">One platform for the exams Thai students actually take.</h2>
        </div>
        <p className="max-w-2xl text-sm leading-6 text-muted-foreground">
          Courses, practice tests, and AI explanations are organized by exam, subject, level, language, and study duration.
        </p>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Card key={category.label} className="transition hover:-translate-y-1 hover:shadow-soft">
              <CardContent className="p-5">
                <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                <h3 className="mt-4 font-semibold">{category.label}</h3>
                <p className="mt-2 text-sm leading-6 text-muted-foreground">{category.detail}</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
