"use client";

import { useState } from "react";

export default function NewReleasePage() {
  const [title, setTitle] = useState("");
  const [type, setType] = useState("feature");
  const [description, setDescription] = useState("");

  async function createRelease() {
    await fetch("/api/releases", {
      method: "POST",
      body: JSON.stringify({
        title,
        type,
        description,
        projectId: "YOUR_PROJECT_ID_HERE"
      }),
    });

    alert("Release created");
  }

  return (
    <main className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Release</h1>

      <input
        className="border p-2 w-full rounded mb-4"
        placeholder="Release title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <select
        className="border p-2 w-full rounded mb-4"
        value={type}
        onChange={(e) => setType(e.target.value)}
      >
        <option value="feature">Feature</option>
        <option value="fix">Fix</option>
        <option value="improvement">Improvement</option>
      </select>

      <textarea
        className="border p-2 w-full rounded mb-4"
        placeholder="Description"
        rows={5}
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        onClick={createRelease}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </main>
  );
}
