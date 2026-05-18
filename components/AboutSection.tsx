"use client";

import { motion } from "framer-motion";
import { useMode } from "@/lib/mode-context";
import Image from "next/image";
import { Sparkles, Target, Zap } from "lucide-react";

export default function AboutSection() {
  const { mode } = useMode();
  if (!mode) return null;
  const isRecruiter = mode === "recruiter";

  const clientSummary = "AI Content & Web Solutions Creator leveraging generative workflows to deliver high-retention digital assets. Specializing in AI video production, social media growth, and responsive web development for modern brands and creators.";

  const interests = isRecruiter 
    ? [
        "Incident Ownership",
        "System Reliability",
        "SLA & MTTR Optimization",
        "Root Cause Analysis (RCA)",
        "Production Stability",
        "API & Log Debugging"
      ]
    : ["AI Video Creation", "Social Media Growth", "Website Development", "Creative Strategy"];

  const profileImage = isRecruiter ? "/profile/recruiter.png" : "/profile/client.png";

  return (
    <div className="w-full">
      <div className="text-center mb-24">
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Behind the Persona
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          Vision & Precision
        </h2>
      </div>

      <div className="flex flex-col lg:flex-row gap-20 items-stretch max-w-6xl mx-auto px-6">
        {/* Profile Card */}
        <div className="w-full lg:w-2/5 aspect-[4/5] rounded-[48px] overflow-hidden border border-cyan-500/10 relative group shadow-2xl hover:border-cyan-500/30 transition-all duration-300">
          <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent z-10 opacity-80" />
          <Image 
            src={profileImage} 
            alt="Tushar Karmakar" 
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute bottom-10 left-10 z-20">
            <div className="flex items-center gap-2 mb-2 text-cyan-400">
               <Sparkles size={16} />
               <span className="text-xs font-black uppercase tracking-[0.2em]">{isRecruiter ? "Incident Manager" : "AI Content Strategist"}</span>
            </div>
            <h4 className="text-white font-black text-3xl mb-1 tracking-tight">Tushar Karmakar</h4>
          </div>
        </div>

        {/* Content */}
        <div className="w-full lg:w-3/5 flex flex-col justify-center">
          <div className="flex items-center gap-4 text-cyan-400 mb-8">
             <Target className="w-6 h-6" />
             <span className="text-[10px] font-black uppercase tracking-[0.4em]">Strategic Mission</span>
          </div>
          
          <div className="text-gray-400 text-xl leading-relaxed mb-12 font-light">
            {isRecruiter ? (
              <div className="space-y-6">
                <p className="italic">&quot;Production systems don’t fail quietly — and neither do I.&quot;</p>
                <p>Incident Manager with 6+ years of experience owning high-severity production environments for Oracle B2C Cloud. Focused on reducing system risk, improving reliability, and preventing recurring failures at scale.</p>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold">•</span> <span>Owned 50+ P1/P2 incidents/month @ 95%+ SLA</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold">•</span> <span>Reduced MTTR by ~25% & recurring incidents by 20–30%</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold">•</span> <span>Led P1 bridge calls across cross-functional teams</span></li>
                  <li className="flex items-start gap-2"><span className="text-cyan-400 font-bold">•</span> <span>Restored outages within ~2 hours with 4+ years SPOC ownership</span></li>
                </ul>
              </div>
            ) : (
              <p className="text-2xl md:text-3xl italic">&quot;{clientSummary}&quot;</p>
            )}
          </div>

          <motion.div 
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: { opacity: 0 },
              show: { opacity: 1, transition: { staggerChildren: 0.1 } }
            }}
            className="space-y-10"
          >
            <div className="flex items-center gap-4 text-gray-500">
               <Zap className="w-4 h-4" />
               <span className="text-xs font-black uppercase tracking-widest">Focus Areas</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {(interests || []).map((interest, idx) => (
                <motion.div 
                  key={idx}
                  variants={{
                    hidden: { opacity: 0, x: -10 },
                    show: { opacity: 1, x: 0 }
                  }}
                  whileHover={{ x: 10, color: "#22d3ee" }}
                  className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 text-gray-400 text-lg font-bold transition-all duration-300 flex items-center gap-4 group"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-500/40 group-hover:bg-cyan-400 transition-colors" />
                  {interest}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
