import Link from "next/link";
import { ArrowRight, Bot, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const quickModes = [
  "Explain in Thai",
  "Why my answer is wrong",
  "Exam strategy",
  "Give similar question",
  "Make this harder"
];

export function AITutorPreview() {
  return (
    <section className="bg-slate-950 py-16 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-teal-300">AI tutor preview</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Bilingual explanations for the moment students get stuck.</h2>
          <p className="mt-4 max-w-xl text-slate-300 thai-copy">
            Students can ask for Thai explanation, English explanation, simple mode, exam strategy, why the answer is wrong, a similar question, or a harder version.
          </p>
          <Button asChild className="mt-6 bg-white text-slate-950 hover:bg-slate-100">
            <Link href="/tutor">
              Open AI Tutor
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>

        <Card className="border-white/10 bg-white/[0.08] text-white">
          <CardContent className="p-5">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-500">
                <Bot className="h-5 w-5" aria-hidden="true" />
              </span>
              <div>
                <p className="font-semibold">Thai Math Tutor</p>
                <p className="text-sm text-slate-300">Step-by-step with common mistake review</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3">
              <div className="max-w-[82%] rounded-xl bg-white/10 p-4 text-sm leading-6">
                อธิบาย limit ข้อนี้แบบง่ายได้ไหม?
              </div>
              <div className="ml-auto max-w-[88%] rounded-xl bg-white p-4 text-sm leading-6 text-slate-900 thai-copy">
                <div className="mb-2 flex items-center gap-2 font-semibold text-blue-700">
                  <Sparkles className="h-4 w-4" aria-hidden="true" />
                  Simple explanation
                </div>
                แยกตัวประกอบก่อน แล้วตัดพจน์ที่ทำให้หารด้วยศูนย์ จากนั้นแทนค่า x ได้เลย. In English: remove the removable factor before substituting.
              </div>
            </div>
            <div className="mt-5 flex flex-wrap gap-2">
              {quickModes.map((mode) => (
                <span key={mode} className="rounded-full border border-white/20 px-3 py-1 text-xs text-slate-200">
                  {mode}
                </span>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
