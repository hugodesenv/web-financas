
import { tryFindAllBankAccount } from '@/service/bankAccountService';
import { IHTTPResponse } from '@/type/commomTypes';

export async function findAllBankAccountUseCase(): Promise<IHTTPResponse> {
  const response = await tryFindAllBankAccount();
  return response;
}