"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface UserSettings {
  language: string;
  voiceEnabled: boolean;
  autoSuggestEnabled: boolean;
  name: string;
  settings?: {
    voiceEnabled: boolean;
    autoSuggestEnabled: boolean;
  };
}

export default function AccountSettings() {
  const { data: session } = useSession();
  const [settings, setSettings] = useState<UserSettings | null>(null);

  useEffect(() => {
    if (session?.user?.id) {
      fetchSettings();
    }
  }, [session]);

  const fetchSettings = async () => {
    try {
      const response = await fetch(`/api/user/${session?.user?.id}`);
      if (response.ok) {
        const data = await response.json();
        setSettings(data);
      }
    } catch (err) {
      console.error("Error fetching settings:", err);
      toast.error("Failed to fetch settings");
    }
  };

  const handleToggle = async (field: "voiceEnabled" | "autoSuggestEnabled") => {
    try {
      const response = await fetch(`/api/user/${session?.user?.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          [field]: !settings?.settings?.[field],
        }),
      });

      if (response.ok) {
        await fetchSettings();
        toast.success("Settings updated successfully");
      } else {
        toast.error("Failed to update settings");
      }
    } catch (err) {
      console.error("Error updating settings:", err);
      toast.error("Failed to update settings");
    }
  };

  if (!settings) {
    return (
      <div className="min-h-screen flex items-center justify-center theme-bg-dark">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-accent"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-25 space-y-8">
      <div className="grid gap-8 md:grid-cols-2">
        {/* User Profile Card */}
        <Card className="bg-zinc-900 border border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-zinc-100">
              Profile Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-zinc-400">
                  Name
                </Label>
                <p className="text-lg font-medium text-zinc-100">
                  {settings?.name || "Not set"}
                </p>
              </div>

              {/* <div className="space-y-1.5">
                <Label className="text-sm font-medium text-zinc-400">
                  Email
                </Label>
                <p className="text-lg font-medium text-zinc-100">
                  {session?.user?.email}
                </p>
              </div> */}

              <div className="space-y-1.5">
                <Label className="text-sm font-medium text-zinc-400">
                  Role
                </Label>
                <p className="text-lg font-medium text-zinc-100 capitalize">
                  {session?.user?.role?.toLowerCase() || "user"}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Settings Card */}
        <Card className="bg-zinc-900 border border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-zinc-100">
              Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6">
              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-zinc-400">
                    Voice Recognition
                  </Label>
                  <p className="text-sm text-zinc-500">
                    Enable voice commands for queries
                  </p>
                </div>
                <Switch
                  checked={settings?.settings?.voiceEnabled ?? false}
                  onCheckedChange={() => handleToggle("voiceEnabled")}
                  className="data-[state=checked]:bg-zinc-700 data-[state=unchecked]:bg-red-500"
                />
              </div>

              <div className="flex items-center justify-between py-2">
                <div className="space-y-1">
                  <Label className="text-sm font-medium text-zinc-400">
                    Auto Suggestions
                  </Label>
                  <p className="text-sm text-zinc-500">
                    Get smart query suggestions as you type
                  </p>
                </div>
                <Switch
                  checked={settings?.settings?.autoSuggestEnabled ?? false}
                  onCheckedChange={() => handleToggle("autoSuggestEnabled")}
                  className="data-[state=checked]:bg-zinc-700 data-[state=unchecked]:bg-red-500"
                />
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
