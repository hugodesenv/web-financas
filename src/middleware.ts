import { NextRequest, NextResponse } from "next/server";
import { isSessionValid } from "./lib/sessionLib";
import { IHTTPResponse } from "./types/httpType";

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}

const publicRoutes = ['/', '/api/login'];

export async function middleware(request: NextRequest) {
  console.log('>> teste no middleware by Hugo');
  console.log(request.cookies.toString());

  const { pathname } = request.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let sessionOK = isSessionValid();

  if (!sessionOK) {
    if (pathname.startsWith('/api')) {
      return NextResponse.json({ message: 'Token inválido!', success: false } as IHTTPResponse,)
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next();
} 