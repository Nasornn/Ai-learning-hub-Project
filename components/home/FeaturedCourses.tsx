import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { CourseCard } from "@/components/courses/CourseCard";
import { Button } from "@/components/ui/button";
import { courses } from "@/lib/mockData";

export function FeaturedCourses() {
  const featured = courses.filter((course) => course.featured).slice(0, 6);

  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase text-blue-700">Featured courses</p>
            <h2 className="mt-2 text-3xl font-bold tracking-tight">Start with a complete learning path.</h2>
          </div>
          <Button asChild variant="outline">
            <Link href="/courses">
              Browse library
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((course) => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </div>
    </section>
  );
}
