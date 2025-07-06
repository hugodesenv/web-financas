import axiosInstance from "@/config/axiosConfig";
import { TPerson } from "@/type/personTypes";
import { IHTTPResponse } from "@/type/commomTypes";

export interface ITryFindAllPersonFilter {
  name?: string;
}

export async function tryFindAllPerson(props: ITryFindAllPersonFilter): Promise<IHTTPResponse> {
  try {
    const { data: axiosData } = await axiosInstance.get('api/person', { params: props });
    return { success: true, data: axiosData.data }
  } catch (_) {
    return { success: false, data: [] }
  }
}

export async function tryCreatePerson(person: TPerson): Promise<IHTTPResponse> {
  try {
    const payload = {
      name: person.name,
      nickname: person.nickname,
      active: true,
      is_client: person.is_client,
      is_company: person.is_company,
      is_employee: person.is_employee
    };

    let { data: axiosData } = await axiosInstance.post('api/person', payload);
    return { success: true, data: axiosData.data };
  } catch (_) {
    return { success: false }
  }
}

export async function tryDeletePerson(id: number): Promise<IHTTPResponse> {
  try {
    let { data: axiosData } = await axiosInstance.delete(`api/person/${id}`);
    return { success: true, data: axiosData?.data };
  } catch (_) {
    return { success: false };
  }
}

export async function tryFindByIDPerson(id: number): Promise<IHTTPResponse> {
  try {
    let { data: axiosData } = await axiosInstance.get(`api/person/${id}`);
    return { success: true, data: axiosData.data };
  } catch (_) {
    return { success: false };
  }
}

export async function tryUpdatePerson(person: TPerson): Promise<IHTTPResponse> {
  try {
    const payload = {
      id: person.id,
      data: {
        name: person.name,
        nickname: person.nickname,
        active: person.active,
      },
      type: {
        client: person.is_client,
        company: person.is_company,
        employee: person.is_employee
      }
    }

    let { data: axiosData } = await axiosInstance.put('api/person/', payload);
    return { success: true, data: axiosData.data };
  } catch (e) {
    console.log('exception', e);
    return { success: false }
  }
}