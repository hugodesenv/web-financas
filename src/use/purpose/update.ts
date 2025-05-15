import { TPurpose } from "@/type/purposeTypes";
import { findByIDPurposeUseCase } from "./findByID";
import { IHTTPResponse } from "@/utils/typesUtils";
import { MESSAGES } from "@/utils/constantsUtils";

export async function updatePurposeUseCase(purpose: TPurpose): Promise<IHTTPResponse> {
  if (!purpose.id) {
    return {
      success: false,
      message: MESSAGES.record_not_found
    }
  }

  const a = await tryupdat
}