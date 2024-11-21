import axiosInstance from "@/lib/lib.axios";
import { IHTTPResponse, ILoginDto } from "@/lib/lib.types";

export async function tryLogin(credentials: ILoginDto): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.post('/api/login', credentials);
    return data;
  } catch (e) {
    return { success: false }
  }
}

