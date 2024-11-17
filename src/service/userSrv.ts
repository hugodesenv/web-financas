import axiosInstance from "@/lib/axiosLib";
import { IHTTPResponse } from "@/types/httpType";
import { ILoginDto } from "@/types/userType";
import { PrismaClient } from "@prisma/client";
import { HttpStatusCode } from "axios";

export async function tryLogin(data: ILoginDto): Promise<IHTTPResponse> {
  try {
    console.log(data)
    let apiResponse = await axiosInstance.post('/api/login', data);
    console.log('dps', apiResponse)
    return { success: apiResponse.status == HttpStatusCode.Ok };
  } catch (e) {
    return { success: false }
  }
}

export async function verifyCredential(email: string, password: string) {
  console.log('userSrv.verifyCredential...');
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