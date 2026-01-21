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
    <section id="about" className="py-24 md:py-32 relative w-full">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center mb-16"
        >
          <h2 className="text-white mb-6">O nas</h2>
          <p className="text-lg text-gray-400 leading-relaxed mb-4">
            Od ponad 15 lat realizujemy projekty instalacji elektrycznych i teletechnicznych 
            na terenie całej Polski. Specjalizujemy się w kompleksowych rozwiązaniach 
            od instalacji domowych po zaawansowane systemy dla obiektów komercyjnych.
          </p>
          <p className="text-lg text-gray-400 leading-relaxed">
            Nasz zespół certyfikowanych elektryków i specjalistów teletechnicznych 
            zapewnia najwyższą jakość wykonania oraz pełną dokumentację powykonawczą.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className="text-center p-6 md:p-8 rounded-lg bg-[#2A2A2A] border border-[#2A2A2A] hover:border-[#00D9FF]/50 transition-all duration-300 flex flex-col items-center justify-center min-h-[200px]"
              >
                <Icon className="w-12 h-12 text-[#00D9FF] mx-auto mb-4 flex-shrink-0" />
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{stat.value}</div>
                <div className="text-gray-400 text-sm md:text-base">{stat.label}</div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
