import { Calculator } from "lucide-react";

export function FormulaBox({ formulas }: { formulas?: string[] }) {
  if (!formulas?.length) return null;

  return (
    <div className="rounded-xl border bg-blue-50 p-4">
      <div className="flex items-center gap-2 text-sm font-semibold text-blue-800">
        <Calculator className="h-4 w-4" aria-hidden="true" />
        Formula box
      </div>
      <ul className="mt-3 grid gap-2 text-sm text-blue-950">
        {formulas.map((formula) => (
          <li key={formula} className="rounded-lg bg-white px-3 py-2 font-mono">
            {formula}
          </li>
        ))}
      </ul>
    </div>
  );
}
