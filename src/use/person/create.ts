import { tryCreatePerson } from "@/service/personService";
import { TPerson } from "@/type/personTypes";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function createPersonCase(person: TPerson): Promise<IHTTPResponse> {
  const response = await tryCreatePerson(person);
  return response;
}