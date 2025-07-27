import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/utils/commomTypes";
import { useState } from "react";
import { TBankAccount, URL_BASE_BANK_ACCOUNT } from "./bankAccountTypes";

export function useBankAccount() {
  const [loading, setLoading] = useState(false);

  async function createAccount(bank: TBankAccount): Promise<IHTTPResponse> {
    try {
      setLoading(true);
      const { data: response } = await axiosInstance.post(URL_BASE_BANK_ACCOUNT, bank);
      return { success: true, data: response?.data }
    } catch (e) {
      return { success: false, message: "Erro na criação da conta bancária" }
    } finally {
      setLoading(false);
    }
  }

  async function updateAccount(data: TBankAccount, id: number): Promise<IHTTPResponse> {
    try {
      setLoading(true);
      const { data: response } = await axiosInstance.put(URL_BASE_BANK_ACCOUNT, { ...data, id });
      return { success: true, data: response?.data }
    } catch (e) {
      return { success: false, message: "Erro na alteração da conta bancária" }
    } finally {
      setLoading(false);
    }
  }

  async function findAll(): Promise<IHTTPResponse> {
    try {
      setLoading(true);
      const { data: response } = await axiosInstance.get(URL_BASE_BANK_ACCOUNT);
      return { success: true, data: response?.data }
    } catch (e) {
      return {
        success: false,
        data: [],
        message: "Nenhum registro encontrado"
      }
    } finally {
      setLoading(false);
    }
  }

  async function findByID(id: number): Promise<IHTTPResponse> {
    try {
      setLoading(true);
      const { data: axiosData } = await axiosInstance.get(`${URL_BASE_BANK_ACCOUNT}/${id}`);
      return { success: true, data: axiosData?.data };
    } catch (e) {
      return { success: false }
    } finally {
      setLoading(false);
    }
  }

  return { createAccount, updateAccount, findAll, findByID, loading }
}