import Link from "next/link";
import { BrainCircuit, Facebook, Instagram, Mail } from "lucide-react";

const footerLinks = [
  { href: "/courses", label: "Courses" },
  { href: "/practice/ged-science-mini", label: "Practice Tests" },
  { href: "/tutor", label: "AI Tutor" },
  { href: "/dashboard", label: "Dashboard" },
  { href: "/pricing", label: "Pricing" },
  { href: "/admin", label: "Admin" }
];

export function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-[1.2fr_1fr] lg:px-8">
        <div>
          <div className="flex items-center gap-2">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-blue-600 text-white">
              <BrainCircuit className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <p className="font-bold">DekReady AI</p>
              <p className="text-sm text-muted-foreground">
                Thailand&apos;s AI-powered exam prep platform for GED, SAT, IELTS, and high school math.
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-xl text-sm leading-6 text-muted-foreground thai-copy">
            Built for Thai students who need serious exam preparation, bilingual explanations, and a clear path from weak-topic review to international university readiness.
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <p className="text-sm font-semibold">Platform</p>
            <div className="mt-3 grid gap-2">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-slate-950">
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="text-sm font-semibold">Contact placeholder</p>
            <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">
              <Mail className="h-4 w-4" aria-hidden="true" />
              hello@dekready.ai
            </div>
            <div className="mt-4 flex gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground">
                <Facebook className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border text-muted-foreground">
                <Instagram className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
