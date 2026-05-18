"use client";

import { motion } from "framer-motion";
import { portfolioData } from "@/lib/data";
import { useMode } from "@/lib/mode-context";
import { Video, ImageIcon, Share2, MessageSquare, ArrowUpRight, Sparkles } from "lucide-react";

export default function ServicesSection() {
  const { mode } = useMode();

  if (mode !== "client") return null;

  const getIcon = (title: string) => {
    if (title.includes("Video")) return <Video className="w-8 h-8" />;
    if (title.includes("Thumbnail")) return <ImageIcon className="w-8 h-8" />;
    if (title.includes("Social")) return <Share2 className="w-8 h-8" />;
    return <MessageSquare className="w-8 h-8" />;
  };

  return (
    <div id="services" className="w-full">
      <div className="text-center mb-24">
        <span className="text-cyan-400 text-xs font-black uppercase tracking-[0.4em] mb-4 block">
          Creative Services
        </span>
        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tight">
          Premium AI Solutions
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
        className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
      >
        {(portfolioData.services || []).map((service, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 20, scale: 0.95 },
              show: { opacity: 1, y: 0, scale: 1 }
            }}
            whileHover={{ y: -10 }}
            className="group glass-panel p-12 flex flex-col md:flex-row gap-10 items-start relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-100 transition-all duration-300">
               <ArrowUpRight className="w-8 h-8 text-cyan-400" />
            </div>
            
            <div className="shrink-0 w-20 h-20 rounded-[28px] bg-cyan-400/10 border border-cyan-400/30 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400 group-hover:text-black transition-all duration-300 p-5 shadow-lg group-hover:shadow-cyan-400/20">
               {getIcon(service.title)}
            </div>

            <div className="flex-grow">
               <div className="flex items-center gap-3 mb-4">
                   <Sparkles className="w-4 h-4 text-cyan-400/50" />
                  <span className="text-[10px] font-black text-cyan-400 uppercase tracking-[0.3em]">Excellence Level</span>
               </div>
               <h3 className="text-3xl font-black text-white mb-6 group-hover:text-cyan-400 transition-colors uppercase italic">{service.title}</h3>
               <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-lg">
                  {service.description}
               </p>
               
               <div className="flex items-center gap-10">
                  <div className="flex flex-col">
                     <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest mb-1">Impact</span>
                     <span className="text-2xl font-black text-white group-hover:text-cyan-400 transition-colors italic">{service.price}</span>
                  </div>
                  <motion.button className="px-6 py-2 rounded-xl border border-white/10 text-[10px] font-bold text-gray-400 uppercase tracking-widest hover:text-white hover:border-cyan-400/50 transition-all">
                     View Project Logic
                  </motion.button>
               </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
