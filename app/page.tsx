import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  Brain,
  CheckCircle2,
  ClipboardList,
  Languages,
  ShieldCheck,
  Timer
} from "lucide-react";

import { AITutorPreview } from "@/components/home/AITutorPreview";
import { ExamCategories } from "@/components/home/ExamCategories";
import { FeaturedCourses } from "@/components/home/FeaturedCourses";
import { Hero } from "@/components/home/Hero";
import { HowItWorks } from "@/components/home/HowItWorks";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pricingPlans, practiceTests, scoreTrendData } from "@/lib/mockData";

const whyItems = [
  {
    title: "Thai-English explanations",
    description: "Students can switch between English, Thai, simple explanation, exam strategy, and why-wrong review.",
    icon: Languages
  },
  {
    title: "Real exam reasoning",
    description: "Questions include passages, data tables, graph prompts, formula boxes, and realistic distractors.",
    icon: ClipboardList
  },
  {
    title: "Readiness analytics",
    description: "Weak topics, score trends, time usage, and recommended next steps stay visible after every test.",
    icon: BarChart3
  },
  {
    title: "Backend-ready architecture",
    description: "Mock services are isolated so Supabase, OpenAI, Stripe, Omise, or PromptPay can be added later.",
    icon: ShieldCheck
  }
];

const faqs = [
  {
    question: "Does DekReady AI support Thai explanations?",
    answer: "Yes. The mock content includes Thai and English explanations, plus modes for simple explanation, strategy, and mistake review."
  },
  {
    question: "Are payments connected?",
    answer: "No. Pricing is a realistic UI placeholder only, ready for Stripe, Omise, PromptPay, or another provider later."
  },
  {
    question: "Is real AI connected?",
    answer: "Not yet. The AI tutor uses a clean mock response service so a real OpenAI API layer can replace it later."
  },
  {
    question: "Can parents track progress?",
    answer: "The MVP includes parent-ready data concepts and dashboard metrics. A dedicated parent dashboard is a later phase."
  }
];

export default function HomePage() {
  return (
    <>
      <Hero />
      <ExamCategories />

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase text-blue-700">Why DekReady AI</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Serious exam prep that still feels clear.</h2>
            <p className="mt-3 text-muted-foreground thai-copy">
              DekReady AI is designed for Thai students preparing for GED, SAT, IELTS, high-school math, English skill improvement, and international university pathways.
            </p>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {whyItems.map((item) => {
              const Icon = item.icon;
              return (
                <Card key={item.title} className="transition hover:-translate-y-1 hover:shadow-soft">
                  <CardContent className="p-5">
                    <Icon className="h-6 w-6 text-blue-600" aria-hidden="true" />
                    <h3 className="mt-4 font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <HowItWorks />
      <FeaturedCourses />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-700">Realistic practice tests</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Timed exam modules with useful review.</h2>
          <p className="mt-4 text-muted-foreground">
            Practice mode shows explanations early. Exam mode keeps feedback hidden until submission, then turns mistakes into weak-topic drills.
          </p>
          <Button asChild className="mt-6">
            <Link href="/practice/ged-science-mini">
              Try a test
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="grid gap-4">
          {practiceTests.slice(0, 3).map((test) => (
            <Link key={test.id} href={`/practice/${test.id}`} className="rounded-xl border bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="flex flex-wrap items-center gap-2">
                <Badge variant="secondary">{test.exam}</Badge>
                <Badge variant={test.mode === "Exam" ? "warning" : "outline"}>{test.mode} mode</Badge>
                {test.module ? <Badge variant="success">{test.module}</Badge> : null}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-semibold">{test.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">{test.description}</p>
                </div>
                <div className="flex items-center gap-2 whitespace-nowrap text-sm font-semibold">
                  <Timer className="h-4 w-4 text-teal-600" aria-hidden="true" />
                  {test.durationMinutes} min
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <AITutorPreview />

      <section className="mx-auto grid max-w-7xl gap-8 px-4 py-16 sm:px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase text-blue-700">Student dashboard preview</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight">Progress that tells students what to do next.</h2>
          <p className="mt-4 text-muted-foreground">
            The dashboard combines score trend, subject performance, readiness level, weak topics, recent tests, and AI tutor history.
          </p>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {[
              ["Study streak", "12 days"],
              ["Average score", "76%"],
              ["Weakest subject", "Algebra"]
            ].map(([label, value]) => (
              <div key={label} className="rounded-xl border bg-white p-4">
                <p className="text-xs font-semibold uppercase text-muted-foreground">{label}</p>
                <p className="mt-2 text-2xl font-bold">{value}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-xl border bg-white p-5 shadow-soft">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold">Score trend</p>
              <p className="text-xs text-muted-foreground">Mock Recharts data preview</p>
            </div>
            <Brain className="h-6 w-6 text-blue-600" aria-hidden="true" />
          </div>
          <div className="mt-6 flex h-56 items-end gap-3">
            {scoreTrendData.map((item) => (
              <div key={item.week} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-t-lg bg-blue-600" style={{ height: `${item.score * 2}px` }} />
                <span className="text-xs text-muted-foreground">{item.week}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-semibold uppercase text-blue-700">Pricing preview</p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight">Start free, upgrade when the study load gets serious.</h2>
            </div>
            <Button asChild variant="outline">
              <Link href="/pricing">
                View pricing
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </Button>
          </div>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {pricingPlans.map((plan) => (
              <Card key={plan.id} className={plan.highlighted ? "border-blue-300 shadow-soft" : ""}>
                <CardContent className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-semibold">{plan.name}</h3>
                    {plan.highlighted ? <Badge>Best value</Badge> : null}
                  </div>
                  <p className="mt-3 text-3xl font-bold">{plan.price}</p>
                  <ul className="mt-5 grid gap-2 text-sm text-muted-foreground">
                    {plan.features.slice(0, 4).map((feature) => (
                      <li key={feature} className="flex items-center gap-2">
                        <CheckCircle2 className="h-4 w-4 text-emerald-600" aria-hidden="true" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase text-blue-700">FAQ</p>
        <h2 className="mt-2 text-center text-3xl font-bold tracking-tight">Built as an MVP, shaped like a real product.</h2>
        <div className="mt-8 grid gap-4">
          {faqs.map((faq) => (
            <details key={faq.question} className="rounded-xl border bg-white p-5 shadow-sm">
              <summary className="cursor-pointer font-semibold">{faq.question}</summary>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
