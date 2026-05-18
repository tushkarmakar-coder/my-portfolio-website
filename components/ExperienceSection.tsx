"use client";

import { motion } from "framer-motion";
import { useMode } from "@/lib/mode-context";
import { Briefcase, ShieldCheck, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const { mode } = useMode();
  if (!mode) return null;
  const isRecruiter = mode === "recruiter";

  if (!isRecruiter) return null;

  const highlights = [
    "Resolved 50+ incidents per month with a consistent 95% SLA compliance rate.",
    "Reduced Mean Time To Recovery (MTTR) by ~25% through proactive root cause analysis.",
    "Led major incident bridge calls, coordinating between technical teams and stakeholders.",
    "Conducted deep-dive Root Cause Analysis (RCA) to eliminate recurring production issues.",
  ];

  return (
    <div id="experience" className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35 }}
        className="text-center mb-20"
      >
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Operational History
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          Support Overview
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl mx-auto">
        {/* Main Work Experience Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="md:col-span-2 bg-white/[0.01] border border-white/5 p-10 rounded-[40px] relative overflow-hidden group"
        >
          <div className="absolute top-0 right-0 p-10 opacity-[0.03] group-hover:opacity-[0.05] transition-opacity">
            <Briefcase className="w-40 h-40 text-cyan-400" />
          </div>
          
          <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <div>
              <h3 className="text-3xl md:text-5xl font-black text-white flex items-center gap-4">
                Infogain 
                <span className="text-sm font-bold text-cyan-500 bg-cyan-500/10 px-4 py-1 rounded-full uppercase tracking-widest">Incident Manager</span>
              </h3>
              <p className="text-gray-500 font-medium mt-2 tracking-widest uppercase">Jan 2020 — Present</p>
            </div>
            <div className="flex items-center gap-3 bg-white/[0.03] border border-white/5 px-6 py-3 rounded-2xl">
              <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
              <span className="text-xs font-black text-white uppercase tracking-widest">Active System Monitor</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 relative z-10">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em] mb-4">Core Deliverables</h4>
              {(highlights || []).map((item, i) => (
                <div key={i} className="flex items-start gap-4 group/item">
                  <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover/item:bg-cyan-400 transition-colors shrink-0" />
                  <p className="text-gray-400 text-sm leading-relaxed group-hover/item:text-white transition-colors">
                    {item}
                  </p>
                </div>
              ))}
            </div>
            
            <div className="bg-white/[0.02] border border-white/5 rounded-3xl p-8 group-hover:bg-white/[0.03] transition-colors">
              <h4 className="text-[10px] font-black text-gray-500 uppercase tracking-[0.3em] mb-6">Incident Leadership</h4>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                Managing high-pressure production environments through rigorous triage, stakeholder bridge leadership, and systematic RCA delivery to ensure extreme platform reliability.
              </p>
              <div className="flex flex-wrap gap-2">
                {["P1 Management", "Cross-Team Sync", "Governance"].map((tag, i) => (
                  <span key={i} className="px-3 py-1 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-[9px] font-black text-cyan-400 uppercase tracking-widest">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Operational Modules */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.01] border border-white/5 p-8 rounded-[32px] hover:bg-white/[0.02] transition-all"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
            </div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">SLA Tracking</h4>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest mb-1">
              <span className="text-gray-500">Compliance Rate</span>
              <span className="text-cyan-400">95.8%</span>
            </div>
            <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-cyan-500 w-[95%] shadow-[0_0_10px_rgba(6,182,212,0.3)]" />
            </div>
            <p className="text-[10px] text-gray-500 leading-relaxed italic mt-4">
              * Consistently meeting internal & client-facing thresholds for P1/P2/P3 tickets.
            </p>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-white/[0.01] border border-white/5 p-8 rounded-[32px] hover:bg-white/[0.02] transition-all"
        >
          <div className="flex items-center gap-4 mb-6">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center">
              <CheckCircle2 className="w-5 h-5 text-blue-400" />
            </div>
            <h4 className="font-bold text-white uppercase tracking-widest text-sm">RCA Governance</h4>
          </div>
          <p className="text-gray-500 text-xs leading-relaxed mb-4">
            Proactive identification of recurring bugs through deep-dive analysis of server logs, stack traces, and database locks.
          </p>
          <div className="flex items-center gap-2 text-[9px] font-black text-blue-400 uppercase tracking-[0.2em] bg-blue-400/10 px-3 py-1 rounded-lg w-fit">
            <div className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Zero Recurrence Target
          </div>
        </motion.div>
      </div>
    </div>
  );
;
}
