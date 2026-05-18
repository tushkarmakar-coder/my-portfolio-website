"use client";

import React from "react";
import { motion } from "framer-motion";
import { Terminal, Shield, Sparkles, Code2 } from "lucide-react";
import { portfolioData } from "@/lib/data";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function TechStack() {
  const techStack = portfolioData.techStack;

  return (
    <section id="tech-stack" className="scene-container relative py-28 border-t border-white/5 bg-[#0a0f1e]/20">
      {/* Decorative backing glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-purple-950/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">03 / ARSENAL</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            Tech <span className="cyan-text-gradient">Stack</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Dynamic Categorized Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {techStack.map((stack, categoryIndex) => {
            const isCoreDev = stack.category === "Core Dev";
            
            return (
              <motion.div
                key={stack.category}
                variants={fadeIn(categoryIndex === 0 ? "right" : "left", 0.1, 0.6)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true, margin: "-100px" }}
                className="glass-panel p-8 md:p-10 relative overflow-hidden"
              >
                {/* Tech Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/5 pb-6 mb-8">
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-lg ${
                      isCoreDev ? "bg-cyan-950/40 text-cyan-400" : "bg-amber-950/40 text-amber-400"
                    }`}>
                      {isCoreDev ? <Terminal className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
                    </div>
                    <div>
                      <h3 className="font-bold text-white uppercase text-lg tracking-wider">
                        {stack.category}
                      </h3>
                      <p className="text-[10px] text-gray-500 font-mono">
                        {isCoreDev ? "const build = (tech) => createSystem()" : "await automate(tasks)"}
                      </p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-mono px-2.5 py-1 rounded border ${
                    isCoreDev 
                      ? "border-cyan-500/10 text-cyan-400 bg-cyan-950/15" 
                      : "border-amber-500/10 text-amber-400 bg-amber-950/15"
                  }`}>
                    ACTIVE NODE
                  </span>
                </div>

                {/* Badges Grid */}
                <motion.div 
                  variants={staggerContainer(0.08, 0)}
                  className="flex flex-wrap gap-3.5"
                >
                  {stack.skills.map((skill) => (
                    <motion.div
                      key={skill.name}
                      variants={fadeIn("up", 0.05, 0.4)}
                      whileHover={{ 
                        scale: 1.05,
                        y: -3,
                      }}
                      className={`px-5 py-3 rounded-xl border font-semibold text-sm transition-all duration-300 backdrop-blur-md cursor-default flex items-center gap-2.5 ${
                        isCoreDev
                          ? "bg-cyan-950/10 border-white/5 text-gray-300 hover:border-cyan-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(0,212,255,0.08)]"
                          : "bg-amber-950/10 border-white/5 text-gray-300 hover:border-amber-500/40 hover:text-white hover:shadow-[0_0_15px_rgba(245,166,35,0.08)]"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${
                        isCoreDev ? "bg-cyan-400 animate-pulse" : "bg-amber-400 animate-pulse"
                      }`} />
                      <span className="font-mono text-xs">{skill.name}</span>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
