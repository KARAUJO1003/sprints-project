import prisma from "@/lib/prisma";
import { Pessoa } from "@prisma/client";
import { NextRequest, NextResponse } from "next/server";

export async function GET() {
  const peoples = await prisma.pessoa.findMany();
  return NextResponse.json(peoples);
}

export async function POST(req: NextRequest) {
  console.log(req.nextUrl);
  const { email, nome, telefone }: Pessoa = await req.json();

  if (!email || !nome || !telefone) {
    return NextResponse.json(
      { error: "Missing name, email or telefone" },
      { status: 400 }
    );
  }

  const existingPerson = await prisma.pessoa.findFirst({
    where: {
      email,
    },
  });

  if (existingPerson) {
    return NextResponse.json(
      { error: "A person with this email already exists" },
      { status: 403 }
    );
  }

  const response = await prisma.pessoa.create({
    data: {
      nome,
      email,
      telefone,
    },
  });

  return Response.json(response);
}
