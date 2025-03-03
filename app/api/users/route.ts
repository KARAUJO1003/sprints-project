import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const users = await prisma.user.findMany();
  return NextResponse.json(users);
}

export async function POST(req: NextRequest) {
  const { id, name, email }: User = await req.json();
  console.log("-----------------------------------" + id, name, email);

  const response = await prisma.user.create({
    data: {
      name: "John Doe",
      email: "john@example.com",
    },
  });

  return Response.json(response);
}
