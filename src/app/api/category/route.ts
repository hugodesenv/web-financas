import { IHTTPResponse } from "@/lib/lib.types";
import { apiGetAll } from "@/service/api/srv.api.category";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const data = await apiGetAll();
    return NextResponse.json({ success: true, data } as IHTTPResponse, { status: HttpStatusCode.Ok });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: e
    } as IHTTPResponse, { status: HttpStatusCode.InternalServerError });
  }
}