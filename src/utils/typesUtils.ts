export interface IHTTPResponse {
  success: boolean;
  message?: any;
  data?: any
};

export interface IAPIFinancasResponse {
  statusCode: number;
  message?: string;
  data?: Record<string, any>
}

export enum EnRoute {
  HOME = '/pages/home',
  LOGIN = '/'
};

export enum EnCookieKey {
  JWT = 'jwt'
};