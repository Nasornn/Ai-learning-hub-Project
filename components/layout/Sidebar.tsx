import Link from "next/link";
import type { LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";

export function Sidebar({
  items,
  activeHref
}: {
  items: { href: string; label: string; icon: LucideIcon }[];
  activeHref?: string;
}) {
  return (
    <aside className="rounded-xl border bg-white p-2 shadow-sm">
      <nav className="grid gap-1" aria-label="Section navigation">
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "flex items-center gap-3 rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition hover:bg-slate-100 hover:text-slate-950",
                activeHref === item.href && "bg-blue-50 text-blue-700"
              )}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              {item.label}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}
