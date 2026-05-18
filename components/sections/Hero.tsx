"use client";

import React, { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, MessageSquare, Code2, Globe } from "lucide-react";
import HeroCanvas from "@/components/3d/HeroCanvas";
import { portfolioData } from "@/lib/data";

export default function Hero() {
  const { name, titles, tagline } = portfolioData.personal;
  const [currentTitleIndex, setCurrentTitleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  // Scroll tracking and transform rotation for the background tech ring
  const { scrollY } = useScroll();
  const rotate = useTransform(scrollY, [0, 1000], [0, 360]);

  // Typewriter effect logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const activeWord = titles[currentTitleIndex];

    const handleType = () => {
      if (!isDeleting) {
        // Typing letters
        setCurrentText((prev) => activeWord.substring(0, prev.length + 1));
        setTypingSpeed(100);

        if (currentText === activeWord) {
          // Pause at full word
          timer = setTimeout(() => {
            setIsDeleting(true);
          }, 2000);
          return;
        }
      } else {
        // Deleting letters
        setCurrentText((prev) => activeWord.substring(0, prev.length - 1));
        setTypingSpeed(50);

        if (currentText === "") {
          setIsDeleting(false);
          setCurrentTitleIndex((prev) => (prev + 1) % titles.length);
          return;
        }
      }

      timer = setTimeout(handleType, typingSpeed);
    };

    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentTitleIndex, titles, typingSpeed]);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-24"
    >
      {/* 3D Canvas Background */}
      <HeroCanvas />

      {/* Decorative gradient vignette overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent pointer-events-none" />
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0f1e] to-transparent pointer-events-none hidden md:block" />

      <div className="max-width-1280 mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center">
        
        {/* 3D Holographic Spinning Silhouette Portrait - Full Screen Impact */}
        <motion.div
          style={{ rotateY: rotate }}
          className="absolute inset-0 pointer-events-none -z-10 opacity-20 sm:opacity-35 blur-[0.5px] flex items-center justify-center"
        >
          <Image
            src="/profile/entry.png"
            alt="Holographic Silhouette"
            width={750}
            height={920}
            priority
            className="object-contain select-none"
            style={{
              height: "clamp(550px, 95vh, 900px)",
              width: "auto",
              mixBlendMode: "screen"
            }}
          />
        </motion.div>

        {/* Animated availability indicator */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-950/40 border border-cyan-500/20 backdrop-blur-md mb-8 text-cyan-400 text-xs font-mono tracking-wider uppercase"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
          </span>
          Available for Opportunities & Operations
        </motion.div>

        {/* Name Title with Scrolling Background Tech Ring & 3D Hologram */}
        <div className="relative w-full flex items-center justify-center py-4 my-4">

          {/* Scroll-rotating background ring */}
          <motion.div 
            style={{ rotate }}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] md:w-[600px] md:h-[600px] opacity-[0.14] pointer-events-none -z-10 blur-[1px]"
          >
            <svg viewBox="0 0 200 200" className="w-full h-full text-cyan-400 stroke-current fill-none">
              {/* Outer tech circles & tick arrays */}
              <circle cx="100" cy="100" r="95" strokeWidth="0.3" strokeDasharray="3 6" />
              <circle cx="100" cy="100" r="90" strokeWidth="0.8" strokeDasharray="40 10 5 10 5 10" />
              
              {/* Concentric rings with customized dashes */}
              <circle cx="100" cy="100" r="75" strokeWidth="0.5" strokeDasharray="12 24" />
              <circle cx="100" cy="100" r="72" strokeWidth="1.5" strokeDasharray="2 4" />
              <circle cx="100" cy="100" r="68" strokeWidth="0.2" />
              
              {/* Complex inner ring with gears and marks */}
              <circle cx="100" cy="100" r="55" strokeWidth="1.2" strokeDasharray="80 15 5 15" />
              <circle cx="100" cy="100" r="50" strokeWidth="0.4" strokeDasharray="6 6" />
              <circle cx="100" cy="100" r="45" strokeWidth="1" strokeDasharray="1 3" />
              
              {/* Geometric crosshair marks */}
              <line x1="100" y1="5" x2="100" y2="15" strokeWidth="0.8" />
              <line x1="100" y1="185" x2="100" y2="195" strokeWidth="0.8" />
              <line x1="5" y1="100" x2="15" y2="100" strokeWidth="0.8" />
              <line x1="185" y1="100" x2="195" y2="100" strokeWidth="0.8" />

              {/* Glowing circles */}
              <circle cx="100" cy="100" r="30" strokeWidth="0.5" strokeDasharray="40 40" />
            </svg>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-4xl md:text-7xl lg:text-8xl font-black uppercase tracking-tight text-white select-none leading-[0.9] relative z-10"
          >
            {name}
          </motion.h1>
        </div>

        {/* Animated Typewriter Role */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="h-16 flex items-center justify-center mb-8"
        >
          <span className="text-xl md:text-3xl font-mono text-cyan-400 typewriter-cursor bg-cyan-500/5 px-4 py-2 rounded-lg border border-cyan-500/10 font-bold">
            &gt; {currentText}
          </span>
        </motion.div>

        {/* Short Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-gray-400 text-base md:text-lg max-w-xl mb-12 leading-relaxed"
        >
          {tagline}
        </motion.p>

        {/* CTA Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full max-w-md"
        >
          <button
            onClick={() => handleScroll("projects")}
            className="premium-button w-full sm:w-auto clickable"
          >
            See My Work
            <ArrowUpRight className="w-4 h-4" />
          </button>
          
          <button
            onClick={() => handleScroll("contact")}
            className="secondary-button w-full sm:w-auto clickable"
          >
            Let's Talk
            <MessageSquare className="w-4 h-4 text-cyan-400" />
          </button>
        </motion.div>

        {/* Bottom Floating Scroller Element */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-6 flex flex-col items-center gap-2 cursor-pointer opacity-40 hover:opacity-100 transition-opacity"
          onClick={() => handleScroll("about")}
        >
          <span className="text-[10px] font-mono tracking-[0.3em] uppercase text-gray-500">Scroll down</span>
          <div className="w-5 h-8 rounded-full border border-gray-600 flex justify-center p-1.5">
            <motion.div
              animate={{
                y: [0, 8, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="w-1 h-1.5 bg-cyan-400 rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
