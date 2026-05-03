import Link from "next/link";
import { BrainCircuit, Menu, Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/practice/ged-science-mini", label: "Practice Tests" },
  { href: "/tutor", label: "AI Tutor" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/study-plan", label: "Study Plan" },
  { href: "/pricing", label: "Pricing" }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b bg-white/[0.86] backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" aria-label="DekReady AI home">
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
            <BrainCircuit className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-base font-bold tracking-tight">DekReady AI</span>
            <span className="hidden text-xs text-muted-foreground sm:block">
              Thailand exam prep
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="ghost">
            <Link href="/login">Login</Link>
          </Button>
          <Button asChild>
            <Link href="/signup">
              <Sparkles className="h-4 w-4" aria-hidden="true" />
              Sign Up
            </Link>
          </Button>
        </div>

        <Button variant="outline" size="icon" className="md:hidden" aria-label="Open mobile menu">
          <Menu className="h-5 w-5" aria-hidden="true" />
        </Button>
      </div>
    </header>
  );
}
