export type TutorMode = "GED" | "SAT" | "IELTS" | "Thai Math" | "English" | "Study Coach";

export function generateMockAiResponse(message: string, mode: TutorMode) {
  const prompt = message.toLowerCase();

  if (mode === "Thai Math") {
    return [
      "อธิบายแบบไทย-อังกฤษ:",
      "โจทย์นี้ให้หา pattern ก่อน แล้วค่อยเลือกสูตรที่ตรงกับสถานการณ์",
      "Formula: ถ้าเป็นลำดับเลขคณิต ใช้ an = a1 + (n - 1)d",
      "Step-by-step: 1) ระบุค่าแรก 2) หาผลต่างร่วม 3) แทนค่า n 4) ตรวจว่าคำตอบสมเหตุสมผล",
      "Common mistake: นักเรียนมักใช้ n แทน n - 1 ทำให้คำตอบเกินไปหนึ่งช่วง",
      "Similar question: If a sequence starts at 7 and increases by 4 each term, what is the 20th term?"
    ].join("\n\n");
  }

  if (mode === "IELTS") {
    return [
      "Estimated band: 6.5-7.0 based on idea development and grammar control.",
      "Corrections: make the thesis more specific and avoid repeating the same linking phrase.",
      "Vocabulary upgrade: replace 'many people think' with 'a common argument is that'.",
      "Better answer: A stronger response would compare both sides, then state a clear position in the final sentence of the introduction.",
      prompt.includes("task 1")
        ? "For Task 1, group the biggest trends first before listing numbers."
        : "For Task 2, keep one main idea per body paragraph and support it with a concrete example."
    ].join("\n\n");
  }

  if (mode === "GED") {
    return [
      "GED reasoning approach:",
      "Start with the evidence in the passage, table, or graph. The correct choice must be supported directly, not just sound familiar.",
      "Why wrong answers are wrong: GED distractors often copy a word from the text but change the relationship or conclusion.",
      "Test strategy: eliminate answers that are too extreme, then compare the final two choices against the data.",
      "Next step: try a similar question with a longer passage and force yourself to cite the exact evidence."
    ].join("\n\n");
  }

  if (mode === "SAT") {
    return [
      "SAT step-by-step:",
      "1. Translate the question into a small equation or rule.",
      "2. Solve symbolically before looking at answer choices.",
      "3. Check whether the question asks for x, an expression, or a real-world value.",
      prompt.includes("grammar")
        ? "For Reading and Writing, test punctuation and subject-verb agreement first."
        : "For Math, plug the answer back in if the algebra gets messy.",
      "Make it harder: solve the same idea with variables instead of numbers."
    ].join("\n\n");
  }

  if (mode === "English") {
    return [
      "English coach response:",
      "The main issue is clarity. Keep the sentence short, choose one verb tense, and make the subject easy to identify.",
      "Simple version: say the idea in plain English first, then upgrade vocabulary only where it improves precision.",
      "Practice: rewrite the sentence using because, although, and therefore."
    ].join("\n\n");
  }

  return [
    "Study coach plan:",
    "Use a 25-minute focus block for one weak topic, then review every mistake immediately.",
    "Today: one concept lesson, ten mixed questions, and a five-minute reflection in Thai or English.",
    "Tomorrow: retry only the questions you missed, then ask for a similar harder question."
  ].join("\n\n");
}
