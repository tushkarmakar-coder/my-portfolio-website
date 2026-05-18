"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface CinematicSectionProps {
  children: ReactNode;
  className?: string;
  duration?: number;
  delay?: number;
  yOffset?: number;
  id?: string;
}

export default function CinematicSection({ 
  children, 
  className = "", 
  duration = 0.35, 
  delay = 0,
  yOffset = 20,
  id
}: CinematicSectionProps) {
  return (
    <motion.div
      id={id}
      initial={{ opacity: 0, y: yOffset, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "-10%" }}
      transition={{ 
        duration, 
        delay, 
        ease: [0.22, 1, 0.36, 1] 
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
