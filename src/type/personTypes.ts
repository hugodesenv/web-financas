export type TPerson = {
  name: string;
  nickname: string;
  id?: number,
  is_client: boolean,
  is_company: boolean,
  is_employee: boolean,
}

export const TPersonDefaultValues: TPerson = {
  name: "",
  nickname: "",
  is_client: false,
  is_company: false,
  is_employee: false
}

export interface IPersonType {
  type: string,
  caption: string
}

export const PersonType = [
  { type: 'client', caption: 'Cliente' },
  { type: 'company', caption: 'Empresa' },
  { type: 'employee', caption: 'Funcionário' },
] as IPersonType[];