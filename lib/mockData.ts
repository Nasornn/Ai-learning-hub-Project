import type {
  AdminStats,
  ChatMessage,
  Course,
  Lesson,
  PracticeTest,
  PricingPlan,
  Question,
  StudyPlan,
  TestResult,
  User
} from "@/lib/types";

export const users: User[] = [
  {
    id: "user-maya",
    name: "Maya Charoen",
    email: "maya@example.com",
    role: "Student",
    targetExam: "GED",
    preferredLanguage: "Bilingual",
    avatarInitials: "MC"
  },
  {
    id: "user-parent",
    name: "Narin Parent View",
    email: "narin.parent@example.com",
    role: "Parent",
    targetExam: "SAT",
    preferredLanguage: "Thai",
    avatarInitials: "NP"
  },
  {
    id: "user-admin",
    name: "DekReady Admin",
    email: "admin@dekready.ai",
    role: "Admin",
    targetExam: "IELTS",
    preferredLanguage: "English",
    avatarInitials: "DA"
  }
];

export const courses: Course[] = [
  {
    id: "ged-science-reasoning",
    title: "GED Science: Realistic Exam Reasoning",
    description:
      "Build evidence-based reasoning for GED Science with data tables, experimental design, and harder-than-average distractors.",
    examType: "GED",
    subject: "Science",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 24,
    practiceQuestions: 420,
    estimatedStudyTime: "5 weeks",
    progress: 62,
    featured: true,
    topics: ["Scientific method", "Data tables", "Graphs", "Evidence", "Formula application"],
    outcomes: ["Read GED science passages faster", "Eliminate trap choices", "Explain answers in Thai and English"]
  },
  {
    id: "ged-math-reasoning",
    title: "GED Mathematical Reasoning",
    description:
      "A full GED Math path covering algebra, geometry, word problems, data analysis, and formula use.",
    examType: "GED",
    subject: "Math",
    level: "Beginner",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 36,
    practiceQuestions: 680,
    estimatedStudyTime: "8 weeks",
    progress: 48,
    featured: true,
    topics: ["Algebra", "Linear equations", "Geometry", "Data analysis", "Word problems"],
    outcomes: ["Recover weak foundations", "Use formulas correctly", "Handle multi-step GED problems"]
  },
  {
    id: "ged-rla",
    title: "GED Reasoning Through Language Arts",
    description:
      "Practice reading comprehension, inference, grammar, argument analysis, and extended response planning.",
    examType: "GED",
    subject: "RLA",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 28,
    practiceQuestions: 510,
    estimatedStudyTime: "6 weeks",
    progress: 33,
    topics: ["Main idea", "Inference", "Evidence", "Grammar", "Extended response"],
    outcomes: ["Use passage evidence", "Spot grammar traps", "Write a stronger GED essay"]
  },
  {
    id: "ged-social-studies",
    title: "GED Social Studies",
    description:
      "Master civics, U.S. history, economics, geography, charts, maps, and author point of view.",
    examType: "GED",
    subject: "Social Studies",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 22,
    practiceQuestions: 390,
    estimatedStudyTime: "4 weeks",
    progress: 21,
    topics: ["Civics", "Economics", "Historical texts", "Charts and maps", "Cause and effect"],
    outcomes: ["Interpret historical sources", "Compare evidence", "Avoid extreme answer traps"]
  },
  {
    id: "ged-full-mock",
    title: "GED Full Mock Test Bundle",
    description:
      "Timed full-test simulations with readiness scoring, weak-topic analysis, and similar-question generation.",
    examType: "GED",
    subject: "All Subjects",
    level: "Exam Mode",
    language: "Bilingual",
    duration: "Practice Test",
    lessons: 8,
    practiceQuestions: 920,
    estimatedStudyTime: "2 weeks",
    progress: 15,
    featured: true,
    topics: ["Math", "RLA", "Science", "Social Studies"],
    outcomes: ["Build exam stamina", "Track readiness", "Prioritize final review"]
  },
  {
    id: "sat-math-algebra",
    title: "SAT Math: Algebra & Advanced Math",
    description:
      "Digital SAT modules for linear equations, systems, quadratics, functions, and advanced algebra.",
    examType: "SAT",
    subject: "Math",
    level: "Advanced",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 32,
    practiceQuestions: 760,
    estimatedStudyTime: "7 weeks",
    progress: 71,
    featured: true,
    topics: ["Algebra", "Advanced Math", "Quadratics", "Functions", "Systems"],
    outcomes: ["Reach 700+ strategy", "Solve without over-calculating", "Use module timing well"]
  },
  {
    id: "sat-data-analysis",
    title: "SAT Math: Problem Solving & Data Analysis",
    description:
      "Ratios, percentages, scatterplots, probability, statistics, and real-world data questions.",
    examType: "SAT",
    subject: "Math",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 20,
    practiceQuestions: 430,
    estimatedStudyTime: "4 weeks",
    progress: 28,
    topics: ["Ratios", "Percentages", "Scatterplots", "Probability", "Statistics"],
    outcomes: ["Read data questions accurately", "Avoid unit mistakes", "Estimate before calculating"]
  },
  {
    id: "sat-rw-craft",
    title: "SAT Reading & Writing: Craft and Structure",
    description:
      "Vocabulary in context, text structure, purpose, and evidence questions for the digital SAT.",
    examType: "SAT",
    subject: "Reading",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 18,
    practiceQuestions: 360,
    estimatedStudyTime: "4 weeks",
    progress: 42,
    topics: ["Vocabulary", "Purpose", "Structure", "Evidence", "Inference"],
    outcomes: ["Choose evidence-backed answers", "Understand rhetoric", "Reduce careless misreads"]
  },
  {
    id: "sat-rw-grammar",
    title: "SAT Reading & Writing: Grammar and Expression",
    description:
      "Standard English conventions, transitions, rhetorical synthesis, punctuation, and concise expression.",
    examType: "SAT",
    subject: "Writing",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 21,
    practiceQuestions: 460,
    estimatedStudyTime: "5 weeks",
    progress: 54,
    topics: ["Grammar", "Transitions", "Punctuation", "Rhetorical synthesis", "Expression of ideas"],
    outcomes: ["Fix grammar fast", "Pick logical transitions", "Improve concise writing"]
  },
  {
    id: "sat-full-digital",
    title: "SAT Full Digital Practice",
    description:
      "Digital SAT-style Module 1 and Module 2 practice with adaptive difficulty placeholders and calculator indicators.",
    examType: "SAT",
    subject: "All Subjects",
    level: "Exam Mode",
    language: "Bilingual",
    duration: "Practice Test",
    lessons: 10,
    practiceQuestions: 680,
    estimatedStudyTime: "3 weeks",
    progress: 19,
    featured: true,
    topics: ["Module 1", "Module 2", "Adaptive practice", "Calculator allowed", "Student-produced response"],
    outcomes: ["Simulate digital SAT flow", "Adapt to harder second modules", "Review pacing by topic"]
  },
  {
    id: "ielts-reading",
    title: "IELTS Academic Reading",
    description:
      "Academic passages with matching headings, True/False/Not Given, sentence completion, and vocabulary in context.",
    examType: "IELTS",
    subject: "Reading",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 24,
    practiceQuestions: 520,
    estimatedStudyTime: "6 weeks",
    progress: 45,
    featured: true,
    topics: ["Academic passage", "Matching headings", "TFNG", "Summary completion", "Vocabulary"],
    outcomes: ["Skim with purpose", "Find evidence precisely", "Avoid Not Given traps"]
  },
  {
    id: "ielts-writing-task-1",
    title: "IELTS Academic Writing Task 1",
    description:
      "Line graphs, bar charts, pie charts, tables, maps, and process diagrams with band-based feedback.",
    examType: "IELTS",
    subject: "Writing",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 18,
    practiceQuestions: 120,
    estimatedStudyTime: "4 weeks",
    progress: 38,
    topics: ["Line graph", "Bar chart", "Table", "Map", "Process diagram"],
    outcomes: ["Group trends", "Write accurate overviews", "Upgrade academic language"]
  },
  {
    id: "ielts-writing-task-2",
    title: "IELTS Academic Writing Task 2",
    description:
      "Opinion, discussion, advantage/disadvantage, problem/solution, and two-part essays.",
    examType: "IELTS",
    subject: "Writing",
    level: "Advanced",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 20,
    practiceQuestions: 150,
    estimatedStudyTime: "5 weeks",
    progress: 26,
    featured: true,
    topics: ["Opinion essay", "Discussion essay", "Coherence", "Lexical resource", "Grammar accuracy"],
    outcomes: ["Plan essays faster", "Improve band descriptors", "Write stronger thesis statements"]
  },
  {
    id: "ielts-listening",
    title: "IELTS Listening",
    description:
      "Section 1 to 4 listening tasks with audio placeholders, fill-in blanks, multiple choice, and matching.",
    examType: "IELTS",
    subject: "Listening",
    level: "Beginner",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 16,
    practiceQuestions: 320,
    estimatedStudyTime: "4 weeks",
    progress: 58,
    topics: ["Section 1", "Section 2", "Section 3", "Section 4", "Matching"],
    outcomes: ["Predict answer types", "Handle distractors", "Improve spelling accuracy"]
  },
  {
    id: "ielts-speaking",
    title: "IELTS Speaking",
    description:
      "Part 1, Part 2 cue cards, Part 3 discussions, timer practice, and mock band feedback.",
    examType: "IELTS",
    subject: "Speaking",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Short",
    lessons: 14,
    practiceQuestions: 180,
    estimatedStudyTime: "3 weeks",
    progress: 34,
    topics: ["Part 1", "Cue card", "Part 3", "Fluency", "Pronunciation"],
    outcomes: ["Speak for two minutes", "Extend answers naturally", "Reduce memorized responses"]
  },
  {
    id: "ielts-band-strategy",
    title: "IELTS Band 7.5+ Strategy",
    description:
      "Advanced strategy for students targeting selective international university pathways.",
    examType: "IELTS",
    subject: "All Skills",
    level: "Advanced",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 12,
    practiceQuestions: 260,
    estimatedStudyTime: "3 weeks",
    progress: 12,
    topics: ["Band descriptors", "Time management", "Error logs", "Vocabulary upgrade", "Mock review"],
    outcomes: ["Polish high-band performance", "Control recurring errors", "Build final-week confidence"]
  },
  {
    id: "math-m4-foundation",
    title: "Math M.4 Foundation",
    description:
      "Recover M.4 fundamentals with Thai-English explanations, formula boxes, common mistakes, and mini quizzes.",
    examType: "Thai School",
    subject: "Math",
    level: "Beginner",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 30,
    practiceQuestions: 540,
    estimatedStudyTime: "7 weeks",
    progress: 67,
    featured: true,
    topics: ["Sets", "Logic", "Real numbers", "Relations and functions", "Quadratic equations"],
    outcomes: ["Understand formulas in Thai", "Solve step-by-step", "Fix foundation gaps before M.5"]
  },
  {
    id: "math-m4-advanced",
    title: "Math M.4 Advanced",
    description:
      "Harder M.4 problems for competitive tracks, international programs, and exam readiness.",
    examType: "Thai School",
    subject: "Math",
    level: "Advanced",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 24,
    practiceQuestions: 480,
    estimatedStudyTime: "6 weeks",
    progress: 22,
    topics: ["Functions", "Exponents", "Coordinate geometry", "Trigonometry foundation", "Statistics"],
    outcomes: ["Handle challenge questions", "Connect graphs and equations", "Explain methods clearly"]
  },
  {
    id: "math-m5-foundation",
    title: "Math M.5 Foundation",
    description:
      "Exponential, logarithmic, trigonometric functions, sequences, probability, vectors, and matrices.",
    examType: "Thai School",
    subject: "Math",
    level: "Beginner",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 34,
    practiceQuestions: 620,
    estimatedStudyTime: "8 weeks",
    progress: 41,
    topics: ["Logarithms", "Trigonometry", "Sequences", "Probability", "Vectors"],
    outcomes: ["Learn formula meaning", "Build problem recognition", "Prepare for M.6 topics"]
  },
  {
    id: "math-m5-advanced",
    title: "Math M.5 Advanced",
    description:
      "Advanced M.5 problem solving for selective school exams and university foundation programs.",
    examType: "Thai School",
    subject: "Math",
    level: "Advanced",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 28,
    practiceQuestions: 560,
    estimatedStudyTime: "7 weeks",
    progress: 17,
    topics: ["Trig identities", "Complex numbers", "Matrices", "Probability", "Statistics"],
    outcomes: ["Move beyond memorization", "Solve mixed-topic problems", "Practice final-boss drills"]
  },
  {
    id: "math-m6-exam-prep",
    title: "Math M.6 Exam Prep",
    description:
      "Calculus foundation, derivatives, integrals, probability, statistics, vectors, matrices, and conics.",
    examType: "Thai School",
    subject: "Math",
    level: "Exam Mode",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 36,
    practiceQuestions: 720,
    estimatedStudyTime: "9 weeks",
    progress: 29,
    featured: true,
    topics: ["Limits", "Derivatives", "Integrals", "Vectors", "Conic sections"],
    outcomes: ["Prepare for university pathways", "Review all M.6 core topics", "Improve timed accuracy"]
  },
  {
    id: "math-full-review",
    title: "Thai High School Math Full Review",
    description:
      "A combined M.4-M.6 recovery and exam prep path for students who need a structured reset.",
    examType: "Thai School",
    subject: "Math",
    level: "Intermediate",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 60,
    practiceQuestions: 1200,
    estimatedStudyTime: "12 weeks",
    progress: 36,
    featured: true,
    topics: ["M.4", "M.5", "M.6", "Foundation recovery", "University prep"],
    outcomes: ["Connect three years of math", "Prioritize weak topics", "Build parent-trackable progress"]
  },
  {
    id: "english-grammar",
    title: "English Grammar for SAT, IELTS, and School",
    description:
      "A clear grammar course for Thai students who want stronger academic English foundations.",
    examType: "English",
    subject: "Writing",
    level: "Beginner",
    language: "Bilingual",
    duration: "Full Course",
    lessons: 26,
    practiceQuestions: 510,
    estimatedStudyTime: "6 weeks",
    progress: 52,
    topics: ["Sentence structure", "Verb tense", "Punctuation", "Transitions", "Academic style"],
    outcomes: ["Fix recurring grammar errors", "Improve exam writing", "Understand English explanations"]
  }
];

export const lessons: Lesson[] = courses.flatMap((course, courseIndex) => {
  const topicSeed = course.topics.slice(0, 4);
  return topicSeed.map((topic, index) => ({
    id: `${course.id}-lesson-${index + 1}`,
    courseId: course.id,
    title: `${topic}: Core Strategy`,
    explanation:
      `Learn the core concept behind ${topic}, then apply it to exam-style questions with bilingual review.`,
    explanationThai:
      `เรียนแกนสำคัญของหัวข้อ ${topic} แล้วฝึกใช้กับโจทย์แนวสอบ พร้อมคำอธิบายไทย-อังกฤษ`,
    videoPlaceholder: "8-12 minute concept video placeholder",
    readingNotes: [
      `Key definition and formula for ${topic}`,
      "Exam trap checklist",
      "Thai-English vocabulary notes"
    ],
    exampleQuestions: [
      `Warm-up ${topic} question`,
      `Mixed reasoning ${topic} question`,
      `Hard challenge ${topic} question`
    ],
    miniQuiz: `5-question adaptive mini quiz for ${topic}`,
    status: courseIndex % 3 === 0 && index < 2 ? "Completed" : index === 0 ? "Available" : "Locked",
    durationMinutes: 35 + index * 8
  }));
});

export const questions: Question[] = [
  {
    id: "ged-science-1",
    exam: "GED",
    subject: "Science",
    topic: "Experimental design",
    difficulty: "Hard",
    type: "table_analysis",
    dataTable: [
      { group: "A", fertilizer: "none", averageHeightCm: 18 },
      { group: "B", fertilizer: "standard", averageHeightCm: 27 },
      { group: "C", fertilizer: "high nitrogen", averageHeightCm: 31 }
    ],
    questionText:
      "A student concludes that high-nitrogen fertilizer always produces the tallest plants. Which limitation most weakens the conclusion?",
    choices: [
      "The experiment did not include a control group.",
      "Plant height was measured in centimeters.",
      "Only one plant species and one growing period were tested.",
      "The standard fertilizer group grew taller than the no-fertilizer group."
    ],
    correctAnswer: "Only one plant species and one growing period were tested.",
    explanationEnglish:
      "The data supports the result for this setup, but 'always' is too broad because only one species and one time period were tested.",
    explanationThai:
      "ข้อมูลสนับสนุนเฉพาะการทดลองนี้ แต่คำว่า 'เสมอ' กว้างเกินไป เพราะทดลองแค่พืชชนิดเดียวและช่วงเวลาเดียว",
    wrongChoiceExplanations: {
      "The experiment did not include a control group.": "Group A is the no-fertilizer control.",
      "Plant height was measured in centimeters.": "The unit does not weaken the conclusion.",
      "The standard fertilizer group grew taller than the no-fertilizer group.": "That supports fertilizer use but not the word always."
    },
    skillTested: "Identify limits of experimental conclusions",
    tags: ["GED", "science", "variables", "evidence"]
  },
  {
    id: "ged-science-2",
    exam: "GED",
    subject: "Science",
    topic: "Formula application",
    difficulty: "Medium",
    type: "formula_application",
    formulaBox: ["density = mass / volume"],
    questionText:
      "A rock has a mass of 96 grams and a volume of 12 cubic centimeters. What is its density?",
    choices: ["0.125 g/cm^3", "8 g/cm^3", "84 g/cm^3", "1,152 g/cm^3"],
    correctAnswer: "8 g/cm^3",
    explanationEnglish:
      "Use density = mass / volume. 96 divided by 12 equals 8 grams per cubic centimeter.",
    explanationThai:
      "ใช้สูตร ความหนาแน่น = มวล / ปริมาตร ดังนั้น 96 / 12 = 8 กรัมต่อลูกบาศก์เซนติเมตร",
    wrongChoiceExplanations: {
      "0.125 g/cm^3": "This reverses volume and mass.",
      "84 g/cm^3": "This subtracts instead of dividing.",
      "1,152 g/cm^3": "This multiplies instead of dividing."
    },
    skillTested: "Use a provided formula",
    tags: ["GED", "science", "density"]
  },
  {
    id: "ged-math-1",
    exam: "GED",
    subject: "Mathematical Reasoning",
    topic: "Linear equations",
    difficulty: "Medium",
    type: "numeric_input",
    questionText:
      "A tutoring center charges a 250 baht registration fee plus 180 baht per lesson. If a student pays 1,510 baht total, how many lessons did the student take?",
    correctAnswer: "7",
    explanationEnglish:
      "Set 250 + 180L = 1510. Subtract 250 to get 1260, then divide by 180. L = 7.",
    explanationThai:
      "ตั้งสมการ 250 + 180L = 1510 ลบ 250 ได้ 1260 แล้วหารด้วย 180 จะได้ L = 7",
    skillTested: "Write and solve a one-variable linear equation",
    tags: ["GED", "math", "linear equations", "word problem"]
  },
  {
    id: "ged-math-2",
    exam: "GED",
    subject: "Mathematical Reasoning",
    topic: "Geometry",
    difficulty: "Hard",
    type: "single_choice",
    formulaBox: ["area of triangle = 1/2(bh)", "area of rectangle = lw"],
    questionText:
      "A rectangular garden is 14 m by 9 m. A triangular pond with base 6 m and height 5 m is inside the garden. How much garden area remains outside the pond?",
    choices: ["15 m^2", "96 m^2", "111 m^2", "141 m^2"],
    correctAnswer: "111 m^2",
    explanationEnglish:
      "The rectangle area is 14 x 9 = 126. The pond area is 1/2 x 6 x 5 = 15. Remaining area is 111.",
    explanationThai:
      "พื้นที่สี่เหลี่ยมคือ 14 x 9 = 126 พื้นที่สระสามเหลี่ยมคือ 1/2 x 6 x 5 = 15 พื้นที่ที่เหลือคือ 111",
    wrongChoiceExplanations: {
      "15 m^2": "This is only the pond area.",
      "96 m^2": "This uses an incorrect triangle calculation.",
      "141 m^2": "This adds the pond instead of subtracting it."
    },
    skillTested: "Combine area formulas in a word problem",
    tags: ["GED", "geometry", "area"]
  },
  {
    id: "ged-rla-1",
    exam: "GED",
    subject: "RLA",
    topic: "Inference",
    difficulty: "Hard",
    type: "passage_reasoning",
    passage:
      "The city council delayed the bus route expansion even though ridership had increased for six consecutive months. Council members cited uncertainty about long-term funding, while commuters argued that overcrowding had already become a daily problem.",
    questionText: "Which inference is best supported by the passage?",
    choices: [
      "The council believes public buses are unnecessary.",
      "Ridership growth alone was not enough to secure immediate approval.",
      "Commuters prefer private cars to buses.",
      "The city has already solved the overcrowding problem."
    ],
    correctAnswer: "Ridership growth alone was not enough to secure immediate approval.",
    explanationEnglish:
      "The passage says ridership increased, but the council still delayed expansion because of funding concerns.",
    explanationThai:
      "บทความบอกว่าจำนวนผู้โดยสารเพิ่มขึ้น แต่สภายังเลื่อนการขยายเส้นทางเพราะกังวลเรื่องงบประมาณระยะยาว",
    wrongChoiceExplanations: {
      "The council believes public buses are unnecessary.": "The passage does not say council members oppose buses.",
      "Commuters prefer private cars to buses.": "The passage says commuters are using crowded buses.",
      "The city has already solved the overcrowding problem.": "Overcrowding is described as a daily problem."
    },
    skillTested: "Make an evidence-based inference",
    tags: ["GED", "RLA", "inference"]
  },
  {
    id: "ged-rla-2",
    exam: "GED",
    subject: "RLA",
    topic: "Grammar",
    difficulty: "Medium",
    type: "single_choice",
    questionText:
      "Which sentence is grammatically correct?",
    choices: [
      "Neither the students nor the teacher were ready for the schedule change.",
      "Neither the students nor the teacher was ready for the schedule change.",
      "Neither the students or the teacher was ready for the schedule change.",
      "Neither the students nor the teacher are ready for the schedule change."
    ],
    correctAnswer: "Neither the students nor the teacher was ready for the schedule change.",
    explanationEnglish:
      "With neither/nor, the verb agrees with the nearer subject. Teacher is singular, so use was.",
    explanationThai:
      "โครงสร้าง neither/nor ให้กริยาสอดคล้องกับประธานที่อยู่ใกล้กว่า คือ teacher เป็นเอกพจน์ จึงใช้ was",
    skillTested: "Subject-verb agreement",
    tags: ["GED", "grammar", "sentence correction"]
  },
  {
    id: "ged-social-1",
    exam: "GED",
    subject: "Social Studies",
    topic: "Civics and government",
    difficulty: "Medium",
    type: "passage_reasoning",
    passage:
      "A proposed law would require government agencies to publish spending reports online every quarter. Supporters argue that citizens need accessible information to evaluate public officials.",
    questionText: "The proposal is most closely related to which democratic principle?",
    choices: ["Federalism", "Transparency", "Judicial review", "Separation of powers"],
    correctAnswer: "Transparency",
    explanationEnglish:
      "Publishing spending reports makes government action more visible to citizens, which is transparency.",
    explanationThai:
      "การเผยแพร่รายงานการใช้จ่ายทำให้ประชาชนตรวจสอบการทำงานรัฐได้มากขึ้น จึงเกี่ยวกับความโปร่งใส",
    skillTested: "Connect a policy to a civics concept",
    tags: ["GED", "social studies", "civics"]
  },
  {
    id: "ged-social-2",
    exam: "GED",
    subject: "Social Studies",
    topic: "Economics",
    difficulty: "Hard",
    type: "graph_reasoning",
    graphDescription:
      "A line graph shows the price of rice rising from 20 to 28 baht per kilogram while quantity demanded falls from 1,000 to 760 kilograms.",
    questionText: "Which economic idea best explains the pattern shown?",
    choices: [
      "Demand usually rises when price rises.",
      "Quantity demanded often falls as price rises.",
      "Supply always disappears when price rises.",
      "Price has no relationship to buyer behavior."
    ],
    correctAnswer: "Quantity demanded often falls as price rises.",
    explanationEnglish:
      "The graph shows an inverse relationship between price and quantity demanded, a basic demand principle.",
    explanationThai:
      "กราฟแสดงความสัมพันธ์ผกผันระหว่างราคาและปริมาณที่ต้องการซื้อ ซึ่งเป็นหลักพื้นฐานของอุปสงค์",
    skillTested: "Interpret an economic graph",
    tags: ["GED", "economics", "graphs"]
  },
  {
    id: "sat-math-1",
    exam: "SAT",
    subject: "Math",
    topic: "Systems of equations",
    difficulty: "Hard",
    type: "single_choice",
    questionText:
      "If 3x + 2y = 19 and x - y = 3, what is the value of x + y?",
    choices: ["3", "5", "7", "9"],
    correctAnswer: "7",
    explanationEnglish:
      "From x - y = 3, x = y + 3. Substitute: 3(y + 3) + 2y = 19, so 5y = 10 and y = 2. Then x = 5, so x + y = 7.",
    explanationThai:
      "จาก x - y = 3 จะได้ x = y + 3 แทนค่าแล้วได้ 5y = 10 ดังนั้น y = 2 และ x = 5 ผลรวมคือ 7",
    skillTested: "Solve and validate a system",
    tags: ["SAT", "math", "systems", "quality-check"]
  },
  {
    id: "sat-math-2",
    exam: "SAT",
    subject: "Math",
    topic: "Quadratic equations",
    difficulty: "Medium",
    type: "numeric_input",
    questionText:
      "The function f is defined by f(x) = x^2 - 6x + 13. What is the minimum value of f(x)?",
    correctAnswer: "4",
    explanationEnglish:
      "Complete the square: x^2 - 6x + 13 = (x - 3)^2 + 4. The minimum value is 4.",
    explanationThai:
      "ทำกำลังสองสมบูรณ์: x^2 - 6x + 13 = (x - 3)^2 + 4 ค่าต่ำสุดคือ 4",
    skillTested: "Find the vertex form of a quadratic",
    tags: ["SAT", "math", "quadratics"]
  },
  {
    id: "sat-math-3",
    exam: "SAT",
    subject: "Math",
    topic: "Problem Solving and Data Analysis",
    difficulty: "Hard",
    type: "table_analysis",
    dataTable: [
      { month: "Jan", users: 1200, paidPercent: 15 },
      { month: "Feb", users: 1500, paidPercent: 18 },
      { month: "Mar", users: 1800, paidPercent: 20 }
    ],
    questionText:
      "From January to March, by how many did the number of paid users increase?",
    choices: ["90", "180", "240", "360"],
    correctAnswer: "180",
    explanationEnglish:
      "January paid users: 15% of 1200 = 180. March paid users: 20% of 1800 = 360. Increase is 180.",
    explanationThai:
      "ผู้ใช้แบบจ่ายเงินเดือนมกราคม = 15% ของ 1200 = 180 เดือนมีนาคม = 20% ของ 1800 = 360 เพิ่มขึ้น 180",
    skillTested: "Use percentages in a data table",
    tags: ["SAT", "data", "percentages"]
  },
  {
    id: "sat-math-4",
    exam: "SAT",
    subject: "Math",
    topic: "Exponential functions",
    difficulty: "Medium",
    type: "single_choice",
    questionText:
      "A population starts at 500 and increases by 8% each year. Which function models the population after t years?",
    choices: ["500(0.08)^t", "500(1.08)^t", "500 + 8t", "1.08(500)^t"],
    correctAnswer: "500(1.08)^t",
    explanationEnglish:
      "An 8% increase means multiply by 1.08 each year, starting from 500.",
    explanationThai:
      "เพิ่มขึ้น 8% หมายถึงคูณด้วย 1.08 ทุกปี โดยเริ่มจาก 500",
    skillTested: "Model exponential growth",
    tags: ["SAT", "math", "exponential functions"]
  },
  {
    id: "sat-rw-1",
    exam: "SAT",
    subject: "Reading and Writing",
    topic: "Transitions",
    difficulty: "Medium",
    type: "single_choice",
    passage:
      "Many urban farms occupy small lots. ____ they can produce meaningful amounts of fresh food when growers use vertical structures and staggered planting schedules.",
    questionText: "Which choice completes the text with the most logical transition?",
    choices: ["However,", "For example,", "Therefore,", "Similarly,"],
    correctAnswer: "However,",
    explanationEnglish:
      "The second sentence contrasts small size with meaningful production, so however is the best transition.",
    explanationThai:
      "ประโยคที่สองขัดแย้งกับความคิดเรื่องพื้นที่เล็ก แต่ยังผลิตอาหารได้มาก จึงใช้ However",
    skillTested: "Choose a logical transition",
    tags: ["SAT", "RW", "transitions"]
  },
  {
    id: "sat-rw-2",
    exam: "SAT",
    subject: "Reading and Writing",
    topic: "Vocabulary in context",
    difficulty: "Hard",
    type: "passage_reasoning",
    passage:
      "The scientist's explanation was not a rejection of the old model but a refinement: it preserved the model's strongest predictions while accounting for new observations.",
    questionText: "As used in the text, 'refinement' most nearly means",
    choices: ["improvement", "contradiction", "replacement", "measurement"],
    correctAnswer: "improvement",
    explanationEnglish:
      "The text says the new explanation preserved strengths while accounting for new observations, which means improvement.",
    explanationThai:
      "ข้อความบอกว่าคำอธิบายใหม่ยังคงข้อดีของแบบจำลองเดิมและเพิ่มการรองรับข้อมูลใหม่ จึงหมายถึงการปรับปรุง",
    skillTested: "Use context to define academic vocabulary",
    tags: ["SAT", "vocabulary", "context"]
  },
  {
    id: "sat-rw-3",
    exam: "SAT",
    subject: "Reading and Writing",
    topic: "Standard English Conventions",
    difficulty: "Medium",
    type: "single_choice",
    questionText:
      "The committee reviewed the applications, interviewed the finalists, and ____ a recommendation to the board.",
    choices: ["submit", "submits", "submitted", "submitting"],
    correctAnswer: "submitted",
    explanationEnglish:
      "The verbs in the series should be parallel in past tense: reviewed, interviewed, submitted.",
    explanationThai:
      "กริยาในรายการต้องขนานกันในอดีตกาล: reviewed, interviewed, submitted",
    skillTested: "Maintain parallel verb tense",
    tags: ["SAT", "grammar", "parallelism"]
  },
  {
    id: "sat-rw-4",
    exam: "SAT",
    subject: "Reading and Writing",
    topic: "Rhetorical synthesis",
    difficulty: "Final Boss",
    type: "multi_select",
    passage:
      "Notes: Researcher: Dr. Anong. Topic: mangrove restoration. Finding: restored mangroves reduce wave energy. Audience: city officials deciding on coastal flood policy.",
    questionText:
      "Which two pieces of information should be included to emphasize policy relevance?",
    choices: [
      "Dr. Anong's name",
      "Restored mangroves reduce wave energy",
      "The audience is city officials",
      "Mangrove restoration relates to coastal flood policy"
    ],
    correctAnswer: [
      "Restored mangroves reduce wave energy",
      "Mangrove restoration relates to coastal flood policy"
    ],
    explanationEnglish:
      "Policy relevance depends on the finding and its connection to flood policy, not the researcher's name.",
    explanationThai:
      "ความเกี่ยวข้องเชิงนโยบายต้องใช้ผลการวิจัยและความเชื่อมโยงกับนโยบายน้ำท่วมชายฝั่ง ไม่ใช่ชื่อผู้วิจัย",
    skillTested: "Select information for rhetorical purpose",
    tags: ["SAT", "RW", "rhetorical synthesis"]
  },
  {
    id: "ielts-reading-1",
    exam: "IELTS",
    subject: "Reading",
    topic: "True / False / Not Given",
    difficulty: "Hard",
    type: "passage_reasoning",
    passage:
      "In several coastal cities, planners are testing reflective pavement to reduce surface temperatures. Early measurements show lower afternoon heat on treated streets, but researchers have not yet studied whether the change reduces hospital visits during heat waves.",
    questionText:
      "Statement: Reflective pavement has been proven to reduce heat-related hospital visits. Choose True, False, or Not Given.",
    choices: ["True", "False", "Not Given"],
    correctAnswer: "Not Given",
    explanationEnglish:
      "The passage says hospital visits have not yet been studied, so the claim is not given.",
    explanationThai:
      "บทความบอกว่ายังไม่ได้ศึกษาการเข้าโรงพยาบาล จึงไม่มีข้อมูลเพียงพอ คำตอบคือ Not Given",
    skillTested: "Distinguish False from Not Given",
    tags: ["IELTS", "reading", "TFNG"]
  },
  {
    id: "ielts-reading-2",
    exam: "IELTS",
    subject: "Reading",
    topic: "Matching headings",
    difficulty: "Medium",
    type: "single_choice",
    passage:
      "Paragraph B: While early online courses simply copied classroom lectures, newer platforms use analytics to identify when learners are likely to stop studying and then recommend shorter review tasks.",
    questionText: "Which heading best matches the paragraph?",
    choices: [
      "The cost of online lectures",
      "From copied lectures to adaptive support",
      "Why learners dislike analytics",
      "The history of classroom architecture"
    ],
    correctAnswer: "From copied lectures to adaptive support",
    explanationEnglish:
      "The paragraph contrasts old copied lectures with newer analytics-based support.",
    explanationThai:
      "ย่อหน้านี้เปรียบเทียบคอร์สออนไลน์ยุคแรกที่คัดลอกการบรรยาย กับแพลตฟอร์มใหม่ที่ใช้ข้อมูลช่วยผู้เรียน",
    skillTested: "Identify paragraph purpose",
    tags: ["IELTS", "reading", "headings"]
  },
  {
    id: "ielts-reading-3",
    exam: "IELTS",
    subject: "Reading",
    topic: "Sentence completion",
    difficulty: "Medium",
    type: "short_answer",
    passage:
      "Researchers found that students remembered vocabulary better when they reviewed words after gradually increasing intervals rather than in one long session.",
    questionText:
      "Complete the sentence with no more than two words: Students remembered vocabulary better through ______ intervals.",
    correctAnswer: "gradually increasing",
    explanationEnglish:
      "The exact phrase in the passage is gradually increasing intervals.",
    explanationThai:
      "วลีในบทความคือ gradually increasing intervals จึงเติม gradually increasing",
    skillTested: "Locate precise wording",
    tags: ["IELTS", "reading", "sentence completion"]
  },
  {
    id: "ielts-writing-1",
    exam: "IELTS",
    subject: "Writing",
    topic: "Task 1 overview",
    difficulty: "Hard",
    type: "graph_reasoning",
    graphDescription:
      "Line graph: The percentage of households with broadband rises from 40% to 86% over ten years, while landline use falls from 78% to 42%.",
    questionText: "Which overview sentence is strongest for IELTS Task 1?",
    choices: [
      "Broadband and landline changed in the graph.",
      "Overall, broadband access rose sharply while landline use declined substantially over the period.",
      "In year one, broadband was 40% and landline was 78%.",
      "The graph is about technology in households."
    ],
    correctAnswer:
      "Overall, broadband access rose sharply while landline use declined substantially over the period.",
    explanationEnglish:
      "A strong overview summarizes the main trends without listing every number.",
    explanationThai:
      "Overview ที่ดีสรุปแนวโน้มหลักโดยไม่ต้องไล่ตัวเลขทุกค่า",
    skillTested: "Write an IELTS Task 1 overview",
    tags: ["IELTS", "writing", "Task 1"]
  },
  {
    id: "ielts-writing-2",
    exam: "IELTS",
    subject: "Writing",
    topic: "Task 2 thesis",
    difficulty: "Medium",
    type: "single_choice",
    questionText:
      "Prompt: Some people believe university education should be free for all students. Which thesis is clearest?",
    choices: [
      "This essay will talk about education.",
      "I totally agree because free university can improve social mobility, although quality must still be funded carefully.",
      "There are many opinions about university and students.",
      "Free education is good and bad."
    ],
    correctAnswer:
      "I totally agree because free university can improve social mobility, although quality must still be funded carefully.",
    explanationEnglish:
      "The thesis gives a clear position and a specific reason while acknowledging a condition.",
    explanationThai:
      "ประโยค thesis นี้มีจุดยืนชัด เหตุผลเฉพาะ และเงื่อนไขที่ทำให้คำตอบดูมีมิติ",
    skillTested: "Choose a clear IELTS Task 2 position",
    tags: ["IELTS", "writing", "Task 2"]
  },
  {
    id: "ielts-listening-1",
    exam: "IELTS",
    subject: "Listening",
    topic: "Section 1 form completion",
    difficulty: "Medium",
    type: "short_answer",
    passage:
      "Audio placeholder transcript: The student says, 'My appointment is on Thursday, not Tuesday, at half past three.'",
    questionText: "Complete the appointment time: ______",
    correctAnswer: "3:30",
    explanationEnglish:
      "Half past three means 3:30. The speaker corrects the day, but the question asks for time.",
    explanationThai:
      "half past three หมายถึง 3:30 ผู้พูดแก้วันนัด แต่คำถามถามเวลา",
    skillTested: "Identify corrected listening detail",
    tags: ["IELTS", "listening", "form completion"]
  },
  {
    id: "ielts-speaking-1",
    exam: "IELTS",
    subject: "Speaking",
    topic: "Part 2 cue card",
    difficulty: "Hard",
    type: "short_answer",
    questionText:
      "Cue card: Describe a skill you learned that was difficult at first. Give one specific example of how you improved.",
    correctAnswer: "Open response",
    explanationEnglish:
      "A strong answer includes a clear skill, the initial difficulty, a concrete improvement method, and reflection.",
    explanationThai:
      "คำตอบที่ดีควรมีทักษะที่ชัด ความยากช่วงแรก วิธีพัฒนาที่เป็นรูปธรรม และการสะท้อนผล",
    skillTested: "Organize a two-minute IELTS speaking response",
    tags: ["IELTS", "speaking", "cue card"]
  },
  {
    id: "ielts-reading-4",
    exam: "IELTS",
    subject: "Reading",
    topic: "Vocabulary in context",
    difficulty: "Final Boss",
    type: "passage_reasoning",
    passage:
      "The policy was initially described as temporary, but it became entrenched as agencies built their annual budgets around it.",
    questionText: "In this context, 'entrenched' most nearly means",
    choices: ["deeply established", "quickly removed", "publicly debated", "slightly improved"],
    correctAnswer: "deeply established",
    explanationEnglish:
      "Because agencies built budgets around the policy, it became deeply established rather than temporary.",
    explanationThai:
      "เพราะหน่วยงานนำไปผูกกับงบประมาณประจำปี นโยบายจึงกลายเป็นสิ่งที่ฝังแน่น ไม่ใช่ชั่วคราว",
    skillTested: "Infer meaning from context",
    tags: ["IELTS", "reading", "vocabulary"]
  },
  {
    id: "thai-m4-1",
    exam: "Thai Math",
    subject: "Math M.4",
    topic: "Sets",
    difficulty: "Medium",
    type: "single_choice",
    questionText:
      "In a class of 40 students, 24 study English, 18 study Chinese, and 7 study both. How many students study neither language?",
    choices: ["5", "7", "12", "19"],
    correctAnswer: "5",
    explanationEnglish:
      "Use inclusion-exclusion: English or Chinese = 24 + 18 - 7 = 35. Neither = 40 - 35 = 5.",
    explanationThai:
      "ใช้หลักบวก-ลบของเซต: เรียนอังกฤษหรือจีน = 24 + 18 - 7 = 35 ดังนั้นไม่เรียนทั้งสองภาษา = 40 - 35 = 5",
    skillTested: "Apply inclusion-exclusion for two sets",
    tags: ["Thai Math", "M4", "sets"]
  },
  {
    id: "thai-m4-2",
    exam: "Thai Math",
    subject: "Math M.4",
    topic: "Logic",
    difficulty: "Hard",
    type: "single_choice",
    questionText:
      "Which statement is logically equivalent to 'If a number is divisible by 6, then it is divisible by 3'?",
    choices: [
      "If a number is divisible by 3, then it is divisible by 6.",
      "If a number is not divisible by 3, then it is not divisible by 6.",
      "If a number is not divisible by 6, then it is not divisible by 3.",
      "A number is divisible by 6 and not divisible by 3."
    ],
    correctAnswer: "If a number is not divisible by 3, then it is not divisible by 6.",
    explanationEnglish:
      "A conditional statement is equivalent to its contrapositive: if not Q, then not P.",
    explanationThai:
      "ประพจน์ p -> q สมมูลกับบทกลับตรงข้าม คือ not q -> not p",
    skillTested: "Use contrapositive logic",
    tags: ["Thai Math", "M4", "logic"]
  },
  {
    id: "thai-m4-3",
    exam: "Thai Math",
    subject: "Math M.4",
    topic: "Quadratic equations",
    difficulty: "Medium",
    type: "numeric_input",
    questionText:
      "The equation x^2 - 10x + 21 = 0 has two roots. What is the larger root?",
    correctAnswer: "7",
    explanationEnglish:
      "Factor: x^2 - 10x + 21 = (x - 3)(x - 7). The larger root is 7.",
    explanationThai:
      "แยกตัวประกอบได้ (x - 3)(x - 7) = 0 รากคือ 3 และ 7 ดังนั้นรากที่มากกว่าคือ 7",
    skillTested: "Factor a quadratic equation",
    tags: ["Thai Math", "M4", "quadratics"]
  },
  {
    id: "thai-m4-4",
    exam: "Thai Math",
    subject: "Math M.4",
    topic: "Relations and functions",
    difficulty: "Hard",
    type: "multi_select",
    questionText:
      "Which two relations represent functions from x to y?",
    choices: [
      "{(1,2), (2,3), (3,4)}",
      "{(1,2), (1,3), (2,4)}",
      "x^2 + y^2 = 9",
      "y = 2x - 5"
    ],
    correctAnswer: ["{(1,2), (2,3), (3,4)}", "y = 2x - 5"],
    explanationEnglish:
      "A function gives each x exactly one y. The ordered pair set has unique x-values, and y = 2x - 5 passes the vertical line test.",
    explanationThai:
      "ฟังก์ชันต้องให้ค่า y เพียงค่าเดียวต่อ x หนึ่งค่า เซตคู่ลำดับข้อแรก x ไม่ซ้ำ และ y = 2x - 5 เป็นฟังก์ชัน",
    skillTested: "Identify functions",
    tags: ["Thai Math", "M4", "functions"]
  },
  {
    id: "thai-m5-1",
    exam: "Thai Math",
    subject: "Math M.5",
    topic: "Logarithmic functions",
    difficulty: "Medium",
    type: "numeric_input",
    questionText:
      "If log_2(x) = 5, what is x?",
    correctAnswer: "32",
    explanationEnglish:
      "log_2(x) = 5 means 2^5 = x, so x = 32.",
    explanationThai:
      "log_2(x) = 5 หมายความว่า 2^5 = x ดังนั้น x = 32",
    skillTested: "Convert logarithmic form to exponential form",
    tags: ["Thai Math", "M5", "logarithms"]
  },
  {
    id: "thai-m5-2",
    exam: "Thai Math",
    subject: "Math M.5",
    topic: "Trigonometric identities",
    difficulty: "Hard",
    type: "single_choice",
    questionText:
      "If sin theta = 3/5 and theta is in Quadrant II, what is cos theta?",
    choices: ["4/5", "-4/5", "3/4", "-3/4"],
    correctAnswer: "-4/5",
    explanationEnglish:
      "Use sin^2 theta + cos^2 theta = 1. cos has magnitude 4/5 and is negative in Quadrant II.",
    explanationThai:
      "ใช้ sin^2 theta + cos^2 theta = 1 จะได้ขนาดของ cos เป็น 4/5 และในควอดแรนต์ที่ 2 ค่า cos เป็นลบ",
    skillTested: "Use trig identity with quadrant sign",
    tags: ["Thai Math", "M5", "trigonometry"]
  },
  {
    id: "thai-m5-3",
    exam: "Thai Math",
    subject: "Math M.5",
    topic: "Sequences and series",
    difficulty: "Medium",
    type: "numeric_input",
    questionText:
      "An arithmetic sequence has a1 = 12 and common difference d = -3. What is a15?",
    correctAnswer: "-30",
    explanationEnglish:
      "Use an = a1 + (n - 1)d. a15 = 12 + 14(-3) = -30.",
    explanationThai:
      "ใช้สูตร an = a1 + (n - 1)d ดังนั้น a15 = 12 + 14(-3) = -30",
    skillTested: "Find a term of an arithmetic sequence",
    tags: ["Thai Math", "M5", "sequences"]
  },
  {
    id: "thai-m5-4",
    exam: "Thai Math",
    subject: "Math M.5",
    topic: "Probability",
    difficulty: "Hard",
    type: "single_choice",
    questionText:
      "A bag has 5 red balls and 3 blue balls. Two balls are drawn without replacement. What is the probability both are red?",
    choices: ["5/16", "25/64", "5/14", "1/2"],
    correctAnswer: "5/14",
    explanationEnglish:
      "P(red then red) = 5/8 x 4/7 = 20/56 = 5/14.",
    explanationThai:
      "ความน่าจะเป็นแดงแล้วแดง = 5/8 x 4/7 = 20/56 = 5/14",
    skillTested: "Calculate probability without replacement",
    tags: ["Thai Math", "M5", "probability"]
  },
  {
    id: "thai-m6-1",
    exam: "Thai Math",
    subject: "Math M.6",
    topic: "Limits",
    difficulty: "Medium",
    type: "numeric_input",
    questionText:
      "Find lim as x approaches 2 of (x^2 - 4)/(x - 2).",
    correctAnswer: "4",
    explanationEnglish:
      "Factor x^2 - 4 as (x - 2)(x + 2), cancel x - 2, then substitute x = 2 to get 4.",
    explanationThai:
      "แยกตัวประกอบ x^2 - 4 = (x - 2)(x + 2) ตัด x - 2 แล้วแทน x = 2 ได้ 4",
    skillTested: "Evaluate a removable discontinuity limit",
    tags: ["Thai Math", "M6", "limits"]
  },
  {
    id: "thai-m6-2",
    exam: "Thai Math",
    subject: "Math M.6",
    topic: "Derivatives",
    difficulty: "Medium",
    type: "single_choice",
    questionText:
      "If f(x) = 3x^4 - 2x^2 + 5, what is f'(x)?",
    choices: ["12x^3 - 4x", "7x^3", "3x^3 - 2x", "12x^4 - 4x^2"],
    correctAnswer: "12x^3 - 4x",
    explanationEnglish:
      "Apply the power rule: derivative of 3x^4 is 12x^3, derivative of -2x^2 is -4x, constant becomes 0.",
    explanationThai:
      "ใช้กฎกำลัง: อนุพันธ์ของ 3x^4 คือ 12x^3 อนุพันธ์ของ -2x^2 คือ -4x และค่าคงที่เป็น 0",
    skillTested: "Use the power rule",
    tags: ["Thai Math", "M6", "derivatives"]
  },
  {
    id: "thai-m6-3",
    exam: "Thai Math",
    subject: "Math M.6",
    topic: "Matrices",
    difficulty: "Hard",
    type: "single_choice",
    questionText:
      "For matrix A = [[2, 1], [5, 3]], what is det(A)?",
    choices: ["1", "6", "11", "-1"],
    correctAnswer: "1",
    explanationEnglish:
      "For a 2x2 matrix [[a,b],[c,d]], determinant is ad - bc. Here 2(3) - 1(5) = 1.",
    explanationThai:
      "เมทริกซ์ 2x2 [[a,b],[c,d]] มีดีเทอร์มิแนนต์ ad - bc ดังนั้น 2(3) - 1(5) = 1",
    skillTested: "Find a 2x2 determinant",
    tags: ["Thai Math", "M6", "matrices"]
  },
  {
    id: "thai-m6-4",
    exam: "Thai Math",
    subject: "Math M.6",
    topic: "Conic sections",
    difficulty: "Final Boss",
    type: "single_choice",
    questionText:
      "The equation (x - 2)^2/9 + (y + 1)^2/4 = 1 represents an ellipse. What is its center?",
    choices: ["(2, -1)", "(-2, 1)", "(9, 4)", "(3, 2)"],
    correctAnswer: "(2, -1)",
    explanationEnglish:
      "The standard ellipse form is (x - h)^2/a^2 + (y - k)^2/b^2 = 1, so the center is (h, k) = (2, -1).",
    explanationThai:
      "รูปมาตรฐานคือ (x - h)^2/a^2 + (y - k)^2/b^2 = 1 ดังนั้นจุดศูนย์กลางคือ (h,k) = (2,-1)",
    skillTested: "Read the center of an ellipse from standard form",
    tags: ["Thai Math", "M6", "conics"]
  }
];

export const practiceTests: PracticeTest[] = [
  {
    id: "ged-science-mini",
    title: "GED Science Evidence Mini Test",
    exam: "GED",
    subject: "Science",
    mode: "Practice",
    durationMinutes: 28,
    questionIds: ["ged-science-1", "ged-science-2", "ged-rla-1", "ged-social-2"],
    description: "Mixed GED reasoning with science data, passage evidence, and graph interpretation."
  },
  {
    id: "sat-digital-module-1",
    title: "SAT Digital Module 1: Math + RW",
    exam: "SAT",
    subject: "Digital SAT",
    mode: "Exam",
    durationMinutes: 32,
    module: "Module 1",
    adaptivePlaceholder: true,
    calculatorAllowed: true,
    questionIds: ["sat-math-2", "sat-math-3", "sat-math-4", "sat-rw-1", "sat-rw-2", "sat-rw-3"],
    description: "Digital SAT-style module with calculator indicator and student-produced response."
  },
  {
    id: "ielts-academic-sprint",
    title: "IELTS Academic Reading + Writing Sprint",
    exam: "IELTS",
    subject: "Academic",
    mode: "Practice",
    durationMinutes: 40,
    questionIds: [
      "ielts-reading-1",
      "ielts-reading-2",
      "ielts-reading-3",
      "ielts-writing-1",
      "ielts-writing-2",
      "ielts-reading-4"
    ],
    description: "Academic passage reasoning and writing decision practice with band-strategy review."
  },
  {
    id: "thai-math-m456-check",
    title: "Thai Math M.4-M.6 Readiness Check",
    exam: "Thai Math",
    subject: "Math",
    mode: "Practice",
    durationMinutes: 45,
    calculatorAllowed: true,
    questionIds: [
      "thai-m4-1",
      "thai-m4-2",
      "thai-m4-3",
      "thai-m4-4",
      "thai-m5-1",
      "thai-m5-2",
      "thai-m5-3",
      "thai-m6-1"
    ],
    description: "Bilingual Thai high-school math checkpoint across sets, logic, trig, sequences, and calculus foundations."
  }
];

export const testResults: TestResult[] = [
  {
    id: "result-ged-science-demo",
    testId: "ged-science-mini",
    userId: "user-maya",
    scorePercentage: 75,
    correctCount: 3,
    incorrectCount: 1,
    timeUsedMinutes: 23,
    readinessLevel: "Ready",
    weakSubjects: ["Experimental design"],
    strongSubjects: ["Formula application", "Inference", "Economics"],
    recommendedNextSteps: [
      "Review experimental conclusion limits",
      "Practice 10 table-analysis questions",
      "Ask AI tutor for similar harder GED Science passages"
    ],
    answers: [
      {
        questionId: "ged-science-1",
        answer: "The experiment did not include a control group.",
        timeSpentSeconds: 168,
        flagged: true
      },
      { questionId: "ged-science-2", answer: "8 g/cm^3", timeSpentSeconds: 74 },
      {
        questionId: "ged-rla-1",
        answer: "Ridership growth alone was not enough to secure immediate approval.",
        timeSpentSeconds: 141
      },
      {
        questionId: "ged-social-2",
        answer: "Quantity demanded often falls as price rises.",
        timeSpentSeconds: 112
      }
    ]
  }
];

export const studyPlans: StudyPlan[] = [
  {
    id: "plan-ged-8-week",
    title: "8-week GED Science + Math plan",
    targetExam: "GED",
    currentScore: 58,
    targetScore: 78,
    examDate: "2026-07-12",
    studyDaysPerWeek: 5,
    timePerDayMinutes: 75,
    weakSubjects: ["Algebra", "Experimental design", "Graphs"],
    preferredLanguage: "Bilingual",
    readinessPrediction: "Ready",
    weeklySchedule: [
      {
        week: 1,
        focus: "Foundation recovery",
        tasks: ["Linear equations review", "GED science variables", "20 untimed mixed questions"],
        milestone: "Explain every missed question in Thai"
      },
      {
        week: 2,
        focus: "Data and graphs",
        tasks: ["Scatterplots", "Data table claims", "Timed 30-minute science set"],
        milestone: "Reach 65% on data questions"
      },
      {
        week: 3,
        focus: "Word problems",
        tasks: ["Translate words into equations", "Formula box practice", "Retry incorrect questions"],
        milestone: "Finish 40 questions with an error log"
      },
      {
        week: 4,
        focus: "Mock test checkpoint",
        tasks: ["Full GED Science mini mock", "Math geometry set", "AI tutor weak-topic review"],
        milestone: "Reach Building Foundation or higher"
      }
    ]
  },
  {
    id: "plan-ielts-12-week",
    title: "12-week IELTS Band 7.5 plan",
    targetExam: "IELTS",
    currentScore: 62,
    targetScore: 78,
    examDate: "2026-08-30",
    studyDaysPerWeek: 6,
    timePerDayMinutes: 90,
    weakSubjects: ["Writing Task 2", "Reading TFNG", "Speaking Part 3"],
    preferredLanguage: "Bilingual",
    readinessPrediction: "Almost Ready",
    weeklySchedule: [
      {
        week: 1,
        focus: "Diagnostic and band descriptors",
        tasks: ["One reading passage", "Task 2 thesis drills", "Speaking Part 1 recording placeholder"],
        milestone: "Create a band descriptor checklist"
      },
      {
        week: 2,
        focus: "Reading accuracy",
        tasks: ["TFNG practice", "Matching headings", "Vocabulary review"],
        milestone: "Reduce Not Given mistakes"
      },
      {
        week: 3,
        focus: "Writing coherence",
        tasks: ["Task 2 paragraph plans", "Cohesion upgrade", "AI writing feedback mock"],
        milestone: "Produce one stronger essay outline"
      }
    ]
  },
  {
    id: "plan-sat-10-week",
    title: "10-week SAT Math 700+ plan",
    targetExam: "SAT",
    currentScore: 610,
    targetScore: 720,
    examDate: "2026-09-05",
    studyDaysPerWeek: 5,
    timePerDayMinutes: 80,
    weakSubjects: ["Advanced Math", "Quadratics", "Data analysis"],
    preferredLanguage: "English",
    readinessPrediction: "Ready",
    weeklySchedule: [
      {
        week: 1,
        focus: "Algebra speed",
        tasks: ["Linear equations", "Systems", "No-calculator mental checks"],
        milestone: "Finish 30 algebra questions under target pacing"
      },
      {
        week: 2,
        focus: "Quadratic forms",
        tasks: ["Vertex form", "Factoring", "Function interpretation"],
        milestone: "Reach 80% on quadratic drills"
      }
    ]
  },
  {
    id: "plan-thai-math-recovery",
    title: "M.4-M.6 Math foundation recovery plan",
    targetExam: "Thai School",
    currentScore: 46,
    targetScore: 75,
    examDate: "2026-10-01",
    studyDaysPerWeek: 4,
    timePerDayMinutes: 70,
    weakSubjects: ["Logic", "Trigonometry", "Limits"],
    preferredLanguage: "Thai",
    readinessPrediction: "Building Foundation",
    weeklySchedule: [
      {
        week: 1,
        focus: "M.4 reset",
        tasks: ["Sets", "Logic truth tables", "Quadratic equation basics"],
        milestone: "Explain each formula in Thai"
      },
      {
        week: 2,
        focus: "M.5 bridge",
        tasks: ["Logarithms", "Trig signs", "Arithmetic sequences"],
        milestone: "Complete 50 mixed foundation questions"
      }
    ]
  }
];

export const chatMessages: ChatMessage[] = [
  {
    id: "chat-1",
    role: "student",
    mode: "GED",
    content: "Why is my GED Science answer wrong if the graph seems to support it?",
    createdAt: "2026-05-02T10:00:00.000Z"
  },
  {
    id: "chat-2",
    role: "assistant",
    mode: "GED",
    content:
      "The graph may support a narrow trend, but the answer choice used a stronger claim than the evidence allows. GED traps often change 'in this experiment' into 'always'.",
    createdAt: "2026-05-02T10:00:20.000Z"
  },
  {
    id: "chat-3",
    role: "student",
    mode: "Thai Math",
    content: "อธิบาย limit ข้อนี้แบบง่ายได้ไหม",
    createdAt: "2026-05-02T10:08:00.000Z"
  }
];

export const pricingPlans: PricingPlan[] = [
  {
    id: "free",
    name: "Free",
    price: "฿0",
    description: "Start practicing with essential explanations and a basic progress view.",
    features: [
      "Limited practice questions",
      "Basic explanations",
      "1 mock test per month",
      "Basic dashboard"
    ]
  },
  {
    id: "pro",
    name: "Pro",
    price: "฿790/mo",
    description: "Full exam prep for serious students preparing for GED, SAT, IELTS, and Thai Math.",
    highlighted: true,
    features: [
      "Unlimited practice",
      "Full GED / SAT / IELTS / Math courses",
      "AI tutor mock workflow",
      "Advanced Thai-English explanations",
      "Progress tracking",
      "Weak-topic analysis"
    ]
  },
  {
    id: "premium",
    name: "Premium / Tutor",
    price: "฿1,990/mo",
    description: "A higher-touch path for students and parents who want more guidance.",
    features: [
      "Everything in Pro",
      "AI study plan",
      "Writing feedback",
      "Speaking practice",
      "Parent progress view",
      "Tutor review placeholder"
    ]
  }
];

export const adminStats: AdminStats = {
  totalUsers: 12840,
  activeStudents: 3270,
  courses: courses.length,
  questions: questions.length,
  practiceTests: practiceTests.length,
  aiTutorMessages: 48720,
  averageScore: 72,
  revenuePlaceholder: "Payment not connected"
};

export const scoreTrendData = [
  { week: "W1", score: 54 },
  { week: "W2", score: 58 },
  { week: "W3", score: 64 },
  { week: "W4", score: 67 },
  { week: "W5", score: 73 },
  { week: "W6", score: 76 }
];

export const subjectPerformanceData = [
  { subject: "GED Math", score: 68 },
  { subject: "GED Science", score: 74 },
  { subject: "SAT Math", score: 81 },
  { subject: "IELTS Reading", score: 70 },
  { subject: "Thai Math", score: 65 }
];

export const weeklyStudyData = [
  { day: "Mon", minutes: 70 },
  { day: "Tue", minutes: 45 },
  { day: "Wed", minutes: 90 },
  { day: "Thu", minutes: 40 },
  { day: "Fri", minutes: 80 },
  { day: "Sat", minutes: 120 },
  { day: "Sun", minutes: 35 }
];

export const readinessRadarData = [
  { area: "Concepts", value: 74 },
  { area: "Timing", value: 62 },
  { area: "Accuracy", value: 76 },
  { area: "Strategy", value: 70 },
  { area: "Review", value: 82 }
];

export const accuracyByTypeData = [
  { name: "Single choice", value: 62 },
  { name: "Multi-select", value: 14 },
  { name: "Numeric", value: 16 },
  { name: "Passage", value: 8 }
];

export function getQuestionsForTest(testId: string) {
  const test = practiceTests.find((item) => item.id === testId) ?? practiceTests[0];
  return test.questionIds
    .map((id) => questions.find((question) => question.id === id))
    .filter((question): question is Question => Boolean(question));
}

export function getCourseById(id: string) {
  return courses.find((course) => course.id === id) ?? courses[0];
}

export function getLessonsByCourseId(courseId: string) {
  return lessons.filter((lesson) => lesson.courseId === courseId);
}

export function getPracticeTestById(id: string) {
  return practiceTests.find((test) => test.id === id) ?? practiceTests[0];
}

export function getResultById(id: string) {
  return testResults.find((result) => result.id === id) ?? testResults[0];
}
