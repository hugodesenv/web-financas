import axiosInstance from "@/lib/lib.axios";
import { IHTTPResponse } from "@/lib/lib.types";

export async function fetchCategoryAll(): Promise<IHTTPResponse> {
  try {
    let { data } = await axiosInstance.get('/api/category');
    return data;
  } catch (e) {
    return { success: false };
  }
}