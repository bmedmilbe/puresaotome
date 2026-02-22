import { cookies } from "next/headers";
import { apiRequest } from "./api-client";

export const apiRequestServer = async <T>(
  endpoint: string,
  params: RequestInit = {},
) => {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  return apiRequest<T>(endpoint, params, token);
};
