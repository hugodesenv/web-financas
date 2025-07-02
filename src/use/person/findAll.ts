import { ITryFindAllPersonFilter, tryFindAllPerson } from "@/service/personService";
import { IHTTPResponse } from "@/type/commomTypes";

export async function findAllPersonCase(props: ITryFindAllPersonFilter): Promise<IHTTPResponse> {
  let people = await tryFindAllPerson(props);
  return people;
}