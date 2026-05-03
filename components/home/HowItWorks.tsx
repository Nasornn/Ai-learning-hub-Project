import { Bot, ChartNoAxesCombined, ClipboardCheck, Languages } from "lucide-react";

const steps = [
  {
    title: "Choose an exam path",
    description: "Pick GED, SAT, IELTS, Thai Math, English grammar, or university prep.",
    icon: ClipboardCheck
  },
  {
    title: "Practice realistic questions",
    description: "Work through timed modules, passage-based questions, tables, formulas, and graph prompts.",
    icon: ChartNoAxesCombined
  },
  {
    title: "Review in Thai or English",
    description: "Switch between simple explanation, exam strategy, why wrong, similar question, and harder mode.",
    icon: Languages
  },
  {
    title: "Let AI guide the next step",
    description: "Use mock AI tutor responses and readiness logic now; connect real APIs later.",
    icon: Bot
  }
];

export function HowItWorks() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-2xl">
        <p className="text-sm font-semibold uppercase text-blue-700">How it works</p>
        <h2 className="mt-2 text-3xl font-bold tracking-tight">A study loop built around mistakes.</h2>
        <p className="mt-3 text-muted-foreground">
          Students always know what they are learning, why an answer is wrong, and what to do next.
        </p>
      </div>
      <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <div key={step.title} className="rounded-xl border bg-white p-5 shadow-sm">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                <Icon className="h-5 w-5" aria-hidden="true" />
              </div>
              <p className="mt-5 text-sm font-semibold text-muted-foreground">Step {index + 1}</p>
              <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
