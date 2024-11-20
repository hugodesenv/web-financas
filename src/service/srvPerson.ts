import { IPersonDto } from "@/lib/libTypes";
import { PrismaClient } from "@prisma/client";

export async function apiInsert(data: IPersonDto): Promise<boolean> {
  const prisma = new PrismaClient();
  const res = await prisma.person.create({ data });
  return res.id > 0;
}

export async function apiUpdate(data: IPersonDto): Promise<boolean> {
  const prisma = new PrismaClient();
  const res = await prisma.person.update({
    data,
    where: { id: data.id }
  });

  return res.id > 0;
}

export async function apiRemove(id: number): Promise<boolean> {
  const prisma = new PrismaClient();
  const res = await prisma.person.delete({ where: { id } });
  return res.id > 0;
}

export async function apiGetAll(): Promise<IPersonDto[]> {
  const prisma = new PrismaClient()
  const data = await prisma.person.findMany();
  return data;
}

Criar um Trello pra eu controlar melhor issso ..