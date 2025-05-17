import { tryDeletePurposeByID } from "@/service/purposeService";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function deletePurposeByID(id: number): Promise<IHTTPResponse> {
  return await tryDeletePurposeByID(id);
}