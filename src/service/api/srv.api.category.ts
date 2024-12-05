import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient();

export async function apiGetAll() {
  const data = await prisma.category.findMany({
    select: {
      id: true,
      description: true
    },
    orderBy: { description: "asc" }
  });

  return data;
}