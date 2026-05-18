"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Mail, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";
import ProfileModal from "../ProfileModal";

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

const contactLinks = [
  {
    label: "Email",
    href: "mailto:tushkarmakar@gmail.com",
    icon: <Mail className="w-4 h-4" />,
    color: "text-cyan-400",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/tush_karmakar",
    icon: <InstagramSvg className="w-4 h-4" />,
    color: "text-pink-400",
  },
  {
    label: "Twitter / X",
    href: "https://twitter.com/tushar_karmakar",
    icon: <TwitterXSvg className="w-4 h-4" />,
    color: "text-sky-400",
  },
];

export default function ClientHero() {
  const [reachOpen, setReachOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  return (
    <div className="relative w-full flex flex-col items-center text-center">
      {/* Ambient glow behind avatar */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 h-72 bg-cyan-500/8 blur-[80px] rounded-full pointer-events-none -z-10" />

      {/* Profile Image */}
      <motion.div
        initial={{ scale: 0.85, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
        className="relative group mb-10 cursor-pointer"
        onClick={() => setProfileOpen(true)}
      >
        <div className="relative w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border-2 border-cyan-500/30 p-2 bg-[#0a0a0f] transition-all duration-300 hover:border-cyan-500/60 shadow-[0_0_30px_rgba(6,182,212,0.15)] group-hover:shadow-[0_0_40px_rgba(6,182,212,0.25)]">
          <div className="relative w-full h-full rounded-full overflow-hidden">
            <Image
              src="/profile/client.png"
              alt="Tushar Karmakar"
              fill
              className="object-cover object-center transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>
        </div>
      </motion.div>

      {/* Badge pill */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.35 }}
        className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6"
      >
        <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
        <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">
          Available for Projects
        </span>
      </motion.div>

      {/* Headline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15, duration: 0.35 }}
        className="max-w-4xl"
      >
        <h1 className="text-5xl md:text-8xl font-black tracking-tight text-white mb-5 leading-none">
          Hi, I&apos;m{" "}
          <span
            className="inline-block"
            style={{
              background: "linear-gradient(135deg, #00f3ff 0%, #06b6d4 50%, #3b82f6 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Tushar
          </span>
        </h1>

        <h2 className="text-lg md:text-2xl font-semibold text-gray-300 mb-5 tracking-wide leading-relaxed">
          I help businesses grow with{" "}
          <span className="text-cyan-400 font-bold">Creative AI Solutions</span>
        </h2>

        <p className="text-gray-500 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12">
          Need high-performing videos, websites, or social media growth?
          <br className="hidden md:block" />
          I build systems and content that{" "}
          <span className="text-gray-300 font-semibold">actually convert.</span>
        </p>

        {/* CTA Row */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-5">
          {/* Primary CTA */}
          <motion.a
            href="#contact"
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 px-9 py-4 rounded-full font-black text-sm tracking-wide text-black transition-all duration-300"
            style={{
              background: "linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)",
              boxShadow: "0 10px 30px -5px rgba(6,182,212,0.4)",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.boxShadow =
                "0 20px 45px -8px rgba(6,182,212,0.55), 0 0 30px rgba(0,243,255,0.2)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.boxShadow = "0 10px 30px -5px rgba(6,182,212,0.4)")
            }
          >
            Start Your Project
            <ArrowRight className="w-4 h-4" />
          </motion.a>

          {/* Secondary CTA */}
          <motion.a
            href="#contact"
            whileHover={{ y: -4 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 px-9 py-4 rounded-full font-semibold text-sm tracking-wide text-white border border-cyan-500/25 bg-cyan-500/5 hover:bg-cyan-500/10 hover:border-cyan-400/40 transition-all duration-300 backdrop-blur-sm"
          >
            Get Your Custom Quote
          </motion.a>

          {/* Tap to know me Button */}
          <motion.button
            onClick={() => setProfileOpen(true)}
            whileHover={{ y: -4, scale: 1.02 }}
            whileTap={{ scale: 0.96 }}
            className="flex items-center gap-3 px-8 py-4 rounded-full font-bold text-sm tracking-wide text-cyan-400 bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 hover:border-cyan-500/50 shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 backdrop-blur-sm"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            Tap to know me
          </motion.button>

          {/* Reach Me */}
          <div className="relative">
            <motion.button
              onClick={() => setReachOpen((v) => !v)}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.96 }}
              className="flex items-center gap-2 px-7 py-4 rounded-full font-semibold text-sm tracking-wide text-gray-400 border border-white/8 bg-white/[0.02] hover:bg-white/[0.05] hover:text-white hover:border-white/15 transition-all duration-300 backdrop-blur-sm"
            >
              Reach Me
              <ChevronRight
                className={`w-4 h-4 transition-transform duration-300 ${reachOpen ? "rotate-90" : ""}`}
              />
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
                  <div
                    className="p-2 flex flex-col gap-0.5 min-w-[200px] rounded-2xl border border-white/8 shadow-2xl"
                    style={{ background: "rgba(8,8,20,0.85)", backdropFilter: "blur(24px)" }}
                  >
                    {(contactLinks || []).map((link) => (
                      <a
                        key={link.label}
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() => setReachOpen(false)}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl hover:bg-white/[0.05] transition-colors text-sm font-bold text-gray-300 hover:text-white"
                      >
                        <span className={link.color}>{link.icon}</span>
                        {link.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Helper text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.25, duration: 0.35 }}
          className="text-gray-600 text-sm tracking-wide"
        >
          No commitment — quick response guaranteed
        </motion.p>
      </motion.div>

      {/* Profile Details Modal */}
      <ProfileModal isOpen={profileOpen} onClose={() => setProfileOpen(false)} />
    </div>
  );
}
