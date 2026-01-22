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
    <section id="contact" className="section-spacing relative w-full">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto"
        >
          {/* Section Header (Linear-style) */}
          <div className="section-header mb-16">
            <div className="sub-header">SKONTAKTUJ SIĘ</div>
            <h2 className="text-white">Kontakt</h2>
            <p className="section-subtitle">
              Zadzwoń do nas, aby uzyskać bezpłatną wycenę projektu
            </p>
          </div>

          <div className="space-y-6">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="glass-card flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] flex-shrink-0">
                <Building2 className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-1 text-base">Firma</h3>
                <p className="text-white/80 text-sm font-medium">
                  PP EL-INSTAL Sp. z o.o.
                </p>
              </div>
            </motion.div>

            {/* Phone - Main Contact */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.2, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="glass-card flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-[#00D9FF]/10 border border-[#00D9FF]/20 flex-shrink-0">
                <Phone className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-1 text-base">Telefon</h3>
                <a
                  href="tel:+48608030864"
                  className="text-[#00D9FF] hover:text-[#00D9FF]/80 transition-colors text-lg font-semibold block"
                >
                  +48 608 030 864
                </a>
                <p className="text-white/50 text-xs mt-1">Główny kontakt</p>
              </div>
            </motion.div>

            {/* Address */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.25, duration: 0.5 }}
              whileHover={{ y: -2 }}
              className="glass-card flex items-start gap-4"
            >
              <div className="p-3 rounded-xl bg-white/[0.06] border border-white/[0.08] flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#00D9FF]" />
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-white font-semibold mb-1 text-base">Adres</h3>
                <p className="text-white/60 text-sm">
                  ul. Beniowskiego 51
                </p>
                <p className="text-white/60 text-sm">
                  80-355 Gdańsk
                </p>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.a
              href="tel:+48608030864"
              initial={{ opacity: 0, y: 16 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.5 }}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="cta-button w-full py-5 flex items-center justify-center gap-3 font-semibold text-lg mt-8"
            >
              <Phone className="w-5 h-5" />
              Zadzwoń teraz
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
