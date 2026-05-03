"use client";

import { useMemo, useState } from "react";
import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import type { StudyPlan } from "@/lib/types";
import { getReadinessLevel } from "@/lib/readiness";

const examOptions = ["GED", "SAT", "IELTS", "Thai School", "English"];

export function StudyPlanForm({
  onGenerate
}: {
  onGenerate: (plan: StudyPlan) => void;
}) {
  const [targetExam, setTargetExam] = useState("GED");
  const [currentScore, setCurrentScore] = useState("58");
  const [targetScore, setTargetScore] = useState("78");
  const [examDate, setExamDate] = useState("2026-07-12");
  const [studyDays, setStudyDays] = useState("5");
  const [timePerDay, setTimePerDay] = useState("75");
  const [weakSubjects, setWeakSubjects] = useState("Algebra, Experimental design, Graphs");
  const [preferredLanguage, setPreferredLanguage] = useState("Bilingual");

  const title = useMemo(() => {
    if (targetExam === "IELTS") return "12-week IELTS Band 7.5 plan";
    if (targetExam === "SAT") return "10-week SAT Math 700+ plan";
    if (targetExam === "Thai School") return "M.4-M.6 Math foundation recovery plan";
    return "8-week GED Science + Math plan";
  }, [targetExam]);

  function generatePlan() {
    const weak = weakSubjects
      .split(",")
      .map((item) => item.trim())
      .filter(Boolean);
    const current = Number(currentScore);
    const target = Number(targetScore);

    onGenerate({
      id: `generated-${Date.now()}`,
      title,
      targetExam: targetExam as StudyPlan["targetExam"],
      currentScore: current,
      targetScore: target,
      examDate,
      studyDaysPerWeek: Number(studyDays),
      timePerDayMinutes: Number(timePerDay),
      weakSubjects: weak,
      preferredLanguage: preferredLanguage as StudyPlan["preferredLanguage"],
      readinessPrediction: getReadinessLevel(Math.min(92, Math.round((current + target) / 2))),
      weeklySchedule: [
        {
          week: 1,
          focus: "Diagnostic and foundation repair",
          tasks: [
            `Review ${weak[0] ?? "core concepts"}`,
            "Complete one untimed concept set",
            "Ask AI tutor to explain mistakes in preferred language"
          ],
          milestone: "Create an error log with at least 10 reviewed mistakes"
        },
        {
          week: 2,
          focus: "Weak-topic drills",
          tasks: [
            `Drill ${weak[1] ?? "second weak topic"}`,
            "Complete a timed 20-question set",
            "Generate similar questions for missed skills"
          ],
          milestone: "Reach 65% or higher on weak-topic practice"
        },
        {
          week: 3,
          focus: "Mixed practice and strategy",
          tasks: [
            "Alternate easy, medium, hard, and final-boss questions",
            "Practice elimination strategy",
            "Review Thai-English explanation differences"
          ],
          milestone: "Finish one mock module under timing"
        },
        {
          week: 4,
          focus: "Readiness checkpoint",
          tasks: [
            "Take one full mini mock",
            "Retry every incorrect question",
            "Update next-month plan based on weak subjects"
          ],
          milestone: "Confirm readiness level and exam-date risk"
        }
      ]
    });
  }

  return (
    <div className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-1 text-sm font-medium">
          Target exam
          <select
            className="h-10 rounded-lg border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            value={targetExam}
            onChange={(event) => setTargetExam(event.target.value)}
          >
            {examOptions.map((exam) => (
              <option key={exam}>{exam}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Preferred language
          <select
            className="h-10 rounded-lg border bg-white px-3 text-sm focus:outline-none focus:ring-2 focus:ring-ring"
            value={preferredLanguage}
            onChange={(event) => setPreferredLanguage(event.target.value)}
          >
            {["Thai", "English", "Bilingual"].map((language) => (
              <option key={language}>{language}</option>
            ))}
          </select>
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Current score
          <Input type="number" value={currentScore} onChange={(event) => setCurrentScore(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Target score
          <Input type="number" value={targetScore} onChange={(event) => setTargetScore(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Exam date
          <Input type="date" value={examDate} onChange={(event) => setExamDate(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Study days per week
          <Input type="number" value={studyDays} onChange={(event) => setStudyDays(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Time per day
          <Input type="number" value={timePerDay} onChange={(event) => setTimePerDay(event.target.value)} />
        </label>
        <label className="grid gap-1 text-sm font-medium">
          Weak subjects
          <Input value={weakSubjects} onChange={(event) => setWeakSubjects(event.target.value)} />
        </label>
      </div>
      <Button className="mt-5 w-full sm:w-auto" onClick={generatePlan}>
        <Sparkles className="h-4 w-4" aria-hidden="true" />
        Generate AI study plan
      </Button>
    </div>
  );
}
