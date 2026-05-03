"use client";

import { useEffect, useMemo, useState } from "react";
import { Bot, Paperclip, Send, Sparkles, UserRound } from "lucide-react";

import { QuickPromptButtons } from "@/components/tutor/QuickPromptButtons";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { chatMessages } from "@/lib/mockData";
import { generateMockAiResponse, type TutorMode } from "@/lib/mockAi";
import { cn } from "@/lib/utils";

interface LocalMessage {
  id: string;
  role: "student" | "assistant";
  content: string;
  mode: TutorMode;
}

const suggestedPrompts = [
  "Explain this GED Science graph like I am taking the real exam.",
  "Show SAT Math steps and the fastest strategy.",
  "Give IELTS Writing Task 2 band feedback.",
  "อธิบายโจทย์ตรีโกณ ม.5 เป็นภาษาไทยและอังกฤษ"
];

export function ChatWindow({ mode }: { mode: TutorMode }) {
  const initialMessages = useMemo<LocalMessage[]>(
    () =>
      chatMessages
        .filter((message) => message.mode === mode)
        .map((message) => ({
          id: message.id,
          role: message.role,
          content: message.content,
          mode: message.mode
        })),
    [mode]
  );
  const [messages, setMessages] = useState<LocalMessage[]>(initialMessages);
  const [input, setInput] = useState("");

  useEffect(() => {
    setMessages(initialMessages);
  }, [initialMessages]);

  function sendMessage(content: string) {
    const trimmed = content.trim();
    if (!trimmed) return;

    const studentMessage: LocalMessage = {
      id: `student-${Date.now()}`,
      role: "student",
      content: trimmed,
      mode
    };
    const assistantMessage: LocalMessage = {
      id: `assistant-${Date.now()}`,
      role: "assistant",
      content: generateMockAiResponse(trimmed, mode),
      mode
    };

    setMessages((value) => [...value, studentMessage, assistantMessage]);
    setInput("");
  }

  return (
    <section className="flex min-h-[720px] flex-col rounded-xl border bg-white shadow-sm">
      <div className="flex flex-col gap-4 border-b p-5">
        <div className="flex flex-col justify-between gap-3 md:flex-row md:items-center">
          <div>
            <p className="text-sm font-semibold text-blue-700">{mode} mode</p>
            <h1 className="mt-1 text-2xl font-bold tracking-tight">AI Tutor</h1>
            <p className="mt-1 text-sm text-muted-foreground">
              Mock responses for GED, SAT, IELTS, Thai Math, English, and study coaching.
            </p>
          </div>
          <Button variant="outline">
            <Paperclip className="h-4 w-4" aria-hidden="true" />
            Attach question
          </Button>
        </div>
        <QuickPromptButtons onPrompt={(prompt) => sendMessage(prompt)} />
      </div>

      <div className="flex-1 overflow-y-auto p-5">
        {!messages.length ? (
          <div className="rounded-xl border bg-slate-50 p-5">
            <div className="flex items-center gap-2 font-semibold">
              <Sparkles className="h-5 w-5 text-blue-600" aria-hidden="true" />
              Suggested prompts
            </div>
            <div className="mt-4 grid gap-2">
              {suggestedPrompts.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-lg bg-white px-4 py-3 text-left text-sm shadow-sm transition hover:bg-blue-50"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        <div className="grid gap-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex gap-3",
                message.role === "student" ? "justify-end" : "justify-start"
              )}
            >
              {message.role === "assistant" ? (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-white">
                  <Bot className="h-4 w-4" aria-hidden="true" />
                </span>
              ) : null}
              <div
                className={cn(
                  "max-w-[86%] whitespace-pre-line rounded-xl px-4 py-3 text-sm leading-6 thai-copy",
                  message.role === "student"
                    ? "bg-slate-950 text-white"
                    : "bg-slate-50 text-slate-900"
                )}
              >
                {message.content}
              </div>
              {message.role === "student" ? (
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-100 text-slate-700">
                  <UserRound className="h-4 w-4" aria-hidden="true" />
                </span>
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="border-t p-4">
        <div className="flex flex-col gap-3 md:flex-row">
          <Textarea
            aria-label="Ask the AI tutor"
            placeholder="Ask a question, paste a wrong answer, or request an explanation..."
            value={input}
            onChange={(event) => setInput(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter" && (event.metaKey || event.ctrlKey)) {
                sendMessage(input);
              }
            }}
          />
          <Button className="md:self-end" onClick={() => sendMessage(input)}>
            <Send className="h-4 w-4" aria-hidden="true" />
            Send
          </Button>
        </div>
      </div>
    </section>
  );
}
