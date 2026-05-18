"use client";

import { motion, Variants } from "framer-motion";
import { Video, Globe, TrendingUp, Check } from "lucide-react";

const services = [
  {
    icon: Video,
    title: "AI Video Creation",
    tagline: "Content that stops the scroll",
    points: ["Reels / Ads / Shorts", "High-retention edits", "Viral hooks"],
    glowColor: "rgba(6,182,212,0.12)",
    borderColor: "rgba(6,182,212,0.2)",
    iconBg: "bg-cyan-500/10",
    iconBorder: "border-cyan-500/20",
    iconColor: "text-cyan-400",
  },
  {
    icon: Globe,
    title: "Website Development",
    tagline: "Sites that convert visitors to clients",
    points: ["Business websites", "Landing pages", "UI/UX & Deployment"],
    glowColor: "rgba(59,130,246,0.12)",
    borderColor: "rgba(59,130,246,0.2)",
    iconBg: "bg-blue-500/10",
    iconBorder: "border-blue-500/20",
    iconColor: "text-blue-400",
  },
  {
    icon: TrendingUp,
    title: "Social Media Content",
    tagline: "Growth that compounds over time",
    points: ["Content planning", "Strategic posting", "Growth optimization"],
    glowColor: "rgba(6,182,212,0.10)",
    borderColor: "rgba(6,182,212,0.15)",
    iconBg: "bg-cyan-500/8",
    iconBorder: "border-cyan-400/20",
    iconColor: "text-cyan-300",
  },
  {
    icon: Check,
    title: "Creative Strategy",
    tagline: "Data-driven digital branding",
    points: ["Content curation", "Trend analysis", "Retention frameworks"],
    glowColor: "rgba(6,182,212,0.10)",
    borderColor: "rgba(6,182,212,0.15)",
    iconBg: "bg-cyan-500/8",
    iconBorder: "border-cyan-400/20",
    iconColor: "text-cyan-400",
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.97 },
  show:   { opacity: 1, y: 0,  scale: 1 },
};

const stagger: Variants = {
  hidden: { opacity: 0 },
  show:   { opacity: 1, transition: { staggerChildren: 0.12 } },
};

export default function ClientServices() {
  return (
    <div id="services" className="w-full">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.35 }}
        className="text-center mb-20"
      >
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          What I Do
        </span>
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tight mb-4">
          Services Built for Growth
        </h2>
        <p className="text-gray-500 text-lg max-w-xl mx-auto">
          End-to-end digital services — from concept to conversion
        </p>
      </motion.div>

      {/* Cards Grid */}
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-80px" }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto"
      >
        {(services || []).map((service) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] as [number,number,number,number] }}
              className="group relative flex flex-col p-8 rounded-3xl border transition-all duration-300 overflow-hidden"
              style={{
                background: "rgba(8,8,20,0.5)",
                backdropFilter: "blur(20px)",
                borderColor: service.borderColor,
                boxShadow: "0 8px 32px rgba(0,0,0,0.8)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = `0 20px 50px rgba(0,0,0,0.6), 0 0 30px ${service.glowColor}`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 32px rgba(0,0,0,0.8)";
              }}
            >
              {/* Background glow on hover */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-3xl"
                style={{
                  background: `radial-gradient(circle at top left, ${service.glowColor} 0%, transparent 65%)`,
                }}
              />

              {/* Icon */}
              <div
                className={`relative w-14 h-14 rounded-2xl ${service.iconBg} border ${service.iconBorder} flex items-center justify-center mb-7`}
              >
                <Icon className={`w-7 h-7 ${service.iconColor}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-black text-white mb-1 leading-tight tracking-tight">
                {service.title}
              </h3>
              <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-7">
                {service.tagline}
              </p>

              {/* Divider */}
              <div className="w-full h-px bg-white/5 mb-7" />

              {/* Bullet points */}
              <ul className="flex flex-col gap-3 mt-auto">
                {(service.points || []).map((point) => (
                  <li key={point} className="flex items-center gap-3 text-gray-400 text-sm">
                    <div
                      className={`w-5 h-5 rounded-full ${service.iconBg} border ${service.iconBorder} flex items-center justify-center flex-shrink-0`}
                    >
                      <Check className={`w-3 h-3 ${service.iconColor}`} />
                    </div>
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
}
