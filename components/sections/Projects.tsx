"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, ExternalLink, Calendar, CheckSquare, Layers } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Projects() {
  const projects = portfolioData.projects;

  // Helper to determine status styling classes
  const getStatusClasses = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-emerald-950/40 text-emerald-400 border-emerald-500/20";
      case "Delivered":
        return "bg-purple-950/40 text-purple-400 border-purple-500/20";
      case "Ongoing":
        return "bg-blue-950/40 text-blue-400 border-blue-500/20";
      default:
        return "bg-gray-950/40 text-gray-400 border-gray-500/20";
    }
  };

  return (
    <section id="projects" className="scene-container relative py-28 border-t border-white/5 bg-[#0a0f1e]/40">
      {/* Dynamic ambient spotlight */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-cyan-950/10 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="flex flex-col">
            <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">04 / CREATIONS</span>
            <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
              Featured <span className="cyan-text-gradient">Projects</span>
            </h2>
            <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
          </div>
          
          <p className="text-gray-500 text-xs font-mono mt-4 md:mt-0 max-w-sm leading-relaxed">
            [ System architectures built for high transaction throughput, automated workflows, and organic business acceleration ]
          </p>
        </div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const isFullWidth = index === 0; // Highlight the first restaurant project in wider display
            
            return (
              <motion.div
                key={project.id}
                variants={fadeIn("up", index * 0.1, 0.6)}
                className={`h-full ${isFullWidth ? "md:col-span-2" : ""}`}
              >
                <Card3D
                  maxTilt={6}
                  glowColor="rgba(0, 212, 255, 0.15)"
                  className="p-8 md:p-10 flex flex-col justify-between h-full group"
                >
                  <div className="flex flex-col h-full">
                    {/* Header: Project type and status */}
                    <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
                      <span className="text-[10px] font-mono tracking-widest text-cyan-400 uppercase bg-cyan-950/30 border border-cyan-500/20 px-3 py-1 rounded-full">
                        {project.type}
                      </span>
                      
                      <span className={`text-[10px] font-mono font-bold tracking-wider px-3 py-1 rounded-full border flex items-center gap-1.5 ${
                        getStatusClasses(project.status)
                      }`}>
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        {project.status.toUpperCase()}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-2xl md:text-3xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Bullet Achievements */}
                    <div className="bg-[#080d1e]/50 border border-white/5 rounded-xl p-6 mb-8 mt-auto backdrop-blur-md">
                      <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-3 flex items-center gap-2">
                        <Layers className="w-3.5 h-3.5 text-cyan-400" />
                        Key Implementations
                      </h4>
                      <ul className="space-y-3">
                        {project.bullets.map((bullet) => (
                          <li key={bullet} className="flex items-start gap-3 text-xs text-gray-300">
                            <span className="w-1 h-1 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                            <span className="leading-relaxed">{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Footer link triggers */}
                  <div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
                    <span className="text-[10px] font-mono text-gray-600">
                      ID: {project.id}
                    </span>
                    
                    {project.liveUrl && project.liveUrl !== "#" ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-xs font-bold text-white hover:text-cyan-400 transition-colors clickable font-mono"
                      >
                        Launch Live App
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ) : (
                      <span className="text-xs font-mono text-gray-500">
                        Operational System
                      </span>
                    )}
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
