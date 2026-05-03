"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis
} from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import {
  accuracyByTypeData,
  readinessRadarData,
  subjectPerformanceData,
  weeklyStudyData
} from "@/lib/mockData";

const pieColors = ["#2563eb", "#14b8a6", "#f59e0b", "#ef4444"];

export function SubjectProgressChart() {
  return (
    <div className="grid gap-5 xl:grid-cols-2">
      <Card>
        <CardContent className="p-5">
          <h2 className="font-semibold">Subject performance</h2>
          <p className="text-sm text-muted-foreground">Bar chart: accuracy by exam area</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={subjectPerformanceData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="subject" stroke="#64748b" tick={{ fontSize: 11 }} />
                <YAxis domain={[0, 100]} stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="score" fill="#2563eb" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <h2 className="font-semibold">Weekly study time</h2>
          <p className="text-sm text-muted-foreground">Bar chart: minutes studied per day</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyStudyData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="day" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip />
                <Bar dataKey="minutes" fill="#14b8a6" radius={[8, 8, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <h2 className="font-semibold">Exam readiness</h2>
          <p className="text-sm text-muted-foreground">Radar chart: readiness dimensions</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={readinessRadarData}>
                <PolarGrid />
                <PolarAngleAxis dataKey="area" tick={{ fontSize: 12 }} />
                <Radar dataKey="value" stroke="#2563eb" fill="#2563eb" fillOpacity={0.28} />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="p-5">
          <h2 className="font-semibold">Accuracy by question type</h2>
          <p className="text-sm text-muted-foreground">Pie chart: correct-answer distribution</p>
          <div className="mt-4 h-72">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={accuracyByTypeData} dataKey="value" nameKey="name" innerRadius={58} outerRadius={92} paddingAngle={3}>
                  {accuracyByTypeData.map((entry, index) => (
                    <Cell key={entry.name} fill={pieColors[index % pieColors.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
