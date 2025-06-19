import { ITryFindAllPersonFilter, tryFindAllPerson } from "@/service/personService";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function findAllPersonCase(props: ITryFindAllPersonFilter): Promise<IHTTPResponse> {
  return await tryFindAllPerson(props);
}