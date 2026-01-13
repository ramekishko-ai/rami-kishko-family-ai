import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const data = await req.json();
  const feedback = await prisma.feedback.create({ data });
  return NextResponse.json(feedback);
}
