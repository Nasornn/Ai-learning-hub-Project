import { CheckCircle2, CreditCard, ShieldCheck, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { pricingPlans } from "@/lib/mockData";

export default function PricingPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <Badge variant="secondary" className="bg-blue-50 text-blue-700">Pricing</Badge>
        <h1 className="mt-4 text-4xl font-bold tracking-tight">Choose a plan for serious exam preparation.</h1>
        <p className="mt-3 text-muted-foreground">
          Payment is intentionally not connected in this MVP. These plan cards are ready for Stripe, Omise, PromptPay, or school billing later.
        </p>
      </div>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {pricingPlans.map((plan) => (
          <Card key={plan.id} className={plan.highlighted ? "border-blue-300 shadow-soft" : ""}>
            <CardContent className="flex h-full flex-col p-6">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-xl font-semibold">{plan.name}</h2>
                {plan.highlighted ? (
                  <Badge className="gap-1">
                    <Sparkles className="h-3.5 w-3.5" aria-hidden="true" />
                    Popular
                  </Badge>
                ) : null}
              </div>
              <p className="mt-4 text-4xl font-bold">{plan.price}</p>
              <p className="mt-3 min-h-12 text-sm leading-6 text-muted-foreground">{plan.description}</p>
              <ul className="mt-6 grid flex-1 gap-3 text-sm text-muted-foreground">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-6 w-full" variant={plan.highlighted ? "default" : "outline"}>
                <CreditCard className="h-4 w-4" aria-hidden="true" />
                Choose Plan
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-8 rounded-xl border bg-white p-5 shadow-sm">
        <div className="flex items-center gap-2 font-semibold">
          <ShieldCheck className="h-5 w-5 text-blue-600" aria-hidden="true" />
          Payment roadmap
        </div>
        <p className="mt-2 text-sm leading-6 text-muted-foreground">
          Real payment is a later phase. The recommended production path for Thailand would support cards plus a local option such as PromptPay through a provider like Omise.
        </p>
      </div>
    </div>
  );
}
