"use client";

import { Share2, TrendingUp, Globe, Check } from "lucide-react";
import { memo } from "react";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    id: 1,
    icon: Share2,
    title: "Gestión y posicionamiento en redes sociales",
    description:
      "Profesionalizamos tus redes sociales como el canal principal para captar clientes. Estrategias personalizadas, contenido estratégico y campañas de anuncios pagos.",
    highlights: [
      "Estrategias de marketing personalizadas",
      "Creación de contenido estratégico",
      "Campañas de anuncios pagos",
      "Generación de cientos de consultas mensuales",
    ],
    color: "from-[#27C7E0]", // Cyan
    shadowColor: "rgba(39, 199, 224, 0.2)",
    iconColor: "#27C7E0", // Cyan
  },
  {
    id: 2,
    icon: TrendingUp,
    title: "Posicionamiento SEO y publicidad a través de Google Ads",
    description:
      "Optimizamos tu presencia para que aparezcas en el momento exacto cuando tus clientes potenciales buscan tus servicios.",
    highlights: [
      "Optimización SEO técnica y de contenido",
      "Campañas de Google Ads efectivas",
      "Análisis de competencia",
      "Estrategias multicanal",
    ],
    color: "from-[#FF2C24]", // Red
    shadowColor: "rgba(255, 44, 36, 0.2)",
    iconColor: "#FF2C24", // Red
  },
  {
    id: 3,
    icon: Globe,
    title: "Desarrollo web",
    description:
      "Sitios web profesionales y personalizados que funcionan como herramientas fundamentales de tu negocio.",
    highlights: [
      "Diseño adaptado a tus necesidades",
      "Sitios web rápidos y seguros",
      "Optimizados para conversión",
      "Soporte técnico continuo",
    ],
    color: "from-[#FFD74A]", // Yellow
    shadowColor: "rgba(255, 215, 74, 0.2)",
    iconColor: "#FFD74A", // Yellow
  },
];


export default function Services() {
  return (
    <section
      id="servicios"
      className="relative pt-8 md:pt-16 pb-12 md:pb-20 px-2 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Premium geometric background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Isometric grid pattern overlay */}
        <div className="absolute inset-0 opacity-[0.03]">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="services-grid"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 0 0 L 50 28.8 L 100 0 M 50 28.8 L 50 86.4 M 0 57.6 L 50 86.4 L 100 57.6"
                  stroke="white"
                  strokeWidth="0.5"
                  fill="none"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#services-grid)" />
          </svg>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#FFD74A] rounded-full mix-blend-screen filter blur-[100px] opacity-5 animate-float-slowest" />
      </div>

      <div className="container mx-auto relative z-10 !px-2 sm:!px-8">
        <ScrollReveal direction="up" delay={0} duration={0.7}>
          <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0] mb-6 tracking-tight">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light leading-relaxed">
            Soluciones completas de marketing digital para hacer crecer tu
            negocio en línea
          </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {services.map((service, index) => {
            return (
              <ScrollReveal
                key={service.id}
                direction="up"
                delay={index * 0.1}
                duration={0.6}
              >
                <ServiceCard service={service} />
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Memoized service card component
const ServiceCard = memo(({ service }: { service: typeof services[0] }) => {
  const Icon = service.icon;
  return (
    <div className="group relative h-full">
                <div
                  className="absolute inset-0 bg-gradient-to-br opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl -z-10 blur-xl"
                  style={{
                    background: `linear-gradient(to bottom right, ${service.shadowColor}, transparent)`,
                  }}
                />
                <div className="bg-white/[0.03] backdrop-blur-sm rounded-3xl border border-white/10 p-8 h-full hover:border-white/20 transition-colors duration-300 flex flex-col relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  {/* Icon */}
                  <div className="mb-8 inline-flex relative">
                    <div className="absolute inset-0 bg-white/5 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative p-4 bg-white/5 rounded-2xl border border-white/10 group-hover:scale-110 transition-transform duration-300 group-hover:border-white/20">
                      <Icon size={32} style={{ color: service.iconColor }} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3
                    className="text-2xl font-bold mb-4 transition-colors duration-300"
                    style={{ color: service.iconColor }}
                  >
                    {service.title}
                  </h3>
                  <p className="text-gray-400 mb-8 leading-relaxed flex-grow group-hover:text-gray-300 transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Highlights */}
                  <ul className="space-y-4 mt-auto">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <div className="p-0.5 rounded-full bg-white/5 group-hover/item:bg-white/10 transition-colors flex-shrink-0">
                          <Check
                            className="w-4 h-4"
                            style={{ color: service.iconColor }}
                          />
                        </div>
                        <span className="text-gray-400 text-sm group-hover/item:text-gray-300 transition-colors leading-relaxed">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
    </div>
  );
});

ServiceCard.displayName = "ServiceCard";
