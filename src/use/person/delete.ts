import { tryDeletePerson } from "@/service/personService";

export async function deletePersonCase(id: number): Promise<boolean> {
  const { success } = await tryDeletePerson(id);
  return success;
}