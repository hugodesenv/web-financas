/**
 * Olá, esse Middleware foi criado po Hugo Souza
 * 06/10/2024 - A ideia é: Obter o JWT e verificar se o mesmo é válido.
 */

import { IHTTPResponse } from "@/interface/intf.http.response";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import * as jose from 'jose';

export async function AuthMiddleware(ARequest: NextRequest) {
  let bearerToken = ARequest.headers.get('authorization')?.split(' ')[1];
  
  if (!bearerToken) {
    return NextResponse.json({
      message: 'Token is required',
      success: false
    } as IHTTPResponse, { status: HttpStatusCode.NotAcceptable })
  }

  //--> gerando um token teste
  /*let testToken = await new jose.SignJWT()
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setIssuer(process.env.JWT_ISSUER as any)
    .setAudience(process.env.JWT_AUDIENCE as any)
    .setExpirationTime(process.env.JWT_EXPIRATION_TIME as any)
    .sign(secretKey as any);*/

  try {
    let secretKey = new TextEncoder().encode(
      process.env.SECRET_JWT
    );

    const { payload } = await jose.jwtVerify(bearerToken, secretKey as any);
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: 'Invalid token'
    } as IHTTPResponse, { status: HttpStatusCode.Forbidden })
  }

  return NextResponse.next();
}