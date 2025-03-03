import prisma from "@/lib/prisma";
import { Pessoa } from "@prisma/client";
import { IParams } from "@/shared/interfaces";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest, { params }: IParams) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const response = await prisma.pessoa.findFirst({
    where: {
      id,
    },
  });

  return NextResponse.json(response);
}

export async function PUT(req: NextRequest, { params }: IParams) {
  const { id } = await params;
  const { email, nome, telefone }: Pessoa = await req.json();

  if (!id || !email || !nome || !telefone) {
    return NextResponse.json(
      { error: "Missing id, name, email or telefone" },
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

  const response = await prisma.pessoa.update({
    where: {
      id,
    },
    data: {
      nome,
      email,
      telefone,
    },
  });

  return NextResponse.json(response);
}

export async function DELETE(req: NextRequest, { params }: IParams) {
  const { id } = await params;
  if (!id) {
    return NextResponse.json({ error: "Missing id" }, { status: 400 });
  }

  const response = await prisma.pessoa.delete({
    where: {
      id,
    },
  });

  return NextResponse.json(response);
}
