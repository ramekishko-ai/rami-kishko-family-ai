import { prisma } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
  const projects = await prisma.project.findMany();
  return NextResponse.json(projects);
}

export async function POST(req: Request) {
  const data = await req.json();
  const project = await prisma.project.create({ data });
  return NextResponse.json(project);
}
