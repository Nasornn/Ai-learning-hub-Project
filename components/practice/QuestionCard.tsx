"use client";

import { Bot, Flag, Lightbulb, Send } from "lucide-react";

import { AnswerChoice } from "@/components/practice/AnswerChoice";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import type { Question } from "@/lib/types";
import { cn } from "@/lib/utils";

export function QuestionCard({
  question,
  index,
  total,
  answer,
  onAnswer,
  flagged,
  onFlag,
  showExplanation
}: {
  question: Question;
  index: number;
  total: number;
  answer?: string | string[];
  onAnswer: (answer: string | string[]) => void;
  flagged: boolean;
  onFlag: () => void;
  showExplanation: boolean;
}) {
  const multiple = question.type === "multi_select";
  const selectedArray = Array.isArray(answer) ? answer : answer ? [answer] : [];

  function toggleChoice(choice: string) {
    if (multiple) {
      onAnswer(selectedArray.includes(choice) ? selectedArray.filter((item) => item !== choice) : [...selectedArray, choice]);
      return;
    }

    onAnswer(choice);
  }

  return (
    <section className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex flex-wrap items-center justify-between gap-3 border-b pb-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="secondary">Question {index + 1}/{total}</Badge>
          <Badge variant="outline">{question.type.replaceAll("_", " ")}</Badge>
          <Badge variant={question.difficulty === "Final Boss" ? "warning" : "success"}>{question.difficulty}</Badge>
        </div>
        <Button type="button" variant={flagged ? "secondary" : "outline"} size="sm" onClick={onFlag}>
          <Flag className={cn("h-4 w-4", flagged && "text-amber-600")} aria-hidden="true" />
          Flag
        </Button>
      </div>

      <div className="mt-5">
        <p className="text-sm font-semibold text-blue-700">{question.subject} / {question.topic}</p>
        <h2 className="mt-3 text-xl font-semibold leading-8">{question.questionText}</h2>
      </div>

      <div className="mt-6 grid gap-3">
        {question.choices?.map((choice) => (
          <AnswerChoice
            key={choice}
            choice={choice}
            multiple={multiple}
            selected={selectedArray.includes(choice)}
            onToggle={() => toggleChoice(choice)}
          />
        ))}

        {!question.choices && (question.type === "numeric_input" || question.type === "short_answer") ? (
          question.type === "numeric_input" ? (
            <Input
              aria-label="Numeric answer"
              inputMode="decimal"
              placeholder="Enter your answer"
              value={typeof answer === "string" ? answer : ""}
              onChange={(event) => onAnswer(event.target.value)}
            />
          ) : (
            <Textarea
              aria-label="Short answer"
              placeholder="Type your response"
              value={typeof answer === "string" ? answer : ""}
              onChange={(event) => onAnswer(event.target.value)}
            />
          )
        ) : null}
      </div>

      {showExplanation ? (
        <div className="mt-6 rounded-xl border bg-blue-50 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
            <Lightbulb className="h-4 w-4" aria-hidden="true" />
            Explanation
          </div>
          <div className="mt-3 grid gap-4 text-sm leading-6 text-slate-800">
            <p>{question.explanationEnglish}</p>
            <p className="thai-copy">{question.explanationThai}</p>
          </div>
          {question.wrongChoiceExplanations ? (
            <div className="mt-4 rounded-lg bg-white p-3">
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
          <div className="mt-4 flex flex-wrap gap-2">
            {["Explain in Thai", "Exam strategy", "Why wrong?", "Similar question", "Make harder"].map((action) => (
              <Button key={action} type="button" variant="outline" size="sm">
                {action === "Similar question" ? <Send className="h-3.5 w-3.5" aria-hidden="true" /> : <Bot className="h-3.5 w-3.5" aria-hidden="true" />}
                {action}
              </Button>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
