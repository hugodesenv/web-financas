import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/type/commomTypes";
import { TEntry, TEntryAPICreate, TEntryFindAllParams } from "@/type/entryTypes";
import dayjs from "dayjs";
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

export const entriesObjectFilteringBySpecificDate = (specificDate: string, entries: TEntry[]) => {
  const date = dayjs(specificDate);
  return entries?.filter(({ issue_date }) => {
    const issueDate = dayjs(issue_date);
    return issueDate.month() == date.month() && issueDate.year() == date.year();
  });
}