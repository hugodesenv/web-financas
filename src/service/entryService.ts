import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function tryFindAllEntry(): Promise<IHTTPResponse> {
  const { data: axiosData } = await axiosInstance.get('api/entry');
  const { data, success, message } = axiosData;

  return { success, data, message }
}