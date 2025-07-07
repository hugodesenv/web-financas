import { tryFindAllEntry } from "@/service/entryService";
import { TEntry, TEntryAPIResponse, TEntryFindAllParams } from "@/type/entryTypes";
import dayjs from "dayjs";

interface IProps {
  issue_date: string;
}

export async function findAllEntryUseCase({ issue_date }: IProps): Promise<TEntry[]> {
  // rule: today less 6 months. If some day it changes, please check this rule at own page.
  const initial_issue_date = dayjs(issue_date).subtract(6, 'month');

  const paramsAPI: TEntryFindAllParams = {
    initial_issue_date: initial_issue_date.format('YYYY-MM-DD'),
    final_issue_date: issue_date
  }

  const apiResponse = await tryFindAllEntry(paramsAPI);

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