"use client";

import { Check } from "lucide-react";

import { cn } from "@/lib/utils";

export function AnswerChoice({
  choice,
  selected,
  multiple,
  onToggle
}: {
  choice: string;
  selected: boolean;
  multiple?: boolean;
  onToggle: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      className={cn(
        "flex w-full items-start gap-3 rounded-xl border bg-white p-4 text-left text-sm leading-6 transition hover:border-blue-300 hover:bg-blue-50",
        selected && "border-blue-500 bg-blue-50 shadow-focus"
      )}
      aria-pressed={selected}
    >
      <span
        className={cn(
          "mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center border text-white",
          multiple ? "rounded-md" : "rounded-full",
          selected ? "border-blue-600 bg-blue-600" : "border-slate-300 bg-white"
        )}
      >
        {selected ? <Check className="h-3.5 w-3.5" aria-hidden="true" /> : null}
      </span>
      <span>{choice}</span>
    </button>
  );
}
