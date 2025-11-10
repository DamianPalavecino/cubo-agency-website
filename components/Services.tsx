import { Share2, TrendingUp, Globe } from "lucide-react";

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
    <section id="servicios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Nuestros Servicios
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Soluciones completas de marketing digital para hacer crecer tu
            negocio en línea
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-6">
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
                <div className="bg-white rounded-2xl border border-gray-200 p-8 h-full hover:border-cyan hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                  {/* Gradient background on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-5 transition-opacity duration-300 -z-10`}></div>

                  {/* Icon */}
                  <div className="mb-6 inline-flex">
                    <div
                      className={`p-4 bg-gradient-to-br ${service.color} to-transparent bg-opacity-10 rounded-xl group-hover:scale-110 transition-transform duration-300`}
                    >
                      <Icon size={32} className="text-cyan" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-bold text-dark mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>

                  {/* Highlights */}
                  <ul className="space-y-3">
                    {service.highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <div className="w-2 h-2 bg-cyan rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-700 text-sm">
                          {highlight}
                        </span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Link */}
                  <a
                    href="https://wa.me/541234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-8 inline-block px-6 py-2 text-cyan font-semibold hover:bg-cyan/10 rounded-lg transition-all"
                  >
                    Saber más →
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
