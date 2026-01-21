'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function HeroBackground() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    top: Math.random() * 100,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A] z-10" />
      
      {/* Animated electrical schematics */}
      <div className="absolute inset-0 z-0">
        {/* Schematic 1 - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-10 w-64 h-64"
        >
          <Image
            src="/images/placeholder-electrical.svg"
            alt=""
            fill
            className="object-contain opacity-30"
            sizes="256px"
          />
        </motion.div>

        {/* Schematic 2 - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.15, x: 0 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute top-32 right-10 w-72 h-72"
        >
          <Image
            src="/images/placeholder-electrical.svg"
            alt=""
            fill
            className="object-contain opacity-30 rotate-90"
            sizes="288px"
          />
        </motion.div>

        {/* Schematic 3 - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.12, y: 0 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="absolute bottom-32 left-20 w-56 h-56"
        >
          <Image
            src="/images/placeholder-installation.svg"
            alt=""
            fill
            className="object-contain opacity-25"
            sizes="224px"
          />
        </motion.div>

        {/* Schematic 4 - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.12, y: 0 }}
          transition={{ duration: 2, delay: 1.1 }}
          className="absolute bottom-20 right-20 w-64 h-64"
        >
          <Image
            src="/images/placeholder-teletechnics.svg"
            alt=""
            fill
            className="object-contain opacity-25 -rotate-12"
            sizes="256px"
          />
        </motion.div>

        {/* Schematic 5 - Center Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.5, delay: 1.3 }}
          className="absolute top-1/2 left-0 -translate-y-1/2 w-48 h-48"
        >
          <Image
            src="/images/placeholder-electrical.svg"
            alt=""
            fill
            className="object-contain opacity-20 rotate-45"
            sizes="192px"
          />
        </motion.div>

        {/* Schematic 6 - Center Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.1, scale: 1 }}
          transition={{ duration: 2.5, delay: 1.5 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-48 h-48"
        >
          <Image
            src="/images/placeholder-electrical.svg"
            alt=""
            fill
            className="object-contain opacity-20 -rotate-45"
            sizes="192px"
          />
        </motion.div>
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-0 opacity-10">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00D9FF" strokeWidth="0.5" opacity="0.3"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1 h-1 bg-[#00D9FF] rounded-full"
          initial={{
            opacity: 0,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0, 0.6, 0],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
        />
      ))}
    </div>
  );
}
