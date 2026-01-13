"use client";

import { useState } from "react";

export default function NewProjectPage() {
  const [name, setName] = useState("");

  async function createProject() {
    const slug = name.toLowerCase().replace(/\s+/g, "-");
    const apiKey = crypto.randomUUID();

    await fetch("/api/projects", {
      method: "POST",
      body: JSON.stringify({ name, slug, apiKey }),
    });

    alert("Project created");
  }

  return (
    <main className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Create New Project</h1>

      <input
        className="border p-2 w-full rounded mb-4"
        placeholder="Project name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <button
        onClick={createProject}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Create
      </button>
    </main>
  );
}
