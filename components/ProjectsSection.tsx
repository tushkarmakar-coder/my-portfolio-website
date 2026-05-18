"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { useMode } from "@/lib/mode-context";
import { ExternalLink, Folder, MoveRight } from "lucide-react";

export default function ProjectsSection() {
  const { mode } = useMode();
  if (!mode) return null;
  const isRecruiter = mode === "recruiter";

  const filteredProjects = (portfolioData?.projects || []).filter(project => {
    if (isRecruiter) return project.category === "IT Support" || project.category === "Web App";
    return project.category === "Content Creation" || project.category === "Web App";
  });

  return (
    <div id="projects" className="w-full">
      <div className="text-center mb-24">
        <span className={`${isRecruiter ? 'text-cyan-400' : 'text-cyan-400'} text-xs font-black uppercase tracking-[0.4em] mb-4 block`}>
          Portfolio
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          Selected Projects
        </h2>
      </div>

      <motion.div 
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-100px" }}
        variants={{
          hidden: { opacity: 0 },
          show: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
      >
        {(filteredProjects || []).map((project) => (
          <motion.div
            key={project.id}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ y: -10 }}
            className={`group glass-panel overflow-hidden border-white/5 cursor-pointer flex flex-col h-full ${isRecruiter ? 'hover:border-cyan-500/30' : 'hover:border-cyan-500/30'}`}
          >
            {/* Visual Preview */}
            <div className={`relative h-64 w-full overflow-hidden bg-gradient-to-br ${project.gradient} transition-transform duration-300 group-hover:scale-105`}>
              <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-brand-dark/10 transition-all duration-300" />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 scale-90 group-hover:scale-100 p-8">
                 <div className="w-full h-full border border-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
                    <ExternalLink className="w-8 h-8 text-white" />
                 </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-10 flex-grow flex flex-col">
              <div className="flex items-center gap-3 mb-6">
                <div className={`p-2 rounded-lg bg-white/5 border border-white/10 ${isRecruiter ? 'group-hover:border-cyan-500/30' : 'group-hover:border-cyan-500/30'} transition-colors`}>
                  <Folder className={`w-4 h-4 ${isRecruiter ? 'text-cyan-400' : 'text-cyan-400'}`} />
                </div>
                <span className={`text-[10px] font-black ${isRecruiter ? 'text-cyan-400' : 'text-cyan-400'} uppercase tracking-[0.3em]`}>
                  {project.category}
                </span>
              </div>
              
              <h3 className={`text-3xl font-bold text-white ${isRecruiter ? 'group-hover:text-cyan-400' : 'group-hover:text-cyan-400'} transition-colors leading-tight mb-8`}>
                {project.title}
              </h3>
              
              <div className={`mt-auto pt-8 border-t border-white/5 flex items-center justify-between ${isRecruiter ? 'group-hover:border-cyan-500/20' : 'group-hover:border-cyan-500/20'} transition-colors`}>
                <span className="text-xs font-bold text-gray-500 uppercase tracking-widest group-hover:text-gray-300 transition-colors">
                  Explore Project
                </span>
                <MoveRight className={`w-5 h-5 ${isRecruiter ? 'text-cyan-400' : 'text-cyan-400'} -translate-x-2 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-300`} />
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
