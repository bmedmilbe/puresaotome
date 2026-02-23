"use server";

import { z } from "zod";

// import { getUserByEmail } from "@/lib/dal";
import { mockDelay } from "@/lib/utils";
import { authService } from "@/lib/services/auth-service";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";
import { isRedirectError } from "next/dist/client/components/redirect-error";

// Define Zod schema for signin validation
const SignInSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(1, "Password is required"),
});

// Define Zod schema for signup validation
const SignUpSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});

export type SignInData = z.infer<typeof SignInSchema>;
export type SignUpData = z.infer<typeof SignUpSchema>;
type Inputs = {
  email: string;
};

export type ActionResponse = {
  success: boolean;
  message: string;
  errors?: Record<string, string[]>;
  error?: string;
  inputs?: Inputs;
};

export async function signInAction(
  prevState: ActionResponse,
  formData: FormData,
): Promise<ActionResponse> {
  try {
    // Add a small delay to simulate network latency
    await mockDelay(700);

    // Extract data from form
    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    // Validate with Zod
    const validationResult = SignInSchema.safeParse(data);
    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
      };
    }

    // Verify password
    const response = await authService.signIn(data);
    if (!response?.success) {
      return {
        success: false,
        message: "Invalid email or password",
        errors: {
          email: ["Invalid email or password"],
        },
      };
    }

    // Create session
    await createSession(response.data.access);

    return {
      success: true,
      message: "Signed in successfully",
    };
  } catch (error) {
    console.error("Sign in error:", error);
    return {
      success: false,
      message: "An error occurred while signing in",
      error: "Failed to sign in",
    };
  }
}

export async function signUpAction(
  prevState: ActionResponse,
  formData: FormData,
): Promise<ActionResponse> {
  // We use this flag to trigger the redirect outside the try/catch block
  let shouldRedirect = false;

  try {
    await mockDelay(700);

    const data = {
      email: formData.get("email") as string,
      password: formData.get("password") as string,
    };

    const validationResult = SignUpSchema.safeParse(data);
    if (!validationResult.success) {
      return {
        success: false,
        message: "Validation failed",
        errors: validationResult.error.flatten().fieldErrors,
        inputs: { email: data.email },
      };
    }

    const response = await authService.signUp(data);

    if (!response.success) {
      return {
        success: false,
        message: "Failed to create user",
        error: "Failed to create user",
        inputs: { email: data.email },
      };
    }
    const loginResponse = await authService.signIn(data);
    if (!loginResponse.success) {
      return {
        success: false,
        message: "Failed to login",
        error: "Failed to login",
        inputs: { email: data.email },
      };
    }

    // Creating the session
    await createSession(loginResponse.data.access);

    // Set flag to true
    shouldRedirect = true;
  } catch (error) {
    // If the error is an intentional Next.js redirect, let it through
    if (isRedirectError(error)) {
      throw error;
    }

    console.error("Sign up error:", error);
    return {
      success: false,
      message: "An error occurred while creating your account",
      error: "Failed to create account",
    };
  }

  // Next.js handles redirects by throwing an error,
  // so it's cleanest to call it at the very end.
  if (shouldRedirect) {
    redirect("/dashboard");
  }

  // This return is only reached if shouldRedirect is false
  // AND no other return was triggered in the try block.
  return {
    success: false,
    message: "Unexpected process termination",
  };
}

export async function signOutAction(): Promise<void> {
  try {
    await mockDelay(300);
    await deleteSession();
  } catch (error) {
    console.error("Sign out error:", error);
    throw new Error("Failed to sign out");
  } finally {
    redirect("/signin");
  }
}
