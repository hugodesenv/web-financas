import { tryFindAllBankAccount } from '@/service/bankAccountService';
import { IHTTPResponse } from '@/utils/typesUtils';

export async function findAllBankAccountUseCase(): Promise<IHTTPResponse> {
  const response = await tryFindAllBankAccount();
  return response;
}