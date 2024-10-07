import { AuthMiddleware } from '@/middleware/mid.auth'
import { executeMiddlewares } from '@/utils/utils.functions'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const middlewareResponse = await executeMiddlewares(request, [AuthMiddleware]);

  if (middlewareResponse) {
    return middlewareResponse;
  }

  return NextResponse.json({
    teste: 'hugo'
  })
}