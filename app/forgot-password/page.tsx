import Link from "next/link";
import { KeyRound } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  return (
    <div className="mx-auto flex max-w-xl px-4 py-16 sm:px-6 lg:px-8">
      <Card className="w-full shadow-soft">
        <CardContent className="p-6">
          <div className="flex items-center gap-2">
            <KeyRound className="h-5 w-5 text-blue-600" aria-hidden="true" />
            <h1 className="text-2xl font-bold">Forgot password</h1>
          </div>
          <p className="mt-3 text-sm leading-6 text-muted-foreground">
            Placeholder flow for future Supabase password recovery emails.
          </p>
          <form className="mt-6 grid gap-4">
            <label className="grid gap-1 text-sm font-medium">
              Email
              <Input type="email" placeholder="student@example.com" />
            </label>
            <Button type="button">Send mock reset link</Button>
          </form>
          <Link href="/login" className="mt-5 inline-block text-sm text-blue-700 hover:underline">
            Back to login
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
