import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function verifyCredential(email: string, password: string) {
  try {
    const user = await prisma.account.findFirst({
      where: { email: email, password: password }
    });

    return user?.id != null;
  } catch (e) {
    return false;
  }
}