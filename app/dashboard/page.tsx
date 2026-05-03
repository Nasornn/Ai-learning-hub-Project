import { Award, BookOpenCheck, Clock, Flame, Gauge, GraduationCap, Target, Trophy } from "lucide-react";

import { RecentActivity } from "@/components/dashboard/RecentActivity";
import { ScoreTrendChart } from "@/components/dashboard/ScoreTrendChart";
import { StatCard } from "@/components/dashboard/StatCard";
import { SubjectProgressChart } from "@/components/dashboard/SubjectProgressChart";
import { Badge } from "@/components/ui/badge";

const stats = [
  { label: "Study streak", value: "12 days", detail: "Best streak this month", icon: Flame },
  { label: "Average score", value: "76%", detail: "+8% over six weeks", icon: Trophy },
  { label: "Completed tests", value: "18", detail: "4 full simulations", icon: BookOpenCheck },
  { label: "Time studied", value: "42h", detail: "Last 30 days", icon: Clock },
  { label: "Readiness level", value: "Ready", detail: "GED Science target", icon: Gauge },
  { label: "Weakest subject", value: "Algebra", detail: "Needs 2 drills", icon: Target },
  { label: "Strongest subject", value: "Reading", detail: "88% accuracy", icon: Award },
  { label: "Next pathway", value: "IELTS", detail: "Academic prep queued", icon: GraduationCap }
];

export default function DashboardPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Badge variant="secondary" className="bg-blue-50 text-blue-700">Student Dashboard</Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Maya&apos;s exam readiness cockpit.</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground thai-copy">
            Progress tracking for students and parent-ready insights across scores, weak topics, study time, and tutor history.
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>

      <div className="mt-8 grid gap-5 xl:grid-cols-[0.95fr_1.05fr]">
        <ScoreTrendChart />
        <RecentActivity />
      </div>

      <div className="mt-8">
        <SubjectProgressChart />
      </div>
    </div>
  );
}
