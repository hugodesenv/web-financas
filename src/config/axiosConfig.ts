/**
 * Nessa classe, criamos a instancia do axios. 
 * Qual a necessidade disso?
 * É porque, em toda a requisição iremos mandar como padrão a url da nossa api,
 * incluindo o código da empresa e o Token, então ficaria complexo e chato de fazer esse processo
 * em todas as outras telas. Além disso, também temos a segurança que, se surgir alguma necessidade futuramente,
 * de algum outro header, atribuimos em um só lugar e em todos os demais estarão corretos.
 * By.: Hugo Souza 18/05/2024 15h24 em busca de um futuro automático.
 */

import { getJWTFromCookie } from "@/utils/sessionUtils";
import axios from "axios";

const axiosInstance = axios.create({ baseURL: 'http://127.0.0.1:8080' });


axiosInstance.interceptors.request.use((config: any) => {
  config.headers.authorization = `Bearer ${getJWTFromCookie()}`;
  return config;
});

export default axiosInstance;