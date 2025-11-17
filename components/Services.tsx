import { Share2, TrendingUp, Globe, Check } from "lucide-react";

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
    color: "from-cyan",
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
    color: "from-red",
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
    color: "from-yellow",
  },
];

export default function Services() {
  return (
    <section
      id="servicios"
      className="relative py-20 px-2 sm:px-6 lg:px-8 bg-black overflow-hidden"
    >
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 right-0 w-80 h-80 bg-[#FF2C24] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#27C7E0] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
        <div className="absolute top-1/2 right-1/3 w-72 h-72 bg-[#FFD74A] rounded-full mix-blend-screen filter blur-3xl opacity-10" />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0] mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Soluciones completas de marketing digital para hacer crecer tu
            negocio en línea
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group animate-fade-in-up relative"
                style={{
                  animationDelay: `${index * 0.1}s`,
                }}
              >
                <div className="bg-white/5 rounded-2xl border border-white/10 p-6 sm:p-8 h-full hover:border-cyan/60 hover:bg-white/10 transition-all duration-300 relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10`}
                  ></div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex">
                    <div className="p-4 bg-white/5 rounded-xl group-hover:scale-105 transition-transform duration-300">
                      <Icon size={32} className="text-white" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-300 mb-6">{service.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, i) => {
                      return (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                          <span className="text-gray-300 text-sm">
                            {highlight}
                          </span>
                        </li>
                      );
                    })}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
