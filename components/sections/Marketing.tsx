"use client";

import React from "react";
import { motion } from "framer-motion";
import { Instagram, Facebook, Linkedin, Target, CheckCircle2, TrendingUp } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Marketing() {
  const marketingData = portfolioData.digitalMarketing;

  // Helper to resolve specific channel styles
  const getChannelStyles = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("instagram")) {
      return {
        icon: <Instagram className="w-8 h-8 text-rose-400" />,
        glowColor: "rgba(244, 63, 94, 0.15)",
        badgeBg: "bg-rose-950/30 text-rose-400 border-rose-500/20",
        bulletColor: "bg-rose-400"
      };
    }
    if (lower.includes("facebook") || lower.includes("meta")) {
      return {
        icon: <Facebook className="w-8 h-8 text-blue-400" />,
        glowColor: "rgba(59, 130, 246, 0.15)",
        badgeBg: "bg-blue-950/30 text-blue-400 border-blue-500/20",
        bulletColor: "bg-blue-400"
      };
    }
    // LinkedIn
    return {
      icon: <Linkedin className="w-8 h-8 text-sky-400" />,
      glowColor: "rgba(14, 165, 233, 0.15)",
      badgeBg: "bg-sky-950/30 text-sky-400 border-sky-500/20",
      bulletColor: "bg-sky-400"
    };
  };

  return (
    <section id="marketing" className="scene-container relative py-28 border-t border-white/5 bg-[#0a0f1e]/40">
      {/* Background backing glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">08 / GROWTH</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Digital <span className="cyan-text-gradient">Marketing</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Marketing Pillars Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.15)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-6"
        >
          {marketingData.map((channel, index) => {
            const styles = getChannelStyles(channel.title);
            
            return (
              <motion.div
                key={channel.title}
                variants={fadeIn("up", index * 0.1, 0.6)}
                className="h-full"
              >
                <Card3D
                  maxTilt={10}
                  glowColor={styles.glowColor}
                  className="p-8 md:p-10 flex flex-col justify-between h-full group"
                >
                  <div className="flex flex-col h-full">
                    
                    {/* Channel Branding Header */}
                    <div className="flex items-center justify-between mb-8">
                      <div className="p-3.5 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-white/10 transition-all duration-300">
                        {styles.icon}
                      </div>
                      <span className={`text-[10px] font-mono font-bold tracking-widest px-3.5 py-1 rounded-full border uppercase ${styles.badgeBg}`}>
                        GROWTH ENGINE
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-6 group-hover:text-cyan-400 transition-colors duration-300">
                      {channel.title}
                    </h3>

                    {/* Bullet capabilities */}
                    <ul className="space-y-4 mb-8 mt-auto pt-6 border-t border-white/5">
                      {channel.bullets.map((bullet) => (
                        <li 
                          key={bullet}
                          className="flex items-start gap-3.5 text-xs text-gray-300 font-semibold group-hover/item:text-white transition-colors"
                        >
                          <CheckCircle2 className="w-4 h-4 text-cyan-400 mt-0.5 flex-shrink-0" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                  </div>

                  {/* Footer traction metric */}
                  <div className="border-t border-white/5 pt-5 mt-auto flex items-center justify-between">
                    <span className="text-[10px] font-mono text-gray-500 uppercase tracking-widest flex items-center gap-1.5">
                      <TrendingUp className="w-3.5 h-3.5 text-cyan-400" />
                      OPTIMIZED AUDIENCE
                    </span>
                    <span className="text-[10px] font-mono text-gray-600">
                      SYS: {index === 0 ? "IG" : index === 1 ? "FB" : "LI"}
                    </span>
                  </div>
                </Card3D>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
