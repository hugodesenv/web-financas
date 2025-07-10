import { tryFindAllPurpose } from "@/features/purpose/purposeRepository";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function findAllPurposeCase(): Promise<IHTTPResponse> {
  return await tryFindAllPurpose();
}