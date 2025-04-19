//Hugo.
import { tryAuthentication } from "@/service/accountService";
import { TLoginDTO } from "@/type/accountTypes";
import { saveSession } from "@/utils/sessionUtils";
import { IHTTPResponse } from "@/utils/typesUtils";

export async function authenticationCase(payload: TLoginDTO): Promise<IHTTPResponse> {
  const { success, data: authenticationBody } = await tryAuthentication(payload.username, payload.password);

  if (!success) {
    return { success, message: "Acesso negado" }
  }

  const { token } = authenticationBody.data;

  if (!token) {
    return { success: false, message: "Houve uma falha na autenticação, tente novamente" }
  }

  await saveSession(token);

  return { success, message: "Bem vindo(a) ao sistema! :)" }
}