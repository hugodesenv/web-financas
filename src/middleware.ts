import { NextRequest, NextResponse } from "next/server";

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

  /*
  let jwt = {
    secret: new TextEncoder().encode(process.env.SECRET_JWT),
    token: request.headers.get('Authorization')?.replace('Bearer ', '') ?? request?.cookies?.get(EnCookieKey.JWT)?.value ?? ''
  }

  let sessionOK = await isSessionValid(jwt.token, jwt.secret);

  console.log({
    sessionOK,
    token: jwt.token,
    secret: jwt.secret
  })

  if (!sessionOK) {
    return pathname.startsWith('/api')
      ? NextResponse.json({ message: 'Token inválido!', success: false } as IHTTPResponse)
      : NextResponse.redirect(new URL('/', request.url));
  }
*/
  return NextResponse.next();
} 