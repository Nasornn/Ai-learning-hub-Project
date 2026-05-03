"use client";

import { useState } from "react";

import { ChatWindow } from "@/components/tutor/ChatWindow";
import { TutorModeSelector } from "@/components/tutor/TutorModeSelector";
import type { TutorMode } from "@/lib/mockAi";

export default function TutorPage() {
  const [mode, setMode] = useState<TutorMode>("GED");

  return (
    <div className="mx-auto grid max-w-7xl gap-5 px-4 py-10 sm:px-6 lg:grid-cols-[300px_1fr] lg:px-8">
      <TutorModeSelector selectedMode={mode} onSelect={setMode} />
      <ChatWindow mode={mode} />
    </div>
  );
}
