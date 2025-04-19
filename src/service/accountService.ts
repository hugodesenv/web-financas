// Hugo.
import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/utils/typesUtils"; 

export async function tryAuthentication(username: string, password: string): Promise<IHTTPResponse> {
  try {
    const config = axiosInstance.post("/account/auth", {
      username,
      password
    });

    const { data, status } = await config;

    return { data, success: status === 202 };
  } catch (e: any) {
    return { success: false, message: e?.response?.data }
  }
}