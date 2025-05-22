"use client";

import { useState, useRef, useEffect } from "react";
import { IconMicrophoneFilled } from "@tabler/icons-react";
import Link from "next/link";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal, AlertOctagon } from "lucide-react";
import { useRouter } from "next/navigation";

export default function Home() {
  const [query, setQuery] = useState("");
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState("");
  const [voiceModelStatus, setVoiceModelStatus] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const router = useRouter();

  useEffect(() => {
    const checkVoiceModel = async () => {
      try {
        const response = await fetch("/api/check-voice-model", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (!response.ok || data.error) {
          if (
            data.error?.toLowerCase().includes("voice model") ||
            data.error?.toLowerCase().includes("voice authentication") ||
            data.error?.toLowerCase().includes("voice not found")
          ) {
            setVoiceModelStatus(
              "You don't have a voice model yet. Please contact your administrator to set up voice authentication."
            );
          }
        }
      } catch (error) {
        console.error("Error checking voice model:", error);
      }
    };

    checkVoiceModel();
  }, []);

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
      setRecordingStatus("Recording... Speak now");
    } catch (error) {
      console.error("Error accessing microphone:", error);
      setRecordingStatus("Error accessing microphone");
    }
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && isRecording) {
      mediaRecorderRef.current.stop();
      setIsRecording(false);
      setRecordingStatus("Processing audio...");
    }
  };

  const processAudio = async (audioBlob: Blob) => {
    try {
      const base64Audio = await new Promise<string>((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64 = reader.result as string;
          const base64Data = base64.split(",")[1];
          resolve(base64Data);
        };
        reader.readAsDataURL(audioBlob);
      });

      // Set loading status and clear previous errors
      setRecordingStatus("Processing audio and verifying voice...");
      setErrorMessage(null);

      const response = await fetch("/api/query-processor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          audioFile: base64Audio,
          requestVoiceAuth: true,
        }),
      });

      const data = await response.json();
      console.log("API Response:", data);

      if (!response.ok) {
        throw new Error(
          data.error || `Request failed with status ${response.status}`
        );
      }

      if (data.error) {
        console.log("Error received:", data.error);
        // Check for various voice model related error messages
        const errorMessage = data.error.toLowerCase();
        if (
          errorMessage.includes("voice model") ||
          errorMessage.includes("voice authentication") ||
          errorMessage.includes("voice not found") ||
          errorMessage.includes("no voice profile") ||
          errorMessage.includes("voice profile not found")
        ) {
          setVoiceModelStatus(
            "You don't have a voice model yet. Please contact your administrator to set up voice authentication."
          );
          setRecordingStatus("Voice authentication required");
        } else {
          setRecordingStatus(`Error: ${data.error}`);
        }
      } else {
        setQuery(data.query?.original || "");
        setVoiceModelStatus(null); // Clear any existing voice model error
        setRecordingStatus("Query processed successfully. Redirecting...");

        // Redirect to graphs page with queryId
        if (data.queryId) {
          router.push(`/graphs?queryId=${data.queryId}`);
        } else {
          // Handle case where queryId might be missing unexpectedly
          console.warn("Query ID missing in successful response from voice input.");
          setErrorMessage("Processed successfully, but could not navigate to visualization.");
          setRecordingStatus("Processed successfully"); // Revert status if no ID
        }
      }
    } catch (error) {
      console.error("Error processing audio:", error);
      const errorMessage =
        error instanceof Error ? error.message : String(error);
      if (
        errorMessage.toLowerCase().includes("voice model") ||
        errorMessage.toLowerCase().includes("voice authentication") ||
        errorMessage.toLowerCase().includes("voice not found") ||
        errorMessage.toLowerCase().includes("no voice profile")
      ) {
        setVoiceModelStatus(
          "You don't have a voice model yet. Please contact your administrator to set up voice authentication."
        );
        setRecordingStatus("Voice authentication required");
      } else {
        setRecordingStatus("Error processing audio");
        // Display error message if it's not a voice model issue
        setErrorMessage(error instanceof Error ? error.message : "Unknown error processing audio");
      }
    }
  };

  const handleQuerySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    try {
      setRecordingStatus("Processing query...");
      setErrorMessage(null); // Clear previous errors

      // Call the main query processor endpoint for text queries
      const response = await fetch("/api/query-processor", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: query, // Send the text query
          requestVoiceAuth: false, // No voice auth needed for text
        }),
      });

      const data = await response.json();
      console.log("API Response (Text Submit):", data);

      if (!response.ok) {
        throw new Error(data.error || `Request failed with status ${response.status}`);
      }

      if (data.error) {
        // Throw error to be caught by the catch block
        throw new Error(data.error);
      }

      // Successfully processed text query, redirect to graphs page with queryId
      setRecordingStatus("Query processed successfully. Redirecting...");
      if (data.queryId) {
        router.push(`/graphs?queryId=${data.queryId}`);
      } else {
        // Handle case where queryId might be missing unexpectedly
        console.warn("Query ID missing in successful response from text input.");
        setErrorMessage("Processed successfully, but could not navigate to visualization.");
        setRecordingStatus("Processed successfully"); // Revert status if no ID
      }
    } catch (error) {
      console.error("Error processing query:", error);
      setErrorMessage(error instanceof Error ? error.message : "Unknown error");
      setRecordingStatus("Error processing query");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
      <div className="w-full max-w-3xl flex flex-col items-center">
        <h1 className="text-4xl font-bold mb-8 text-[#bfff00] text-center">
          Good Morning, what would you like to enquire about today?
        </h1>

        <div className="mb-8 flex flex-col items-center">
          <button
            onClick={isRecording ? stopRecording : startRecording}
            className={`p-4 rounded-full transition-all duration-300 transform hover:scale-110 active:scale-95 ${
              isRecording
                ? "bg-[#bfff00]/90 shadow-[0_0_20px_rgba(191,255,0,0.3)]"
                : "bg-transparent hover:bg-[#bfff00]/10"
            }`}
            aria-label={isRecording ? "Stop recording" : "Start recording"}
          >
            <IconMicrophoneFilled
              size={48}
              className={`transition-all duration-300 ${
                isRecording
                  ? "text-[#ff00ff] animate-pulse"
                  : "text-[#00e1ff] hover:text-[#ff00ff]"
              }`}
            />
          </button>
          {recordingStatus && (
            <p className="mt-4 text-sm text-[#bfff00]/80">{recordingStatus}</p>
          )}
        </div>

        <form onSubmit={handleQuerySubmit} className="relative w-[65%]">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Or type your query here... (Press Enter to submit)"
            className="w-full px-4 py-2 bg-transparent border-b-2 border-[#00e1ff] text-[#bfff00] placeholder:text-[#bfff00]/60 focus:outline-none focus:border-[#ff00ff] transition-colors duration-300"
          />
        </form>

        {/* <Link href="/graphs" className="mt-8">
          <button className="px-6 py-3 bg-[#00e1ff] text-white rounded-lg hover:bg-[#ff00ff] transition-colors duration-300">
            View Graphs
          </button>
        </Link> */}
      </div>

      {/* {voiceModelStatus && (
        <div className="fixed bottom-4 right-4 max-w-md">
          <Alert variant="destructive">
            <Terminal className="h-4 w-4" />
            <AlertTitle>Voice Authentication Required</AlertTitle>
            <AlertDescription>{voiceModelStatus}</AlertDescription>
          </Alert>
        </div>
      )} */}

      {errorMessage && (
        <div className="fixed bottom-4 right-4 max-w-md">
          <Alert variant="destructive">
            <AlertOctagon className="h-4 w-4" />
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{errorMessage}</AlertDescription>
          </Alert>
        </div>
      )}
    </div>
  );
}
