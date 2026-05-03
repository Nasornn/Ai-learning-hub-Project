"use client";

import { Search } from "lucide-react";

import { Input } from "@/components/ui/input";

export interface CourseFilterState {
  search: string;
  examType: string;
  subject: string;
  level: string;
  language: string;
  duration: string;
}

const filterOptions = {
  examType: ["All", "GED", "SAT", "IELTS", "Thai School", "English"],
  subject: ["All", "Math", "Science", "RLA", "Social Studies", "Reading", "Writing", "Listening", "Speaking", "All Subjects", "All Skills"],
  level: ["All", "Beginner", "Intermediate", "Advanced", "Exam Mode"],
  language: ["All", "Thai", "English", "Bilingual"],
  duration: ["All", "Short", "Full Course", "Practice Test"]
};

export function CourseFilters({
  filters,
  onChange
}: {
  filters: CourseFilterState;
  onChange: (filters: CourseFilterState) => void;
}) {
  function setFilter(key: keyof CourseFilterState, value: string) {
    onChange({ ...filters, [key]: value });
  }

  return (
    <div className="rounded-xl border bg-white p-4 shadow-sm">
      <div className="relative">
        <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" aria-hidden="true" />
        <Input
          aria-label="Search courses"
          placeholder="Search GED Science, SAT Math, IELTS Writing..."
          className="pl-9"
          value={filters.search}
          onChange={(event) => setFilter("search", event.target.value)}
        />
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {(Object.keys(filterOptions) as Array<keyof typeof filterOptions>).map((key) => (
          <label key={key} className="grid gap-1 text-xs font-semibold uppercase text-muted-foreground">
            {key.replace(/([A-Z])/g, " $1")}
            <select
              className="h-10 rounded-lg border bg-white px-3 text-sm font-medium normal-case text-slate-900 focus:outline-none focus:ring-2 focus:ring-ring"
              value={filters[key]}
              onChange={(event) => setFilter(key, event.target.value)}
            >
              {filterOptions[key].map((option) => (
                <option key={option}>{option}</option>
              ))}
            </select>
          </label>
        ))}
      </div>
    </div>
  );
}
