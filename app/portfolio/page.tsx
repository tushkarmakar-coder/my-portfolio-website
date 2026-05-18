"use client";

import React from "react";
import CustomCursor from "@/components/ui/CustomCursor";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import EnterpriseExp from "@/components/sections/EnterpriseExp";
import BrandNest from "@/components/sections/BrandNest";
import Certifications from "@/components/sections/Certifications";
import Marketing from "@/components/sections/Marketing";
import Contact from "@/components/sections/Contact";

export default function PortfolioPage() {
  return (
    <div className="relative w-full min-h-screen bg-[#0a0f1e] overflow-x-hidden noise-bg">
      {/* Interactive mouse cursor */}
      <CustomCursor />

      {/* Global Background Glow Elements */}
      <div className="absolute top-0 inset-x-0 h-[60vh] bg-gradient-to-b from-cyan-950/20 to-transparent pointer-events-none -z-10" />

      {/* Main Single Page Scroll Sections */}
      <div className="w-full relative z-10">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <EnterpriseExp />
        <BrandNest />
        <Certifications />
        <Marketing />
        <Contact />
      </div>
    </div>
  );
}
