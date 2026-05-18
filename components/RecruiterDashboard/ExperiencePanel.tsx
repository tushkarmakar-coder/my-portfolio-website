"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperiencePanel() {
  const experiences = [
    "Incident Management (P1/P2)",
    "SLA Monitoring & Reporting",
    "Technical Bridge Coordination",
    "Deep-dive RCA Analysis",
    "Oracle B2C Service Support"
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: 30 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-panel p-8 w-full max-w-[340px] space-y-8 border-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.05)]"
    >
      <div className="flex flex-col gap-4">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Operational Profile</h3>
          <div className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
            <span className="text-[8px] font-black text-cyan-400 uppercase tracking-widest">Active Core</span>
          </div>
        </div>
        
        <div className="flex flex-col gap-2">
          <h4 className="text-2xl font-black text-white">Infogain</h4>
          <p className="text-sm font-bold text-cyan-400/80 uppercase tracking-widest">Incident Manager</p>
        </div>

        <div className="flex items-center gap-4 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
          <div className="flex items-center gap-1">
            <Calendar className="w-3 h-3" />
            <span>Jan 2020 – Present</span>
          </div>
          <div className="flex items-center gap-1 text-gray-600">
            <MapPin className="w-3 h-3" />
            <span>Noida, India</span>
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h5 className="text-[9px] font-black uppercase tracking-[0.3em] text-gray-600">Core Responsibilities</h5>
        <div className="space-y-3">
          {(experiences || []).map((exp, i) => (
            <div key={i} className="flex items-center gap-3 group">
              <CheckCircle2 className="w-4 h-4 text-cyan-500/40 group-hover:text-cyan-400 group-hover:scale-110 transition-all duration-300" />
              <span className="text-xs font-medium text-gray-400 group-hover:text-white transition-colors">{exp}</span>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
