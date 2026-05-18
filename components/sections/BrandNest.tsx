"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Flame, Sparkles, Megaphone, CheckCircle2, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/lib/data";
import Card3D from "@/components/ui/Card3D";
import { fadeIn, staggerContainer } from "@/lib/animations";

export default function BrandNest() {
  const { tagline, description, services } = portfolioData.brandNest;

  return (
    <section id="brandnest" className="scene-container relative py-28 border-t border-white/5 bg-[#0a0f1e]/40">
      {/* Background radial highlight */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-purple-950/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-[1280px] mx-auto px-6 w-full relative z-10">
        
        {/* Section Heading */}
        <div className="flex flex-col mb-16">
          <span className="text-xs font-mono tracking-[0.4em] uppercase text-cyan-400 mb-2">06 / CO-FOUNDER</span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight uppercase">
            BrandNest <span className="text-white/40 font-light">-</span> <span className="cyan-text-gradient">India&apos;s First AI Powered Premium Digital &amp; Marketing Agency</span>
          </h2>
          <div className="w-12 h-1 bg-cyan-500 mt-4 rounded-full" />
        </div>

        {/* Agency Spotlight Card */}
        <motion.div
          variants={fadeIn("up", 0.15, 0.7)}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="w-full"
        >
          <Card3D
            maxTilt={4}
            glowColor="rgba(245, 166, 35, 0.15)"
            className="p-8 md:p-12 border border-amber-500/10 bg-gradient-to-br from-[#0e122a] via-[#0c1024] to-[#141225] relative overflow-hidden"
          >
            {/* Ambient Background Grid */}
            <div 
              className="absolute inset-0 opacity-[0.02] pointer-events-none"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(245,166,35,1) 1px, transparent 1px), linear-gradient(90deg, rgba(245,166,35,1) 1px, transparent 1px)",
                backgroundSize: "30px 30px",
              }}
            />

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
              
              {/* Left Column: Agency pitch & info */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                
                {/* Agency Badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-mono tracking-wider w-fit">
                  <Flame className="w-4 h-4 text-amber-500 animate-pulse" />
                  CO-FOUNDED VENTURE
                </div>

                <h3 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                  {tagline}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {description}
                </p>

                <div className="flex flex-wrap gap-4 mt-4">
                  <a
                    href="https://brandnestagency.vercel.app"
                    target="_blank"
                    rel="noreferrer"
                    className="premium-button text-xs py-3.5 px-7 border border-cyan-500/20 shadow-[0_0_20px_rgba(0,212,255,0.15)] flex items-center gap-2 clickable"
                    style={{
                      background: "linear-gradient(135deg, #f5a623 0%, #d97706 100%)",
                      color: "#0a0f1e"
                    }}
                  >
                    Visit BrandNest
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>

              {/* Right Column: Service Matrix */}
              <div className="lg:col-span-6">
                <div className="p-6 rounded-2xl bg-black/45 border border-white/5 backdrop-blur-md">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-gray-500 mb-6 flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-amber-400" />
                    Full-Suite Agency Services
                  </h4>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {services.map((service, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-center gap-3 text-xs text-gray-300 font-semibold group/item hover:text-white transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0" />
                        <span>{service}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </Card3D>
        </motion.div>
      </div>
    </section>
  );
}
