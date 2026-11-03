"use client";

import React, { useEffect, useState } from "react";

export default function SpotlightGlow() {
  const [position, setPosition] = useState({ x: -1000, y: -1000 });
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setOpacity(1);
    };

    const handleMouseLeave = () => {
      setOpacity(0);
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed inset-0 z-50 transition-opacity duration-300"
      style={{ opacity }}
    >
      {/* 1. Medium-Bright Radial Blue Glow */}
      <div
        className="absolute rounded-full blur-3xl transition-transform duration-75 ease-out"
        style={{
          width: "450px",
          height: "450px",
          top: 0,
          left: 0,
          background: "radial-gradient(circle, rgba(59, 130, 246, 0.18) 0%, rgba(59, 130, 246, 0.05) 55%, transparent 80%)",
          transform: `translate3d(${position.x - 225}px, ${position.y - 225}px, 0)`,
        }}
      />

      {/* 2. Electric Blue Cursor Dot */}
      <div
        className="absolute w-3 h-3 bg-blue-500 rounded-full shadow-[0_0_10px_#3b82f6] transition-transform duration-75 ease-out"
        style={{
          top: 0,
          left: 0,
          transform: `translate3d(${position.x - 6}px, ${position.y - 6}px, 0)`,
        }}
      />
    </div>
  );
}