"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { useMode } from "@/lib/mode-context";
import Image from "next/image";
import { UserSearch, Briefcase } from "lucide-react";
import { useRouter } from "next/navigation";

export default function EntryScreen() {
  const { setMode } = useMode();
  const router = useRouter();
  const [stage, setStage] = useState<"hero" | "choosing">("hero");

  const handleSelection = (selectedMode: "recruiter" | "client") => {
    setMode(selectedMode);
    router.push(`/${selectedMode}`);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center overflow-x-hidden bg-[#03030a]">
      {/* Ambient background glows */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/5 blur-[140px] rounded-full" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(6,182,212,1) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <AnimatePresence mode="wait">
        {/* ── STAGE 1: Cinematic Hero ── */}
        {stage === "hero" && (
          <motion.div
            key="hero"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: "blur(10px)" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative z-10 w-full max-w-5xl px-4"
          >
            {/* ── Composition stage: fixed aspect ratio container ── */}
            <div
              className="relative mx-auto flex flex-col items-center justify-center cursor-pointer group"
              style={{ minHeight: "min(90vh, 700px)" }}
              onClick={() => setStage("choosing")}
            >
              {/* Mobile text block above image */}
              <div className="flex flex-col items-center justify-center gap-3 md:hidden pb-8 pointer-events-none select-none">
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.25, ease: "easeOut" }}
                  className="font-semibold uppercase tracking-[0.35em] text-white/90 text-center"
                  style={{ fontSize: "clamp(0.8rem, 2vw, 1.35rem)", marginBottom: "0.5em" }}
                >
                  Hi, I am
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
                  className="font-black uppercase text-center text-white leading-none"
                  style={{
                    fontSize: "clamp(2.4rem, 9vw, 8.5rem)",
                    letterSpacing: "-0.02em",
                    opacity: 0.92,
                  }}
                >
                  Tushar<br />Karmakar
                </motion.h1>
              </div>

              {/* Desktop text block behind face */}
              <div
                className="absolute inset-0 hidden md:flex flex-col items-center justify-center pointer-events-none select-none"
                style={{ zIndex: 1, transform: "translateY(-18%)" }}
              >
                <motion.p
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.25, ease: "easeOut" }}
                  className="font-semibold uppercase tracking-[0.35em] text-white/90 text-center"
                  style={{ fontSize: "clamp(0.8rem, 2vw, 1.35rem)", marginBottom: "0.5em" }}
                >
                  Hi, I am
                </motion.p>

                <motion.h1
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.3, ease: "easeOut" }}
                  className="font-black uppercase text-center text-white leading-none"
                  style={{
                    fontSize: "clamp(2.4rem, 9vw, 8.5rem)",
                    letterSpacing: "-0.02em",
                    opacity: 0.92,
                  }}
                >
                  Tushar<br />Karmakar
                </motion.h1>
              </div>

              {/* LAYER 2 — Face image (on top of text) */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.3, ease: "easeOut" }}
                className="relative flex justify-center items-center w-full"
                style={{ zIndex: 2 }}
              >
                <Image
                  src="/profile/entry.png"
                  alt="Tushar Karmakar"
                  width={600}
                  height={750}
                  className="pointer-events-none object-contain transition-transform duration-300 ease-out group-hover:scale-[1.04]"
                  style={{
                    height: "clamp(220px, 50vh, 520px)",
                    width: "auto",
                    maxWidth: "100%",
                    mixBlendMode: "screen",
                    background: "transparent",
                  }}
                  priority
                />
              </motion.div>

              {/* LAYER 3 — "Click on my face" hint (below image, at bottom) */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.25, duration: 0.25 }}
                className="absolute bottom-6 inset-x-0 flex flex-col items-center gap-2 pb-4"
                style={{ zIndex: 3 }}
              >
                <div className="w-px h-8 bg-gradient-to-b from-cyan-500 to-transparent" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-cyan-400 group-hover:text-white transition-colors duration-300 text-center mt-2">
                  Click on my face to know me
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}

        {/* ── STAGE 2: "Who are you?" Selection ── */}
        {stage === "choosing" && (
          <motion.div
            key="choosing"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="relative z-10 flex flex-col items-center max-w-4xl w-full px-6"
          >
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.25 }}
              className="text-xs font-black uppercase tracking-[0.6em] text-cyan-500/60 mb-12"
            >
              Who are you?
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-3xl">
              {/* Recruiter */}
              <motion.button
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelection("recruiter")}
                className="group relative glass-panel p-10 flex flex-col items-center gap-6 text-center border-cyan-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500/60 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <UserSearch className="w-8 h-8 text-cyan-400" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">Recruiter</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Hiring for a professional role or checking my engineering credentials.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>

              {/* Client */}
              <motion.button
                whileHover={{ y: -8, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => handleSelection("client")}
                className="group relative glass-panel p-10 flex flex-col items-center gap-6 text-center border-cyan-500/20 overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="w-16 h-16 rounded-2xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center group-hover:border-cyan-500/60 transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.1)] group-hover:shadow-[0_0_30px_rgba(6,182,212,0.3)]">
                  <Briefcase className="w-8 h-8 text-cyan-400" />
                </div>
                
                <div className="space-y-2">
                  <h3 className="text-2xl font-black text-white">Client</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Looking for creative AI solutions, high-growth content, or custom web development.
                  </p>
                </div>

                <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.8)] translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
              </motion.button>
            </div>
            
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              whileHover={{ opacity: 1 }}
              onClick={() => setStage("hero")}
              className="mt-16 text-[10px] font-black uppercase tracking-[0.4em] text-white/50 hover:text-cyan-400 transition-all"
            >
              Back to Hero
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
