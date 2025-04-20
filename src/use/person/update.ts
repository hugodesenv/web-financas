import { tryUpdatePerson } from "@/service/personService";
import { TPerson } from "@/type/personTypes";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function updatePersonCase(person: TPerson): Promise<IHTTPResponse> {
  if (!person.id) {
    return {
      success: false,
      message: "ID not found"
    }
  }

  return await tryUpdatePerson(person);
}