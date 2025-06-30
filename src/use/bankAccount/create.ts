import { tryCreateBankAccount } from "@/service/bankAccountService";
import { TBankAccount } from "@/type/bankAccountTypes";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function createBankAccountUse(bank: TBankAccount): Promise<IHTTPResponse> {
  const res = await tryCreateBankAccount(bank);
  return res;
}