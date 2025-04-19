import axiosInstance from "@/config/axiosConfig";
import { TPerson } from "@/type/personTypes";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function tryFindAllPerson(): Promise<IHTTPResponse> {
  try {
    const { data: axiosData } = await axiosInstance.get('/person/');
    return { success: true, data: axiosData.data }
  } catch (e) {
    return { success: false, data: [] }
  }
}

export async function tryCreatePerson(person: TPerson): Promise<IHTTPResponse> {
  try {
    const payload = {
      name: person.name,
      nickname: person.nickname,
      active: true,
      type: {
        client: person.is_client,
        company: person.is_company,
        employee: person.is_employee
      }
    };

    let { data } = await axiosInstance.post('/person', payload);
    return data;
  } catch (e) {
    return { success: false }
  }
}

export async function tryDeletePerson(id: number): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.delete('/person/', { params: { id } });
    return {
      success: true,
      data
    };
  } catch (e) {
    return { success: false };
  }
}

export async function tryFindByIDPerson(id: number): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.get('/person/find/', { params: { id } });
    return {
      success: true,
      data: data?.data
    };
  } catch (_) {
    return { success: false };
  }
}


////

export async function updatePerson(person: TPerson): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.put('/api/person', person);
    return data;
  } catch (e) {
    return { success: false }
  }
}