import { BarChart3, Bot, BookOpenCheck, ClipboardList, Users } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { adminStats } from "@/lib/mockData";

const stats = [
  { label: "Total users", value: adminStats.totalUsers.toLocaleString(), icon: Users },
  { label: "Active students", value: adminStats.activeStudents.toLocaleString(), icon: Users },
  { label: "Courses", value: String(adminStats.courses), icon: BookOpenCheck },
  { label: "Questions", value: String(adminStats.questions), icon: ClipboardList },
  { label: "Practice tests", value: String(adminStats.practiceTests), icon: BarChart3 },
  { label: "AI tutor messages", value: adminStats.aiTutorMessages.toLocaleString(), icon: Bot }
];

export function AdminStats() {
  return (
    <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <Card key={stat.label}>
            <CardContent className="p-5">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                  <p className="mt-2 text-3xl font-bold">{stat.value}</p>
                </div>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-700">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
