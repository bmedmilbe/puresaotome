"use client";

import { useState, useMemo, useActionState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BespokeTag,
  MetaData,
  ProfileTag,
  ProfileType,
} from "@/lib/services/metadata-service";
import { type ActionResponse, signFromTagAction } from "../actions/auth";
import Link from "next/link";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import DistillationLoader from "./DistillationLoader";
import { saveTagsAction } from "../actions/profile";

export default function ProfileCreator({
  initialMetadata,
}: {
  initialMetadata: MetaData;
}) {
  const router = useRouter();
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isDistilling, setIsDistilling] = useState(false);
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const toggleTag = (id: number) => {
    setSelectedTags((prev) =>
      prev.includes(id)
        ? prev.filter((t) => t !== id)
        : prev.length < 3
          ? [...prev, id]
          : prev,
    );
  };

  const finalProfile = useMemo(() => {
    if (selectedTags.length < 3) return null;

    const scored = initialMetadata.profile_types.map((profile: ProfileType) => {
      const matchCount = profile.profile_tags.filter((pt: ProfileTag) =>
        selectedTags.includes(pt.bespoke_tag.id),
      ).length;

      return {
        ...profile,
        score: matchCount * profile.weight,
      };
    });

    return scored.sort((a: any, b: any) => b.score - a.score)[0];
  }, [selectedTags, initialMetadata.profile_types]);

  const initialState: ActionResponse = {
    success: false,
    message: "",
    inputs: { email: "" },
  };

  const [state, formAction, isPending] = useActionState(
    signFromTagAction,
    initialState,
  );

  useEffect(() => {
    if (state.success) {
      setIsDistilling(true);

      const performSaveTags = async () => {
        try {
          const response = await saveTagsAction(selectedTags);

          if (!response.success) {
            console.error("Background sync failed:", response.error);
          }
        } catch (error) {
          console.error("Save error:", error);
        }
      };

      performSaveTags();
    }
  }, [state.success, selectedTags]);

  const handleDistillationComplete = () => {
    toast.success("Identity Secured", {
      description: "Access Key confirmed. Your private vault is synchronized.",
    });

    router.push("/portal/dashboard");
  };

  return (
    <>
      <AnimatePresence>
        {isDistilling && (
          <DistillationLoader onComplete={handleDistillationComplete} />
        )}
      </AnimatePresence>
      <div className="min-h-screen bg-[#F4F1EA] text-[#1A3C34] selection:bg-[#D4B996]">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <header className="max-w-2xl mb-16">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <span className="text-[#D4B996] uppercase tracking-[0.4em] text-[10px] font-bold">
                Bespoke Profiling
              </span>
              <h1 className="font-serif text-5xl md:text-6xl mt-6 leading-tight italic">
                Define your <br /> unfiltered essence.
              </h1>
            </motion.div>
          </header>

          <div className="grid lg:grid-cols-3 gap-16">
            <div className="lg:col-span-2 space-y-4">
              <p className="text-[11px] uppercase tracking-widest text-gray-400 mb-8">
                Select 3 archetypal elements
              </p>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {initialMetadata.bespoke_tags.map((tag: BespokeTag) => {
                  const isActive = selectedTags.includes(tag.id);
                  return (
                    <motion.button
                      key={tag.id}
                      onClick={() => toggleTag(tag.id)}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.98 }}
                      className={`h-32 p-6 flex flex-col justify-end border transition-all duration-500 text-left
                      ${
                        isActive
                          ? "bg-[#1A3C34] border-[#1A3C34] text-[#F4F1EA]"
                          : "bg-white border-gray-100 hover:border-[#D4B996] text-[#1A3C34]"
                      }`}
                    >
                      <span className="text-[10px] uppercase tracking-[0.2em] font-medium leading-none">
                        {tag.title}
                      </span>
                    </motion.button>
                  );
                })}
              </div>
            </div>

            <aside className="relative">
              <div className="sticky top-32">
                <AnimatePresence mode="wait">
                  {selectedTags.length < 3 ? (
                    <motion.div
                      key="waiting"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      className="border-t border-[#1A3C34]/10 pt-8"
                    >
                      <div className="text-4xl font-serif italic text-gray-300">
                        0{selectedTags.length}
                        <span className="text-sm opacity-50">/03</span>
                      </div>
                      <p className="mt-4 text-sm font-light leading-relaxed text-gray-500 italic">
                        Choose three elements to distill your profile.
                      </p>
                    </motion.div>
                  ) : (
                    <motion.div
                      key="detected"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      className="bg-white p-10 shadow-xl border border-gray-50"
                    >
                      <span className="text-[#D4B996] uppercase tracking-widest text-[9px] font-bold">
                        Archetype Detected
                      </span>
                      <h2 className="font-serif text-3xl mt-4 mb-8 leading-tight">
                        {finalProfile?.title}
                      </h2>

                      {/* Mensagens de Feedback (Erro/Sucesso) */}
                      <AnimatePresence mode="wait">
                        {state.message && (
                          <motion.div
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0 }}
                            className={`p-4 border-l mb-6 ${
                              state.success
                                ? "bg-green-50 border-green-500"
                                : "bg-red-50 border-red-500"
                            }`}
                          >
                            <p
                              className={`text-[10px] uppercase tracking-widest font-medium ${
                                state.success
                                  ? "text-green-600"
                                  : "text-red-600"
                              }`}
                            >
                              {state.message}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>

                      <form
                        action={formAction}
                        className="space-y-8 mt-6 group/form"
                      >
                        {/* Email Input Field */}
                        <div className="space-y-3">
                          <div className="flex justify-between items-center min-h-[14px]">
                            <label className="text-[10px] uppercase tracking-[0.2em] text-[#1A3C34]/60 ml-1">
                              Email Address
                            </label>
                            <AnimatePresence mode="wait">
                              {state.errors?.email && (
                                <motion.span
                                  initial={{ opacity: 0, x: 10 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  exit={{ opacity: 0, x: -10 }}
                                  className="text-[9px] uppercase tracking-tighter text-red-500 font-medium"
                                >
                                  {state.errors.email[0].includes("exists") ? (
                                    <>
                                      Already registered.{" "}
                                      <Link
                                        href="/signin"
                                        className="underline"
                                      >
                                        Sign in
                                      </Link>
                                    </>
                                  ) : (
                                    state.errors.email[0]
                                  )}
                                </motion.span>
                              )}
                            </AnimatePresence>
                          </div>
                          <div className="relative group/input">
                            <input
                              type="email"
                              name="email"
                              autoComplete="new-password"
                              spellCheck={false}
                              defaultValue={state.inputs?.email}
                              placeholder="harrison@example.com"
                              className={`w-full bg-transparent border-b py-4 px-1 outline-none transition-all duration-700 font-light text-[#1A3C34] placeholder:text-[#1A3C34]/20 text-sm ${
                                state.errors?.email
                                  ? "border-red-300 focus:border-red-500"
                                  : "border-[#1A3C34]/10 focus:border-[#1A3C34]"
                              }`}
                            />
                            <div className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#1A3C34] transition-all duration-700 group-focus-within/input:w-full" />
                          </div>
                        </div>

                        {/* SELECÇÃO DE SENHA OPCIONAL */}
                        <div className="space-y-6">
                          <div className="flex items-center gap-3 py-2">
                            <button
                              type="button"
                              onClick={() =>
                                setShowPasswordFields(!showPasswordFields)
                              }
                              className={`w-8 h-4 rounded-full transition-colors duration-500 relative ${
                                showPasswordFields
                                  ? "bg-[#1A3C34]"
                                  : "bg-gray-200"
                              }`}
                            >
                              <motion.div
                                animate={{ x: showPasswordFields ? 18 : 2 }}
                                className="absolute top-1 w-2 h-2 bg-white rounded-full"
                              />
                            </button>
                            <span className="text-[10px] uppercase tracking-wider text-[#1A3C34]/70 font-medium">
                              Define access key now (optional)
                            </span>
                          </div>

                          <AnimatePresence>
                            {showPasswordFields && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: "auto", opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{
                                  duration: 0.5,
                                  ease: [0.23, 1, 0.32, 1],
                                }}
                                className="overflow-hidden space-y-6"
                              >
                                <div className="grid grid-cols-1 gap-6">
                                  <div className="space-y-2 group">
                                    <div className="flex justify-between items-center">
                                      <label className="text-[10px] uppercase tracking-widest text-gray-400 ml-1">
                                        Access Key
                                      </label>
                                      <button
                                        type="button"
                                        onClick={() =>
                                          setPasswordVisible(!passwordVisible)
                                        }
                                        className="text-[9px] uppercase tracking-widest text-[#D4B996] hover:text-[#1A3C34] transition-colors"
                                      >
                                        {passwordVisible ? "Hide" : "Show"}
                                      </button>
                                    </div>
                                    <input
                                      type={
                                        passwordVisible ? "text" : "password"
                                      }
                                      name="password"
                                      className="w-full bg-transparent border-b border-[#1A3C34]/10 py-3 px-1 outline-none focus:border-[#1A3C34] transition-all font-light"
                                      placeholder="••••••••"
                                    />
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>

                        {/* Hidden Inputs */}
                        <input
                          type="hidden"
                          name="detected_profile"
                          value={finalProfile?.slug}
                        />
                        <input
                          type="hidden"
                          name="selected_tags"
                          value={selectedTags.join(",")}
                        />

                        {/* Submit Button & Info */}
                        <div className="pt-4">
                          <button
                            disabled={isPending}
                            className="group relative w-full py-5 bg-[#1A3C34] text-[#F4F1EA] text-[10px] uppercase tracking-[0.3em] font-bold overflow-hidden transition-all disabled:opacity-50"
                          >
                            <span className="relative z-10">
                              {isPending
                                ? "Distilling..."
                                : "Unlock Your Essence"}
                            </span>
                            <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                          </button>

                          <AnimatePresence mode="wait">
                            {!showPasswordFields ? (
                              <motion.p
                                key="temp-pass-msg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.5 }}
                                exit={{ opacity: 0 }}
                                className="mt-6 text-[9px] text-[#1A3C34] text-center uppercase tracking-[0.2em] leading-relaxed italic"
                              >
                                A secure temporary key will be generated <br />{" "}
                                and sent to your email for your first entry.
                              </motion.p>
                            ) : (
                              <motion.p
                                key="agree-msg"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 0.4 }}
                                className="mt-6 text-[9px] text-[#1A3C34] text-center uppercase tracking-[0.2em] leading-relaxed"
                              >
                                By confirming, you agree to receive <br />{" "}
                                exclusive itinerary distillations.
                              </motion.p>
                            )}
                          </AnimatePresence>
                        </div>
                      </form>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </>
  );
}
