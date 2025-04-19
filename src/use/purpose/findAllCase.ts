import { tryFindAllPurpose } from "@/service/purposeService";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function findAllPurposeCase(): Promise<IHTTPResponse> {
  return await tryFindAllPurpose();
}