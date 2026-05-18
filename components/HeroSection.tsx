"use client";

import { useMode } from "@/lib/mode-context";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { portfolioData } from "@/lib/data";
import { ArrowDownRight, ExternalLink, Mail } from "lucide-react";
import { useState } from "react";
import ProfileModal from "./ProfileModal";
import ResumeModal from "./RecruiterDashboard/ResumeModal";

const LinkedinSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const InstagramSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterXSvg = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.733-8.835L2.25 2.25h6.844l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

export default function HeroSection() {
  const { mode } = useMode();
  const [reachOpen, setReachOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  if (!mode) return null;
  const { personal } = portfolioData;

  const isRecruiter = mode === "recruiter";

  const contactLinks = [
    { label: "LinkedIn", href: personal.linkedin, icon: <LinkedinSvg className="w-4 h-4" />, color: "text-[#0A66C2]" },
    { label: "Email", href: `mailto:${personal.email}`, icon: <Mail className="w-4 h-4" />, color: "text-cyan-400" },
    { label: "Instagram", href: "https://instagram.com/tush_karmakar", icon: <InstagramSvg className="w-4 h-4" />, color: "text-pink-400" },
    { label: "Twitter / X", href: "https://twitter.com/tushar_karmakar", icon: <TwitterXSvg className="w-4 h-4" />, color: "text-sky-400" },
  ];

  return (
    <>
    <div className="relative w-full flex flex-col items-center text-center">
      {/* Profile Image with Pulsing Ring */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative mb-10 group"
      >
        <div 
          onClick={() => setProfileOpen(true)}
          className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-cyan-500/30 p-2 bg-[#0a0a0f] transition-all duration-300 cursor-pointer hover:border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]"
        >
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/profile/recruiter.png"
              alt={personal.name}
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Primary Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25, duration: 0.4 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-6">
          Hi, I&apos;m {personal.name.split(" ")[0]}
        </h1>
        
        <h2 className="text-xl md:text-3xl font-medium text-gray-400 mb-10 tracking-widest uppercase">
          {isRecruiter ? "Incident Manager | Owning High-Impact Production Systems" : "I create high-impact AI content"}
        </h2>

        <p className="text-gray-500 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed mb-12">
          {isRecruiter 
            ? "Led resolution of 50+ monthly P1/P2 incidents at 95%+ SLA, reduced MTTR by ~25%, and improved system stability through RCA-driven problem management across enterprise SaaS platforms."
            : "Transforming digital presences through generative AI workflows, high-retention video assets, and strategic content curation."}
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-24">
          {isRecruiter ? (
            <motion.button
              onClick={() => setResumeOpen(true)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center gap-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-[0_10px_25px_-5px_rgba(6,182,212,0.3)] hover:shadow-[0_20px_40px_-10px_rgba(6,182,212,0.5)]"
            >
              Download Resume
              <ArrowDownRight className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.a
              href="#contact"
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-4 rounded-full font-bold tracking-wide transition-all duration-300 hover:scale-[1.02] active:scale-95 flex items-center gap-3 premium-button"
            >
              Start a Project
              <ExternalLink className="w-5 h-5" />
            </motion.a>
          )}

          {/* Tap to know me Button */}
          <motion.button
            onClick={() => setProfileOpen(true)}
            whileHover={{ y: -5, scale: 1.02 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-wide text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            Tap to know me
          </motion.button>

          {/* Reach Me Dropdown */}
          <div className="relative">
            <motion.button
              onClick={() => setReachOpen((v) => !v)}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className={`secondary-button ${isRecruiter ? 'border-cyan-500/30 hover:border-cyan-400/60' : ''}`}
            >
              Reach Me
            </motion.button>

            <AnimatePresence>
              {reachOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.95 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 z-50"
                >
                  <div className="glass-panel p-3 flex flex-col gap-1 min-w-[200px] border-white/10 shadow-2xl">
                    {(contactLinks || []).map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setReachOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-colors text-sm font-bold text-gray-300 hover:text-white group`}
                      >
                        <span className={`${link.color} transition-colors`}>{link.icon}</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </motion.div>
    </div>

    {/* Profile Details Modal */}
    <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </>
  );
}
