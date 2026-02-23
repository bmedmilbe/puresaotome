"use server";
import { cookies } from "next/headers";

export type ApiResult<T> = {
  success: boolean;
  data: T;
  message: string;
  errors?: Record<string, string[]>; // Added to capture Django field errors
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

    const response = await fetch(url, {
      ...params,
      headers: {
        "Content-Type": "application/json",
        ...(token && { Authorization: `JWT ${token}` }),
        ...params.headers,
      },
    });

    const payload = await response.json().catch(() => null);

    if (!response.ok) {
      // 1. Handle field-specific validation errors (Common in 400 Bad Request)
      // Django returns: { "email": ["already exists"], "password": ["too short"] }
      const hasFieldErrors =
        payload && typeof payload === "object" && !payload.detail;

      return {
        success: false,
        status: response.status,
        // If it's a generic error, use 'detail'. If field errors, provide a summary.
        message:
          payload?.detail ||
          (hasFieldErrors ? "Validation failed" : "An error occurred"),
        errors: hasFieldErrors ? payload : undefined,
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
