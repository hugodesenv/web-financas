import { IHTTPResponse } from "@/lib/utils.interface";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";
import * as jose from 'jose';

export async function AuthMiddleware(request: NextRequest) {
  let { pathname } = request.nextUrl;
  let bearerToken = request.headers.get('authorization')?.split(' ')[1];

  if (!bearerToken) {
    return NextResponse.json({
      message: 'Token is required',
      success: false
    } as IHTTPResponse, { status: HttpStatusCode.NotAcceptable })
  }

  try {
    let secretKey = new TextEncoder().encode(
      process.env.SECRET_JWT
    );

    let { payload } = await jose.jwtVerify(bearerToken, secretKey as any);
    let allowed_endpoints = payload.allowed_endpoints as string[];

    if (!allowed_endpoints.includes(pathname)) {
      return NextResponse.json({
        success: false,
        message: 'User does not have permission for this endpoint'
      } as IHTTPResponse, { status: HttpStatusCode.MethodNotAllowed });
    }
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: 'Invalid token'
    } as IHTTPResponse, { status: HttpStatusCode.Forbidden })
  }

  return NextResponse.next();
}