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
          className="text-center mb-20 md:mb-24"
        >
          <h2 className="text-white mb-6 md:mb-8">Nasze usługi</h2>
          <p className="section-subtitle mx-auto">
            Kompleksowe rozwiązania w zakresie instalacji elektrycznych i teletechnicznych
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isExpanded = expanded === index;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                className="relative group flex"
              >
                <motion.div
                  whileHover={{ y: -6 }}
                  className="bg-[#2A2A2A] border border-[#2A2A2A]/50 rounded-xl p-0 h-full w-full cursor-pointer transition-all duration-300 hover:border-[#00D9FF]/50 flex flex-col overflow-hidden group"
                  onClick={() => setExpanded(isExpanded ? null : index)}
                >
                  <div className="relative w-full h-56 rounded-t-xl overflow-hidden bg-[#0A0A0A]">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover opacity-70 group-hover:opacity-80 transition-opacity"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#2A2A2A] to-transparent"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div
                        className="p-5 rounded-xl backdrop-blur-md border border-white/10"
                        style={{ backgroundColor: `${service.color}25` }}
                      >
                        <Icon className="w-10 h-10 md:w-12 md:h-12" style={{ color: service.color }} />
                      </div>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="p-2 bg-[#2A2A2A]/90 backdrop-blur-sm rounded-full">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-gray-300" />
                        ) : (
                          <ChevronDown className="w-4 h-4 text-gray-300" />
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="p-8 flex flex-col flex-grow">
                    <h3 className="text-xl md:text-2xl font-semibold text-white mb-4 leading-tight">{service.title}</h3>
                    <p className="text-gray-300 mb-6 flex-grow leading-relaxed text-base">{service.shortDesc}</p>

                    <motion.div
                      initial={false}
                      animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <ul className="space-y-2 mt-4">
                        {service.fullDesc.map((item, idx) => (
                          <li key={idx} className="text-box-body text-gray-400 flex items-start leading-relaxed">
                            <span className="text-[#00D9FF] mr-2 flex-shrink-0 mt-1">•</span>
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
