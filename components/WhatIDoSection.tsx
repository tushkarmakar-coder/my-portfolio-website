"use client";

import { motion } from "framer-motion";
import { useMode } from "@/lib/mode-context";
import { ShieldAlert, Video, Flame, Zap, BarChart, Users } from "lucide-react";

export default function WhatIDoSection() {
  const { mode } = useMode();
  if (!mode) return null;
  const isRecruiter = mode === "recruiter";

  const recFeatures = [
    { title: "24/7 Incident Control", icon: <ShieldAlert className="w-6 h-6" />, text: "Leading critical bridge calls and ensuring zero-downtime solutions for enterprise applications." },
    { title: "Metric Optimization", icon: <BarChart className="w-6 h-6" />, text: "Implementing proactive monitoring to reduce MTTR and exceed SLA expectations consistently." },
    { title: "Global Coordination", icon: <Users className="w-6 h-6" />, text: "Acting as the technical bridge between dev teams and business stakeholders for rapid resolution." },
  ];

  const clientFeatures = [
    { title: "Viral Hook Research", icon: <Flame className="w-6 h-6" />, text: "Analyzing trends to craft the first 3 seconds that stop the scroll and boost retention." },
    { title: "AI-Native Workflow", icon: <Zap className="w-6 h-6" />, text: "Using cutting-edge AI tools to 10x production speed without sacrificing creative quality." },
    { title: "Engagement Design", icon: <Video className="w-6 h-6" />, text: "Creating high-retention video assets tailored for TikTok, Reels, and YouTube Shorts." },
  ];

  const features = isRecruiter ? recFeatures : clientFeatures;

  return (
    <div id="features" className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35 }}
        className="text-center mb-24"
      >
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Core Capabilities
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          Strategic Impact
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {(features || []).map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.1 }}
            whileHover={{ y: -10 }}
            className="group glass-panel p-12 flex flex-col items-start text-left relative overflow-hidden"
          >
            <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center mb-10 text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 shadow-xl group-hover:shadow-cyan-400/20">
               {item.icon}
            </div>
            
            <h3 className="text-2xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors tracking-tight">
               {item.title}
            </h3>
            
            <p className="text-gray-400 text-lg leading-relaxed font-light group-hover:text-gray-300 transition-colors">
               {item.text}
            </p>

            <div className="mt-12 w-full h-1 bg-white/[0.03] rounded-full overflow-hidden relative">
               <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: "100%" }}
                  transition={{ duration: 0.35, delay: 0.15 }}
                  className="absolute inset-y-0 left-0 bg-cyan-400/30"
               />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
