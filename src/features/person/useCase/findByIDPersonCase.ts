import { tryFindByIDPerson } from "@/features/person/personRepository";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function findByIDPersonCase(id: number): Promise<IHTTPResponse> {
  const { success, data } = await tryFindByIDPerson(id);
  return { success, data }
}