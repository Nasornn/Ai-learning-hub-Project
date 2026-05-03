import { PracticeLayout } from "@/components/practice/PracticeLayout";
import { getPracticeTestById, getQuestionsForTest } from "@/lib/mockData";

export default async function PracticeTestPage({ params }: { params: Promise<{ testId: string }> }) {
  const { testId } = await params;
  const test = getPracticeTestById(testId);
  const questions = getQuestionsForTest(test.id);

  return <PracticeLayout test={test} questions={questions} />;
}
