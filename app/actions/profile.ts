"use server";

import z, { email } from "zod";
import { ActionResponse } from "./auth";
import { authService } from "@/lib/services/auth-service";
import { createSession } from "@/lib/session";

// Define Zod schema for UnknownProfile validation

const UnknownProfileSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
});
export type SignInData = z.infer<typeof UnknownProfileSchema>;

export type InputForUnknownProfile = {
  email: string;
};

export type ActionResponseForUnknownProfile = {
  success: boolean;
  message: string;
  error?: string;
  errors?: Record<string, string[]>;
  inputs: InputForUnknownProfile;
};

export const submiteUnknownProfile = async (
  prevState: ActionResponseForUnknownProfile,
  formData: FormData,
): Promise<ActionResponseForUnknownProfile> => {
  const data = {
    email: formData.get("email") as string,
  };
  try {
    const validationResult = UnknownProfileSchema.safeParse(data);
    if (!validationResult.success) {
      return {
        success: false,
        message: "Correct the form",
        errors: validationResult.error.flatten().fieldErrors,
        inputs: data,
      };
    }

    const response = await authService.signUp({
      ...data,
      password: "Charlo90",
      username: data.email,
      parthner: 8,
    });
    // console.log(response.status);
    if (!response.success) {
      return {
        success: false,
        message: "Login",
        error:
          response?.errors?.email[0] == "user with this email already exists."
            ? "Considare to sign in"
            : "",

        errors: response.errors,
        inputs: { ...data },
      };
    }
    const signInResponse = await authService.signIn({
      ...data,
      password: "Charlo90",
    });
    if (!signInResponse.success) {
      return {
        success: false,
        message: "Something wrong signing in.",
        errors: { email: [response.data.email] },
        inputs: { ...data },
      };
    }

    createSession(signInResponse.data.access);
    return {
      success: true,
      message: "Profile created in successfully",
      inputs: { ...data },
    };
  } catch (error) {
    console.error("Error creating profile:", error);
    return {
      success: false,
      message: "An error occurred while creating profile",
      error: "Failed to creating profile",
      inputs: { ...data },
    };
  }
};
