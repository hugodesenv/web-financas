import { NextRequest, NextResponse } from "next/server";
import { isSessionValid } from "./lib/sessionLib";
import { IHTTPResponse } from "./types/httpType";

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}

const publicRoutes = [
  '/',
  '/api/login'
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let tokenJWT = request.headers.get('Authorization')?.replace('Bearer ', '') ?? request?.cookies?.get('jwt')?.value ?? '';
  let secretJWT = new TextEncoder().encode(process.env.SECRET_JWT);
  let sessionOK = await isSessionValid(tokenJWT, secretJWT);

  if (!sessionOK) {
    if (pathname.startsWith('/api')) {
      return NextResponse.json({ message: 'Token inválido!', success: false } as IHTTPResponse,)
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next();
} 