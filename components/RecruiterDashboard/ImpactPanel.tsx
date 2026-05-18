"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, TrendingUp } from "lucide-react";
import { Shield, Terminal, Settings } from "lucide-react";
import React from "react";

interface ImpactPanelProps {
  selectedCategory: string;
  selectedItem: string;
}

import { skillMatrixData } from "@/lib/skillMatrixData";

export default function ImpactPanel({ selectedCategory, selectedItem }: ImpactPanelProps) {
  const defaultCategory = Object.keys(skillMatrixData)[0];
  const data = skillMatrixData[selectedCategory]?.[selectedItem] ?? skillMatrixData[defaultCategory]?.[defaultCategory];
  const impactText = data?.impact ?? "No impact data available for this selection.";
  const usageItems = data?.usage ?? [];
  
  const getIcon = (category: string) => {
    if (category === "Incident Management & ITSM") return <Shield className="w-5 h-5 text-emerald-400" />;
    if (category === "Monitoring & Observability") return <Terminal className="w-5 h-5 text-blue-400" />;
    if (category === "Cloud & Infrastructure") return <Settings className="w-5 h-5 text-cyan-400" />;
    if (category === "Development & Programming") return <Terminal className="w-5 h-5 text-blue-400" />;
    if (category === "Methodologies") return <Shield className="w-5 h-5 text-emerald-400" />;
    return <Settings className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-8 w-full max-w-[400px] space-y-8 border-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.05)]"
    >
      {/* Header */}
      <div className="flex items-center gap-3">
        <TrendingUp className="w-4 h-4 text-cyan-400" />
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">
          Production Impact
        </h3>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={selectedItem}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Impact Quote */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 mb-2">
              {getIcon(selectedCategory)}
              <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">
                Key Result
              </span>
            </div>
            <div className="border-l-2 border-cyan-500/40 pl-4">
              <p className="text-lg font-bold text-white italic leading-snug">
                &quot;{impactText}&quot;
              </p>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/5" />

          {/* Real-world Usage */}
          <div className="space-y-4">
            <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">
              Real-World Usage
            </span>
            <ul className="space-y-3">
              {usageItems.map((use, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-400">
                  <Sparkles className="w-3 h-3 text-cyan-400/60 mt-0.5 shrink-0" />
                  <span>{use}</span>
               </li>
              ))}
            </ul>
          </div>

          {/* Bottom Glow Tag */}
          <div className="pt-4 border-t border-white/5">
            <span className="text-[10px] font-black text-cyan-500/40 uppercase tracking-[0.4em]">
              @ Infogain — Jan 2020–Present
            </span>
          </div>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
