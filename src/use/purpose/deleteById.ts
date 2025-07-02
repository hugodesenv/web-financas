import { tryDeletePurposeByID } from "@/service/purposeService";
import { IHTTPResponse } from "@/type/commomTypes";

export async function deletePurposeByID(id: number): Promise<IHTTPResponse> {
  return await tryDeletePurposeByID(id);
}