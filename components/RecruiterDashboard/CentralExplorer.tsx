"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Hand, Shield, Terminal, Settings } from "lucide-react";
import React from "react";

interface CentralExplorerProps {
  selectedCategory: string;
  selectedItem: string;
}

const skillIcon: Record<string, React.ReactNode> = {
  "Incident Management & ITSM": <Shield className="w-8 h-8 text-emerald-400" />,
  "Monitoring & Observability": <Terminal className="w-8 h-8 text-blue-400" />,
  "Cloud & Infrastructure": <Settings className="w-8 h-8 text-cyan-400" />,
  "Development & Programming": <Terminal className="w-8 h-8 text-blue-400" />,
  "Methodologies": <Shield className="w-8 h-8 text-cyan-400" />,
};

export default function CentralExplorer({ selectedCategory, selectedItem }: CentralExplorerProps) {
  const icon = skillIcon[selectedCategory] || skillIcon["Incident Management"];

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[500px] w-full mx-auto pointer-events-none select-none">
      {/* Rotating Orbit Ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        className="absolute w-[380px] h-[380px] border border-cyan-500/10 rounded-full"
      >
        <div className="absolute w-[300px] h-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border border-dashed border-cyan-500/5 rounded-full" />
        <div className="absolute top-0 left-1/2 -ml-2 w-4 h-4 rounded-full bg-cyan-500/30 blur-sm animate-pulse" />
      </motion.div>

      {/* Counter-rotating inner ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        className="absolute w-[200px] h-[200px] border border-cyan-500/5 rounded-full"
      >
        <div className="absolute bottom-0 left-1/2 -ml-1 w-2 h-2 rounded-full bg-cyan-400/20 blur-sm" />
      </motion.div>

      {/* Center Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedItem}
          initial={{ opacity: 0, scale: 0.8, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 1.1, y: -20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-8 z-10"
        >
          {/* Floating Skill Icon */}
          <motion.div
            animate={{ y: [0, -12, 0], rotate: [0, 4, -4, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="w-28 h-28 rounded-3xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center shadow-[0_0_40px_rgba(6,182,212,0.15)] mb-4"
          >
            {icon}
          </motion.div>

          {/* Holographic Hand */}
          <div className="relative pointer-events-none">
            <div className="absolute inset-0 bg-cyan-500/20 blur-3xl rounded-full scale-150 animate-pulse" />
            <Hand className="w-14 h-14 text-cyan-400/60" />
          </div>

          {/* Big Skill Name */}
          <div className="text-center mt-2 flex flex-col items-center justify-center">
            <span className="text-[10px] font-black text-cyan-500/50 uppercase tracking-[0.5em] block mb-3">
              Analyzing Capability
            </span>
            <div className="flex flex-col items-center justify-center text-center">
              {selectedItem.split(" ").map((word, index) => (
                <div key={index} className="text-white font-black text-[clamp(24px,4vw,48px)] leading-[1.2] drop-shadow-[0_0_15px_rgba(34,211,238,0.5)] tracking-tight">
                  {word}
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
