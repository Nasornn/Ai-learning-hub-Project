"use client";

import { Bot, ChevronsUp, Languages, Lightbulb, Repeat2, Route, StepForward, XCircle } from "lucide-react";

import { Button } from "@/components/ui/button";

const prompts = [
  { label: "Explain in Thai", icon: Languages },
  { label: "Explain in English", icon: Languages },
  { label: "Make it simpler", icon: Lightbulb },
  { label: "Give similar question", icon: Repeat2 },
  { label: "Make it harder", icon: ChevronsUp },
  { label: "Exam strategy", icon: Route },
  { label: "Why is my answer wrong?", icon: XCircle },
  { label: "Teach step-by-step", icon: StepForward }
];

export function QuickPromptButtons({ onPrompt }: { onPrompt: (prompt: string) => void }) {
  return (
    <div className="flex flex-wrap gap-2">
      {prompts.map((prompt) => {
        const Icon = prompt.icon ?? Bot;
        return (
          <Button key={prompt.label} type="button" variant="outline" size="sm" onClick={() => onPrompt(prompt.label)}>
            <Icon className="h-3.5 w-3.5" aria-hidden="true" />
            {prompt.label}
          </Button>
        );
      })}
    </div>
  );
}
