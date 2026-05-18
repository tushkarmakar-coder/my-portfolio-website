"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";

export default function ExperienceSection() {
  const responsibilities = [
    "Owned end-to-end incident lifecycle (triage → investigation → resolution → RCA) for Oracle B2C Cloud.",
    "Resolved 50+ P1/P2 incidents per month with 95%+ SLA adherence.",
    "Reduced MTTR by ~25% through triage workflow and escalation optimization.",
    "Served as sole SPOC for night shifts over 4+ years handling critical incidents end-to-end.",
    "Led P1 major incident bridge calls coordinating development, QA, infrastructure, and business stakeholders.",
    "Recovered from full-site outage within ~2 hours using rapid incident response planning.",
    "Drove RCA-based problem management initiatives that reduced recurring incidents by 20–30%.",
    "Performed REST API diagnostics, SQL-based data validation, and backend log analysis to accelerate root cause identification.",
    "Supported Agile/Scrum releases with deployment validation, post-release monitoring, and regression incident tracking."
  ];

  return (
    <div className="w-full max-w-7xl mx-auto py-20 px-6">
      <div className="text-center mb-16">
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Operational Profile
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight">
          Professional Experience
        </h2>
      </div>

      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="glass-panel p-10 md:p-16 border-cyan-500/10 relative overflow-hidden group"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/10 transition-colors" />
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
            <div className="space-y-2">
              <h3 className="text-4xl font-black text-white">Infogain</h3>
              <p className="text-xl font-bold text-cyan-400 tracking-widest uppercase flex items-center gap-3">
                <Briefcase className="w-5 h-5" />
                Incident Manager
              </p>
            </div>
            
            <div className="flex flex-col gap-2 text-sm font-bold text-gray-500 uppercase tracking-widest">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-cyan-500/40" />
                <span>Jan 2020 – Present</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-cyan-500/40" />
                <span>Noida, India</span>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <h4 className="text-[10px] font-black uppercase tracking-[0.4em] text-gray-600 border-b border-white/5 pb-4">
              Core Responsibilities & Impact
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
              {(responsibilities || []).map((resp, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-start gap-4 group/item"
                >
                  <div className="mt-1 flex items-center justify-center w-6 h-6 rounded-lg bg-cyan-500/10 border border-cyan-500/20 group-hover/item:border-cyan-400 transition-colors">
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
