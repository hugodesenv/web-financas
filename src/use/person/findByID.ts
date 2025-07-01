import { tryFindByIDPerson } from "@/config/service/personService";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function findByIDPersonCase(id: number): Promise<IHTTPResponse> {
  const { success, data } = await tryFindByIDPerson(id);
  return { success, data: data?.[0] }
}