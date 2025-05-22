"use client";

import { useState, useEffect, useRef } from "react";
import { useSession } from "next-auth/react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { toast } from "sonner";
import {
  IconMicrophone,
  IconEdit,
  IconTrash,
  IconUpload,
} from "@tabler/icons-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import React from "react";

interface User {
  id: string;
  name: string;
  // email: string;
  role: "USER" | "ADMIN";
  createdAt: string;
  profilePicture?: string;
}

export default function AdminControls() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newUserName, setNewUserName] = useState("");
  // const [newUserEmail, setNewUserEmail] = useState("");
  const [newUserPassword, setNewUserPassword] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isEnrolling, setIsEnrolling] = useState(false);
  const [isRecording, setIsRecording] = useState(false);
  const [recordingStatus, setRecordingStatus] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [isEditMode, setIsEditMode] = useState(false);
  const [editName, setEditName] = useState("");
  // const [editEmail, setEditEmail] = useState("");
  const [editRole, setEditRole] = useState<"USER" | "ADMIN">("USER");
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (session?.user?.id) {
      fetchUsers();
    }
  }, [session]);

  const fetchUsers = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("/api/user");
      if (response.ok) {
        const data = await response.json();
        setUsers(data);
      }
    } catch (err) {
      console.error("Error fetching users:", err);
      toast.error("Failed to fetch users");
    } finally {
      setIsLoading(false);
    }
  };

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream, {
        mimeType: "audio/webm;codecs=opus",
        audioBitsPerSecond: 128000,
      });
      mediaRecorderRef.current = mediaRecorder;
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          audioChunksRef.current.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm;codecs=opus",
        });
        await processVoiceEnrollment(audioBlob);
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
      setRecordingStatus("Processing voice enrollment...");
    }
  };

  const processVoiceEnrollment = async (audioBlob: Blob) => {
    try {
      if (!selectedUser?.id) {
        throw new Error("No user selected for voice enrollment");
      }

      const formData = new FormData();
      formData.append("user_id", selectedUser.id);
      formData.append(
        "file",
        audioBlob,
        `voice_enrollment_${selectedUser.id}_${Date.now()}.wav`
      );

      const response = await fetch("/api/voice-profile", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        setRecordingStatus("Voice enrollment successful");
        toast.success("Voice enrollment completed");

        // Create download link for the WAV file
        const downloadLink = document.createElement("a");
        downloadLink.href = data.downloadUrl;
        downloadLink.download = `voice_enrollment_${
          selectedUser.id
        }_${Date.now()}.wav`;
        downloadLink.click();
      } else {
        const errorData = await response.json();
        throw new Error(errorData.error || "Voice enrollment failed");
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

  const handleAddUser = async () => {
    if (!newUserName || !newUserPassword) {
      toast.error("Please enter user name and password");
      return;
    }

    setIsEnrolling(true);
    try {
      const response = await fetch("/api/user", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: newUserName,
          // email: newUserEmail,
          password: newUserPassword,
          role: isAdmin ? "ADMIN" : "USER",
        }),
      });

      if (response.ok) {
        await fetchUsers();
        setNewUserName("");
        // setNewUserEmail("");
        setNewUserPassword("");
        setIsAdmin(false);
        toast.success("User added successfully");
      } else {
        toast.error("Failed to add user");
      }
    } catch (err) {
      console.error("Error adding user:", err);
      toast.error("Failed to add user");
    } finally {
      setIsEnrolling(false);
    }
  };

  const handleToggleAdmin = async (id: string, currentRole: string) => {
    try {
      const response = await fetch(`/api/user/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          role: currentRole === "USER" ? "ADMIN" : "USER",
        }),
      });

      if (response.ok) {
        await fetchUsers();
        toast.success("User role updated successfully");
      } else {
        toast.error("Failed to update user role");
      }
    } catch (err) {
      console.error("Error updating user role:", err);
      toast.error("Failed to update user role");
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
    setEditName(user.name || "");
    // setEditEmail(user.email || "");
    setEditRole(user.role);
    setIsEditMode(false);
  };

  const handleEditUser = async () => {
    if (!selectedUser?.id) return;

    try {
      const response = await fetch(`/api/user/${selectedUser.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: editName,
          // email: editEmail,
          role: editRole,
        }),
      });

      if (response.ok) {
        await fetchUsers();
        toast.success("User updated successfully");
        console.log("User updated successfully");
        setIsEditMode(false);
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to update user");
      }
    } catch (err) {
      console.error("Error updating user:", err);
      toast.error("Failed to update user");
    }
  };

  const handleDeleteUser = async () => {
    if (!selectedUser?.id) return;

    try {
      const response = await fetch(`/api/user/${selectedUser.id}`, {
        method: "DELETE",
      });

      if (response.ok) {
        await fetchUsers();
        setSelectedUser(null);
        toast.success("User deleted successfully");
      } else {
        const error = await response.json();
        toast.error(error.error || "Failed to delete user");
      }
    } catch (err) {
      console.error("Error deleting user:", err);
      toast.error("Failed to delete user");
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !selectedUser) return;

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch(
        `/api/user/${selectedUser.id}/profile-picture`,
        {
          method: "POST",
          body: formData,
        }
      );

      if (response.ok) {
        await fetchUsers();
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
    if (!selectedUser) return;

    try {
      const response = await fetch(
        `/api/user/${selectedUser.id}/profile-picture`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        await fetchUsers();
        toast.success("Profile picture removed successfully");
      } else {
        toast.error("Failed to remove profile picture");
      }
    } catch (err) {
      console.error("Error removing profile picture:", err);
      toast.error("Failed to remove profile picture");
    }
  };

  return (
    <div className="container mx-auto py-25">
      <Card>
        <CardHeader>
          <CardTitle>Admin Controls</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <Label>Add New User</Label>
              <div className="flex flex-col gap-4 mt-2">
                <div className="flex flex-col gap-4">
                  <div className="flex gap-4">
                    <Input
                      placeholder="Enter user name"
                      value={newUserName}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewUserName(e.target.value)
                      }
                    />
                    {/* <Input
                      placeholder="Enter email"
                      value={newUserEmail}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewUserEmail(e.target.value)
                      }
                    /> */}
                    <Input
                      type="password"
                      placeholder="Enter password"
                      value={newUserPassword}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                        setNewUserPassword(e.target.value)
                      }
                    />
                    <div className="flex items-center gap-2">
                      <Switch checked={isAdmin} onCheckedChange={setIsAdmin} />
                      <Label>Admin</Label>
                    </div>
                    <Button onClick={handleAddUser} disabled={isEnrolling}>
                      {isEnrolling ? "Enrolling..." : "Add User"}
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Label>User List</Label>
              <div className="mt-4 space-y-4">
                {isLoading ? (
                  <div className="flex items-center justify-center py-8">
                    <div className="w-12 h-12 border-4 border-[#bfff00] border-t-transparent rounded-full animate-spin"></div>
                  </div>
                ) : users.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 space-y-2">
                    <p className="text-zinc-400">No users found</p>
                    <p className="text-sm text-zinc-500">
                      Add a new user to get started
                    </p>
                  </div>
                ) : (
                  users?.map((user) => (
                    <Card
                      key={user.id}
                      className="cursor-pointer hover:bg-zinc-900 transition-colors shadow-[4px_4px_0px_0px_rgba(191,255,0,1)]"
                      onClick={(e) => {
                        // Check if the click was on the switch or its label
                        const target = e.target as HTMLElement;
                        if (target.closest(".switch-container")) {
                          return;
                        }
                        handleUserClick(user);
                      }}
                    >
                      <CardContent className="pt-6">
                        <div className="flex justify-between items-center">
                          <div className="flex items-center space-x-4">
                            <div className="relative w-10 h-10 overflow-hidden">
                              {user.profilePicture ? (
                                <img
                                  src={user.profilePicture}
                                  alt={user.name}
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
                                  <span className="text-lg text-zinc-600">
                                    {user.name.charAt(0).toUpperCase()}
                                  </span>
                                </div>
                              )}
                            </div>
                            <div>
                              <p className="font-medium text-zinc-100">
                                {user.name}
                              </p>
                              {/* <p className="text-sm text-zinc-400">
                                {user.email}
                              </p> */}
                              <p className="text-sm text-zinc-400">
                                Created: {formatDate(user.createdAt)}
                              </p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4">
                            <div className="flex items-center gap-2 switch-container">
                              <Switch
                                key={`switch-${user.id}`}
                                checked={user.role === "ADMIN"}
                                onCheckedChange={() =>
                                  handleToggleAdmin(user.id, user.role)
                                }
                              />
                              <Label>Admin</Label>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))
                )}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* User Details Dialog */}
      <Dialog open={!!selectedUser} onOpenChange={() => setSelectedUser(null)}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>User Details</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative w-32 h-32 rounded-full overflow-hidden">
                {selectedUser?.profilePicture ? (
                  <img
                    src={selectedUser.profilePicture}
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
                      {selectedUser?.name.charAt(0).toUpperCase()}
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
                {selectedUser?.profilePicture && (
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

            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Name</Label>
              {isEditMode ? (
                <Input
                  className="col-span-3"
                  value={editName}
                  onChange={(e) => setEditName(e.target.value)}
                />
              ) : (
                <div className="col-span-3">{selectedUser?.name}</div>
              )}
            </div>
            {/* <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Email</Label>
              {isEditMode ? (
                <Input
                  className="col-span-3"
                  value={editEmail}
                  onChange={(e) => setEditEmail(e.target.value)}
                />
              ) : (
                <div className="col-span-3">{selectedUser?.email}</div>
              )}
            </div> */}
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Role</Label>
              {isEditMode ? (
                <div className="col-span-3 flex items-center gap-2">
                  <Switch
                    checked={editRole === "ADMIN"}
                    onCheckedChange={(checked) =>
                      setEditRole(checked ? "ADMIN" : "USER")
                    }
                  />
                  <Label>Admin</Label>
                </div>
              ) : (
                <div className="col-span-3 capitalize">
                  {selectedUser?.role.toLowerCase()}
                </div>
              )}
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Created</Label>
              <div className="col-span-3">
                {selectedUser && formatDate(selectedUser.createdAt)}
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label className="text-right">Voice Profile</Label>
              <div className="col-span-3 flex items-center gap-4">
                <Button
                  onClick={isRecording ? stopRecording : startRecording}
                  className={`p-4 rounded-full ${
                    isRecording
                      ? "bg-red-500 hover:bg-red-600"
                      : "bg-[#694A38] hover:bg-[#5a3f30]"
                  } transition-colors`}
                >
                  <IconMicrophone size={24} className="theme-text-accent" />
                </Button>
                {recordingStatus && (
                  <p className="text-sm text-gray-500">{recordingStatus}</p>
                )}
              </div>
            </div>
          </div>
          <DialogFooter>
            {isEditMode ? (
              <React.Fragment key="edit-mode">
                <Button
                  key="cancel"
                  variant="outline"
                  onClick={() => setIsEditMode(false)}
                >
                  Cancel
                </Button>
                <Button key="save" onClick={handleEditUser}>
                  Save Changes
                </Button>
              </React.Fragment>
            ) : (
              <React.Fragment key="view-mode">
                <Button
                  key="delete"
                  variant="destructive"
                  onClick={handleDeleteUser}
                  className="mr-auto"
                >
                  <IconTrash className="mr-2 h-4 w-4" />
                  Delete User
                </Button>
                <Button key="edit" onClick={() => setIsEditMode(true)}>
                  <IconEdit className="mr-2 h-4 w-4" />
                  Edit User
                </Button>
              </React.Fragment>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
