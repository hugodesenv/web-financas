import { tryFindByIDPurpose } from "@/features/purpose/purposeRepository";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function findByIDPurposeUseCase(id: number): Promise<IHTTPResponse> {
  if (id > 0) {
    const { data } = await tryFindByIDPurpose(id);
    return { success: true, data };
  }

  return { success: false };
}