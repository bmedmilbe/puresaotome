// app/signup/page.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useEffect, useState } from "react";
import { useActionState } from "react";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { signUpAction, ActionResponse } from "@/app/actions/authoff";
// import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline"; // You can use any icon library
import EyeIcon from "@heroicons/react/24/outline/EyeIcon";
import EyeSlashIcon from "@heroicons/react/24/outline/EyeSlashIcon";
const initialState: ActionResponse = {
  success: false,
  message: "",
  errors: undefined,
};

export default function SignUpPage() {
  const [showPassword, setShowPassword] = useState(false);
  // Use useActionState hook for the form submission action
  const [state, formAction, isPending] = useActionState<
    ActionResponse,
    FormData
  >(signUpAction, initialState);
  console.log(state);
  // Use a useEffect to trigger the toast when the state changes
  useEffect(() => {
    if (state.success) {
      toast.success("Account created successfully");
    }
  }, [state]);

  return (
    <main className="min-h-screen bg-brand-cream flex flex-col md:flex-row">
      {/* Left Panel: Brand Atmosphere & Visuals */}
      <section className="hidden md:flex md:w-1/2 relative overflow-hidden bg-brand-green p-16 flex-col justify-between text-brand-cream">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
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
          <h2 className="font-serif text-5xl leading-tight mb-6 text-balance">
            Begin your journey <br /> at the center <br /> of the world.
          </h2>
          <p className="font-light italic opacity-70 max-w-sm">
            Exclusive access to bespoke itineraries, private vessel logistics,
            and our sanctuary vault.
          </p>
        </div>

        {/* Subtle background overlay to enhance premium feel */}
        <div className="absolute inset-0 opacity-30 grayscale pointer-events-none">
          <img
            src="/hero-laguna.png"
            alt="Atmospheric Background"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Right Panel: Registration Form */}
      <section className="flex-1 flex items-center justify-center p-8 md:p-24">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-md"
        >
          <header className="mb-12">
            <span className="text-brand-sand uppercase tracking-[0.3em] text-[10px] font-bold">
              Registration
            </span>
            <h1 className="font-serif text-4xl text-brand-green mt-2">
              Create Account
            </h1>
          </header>

          <form action={formAction} className="space-y-8">
            {/* Global Error Message - For Server/Network Failures */}
            {state?.error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="p-4 bg-red-50 border-l-2 border-red-500 flex items-center gap-3"
              >
                <svg
                  className="w-4 h-4 text-red-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <p className="text-[11px] uppercase tracking-widest text-red-700 font-medium">
                  {state.message}
                </p>
              </motion.div>
            )}
            {/* Email Input Field */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                  Email Address
                </label>
                {/* Field-specific error message */}
                {state?.errors?.email && (
                  <span className="text-[9px] uppercase tracking-tight text-red-500 animate-pulse">
                    {state.errors.email[0]}
                  </span>
                )}
              </div>
              <input
                name="email"
                type="email"
                value={state.inputs?.email}
                required
                className={`w-full bg-transparent border-b py-3 px-1 outline-none transition duration-500 font-light text-brand-green ${
                  state?.errors?.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-gray-200 focus:border-brand-green"
                }`}
                placeholder="harrison@example.com"
                disabled={isPending}
              />
            </div>

            {/* Password Input with Toggle */}
            <div className="space-y-2">
              <div className="flex justify-between items-end">
                <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                  Password
                </label>
              </div>
              <div className="relative group">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  autoComplete="new-password"
                  className={`w-full bg-transparent border-b py-3 px-1 pr-10 outline-none transition duration-500 font-light text-brand-green ${
                    state?.errors?.password
                      ? "border-red-400"
                      : "border-gray-200 focus:border-brand-green"
                  }`}
                  placeholder="••••••••"
                  disabled={isPending}
                />
                {/* Toggle Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-1 bottom-3 text-gray-400 hover:text-brand-green transition-colors"
                  tabIndex={-1} // Prevents tabbing into the icon instead of the submit button
                >
                  {showPassword ? (
                    <EyeSlashIcon className="h-4 w-4" />
                  ) : (
                    <EyeIcon className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {/* Submit Action */}
            <div className="pt-6">
              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-brand-green text-brand-cream py-4 uppercase text-[10px] tracking-[0.4em] hover:bg-brand-sand disabled:bg-gray-300 disabled:cursor-not-allowed transition duration-500 shadow-xl cursor-pointer"
              >
                {isPending ? "Verifying..." : "Join the Collective"}
              </button>
            </div>
          </form>

          {/* Secondary Actions */}
          <footer className="mt-12 text-center">
            <p className="text-xs text-gray-400 font-light">
              Already a member?{" "}
              <Link
                href="/signin"
                className="text-brand-green font-medium underline underline-offset-4 decoration-1 decoration-brand-sand/30"
              >
                Sign In
              </Link>
            </p>
          </footer>
        </motion.div>
      </section>
    </main>
  );
}
