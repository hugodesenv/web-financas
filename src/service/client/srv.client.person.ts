import axiosInstance from "@/lib/lib.axios";
import { IHTTPResponse, IPersonDto } from "@/lib/lib.types";

export async function fetchPersonAll(): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.get('/api/person');
    return data;
  } catch (_) {
    return { success: false }
  }
}

export async function fetchPersonByID(id: number): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.get('/api/person', { params: { id } });
    return data;
  } catch (_) {
    return { success: false };
  }
}

export async function savePerson(person: IPersonDto): Promise<IHTTPResponse> {
  try {
    // por enquanto não existe complexidade que necessite separar esses dois em métodos diferentes.
    // dessa forma, estou tratando dessa maneira.
    let { data } = (person.id ?? 0) > 0
      ? await axiosInstance.put('/api/person', person)
      : await axiosInstance.post('/api/person', person);
    
    return data;
  } catch (e) {
    return { success: false }
  }
}