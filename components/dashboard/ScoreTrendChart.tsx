"use client";

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

import { Card, CardContent } from "@/components/ui/card";
import { scoreTrendData } from "@/lib/mockData";

export function ScoreTrendChart() {
  return (
    <Card>
      <CardContent className="p-5">
        <div>
          <h2 className="font-semibold">Score trend</h2>
          <p className="text-sm text-muted-foreground">Line chart: weekly average score</p>
        </div>
        <div className="mt-4 h-72">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={scoreTrendData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
              <XAxis dataKey="week" stroke="#64748b" />
              <YAxis domain={[40, 100]} stroke="#64748b" />
              <Tooltip />
              <Line type="monotone" dataKey="score" stroke="#2563eb" strokeWidth={3} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
