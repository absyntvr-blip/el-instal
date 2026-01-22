'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const technologies = [
  'ABB',
  'Schneider Electric',
  'Siemens',
  'Hikvision',
  'Legrand',
  'Eaton',
  'Phoenix Contact',
];

export default function Technologies() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="section-spacing relative w-full">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-20 md:mb-24"
        >
          <div className="text-center mb-12">
            <div className="sub-header mb-3">NASI PARTNERZY</div>
            <h2 className="text-white mb-8">Technologie</h2>
          </div>
          <p className="section-subtitle mx-auto max-w-[650px]">
            Współpracujemy z wiodącymi producentami sprzętu elektrycznego i teletechnicznego
          </p>
        </motion.div>

        {/* Technologies Grid - 12 column system */}
        <div className="grid grid-cols-12 gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.08, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="col-span-6 md:col-span-4 lg:col-span-3 glass-card p-8 text-center min-h-[120px] flex items-center justify-center group"
            >
              <div className="text-base font-semibold text-white leading-tight group-hover:text-[#00D9FF] transition-colors">
                {tech}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
