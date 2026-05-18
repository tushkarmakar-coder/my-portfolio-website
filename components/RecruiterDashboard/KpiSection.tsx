"use client";

import { motion } from "framer-motion";

export default function KpiSection() {
  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Operational Excellence
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          SLA & Performance Metrics
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="flex flex-col items-start p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-500/30" />
          <span className="text-5xl font-black text-white group-hover:text-cyan-400 transition-colors">50+</span>
          <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-2 mb-6 font-bold">Incidents / Month</span>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "85%" }} 
              transition={{ duration: 0.35, delay: 0.1 }}
              className="h-full bg-cyan-500 shadow-[0_0_15px_rgba(6,182,212,0.5)]" 
            />
          </div>
        </div>

        <div className="flex flex-col items-start p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-400/30" />
          <span className="text-5xl font-black text-white group-hover:text-cyan-400 transition-colors">95%</span>
          <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-2 mb-6 font-bold">SLA Compliance</span>
          <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }} 
              whileInView={{ width: "95%" }} 
              transition={{ duration: 0.35, delay: 0.15 }}
              className="h-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.5)]" 
            />
          </div>
        </div>

        <div className="flex flex-col items-start p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-blue-500/30" />
          <span className="text-5xl font-black text-white group-hover:text-blue-400 transition-colors">↓ 25%</span>
          <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-2 mb-6 font-bold">MTTR Reduction</span>
          <div className="flex items-center gap-2 text-[10px] font-black text-blue-400 uppercase tracking-widest bg-blue-500/10 px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Operational Efficiency
          </div>
        </div>

        <div className="flex flex-col items-start p-8 rounded-[40px] bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all group relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-cyan-600/30" />
          <span className="text-5xl font-black text-white group-hover:text-cyan-400 transition-colors">↓ 20-30%</span>
          <span className="text-[10px] text-gray-500 tracking-[0.2em] uppercase mt-2 mb-6 font-bold">RCA Log Reduction</span>
          <div className="flex items-center gap-2 text-[10px] font-black text-cyan-400 uppercase tracking-widest bg-cyan-500/10 px-3 py-1 rounded-full">
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-bounce" />
            Recurring Issue Prevention
          </div>
        </div>
      </div>
    </div>
  );
}
