'use client';

import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useState } from 'react';
import { Zap, Wrench, Camera, ChevronDown, ChevronUp } from 'lucide-react';
import Image from 'next/image';

const services = [
  {
    icon: Zap,
    title: 'Serwis instalacji elektrycznych',
    shortDesc: 'Diagnostyka, naprawa i konserwacja instalacji elektrycznych',
    image: '/images/placeholder-electrical.svg',
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
    image: '/images/placeholder-installation.svg',
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
    image: '/images/placeholder-teletechnics.svg',
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
    <section id="services" className="section-spacing relative w-full">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-32"
        >
          <div className="text-center max-w-[800px] mx-auto">
            <div className="sub-header">CO ROBIMY</div>
            <h2 className="text-white">Nasze usługi</h2>
            <p className="section-subtitle">
              Kompleksowe rozwiązania w zakresie instalacji elektrycznych i teletechnicznych
            </p>
          </div>
        </motion.div>

        {/* Services - Vertical Stack (full width cards) */}
        <div className="content-width">
          <div className="flex flex-col gap-12">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isExpanded = expanded === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    className="glass-card cursor-pointer group"
                    onClick={() => setExpanded(isExpanded ? null : index)}
                  >
                    <div className="flex flex-col md:flex-row gap-8 md:gap-12">
                      {/* Icon Section */}
                      <div className="flex-shrink-0 flex items-start">
                        <div 
                          className="flex items-center justify-center w-24 h-24 rounded-2xl"
                          style={{
                            background: `radial-gradient(circle, ${service.color}15, ${service.color}05)`
                          }}
                        >
                          <Icon 
                            size={64} 
                            strokeWidth={1.5} 
                            style={{ color: service.color }} 
                            className="text-cyan-400"
                          />
                        </div>
                      </div>

                      {/* Content Section */}
                      <div className="flex-grow flex flex-col">
                        <div className="flex items-start justify-between gap-4 mb-6">
                          <h3 className="text-3xl md:text-4xl font-bold text-white leading-tight tracking-tight flex-grow">
                            {service.title}
                          </h3>
                          <div className="p-2 bg-black/40 backdrop-blur-sm rounded-full border border-white/10 flex-shrink-0">
                            {isExpanded ? (
                              <ChevronUp className="w-5 h-5 text-gray-300" />
                            ) : (
                              <ChevronDown className="w-5 h-5 text-gray-300" />
                            )}
                          </div>
                        </div>
                        
                        <p className="text-xl text-white/70 leading-relaxed mb-6 max-w-2xl">
                          {service.shortDesc}
                        </p>

                        <motion.div
                          initial={false}
                          animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <ul className="space-y-3 mt-4">
                            {service.fullDesc.map((item, idx) => (
                              <li key={idx} className="text-base text-white/60 flex items-start leading-relaxed">
                                <span className="text-[#00D9FF] mr-3 flex-shrink-0 mt-1.5">•</span>
                                <span className="flex-1">{item}</span>
                              </li>
                            ))}
                          </ul>
                        </motion.div>
                      </div>
                    </div>
                  </motion.div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
