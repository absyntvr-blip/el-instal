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
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center max-w-[800px] mx-auto mb-16">
            <div className="sub-header">NASZA HISTORIA</div>
            <h2 className="text-white">O nas</h2>
          </div>
          
          <div className="text-width space-y-6">
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

        {/* Stats Grid - 12 column system */}
        <div className="content-width">
          <div className="grid grid-cols-12 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  className="col-span-12 md:col-span-4 glass-card flex flex-col h-full"
                >
                  <div className="mb-8 flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-[#00D9FF]/10 to-[#00D9FF]/5">
                    <Icon className="w-10 h-10 text-[#00D9FF]" />
                  </div>
                  <div className="stat-number text-6xl md:text-7xl text-white mb-4 leading-none">{stat.value}</div>
                  <div className="text-slate-400 text-base uppercase tracking-wider">{stat.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
