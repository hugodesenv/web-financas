import { createEntry } from "@/features/entry/entryRepository";
import { TEntry } from "@/features/entry/entryTypes";

export async function createEntryCase(payload: TEntry): Promise<boolean> {
  try {
    const response = await createEntry(payload);
    return response.success;
  } catch (e) {
    return false;
  }
}