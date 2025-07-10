import { ITryFindAllPersonFilter, tryFindAllPerson } from "@/features/person/personRepository";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function findAllPersonCase(props: ITryFindAllPersonFilter): Promise<IHTTPResponse> {
  let people = await tryFindAllPerson(props);
  return people;
}