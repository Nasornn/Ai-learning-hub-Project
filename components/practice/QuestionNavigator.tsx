"use client";

import { Flag } from "lucide-react";

import { cn } from "@/lib/utils";

export function QuestionNavigator({
  total,
  currentIndex,
  answeredIndexes,
  flaggedIndexes,
  onSelect
}: {
  total: number;
  currentIndex: number;
  answeredIndexes: number[];
  flaggedIndexes: number[];
  onSelect: (index: number) => void;
}) {
  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold">Question navigation</p>
        <span className="text-xs text-muted-foreground">{answeredIndexes.length}/{total} answered</span>
      </div>
      <div className="mt-4 grid grid-cols-5 gap-2 sm:grid-cols-8 lg:grid-cols-5">
        {Array.from({ length: total }).map((_, index) => {
          const answered = answeredIndexes.includes(index);
          const flagged = flaggedIndexes.includes(index);
          const active = index === currentIndex;

          return (
            <button
              key={index}
              type="button"
              onClick={() => onSelect(index)}
              className={cn(
                "relative flex h-10 items-center justify-center rounded-lg border text-sm font-semibold transition",
                active && "border-blue-600 bg-blue-600 text-white",
                !active && answered && "border-emerald-200 bg-emerald-50 text-emerald-700",
                !active && !answered && "bg-white hover:bg-slate-50"
              )}
              aria-label={`Go to question ${index + 1}`}
            >
              {index + 1}
              {flagged ? <Flag className="absolute right-1 top-1 h-3 w-3 text-amber-500" aria-hidden="true" /> : null}
            </button>
          );
        })}
      </div>
    </div>
  );
}
