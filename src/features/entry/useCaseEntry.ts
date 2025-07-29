import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/utils/commomTypes";
import { TEntry, TEntryAPICreate, TEntryAPIResponse, TEntryFindAllParams } from "./entryTypes";

export function useCaseEntry() {

  async function findAllEntries(params: TEntryFindAllParams): Promise<TEntry[]> {
    const { data: axiosData } = await axiosInstance.get('api/entry', { params });

    const entryResponse: TEntry[] = axiosData?.data.map((e: TEntryAPIResponse) => {
      return {
        id: e.id,
        issue_date: e.issue_date,
        type: e.type,
        person: {
          id: e.person_id,
          name: e.person_name,
        },
        purpose: {
          id: e.purpose_id,
          description: e.purpose_description
        },
        mode: e.mode,
        bankAccount: {
          id: e.bank_account_id,
          description: e.bank_account_description
        },
        total: e.total,
      };
    });

    return entryResponse ?? [];
  }

  async function createEntry(payload: TEntry): Promise<IHTTPResponse> {
    let data: TEntryAPICreate = {
      ...payload,
      person_id: payload.person.id ?? 0,
      purpose_id: payload.purpose.id ?? 0,
      bank_account_id: payload.bankAccount.id ?? 0,
      observation: "",
    }

    const { data: axiosData } = await axiosInstance.post('api/entry', data);

    return {
      success: axiosData.statusCode === 200,
      data: axiosData?.data
    };
  }

  async function deleteEntry(id: number): Promise<IHTTPResponse> {
    if (id <= 0) {
      return { success: false, message: "ID must be grather than zero" }
    }

    const { data: axiosData } = await axiosInstance.delete(`api/entry/` + id);

    return {
      success: axiosData.statusCode === 200,
      data: axiosData?.data
    }
  }

  return { findAllEntries, createEntry, deleteEntry }
}