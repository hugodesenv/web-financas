
import { findAllBankAccount } from '@/features/bankAccount/bankAccountRepository';
import { IHTTPResponse } from '@/utils/commomTypes';

export async function findAllBankAccountUseCase(): Promise<IHTTPResponse> {
  const response = await findAllBankAccount();
  return response;
}