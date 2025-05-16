import { tryDeletePurposeByID } from "@/service/purposeService";
import { MESSAGES } from "@/utils/constantsUtils";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function deletePurposeByID(id: number): Promise<IHTTPResponse> {
  if (id <= 0) {
    return { success: false, message: MESSAGES.id_must_be_grather_than_zero };
  }

  return await tryDeletePurposeByID(id);
}