"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useMode } from "@/lib/mode-context";
import { portfolioData } from "@/lib/data";
import { X, ExternalLink, Mail, MapPin } from "lucide-react";
import { useState, useEffect } from "react";

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ProfileModal({ isOpen, onClose }: ProfileModalProps) {
  const { mode } = useMode();
  const [view, setView] = useState<"mini" | "full">("mini");

  // Reset view when opened/closed
  useEffect(() => {
    if (!isOpen && view !== "mini") {
      const timer = setTimeout(() => setView("mini"), 300);
      return () => clearTimeout(timer);
    }
  }, [isOpen, view]);

  if (!mode) return null;
  const { personal } = portfolioData;
  const isRecruiter = mode === "recruiter";

  const profileImage = isRecruiter ? "/profile/recruiter.png" : "/profile/client.png";
  const role = isRecruiter ? "Incident Manager" : "AI Content & Web Solutions Creator";

  const recruiterData = {
    summary: (
      <div className="space-y-6">
        <p>Incident Manager with 6+ years of experience owning end-to-end incident lifecycle management for enterprise SaaS platforms (Oracle B2C Cloud).</p>
        <p>I lead high-severity P1/P2 triage, manage major incident bridge calls, and execute RCA-driven problem management to stabilize production systems.</p>
        <p>I perform SQL diagnostics, REST API testing, backend log analysis, and release monitoring to accelerate root cause identification and improve SLA adherence.</p>
        <p>I hold a Bachelor of Technology in Information Technology from ITER, Siksha ‘O’ Anusandhan University and continue formal learning through ITIL v4 and cloud practitioner training.</p>
      </div>
    ),
    focusAreas: ["Incident Ownership", "System Reliability", "SLA & MTTR Optimization", "Root Cause Analysis (RCA)", "Production Stability", "API & Log Debugging"],
    tools: ["SQL", "REST API", "JSON", "Backend Log Analysis", "Oracle B2C Cloud", "ServiceNow", "JIRA", "Cherwell"],
    impact: [
      { label: "Incidents", value: "50+", sub: "/ month" },
      { label: "SLA", value: "95%", sub: "compliance" },
      { label: "MTTR", value: "↓25%", sub: "faster resolution" },
      { label: "RCA Log", value: "↓20-30%", sub: "prevention rate" },
    ]
  };

  const clientData = {
    summary: "AI Content & Web Solutions Creator specializing in high-retention AI video production, high-growth social media strategy, and modern web development. Delivering premium digital assets and creative solutions at scale.",
    focusAreas: ["AI Video Creation", "Social Media Growth", "Website Development", "Creative Strategy"],
    tools: ["ChatGPT", "Gemini", "Claude", "CapCut", "Google Flow", "InShot", "Canva"]
  };

  const currentData = isRecruiter ? recruiterData : clientData;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="absolute inset-0 bg-[#050508]/80 backdrop-blur-md"
          />

          {/* Modal Content */}
          {view === "mini" ? (
            <motion.div
              layoutId="profile-modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-sm glass-panel p-6 border-cyan-500/20 shadow-2xl flex flex-col items-center text-center overflow-hidden"
              style={{ background: "rgba(11, 15, 23, 0.95)" }}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-2 bg-cyan-500/40 blur-xl" />

              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/5 transition-colors text-gray-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-cyan-500/40 p-1 mb-4 mt-2">
                <div className="relative w-full h-full rounded-full overflow-hidden">
                  <Image src={profileImage} alt={personal.name} fill className="object-cover" />
                </div>
              </div>

              <h2 className="text-2xl font-black text-white mb-1">{personal.name}</h2>
              <p className="text-cyan-400 text-sm font-semibold tracking-wide mb-6">{role}</p>

              <div className="w-full flex justify-center gap-2 flex-wrap mb-8">
                {currentData.focusAreas.slice(0, 3).map((area) => (
                  <span key={area} className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-300">
                    {area}
                  </span>
                ))}
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setView("full")}
                className="w-full py-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 text-cyan-400 font-bold transition-colors"
              >
                View Full Profile
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              layoutId="profile-modal-container"
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-6xl max-h-[90vh] overflow-y-auto glass-panel border-cyan-500/20 shadow-[-20px_20px_60px_-15px_rgba(6,182,212,0.2)] flex flex-col md:flex-row"
              style={{ background: "rgba(11, 15, 23, 0.95)" }}
            >
              <button
                onClick={onClose}
                className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors text-gray-400 hover:text-white z-10"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="w-full md:w-[35%] bg-black/20 p-8 md:p-12 flex flex-col items-center text-center border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-cyan-500/5 to-transparent pointer-events-none" />
                <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-cyan-500/30 p-2 mb-6 shadow-[0_0_40px_rgba(6,182,212,0.15)] flex-shrink-0">
                  <div className="relative w-full h-full rounded-full overflow-hidden">
                    <Image src={profileImage} alt={personal.name} fill className="object-cover" />
                  </div>
                </div>
                <h1 className="text-3xl md:text-4xl font-black text-white mb-2">{personal.name}</h1>
                <p className="text-cyan-400 text-base md:text-lg font-bold tracking-wide mb-8">{role}</p>

                <div className="w-full flex justify-center">
                  <div className="flex flex-col gap-4 text-left w-full align-middle">
                    <a href={`mailto:${personal.email}`} className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                        <Mail className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">{personal.email}</span>
                    </a>
                    <a href={personal.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 group-hover:text-cyan-400 transition-colors">
                        <ExternalLink className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">LinkedIn Profile</span>
                    </a>
                    <div className="flex items-center gap-3 text-gray-400 group">
                      <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
                        <MapPin className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium">Noida, India</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-[65%] p-8 md:p-12 flex flex-col gap-10">
                <div className="space-y-4">
                  <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-4">
                    About <span className="h-px bg-white/10 flex-1" />
                  </h3>
                  <div className="text-gray-400 text-lg leading-relaxed italic font-light drop-shadow-sm">
                    {currentData.summary}
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-4">
                    Focus Areas <span className="h-px bg-white/10 flex-1" />
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {currentData.focusAreas.map(skill => (
                      <span key={skill} className="px-4 py-2 rounded-full border border-cyan-500/20 bg-cyan-500/5 text-cyan-50 hover:bg-cyan-500/10 hover:border-cyan-500/40 transition-all cursor-default text-sm shadow-[0_0_10px_rgba(6,182,212,0.05)] hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {isRecruiter && recruiterData.impact && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-4">
                      Impact Summary <span className="h-px bg-white/10 flex-1" />
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      {recruiterData.impact.map((item, idx) => (
                        <div key={idx} className="bg-black/30 p-4 rounded-xl border border-white/5 text-center flex flex-col justify-center min-h-[110px]">
                          <div className="text-2xl font-black text-cyan-400">{item.value}</div>
                          <div className="text-[10px] uppercase tracking-wider text-gray-500 font-bold mt-1">{item.label}</div>
                          <div className="text-[9px] text-gray-600 mt-0.5">{item.sub}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="space-y-4">
                  <h3 className="text-lg font-black text-white uppercase tracking-widest flex items-center gap-4">
                    Top Tools <span className="h-px bg-white/10 flex-1" />
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentData.tools.map(tool => (
                      <span key={tool} className="px-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-gray-300 text-sm">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      )}
    </AnimatePresence>
  );
}
