import { NextRequest, NextResponse } from "next/server";

const authRoutes = [];
const protectedRoutes = ['/api/fixed-release'];
const publicRoutes = [];

export function middleware(ARequest: NextRequest) {
  if (protectedRoutes.includes(ARequest.nextUrl.pathname)) {
    // TODO: Substituir por esquema de autenticação JWT.
    const username = ARequest.headers.get('username');
    if (username !== 'teste_hugo') {
      return NextResponse.json({ data: "Access denied." }, { status: 401 });
    }
    // Fim do TODO
  }

  return NextResponse.next();
}