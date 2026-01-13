"use client";

import { useState } from "react";

export default function FeedbackPage({ params }: any) {
  const [comment, setComment] = useState("");

  async function sendFeedback() {
    await fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        comment,
        sentiment: "neutral",
        releaseId: "RELEASE_ID_HERE"
      }),
    });

    alert("Feedback sent");
  }

  return (
    <main className="p-10 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Send Feedback</h1>

      <textarea
        className="border p-2 w-full rounded mb-4"
        placeholder="Your feedback"
        rows={5}
        value={comment}
        onChange={(e) => setComment(e.target.value)}
      />

      <button
        onClick={sendFeedback}
        className="bg-black text-white px-4 py-2 rounded"
      >
        Send
      </button>
    </main>
  );
}
