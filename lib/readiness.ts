import type { ReadinessLevel } from "@/lib/types";

export function getReadinessLevel(percentage: number): ReadinessLevel {
  if (percentage < 50) return "Not Ready";
  if (percentage < 65) return "Building Foundation";
  if (percentage < 75) return "Almost Ready";
  if (percentage < 85) return "Ready";
  return "Exam Mode Ready";
}

export function getReadinessDescription(level: ReadinessLevel) {
  const copy: Record<ReadinessLevel, string> = {
    "Not Ready": "Focus on foundations before timed exam practice.",
    "Building Foundation": "You are improving, but weak topics still cost points.",
    "Almost Ready": "You can start mixed timed sets while reviewing mistakes.",
    Ready: "Your score is competitive. Keep pressure-testing under exam timing.",
    "Exam Mode Ready": "You are ready for full simulations and final review."
  };

  return copy[level];
}

export function estimateIeltsWritingBand(score: number) {
  if (score < 50) return "4.0-5.0 foundation";
  if (score < 65) return "5.5-6.0 developing";
  if (score < 78) return "6.5-7.0 good";
  return "7.5+ advanced";
}
