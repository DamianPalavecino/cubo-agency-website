"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTiktokFill,
  RiArrowRightUpLine,
} from "react-icons/ri";

const footerLinks = [
  {
    title: "Servicios",
    links: [
      { label: "Marketing en Redes Sociales", href: "#" },
      { label: "SEO y Google Ads", href: "#" },
      { label: "Desarrollo Web", href: "#" },
      { label: "Estrategia de Marca", href: "#" },
    ],
  },
  {
    title: "Empresa",
    links: [
      { label: "Portfolio", href: "#portfolio" },
      { label: "Testimonios", href: "#testimonios" },
      { label: "Sobre Nosotros", href: "#" },
      { label: "Contacto", href: "#contacto" },
    ],
  },
  {
    title: "Recursos",
    links: [
      { label: "Blog", href: "#" },
      { label: "Casos de Estudio", href: "#" },
      { label: "Guías", href: "#" },
      { label: "Preguntas Frecuentes", href: "#" },
    ],
  },
];

const socialLinks = [
  {
    icon: RiInstagramFill,
    href: "https://instagram.com/Cubo_agencia_de_marketing",
    label: "Instagram",
  },
  {
    icon: RiFacebookFill,
    href: "https://facebook.com/Cubo-Marketing-Digital",
    label: "Facebook",
  },
  {
    icon: RiTiktokFill,
    href: "https://tiktok.com/@Cubo-Marketing-Digital",
    label: "TikTok",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
} as const;

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden">
      {/* Background geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-0 right-0 w-96 h-96 bg-[#27C7E0] rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            opacity: [0.05, 0.1, 0.05],
          }}
          transition={{
            duration: 6,
            delay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-[#FF2C24] rounded-full blur-3xl"
        />
      </div>

      {/* Main footer content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-16 md:py-20"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-16">
          {/* Brand section */}
          <motion.div variants={itemVariants} className="lg:col-span-2">
            <motion.div className="inline-block mb-6 cursor-pointer">
              <Image
                src="/cubo-logo-small.png"
                alt="Cubo Marketing Digital"
                width={192}
                height={192}
                className="object-contain drop-shadow-lg w-40 md:w-48 h-auto"
              />
            </motion.div>

            <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
              Transformamos negocios a través de estrategias digitales
              innovadoras. Soluciones creativas que generan resultados reales.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.2,
                    color: "#FF2C24",
                  }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:border-white/30 transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Link sections */}
          {footerLinks.map((section, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h4 className="text-white font-bold mb-6 flex items-center gap-2">
                {section.title}
                <span className="w-1 h-1 rounded-full bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0]" />
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, j) => (
                  <motion.li
                    key={j}
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors duration-300 group"
                    >
                      {link.label}
                      <RiArrowRightUpLine className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom section */}
        <motion.div
          variants={itemVariants}
          className="border-t border-white/10 py-8 md:py-12"
        >
          <div className="flex justify-center items-center">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="text-gray-400 text-sm text-center"
            >
              &copy; 2025 Cubo Marketing Digital. Todos los derechos reservados.
            </motion.p>
          </div>
        </motion.div>
      </motion.div>

      {/* Decorative bottom accent */}
      <motion.div
        animate={{
          opacity: [0.2, 0.3, 0.2],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FF2C24] to-transparent opacity-20"
      />
    </footer>
  );
}
