import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as jose from 'jose';
import { IHTTPResponse } from "@/types/httpType";
import { verifyCredential } from "@/service/userSrv";

export async function POST(request: NextRequest) {
  const body_schema = z.object({
    email: z.string({ message: 'E-mail is undefined' }),
    password: z.string({ message: 'Password is undefined' })
  });

  const { success, data, error } = await body_schema.safeParseAsync(await request.json());

  if (!success) {
    return NextResponse.json({
      success: false,
      message: error
    } as IHTTPResponse, { status: HttpStatusCode.NotAcceptable })
  }

  let isAuthenticated = await verifyCredential(data.email, data.password);

  if (!isAuthenticated) {
    return NextResponse.json({
      success: false,
      message: 'Username or password are incorrect'
    } as IHTTPResponse, { status: HttpStatusCode.Forbidden })
  }

  // Nessa etapa, obtemos as rotas que o usuário tem acesso e armazenamos dentro do token
  // porque no middleware de autenticação, é realizado as devidas validações.
  // @ Hugo: Hoje é só teste... Isso abaixo deve buscar do banco de dados.
  let allowed_endpoints = [
    '/api/fixed-release'
  ];

  let tokenJWT = await new jose.SignJWT({ allowed_endpoints })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER as any)
    .setAudience(process.env.JWT_AUDIENCE as any)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME as any)
    .sign(new TextEncoder().encode(process.env.SECRET_JWT));

  return NextResponse.json({
    success: true,
    message: tokenJWT
  } as IHTTPResponse, { status: HttpStatusCode.Ok })
}