import { tryUpdateBankAccount } from "@/service/bankAccountService";
import { TBankAccount } from "@/type/bankAccountTypes";
import { IHTTPResponse } from "@/type/commomTypes";

export async function updateBankAccountUse(data: TBankAccount, id: number): Promise<IHTTPResponse> {
  const res = await tryUpdateBankAccount({ ...data, id });
  return res;
}