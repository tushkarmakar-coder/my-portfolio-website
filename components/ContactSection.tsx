"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { Mail, Send, Loader2, MessageSquare, ArrowUpRight, Sparkles } from "lucide-react";
import { useState } from "react";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

export default function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus("idle");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setStatus("success");
        (e.target as HTMLFormElement).reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="w-full">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.35 }}
        className="text-center mb-24"
      >
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Get In Touch
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          Let&apos;s Work Together
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto items-stretch">
        {/* Left: Identity Cards */}
        <div className="w-full lg:w-2/5 flex flex-col gap-6">
          {/* LinkedIn Card - NEW PREMIUM DESIGN */}
          <motion.a
            href={portfolioData.personal.linkedin}
            target="_blank"
            whileHover={{ y: -8, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group glass-panel p-10 flex flex-col gap-8 relative overflow-hidden cursor-pointer border-cyan-400/10 hover:border-cyan-400/40"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
               <ArrowUpRight className="w-8 h-8 text-cyan-400" />
            </div>
            
            <div className="w-16 h-16 rounded-2xl bg-[#0077b5]/10 border border-[#0077b5]/30 flex items-center justify-center text-[#0077b5] group-hover:bg-[#0077b5] group-hover:text-white transition-all duration-300 p-4">
               <LinkedinIcon className="w-full h-full" />
            </div>

            <div>
               <h3 className="text-4xl font-black text-white mb-2 tracking-tight group-hover:text-white transition-colors">
                  Tushar Karmakar
               </h3>
               <p className="text-gray-500 font-bold uppercase tracking-widest text-sm">
                  LinkedIn Profile
               </p>
            </div>
            
            <div className="pt-8 border-t border-white/5 flex items-center gap-2 text-[10px] font-black text-gray-600 uppercase tracking-[0.2em] group-hover:text-gray-400 transition-colors">
               linkedin.com/in/tushar-karmakar-255589102
            </div>
          </motion.a>

          {/* Email Identity Card */}
          <motion.a
            href={`mailto:${portfolioData.personal.email}`}
            whileHover={{ y: -8, scale: 1.02 }}
            className="group glass-panel p-10 flex items-center gap-8 border-white/5 hover:border-cyan-400/30"
          >
            <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-gray-500 group-hover:text-cyan-400 group-hover:border-cyan-400/30 transition-all duration-300">
               <Mail className="w-6 h-6" />
            </div>
            <div>
               <span className="block text-[10px] font-black text-gray-600 uppercase tracking-widest mb-1">Direct Mail</span>
               <span className="text-white font-bold text-lg group-hover:text-cyan-400 transition-colors">{portfolioData.personal.email}</span>
            </div>
          </motion.a>

          {/* Quick Context Card */}
          <div className="glass-panel p-10 bg-cyan-400/5 border-cyan-400/10 flex flex-col gap-6 flex-grow">
             <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                <span className="text-xs font-black text-cyan-400 uppercase tracking-[0.3em]">Communication</span>
             </div>
             <p className="text-gray-400 text-lg leading-relaxed font-light">
                Available for high-stakes support consultations and creative AI collaborations. Expect a strategic response within 24 hours.
             </p>
          </div>
        </div>

        {/* Right: Message Engine */}
        <div className="w-full lg:w-3/5">
          <form onSubmit={handleSubmit} className="glass-panel p-10 md:p-14 border-white/5 flex flex-col gap-10 h-full">
            <div className="flex flex-col gap-4">
               <div className="flex items-center gap-3 text-cyan-400">
                  <MessageSquare className="w-5 h-5" />
                  <span className="text-xs font-black uppercase tracking-[0.3em]">Message Engine</span>
               </div>
               <h3 className="text-3xl font-black text-white">Project Inquiry</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1">Identity</label>
                <input
                  type="text"
                  name="name"
                  required
                  className="w-full bg-white/[0.02] border-b border-white/10 p-0 pb-4 focus:border-cyan-400 focus:outline-none transition-all text-xl text-white placeholder-gray-800"
                  placeholder="Your Name"
                />
              </div>
              <div className="space-y-4">
                <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1">Reachability</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="w-full bg-white/[0.02] border-b border-white/10 p-0 pb-4 focus:border-cyan-400 focus:outline-none transition-all text-xl text-white placeholder-gray-800"
                  placeholder="Email Address"
                />
              </div>
            </div>

            <div className="space-y-4 flex-grow">
               <label className="text-[10px] font-black text-gray-600 uppercase tracking-widest ml-1">Objective</label>
               <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full bg-white/[0.02] border-b border-white/10 p-0 pb-4 focus:border-cyan-400 focus:outline-none transition-all text-xl text-white placeholder-gray-800 resize-none"
                  placeholder="How can we collaborate?"
               />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="premium-button w-full flex items-center justify-center gap-4 group"
            >
              {isSubmitting ? (
                <Loader2 className="w-6 h-6 animate-spin" />
              ) : (
                <>
                  <span className="text-lg">Transmit Inquiry</span>
                  <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </motion.button>

            {status === "success" && (
               <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-3 text-green-400 font-bold bg-green-500/10 p-6 rounded-2xl border border-green-500/20">
                  <Sparkles className="w-5 h-5" />
                  <span>Transmission Successful. Stand by for response.</span>
               </motion.div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
