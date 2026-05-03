"use client";

import { useMemo, useState } from "react";
import { BookOpenCheck } from "lucide-react";

import { CourseCard } from "@/components/courses/CourseCard";
import { CourseFilters, type CourseFilterState } from "@/components/courses/CourseFilters";
import { Badge } from "@/components/ui/badge";
import { courses } from "@/lib/mockData";

const initialFilters: CourseFilterState = {
  search: "",
  examType: "All",
  subject: "All",
  level: "All",
  language: "All",
  duration: "All"
};

export default function CoursesPage() {
  const [filters, setFilters] = useState(initialFilters);

  const filteredCourses = useMemo(() => {
    const search = filters.search.toLowerCase().trim();

    return courses.filter((course) => {
      const matchesSearch =
        !search ||
        [course.title, course.description, course.examType, course.subject, ...course.topics]
          .join(" ")
          .toLowerCase()
          .includes(search);
      const matchesExam = filters.examType === "All" || course.examType === filters.examType;
      const matchesSubject = filters.subject === "All" || course.subject === filters.subject;
      const matchesLevel = filters.level === "All" || course.level === filters.level;
      const matchesLanguage = filters.language === "All" || course.language === filters.language;
      const matchesDuration = filters.duration === "All" || course.duration === filters.duration;

      return matchesSearch && matchesExam && matchesSubject && matchesLevel && matchesLanguage && matchesDuration;
    });
  }, [filters]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
        <div>
          <Badge variant="secondary" className="gap-2 bg-blue-50 text-blue-700">
            <BookOpenCheck className="h-3.5 w-3.5" aria-hidden="true" />
            Course Library
          </Badge>
          <h1 className="mt-4 text-4xl font-bold tracking-tight">Find the right course for your next exam target.</h1>
          <p className="mt-3 max-w-3xl text-muted-foreground thai-copy">
            Search and filter complete mock courses for GED, SAT, IELTS, Thai high-school math, English grammar, and university preparation.
          </p>
        </div>
        <div className="rounded-xl border bg-white p-4 text-sm shadow-sm">
          <p className="font-semibold">{filteredCourses.length} courses</p>
          <p className="text-muted-foreground">Filtered from {courses.length} total paths</p>
        </div>
      </div>

      <div className="mt-8">
        <CourseFilters filters={filters} onChange={setFilters} />
      </div>

      {filteredCourses.length ? (
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      ) : (
        <div className="mt-8 rounded-xl border bg-white p-10 text-center shadow-sm">
          <h2 className="text-xl font-semibold">No courses match these filters yet.</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Try clearing one filter or search by exam name, topic, or subject.
          </p>
        </div>
      )}
    </div>
  );
}
