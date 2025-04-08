"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IconUpload, IconTrash } from "@tabler/icons-react";
import { VoiceEnrollment } from "@/components/voice-enrollment";

interface UserSettings {
  language: string;
  voiceEnabled: boolean;
  autoSuggestEnabled: boolean;
  name: string;
  profilePicture?: string;
  settings?: {
    voiceEnabled: boolean;
    autoSuggestEnabled: boolean;
  };
}

export default function AccountSettings() {
  const { data: session } = useSession();
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

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

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `/api/user/${session?.user?.id}/profile-picture`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        await fetchSettings();
        toast.success("Profile picture updated successfully");
      } else {
        toast.error("Failed to update profile picture");
      }
    } catch (err) {
      console.error("Error uploading profile picture:", err);
      toast.error("Failed to update profile picture");
    }
  };

  const handleDeleteProfilePicture = async () => {
    try {
      const response = await fetch(
        `/api/user/${session?.user?.id}/profile-picture`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        await fetchSettings();
        toast.success("Profile picture removed successfully");
      } else {
        toast.error("Failed to remove profile picture");
      }
    } catch (err) {
      console.error("Error removing profile picture:", err);
      toast.error("Failed to remove profile picture");
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
              <div className="flex flex-col items-center space-y-4">
                <div className="relative w-32 h-32 rounded-full overflow-hidden">
                  {settings.profilePicture ? (
                    <img
                      src={settings.profilePicture}
                      alt="Profile"
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-zinc-800 flex items-center justify-center">
                      <span className="text-4xl text-zinc-600">
                        {settings.name.charAt(0).toUpperCase()}
                      </span>
                    </div>
                  )}
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    onClick={() => fileInputRef.current?.click()}
                  >
                    <IconUpload className="mr-2 h-4 w-4" />
                    Upload
                  </Button>
                  {settings.profilePicture && (
                    <Button
                      variant="destructive"
                      onClick={handleDeleteProfilePicture}
                    >
                      <IconTrash className="mr-2 h-4 w-4" />
                      Remove
                    </Button>
                  )}
                  <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileUpload}
                  />
                </div>
              </div>

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

        {/* Voice Settings Card */}
        <Card className="bg-zinc-900 border border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-zinc-100">
              Voice Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium text-zinc-400">
                    Voice Authentication
                  </Label>
                  <p className="text-sm text-zinc-500">
                    Enable voice-based authentication
                  </p>
                </div>
                <Switch
                  checked={settings.settings?.voiceEnabled}
                  onCheckedChange={() => handleToggle("voiceEnabled")}
                />
              </div>

              {settings.settings?.voiceEnabled && (
                <div className="mt-6">
                  <Label className="text-sm font-medium text-zinc-400 mb-4 block">
                    Voice Profile Enrollment
                  </Label>
                  <VoiceEnrollment />
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
