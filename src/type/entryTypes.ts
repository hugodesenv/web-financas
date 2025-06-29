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
  observation?: string;
  issue_date: string;
  purpose: {
    id: number;
    description: string;
  }
}

export const TEntryDefaultValue: TEntry = {
  mode: EnEntryMode.CONFIRMED,
  type: EnEntryType.RECEIVABLE,
  total: "0.00",
  id: 0,
  person_id: 0,
  purpose_id: 0,
  bank_account_id: "",
  created_at: "",
  issue_date: "",
  observation: "",
  purpose: {
    id: 0,
    description: ""
  }
}