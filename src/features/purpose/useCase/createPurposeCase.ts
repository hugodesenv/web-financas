import { tryCreatePurpose } from "@/features/purpose/purposeRepository";
import { TPurpose } from "@/features/purpose/purposeTypes";

export async function createPurposeUseCase(purpose: TPurpose): Promise<boolean> {
  const { success } = await tryCreatePurpose(purpose);
  return success === true;
}