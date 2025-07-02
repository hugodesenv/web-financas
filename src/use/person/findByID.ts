import { tryFindByIDPerson } from "@/service/personService";
import { IHTTPResponse } from "@/type/commomTypes";

export async function findByIDPersonCase(id: number): Promise<IHTTPResponse> {
  const { success, data } = await tryFindByIDPerson(id);
  return { success, data: data?.[0] }
}