"use client";

import { motion } from "framer-motion";
import { Trophy, CheckCircle2 } from "lucide-react";

export default function AchievementsSection() {
  const achievements = [
    "Spot Award (Feb 2022) – Infogain: Recognized for outstanding incident management performance – 95%+ SLA across 50+ monthly P1/P2 incidents, ∼25% MTTR reduction, and 20–30% drop in recurring issues through structured RCA.",
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Key Achievements
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Professional Milestones
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-panel p-10 md:p-16 border-cyan-500/10 relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-white">Highlights</h3>
              <p className="text-xl font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-3">
                <Trophy className="w-5 h-5" />
                Performance Metrics
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="grid grid-cols-1 gap-6">
              {(achievements || []).map((resp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group/item"
                >
                  <div className="mt-1 flex items-center justify-center w-6 h-6 shrink-0 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover/item:border-cyan-400 transition-colors">
                    <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                  </div>
                  <p className="text-lg text-gray-400 leading-relaxed group-hover/item:text-white transition-colors">
                    {resp}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
