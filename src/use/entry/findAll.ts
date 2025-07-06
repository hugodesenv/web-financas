import { tryFindAllEntry } from "@/service/entryService";
import { TEntry, TEntryAPIResponse } from "@/type/entryTypes";

export async function findAllEntryUseCase(): Promise<TEntry[]> {
  console.log('find all entries');
  
  const apiResponse = await tryFindAllEntry();

  const entryResponse: TEntry[] = apiResponse?.data.map((e: TEntryAPIResponse) => {
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