import { tryUpdatePerson } from "@/service/personService";
import { IHTTPResponse } from "@/type/commomTypes";
import { TPerson } from "@/type/personTypes";

export async function updatePersonCase(person: TPerson): Promise<IHTTPResponse> {
  if (!person.id) {
    return {
      success: false,
      message: "ID not found"
    }
  }

  return await tryUpdatePerson(person);
}