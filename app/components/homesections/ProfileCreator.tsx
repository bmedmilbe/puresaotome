"use client";

import { useState, useMemo, useActionState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mountain,
  Landmark,
  Palmtree,
  Coffee,
  Sparkles,
  History,
  EyeOff,
  Camera,
  Moon,
  Footprints,
  Bird,
  Compass,
} from "lucide-react";
import {
  BespokeTag,
  MetaData,
  ProfileTag,
  ProfileType,
} from "@/lib/services/metadata-service";
import { type ActionResponse, signFromTagAction } from "../../actions/auth";
import { saveTagsAction } from "../../actions/profile";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import DistillationLoader from "../loaders/DistillationLoader";

// Icon mapping for high-end visual appeal
const iconMap: Record<string, React.ReactNode> = {
  Adventure: <Mountain size={20} strokeWidth={1} />,
  Architecture: <Landmark size={20} strokeWidth={1} />,
  Beaches: <Palmtree size={20} strokeWidth={1} />,
  Cocoa: <Coffee size={20} strokeWidth={1} />,
  "Eco-Luxury": <Sparkles size={20} strokeWidth={1} />,
  History: <History size={20} strokeWidth={1} />,
  "Off-the-Grid": <EyeOff size={20} strokeWidth={1} />,
  Photography: <Camera size={20} strokeWidth={1} />,
  Relaxation: <Moon size={20} strokeWidth={1} />,
  Trekking: <Footprints size={20} strokeWidth={1} />,
  Wellness: <Sparkles size={20} strokeWidth={1} />,
  Wildlife: <Bird size={20} strokeWidth={1} />,
};

export default function ProfileCreateSection({
  initialMetadata,
}: {
  initialMetadata: MetaData;
}) {
  const router = useRouter();
  const [selectedTags, setSelectedTags] = useState<number[]>([]);
  const [isDistilling, setIsDistilling] = useState(false);
  const [showPasswordFields, setShowPasswordFields] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [passValue, setPassValue] = useState("");

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
      return { ...profile, score: matchCount * profile.weight };
    });
    return scored.sort((a: any, b: any) => b.score - a.score)[0];
  }, [selectedTags, initialMetadata.profile_types]);

  const [state, formAction, isPending] = useActionState(signFromTagAction, {
    success: false,
    message: "",
    inputs: { email: "" },
  });

  useEffect(() => {
    if (state.success) {
      setIsDistilling(true);
      saveTagsAction(selectedTags);
    }
  }, [state.success, selectedTags]);

  const handleDistillationComplete = () => {
    toast.success("Identity Secured", {
      description: "Access Key confirmed. Your private vault is synchronized.",
    });
    router.push("/welcome");
  };

  return (
    <section
      id="selector"
      className="py-32 bg-[#1A3C34]/5 px-8 border-y border-[#1A3C34]/5 scroll-mt-20"
    >
      <AnimatePresence>
        {isDistilling && (
          <DistillationLoader onComplete={handleDistillationComplete} />
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-16">
          <span className="text-[10px] uppercase tracking-[0.4em] text-[#D4B996] font-bold">
            Bespoke Profiling
          </span>
          <h2 className="font-serif text-5xl mt-4 italic">
            Define Your Perspective
          </h2>
          <p className="text-[10px] uppercase tracking-widest opacity-40 font-bold mt-2">
            Select 3 elements to distill your archetype ({selectedTags.length}
            /3)
          </p>
        </header>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* TAG GRID WITH ICONS */}
          <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-4">
            {initialMetadata.bespoke_tags.map((tag: BespokeTag) => {
              const isActive = selectedTags.includes(tag.id);
              return (
                <button
                  key={tag.id}
                  onClick={() => toggleTag(tag.id)}
                  className={`aspect-[4/3] flex flex-col items-center justify-center p-6 border transition-all duration-700 group relative
                    ${isActive ? "bg-[#1A3C34] border-[#1A3C34]" : "bg-white border-[#1A3C34]/5 hover:border-[#D4B996]"}`}
                >
                  <div
                    className={`mb-4 transition-colors duration-500 ${isActive ? "text-[#D4B996]" : "text-[#1A3C34] group-hover:text-[#D4B996]"}`}
                  >
                    {iconMap[tag.title] || (
                      <Compass size={20} strokeWidth={1} />
                    )}
                  </div>
                  <span
                    className={`text-[10px] uppercase tracking-[0.2em] font-bold text-center z-10 transition-colors duration-500
                    ${isActive ? "text-[#F4F1EA]" : "text-[#1A3C34] group-hover:text-[#D4B996]"}`}
                  >
                    {tag.title}
                  </span>
                </button>
              );
            })}
          </div>

          {/* REGISTRATION & ARCHETYPE PANEL */}
          <aside className="relative">
            <AnimatePresence mode="wait">
              {selectedTags.length < 3 ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="h-full flex flex-col justify-center border-l border-[#1A3C34]/10 pl-12 italic"
                >
                  <div className="text-4xl font-serif text-gray-300 mb-4">
                    0{selectedTags.length}
                    <span className="text-sm opacity-50">/03</span>
                  </div>
                  <p className="text-sm font-light opacity-40 leading-relaxed max-w-[240px]">
                    Choose three elements to distill your essence and access
                    your private curation.
                  </p>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="bg-white p-10 shadow-2xl border border-[#1A3C34]/5"
                >
                  <span className="text-[#D4B996] uppercase tracking-widest text-[9px] font-bold">
                    Archetype Detected
                  </span>
                  <h2 className="font-serif text-3xl mt-2 mb-8 italic">
                    {finalProfile?.title}
                  </h2>

                  <form action={formAction} className="space-y-6">
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <label className="text-[9px] uppercase tracking-widest opacity-50 ml-1">
                          Email Address
                        </label>
                        {state.errors?.email && (
                          <span className="text-[9px] text-red-500 uppercase tracking-tighter">
                            Required field
                          </span>
                        )}
                      </div>
                      <input
                        type="email"
                        name="email"
                        required
                        className="w-full border-b border-[#1A3C34]/10 py-3 text-sm bg-transparent outline-none focus:border-[#1A3C34] transition-colors font-light"
                        placeholder="harrison@example.com"
                      />
                    </div>
                    {/* PASSWORD TOGGLE FUNCTIONALITY */}
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 py-2">
                        <button
                          type="button"
                          onClick={() => {
                            if (showPasswordFields) setPassValue("");
                            setShowPasswordFields(!showPasswordFields);
                          }}
                          className={`w-8 h-4 rounded-full transition-colors duration-500 relative ${showPasswordFields ? "bg-[#1A3C34]" : "bg-gray-200"}`}
                        >
                          <motion.div
                            animate={{ x: showPasswordFields ? 18 : 2 }}
                            className="absolute top-1 w-2 h-2 bg-white rounded-full"
                          />
                        </button>
                        <span className="text-[9px] uppercase tracking-wider opacity-60 font-medium">
                          Define Access Key (Optional)
                        </span>
                      </div>

                      <AnimatePresence>
                        {showPasswordFields && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden space-y-4"
                          >
                            <div className="flex justify-between items-center">
                              <label className="text-[9px] uppercase tracking-widest opacity-40 ml-1">
                                Access Key
                              </label>
                              <button
                                type="button"
                                onClick={() =>
                                  setPasswordVisible(!passwordVisible)
                                }
                                className="text-[9px] uppercase text-[#D4B996]"
                              >
                                {passwordVisible ? "Hide" : "Show"}
                              </button>
                            </div>
                            <input
                              type={passwordVisible ? "text" : "password"}
                              name="password"
                              value={passValue}
                              onChange={(e) => setPassValue(e.target.value)}
                              className="w-full border-b border-[#1A3C34]/10 py-2 text-sm outline-none focus:border-[#1A3C34] transition-all"
                              placeholder="••••••••"
                            />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
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
                    <button
                      disabled={isPending}
                      className="w-full bg-[#1A3C34] text-[#F4F1EA] py-5 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-[#D4B996] transition-all group overflow-hidden relative"
                    >
                      <span className="relative z-10">
                        {isPending
                          ? "Distilling..."
                          : "Secure Your Private Advocate"}
                      </span>
                      <div className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                    </button>
                    // E altere o header do Archetype Panel:
                    <span className="text-[#D4B996] uppercase tracking-widest text-[9px] font-bold flex items-center gap-2">
                      <div className="w-1 h-1 bg-[#D4B996] rounded-full" />{" "}
                      Archetype Authenticated
                    </span>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </aside>
        </div>
      </div>
    </section>
  );
}
