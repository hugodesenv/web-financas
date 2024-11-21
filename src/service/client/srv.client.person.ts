import axiosInstance from "@/lib/lib.axios";
import { IHTTPResponse, IPersonDto } from "@/lib/lib.types";

export async function fetchAll(): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.get('/api/person');
    return data;
  } catch (_) {
    return { success: false }
  }
}

export async function save(person: IPersonDto): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.post('/api/person', person);
    return data;
  } catch (_) {
    return { success: false }
  }
}