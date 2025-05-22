"use client";

import { LoginForm } from "@/components/login-form";

export default function LoginPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 theme-bg-dark">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#bfff00] font-jaro">
            Sonexis
          </h1>
          <p className="mt-2 text-lg text-[#bfff00]/80">
            Log in to your account
          </p>
        </div>

        <LoginForm />
      </div>
    </main>
  );
}
