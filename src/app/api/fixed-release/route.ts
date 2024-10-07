import { AuthMiddleware } from '@/middleware/mid.auth'
import { executeMiddlewares } from '@/utils/utils.functions'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(pRequest: NextRequest) {
  let middlewaresResponse = await executeMiddlewares(
    pRequest,
    [AuthMiddleware]
  );

  if (middlewaresResponse != null) return middlewaresResponse;

  return NextResponse.json({
    teste: 'hugo'
  })
}