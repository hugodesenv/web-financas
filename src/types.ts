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
}

export enum EnCookieKey {
  JWT = 'jwt'
};