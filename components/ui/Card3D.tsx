"use client";

import React, { useState, useRef, MouseEvent } from "react";

interface Card3DProps {
  children: React.ReactNode;
  className?: string;
  maxTilt?: number; // Maximum rotation in degrees
  perspective?: number; // 3D depth perspective in pixels
  glowColor?: string; // Tailwind color class or hex for the mouse light
}

export default function Card3D({
  children,
  className = "",
  maxTilt = 12,
  perspective = 1000,
  glowColor = "rgba(0, 212, 255, 0.15)",
}: Card3DProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [glowPos, setGlowPos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const card = cardRef.current;
    const rect = card.getBoundingClientRect();

    // Mouse coordinates relative to the card container
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Center coordinates
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate normalized position between -1 and 1
    const normalizedX = (x - centerX) / centerX;
    const normalizedY = (y - centerY) / centerY;

    // Calculate rotation angles
    // Moving mouse to the right should rotate on Y-axis (clockwise tilt)
    // Moving mouse down should tilt on X-axis (downwards)
    setRotateX(-normalizedY * maxTilt);
    setRotateY(normalizedX * maxTilt);

    // Track glow light position
    setGlowPos({ x, y });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className={`relative rounded-2xl transition-all duration-300 ease-out border border-white/10 bg-[#0c1226]/60 backdrop-blur-xl ${className}`}
      style={{
        transform: isHovered
          ? `perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`
          : `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
        transition: isHovered ? "transform 0.1s ease-out, border-color 0.3s" : "transform 0.5s ease-out, border-color 0.3s",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Interactive mouse reflection glow */}
      {isHovered && (
        <div
          className="pointer-events-none absolute -inset-[1px] rounded-2xl opacity-100 transition-opacity duration-500 z-10"
          style={{
            background: `radial-gradient(400px circle at ${glowPos.x}px ${glowPos.y}px, ${glowColor}, transparent 70%)`,
          }}
        />
      )}
      
      {/* Premium subtle cyan inner shadow highlight */}
      <div 
        className={`absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none z-0 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
        style={{
          boxShadow: "inset 0 0 20px rgba(0, 214, 255, 0.08)",
        }}
      />

      {/* Render card children inside a container that preserves 3D depth */}
      <div className="relative z-20 h-full w-full" style={{ transform: "translateZ(20px)" }}>
        {children}
      </div>
    </div>
  );
}
