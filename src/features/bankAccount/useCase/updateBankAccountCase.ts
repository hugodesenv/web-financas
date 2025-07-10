import { updateBankAccount } from "@/features/bankAccount/bankAccountRepository";
import { TBankAccount } from "@/features/bankAccount/bankAccountTypes";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function updateBankAccountUse(data: TBankAccount, id: number): Promise<IHTTPResponse> {
  const res = await updateBankAccount({ ...data, id });
  return res;
}