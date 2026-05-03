import Link from "next/link";
import { Bot, RefreshCw, RotateCcw, Sparkles } from "lucide-react";

import { QuestionReview } from "@/components/results/QuestionReview";
import { ScoreSummary } from "@/components/results/ScoreSummary";
import { WeakTopicAnalysis } from "@/components/results/WeakTopicAnalysis";
import { Button } from "@/components/ui/button";
import {
  getPracticeTestById,
  getQuestionsForTest,
  testResults
} from "@/lib/mockData";
import { buildResultSummary } from "@/lib/scoring";
import type { StudentAnswer } from "@/lib/types";

function buildMockAnswers(testId: string): StudentAnswer[] {
  const questions = getQuestionsForTest(testId);
  return questions.map((question, index) => ({
    questionId: question.id,
    answer:
      index % 4 === 0 && question.choices?.[0]
        ? question.choices[0]
        : question.correctAnswer,
    timeSpentSeconds: 82 + index * 17,
    flagged: index === 1
  }));
}

export default async function ResultPage({ params }: { params: Promise<{ resultId: string }> }) {
  const { resultId } = await params;
  const storedResult = testResults.find((result) => result.id === resultId);
  const testId = storedResult?.testId ?? resultId;
  const test = getPracticeTestById(testId);
  const questions = getQuestionsForTest(test.id);
  const answers = storedResult?.answers ?? buildMockAnswers(test.id);
  const generated = buildResultSummary(questions, answers);

  const summary = storedResult
    ? {
        percentage: storedResult.scorePercentage,
        correctCount: storedResult.correctCount,
        incorrectCount: storedResult.incorrectCount,
        timeUsedMinutes: storedResult.timeUsedMinutes,
        readinessLevel: storedResult.readinessLevel,
        weakSubjects: storedResult.weakSubjects,
        strongSubjects: storedResult.strongSubjects,
        nextSteps: storedResult.recommendedNextSteps
      }
    : {
        percentage: generated.percentage,
        correctCount: generated.correctCount,
        incorrectCount: generated.incorrectCount,
        timeUsedMinutes: Math.max(12, Math.round(answers.reduce((total, answer) => total + answer.timeSpentSeconds, 0) / 60)),
        readinessLevel: generated.readinessLevel,
        weakSubjects: generated.weakSubjects,
        strongSubjects: generated.strongSubjects,
        nextSteps: [
          "Review every missed explanation in Thai and English",
          "Retry incorrect questions without looking at choices first",
          "Generate a similar test focused on weak topics"
        ]
      };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-700">Test result</p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight">{test.title}</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground">
            Review every answer, compare Thai-English explanations, and turn weak topics into the next practice set.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Button asChild variant="outline">
            <Link href={`/practice/${test.id}`}>
              <RotateCcw className="h-4 w-4" aria-hidden="true" />
              Retry incorrect
            </Link>
          </Button>
          <Button variant="outline">
            <RefreshCw className="h-4 w-4" aria-hidden="true" />
            Generate similar test
          </Button>
          <Button asChild>
            <Link href="/tutor">
              <Bot className="h-4 w-4" aria-hidden="true" />
              Ask AI tutor
            </Link>
          </Button>
        </div>
      </div>

      <div className="mt-8">
        <ScoreSummary
          percentage={summary.percentage}
          correctCount={summary.correctCount}
          incorrectCount={summary.incorrectCount}
          timeUsedMinutes={summary.timeUsedMinutes}
          readinessLevel={summary.readinessLevel}
        />
      </div>

      <div className="mt-6">
        <WeakTopicAnalysis
          weakSubjects={summary.weakSubjects}
          strongSubjects={summary.strongSubjects}
          nextSteps={summary.nextSteps}
        />
      </div>

      <section className="mt-10">
        <div className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-blue-600" aria-hidden="true" />
          <h2 className="text-2xl font-bold tracking-tight">Review all questions</h2>
        </div>
        <div className="mt-5">
          <QuestionReview questions={questions} answers={answers} />
        </div>
      </section>
    </div>
  );
}
