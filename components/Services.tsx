'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Zap, Wrench, Camera, ChevronDown, ChevronUp } from 'lucide-react';

const services = [
  {
    icon: Zap,
    title: 'Serwis instalacji elektrycznych',
    shortDesc: 'Diagnostyka, naprawa i konserwacja instalacji elektrycznych',
    fullDesc: [
      'Diagnostyka i naprawa awarii elektrycznych',
      'Konserwacja i przeglądy okresowe instalacji',
      'Modernizacja systemów zabezpieczeń (wyłączniki, zabezpieczenia)',
      'Pomiary instalacji elektrycznych',
      'Wydawanie protokołów i dokumentacji powykonawczej',
    ],
    color: '#00D9FF',
  },
  {
    icon: Wrench,
    title: 'Przebudowa i nowe instalacje',
    shortDesc: 'Kompletne instalacje od niskiego do wysokiego napięcia',
    fullDesc: [
      'Instalacje niskiego napięcia (nn): kompletne instalacje elektryczne w budynkach mieszkalnych, rozdzielnice elektryczne, instalacje oświetleniowe LED, instalacje fotowoltaiczne',
      'Instalacje wysokiego napięcia (WN): stacje transformatorowe, przyłącza energetyczne WN, rozdzielnie średniego napięcia (SN), modernizacja infrastruktury energetycznej',
    ],
    color: '#FF6B00',
  },
  {
    icon: Camera,
    title: 'Teletechnika na marketach budowlanych',
    shortDesc: 'Zaawansowane systemy teletechniczne dla obiektów handlowych',
    fullDesc: [
      'Systemy monitoringu CCTV (kamery IP, rejestratory)',
      'Kontrola dostępu (czytniki, szlabany, bramy)',
      'Systemy sygnalizacji pożarowej (SSP)',
      'Sieci strukturalne i okablowanie LAN',
      'Systemy nagłośnienia i DSO (dźwiękowe systemy ostrzegawcze)',
      'Integracja systemów BMS (Building Management System)',
      'Instalacje w obiektach handlowych dużego formatu',
    ],
    color: '#00D9FF',
  },
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <section id="services" className="py-24 relative w-full">
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
            CO ROBIMY
          </p>
          <h2 className="text-white mb-6">Nasze usługi</h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Kompleksowe rozwiązania w zakresie instalacji elektrycznych i teletechnicznych
          </p>
        </motion.div>

        {/* Services Grid - 3 karty w równym grid, WYCENTROWANE */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expanded === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="h-full"
              >
                <motion.div
                  whileHover={{ y: -2 }}
                  className="glass-card cursor-pointer group h-full flex flex-col text-center"
                  onClick={() => setExpanded(isExpanded ? null : index)}
                >
                  {/* Icon - WYCENTROWANA */}
                  <div className="mb-6 flex items-center justify-center">
                    <div 
                      className="flex items-center justify-center w-16 h-16 rounded-2xl mx-auto"
                      style={{
                        background: `radial-gradient(circle, ${service.color}15, ${service.color}05)`
                      }}
                    >
                      <Icon 
                        size={40} 
                        strokeWidth={1.5} 
                        style={{ color: service.color }} 
                      />
                    </div>
                  </div>

                  {/* Content - WYCENTROWANY */}
                  <div className="flex-grow flex flex-col">
                    <h3 className="text-2xl font-bold text-white leading-tight tracking-tight mb-4">
                      {service.title}
                    </h3>
                    
                    <p className="text-base text-white/70 leading-relaxed mb-6 flex-grow min-h-[80px]">
                      {service.shortDesc}
                    </p>

                    <button
                      type="button"
                      onClick={(e) => { e.stopPropagation(); setExpanded(isExpanded ? null : index); }}
                      className="flex items-center justify-center gap-2 p-2 rounded-full bg-white/[0.06] border border-white/[0.08] hover:bg-white/[0.08] hover:border-white/[0.12] transition-colors text-white/70 hover:text-white text-sm font-medium mx-auto"
                      aria-expanded={isExpanded}
                    >
                      {isExpanded ? (
                        <><ChevronUp className="w-4 h-4" /> Zwiń</>
                      ) : (
                        <><ChevronDown className="w-4 h-4" /> Rozwiń szczegóły</>
                      )}
                    </button>

                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden mt-4 text-left"
                    >
                      <ul className="space-y-3">
                        {service.fullDesc.map((item, idx) => (
                          <li key={idx} className="text-sm text-white/60 flex items-start leading-relaxed">
                            <span className="text-[#00D9FF] mr-3 flex-shrink-0 mt-1.5">•</span>
                            <span className="flex-1">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
