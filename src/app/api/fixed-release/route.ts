import { AuthMiddleware } from '@/middleware/mid.auth'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  return NextResponse.json('Teste de rota por Hugo')
}