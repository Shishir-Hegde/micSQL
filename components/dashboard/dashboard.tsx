"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import {
  IconDatabase,
  IconLogout,
  IconSettings,
  IconTable,
} from "@tabler/icons-react";

export default function Dashboard() {
  const { data: session, status } = useSession();
  const router = useRouter();

  // Redirect if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);
//load
  if (status === "loading") {
    return (
      <div className="min-h-screen flex items-center justify-center theme-bg-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen theme-bg-dark">
      <div className="container mx-auto py-8 px-4">
        <div className="flex justify-between items-center mb-8">
          <h1
            className="text-3xl font-bold text-accent font-jaro"
            style={{ fontFamily: "Jaro, sans-serif" }}
          >
            Sonexis Dashboard
          </h1>
          <div className="flex items-center space-x-4">
            <span className="text-accent">
              Welcome, {session?.user?.name}
            </span>
            <button
              onClick={() => signOut({ callbackUrl: "/login" })}
              className="p-2 rounded-full hover:bg-[#5a3e2e] transition-colors"
              aria-label="Logout"
            >
              <IconLogout size={24} className="text-accent" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Database Stats */}
          <DashboardCard
            icon={<IconDatabase size={32} />}
            title="Databases"
            value="3"
          />

          {/* Tables Stats */}
          <DashboardCard
            icon={<IconTable size={32} />}
            title="Tables"
            value="12"
          />

          {/* Settings */}
          <DashboardCard
            icon={<IconSettings size={32} />}
            title="Settings"
            value="Manage"
            onClick={() => router.push("/settings")}
          />
        </div>

        {/* Recent Queries */}
        <div className="mt-8 p-6 rounded-lg shadow-lg theme-bg-secondary">
          <h2
            className="text-xl font-bold mb-4 text-secondary-foreground font-jaro"
            style={{ fontFamily: "Jaro, sans-serif" }}
          >
            Recent Queries
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-secondary-foreground">
              <thead>
                <tr className="border-b border-white/20">
                  <th className="text-left py-2">Query</th>
                  <th className="text-left py-2">Database</th>
                  <th className="text-left py-2">Time</th>
                  <th className="text-left py-2">Status</th>
                </tr>
              </thead>
              <tbody>
                <QueryRow
                  key="query-1"
                  query="SELECT * FROM users WHERE active = true"
                  database="main_db"
                  time="2 mins ago"
                  status="Success"
                />
                <QueryRow
                  key="query-2"
                  query="UPDATE products SET price = 19.99 WHERE id = 123"
                  database="inventory"
                  time="15 mins ago"
                  status="Success"
                />
                <QueryRow
                  key="query-3"
                  query="DELETE FROM orders WHERE status = 'canceled'"
                  database="sales"
                  time="1 hour ago"
                  status="Failed"
                />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

function DashboardCard({ icon, title, value, onClick = null }) {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg theme-bg-secondary ${
        onClick ? "cursor-pointer hover:shadow-xl transition-shadow" : ""
      }`}
      onClick={onClick}
    >
      <div className="flex items-center mb-3 text-secondary-foreground">
        {icon}
        <h3
          className="ml-2 text-lg font-bold font-jaro"
          style={{ fontFamily: "Jaro, sans-serif" }}
        >
          {title}
        </h3>
      </div>
      <p className="text-2xl font-bold text-secondary-foreground">{value}</p>
    </div>
  );
}

function QueryRow({ query, database, time, status }) {
  return (
    <tr className="border-b border-white/10 hover:bg-black/10">
      <td className="py-2 truncate max-w-xs">{query}</td>
      <td className="py-2">{database}</td>
      <td className="py-2">{time}</td>
      <td className="py-2">
        <span
          className={`px-2 py-1 rounded text-xs ${
            status === "Success" ? "bg-green-700" : "bg-red-700"
          }`}
        >
          {status}
        </span>
      </td>
    </tr>
  );
}
