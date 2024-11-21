import { IPersonDto } from "@/lib/lib.types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function apiInsert(data: IPersonDto): Promise<boolean> {
  const res = await prisma.person.create({ data });
  return res.id > 0;
}

export async function apiUpdate(data: IPersonDto): Promise<boolean> {
  const res = await prisma.person.update({
    data,
    where: { id: data.id }
  });

  return res.id > 0;
}

export async function apiRemove(id: number): Promise<boolean> {
  const res = await prisma.person.delete({ where: { id } });
  return res.id > 0;
}

export async function apiGetAll(): Promise<IPersonDto[]> {
  const data = await prisma.person.findMany();
  return data;
}
