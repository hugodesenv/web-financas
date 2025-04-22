import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function tryGetEntries(finalDate: string): Promise<IHTTPResponse> {
  const params = {
    issue_date_initial: '1899-12-31',
    issue_date_final: finalDate,
  }

  const { data: axiosData } = await axiosInstance.get('/entry', { params });
  const { data, success, message } = axiosData;

  return { success, data, message }
}