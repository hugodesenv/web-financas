import { tryDeletePurposeByID } from "@/features/purpose/purposeRepository";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function deletePurposeByID(id: number): Promise<IHTTPResponse> {
  return await tryDeletePurposeByID(id);
}