import { NextRequest, NextResponse } from "next/server";
import { AuthService } from "./service/auth-service";
import { IHTTPResponse } from "./lib/utils.interface";

export const config = {
  matcher: '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
}

const publicRoutes = [
  '/login'
]

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (publicRoutes.includes(pathname)) {
    return NextResponse.next();
  }

  const session = AuthService.isSessionValid();
  if (!session) {
    if (pathname.startsWith('/api')) {
      return NextResponse.json({ message: 'Token inválido!', success: false } as IHTTPResponse)
    }
    return NextResponse.redirect(new URL('/login', request.url))
  }

  return NextResponse.next();
} 