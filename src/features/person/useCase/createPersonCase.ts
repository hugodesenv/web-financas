import { tryCreatePerson } from "@/features/person/personRepository";
import { TPerson } from "@/features/person/personTypes";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function createPersonCase(person: TPerson): Promise<IHTTPResponse> {
  const response = await tryCreatePerson(person);
  return response;
}