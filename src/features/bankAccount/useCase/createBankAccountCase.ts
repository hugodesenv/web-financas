import { createBankAccount } from "@/features/bankAccount/bankAccountRepository";
import { TBankAccount } from "@/features/bankAccount/bankAccountTypes";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function createBankAccountUse(bank: TBankAccount): Promise<IHTTPResponse> {
  const res = await createBankAccount(bank);
  return res;
}