// Hugo.
import axiosInstance from "@/config/axiosConfig";
export async function tryAuthentication(username: string, password: string) {
  try {
    const config = axiosInstance.post("/api/account/token", { username, password });
    const { data } = await config;
    return data;
  } catch (e: any) {
    return {}
  }
}