import { tryUpdatePurpose } from "@/features/purpose/purposeRepository";
import { TPurpose } from "@/features/purpose/purposeTypes";
import { MESSAGES } from "@/utils/constantsUtils";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function updatePurposeUseCase(purpose: TPurpose): Promise<IHTTPResponse> {
  if (!purpose.id) {
    return { success: false, message: MESSAGES.record_not_found }
  }

  const { success } = await tryUpdatePurpose(purpose);

  return { success, message: MESSAGES.changed_record }
}