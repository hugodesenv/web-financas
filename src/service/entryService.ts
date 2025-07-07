import axiosInstance from "@/config/axiosConfig";
import { TEntry, TEntryAPICreate, TEntryFindAllParams } from "@/type/entryTypes";
import { IHTTPResponse } from "@/type/commomTypes";
const URL_BASE = 'api/entry';

export async function tryFindAllEntry(params: TEntryFindAllParams): Promise<IHTTPResponse> {
  const { data: axiosData } = await axiosInstance.get(URL_BASE, { params });
  return { success: true, data: axiosData?.data };
}

export async function tryCreateEntry(payload: TEntry): Promise<IHTTPResponse> {
  let data: TEntryAPICreate = {
    ...payload,
    person_id: payload.person.id ?? 0,
    purpose_id: payload.purpose.id ?? 0,
    bank_account_id: payload.bankAccount.id ?? 0,
    observation: "",
  }

  const { data: axiosData } = await axiosInstance.post(URL_BASE, data);

  return {
    success: axiosData.statusCode === 200,
    data: axiosData?.data
  };
}