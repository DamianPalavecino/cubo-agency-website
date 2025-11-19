"use client";

import { motion } from "framer-motion";
import { ExternalLink, TrendingUp } from "lucide-react";

const caseStudies = [
  {
    id: 1,
    title: "Consultorio Dental - Posicionamiento en Redes",
    category: "Redes Sociales",
    result: "+300% de consultas",
    description:
      "Transformamos su presencia en Instagram y Facebook generando cientos de consultas mensuales.",
    image: "bg-gradient-to-br from-cyan/20 to-blue-200",
    accentColor: "border-cyan",
    metrics: [
      { label: "Seguidores", value: "+2,500" },
      { label: "Consultas", value: "+300%" },
      { label: "ROI", value: "400%" },
    ],
  },
  {
    id: 2,
    title: "E-commerce de Moda - Desarrollo Web + Google Ads",
    category: "Web + Ads",
    result: "+500k USD en ventas",
    description:
      "Creamos un sitio web de alto rendimiento combinado con campañas de Google Ads estratégicas.",
    image: "bg-gradient-to-br from-red/20 to-orange-200",
    accentColor: "border-red",
    metrics: [
      { label: "Ventas", value: "+500k USD" },
      { label: "Conversión", value: "4.8%" },
      { label: "AOV", value: "+45%" },
    ],
  },
  {
    id: 3,
    title: "Agencia Inmobiliaria - SEO + Redes",
    category: "SEO + Redes",
    result: "+50 propiedades vendidas",
    description:
      "Estrategia integral de SEO y redes sociales para captar clientes calificados.",
    image: "bg-gradient-to-br from-yellow/20 to-amber-200",
    accentColor: "border-yellow",
    metrics: [
      { label: "Propiedades", value: "+50" },
      { label: "Tráfico", value: "+1.2M" },
      { label: "Leads", value: "+400" },
    ],
  },
  {
    id: 4,
    title: "SaaS B2B - SEO & Content Marketing",
    category: "SEO",
    result: "+5k leads calificados",
    description:
      "Estrategia de contenido y SEO para posicionar en palabras clave de alto valor.",
    image: "bg-gradient-to-br from-cyan/20 to-teal-200",
    accentColor: "border-cyan",
    metrics: [
      { label: "Leads", value: "+5k" },
      { label: "Rankings", value: "+50" },
      { label: "MRR", value: "+200k USD" },
    ],
  },
  {
    id: 5,
    title: "Restaurante Premium - Redes Sociales",
    category: "Redes Sociales",
    result: "+80% de ocupación",
    description:
      "Posicionamiento en redes sociales para generar reservas y aumentar ocupación.",
    image: "bg-gradient-to-br from-red/20 to-pink-200",
    accentColor: "border-red",
    metrics: [
      { label: "Ocupación", value: "+80%" },
      { label: "Seguidores", value: "+3k" },
      { label: "Reservas", value: "+65%" },
    ],
  },
  {
    id: 6,
    title: "Clínica Dental - Desarrollo Web",
    category: "Web",
    result: "+200 pacientes nuevos",
    description:
      "Sitio web profesional optimizado para generación de citas y consultas.",
    image: "bg-gradient-to-br from-yellow/20 to-lime-200",
    accentColor: "border-yellow",
    metrics: [
      { label: "Pacientes", value: "+200" },
      { label: "Citas", value: "+150/mes" },
      { label: "Conversión", value: "5.2%" },
    ],
  },
];

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#070b15] to-[#05080e]"
    >
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Portfolio de Casos de Éxito
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Proyectos reales con resultados comprobados que transformaron
            negocios
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan/60 hover:bg-white/10 transition-all duration-300"
            >
              {/* Image */}
              <div
                className={`h-40 ${study.image} relative overflow-hidden group-hover:scale-105 transition-transform duration-300`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <TrendingUp size={48} className="text-white/30" />
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <span className="inline-block px-3 py-1 bg-white/10 text-white text-xs font-semibold rounded-full">
                    {study.category}
                  </span>
                  <ExternalLink size={16} className="text-gray-400" />
                </div>

                <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan transition-colors">
                  {study.title}
                </h3>

                <p className="text-gray-300 text-sm mb-4">
                  {study.description}
                </p>

                {/* Result highlight */}
                <div className="bg-white/5 rounded-lg p-4 mb-4 border border-white/5">
                  <p className="text-sm text-gray-400">Resultado</p>
                  <p className="text-lg font-bold text-white">
                    {study.result}
                  </p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-3 pt-4 border-t border-white/10">
                  {study.metrics.map((metric, i) => (
                    <div key={i} className="text-center">
                      <p className="text-sm font-bold text-white">
                        {metric.value}
                      </p>
                      <p className="text-xs text-gray-400">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <a
            href="https://wa.me/5493415958964"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-semibold hover:shadow-[0_15px_45px_rgba(0,0,0,0.35)] transition-all"
          >
            Quiero un caso de éxito para mi negocio
            <ExternalLink size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
