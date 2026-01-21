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
    <section id="about" className="py-20 md:py-28 lg:py-32 relative w-full">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16 md:mb-20"
        >
          <h2 className="text-white mb-4 md:mb-6">O nas</h2>
          <div className="space-y-4 max-w-3xl mx-auto">
            <p className="text-gray-300 leading-relaxed">
              Od ponad 15 lat realizujemy projekty instalacji elektrycznych i teletechnicznych 
              na terenie całej Polski. Specjalizujemy się w kompleksowych rozwiązaniach 
              od instalacji domowych po zaawansowane systemy dla obiektów komercyjnych.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Nasz zespół certyfikowanych elektryków i specjalistów teletechnicznych 
              zapewnia najwyższą jakość wykonania oraz pełną dokumentację powykonawczą.
            </p>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="text-center p-8 md:p-10 rounded-xl bg-[#2A2A2A] border border-[#2A2A2A]/50 hover:border-[#00D9FF]/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[220px] group"
              >
                <div className="mb-6 p-4 rounded-xl bg-[#00D9FF]/10 group-hover:bg-[#00D9FF]/20 transition-colors">
                  <Icon className="w-8 h-8 md:w-10 md:h-10 text-[#00D9FF]" />
                </div>
                <div className="text-4xl md:text-5xl font-bold text-white mb-3 leading-none tracking-tight">{stat.value}</div>
                <div className="text-gray-400 text-base leading-relaxed">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
