"use client";

import { useEffect, useState } from "react";

export default function ProjectsPage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch("/api/projects")
      .then((res) => res.json())
      .then(setProjects);
  }, []);

  return (
    <main className="p-10">
      <h1 className="text-2xl font-bold mb-4">Projects</h1>

      <div className="space-y-4">
        {projects.map((p: any) => (
          <div key={p.id} className="border p-4 rounded-lg">
            <h2 className="font-semibold">{p.name}</h2>
            <p className="text-gray-500 text-sm">Slug: {p.slug}</p>
            <p className="text-gray-500 text-sm">API Key: {p.apiKey}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
