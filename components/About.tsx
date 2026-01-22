'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, Users, CheckCircle } from 'lucide-react';

const stats = [
  { icon: Award, value: '15+', label: 'Lat doświadczenia' },
  { icon: Users, value: '500+', label: 'Zrealizowanych projektów' },
  { icon: CheckCircle, value: '100%', label: 'Certyfikowanych specjalistów' },
];

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  return (
    <section id="about" className="py-24 relative w-full">
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
            NASZA HISTORIA
          </p>
          <h2 className="text-white mb-6">O nas</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto mb-8">
            Od ponad 15 lat realizujemy projekty instalacji elektrycznych i teletechnicznych 
            na terenie całej Polski. Specjalizujemy się w kompleksowych rozwiązaniach 
            od instalacji domowych po zaawansowane systemy dla obiektów komercyjnych.
          </p>
        </motion.div>

        {/* Tekst body - max-width centered */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
          className="max-w-3xl mx-auto mb-16"
        >
          <p className="text-lg text-white/60 leading-relaxed text-center">
            Nasz zespół certyfikowanych elektryków i specjalistów teletechnicznych 
            zapewnia najwyższą jakość wykonania oraz pełną dokumentację powykonawczą.
          </p>
        </motion.div>

        {/* Stats Grid - 3 elementy w grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="glass-card flex flex-col items-center text-center h-full"
              >
                <div className="mb-6 flex items-center justify-center w-16 h-16 rounded-xl bg-white/[0.06] border border-white/[0.08]">
                  <Icon className="w-8 h-8 text-[#00D9FF]" />
                </div>
                <div className="stat-number text-5xl md:text-6xl text-white mb-3 leading-none">{stat.value}</div>
                <div className="text-white/60 text-sm uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
