"use client";

import { Bot, BookOpen, Calculator, GraduationCap, Languages, PenTool, type LucideIcon } from "lucide-react";

import type { TutorMode } from "@/lib/mockAi";
import { cn } from "@/lib/utils";

const modes: { mode: TutorMode; label: string; detail: string; icon: LucideIcon }[] = [
  { mode: "GED", label: "GED Tutor", detail: "Evidence and exam reasoning", icon: GraduationCap },
  { mode: "SAT", label: "SAT Tutor", detail: "Digital modules and strategy", icon: Calculator },
  { mode: "IELTS", label: "IELTS Tutor", detail: "Band feedback and skills", icon: PenTool },
  { mode: "Thai Math", label: "Thai Math Tutor", detail: "M.4-M.6 bilingual math", icon: BookOpen },
  { mode: "English", label: "English Grammar Tutor", detail: "Grammar and academic English", icon: Languages },
  { mode: "Study Coach", label: "General Study Coach", detail: "Planning, habits, next steps", icon: Bot }
];

export function TutorModeSelector({
  selectedMode,
  onSelect
}: {
  selectedMode: TutorMode;
  onSelect: (mode: TutorMode) => void;
}) {
  return (
    <aside className="rounded-xl border bg-white p-3 shadow-sm">
      <p className="px-2 pb-2 text-sm font-semibold">Tutor mode</p>
      <div className="grid gap-1">
        {modes.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.mode}
              type="button"
              onClick={() => onSelect(item.mode)}
              className={cn(
                "flex items-start gap-3 rounded-xl px-3 py-3 text-left transition hover:bg-slate-50",
                selectedMode === item.mode && "bg-blue-50 text-blue-800"
              )}
            >
              <Icon className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>
                <span className="block text-sm font-semibold">{item.label}</span>
                <span className="block text-xs text-muted-foreground">{item.detail}</span>
              </span>
            </button>
          );
        })}
      </div>
    </aside>
  );
}
