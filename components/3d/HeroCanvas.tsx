"use client";

import React, { useEffect, useRef } from "react";
import * as THREE from "three";

export default function HeroCanvas() {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!canvasRef.current || !containerRef.current) return;

    const container = containerRef.current;
    const canvas = canvasRef.current;

    // --- 1. Scene Setup ---
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x0a0f1e, 0.015);

    // --- 2. Camera Setup ---
    const width = container.clientWidth;
    const height = container.clientHeight;
    const camera = new THREE.PerspectiveCamera(60, width / height, 0.1, 100);
    camera.position.z = 28;

    // --- 3. Renderer Setup ---
    const renderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(width, height);

    // --- 4. Geometry: Particle Field ---
    const count = 1600;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(count * 3);
    const colors = new Float32Array(count * 3);
    const randomScales = new Float32Array(count);

    // Setup coordinates in a double-ring spherical particle field (looks like a futuristic particle globe / network)
    const colorCyan = new THREE.Color(0x00d4ff);
    const colorGold = new THREE.Color(0xf5a623);
    const colorPurple = new THREE.Color(0x7e22ce);

    for (let i = 0; i < count; i++) {
      // Random coordinates inside a sphere-like distribution
      const u = Math.random();
      const v = Math.random();
      const theta = u * 2.0 * Math.PI;
      const phi = Math.acos(2.0 * v - 1.0);
      const r = 12 + Math.random() * 12; // Radius between 12 and 24

      const x = r * Math.sin(phi) * Math.cos(theta);
      const y = r * Math.sin(phi) * Math.sin(theta);
      const z = r * Math.cos(phi);

      positions[i * 3] = x;
      positions[i * 3 + 1] = y;
      positions[i * 3 + 2] = z;

      // Color interpolation: Blend from electric cyan (accent) to gold or deep navy
      const mixRatio = Math.random();
      let blendedColor = colorCyan.clone();
      if (mixRatio < 0.2) {
        blendedColor.lerp(colorGold, Math.random());
      } else if (mixRatio < 0.5) {
        blendedColor.lerp(colorPurple, Math.random());
      } else {
        blendedColor.lerp(new THREE.Color(0x0a0f1e), Math.random() * 0.4);
      }

      colors[i * 3] = blendedColor.r;
      colors[i * 3 + 1] = blendedColor.g;
      colors[i * 3 + 2] = blendedColor.b;

      // Scale multiplier
      randomScales[i] = 0.2 + Math.random() * 1.8;
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

    // Custom Particle Shader / Point Material for perfect circles with glowing blur
    const canvasTexture = () => {
      const canvasEl = document.createElement("canvas");
      canvasEl.width = 16;
      canvasEl.height = 16;
      const ctx = canvasEl.getContext("2d");
      if (ctx) {
        const gradient = ctx.createRadialGradient(8, 8, 0, 8, 8, 8);
        gradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        gradient.addColorStop(0.3, "rgba(255, 255, 255, 0.8)");
        gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, 16, 16);
      }
      return new THREE.CanvasTexture(canvasEl);
    };

    const material = new THREE.PointsMaterial({
      size: 0.15,
      map: canvasTexture(),
      vertexColors: true,
      transparent: true,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
    });

    const particleSystem = new THREE.Points(geometry, material);
    scene.add(particleSystem);

    // --- 5. Mouse Interaction Kinematics ---
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      // Scale mouse position between -1 and 1
      mouseX = (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2);
      mouseY = (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2);
    };

    window.addEventListener("mousemove", handleMouseMove);

    // --- 6. Window Resize ---
    const handleResize = () => {
      const w = container.clientWidth;
      const h = container.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(container);

    // --- 7. Animation Loop ---
    let animationFrameId: number;
    const clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      // Slow elegant rotations
      particleSystem.rotation.y = elapsedTime * 0.05;
      particleSystem.rotation.x = elapsedTime * 0.02;

      // Dynamic sine-wave coordinate shift on vertices
      const posArr = geometry.attributes.position.array as Float32Array;
      for (let i = 0; i < count; i++) {
        // Apply tiny organic wavy displacements over time
        const xIndex = i * 3;
        const yIndex = i * 3 + 1;
        const zIndex = i * 3 + 2;

        const originalX = positions[xIndex];
        const originalY = positions[yIndex];
        const originalZ = positions[zIndex];

        // Wave displacements
        posArr[xIndex] = originalX + Math.sin(elapsedTime + originalY * 0.2) * 0.08;
        posArr[yIndex] = originalY + Math.cos(elapsedTime + originalX * 0.2) * 0.08;
        posArr[zIndex] = originalZ + Math.sin(elapsedTime * 0.5 + originalX * 0.1) * 0.08;
      }
      geometry.attributes.position.needsUpdate = true;

      // Inertial mouse tracking for smooth camera easing
      targetX += (mouseX - targetX) * 0.05;
      targetY += (mouseY - targetY) * 0.05;

      camera.position.x = targetX * 6;
      camera.position.y = -targetY * 6;
      camera.lookAt(scene.position);

      renderer.render(scene, camera);
    };

    animate();

    // --- 8. Cleanup ---
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      resizeObserver.disconnect();
      cancelAnimationFrame(animationFrameId);

      // Dispose resources
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, []);

  return (
    <div ref={containerRef} className="absolute inset-0 w-full h-full -z-10 bg-[#060913]">
      <canvas ref={canvasRef} className="w-full h-full block" />
      {/* Noise overlay texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />
      {/* Dynamic ambient color spotlights */}
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#00d4ff]/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-[#f5a623]/5 rounded-full blur-[150px] pointer-events-none" />
    </div>
  );
}
