'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';
import { useRef } from 'react';
import HeroBackground from './HeroBackground';

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <HeroBackground />
      
      <div className="relative z-20 container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="text-center"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-3 mb-8 md:mb-12 px-6 py-3 rounded-full bg-[#00D9FF]/15 border border-[#00D9FF]/40 backdrop-blur-sm shadow-lg shadow-[#00D9FF]/20"
          >
            <Zap className="w-5 h-5 text-[#00D9FF] animate-pulse" />
            <span className="text-sm md:text-base font-bold text-[#00D9FF] font-mono tracking-wider uppercase">15+ LAT DOŚWIADCZENIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white mb-8 md:mb-12 font-black tracking-tighter leading-none"
            style={{
              textShadow: '0 0 40px rgba(0, 217, 255, 0.3), 0 0 80px rgba(0, 217, 255, 0.1)',
              letterSpacing: '-0.05em',
            }}
          >
            EL INSTAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl text-gray-100 mb-6 md:mb-8 font-medium leading-tight tracking-tight"
            style={{ letterSpacing: '-0.02em' }}
          >
            Precyzja w instalacjach elektrycznych
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-12 md:mb-16 max-w-3xl mx-auto leading-relaxed font-light"
            style={{ letterSpacing: '0.01em' }}
          >
            Od niskiego do wysokiego napięcia. Od idei do certyfikatu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-5 md:gap-6 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 md:px-12 py-5 md:py-6 bg-[#00D9FF] text-[#0A0A0A] font-bold text-lg md:text-xl rounded-xl neon-glow-hover transition-all duration-300 shadow-2xl shadow-[#00D9FF]/40 border-2 border-[#00D9FF] relative overflow-hidden group"
            >
              <span className="relative z-10 flex items-center gap-2">
                Bezpłatna wycena
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D9FF] to-[#00B8E6] opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.08, y: -4 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 md:px-12 py-5 md:py-6 border-2 border-[#00D9FF] text-[#00D9FF] font-bold text-lg md:text-xl rounded-xl hover:bg-[#00D9FF]/15 transition-all duration-300 backdrop-blur-sm shadow-lg shadow-[#00D9FF]/20"
            >
              Nasze usługi
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={scrollToNext}
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="text-[#00D9FF] hover:text-white transition-colors"
            aria-label="Scroll down"
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      <div ref={scrollRef} className="absolute bottom-0" />
    </section>
  );
}
