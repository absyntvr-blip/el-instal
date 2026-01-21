'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Zap } from 'lucide-react';
import { useRef } from 'react';

export default function Hero() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    scrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0A0A] via-[#0A0A0A] to-[#1A1A1A]" />
      
      <div className="relative z-10 container mx-auto">
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
            className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-[#00D9FF]/10 border border-[#00D9FF]/30"
          >
            <Zap className="w-4 h-4 text-[#00D9FF]" />
            <span className="text-sm text-[#00D9FF] font-mono">15+ LAT DOŚWIADCZENIA</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-white mb-6 font-bold tracking-tight"
          >
            EL INSTAL
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-300 mb-4 font-light"
          >
            Precyzja w instalacjach elektrycznych
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-base md:text-lg text-gray-400 mb-12 max-w-2xl mx-auto"
          >
            Od niskiego do wysokiego napięcia. Od idei do certyfikatu.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#00D9FF] text-[#0A0A0A] font-semibold rounded-lg neon-glow-hover transition-all duration-300"
            >
              Bezpłatna wycena
            </motion.a>
            <motion.a
              href="#services"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-[#00D9FF] text-[#00D9FF] font-semibold rounded-lg hover:bg-[#00D9FF]/10 transition-all duration-300"
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
