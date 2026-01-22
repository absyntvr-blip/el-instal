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
    <section id="about" className="section-spacing relative w-full">
      <div className="container mx-auto">
        {/* Section Header (Linear-style) */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <div className="sub-header">NASZA HISTORIA</div>
          <h2 className="text-white mb-16">O nas</h2>
          
          <div className="text-width space-y-6 mx-auto">
            <p>
              Od ponad 15 lat realizujemy projekty instalacji elektrycznych i teletechnicznych 
              na terenie całej Polski. Specjalizujemy się w kompleksowych rozwiązaniach 
              od instalacji domowych po zaawansowane systemy dla obiektów komercyjnych.
            </p>
            <p>
              Nasz zespół certyfikowanych elektryków i specjalistów teletechnicznych 
              zapewnia najwyższą jakość wykonania oraz pełną dokumentację powykonawczą.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid (Linear-style grid) */}
        <div className="content-width">
          <div className="grid grid-cols-12 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="col-span-12 md:col-span-4 glass-card flex flex-col h-full"
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
      </div>
    </section>
  );
}
