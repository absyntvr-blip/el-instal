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

      <div className="relative z-20 w-full">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="inline-flex items-center gap-2.5 mb-8 md:mb-10 px-4 py-2 rounded-full bg-white/[0.06] border border-white/[0.08]"
            >
              <Zap className="w-4 h-4 text-[#00D9FF]" />
              <span className="text-xs md:text-sm font-medium text-[#00D9FF] font-mono tracking-wider uppercase">
                15+ LAT DOŚWIADCZENIA
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-white mb-6 md:mb-10 font-bold tracking-tight leading-[0.9]"
              style={{ letterSpacing: '-0.04em' }}
            >
              EL INSTAL
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.6 }}
              className="text-2xl md:text-4xl lg:text-5xl text-white/90 mb-6 md:mb-8 font-medium leading-tight tracking-tight max-w-3xl mx-auto"
              style={{ letterSpacing: '-0.02em' }}
            >
              Precyzja w instalacjach elektrycznych
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-lg md:text-xl text-white/60 mb-14 md:mb-16 max-w-2xl mx-auto leading-relaxed"
            >
              Od niskiego do wysokiego napięcia. Od idei do certyfikatu.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.a
                href="#contact"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="cta-button inline-flex items-center justify-center"
              >
                Bezpłatna wycena
              </motion.a>
              <motion.a
                href="#services"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="px-12 py-5 rounded-xl border border-white/[0.15] text-white/90 font-semibold text-lg hover:bg-white/[0.06] hover:border-white/[0.2] transition-all duration-300"
              >
                Nasze usługi
              </motion.a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 2.5, ease: 'easeInOut' }}
              className="text-white/50 hover:text-white/80 transition-colors p-2"
              aria-label="Scroll down"
            >
              <ArrowDown className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </div>

      <div ref={scrollRef} className="absolute bottom-0" />
    </section>
  );
}
