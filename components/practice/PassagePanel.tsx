import { BarChart3, FileText, Table2 } from "lucide-react";

import { FormulaBox } from "@/components/practice/FormulaBox";
import type { Question } from "@/lib/types";

export function PassagePanel({ question }: { question: Question }) {
  const hasStimulus = question.passage || question.dataTable || question.graphDescription || question.formulaBox;

  return (
    <aside className="rounded-xl border bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between gap-3 border-b pb-4">
        <div>
          <p className="text-sm font-semibold">Stimulus</p>
          <p className="text-xs text-muted-foreground">Passage, data, graph, or formula support</p>
        </div>
        <FileText className="h-5 w-5 text-blue-600" aria-hidden="true" />
      </div>

      {!hasStimulus ? (
        <p className="mt-5 text-sm leading-6 text-muted-foreground">
          This question does not include a separate passage or data source. Solve from the question stem.
        </p>
      ) : null}

      {question.passage ? (
        <div className="mt-5 rounded-xl bg-slate-50 p-4">
          <p className="text-xs font-semibold uppercase text-muted-foreground">Passage</p>
          <p className="mt-2 text-sm leading-7 thai-copy">{question.passage}</p>
        </div>
      ) : null}

      {question.dataTable ? (
        <div className="mt-5 overflow-hidden rounded-xl border">
          <div className="flex items-center gap-2 bg-slate-50 px-4 py-3 text-sm font-semibold">
            <Table2 className="h-4 w-4 text-blue-600" aria-hidden="true" />
            Data table
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-white text-muted-foreground">
                <tr>
                  {Object.keys(question.dataTable[0] ?? {}).map((key) => (
                    <th key={key} className="border-t px-4 py-3 font-semibold">
                      {key}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {question.dataTable.map((row, index) => (
                  <tr key={index} className="odd:bg-slate-50">
                    {Object.values(row).map((value, valueIndex) => (
                      <td key={valueIndex} className="border-t px-4 py-3">
                        {value}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : null}

      {question.graphDescription ? (
        <div className="mt-5 rounded-xl border bg-slate-50 p-4">
          <div className="flex items-center gap-2 text-sm font-semibold">
            <BarChart3 className="h-4 w-4 text-teal-600" aria-hidden="true" />
            Graph interpretation placeholder
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">{question.graphDescription}</p>
          <div className="mt-4 flex h-36 items-end gap-3 rounded-lg bg-white p-3">
            {[48, 70, 56, 84, 62].map((height, index) => (
              <div key={index} className="flex-1 rounded-t-md bg-teal-500/80" style={{ height: `${height}%` }} />
            ))}
          </div>
        </div>
      ) : null}

      <div className="mt-5">
        <FormulaBox formulas={question.formulaBox} />
      </div>
    </aside>
  );
}
