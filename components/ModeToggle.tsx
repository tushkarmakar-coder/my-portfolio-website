"use client";

import { motion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { UserSearch, Briefcase, RotateCcw } from "lucide-react";

export default function ModeToggle() {
  const pathname = usePathname();
  const router = useRouter();
  const [activeMode, setActiveMode] = useState<"recruiter" | "client" | "unified">("unified");

  // Only show the Mode Toggle helper on the main portfolio scroll page
  const shouldShow = pathname === "/portfolio";

  useEffect(() => {
    if (!shouldShow) return;

    // Monitor scrolling to see if they are in recruiter vs client territory
    const handleScroll = () => {
      const scrollPos = window.scrollY + 300;
      
      const servicesEl = document.getElementById("services");
      const enterpriseEl = document.getElementById("enterprise");
      
      if (enterpriseEl && scrollPos >= enterpriseEl.offsetTop) {
        setActiveMode("recruiter");
      } else if (servicesEl && scrollPos >= servicesEl.offsetTop) {
        setActiveMode("client");
      } else {
        setActiveMode("unified");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [shouldShow]);

  if (!shouldShow) return null;

  const handleModeChange = (targetMode: "recruiter" | "client") => {
    setActiveMode(targetMode);
    
    if (targetMode === "recruiter") {
      const el = document.getElementById("enterprise");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      const el = document.getElementById("services");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleReset = () => {
    router.push("/");
  };

  return (
    <motion.div
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-6 inset-x-0 z-[999] flex justify-center pointer-events-none"
    >
      <div className="pointer-events-auto">
        <div className="mode-toggle-pill flex items-center gap-1.5 p-1.5">
          
          {/* Recruiter Section Selector */}
          <button
            onClick={() => handleModeChange("recruiter")}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 clickable ${
              activeMode === "recruiter"
                ? "text-[#0a0f1e]"
                : "text-gray-400 hover:text-cyan-400"
            }`}
          >
            {activeMode === "recruiter" && (
              <motion.div
                layoutId="mode-active-bg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
                style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.4)" }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}
            <UserSearch className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Recruiter Profile</span>
          </button>
 
          {/* Client Section Selector */}
          <button
            onClick={() => handleModeChange("client")}
            className={`relative flex items-center gap-2 px-4 py-2 rounded-full text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider transition-all duration-300 clickable ${
              activeMode === "client"
                ? "text-[#0a0f1e]"
                : "text-gray-400 hover:text-cyan-400"
            }`}
          >
            {activeMode === "client" && (
              <motion.div
                layoutId="mode-active-bg"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 to-cyan-500"
                style={{ boxShadow: "0 0 15px rgba(0, 212, 255, 0.4)" }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
              />
            )}
            <Briefcase className="w-3.5 h-3.5 relative z-10" />
            <span className="relative z-10">Client Services</span>
          </button>

          {/* Vertical Divider */}
          <div className="w-[1px] h-4 bg-white/10 mx-1.5" />

          {/* Reset back to Landing */}
          <motion.button
            whileHover={{ rotate: -180, scale: 1.05 }}
            transition={{ duration: 0.4 }}
            onClick={handleReset}
            className="p-2 rounded-full text-gray-500 hover:text-cyan-400 transition-colors clickable flex items-center justify-center"
            title="Return to Gate"
          >
            <RotateCcw className="w-3.5 h-3.5" />
          </motion.button>
          
        </div>
      </div>
    </motion.div>
  );
}
