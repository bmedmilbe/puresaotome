import { apiRequest } from "../api-client";
interface AuthLoginResponse {
  access: string;
}
interface AuthNewUserResponse {
  id: string;
  email: string;
  name?: string;
}
interface AuthUser {
  id: string;
  last_name?: string;
  first_name?: string;
}
interface CheckEmailResponse {
  exists: boolean;
}
export const authService = {
  checkEmail: async (email: string) =>
    apiRequest<CheckEmailResponse>(`/users/check-email/?email=${email}`),

  signUp: async (data: object) =>
    apiRequest<AuthNewUserResponse>("/auth/register/", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  signIn: async (credentials: object) =>
    apiRequest<AuthLoginResponse>("/auth/login/", {
      method: "POST",
      body: JSON.stringify(credentials),
    }),
  userAuthenticated: async () => apiRequest<AuthUser>("/customers/me"),
};
