"use client";

import React from "react";
import { usePathname } from "next/navigation";
import { ArrowUp, ShieldCheck } from "lucide-react";
import { portfolioData } from "@/lib/data";

export default function Footer() {
  const pathname = usePathname();
  const { name, tagline } = portfolioData.personal;

  // Do not show footer on the dramatic entry page
  if (pathname === "/" || pathname === "/entry") return null;

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="w-full py-16 mt-auto border-t border-white/5 bg-[#070b16] backdrop-blur-md relative z-10">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
        
        {/* Brand details */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-2 max-w-sm">
          <div className="flex items-center gap-2">
            <span className="font-display font-black text-white uppercase tracking-tight text-lg">
              {name}
            </span>
            <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            {tagline}
          </p>
        </div>

        {/* Quick Nav Links */}
        <div className="flex flex-wrap justify-center gap-6 text-xs font-mono font-bold tracking-wider uppercase text-gray-500">
          <button onClick={() => handleScroll("hero")} className="hover:text-cyan-400 transition-colors clickable">Home</button>
          <button onClick={() => handleScroll("about")} className="hover:text-cyan-400 transition-colors clickable">About</button>
          <button onClick={() => handleScroll("services")} className="hover:text-cyan-400 transition-colors clickable">Services</button>
          <button onClick={() => handleScroll("projects")} className="hover:text-cyan-400 transition-colors clickable">Work</button>
          <button onClick={() => handleScroll("contact")} className="hover:text-cyan-400 transition-colors clickable">Contact</button>
        </div>

        {/* Action / Copyright */}
        <div className="flex flex-col items-center md:items-end gap-3 text-center md:text-right">
          <button
            onClick={() => handleScroll("hero")}
            className="p-3 bg-cyan-950/20 border border-cyan-500/10 rounded-xl text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-950/40 transition-all duration-300 clickable"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
          
          <p className="text-gray-500 text-[10px] font-mono uppercase tracking-[0.25em]">
            © {new Date().getFullYear()} {name}. All Rights Reserved.
          </p>
        </div>

      </div>
    </footer>
  );
}
