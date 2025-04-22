import { tryGetEntries } from "@/service/entryService";
import { IHTTPResponse } from "@/utils/typesUtils";
import dayjs from "dayjs";

export async function getEntriesCase(finalDate: string): Promise<IHTTPResponse> {
  if (dayjs(finalDate).isValid() === false) {
    return { success: false, message: 'Data inválida para consulta dos lançamentos' }
  }

  return await tryGetEntries(finalDate);
}