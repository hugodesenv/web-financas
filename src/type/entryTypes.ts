export interface IEntryDTO {
  id: number;
  person_id: number;
  purpose_id: number;
  total: string;
  type: string;
  bank_account_id: string;
  created_at: string;
  issue_date: string;
  purpose: {
    id: number;
    description: string;
  }
}