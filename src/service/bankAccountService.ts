import axiosInstance from "@/config/axiosConfig";
import { TBankAccount } from "@/type/bankAccountTypes";
import { IHTTPResponse } from "@/type/commomTypes";

const URL_BASE = 'api/bankaccount';

export async function tryFindAllBankAccount(): Promise<IHTTPResponse> {
  try {
    const { data: response } = await axiosInstance.get(URL_BASE);
    return { success: true, data: response?.data }
  } catch (e) {
    return {
      success: false,
      data: [],
      message: "Nenhum registro encontrado"
    }
  }
}

export async function tryFIndByIDBankAccount(id: number): Promise<IHTTPResponse> {
  try {
    const { data: axiosData } = await axiosInstance.get(`${URL_BASE}/${id}`);
    return { success: true, data: axiosData?.data };
  } catch (e) {
    return { success: false }
  }
}

export async function tryCreateBankAccount(bank: TBankAccount): Promise<IHTTPResponse> {
  try {
    const { data: response } = await axiosInstance.post(URL_BASE, bank);
    return { success: true, data: response?.data }
  } catch (e) {
    return {
      success: false,
      message: "Erro na criação da conta bancária"
    }
  }
}

export async function tryUpdateBankAccount(bank: TBankAccount): Promise<IHTTPResponse> {
  try {
    const { data: response } = await axiosInstance.put(URL_BASE, bank);
    return { success: true, data: response?.data }
  } catch (e) {
    return {
      success: false,
      message: "Erro na alteração da conta bancária"
    }
  }
}