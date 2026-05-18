"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ArrowRight, Terminal } from "lucide-react";
import HeroCanvas from "@/components/3d/HeroCanvas";
import CustomCursor from "@/components/ui/CustomCursor";

export default function EntryPage() {
  const router = useRouter();
  const [isExiting, setIsExiting] = useState(false);

  const handleEnter = () => {
    setIsExiting(true);
    // Delay routing slightly to let exit animations complete
    setTimeout(() => {
      router.push("/portfolio");
    }, 850);
  };

  return (
    <main className="fixed inset-0 z-[100] flex items-center justify-center overflow-hidden bg-[#050811] w-full h-full select-none">
      <CustomCursor />
      
      {/* 3D Canvas Background */}
      <HeroCanvas />

      {/* Decorative ambient color spotlight overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#050811] via-[#050811]/45 to-transparent pointer-events-none" />

      <AnimatePresence>
        {!isExiting && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ 
              opacity: 0, 
              scale: 1.05, 
              filter: "blur(15px)",
              transition: { duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }
            }}
            className="relative z-10 w-full max-w-5xl px-6 flex flex-col items-center justify-center min-h-screen"
          >
            {/* 3D Composition Frame */}
            <div 
              onClick={handleEnter}
              className="relative w-full flex flex-col items-center justify-center cursor-pointer group"
              style={{ minHeight: "min(85vh, 650px)" }}
            >
              
              {/* BACK layer: Giant styled name text */}
              <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none select-none z-0 translate-y-[-10%] md:translate-y-[-12%]">
                <motion.span
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 0.4, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="font-mono text-cyan-400 text-xs md:text-sm font-bold uppercase tracking-[0.6em] mb-4 text-center"
                >
                  SYSTEM DEPLOYED
                </motion.span>
                
                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 0.85, y: 0 }}
                  transition={{ delay: 0.35, duration: 0.8 }}
                  className="font-display font-black uppercase text-center leading-none text-white text-[12vw] md:text-[8vw] lg:text-[7vw] tracking-tighter"
                  style={{
                    letterSpacing: "-0.04em",
                  }}
                >
                  TUSHAR<br />
                  <span className="text-transparent" style={{ WebkitTextStroke: "1px rgba(255, 255, 255, 0.2)" }}>
                    KARMAKAR
                  </span>
                </motion.h1>
              </div>

              {/* MIDDLE layer: Avatar portrait */}
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.8, type: "spring", stiffness: 50 }}
                className="relative z-10 mt-20 md:mt-28"
              >
                <div className="relative pointer-events-none w-auto max-w-[90vw]">
                  <Image
                    src="/profile/entry.png"
                    alt="Tushar Karmakar entry silhouette"
                    width={500}
                    height={620}
                    priority
                    className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                    style={{
                      height: "clamp(240px, 45vh, 440px)",
                      width: "auto",
                      mixBlendMode: "screen",
                      background: "transparent",
                    }}
                  />
                  {/* Avatar soft ring pulse */}
                  <div className="absolute inset-0 rounded-full w-40 h-40 bg-cyan-500/5 blur-[50px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:bg-cyan-500/10 transition-all duration-500" />
                </div>
              </motion.div>

              {/* FOREGROUND layer: Glowing entry actions at the bottom */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.75, duration: 0.6 }}
                className="absolute bottom-4 flex flex-col items-center gap-3 w-full z-20"
              >
                <div className="w-px h-10 bg-gradient-to-b from-cyan-400 to-transparent mb-1" />
                
                <button
                  onClick={(e) => {
                    e.stopPropagation(); // Avoid double click
                    handleEnter();
                  }}
                  className="px-8 py-3.5 rounded-full border border-cyan-400/40 bg-cyan-950/20 text-cyan-400 font-mono text-xs font-bold uppercase tracking-widest hover:bg-cyan-400 hover:text-black hover:border-cyan-400 shadow-[0_0_15px_rgba(0,212,255,0.15)] hover:shadow-[0_0_25px_rgba(0,212,255,0.45)] transition-all duration-300 flex items-center gap-2 clickable"
                >
                  <Terminal className="w-4 h-4" />
                  Enter Portfolio
                  <ArrowRight className="w-4 h-4 animate-pulse" />
                </button>
                
                <span className="text-[9px] font-mono uppercase tracking-[0.4em] text-gray-500 mt-2">
                  CLICK ANYWHERE TO START
                </span>
              </motion.div>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
