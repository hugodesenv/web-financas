import { NextRequest, NextResponse } from "next/server"

/**
 * Essa função tem como base executar múltiplos middlewares no Next Js.
 * Da forma que é hoje, é bem complicado e chato de se fazer, fora que não
 * achei algo muito legal. Com isso, eu passo uns par de middlewares e,
 * e faço as execuções de forma recursiva até que acabe.
 * @param AMiddlewares 
 * @returns 
 */
export const executeMiddlewares = async (
  req: NextRequest,
  middlewares: any[]
) => {
  console.log('olá')
  async function _runMiddleware(index: number) {
    if (index < middlewares.length) {
      let res = await middlewares[index](req);
      console.log(res.HeadersList); verificar esse retorno
    }
  }

  await _runMiddleware(0);
}