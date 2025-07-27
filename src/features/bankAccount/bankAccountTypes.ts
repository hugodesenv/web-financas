export type TBankAccount = {
  id?: number;
  description: string;
}

export const TBankAccountDefaultValues: TBankAccount = {
  id: 0,
  description: ""
}

export const URL_BASE_BANK_ACCOUNT = 'api/bankaccount';