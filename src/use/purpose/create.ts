import { tryCreatePurpose } from "@/service/purposeService";
import { TPurpose } from "@/type/purposeTypes";

export async function createPurposeUseCase(purpose: TPurpose): Promise<boolean> {
  const { success } = await tryCreatePurpose(purpose);
  return success === true;
}