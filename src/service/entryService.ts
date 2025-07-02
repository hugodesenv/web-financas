import axiosInstance from "@/config/axiosConfig";
import { TEntry } from "@/type/entryTypes";
import { IHTTPResponse } from "@/type/commomTypes";
const URL_BASE = 'api/entry';

export async function tryFindAllEntry(): Promise<IHTTPResponse> {
  const { data: axiosData } = await axiosInstance.get(URL_BASE);
  return { success: true, data: axiosData?.data };
}

export async function tryCreateEntry(payload: TEntry): Promise<IHTTPResponse> {
  const { data: axiosData } = await axiosInstance.post(URL_BASE, payload);

  return {
    success: axiosData.statusCode === 200,
    data: axiosData?.data
  };
}