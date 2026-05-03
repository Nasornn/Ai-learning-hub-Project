"use client";

import { PlusCircle } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { courses } from "@/lib/mockData";

export function CourseManager() {
  return (
    <div className="grid gap-5">
      <div className="rounded-xl border bg-white p-5 shadow-sm">
        <div>
          <h2 className="text-xl font-semibold">Add course</h2>
          <p className="mt-1 text-sm text-muted-foreground">Placeholder form for future Supabase course records.</p>
        </div>
        <div className="mt-4 grid gap-4 md:grid-cols-3">
          <Input placeholder="Course title" />
          <Input placeholder="Exam type" />
          <Input placeholder="Subject" />
        </div>
        <Button type="button" className="mt-4">
          <PlusCircle className="h-4 w-4" aria-hidden="true" />
          Add mock course
        </Button>
      </div>

      <div className="grid gap-3">
        {courses.slice(0, 8).map((course) => (
          <Card key={course.id}>
            <CardContent className="flex flex-col justify-between gap-4 p-4 md:flex-row md:items-center">
              <div>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">{course.examType}</Badge>
                  <Badge variant="outline">{course.level}</Badge>
                </div>
                <h3 className="mt-2 font-semibold">{course.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{course.lessons} lessons / {course.practiceQuestions} questions</p>
              </div>
              <div className="flex gap-2">
                <Button variant="outline" size="sm">Add lesson</Button>
                <Button variant="outline" size="sm">Add test</Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
