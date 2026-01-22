'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Phone, MapPin, Building2 } from 'lucide-react';

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="contact" className="py-24 relative w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 xl:px-20">
        {/* Section Header - ZAWSZE wycentrowany */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-sm uppercase tracking-wider text-[#00D9FF] mb-4 font-semibold">
            SKONTAKTUJ SIĘ
          </p>
          <h2 className="text-white mb-6">Kontakt</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Zadzwoń do nas, aby uzyskać bezpłatną wycenę projektu
          </p>
        </motion.div>

        {/* Contact Info Grid - 3 boxy w jednej linii, WYCENTROWANE */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-8">
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="glass-card flex flex-col items-center text-center h-full"
          >
            <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] flex-shrink-0 mb-4">
              <Building2 className="w-5 h-5 text-[#00D9FF] mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2 text-base">Firma</h3>
            <p className="text-white/80 text-sm font-medium">
              PP EL-INSTAL<br />Sp. z o.o.
            </p>
          </motion.div>

          {/* Phone - Main Contact */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
            whileHover={{ y: -2 }}
            className="glass-card flex flex-col items-center text-center h-full"
          >
            <div className="p-3 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex-shrink-0 mb-4">
              <Phone className="w-5 h-5 text-[#00D9FF] mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2 text-base">Telefon</h3>
            <a
              href="tel:+48608030864"
              className="text-[#00D9FF] hover:text-[#00D9FF]/80 transition-colors text-lg font-semibold block mb-1"
            >
              +48 608 030 864
            </a>
            <p className="text-white/50 text-xs">Główny kontakt</p>
          </motion.div>

          {/* Address */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.25, duration: 0.5 }}
            whileHover={{ y: -2 }}
            className="glass-card flex flex-col items-center text-center h-full"
          >
            <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] flex-shrink-0 mb-4">
              <MapPin className="w-5 h-5 text-[#00D9FF] mx-auto" />
            </div>
            <h3 className="text-white font-semibold mb-2 text-base">Adres</h3>
            <p className="text-white/60 text-sm">
              ul. Beniowskiego 51<br />
              80-355 Gdańsk
            </p>
          </motion.div>
        </div>

        {/* CTA Button - wycentrowany */}
        <div className="max-w-md mx-auto">
          <motion.a
            href="tel:+48608030864"
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.5 }}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="cta-button w-full py-5 flex items-center justify-center gap-3 font-semibold text-lg"
          >
            <Phone className="w-5 h-5" />
            Zadzwoń teraz
          </motion.a>
        </div>
      </div>
    </section>
  );
}
