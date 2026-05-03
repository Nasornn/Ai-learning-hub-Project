import Link from "next/link";
import { ArrowRight, Bot, CheckCircle2, Gauge, Languages, PlayCircle, Timer } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const heroStats = [
  "GED, SAT, IELTS, M.4-M.6 Math",
  "AI explanations",
  "Realistic exam mode",
  "Thai-English support"
];

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b bg-white">
      <div className="absolute inset-0 dashboard-grid opacity-70" aria-hidden="true" />
      <div className="absolute inset-y-0 right-0 hidden w-1/2 bg-[radial-gradient(circle_at_center,rgba(20,184,166,0.16),transparent_28rem)] lg:block" />
      <div className="relative mx-auto grid min-h-[660px] max-w-7xl content-center gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8">
        <div className="max-w-3xl animate-fade-up">
          <Badge variant="secondary" className="mb-5 gap-2 bg-blue-50 text-blue-700">
            <Bot className="h-3.5 w-3.5" aria-hidden="true" />
            Thailand&apos;s AI-powered exam prep platform
          </Badge>
          <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl">
            Prepare for GED, SAT, IELTS, and Thai High School Math with AI.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">
            Practice realistic exam questions, get Thai-English explanations, track your weak points, and study smarter with AI.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/practice/ged-science-mini">
                <PlayCircle className="h-5 w-5" aria-hidden="true" />
                Start Free Practice
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/courses">
                View Courses
                <ArrowRight className="h-5 w-5" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {heroStats.map((stat) => (
              <div key={stat} className="flex items-center gap-2 text-sm font-medium text-slate-700">
                <CheckCircle2 className="h-4 w-4 text-teal-600" aria-hidden="true" />
                {stat}
              </div>
            ))}
          </div>
        </div>

        <div className="relative min-h-[420px] lg:min-h-[560px]" aria-label="DekReady AI dashboard preview">
          <div className="absolute left-0 top-4 w-[88%] rounded-2xl border bg-white/[0.88] p-4 shadow-soft backdrop-blur sm:left-8 lg:left-0">
            <div className="flex items-center justify-between border-b pb-3">
              <div>
                <p className="text-xs font-semibold uppercase text-blue-700">Readiness</p>
                <p className="mt-1 text-2xl font-bold">Almost Ready</p>
              </div>
              <Gauge className="h-8 w-8 text-blue-600" aria-hidden="true" />
            </div>
            <div className="mt-4 grid gap-3">
              {[
                ["GED Science", "76%"],
                ["SAT Math", "81%"],
                ["IELTS Reading", "70%"]
              ].map(([label, value]) => (
                <div key={label}>
                  <div className="flex justify-between text-sm">
                    <span>{label}</span>
                    <span className="font-semibold">{value}</span>
                  </div>
                  <div className="mt-2 h-2 rounded-full bg-slate-100">
                    <div className="h-2 rounded-full bg-blue-600" style={{ width: value }} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="absolute bottom-14 right-0 w-[82%] rounded-2xl border bg-slate-950 p-5 text-white shadow-soft">
            <div className="flex items-center gap-2 text-sm text-blue-100">
              <Languages className="h-4 w-4" aria-hidden="true" />
              Explain in Thai + English
            </div>
            <p className="mt-4 text-sm leading-6 text-slate-200 thai-copy">
              เพราะโจทย์ใช้คำว่า always คำตอบต้องถูกทุกกรณี แต่ข้อมูลทดลองมีเพียงชนิดพืชเดียว จึงสรุปกว้างเกินไป.
            </p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Why wrong?", "Exam strategy", "Similar question"].map((item) => (
                <span key={item} className="rounded-full bg-white/10 px-3 py-1 text-xs">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div className="absolute right-10 top-40 rounded-xl border bg-white px-4 py-3 shadow-soft">
            <div className="flex items-center gap-3">
              <Timer className="h-5 w-5 text-teal-600" aria-hidden="true" />
              <div>
                <p className="text-xs text-muted-foreground">Exam timer</p>
                <p className="font-semibold">24:18 remaining</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
