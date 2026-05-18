"use client";

import { motion } from "framer-motion";
import { Activity, ShieldCheck, Timer, Zap } from "lucide-react";

export default function KpiPanel() {
  const kpis = [
    { label: "Incidents / Mo", value: "50+", icon: <Activity className="w-4 h-4" />, color: "text-cyan-400" },
    { label: "SLA Compliance", value: "95%", icon: <ShieldCheck className="w-4 h-4" />, color: "text-emerald-400" },
    { label: "MTTR Reduction", value: "↓ 25%", icon: <Timer className="w-4 h-4" />, color: "text-blue-400" },
    { label: "RCA Efficiency", value: "Optimized", icon: <Zap className="w-4 h-4" />, color: "text-amber-400" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      animate={{ opacity: 1, x: 0 }}
      className="glass-panel p-6 w-full max-w-[280px] space-y-6 border-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.05)]"
    >
      <div className="flex items-center gap-3 mb-2">
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">System Metrics</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        {(kpis || []).map((kpi, i) => (
          <div key={i} className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className={kpi.color}>{kpi.icon}</span>
              <span className="text-xl font-black text-white px-0.5">{kpi.value}</span>
            </div>
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">{kpi.label}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
