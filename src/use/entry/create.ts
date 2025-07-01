import { tryCreateEntry } from "@/service/entryService";
import { TEntry } from "@/type/entryTypes";

export async function createEntryCase(payload: TEntry): Promise<boolean> {
  try {
    const response = await tryCreateEntry(payload);
    return response.success;
  } catch (e) {
    return false;
  }
}