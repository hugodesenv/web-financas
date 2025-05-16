import axiosInstance from "@/config/axiosConfig";
import { TPurpose } from "@/type/purposeTypes";
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

export async function tryCreatePurpose(purpose: TPurpose): Promise<IHTTPResponse> {
  try {
    const { data: axiosData, status } = await axiosInstance.post('api/purpose', purpose);
    return { success: status === 200, data: axiosData.data };
  } catch (e) {
    return { success: false, data: [] };
  }
}

export async function tryUpdatePurpose(purpose: TPurpose): Promise<IHTTPResponse> {
  try {
    const { data: axiosData, status } = await axiosInstance.put('api/purpose', purpose);
    return { success: status === 200, data: axiosData };
  } catch (e) {
    return { success: false, data: [] }
  }
}

export async function tryDeletePurposeByID(id: number): Promise<IHTTPResponse> {
  try {
    const config: AxiosRequestConfig = {
      params: { id }
    }

    const { data: axiosData, status } = await axiosInstance.delete('api/purpose', config);

    console.log('purpose response', axiosData);

    return { success: status === 200, data: axiosData.data };
  } catch (e) {
    return { success: false, data: [] }
  }
}