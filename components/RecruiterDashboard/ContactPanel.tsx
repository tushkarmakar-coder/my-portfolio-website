"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, ArrowRight } from "lucide-react";
import Image from "next/image";
import ResumeModal from "./ResumeModal";

const LinkedinIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const WhatsAppIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const InstagramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const TwitterXIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.741l7.733-8.835L2.25 2.25h6.844l4.265 5.638L18.244 2.25zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  {
    id: "linkedin",
    label: "LinkedIn",
    href: "https://linkedin.com/in/tushar-karmakar-255589102",
    icon: <LinkedinIcon className="w-5 h-5" />,
    color: "text-[#0A66C2]",
    bg: "hover:bg-[#0A66C2]/10 hover:border-[#0A66C2]/30",
    border: "border-white/5",
  },
  {
    id: "email",
    label: "Email",
    href: "mailto:tushkarmakar@gmail.com",
    icon: <Mail className="w-5 h-5" />,
    color: "text-cyan-400",
    bg: "hover:bg-cyan-500/10 hover:border-cyan-500/30",
    border: "border-white/5",
  },
  {
    id: "instagram",
    label: "@tush_karmakar",
    href: "https://instagram.com/tush_karmakar",
    icon: <InstagramIcon className="w-5 h-5" />,
    color: "text-pink-400",
    bg: "hover:bg-pink-500/10 hover:border-pink-500/30",
    border: "border-white/5",
  },
  {
    id: "twitter",
    label: "@tushar_karmakar",
    href: "https://twitter.com/tushar_karmakar",
    icon: <TwitterXIcon className="w-5 h-5" />,
    color: "text-sky-400",
    bg: "hover:bg-sky-500/10 hover:border-sky-500/30",
    border: "border-white/5",
  },
  {
    id: "whatsapp",
    label: "+91 70085 48288",
    href: "https://wa.me/917008548288",
    icon: <WhatsAppIcon className="w-5 h-5" />,
    color: "text-green-400",
    bg: "hover:bg-green-500/10 hover:border-green-500/30",
    border: "border-white/5",
  },
];

export default function ContactPanel() {
  const [resumeOpen, setResumeOpen] = useState(false);
  const linkedinUrl = "https://linkedin.com/in/tushar-karmakar-255589102";
  const email = "tushkarmakar@gmail.com";

  const handleProfileClick = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
      className="glass-panel w-full max-w-[520px] overflow-hidden border-cyan-500/15 shadow-[0_0_60px_rgba(6,182,212,0.08)]"
    >
      {/* Top glow stripe */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/40 to-transparent" />

      <div className="p-10 space-y-10">
        {/* Identity Header */}
        <div className="flex items-center gap-5">
          <div className="flex flex-col items-center gap-2">
            <button
              type="button"
              onClick={handleProfileClick}
              className="relative w-16 h-16 rounded-2xl overflow-hidden border border-cyan-500/25 shrink-0 group transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_18px_rgba(6,182,212,0.18)] cursor-pointer"
            >
              <Image
                src="/profile/recruiter.png"
                alt="Tushar Karmakar"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              <div className="absolute inset-0 flex items-center justify-center text-[10px] uppercase tracking-[0.35em] text-cyan-100 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                About Me
              </div>
            </button>
            <span className="text-[10px] text-cyan-400/80 uppercase tracking-[0.25em] animate-pulse">
              click to know me
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-xl font-black text-white leading-tight">Tushar Karmakar</h4>
            <span className="text-[10px] font-bold text-cyan-400/70 uppercase tracking-[0.35em]">
              Incident Manager
            </span>
            <div className="flex flex-col gap-1 mt-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-widest leading-relaxed">
                  Open to Incident Manager, Major Incident Manager, and reliability-focused roles
                </span>
              </div>
              <p className="text-xs text-gray-400 mt-2 italic leading-relaxed">
                If you&apos;re building high-availability systems and need someone who can own incidents, reduce MTTR, and improve system stability — let’s connect.
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5" />

        {/* Primary CTA */}
        <div className="space-y-4">
          <motion.a
            href={linkedinUrl}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-black uppercase tracking-[0.35em] text-[11px] flex items-center justify-center gap-3 shadow-[0_10px_40px_-8px_rgba(6,182,212,0.4)] hover:shadow-[0_20px_50px_-8px_rgba(6,182,212,0.6)] transition-all"
          >
            Hire Me <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.button
            type="button"
            onClick={() => setResumeOpen(true)}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl border border-white/10 bg-white/5 text-gray-300 font-black uppercase tracking-[0.35em] text-[11px] flex items-center justify-center gap-3 hover:bg-cyan-500/10 hover:border-cyan-400/30 transition-all"
          >
            <ArrowRight className="w-4 h-4 text-cyan-400" /> Download Resume
          </motion.button>

          <motion.a
            href={`mailto:${email}`}
            whileHover={{ scale: 1.02, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="w-full py-5 rounded-2xl border border-white/10 text-gray-300 font-black uppercase tracking-[0.35em] text-[11px] flex items-center justify-center gap-3 hover:bg-white/[0.04] hover:border-white/20 transition-all"
          >
            <Mail className="w-4 h-4 text-cyan-400" /> Send Email
          </motion.a>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-white/5" />

        {/* Social Links Row */}
        <div className="space-y-3">
          <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em] block">
            Connect Directly
          </span>
          <div className="grid grid-cols-1 gap-2">
            {(socialLinks || []).map((link) => (
              <motion.a
                key={link.id}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ x: 4 }}
                className={`flex items-center gap-4 px-4 py-3 rounded-xl border ${link.border} ${link.bg} transition-all duration-200 group`}
              >
                <span className={`${link.color} shrink-0`}>{link.icon}</span>
                <span className="text-sm font-bold text-gray-400 group-hover:text-white transition-colors">
                  {link.label}
                </span>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom glow stripe */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      <ResumeModal isOpen={resumeOpen} onClose={() => setResumeOpen(false)} />
    </motion.div>
  );
}
