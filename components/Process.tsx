'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FileSearch, DraftingCompass, Wrench, FileCheck } from 'lucide-react';

const steps = [
  {
    number: '01',
    icon: FileSearch,
    title: 'Audyt i wycena',
    description: 'Dokładna analiza potrzeb i przygotowanie szczegółowej wyceny',
  },
  {
    number: '02',
    icon: DraftingCompass,
    title: 'Projektowanie',
    description: 'Tworzenie dokumentacji projektowej zgodnej z normami',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Realizacja',
    description: 'Profesjonalne wykonanie instalacji przez certyfikowany zespół',
  },
  {
    number: '04',
    icon: FileCheck,
    title: 'Odbiór i dokumentacja',
    description: 'Kompletna dokumentacja powykonawcza i protokoły pomiarowe',
  },
];

export default function Process() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="process" className="section-spacing relative w-full">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-white mb-6 md:mb-8">Proces pracy</h2>
          <p className="section-subtitle mx-auto">
            Od pierwszego kontaktu do finalnego odbioru - kompleksowa obsługa projektu
          </p>
        </motion.div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group"
              >
                <div className="bg-[#2A2A2A] border border-[#2A2A2A]/50 rounded-xl p-8 h-full hover:border-[#00D9FF]/50 transition-all duration-300 flex flex-col min-h-[260px] group-hover:bg-[#2F2F2F]">
                  <div className="flex items-start gap-4 mb-8">
                    <div className="text-4xl md:text-5xl font-bold text-[#00D9FF] font-mono leading-none">
                      {step.number}
                    </div>
                    <div className="p-3 rounded-lg bg-[#00D9FF]/10 group-hover:bg-[#00D9FF]/20 transition-colors">
                      <Icon className="w-7 h-7 md:w-8 md:h-8 text-[#00D9FF]" />
                    </div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">{step.title}</h3>
                  <p className="text-gray-300 leading-relaxed flex-grow text-base">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-[#00D9FF]/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
