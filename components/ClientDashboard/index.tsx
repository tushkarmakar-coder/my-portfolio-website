"use client";

import { motion } from "framer-motion";
import ClientHero from "./ClientHero";
import AboutSection from "../AboutSection";
import ClientServices from "./ClientServices";
import ClientPricing from "./ClientPricing";
import ClientProjects from "./ClientProjects";
import ClientComingSoon from "./ClientComingSoon";
import ClientContact from "./ClientContact";

function Section({
  children,
  className = "",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <motion.section
      id={id}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
      className={`px-6 md:px-10 max-w-7xl mx-auto ${className}`}
    >
      {children}
    </motion.section>
  );
}

export default function ClientDashboard() {
  return (
    <div className="relative min-h-screen">
      {/* Ambient background glows — client mode */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-cyan-500/4 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/3 blur-[120px] rounded-full" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-500/2 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 flex flex-col">
        {/* ── Hero — starts clearly below toggle across all screen sizes ── */}
        <Section id="home" className="pt-32 pb-20 md:pt-40 md:pb-32 min-h-[90vh] flex items-center">
          <div className="w-full">
            <ClientHero />
          </div>
        </Section>

        {/* ── About / Summary ── */}
        <Section id="about" className="py-32">
          <AboutSection />
        </Section>

        {/* ── Divider ── */}
        <div className="px-6 md:px-10 max-w-7xl mx-auto w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
        </div>

        {/* ── Services ── */}
        <Section id="services" className="py-32">
          <ClientServices />
        </Section>

        {/* ── Divider ── */}
        <div className="px-6 md:px-10 max-w-7xl mx-auto w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* ── Pricing ── */}
        <Section id="pricing" className="py-32">
          <ClientPricing />
        </Section>

        {/* ── Divider ── */}
        <div className="px-6 md:px-10 max-w-7xl mx-auto w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />
        </div>

        {/* ── Projects ── */}
        <Section id="projects" className="py-32">
          <ClientProjects />
        </Section>

        {/* ── Divider ── */}
        <div className="px-6 md:px-10 max-w-7xl mx-auto w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
        </div>
        {/* ── LittiWale Coming Soon — Client Launch Page ── */}
        <Section className="py-32">
          <ClientComingSoon />
        </Section>

        {/* ── Divider ── */}
        <div className="px-6 md:px-10 max-w-7xl mx-auto w-full">
          <div className="h-px bg-gradient-to-r from-transparent via-cyan-500/15 to-transparent" />
        </div>
        {/* ── Contact ── */}
        <Section id="contact" className="py-32">
          <ClientContact />
        </Section>

        {/* ── Footer ── */}
      </div>
    </div>
  );
}
