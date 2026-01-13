import { NextResponse } from "next/server";
import { generateChangelog } from "@/lib/ai";

export async function POST(req: Request) {
  const { text } = await req.json();
  const result = await generateChangelog(text);
  return NextResponse.json({ result });
}
