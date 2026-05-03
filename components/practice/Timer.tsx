"use client";

import { useEffect, useMemo, useState } from "react";
import { TimerIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function Timer({ minutes, paused }: { minutes: number; paused?: boolean }) {
  const [secondsLeft, setSecondsLeft] = useState(minutes * 60);

  useEffect(() => {
    if (paused) return;
    const interval = window.setInterval(() => {
      setSecondsLeft((value) => Math.max(0, value - 1));
    }, 1000);

    return () => window.clearInterval(interval);
  }, [paused]);

  const label = useMemo(() => {
    const minutesPart = Math.floor(secondsLeft / 60)
      .toString()
      .padStart(2, "0");
    const secondsPart = (secondsLeft % 60).toString().padStart(2, "0");
    return `${minutesPart}:${secondsPart}`;
  }, [secondsLeft]);

  return (
    <div
      className={cn(
        "flex items-center gap-2 rounded-lg border bg-white px-3 py-2 text-sm font-semibold",
        secondsLeft < 300 && "border-red-200 bg-red-50 text-red-700"
      )}
      aria-live="polite"
    >
      <TimerIcon className="h-4 w-4" aria-hidden="true" />
      {label}
    </div>
  );
}
