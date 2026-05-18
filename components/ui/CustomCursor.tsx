"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isVisible, setIsVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for high performance positioning
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth spring physics for the outer delayed ring
  const springConfig = { damping: 40, stiffness: 400, mass: 0.5 };
  const cursorRingX = useSpring(cursorX, springConfig);
  const cursorRingY = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Hide cursor on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 6);
      cursorY.set(e.clientY - 6);
    };

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isClickable =
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.closest("a") !== null ||
        target.closest("button") !== null ||
        target.closest(".clickable") !== null ||
        target.tagName === "INPUT" ||
        target.tagName === "TEXTAREA" ||
        target.tagName === "SELECT";
      
      setIsHovered(!!isClickable);
    };

    window.addEventListener("mousemove", moveCursor);
    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <>
      {/* 1. Precise Inner Pointer Dot */}
      <motion.div
        className="fixed top-0 left-0 w-3 h-3 bg-cyan-400 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
        }}
      />
      {/* 2. Smooth Fluid Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 rounded-full border border-cyan-400/40 pointer-events-none z-[9998] flex items-center justify-center"
        animate={{
          width: isHovered ? 48 : 28,
          height: isHovered ? 48 : 28,
          x: isHovered ? cursorRingX.get() - 18 : cursorRingX.get() - 8,
          y: isHovered ? cursorRingY.get() - 18 : cursorRingY.get() - 8,
          backgroundColor: isHovered ? "rgba(0, 212, 255, 0.05)" : "rgba(0, 212, 255, 0)",
          borderColor: isHovered ? "rgba(0, 212, 255, 0.8)" : "rgba(0, 212, 255, 0.4)",
        }}
        style={{
          x: cursorRingX,
          y: cursorRingY,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 300,
          mass: 0.2,
        }}
      />
    </>
  );
}
