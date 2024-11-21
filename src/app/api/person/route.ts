import { MESSAGES } from "@/lib/lib.constants";
import { IHTTPResponse, IPersonDto } from "@/lib/lib.types";
import { apiGetAll, apiInsert, apiRemove, apiUpdate } from "@/service/api/srv.api.person";
import { HttpStatusCode } from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    console.log(data)
    const res = await apiInsert(data as IPersonDto);

    return NextResponse.json({
      success: res,
      message: MESSAGES.operation_successfully
    } as IHTTPResponse, { status: HttpStatusCode.Created });
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: e
    } as IHTTPResponse, { status: HttpStatusCode.InternalServerError });
  }
}

export async function PUT(request: NextResponse) {
  try {
    const data = await request.json();
    const res = await apiUpdate(data as IPersonDto);

    return NextResponse.json({
      success: res,
      message: MESSAGES.changed_record
    } as IHTTPResponse, { status: HttpStatusCode.Ok });

  } catch (e) {
    return NextResponse.json({
      success: false,
      message: e
    } as IHTTPResponse, { status: HttpStatusCode.InternalServerError });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = parseInt(request.nextUrl.searchParams.get('id') ?? '0');

    if (!id) {
      return NextResponse.json({
        success: false,
        message: 'Não foi encontrado um ID válidos nos parâmetros da requisição'
      } as IHTTPResponse, { status: HttpStatusCode.NotAcceptable })
    }

    const res = await apiRemove(id);

    return NextResponse.json({
      success: res,
      message: MESSAGES.removed_record
    } as IHTTPResponse, { status: HttpStatusCode.Ok })

  } catch (e) {
    return NextResponse.json({
      success: false,
      message: e
    } as IHTTPResponse, { status: HttpStatusCode.InternalServerError });
  }
}

export async function GET(_: NextRequest) {
  try {
    const data = await apiGetAll();
    return NextResponse.json({ success: true, data } as IHTTPResponse, { status: HttpStatusCode.Ok })
  } catch (e) {
    return NextResponse.json({
      success: false,
      message: e
    } as IHTTPResponse, { status: HttpStatusCode.InternalServerError });
  }
}