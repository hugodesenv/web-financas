import { tryDeletePerson } from "@/features/person/personRepository";

export async function deletePersonCase(id: number): Promise<boolean> {
  const { success } = await tryDeletePerson(id);
  return success;
}