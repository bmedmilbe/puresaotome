// app/signin/page.tsx
"use client";

import { signInAction } from "@/app/actions/auth";
import { ActionResponse } from "@/app/actions/auth copy";
import { motion } from "framer-motion";
import { errors } from "jose";
import Link from "next/link";
import { useActionState, useEffect, useState } from "react";
import toast from "react-hot-toast";

export default function SignInPage() {
  const [showPassword, setShowPassword] = useState(false);

  const initialState: ActionResponse = {
    message: "",
    success: false,
    error: undefined,
  };

  const [state, formAction, isPending] = useActionState<
    ActionResponse,
    FormData
  >(signInAction, initialState);

  useEffect(() => {
    if (state.success) {
      toast.success("You successfully signed in!");
    }
  }, [state]);

  return (
    <main className="min-h-screen bg-brand-cream flex flex-col md:flex-row">
      {/* Left Panel: Brand Immersion */}
      <section className="hidden md:flex md:w-1/2 relative overflow-hidden bg-brand-green p-16 flex-col justify-between text-brand-cream">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/"
            className="text-2xl font-serif tracking-[0.3em] uppercase"
          >
            Pure São Tomé
          </Link>
        </motion.div>

        <div className="relative z-10">
          <span className="text-brand-sand uppercase tracking-[0.4em] text-[10px] block mb-4">
            Welcome Back
          </span>
          <h2 className="font-serif text-5xl leading-tight mb-6">
            Your sanctuary <br /> awaits.
          </h2>
          <p className="font-light italic opacity-70 max-w-sm">
            Access your private expeditions, secure documents, and bespoke
            travel concierge.
          </p>
        </div>

        {/* High-fidelity background image (boat-complete.jpg) */}
        <div className="absolute inset-0 opacity-40 pointer-events-none">
          <img
            src="/boat-complete.png"
            alt="Pure São Tomé Vessel"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Right Panel: Authentication Form */}
      <section className="flex-1 flex items-center justify-center p-8 md:p-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full max-w-md"
        >
          <header className="mb-12">
            <h1 className="font-serif text-4xl text-brand-green">
              Client Portal
            </h1>
            {state?.message && !state?.errors && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                className="mt-4 p-3 bg-red-50 border-l-2 border-red-500 flex items-center gap-2"
              >
                <span className="text-[10px] uppercase tracking-widest text-red-700 font-semibold">
                  {state.message}
                </span>
              </motion.div>
            )}
            <p className="text-gray-400 font-light text-sm mt-2">
              Please enter your credentials to proceed.
            </p>
          </header>

          <form action={formAction} className="space-y-10">
            {/* Email Field */}
            <div className="group space-y-2">
              <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-brand-sand transition-colors">
                Registered Email
              </label>

              <input
                type="email"
                required
                className="w-full bg-transparent border-b border-gray-200 py-3 px-1 focus:border-brand-green outline-none transition duration-500 font-light text-brand-green"
                disabled={isPending}
                placeholder="harrison@example.com"
                name="email"
              />
              {state?.errors?.email && (
                <span className="text-[9px] uppercase text-red-500 font-medium tracking-tighter">
                  {state.errors.email[0]}
                </span>
              )}
            </div>

            {/* Password Field with Toggle */}
            <div className="group space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1 group-focus-within:text-brand-sand transition-colors">
                  Password
                </label>
                <Link
                  href="/forgot-password"
                  className="text-[9px] uppercase tracking-tighter text-gray-400 hover:text-brand-green"
                >
                  Forgot?
                </Link>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full bg-transparent border-b border-gray-200 py-3 px-1 pr-10 focus:border-brand-green outline-none transition duration-500 font-light text-brand-green"
                  placeholder="••••••••"
                  disabled={isPending}
                  name="password"
                />

                {/* Toggle Button using Inline SVG for safety */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-0 bottom-3 text-gray-400 hover:text-brand-green transition-colors focus:outline-none"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-4 h-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-full bg-brand-green text-brand-cream py-4 uppercase text-[10px] tracking-[0.4em] hover:bg-brand-sand transition duration-700 shadow-2xl cursor-pointer"
                disabled={isPending}
              >
                Enter Portal
              </button>
            </div>
          </form>

          {/* New Client Invitation */}
          <footer className="mt-16 border-t border-gray-100 pt-8 text-center">
            <p className="text-xs text-gray-400 font-light">
              Not a member of the collective yet?{" "}
              <Link
                href="/signup"
                className="text-brand-green font-medium underline underline-offset-4 decoration-1 decoration-brand-sand/30 hover:text-brand-sand transition"
              >
                Register here
              </Link>
            </p>
          </footer>
        </motion.div>
      </section>
    </main>
  );
}
