"use client";

import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Calendar, Activity, AlertOctagon, Clock, Users } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";
import { fadeIn } from "@/lib/animations";

export default function EnterpriseExp() {
  const { company, role, duration, achievements, slaTable } = portfolioData.enterprise;

  // Helper to color-code priorities
  const getPriorityColor = (priority: string) => {
    if (priority.includes("P1")) return "text-rose-400 bg-rose-950/30 border-rose-500/20";
    if (priority.includes("P2")) return "text-amber-400 bg-amber-950/30 border-amber-500/20";
    if (priority.includes("P3")) return "text-cyan-400 bg-cyan-950/30 border-cyan-500/20";
    return "text-slate-400 bg-slate-950/30 border-slate-500/20";
  };

  return (
    <section id="enterprise" className="scene-container relative py-28 border-t border-white/5 bg-[#0a0f1e]/20">
      {/* Background spotlights */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-950/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">05 / EXPERIENCE</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Enterprise <span className="cyan-text-gradient">Operations</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Corporate Header Node */}
        <motion.div
          variants={fadeIn("up", 0.1, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel p-8 md:p-10 mb-12 relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 rounded-bl-full pointer-events-none" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-white/5 mb-8">
            <div>
              <span className="text-xs font-mono text-cyan-400 uppercase tracking-widest bg-cyan-950/40 border border-cyan-500/20 px-3 py-1 rounded-full mb-3 inline-block">
                Corporate Tenancy
              </span>
              <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight">
                {company}
              </h3>
              <p className="text-gray-400 text-sm font-semibold mt-1">
                {role}
              </p>
            </div>
            
            <div className="flex items-center gap-2.5 font-mono text-xs text-gray-500 bg-black/20 border border-white/5 px-4 py-2 rounded-xl h-fit w-fit">
              <Calendar className="w-4 h-4 text-cyan-400" />
              <span>{duration}</span>
            </div>
          </div>

          {/* Key Achievements Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {achievements.map((achievement, idx) => (
              <div 
                key={idx}
                className="flex gap-4 p-5 rounded-xl border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-colors"
              >
                <div className="p-2.5 rounded-lg bg-cyan-950/40 border border-cyan-500/10 h-fit flex-shrink-0 text-cyan-400">
                  {idx === 0 ? <Activity className="w-5 h-5" /> :
                   idx === 1 ? <Clock className="w-5 h-5" /> :
                   idx === 2 ? <Users className="w-5 h-5" /> :
                   <ShieldCheck className="w-5 h-5" />}
                </div>
                <div>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {achievement}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* SLA Priority Table Section */}
        <motion.div
          variants={fadeIn("up", 0.2, 0.6)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="glass-panel p-8 md:p-10 relative overflow-hidden"
        >
          <div className="flex items-center gap-3 mb-6">
            <AlertOctagon className="w-6 h-6 text-rose-400" />
            <h3 className="text-xl font-black text-white uppercase tracking-tight">
              SLA Priority Resolution Matrix
            </h3>
          </div>

          <p className="text-gray-400 text-sm mb-8 leading-relaxed">
            Incident response timelines strictly adhered to during operations, coordinating mission-critical systems and mitigating downtime.
          </p>

          {/* Responsive Data Table */}
          <div className="overflow-x-auto rounded-xl border border-white/5 bg-black/25">
            <table className="w-full border-collapse text-left text-sm">
              <thead>
                <tr className="border-b border-white/10 bg-white/[0.02] text-xs font-mono uppercase tracking-wider text-gray-400">
                  <th className="p-4 font-bold">Priority</th>
                  <th className="p-4 font-bold">Incident Classification</th>
                  <th className="p-4 font-bold text-right">Target MTTR</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-gray-300">
                {slaTable.map((row) => (
                  <tr 
                    key={row.priority}
                    className="hover:bg-white/[0.01] transition-colors"
                  >
                    <td className="p-4 font-mono font-bold">
                      <span className={`px-3 py-1 rounded-md border text-xs font-bold ${getPriorityColor(row.priority)}`}>
                        {row.priority}
                      </span>
                    </td>
                    <td className="p-4 font-semibold text-gray-200">
                      {row.issue}
                    </td>
                    <td className="p-4 font-mono font-bold text-cyan-400 text-right">
                      {row.target}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
