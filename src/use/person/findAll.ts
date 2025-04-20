import { tryFindAllPerson } from "@/service/personService";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function findAllPersonCase(): Promise<IHTTPResponse> {
  return await tryFindAllPerson();
}