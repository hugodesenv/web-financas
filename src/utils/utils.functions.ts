import { NextRequest } from "next/server";

/**
 * Função que executa uma sequência cronológica de middlewares.
 * O procedimento é simples: Forçamos a execução do primeiro middleware da lista,
 * chamando a função recursiva _execute, passando o index atual.
 * Com base no index passado, se ele não for o último index, então fazemos o que
 * deve ser feito que é: Executar a chamada do middleware passando o request e obtemos
 * seu retorno na variável. Aós isso, verifico se contém o header de "x-middleware-next", 
 * isso significa que não ocorreu nenhuma falha no middleware, e se for != de nulo eu 
 * guardo numa variável. Caso deu algum problema, esse header não existirá, então eu resulto
 * o retorno do middleware com problema, caso contrário, eu chamo a função novamente, mas dessa
 * vez passando o index + 1, forçando o segundo middleware.
 * @param AMiddlewares Listagem dos middlewares que serão executados.
 * @returns O retorno de algum middleware com problema.
 */
export const executeMiddlewares = async (
  prequest: NextRequest,
  pmiddlewares: any[]
) => {
  async function _execute(pindex: number): Promise<any> {
    if (pindex < pmiddlewares.length) {
      let response = await pmiddlewares[pindex](prequest);
      let hasFailed = response.headers.get('x-middleware-next') == null;
      if (hasFailed) {
        return response
      }
      return await _execute(pindex + 1);
    }
  }

  return await _execute(0);
}