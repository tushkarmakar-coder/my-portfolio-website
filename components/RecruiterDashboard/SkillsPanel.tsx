"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Code, Settings } from "lucide-react";

interface SkillsPanelProps {
  selectedCategory: string;
  selectedItem: string;
  onSelect: (category: string, item: string) => void;
}

import { skillMatrixData } from "@/lib/skillMatrixData";

export default function SkillsPanel({ selectedCategory, selectedItem, onSelect }: SkillsPanelProps) {
  const getIcon = (category: string) => {
    if (category === "Incident Management & ITSM") return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    if (category === "Monitoring & Observability") return <Settings className="w-5 h-5 text-blue-400" />;
    if (category === "Cloud & Infrastructure") return <Settings className="w-5 h-5 text-cyan-400" />;
    if (category === "Development & Programming") return <Code className="w-5 h-5 text-blue-400" />;
    if (category === "Methodologies") return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
    return <Settings className="w-5 h-5 text-cyan-400" />;
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass-panel p-8 w-full max-w-[400px] space-y-8 border-cyan-500/10 shadow-[0_0_20px_rgba(6,182,212,0.05)]"
    >
      <div className="flex items-center gap-3">
        <div className="w-2 h-2 rounded-full bg-cyan-500 animate-pulse" />
        <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-gray-500">Skill Matrix</h3>
      </div>

      <div className="space-y-8">
        {Object.entries(skillMatrixData).map(([categoryName, data], groupIdx) => (
          <div key={groupIdx} className="space-y-4">
            <div className="flex items-center gap-3">
              {getIcon(categoryName)}
              <h4 className={`text-xs font-bold uppercase tracking-widest ${categoryName === selectedCategory ? 'text-cyan-400' : 'text-white'}`}>
                {categoryName}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.keys(data || {}).map((item, itemIdx) => (
                <motion.button
                  key={itemIdx}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onSelect(categoryName, item)}
                  className={`px-4 py-2 rounded-xl text-[10px] font-black uppercase tracking-widest transition-all duration-300 border ${
                    selectedItem === item
                      ? "bg-cyan-500/20 border-cyan-400 text-cyan-400 shadow-[0_0_15px_rgba(6,182,212,0.3)]"
                      : "bg-white/[0.03] border-white/5 text-gray-500 hover:text-white hover:border-white/20"
                  }`}
                >
                  [{item}]
                </motion.button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
