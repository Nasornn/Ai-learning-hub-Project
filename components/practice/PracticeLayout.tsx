"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangle, ArrowLeft, ArrowRight, Calculator, Pause, Send } from "lucide-react";

import { PassagePanel } from "@/components/practice/PassagePanel";
import { QuestionCard } from "@/components/practice/QuestionCard";
import { QuestionNavigator } from "@/components/practice/QuestionNavigator";
import { Timer } from "@/components/practice/Timer";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import type { PracticeTest, Question } from "@/lib/types";
import { Progress } from "@/components/ui/progress";

export function PracticeLayout({ test, questions }: { test: PracticeTest; questions: Question[] }) {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [flagged, setFlagged] = useState<Record<string, boolean>>({});
  const [paused, setPaused] = useState(false);

  const currentQuestion = questions[currentIndex];
  const progress = questions.length ? ((currentIndex + 1) / questions.length) * 100 : 0;
  const answeredIndexes = useMemo(
    () =>
      questions
        .map((question, index) => ({ question, index }))
        .filter(({ question }) => {
          const answer = answers[question.id];
          return Array.isArray(answer) ? answer.length > 0 : Boolean(answer);
        })
        .map(({ index }) => index),
    [answers, questions]
  );
  const flaggedIndexes = questions
    .map((question, index) => ({ question, index }))
    .filter(({ question }) => flagged[question.id])
    .map(({ index }) => index);

  function submitTest() {
    router.push(`/results/${test.id}`);
  }

  if (!currentQuestion) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-xl border bg-white p-8 text-center shadow-sm">
          <h1 className="text-2xl font-bold">This practice test has no questions yet.</h1>
          <p className="mt-2 text-sm text-muted-foreground">The mock test shell is ready for imported content.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="border-b bg-white">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-center">
            <div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{test.exam}</Badge>
                <Badge variant={test.mode === "Exam" ? "warning" : "success"}>{test.mode} mode</Badge>
                {test.module ? <Badge variant="outline">{test.module}</Badge> : null}
                {test.adaptivePlaceholder ? <Badge variant="outline">Adaptive placeholder</Badge> : null}
                {test.calculatorAllowed ? (
                  <Badge variant="secondary" className="gap-1">
                    <Calculator className="h-3.5 w-3.5" aria-hidden="true" />
                    Calculator allowed
                  </Badge>
                ) : null}
              </div>
              <h1 className="mt-2 text-2xl font-bold tracking-tight">{test.title}</h1>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Timer minutes={test.durationMinutes} paused={paused} />
              <Button variant="outline" onClick={() => setPaused((value) => !value)}>
                <Pause className="h-4 w-4" aria-hidden="true" />
                {paused ? "Resume" : "Pause"}
              </Button>
              <Button onClick={submitTest}>
                <Send className="h-4 w-4" aria-hidden="true" />
                Submit test
              </Button>
            </div>
          </div>
          <Progress value={progress} />
        </div>
      </div>

      {paused ? (
        <div className="border-b bg-amber-50">
          <div className="mx-auto flex max-w-7xl items-center gap-3 px-4 py-3 text-sm text-amber-900 sm:px-6 lg:px-8">
            <AlertTriangle className="h-4 w-4" aria-hidden="true" />
            Pause warning: real exam mode would lock navigation or record pause events. This mock keeps answers safe.
          </div>
        </div>
      ) : null}

      <div className="mx-auto grid max-w-7xl gap-5 px-4 py-6 sm:px-6 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)_260px] lg:px-8">
        <PassagePanel question={currentQuestion} />

        <div className="grid gap-5">
          <QuestionCard
            question={currentQuestion}
            index={currentIndex}
            total={questions.length}
            answer={answers[currentQuestion.id]}
            onAnswer={(answer) => setAnswers((value) => ({ ...value, [currentQuestion.id]: answer }))}
            flagged={Boolean(flagged[currentQuestion.id])}
            onFlag={() => setFlagged((value) => ({ ...value, [currentQuestion.id]: !value[currentQuestion.id] }))}
            showExplanation={test.mode === "Practice"}
          />
          <div className="flex items-center justify-between gap-3 rounded-xl border bg-white p-4 shadow-sm">
            <Button
              variant="outline"
              onClick={() => setCurrentIndex((value) => Math.max(0, value - 1))}
              disabled={currentIndex === 0}
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              Previous
            </Button>
            <Button
              onClick={() => setCurrentIndex((value) => Math.min(questions.length - 1, value + 1))}
              disabled={currentIndex === questions.length - 1}
            >
              Next
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </div>

        <QuestionNavigator
          total={questions.length}
          currentIndex={currentIndex}
          answeredIndexes={answeredIndexes}
          flaggedIndexes={flaggedIndexes}
          onSelect={setCurrentIndex}
        />
      </div>
    </div>
  );
}
