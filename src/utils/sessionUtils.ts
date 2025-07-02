import { EnCookieKey } from "@/type/commomTypes";
import { jwtVerify } from "jose";
import Cookies from 'universal-cookie';

/*
export async function isSessionValid(jwt: string, jwtKey: Uint8Array) {
  try {
    await jwtVerify(jwt, jwtKey, { algorithms: ['HS256'] });
    return true;
  } catch (_) {
    return false;
  }
}
*/

export async function saveSession(token: string) {
  let cookies = new Cookies(null, { path: '/' });
  cookies.set(EnCookieKey.JWT, token);
}

export function getJWTFromCookie() {
  let cookies = new Cookies(null, { path: '/' });
  return cookies.get(EnCookieKey.JWT);
}

