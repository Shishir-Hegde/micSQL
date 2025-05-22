"use client";

import React, { useState, useRef } from "react";
import { Mic, MicOff } from "lucide-react";

interface VoiceAuthProps {
  onAuthenticate: (authenticated: boolean) => void;
}

export function VoiceAuth({ onAuthenticate }: VoiceAuthProps) {
  const [isRecording, setIsRecording] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

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
        await processAudio(audioBlob);
        stream.getTracks().forEach((track) => track.stop());
      };

      mediaRecorder.start();
      setIsRecording(true);
    } catch (error) {
      console.error("Error accessing microphone:", error);
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    setIsProcessing(true);
    try {
      const formData = new FormData();
      formData.append("audio", audioBlob);

      const response = await fetch("/api/auth/verify", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          requestVoiceAuth: true,
          audioFile: await audioBlob.arrayBuffer(),
        }),
      });

      if (!response.ok) {
        throw new Error("Authentication failed");
      }

      const data = await response.json();
      onAuthenticate(data.authenticated);
    } catch (error) {
      console.error("Error processing audio:", error);
      onAuthenticate(false);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      <button
        onClick={isRecording ? stopRecording : startRecording}
        disabled={isProcessing}
        className={`p-8 rounded-full transition-all duration-300 ${
          isRecording
            ? "bg-red-500 hover:bg-red-600"
            : "bg-primary hover:bg-primary/90"
        } ${isProcessing ? "opacity-50 cursor-not-allowed" : ""}`}
      >
        {isRecording ? (
          <MicOff className="w-12 h-12 text-white" />
        ) : (
          <Mic className="w-12 h-12 text-white" />
        )}
      </button>
      <p className="text-center text-foreground">
        {isProcessing
          ? "Processing..."
          : isRecording
          ? "Recording... Click to stop"
          : "Click to start recording"}
      </p>
    </div>
  );
}
