import axiosInstance from "@/lib/axiosLib";
import { IHTTPResponse } from "@/types/httpType";
import { ILoginDto } from "@/types/userType";
import { HttpStatusCode } from "axios";

export async function tryLogin(data: ILoginDto): Promise<IHTTPResponse> {
  try {
    let apiResponse = await axiosInstance.post('/api/login', data);

    return {
      success: apiResponse.status == HttpStatusCode.Ok
    };
  } catch (e) {
    return { success: false }
  }
}