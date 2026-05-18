"use client";

import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { 
  Home, 
  User, 
  Layers, 
  Code, 
  FolderGit2, 
  Briefcase, 
  Sparkles, 
  Award, 
  Target, 
  Mail 
} from "lucide-react";

export default function LeftSidebar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("hero");

  // Only show the sidebar on the main portfolio single page scroll
  const shouldShow = pathname === "/portfolio";

  // Single Page Scroll Sections mapping to anchors
  const navItems = useMemo(
    () => [
      { id: "hero", label: "Home", icon: Home },
      { id: "about", label: "About", icon: User },
      { id: "services", label: "Services", icon: Layers },
      { id: "tech-stack", label: "Tech Stack", icon: Code },
      { id: "projects", label: "Projects", icon: FolderGit2 },
      { id: "enterprise", label: "Enterprise", icon: Briefcase },
      { id: "brandnest", label: "BrandNest", icon: Sparkles },
      { id: "certifications", label: "Certifications", icon: Award },
      { id: "marketing", label: "Marketing", icon: Target },
      { id: "contact", label: "Contact", icon: Mail },
    ],
    []
  );

  // Monitor scrolling to dynamically toggle the active dot indicators
  useEffect(() => {
    if (!shouldShow) return;

    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      // Find which section boundary matches the current scroll position
      const active = navItems.find((item) => {
        const el = document.getElementById(item.id);
        if (!el) return false;
        
        const top = el.offsetTop;
        const height = el.offsetHeight;
        
        return scrollPosition >= top && scrollPosition < top + height;
      });

      if (active) {
        setActiveSection(active.id);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Trigger on mount/load to set initial state
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [navItems, shouldShow]);

  if (!shouldShow) return null;

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {/* Desktop Navigation (Sticky Centered Left Bar) */}
      <motion.nav
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="hidden xl:flex fixed left-6 top-1/2 -translate-y-1/2 z-[100] flex-col gap-1 p-1.5 rounded-[30px] border border-cyan-500/20 shadow-[0_0_30px_rgba(0,212,255,0.05)]"
        style={{
          background: "rgba(10, 15, 30, 0.65)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)"
        }}
      >
        {navItems.map((item) => {
          const isActive = activeSection === item.id;
          const Icon = item.icon;
          return (
            <div key={item.id} className="relative group">
              <button
                onClick={() => scrollTo(item.id)}
                className={`p-1.5 rounded-full transition-all duration-300 flex items-center justify-center relative clickable ${
                  isActive 
                    ? "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 shadow-[0_0_15px_rgba(0,212,255,0.25)] scale-110" 
                    : "text-gray-500 hover:text-cyan-400 hover:bg-white/5 border border-transparent scale-100"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </button>
              
              <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-3 py-1.5 rounded-lg bg-[#0b0f17] border border-cyan-500/15 text-cyan-400 text-[10px] font-mono font-bold tracking-widest uppercase opacity-0 -translate-x-4 pointer-events-none group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.8)] whitespace-nowrap">
                {item.label}
              </div>
            </div>
          );
        })}
      </motion.nav>

      {/* Mobile Navigation (Floating Bottom Scroll bar) */}
      <motion.nav
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="xl:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] flex justify-start items-center px-4 py-2.5 rounded-full border border-cyan-500/25 shadow-[0_15px_40px_-10px_rgba(0,0,0,0.9)] backdrop-blur-xl max-w-[90vw] overflow-x-auto scrollbar-none"
        style={{
          background: "linear-gradient(135deg, rgba(10, 15, 30, 0.95) 0%, rgba(12, 18, 38, 0.9) 100%)",
        }}
      >
        <div className="flex gap-2 items-center">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`p-2 rounded-full transition-all duration-300 flex items-center justify-center relative flex-shrink-0 clickable ${
                  isActive 
                    ? "bg-cyan-500/25 text-cyan-400 border border-cyan-500/40 shadow-[0_0_15px_rgba(0,212,255,0.35)] scale-110" 
                    : "text-slate-400 hover:text-white border border-transparent scale-100"
                }`}
                style={{ width: "32px", height: "32px" }}
                title={item.label}
              >
                <Icon className="w-3.5 h-3.5 flex-shrink-0" />
                {isActive && (
                  <motion.div
                    layoutId="mobile-active-glow"
                    className="absolute inset-0 rounded-full bg-cyan-400/10 blur-sm -z-10"
                  />
                )}
              </button>
            );
          })}
        </div>
      </motion.nav>
    </>
  );
}
