// import { cookies } from "next/headers";

import { cookies } from "next/headers";

// lib/api-client.ts
export type ApiResult<T> = {
  success: boolean;
  data: T;
  message: string;
  status?: number;
};

export const apiRequest = async <T>(
  endpoint: string,
  params: RequestInit = {},
): Promise<ApiResult<T>> => {
  try {
    const url = `${process.env.API_BASE_URL || "http://localhost:8000"}${endpoint}`;
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;
    const authHeader = token ? `JWT ${token}` : "";
    const response = await fetch(url, {
      ...params,
      headers: {
        ...params.headers, // Merge existing headers if any
        Authorization: authHeader,
        "Content-Type": "application/json",
      },
    });

    // Safely parse JSON or return null if it's not JSON (like HTML 500 pages)
    const payload = await response.json().catch(() => null);
    if (!response.ok) {
      return {
        success: false,
        message:
          payload?.detail || payload?.message || `Error ${response.status}`,
        status: response.status,
        data: {} as T,
      };
    }

    return { success: true, data: payload as T, message: "Success" };
  } catch (error) {
    return {
      success: false,
      message: "Network connection failed",
      data: {} as T,
    };
  }
};
