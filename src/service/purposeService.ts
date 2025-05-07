import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function tryFindAllPurpose(): Promise<IHTTPResponse> {
  try {
    const { data: axiosData } = await axiosInstance.get('api/purpose');
    return { success: true, data: axiosData.data }
  } catch (e) {
    return { success: false, data: [] }
  }
}