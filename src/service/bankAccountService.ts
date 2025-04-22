import axiosInstance from "@/config/axiosConfig";
import { IHTTPResponse } from "@/utils/typesUtils";

/**
 * dates: format YYYY-MM-DD.
 */
export interface IPropsGetBalance {
  initial_date: string;
  final_date: string;
}

export async function tryGetAccountBalance(params: IPropsGetBalance): Promise<IHTTPResponse> {
  try {
    const { data: response } = await axiosInstance.get('/bank-account/account-balance', { params });
    return { success: true, data: response }
  } catch (e) {
    return {
      success: false,
      data: [],
      message: "Nenhum registro encontrado"
    }
  }
}