import { AuthMiddleware } from '@/middleware/authMid'
import { executeMiddlewares } from '@/utils/functionsUtils'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(pRequest: NextRequest) {
  let res = await executeMiddlewares(pRequest,
    [
      AuthMiddleware
    ]
  );

  if (res != null) {
    return res;
  }

  return NextResponse.json({
    teste: 'hugo'
  })
}