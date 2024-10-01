import { NextRequest, NextResponse } from 'next/server'

export async function GET(ARequest: NextRequest) {
  return NextResponse.json({
    teste: 'hugo'
  })
}