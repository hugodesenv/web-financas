import { IHTTPResponse } from "@/interface/intf.http.response";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import * as jose from 'jose';

export async function POST(request: NextRequest) {
  const schema = z.object({
    username: z.string({ message: 'O usuário é obrigatório' }),
    password: z.string({ message: 'A senha é obrigatória' })
  });

  const json = await request.json();
  const { error, data, success } = schema.safeParse(json);

  if (!success) {
    return NextResponse.json({
      success: false,
      message: error
    } as IHTTPResponse, { status: HttpStatusCode.NotAcceptable })
  }

  //==> vamos fingir que aqui vamos buscar os dados lá no banco de dados e está autenticado.
  let isAuthenticated = data.username == 'hugo' && data.password == 'silva';

  if (!isAuthenticated) {
    return NextResponse.json({
      success: false,
      message: 'Username or password are incorrect'
    } as IHTTPResponse, { status: HttpStatusCode.NotAcceptable })
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