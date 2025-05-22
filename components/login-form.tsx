"use client";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function LoginForm() {
  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      const result = await signIn("credentials", {
        userId: parseInt(employeeId),
        password,
        redirect: false,
      });

      if (!result?.error) {
        router.push("/");
      } else {
        setError(
          "Incorrect password or username. Please try again or contact your administrator."
        );
      }
    } catch (error) {
      console.error("Login error:", error);
      setError(
        "An unexpected error occurred. Please try again or contact your administrator."
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto p-6 bg-[#fcee0a] shadow-[6px_6px_0px_0px_rgba(255,0,128,0.9)]">
      <h2 className="text-2xl font-bold mb-6 text-center text-black">
        Welcome Back
      </h2>

      {error && (
        <Alert variant="destructive" className="mb-4">
          <Terminal className="h-4 w-4" />
          <AlertTitle>Login Failed</AlertTitle>
          <AlertDescription>{error}</AlertDescription>
        </Alert>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-2">
          <label
            htmlFor="employeeId"
            className="text-sm font-medium text-black font-jaro"
          >
            Employee ID
          </label>
          <input
            id="employeeId"
            type="text"
            value={employeeId}
            onChange={(e) => setEmployeeId(e.target.value)}
            placeholder="Enter your Employee ID"
            className="form-input font-jaro bg-white text-black placeholder:text-black/60 shadow-[4px_4px_0px_0px_rgba(255,0,128,1)]"
            required
          />
        </div>

        <div className="space-y-2">
          <label
            htmlFor="password"
            className="text-sm font-medium text-black font-jaro"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="form-input font-jaro bg-white text-black placeholder:text-black/60 shadow-[4px_4px_0px_0px_rgba(255,0,128,1)]"
            required
          />
        </div>

        <button
          type="submit"
          className="btn-primary w-full transition-all duration-300 hover:shadow-[4px_4px_0px_0px_rgba(191,255,0,1)] hover:-translate-y-0.5"
          disabled={isLoading}
        >
          {isLoading ? "Logging in..." : "Log In"}
        </button>
      </form>
    </div>
  );
}
