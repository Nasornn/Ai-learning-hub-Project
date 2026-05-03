"use client";

import { PlusCircle } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const questionTypes = [
  "single_choice",
  "multi_select",
  "numeric_input",
  "short_answer",
  "table_analysis",
  "passage_reasoning",
  "graph_reasoning",
  "formula_application"
];

export function QuestionForm() {
  return (
    <form className="grid gap-4 rounded-xl border bg-white p-5 shadow-sm">
      <div>
        <h2 className="text-xl font-semibold">Add question</h2>
        <p className="mt-1 text-sm text-muted-foreground">Mock form with the full question schema for future CMS storage.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">
          Question type
          <select className="h-10 rounded-lg border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            {questionTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Difficulty
          <select className="h-10 rounded-lg border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            {["Easy", "Medium", "Hard", "Final Boss"].map((difficulty) => (
              <option key={difficulty}>{difficulty}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Subject
          <Input placeholder="Science, SAT Math, IELTS Reading..." />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Exam
          <select className="h-10 rounded-lg border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring">
            {["GED", "SAT", "IELTS", "Thai Math"].map((exam) => (
              <option key={exam}>{exam}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium md:col-span-2">
          Passage
          <Textarea placeholder="Optional passage or stimulus" />
        </label>
        <label className="grid gap-1 text-sm font-medium md:col-span-2">
          Question text
          <Textarea placeholder="Write the question stem" />
        </label>
        <label className="grid gap-1 text-sm font-medium md:col-span-2">
          Answer choices
          <Textarea placeholder="One answer choice per line" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Correct answer
          <Input placeholder="Correct answer or comma-separated answers" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Skill tested
          <Input placeholder="Evidence-based reasoning" />
        </label>
        <label className="grid gap-1 text-sm font-medium md:col-span-2">
          Explanation English
          <Textarea placeholder="Detailed English explanation" />
        </label>
        <label className="grid gap-1 text-sm font-medium md:col-span-2">
          Explanation Thai
          <Textarea placeholder="คำอธิบายภาษาไทย" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Formula provided
          <Input placeholder="density = mass / volume" />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Tags
          <Input placeholder="GED, science, data table" />
        </label>
      </div>
      <Button type="button" className="w-full sm:w-auto">
        <PlusCircle className="h-4 w-4" aria-hidden="true" />
        Add mock question
      </Button>
    </form>
  );
}
