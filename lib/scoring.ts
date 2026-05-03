import type { Difficulty, Question, ScoreBreakdown, StudentAnswer } from "@/lib/types";
import { getReadinessLevel } from "@/lib/readiness";

function normalizeAnswer(answer: string | string[]) {
  if (Array.isArray(answer)) {
    return answer.map((item) => item.trim().toLowerCase()).sort().join("|");
  }

  return answer.trim().toLowerCase();
}

export function isAnswerCorrect(question: Question, answer?: string | string[]) {
  if (answer === undefined) return false;
  return normalizeAnswer(question.correctAnswer) === normalizeAnswer(answer);
}

export function calculateScore(questions: Question[], answers: StudentAnswer[]): ScoreBreakdown {
  const answerMap = new Map(answers.map((answer) => [answer.questionId, answer.answer]));
  const difficulties: Difficulty[] = ["Easy", "Medium", "Hard", "Final Boss"];

  const breakdown: ScoreBreakdown = {
    totalQuestions: questions.length,
    correctCount: 0,
    incorrectCount: 0,
    percentage: 0,
    topicBreakdown: {},
    difficultyBreakdown: Object.fromEntries(
      difficulties.map((difficulty) => [difficulty, { total: 0, correct: 0 }])
    ) as ScoreBreakdown["difficultyBreakdown"]
  };

  questions.forEach((question) => {
    const correct = isAnswerCorrect(question, answerMap.get(question.id));
    if (correct) breakdown.correctCount += 1;

    breakdown.topicBreakdown[question.topic] ??= { total: 0, correct: 0 };
    breakdown.topicBreakdown[question.topic].total += 1;
    breakdown.topicBreakdown[question.topic].correct += correct ? 1 : 0;

    breakdown.difficultyBreakdown[question.difficulty].total += 1;
    breakdown.difficultyBreakdown[question.difficulty].correct += correct ? 1 : 0;
  });

  breakdown.incorrectCount = breakdown.totalQuestions - breakdown.correctCount;
  breakdown.percentage = breakdown.totalQuestions
    ? Math.round((breakdown.correctCount / breakdown.totalQuestions) * 100)
    : 0;

  return breakdown;
}

export function buildResultSummary(questions: Question[], answers: StudentAnswer[]) {
  const score = calculateScore(questions, answers);
  const weakSubjects = Object.entries(score.topicBreakdown)
    .filter(([, value]) => value.correct / value.total < 0.7)
    .map(([topic]) => topic);
  const strongSubjects = Object.entries(score.topicBreakdown)
    .filter(([, value]) => value.correct / value.total >= 0.7)
    .map(([topic]) => topic);

  return {
    ...score,
    readinessLevel: getReadinessLevel(score.percentage),
    weakSubjects,
    strongSubjects
  };
}
