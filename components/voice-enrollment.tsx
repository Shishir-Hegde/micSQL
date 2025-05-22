"use client";

import { useState } from "react";
import { IconMicrophone } from "@tabler/icons-react";
import { useSession } from "next-auth/react";

export function VoiceEnrollment() {
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [status, setStatus] = useState("");
  const { data: session } = useSession();

  const handleEnroll = async () => {
    try {
      setIsEnrolling(true);
      setStatus("Recording enrollment sample... Speak now");

      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const audioChunks: Blob[] = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunks.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        try {
          const audioBlob = new Blob(audioChunks, { type: "audio/wav" });
          const formData = new FormData();
          
          // Make sure these field names match what the API expects
          formData.append("file", audioBlob, "enrollment.wav");
          formData.append("user_id", session?.user?.id || "");
          
          setStatus("Uploading voice sample...");
          
          const response = await fetch("/api/voice-profile", {
            method: "POST",
            body: formData,
          });

          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Enrollment failed");
          }

          const result = await response.json();
          setStatus(result.message || "Voice profile enrolled successfully");
        } catch (error) {
          console.error("Processing error:", error);
          setStatus(error instanceof Error ? error.message : "Error during enrollment");
        } finally {
          // Always stop the audio tracks when done
          stream.getTracks().forEach((track) => track.stop());
          setIsEnrolling(false);
        }
      };

      mediaRecorder.start();
      setTimeout(() => {
        mediaRecorder.stop();
        setIsEnrolling(false);
      }, 5000); // Record for 5 seconds
    } catch (error) {
      console.error("Enrollment error:", error);
      setStatus(error instanceof Error ? error.message : "Error during enrollment");
      setIsEnrolling(false);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <button
        onClick={handleEnroll}
        disabled={isEnrolling}
        className={`p-4 rounded-full bg-green-500 hover:bg-green-600 transition-colors ${
          isEnrolling ? "opacity-50 cursor-not-allowed" : ""
        }`}
        aria-label="Enroll voice profile"
      >
        <IconMicrophone size={48} className="theme-text-accent" />
      </button>
      {status && <p className="mt-4 text-sm text-white/80">{status}</p>}
    </div>
  );
}
