"use client";
import React from "react";
import { LoginForm } from "./login-form";
import { useSession } from "next-auth/react";

export function AuthContainer() {
  const { data: session } = useSession();

  if (session) {
    return null;
  }

  return (
    <div className="min-h-screen flex items-center justify-center theme-bg-dark">
      <LoginForm />
    </div>
  );
}
