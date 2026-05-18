"use client";

import React from "react";
import { motion } from "framer-motion";
import { Globe, Cpu, ShieldAlert, Wrench, ArrowRight } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function Services() {
  const services = portfolioData.services;

  // Helper to map icon names to Lucide icons
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-8 h-8 text-cyan-400" />;
      case "Cpu":
        return <Cpu className="w-8 h-8 text-cyan-400" />;
      case "ShieldAlert":
        return <ShieldAlert className="w-8 h-8 text-cyan-400" />;
      case "Wrench":
        return <Wrench className="w-8 h-8 text-cyan-400" />;
      default:
        return <Globe className="w-8 h-8 text-cyan-400" />;
    }
  };

  return (
    <section id="services" className="scene-container relative py-28 border-t border-white/5 bg-[#0a0f1e]/40">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">02 / EXPERTISE</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            What <span className="cyan-text-gradient">I Do</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Services Bento Grid */}
        <motion.div
          variants={staggerContainer(0.15, 0.1)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={fadeIn("up", index * 0.1, 0.6)}
              className="h-full"
            >
              <Card3D
                maxTilt={8}
                glowColor="rgba(0, 212, 255, 0.18)"
                className="p-8 md:p-10 flex flex-col justify-between h-full group"
              >
                <div>
                  {/* Icon & Title Block */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="p-3.5 rounded-2xl bg-cyan-950/30 border border-cyan-500/20 group-hover:border-cyan-500/50 transition-all duration-300 shadow-[0_0_15px_rgba(0,212,255,0.05)] group-hover:shadow-[0_0_20px_rgba(0,212,255,0.15)] flex-shrink-0">
                      {getIcon(service.icon)}
                    </div>
                    <span className="text-[10px] font-mono text-gray-500 group-hover:text-cyan-400 transition-colors">
                      [ 0{index + 1} ]
                    </span>
                  </div>

                  {/* Service Text */}
                  <h3 className="text-2xl font-black text-white uppercase tracking-tight mb-4 group-hover:text-cyan-400 transition-colors duration-300">
                    {service.title}
                  </h3>
                  
                  <p className="text-gray-400 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Bullets List */}
                <div className="border-t border-white/5 pt-6 mt-auto">
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.bullets.map((bullet) => (
                      <li 
                        key={bullet}
                        className="flex items-start gap-2.5 text-xs text-gray-400 group-hover:text-gray-300 transition-colors"
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Card3D>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
