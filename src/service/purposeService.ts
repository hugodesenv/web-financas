import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/utils/typesUtils";
import { AxiosRequestConfig } from "axios";

export async function tryFindAllPurpose(): Promise<IHTTPResponse> {
  try {
    const { data: axiosData } = await axiosInstance.get('api/purpose');
    return { success: true, data: axiosData.data }
  } catch (e) {
    return { success: false, data: [] }
  }
}

export async function tryFindByIDPurpose(id: number): Promise<IHTTPResponse> {
  try {
    const config: AxiosRequestConfig = {
      params: { id }
    }

    const { data: axiosData } = await axiosInstance.get('api/purpose/id', config);
    return { success: true, data: axiosData.data };
  } catch (e) {
    return { success: false, data: [] }
  }
}