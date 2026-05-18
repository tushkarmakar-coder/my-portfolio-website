"use client";

import { motion } from "framer-motion";
import { useMode } from "@/lib/mode-context";
import { Sparkles } from "lucide-react";

export default function SkillsSection() {
  const { mode } = useMode();
  if (!mode) return null;
  const isRecruiter = mode === "recruiter";

  const skillsData = {
    incident: [
      "Incident Management",
      "Major Incident Management",
      "P1/P2 Incident Handling",
      "Problem Management",
      "Root Cause Analysis (RCA)",
      "SLA Management",
      "MTTR Optimization",
      "System Reliability",
      "Production Stability"
    ],
    technical: [
      "SQL",
      "REST API",
      "JSON",
      "Backend Log Analysis",
      "Oracle B2C Cloud"
    ],
    tools: [
      "ServiceNow",
      "JIRA",
      "Cherwell"
    ],
    methodology: [
      "ITIL (Self-Learning)",
      "Agile/Scrum"
    ],
    additional: [
      "Microsoft Excel",
      "PowerPoint"
    ]
  };

  const skills = [
    ...skillsData.incident,
    ...skillsData.technical,
    ...skillsData.tools,
    ...skillsData.methodology,
    ...skillsData.additional
  ];

  const clientSkills = [
    "AI Video Production", "Thumbnail Engineering", "Social Growth Strategy", 
    "Viral Frameworks", "CapCut / Premiere", "Midjourney Artist", 
    "High-CTR Design", "Audience Analytics"
  ];

  return (
    <div id="skills" className="w-full">
      <div className="text-center mb-20">
        <span className={`${isRecruiter ? 'text-cyan-400' : 'text-cyan-400'} text-xs font-black uppercase tracking-[0.4em] mb-4 block`}>
          Technical Matrix
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          {isRecruiter ? "Operational Skills" : "Crafting Solutions"}
        </h2>
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {isRecruiter ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(skills || []).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 text-center flex flex-col items-center justify-center gap-4 group"
              >
                <Sparkles className="w-5 h-5 text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
                <span className="text-white font-bold tracking-wide text-lg text-balance">{skill}</span>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {(clientSkills || []).map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: index * 0.05 }}
                whileHover={{ y: -5 }}
                className="glass-panel p-8 text-center flex flex-col items-center justify-center gap-4 group"
              >
                <Sparkles className="w-5 h-5 text-cyan-400/40 group-hover:text-cyan-400 transition-colors" />
                <span className="text-white font-bold tracking-wide text-lg text-balance">{skill}</span>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
