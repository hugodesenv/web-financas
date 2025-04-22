import { IPropsGetBalance, tryGetAccountBalance } from '@/service/bankAccountService';
import { IHTTPResponse } from '@/utils/typesUtils';
import dayjs from 'dayjs';

export async function getBankBalanceCase(params: IPropsGetBalance): Promise<IHTTPResponse> {
  if (dayjs(params.final_date).isBefore(params.initial_date)) {
    return {
      success: false,
      message: "Data final não pode ser maior que a data inicial!"
    }
  }

  return await tryGetAccountBalance(params);
}