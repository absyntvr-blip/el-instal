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
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-[1]">
      {/* Animated electrical schematics - BEFORE gradient so they show through */}
      <div className="absolute inset-0 z-[5]">
        {/* Schematic 1 - Top Left */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-20 left-10 w-64 h-64 md:w-96 md:h-96"
          style={{ filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))' }}
        >
          <Image
            src="/images/placeholder-electrical.svg"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 768px) 256px, 320px"
            priority
          />
        </motion.div>

        {/* Schematic 2 - Top Right */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 0.9, x: 0 }}
          transition={{ duration: 2, delay: 0.7 }}
          className="absolute top-32 right-10 w-72 h-72 md:w-[500px] md:h-[500px]"
          style={{ filter: 'drop-shadow(0 0 20px rgba(0, 217, 255, 0.5))' }}
        >
          <Image
            src="/images/placeholder-electrical.svg"
            alt=""
            fill
            className="object-contain rotate-90"
            sizes="(max-width: 768px) 288px, 384px"
            priority
          />
        </motion.div>

        {/* Schematic 3 - Bottom Left */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 2, delay: 0.9 }}
          className="absolute bottom-32 left-20 w-64 h-64 md:w-96 md:h-96"
        >
          <Image
            src="/images/placeholder-installation.svg"
            alt=""
            fill
            className="object-contain"
            sizes="(max-width: 768px) 224px, 288px"
          />
        </motion.div>

        {/* Schematic 4 - Bottom Right */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ duration: 2, delay: 1.1 }}
          className="absolute bottom-20 right-20 w-64 h-64 md:w-96 md:h-96"
        >
          <Image
            src="/images/placeholder-teletechnics.svg"
            alt=""
            fill
            className="object-contain -rotate-12"
            sizes="(max-width: 768px) 256px, 320px"
          />
        </motion.div>

        {/* Schematic 5 - Center Left */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2.5, delay: 1.3 }}
          className="absolute top-1/2 left-0 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80"
        >
          <Image
            src="/images/placeholder-electrical.svg"
            alt=""
            fill
            className="object-contain rotate-45"
            sizes="(max-width: 768px) 192px, 256px"
          />
        </motion.div>

        {/* Schematic 6 - Center Right */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.5, scale: 1 }}
          transition={{ duration: 2.5, delay: 1.5 }}
          className="absolute top-1/2 right-0 -translate-y-1/2 w-56 h-56 md:w-80 md:h-80"
        >
          <Image
            src="/images/placeholder-electrical.svg"
            alt=""
            fill
            className="object-contain -rotate-45"
            sizes="(max-width: 768px) 192px, 256px"
          />
        </motion.div>
      </div>

      {/* Additional glow effects - BEFORE gradient */}
      <div className="absolute inset-0 z-[6]">
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#00D9FF]/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#00D9FF]/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#00D9FF]/10 rounded-full blur-3xl"></div>
      </div>
      
      {/* Gradient overlay - AFTER schematics with lower opacity */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A]/60 via-[#0A0A0A]/50 to-[#1A1A1A]/70 z-[8]" />

      {/* Animated grid pattern */}
      <div className="absolute inset-0 z-[6] opacity-40">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="hero-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#00D9FF" strokeWidth="0.8" opacity="0.8"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#hero-grid)" />
        </svg>
      </div>

      {/* Floating particles */}
      {mounted && particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute w-1.5 h-1.5 bg-[#00D9FF] rounded-full z-[7]"
          initial={{
            opacity: 0,
          }}
          animate={{
            y: [0, -150, 0],
            opacity: [0, 0.8, 0],
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
            boxShadow: '0 0 6px rgba(0, 217, 255, 0.6)',
          }}
        />
      ))}
    </div>
  );
}
