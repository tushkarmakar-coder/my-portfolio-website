"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldAlert, Sparkles, Server } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Certifications() {
  const certifications = portfolioData.certifications;

  // Helper to choose award icon color based on issuer
  const getIcon = (issuer: string) => {
    const lower = issuer.toLowerCase();
    if (lower.includes("microsoft")) return <Award className="w-6 h-6 text-cyan-400" />;
    if (lower.includes("google")) return <Sparkles className="w-6 h-6 text-emerald-400" />;
    if (lower.includes("amazon") || lower.includes("aws")) return <Server className="w-6 h-6 text-amber-400" />;
    return <Award className="w-6 h-6 text-purple-400" />;
  };

  return (
    <section id="certifications" className="scene-container relative py-28 border-t border-white/5 bg-[#0a0f1e]/20">
      {/* Background backing glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-950/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">07 / CREDENTIALS</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Professional <span className="cyan-text-gradient">Certifications</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Certifications Grid */}
        <motion.div
          variants={staggerContainer(0.08, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
        >
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              variants={fadeIn("up", 0.05, 0.5)}
              className="h-full"
            >
              <Card3D
                maxTilt={10}
                glowColor="rgba(0, 212, 255, 0.12)"
                className="p-6 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Issuer icon & tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="p-2 rounded-xl bg-white/[0.02] border border-white/5 group-hover:border-cyan-500/30 group-hover:bg-cyan-950/20 transition-all duration-300">
                      {getIcon(cert.issuer)}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-gray-400 transition-colors uppercase tracking-wider">
                      {cert.issuer}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-sm font-bold text-white leading-snug group-hover:text-cyan-400 transition-colors duration-300">
                    {cert.title}
                  </h3>
                </div>

                {/* Footer validation check */}
                <div className="border-t border-white/5 pt-4 mt-6 flex items-center justify-between">
                  <span className="text-[9px] font-mono text-gray-600 uppercase tracking-widest">
                    SYSTEM VERIFIED
                  </span>
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
