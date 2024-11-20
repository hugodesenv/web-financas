import axiosInstance from "@/lib/libAxios";
import { IHTTPResponse, ILoginDto } from "@/lib/libTypes";
import { PrismaClient } from "@prisma/client";

export async function tryLogin(credentials: ILoginDto): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.post('/api/login', credentials);
    return data;
  } catch (e) {
    return { success: false }
  }
}

export async function apiVerifyCredential(email: string, password: string) {
  try {
    const prisma = new PrismaClient();

    const user = await prisma.account.findFirst({
      where: { email: email, password: password }
    });

    return user?.id != null;
  } catch (e) {
    return false;
  }
}