import { Bot, CheckCircle2, Clock, Repeat2, XCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { isAnswerCorrect } from "@/lib/scoring";
import type { Question, StudentAnswer } from "@/lib/types";

function displayAnswer(answer: string | string[] | undefined) {
  if (!answer) return "No answer";
  return Array.isArray(answer) ? answer.join(", ") : answer;
}

export function QuestionReview({
  questions,
  answers
}: {
  questions: Question[];
  answers: StudentAnswer[];
}) {
  const answerMap = new Map(answers.map((answer) => [answer.questionId, answer]));

  return (
    <div className="grid gap-5">
      {questions.map((question, index) => {
        const studentAnswer = answerMap.get(question.id);
        const correct = isAnswerCorrect(question, studentAnswer?.answer);

        return (
          <Card key={question.id}>
            <CardContent className="p-5">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant={correct ? "success" : "warning"}>
                    {correct ? "Correct" : "Review needed"}
                  </Badge>
                  <Badge variant="outline">Question {index + 1}</Badge>
                  <Badge variant="secondary">{question.difficulty}</Badge>
                  <Badge variant="outline">{question.skillTested}</Badge>
                </div>
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Clock className="h-4 w-4" aria-hidden="true" />
                  {studentAnswer?.timeSpentSeconds ?? 90}s
                </div>
              </div>

              <h3 className="mt-5 text-lg font-semibold leading-7">{question.questionText}</h3>
              {question.passage ? (
                <p className="mt-3 rounded-xl bg-slate-50 p-4 text-sm leading-7 text-muted-foreground thai-copy">
                  {question.passage}
                </p>
              ) : null}

              <div className="mt-5 grid gap-3 md:grid-cols-2">
                <div className="rounded-xl border bg-slate-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold">
                    {correct ? <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" /> : <XCircle className="h-4 w-4 text-red-600" aria-hidden="true" />}
                    Student answer
                  </div>
                  <p className="mt-2 text-sm">{displayAnswer(studentAnswer?.answer)}</p>
                </div>
                <div className="rounded-xl border bg-emerald-50 p-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-emerald-800">
                    <CheckCircle2 className="h-4 w-4" aria-hidden="true" />
                    Correct answer
                  </div>
                  <p className="mt-2 text-sm">{displayAnswer(question.correctAnswer)}</p>
                </div>
              </div>

              <div className="mt-5 grid gap-4 rounded-xl border bg-blue-50 p-4">
                <div>
                  <p className="text-sm font-semibold text-blue-800">Explanation in English</p>
                  <p className="mt-2 text-sm leading-6">{question.explanationEnglish}</p>
                </div>
                <div>
                  <p className="text-sm font-semibold text-blue-800">Explanation in Thai</p>
                  <p className="mt-2 text-sm leading-6 thai-copy">{question.explanationThai}</p>
                </div>
                {question.wrongChoiceExplanations ? (
                  <div className="rounded-lg bg-white p-3">
                    <p className="text-sm font-semibold">Why wrong choices are wrong</p>
                    <ul className="mt-2 grid gap-2 text-sm text-muted-foreground">
                      {Object.entries(question.wrongChoiceExplanations).map(([choice, explanation]) => (
                        <li key={choice}>
                          <span className="font-medium text-slate-800">{choice}</span>: {explanation}
                        </li>
                      ))}
                    </ul>
                  </div>
                ) : null}
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <Button variant="outline" size="sm">
                  <Repeat2 className="h-4 w-4" aria-hidden="true" />
                  Similar question
                </Button>
                <Button variant="outline" size="sm">
                  <Bot className="h-4 w-4" aria-hidden="true" />
                  Ask AI tutor
                </Button>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
