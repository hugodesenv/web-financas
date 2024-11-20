import { EnCookieKey } from "@/lib/libTypes";
import { jwtVerify } from "jose";
import Cookies from 'universal-cookie';

export async function isSessionValid(jwt: string, jwtKey: Uint8Array) {
  try {
    await jwtVerify(jwt, jwtKey, { algorithms: ['HS256'] });
    return true;
  } catch (_) {
    return false;
  }
}

export async function saveSession(token: string) {
  const cookies = new Cookies(null, { path: '/' });
  cookies.set(EnCookieKey.JWT, token);
}
