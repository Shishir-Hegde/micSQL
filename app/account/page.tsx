"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { IconUpload, IconTrash, IconMicrophone } from "@tabler/icons-react";

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
  // email?: string;
}

export default function AccountSettings() {
  const { data: session } = useSession();
  const [settings, setSettings] = useState<UserSettings | null>(null);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState("");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
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

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/wav",
        });
        await processVoiceEnrollment(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsEnrolling(true);
      setRecordingStatus("Recording enrollment sample... Speak now");

      // Stop recording after 5 seconds
      setTimeout(() => {
        if (mediaRecorderRef.current && isEnrolling) {
          mediaRecorderRef.current.stop();
          setIsEnrolling(false);
          setRecordingStatus("Processing voice enrollment...");
        }
      }, 5000);
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setRecordingStatus("Error accessing microphone");
      toast.error("Failed to access microphone");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isEnrolling) {
      mediaRecorderRef.current.stop();
      setIsEnrolling(false);
      setRecordingStatus("Processing voice enrollment...");
    }
  };

  const processVoiceEnrollment = async (audioBlob: Blob) => {
    try {
      if (!session?.user?.id) {
        throw new Error("No user session found");
      }

      const formData = new FormData();
      formData.append("user_id", session.user.id);
      formData.append("file", audioBlob);
      formData.append(
        "file",
        audioBlob,
        `voice_enrollment_${session.user.id}_${Date.now()}.wav`
      );

      const response = await fetch("/api/voice-profile", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setRecordingStatus("Voice enrollment successful");
        toast.success("Voice profile enrolled successfully");

        // Create download link for the WAV file
        const downloadLink = document.createElement("a");
        downloadLink.href = data.downloadUrl;
        downloadLink.download = `voice_enrollment_${
          session.user.id
        }_${Date.now()}.wav`;
        downloadLink.click();
      } else {
        let errorMessage = "Voice enrollment failed";
        try {
          const errorData = await response.json();
          errorMessage = errorData.error || errorMessage;
        } catch (jsonError) {
          console.error("Failed to parse error response as JSON:", jsonError);
          const text = await response.text();
          errorMessage = text || errorMessage;
        }
        throw new Error(errorMessage);
      }
    } catch (error) {
      console.error("Error processing voice enrollment:", error);
      setRecordingStatus("Error processing voice enrollment");
      toast.error(
        error instanceof Error
          ? error.message
          : "Failed to process voice enrollment"
      );
    }
  };

  if (!settings) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="w-12 h-12 border-4 border-[#bfff00] border-t-transparent rounded-full animate-spin"></div>
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
                      loading="lazy"
                      onLoad={(e) => {
                        const img = e.target as HTMLImageElement;
                        img.style.opacity = "1";
                      }}
                      style={{
                        opacity: 0,
                        transition: "opacity 0.3s ease-in-out",
                      }}
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
                  {settings?.email || "Not set"}
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

        {/* Preferences Card */}
        <Card className="bg-zinc-900 border border-zinc-800">
          <CardHeader>
            <CardTitle className="text-xl font-bold text-zinc-100">
              Preferences
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
                  checked={settings?.settings?.voiceEnabled}
                  onCheckedChange={() => handleToggle("voiceEnabled")}
                />
              </div>

              <div className="flex items-center justify-between">
                <div className="space-y-0.5">
                  <Label className="text-sm font-medium text-zinc-400">
                    Auto Suggestions
                  </Label>
                  <p className="text-sm text-zinc-500">
                    Enable query auto-suggestions
                  </p>
                </div>
                <Switch
                  checked={settings?.settings?.autoSuggestEnabled}
                  onCheckedChange={() => handleToggle("autoSuggestEnabled")}
                />
              </div>

              {settings.settings?.voiceEnabled && (
                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <Label className="text-sm font-medium text-zinc-400">
                      Voice Profile Enrollment
                    </Label>
                    <p className="text-sm text-zinc-500">
                      Record your voice to enable voice authentication
                    </p>
                  </div>
                  <div className="flex flex-col items-center space-y-4">
                    <Button
                      onClick={isEnrolling ? stopRecording : startRecording}
                      className={`p-8 rounded-full ${
                        isEnrolling
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-[#3C6E71] hover:bg-[#244244]"
                      } transition-colors`}
                    >
                      <IconMicrophone size={56} className="theme-text-accent" />
                    </Button>
                    {recordingStatus && (
                      <p className="text-sm text-zinc-400">{recordingStatus}</p>
                    )}
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
