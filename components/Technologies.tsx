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
    <section className="py-24 md:py-32 relative w-full">
      <div className="container mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-white mb-6">Technologie</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Współpracujemy z wiodącymi producentami sprzętu elektrycznego i teletechnicznego
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {technologies.map((tech, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.05 }}
              className="bg-[#2A2A2A] border border-[#2A2A2A] rounded-lg p-6 text-center hover:border-[#00D9FF]/50 transition-all duration-300 min-h-[100px] flex items-center justify-center"
            >
              <div className="text-box-title font-semibold text-white leading-tight">{tech}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
