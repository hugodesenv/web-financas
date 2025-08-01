import { TBankAccount, TBankAccountDefaultValues } from "../bankAccount/bankAccountTypes";
import { TPerson, TPersonDefaultValues } from "../person/personTypes";
import { TPurpose, TPurposeDefaultValue } from "../purpose/purposeTypes";

export enum EnEntryType {
  PAYABLE = "PAYABLE",
  RECEIVABLE = "RECEIVABLE"
}

export const EntryTypeToDescription = {
  'PAYABLE': 'Saída',
  'RECEIVABLE': 'Entrada'
}

export enum EnEntryMode {
  FORECAST = "FORECAST",
  CONFIRMED = "CONFIRMED"
}

export const EntryModeToDescription = {
  'FORECAST': 'Previsão',
  'CONFIRMED': 'Confirmado'
}
export interface TEntry {
  id: number;
  person: TPerson,
  purpose: TPurpose,
  bankAccount: TBankAccount,
  total: number;
  type: EnEntryType;
  mode: EnEntryMode,
  observation?: string;
  issue_date: string;
}

export const TEntryDefaultValue: TEntry = {
  mode: EnEntryMode.CONFIRMED,
  type: EnEntryType.RECEIVABLE,
  person: TPersonDefaultValues,
  purpose: TPurposeDefaultValue,
  bankAccount: TBankAccountDefaultValues,
  total: 0,
  id: 0,
  issue_date: "",
}

export type TEntryAPIResponse = {
  id: number;
  issue_date: string;
  type: string;
  person_id: number;
  person_name: string;
  purpose_id: number;
  purpose_description: string;
  mode: string;
  bank_account_id: number;
  bank_account_description: string;
  total: number;
};

export type TEntryAPICreate = {
  type: string;
  person_id: number;
  purpose_id: number;
  bank_account_id: number;
  issue_date: string;
  observation: string;
  mode: string;
  total: number;
}

export type TEntryFindAllParams = {
  initial_issue_date?: string;
  final_issue_date?: string;
}

export type IBuildEntriesByPurpose = {
  [purposeID: number]: {
    id: number;
    description: string;
    receive: number;
    pay: number;
    balance: number;
  }
}