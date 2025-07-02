import { tryUpdatePurpose } from "@/service/purposeService";
import { TPurpose } from "@/type/purposeTypes";
import { MESSAGES } from "@/utils/constantsUtils";
import { IHTTPResponse } from "@/type/commomTypes";

export async function updatePurposeUseCase(purpose: TPurpose): Promise<IHTTPResponse> {
  if (!purpose.id) {
    return { success: false, message: MESSAGES.record_not_found }
  }

  const { success } = await tryUpdatePurpose(purpose);

  return { success, message: MESSAGES.changed_record }
}