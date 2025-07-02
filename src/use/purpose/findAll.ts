import { tryFindAllPurpose } from "@/service/purposeService";
import { IHTTPResponse } from "@/type/commomTypes";

export async function findAllPurposeCase(): Promise<IHTTPResponse> {
  return await tryFindAllPurpose();
}