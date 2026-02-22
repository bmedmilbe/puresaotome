"use server";
import * as jose from "jose";
import { cookies } from "next/headers";
import { cache } from "react";

// Secret key for JWT signing (in a real app, use an environment variable)
const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-secret-key-min-32-chars-long!!!",
);

// Token refresh threshold (refresh if less than this time left)
const REFRESH_THRESHOLD = 24 * 60 * 60; // 24 hours in seconds

// Check if token needs refresh
export async function shouldRefreshToken(token: string): Promise<boolean> {
  try {
    const { payload } = await jose.jwtVerify(token, JWT_SECRET, {
      clockTolerance: 15, // 15 seconds tolerance for clock skew
    });

    // Get expiration time
    const exp = payload.exp as number;
    const now = Math.floor(Date.now() / 1000);

    // If token expires within the threshold, refresh it
    return exp - now < REFRESH_THRESHOLD;
  } catch {
    // If verification fails, token is invalid or expired
    return false;
  }
}

// Create a session using JWT
export async function createSession(token: string) {
  // Store JWT in a cookie
  const cookieStore = await cookies();
  cookieStore.set({
    name: "auth_token",
    value: token,
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    maxAge: 60 * 60 * 24 * 7, // 1 week
    path: "/",
    sameSite: "lax",
  });
}

// Get current session from JWT
export const getSession = cache(async () => {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get("auth_token")?.value;

    if (!token) return null;
    return token;
  } catch (error) {
    // Handle the specific prerendering error
    if (
      error instanceof Error &&
      error.message.includes("During prerendering, `cookies()` rejects")
    ) {
      console.log(
        "Cookies not available during prerendering, returning null session",
      );
      return null;
    }

    console.error("Error getting session:", error);
    return null;
  }
});

// Delete session by clearing the JWT cookie
export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete("auth_token");
}
