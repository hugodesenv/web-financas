import { tryFindByIDPurpose } from "@/service/purposeService";
import { IHTTPResponse } from "@/type/commomTypes";

export async function findByIDPurposeUseCase(id: number): Promise<IHTTPResponse> {
  if (id > 0) {
    const { data } = await tryFindByIDPurpose(id);
    return { success: true, data };
  }

  return { success: false };
}