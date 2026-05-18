"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FileDown, FileText, CheckCircle, Shield, Cpu, Share2 } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";
import AnimatedCounter from "@/components/ui/AnimatedCounter";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function About() {
  const { stats, resumePath, capabilityPath } = portfolioData.personal;

  return (
    <section id="about" className="scene-container relative mesh-bg py-28 border-t border-white/5">
      {/* Background spotlights */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-purple-950/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">01 / Profile</span>
          <h2 className="text-3xl md:text-5xl font-black uppercase text-white tracking-tight">
            About <span className="cyan-text-gradient">Tushar</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* LEFT: Stats Grid (Lg: 7 cols) */}
          <motion.div
            variants={staggerContainer(0.1, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:col-span-6"
          >
            {stats.map((stat, i) => (
              <Card3D 
                key={stat.label}
                maxTilt={15}
                className="p-6 flex flex-col justify-between min-h-[140px]"
              >
                <div className="text-gray-500 text-xs font-mono uppercase tracking-wider mb-4 leading-normal">
                  {stat.label}
                </div>
                <div className="text-3xl md:text-4xl font-black font-display text-white">
                  <AnimatedCounter to={stat.number} suffix={stat.suffix} />
                </div>
              </Card3D>
            ))}

            {/* Quick Skill Pillar highlights */}
            <Card3D className="p-6 flex flex-col justify-center border-dashed border-cyan-500/20 bg-cyan-950/5 lg:col-span-2 xl:col-span-1">
              <div className="flex items-center gap-3 text-cyan-400">
                <Shield className="w-5 h-5 flex-shrink-0" />
                <span className="font-bold text-xs uppercase tracking-wider font-mono">100% SLA Adherence</span>
              </div>
            </Card3D>
          </motion.div>

          {/* RIGHT: Bio & Key Value Prop (Lg: 6 cols) */}
          <motion.div
            variants={fadeIn("left", 0.2, 0.6)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-20px" }}
            className="lg:col-span-6 flex flex-col gap-6 text-gray-300"
          >
            {/* Value Prop Banner */}
            <div className="p-6 rounded-2xl bg-cyan-950/20 border border-cyan-500/10 backdrop-blur-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-5">
                <Cpu className="w-24 h-24 text-cyan-400" />
              </div>
              <h3 className="text-cyan-400 font-bold uppercase tracking-wider text-sm mb-3 font-mono flex items-center gap-2">
                <CheckCircle className="w-4 h-4" /> The Unified Advantage
              </h3>
              <p className="text-white font-semibold leading-relaxed">
                "You don't just get a developer — you get someone who understands operations, incident management, automation, support workflows, and digital marketing all at once."
              </p>
            </div>

            <p className="leading-relaxed text-gray-400">
              I am a multi-disciplinary technical specialist focused on building optimized, high-fidelity systems. Whether developing robust React/Next.js platforms, constructing automated Lead Capture & AI auto-reply nodes, or leading critical P1/P2 resolution bridges for global enterprises, I align technology with operational goals.
            </p>

            <p className="leading-relaxed text-gray-400">
              With a background leading bridge calls and managing production systems, I design robust architectures that resist outages, scale logically, and capture maximum digital search traffic via advanced SEO.
            </p>

            {/* Portrait & Action Footer */}
            <div className="flex flex-col sm:flex-row gap-6 items-center mt-4 w-full">
              <div className="flex items-center gap-4 mr-auto">
                <div className="relative w-14 h-14 rounded-full overflow-hidden border border-cyan-500/30 glow-cyan flex-shrink-0">
                  <Image
                    src="/profile.jpg"
                    alt="Tushar Karmakar Thumbnail"
                    fill
                    className="object-cover object-top"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-white text-sm">Tushar Karmakar</h4>
                  <p className="text-xs text-gray-500">Tech Ops & Web Specialist</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3.5 items-center w-full sm:w-auto">
                <a
                  href={resumePath}
                  download="Tushar_Karmakar_Resume.pdf"
                  className="premium-button text-xs py-3.5 px-6 clickable flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FileDown className="w-4 h-4 text-cyan-950" />
                  Download Resume
                </a>
                
                <a
                  href={capabilityPath}
                  download="Tushar_Karmakar_Capability.pdf"
                  className="secondary-button text-xs py-3.5 px-6 clickable flex items-center justify-center gap-2 w-full sm:w-auto"
                >
                  <FileText className="w-4 h-4 text-cyan-400" />
                  Check Capability
                </a>
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
