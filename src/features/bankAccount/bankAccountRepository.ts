import axiosInstance from "@/config/axiosConfig";
import { TBankAccount } from "@/features/bankAccount/bankAccountTypes";
import { IHTTPResponse } from "@/utils/commomTypes";

const URL_BASE = 'api/bankaccount';

export async function findAllBankAccount(): Promise<IHTTPResponse> {
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

export async function fIndByIDBankAccount(id: number): Promise<IHTTPResponse> {
  try {
    const { data: axiosData } = await axiosInstance.get(`${URL_BASE}/${id}`);
    return { success: true, data: axiosData?.data };
  } catch (e) {
    return { success: false }
  }
}

export async function createBankAccount(bank: TBankAccount): Promise<IHTTPResponse> {
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

export async function updateBankAccount(bank: TBankAccount): Promise<IHTTPResponse> {
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