import { jwtVerify } from "jose";

export async function isSessionValid(jwt: string, jwtKey: Uint8Array) {
  try {
    await jwtVerify(jwt, jwtKey, { algorithms: ['HS256'] });
    return true;
  } catch (_) {
    return false;
  }
}

export async function saveSession(ptoken: string) {

}