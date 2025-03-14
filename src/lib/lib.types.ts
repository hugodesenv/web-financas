export interface IHTTPResponse {
  success: boolean;
  message?: any;
  data?: any
};

export enum EnRoute {
  HOME = '/pages/home',
  LOGIN = '/'
};

export type ILoginDto = {
  email: string;
  password: string;
};

export type IPersonDto = {
  name: string;
  nickname: string;
  id?: number,
  createdAt?: Date,
  is_client: boolean,
  is_company: boolean,
  is_employee: boolean,
}

export enum EnCookieKey {
  JWT = 'jwt'
};

export interface IPersonType {
  type: string,
  caption: string
}

export const PersonType = [
  { type: 'client', caption: 'Cliente' },
  { type: 'company', caption: 'Empresa' },
  { type: 'employee', caption: 'Funcionário' },
] as IPersonType[];

export type ICategory = {
  id: number,
  description: string
};