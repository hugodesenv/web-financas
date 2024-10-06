import { NextRequest, NextResponse } from "next/server";
import { AuthMiddleware } from "./middleware/authMid";

export async function middleware(ARequest: NextRequest) {
  const { pathname } = ARequest.nextUrl;

  /*if (['/api/fixed-release'].includes(pathname)) {
    return await AuthMiddleware(ARequest) || NextResponse.next();
  }*/;

  return NextResponse.next();
}