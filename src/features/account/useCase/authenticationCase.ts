//Hugo.
import { authenticate } from "@/features/account/accountRepository";
import { TLoginDTO } from "@/features/account/accountTypes";
import { saveSession } from "@/utils/sessionUtils";
import { IHTTPResponse } from "@/utils/commomTypes";

export async function authenticationCase(payload: TLoginDTO): Promise<IHTTPResponse> {
  const data = await authenticate(payload.username, payload.password);

  if (data?.statusCode !== 200) {
    return { success: false, message: "Acesso negado" }
  }

  const token = data?.message;

  if (!token) {
    return { success: false, message: "Houve uma falha na autenticação, tente novamente" }
  }

  await saveSession(token);
  return { success: true, message: "Bem vindo(a) ao sistema! :)" }
}