export type ExamType = "GED" | "SAT" | "IELTS" | "Thai Math" | "Thai School" | "English";
export type Difficulty = "Easy" | "Medium" | "Hard" | "Final Boss";
export type QuestionType =
  | "single_choice"
  | "multi_select"
  | "numeric_input"
  | "short_answer"
  | "table_analysis"
  | "passage_reasoning"
  | "graph_reasoning"
  | "formula_application";

export type LanguageMode = "Thai" | "English" | "Bilingual";
export type ReadinessLevel =
  | "Not Ready"
  | "Building Foundation"
  | "Almost Ready"
  | "Ready"
  | "Exam Mode Ready";

export interface User {
  id: string;
  name: string;
  email: string;
  role: "Student" | "Parent" | "Tutor" | "Admin";
  targetExam: ExamType;
  preferredLanguage: LanguageMode;
  avatarInitials: string;
}

export interface Lesson {
  id: string;
  courseId: string;
  title: string;
  explanation: string;
  explanationThai?: string;
  videoPlaceholder: string;
  readingNotes: string[];
  exampleQuestions: string[];
  miniQuiz: string;
  status: "Locked" | "Available" | "Completed";
  durationMinutes: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  examType: ExamType;
  subject: string;
  level: "Beginner" | "Intermediate" | "Advanced" | "Exam Mode";
  language: LanguageMode;
  duration: "Short" | "Full Course" | "Practice Test";
  lessons: number;
  practiceQuestions: number;
  estimatedStudyTime: string;
  progress: number;
  featured?: boolean;
  topics: string[];
  outcomes: string[];
}

export interface PracticeTest {
  id: string;
  title: string;
  exam: ExamType;
  subject: string;
  mode: "Practice" | "Exam";
  durationMinutes: number;
  module?: "Module 1" | "Module 2" | "Full Test";
  adaptivePlaceholder?: boolean;
  calculatorAllowed?: boolean;
  questionIds: string[];
  description: string;
}

export interface Question {
  id: string;
  exam: "GED" | "SAT" | "IELTS" | "Thai Math";
  subject: string;
  topic: string;
  difficulty: Difficulty;
  type: QuestionType;
  passage?: string;
  dataTable?: Record<string, string | number>[];
  graphDescription?: string;
  formulaBox?: string[];
  questionText: string;
  choices?: string[];
  correctAnswer: string | string[];
  explanationEnglish: string;
  explanationThai: string;
  wrongChoiceExplanations?: Record<string, string>;
  skillTested: string;
  tags: string[];
}

export interface StudentAnswer {
  questionId: string;
  answer: string | string[];
  timeSpentSeconds: number;
  flagged?: boolean;
}

export interface TestResult {
  id: string;
  testId: string;
  userId: string;
  scorePercentage: number;
  correctCount: number;
  incorrectCount: number;
  timeUsedMinutes: number;
  readinessLevel: ReadinessLevel;
  weakSubjects: string[];
  strongSubjects: string[];
  recommendedNextSteps: string[];
  answers: StudentAnswer[];
}

export interface StudyPlan {
  id: string;
  title: string;
  targetExam: ExamType;
  currentScore: number;
  targetScore: number;
  examDate: string;
  studyDaysPerWeek: number;
  timePerDayMinutes: number;
  weakSubjects: string[];
  preferredLanguage: LanguageMode;
  readinessPrediction: ReadinessLevel;
  weeklySchedule: {
    week: number;
    focus: string;
    tasks: string[];
    milestone: string;
  }[];
}

export interface ChatMessage {
  id: string;
  role: "student" | "assistant";
  mode: "GED" | "SAT" | "IELTS" | "Thai Math" | "English" | "Study Coach";
  content: string;
  createdAt: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export interface AdminStats {
  totalUsers: number;
  activeStudents: number;
  courses: number;
  questions: number;
  practiceTests: number;
  aiTutorMessages: number;
  averageScore: number;
  revenuePlaceholder: string;
}

export interface ScoreBreakdown {
  totalQuestions: number;
  correctCount: number;
  incorrectCount: number;
  percentage: number;
  topicBreakdown: Record<string, { total: number; correct: number }>;
  difficultyBreakdown: Record<Difficulty, { total: number; correct: number }>;
}
