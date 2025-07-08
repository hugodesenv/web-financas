import { tryFindAllEntry } from "@/service/entryService";
import { TEntry, TEntryAPIResponse, TEntryFindAllParams } from "@/type/entryTypes";

export async function findAllEntryUseCase(props: TEntryFindAllParams): Promise<TEntry[]> {
  const apiResponse = await tryFindAllEntry(props);

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