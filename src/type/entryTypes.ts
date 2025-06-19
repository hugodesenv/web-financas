export enum EnEntryType {
  PAYABLE = "PAYABLE",
  RECEIVABLE = "RECEIVABLE"
}

export enum EnEntryMode {
  FORECAST = "FORECAST",
  CONFIRMED = "CONFIRMED"
}

export interface TEntry {
  id: number;
  person_id: number;
  purpose_id: number;
  total: string;
  type: EnEntryType;
  mode: EnEntryMode,
  bank_account_id: string;
  created_at: string;
  issue_date: string;
  purpose: {
    id: number;
    description: string;
  }
}