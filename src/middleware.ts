import { NextRequest, NextResponse } from "next/server";
import { IHTTPResponse } from "./types/httpType";
import { SessionLib } from "./lib/sessionLib";

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}

const publicRoutes = [
  '/'
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  let sessionLib = new SessionLib();
  if (!sessionLib.isSessionValid()) {
    if (pathname.startsWith('/api')) {
      return NextResponse.json({ message: 'Token inválido!', success: false } as IHTTPResponse)
    }
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next();
} 