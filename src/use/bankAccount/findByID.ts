import { tryFIndByIDBankAccount } from "@/service/bankAccountService";
import { IHTTPResponse } from "@/type/commomTypes";

export async function findByIDBankAccountUse(id: number): Promise<IHTTPResponse> {
  const { success, data } = await tryFIndByIDBankAccount(id);
  return { success, data: data?.[0] }
}