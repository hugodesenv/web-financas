export interface IHTTPResponse {
  success: boolean;
  message?: any;
  data?: any
};

export enum EnRoute {
  HOME = '/pages/home',
  LOGIN = '/'
};

export enum EnCookieKey {
  JWT = 'jwt'
};