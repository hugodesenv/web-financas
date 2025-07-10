import { fIndByIDBankAccount } from "@/features/bankAccount/bankAccountRepository";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function findByIDBankAccountUse(id: number): Promise<IHTTPResponse> {
  const { success, data } = await fIndByIDBankAccount(id);
  return { success, data: data }
}