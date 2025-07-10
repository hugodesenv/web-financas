import { tryUpdatePerson } from "@/features/person/personRepository";
import { IHTTPResponse } from "@/utils/commomTypes";
import { TPerson } from "@/features/person/personTypes";

export async function updatePersonCase(person: TPerson): Promise<IHTTPResponse> {
  if (!person.id) {
    return {
      success: false,
      message: "ID not found"
    }
  }

  return await tryUpdatePerson(person);
}