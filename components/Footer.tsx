"use client";

import { motion } from "framer-motion";
import { RiFacebookFill, RiInstagramFill, RiTiktokFill } from "react-icons/ri";

const socialLinks = [
  {
    icon: RiInstagramFill,
    href: "https://instagram.com/Cubo_agencia_de_marketing",
    label: "Instagram",
  },
  {
    icon: RiFacebookFill,
    href: "https://www.facebook.com/people/Cubo-Marketing-Digital/100064493992688/",
    label: "Facebook",
  },
  {
    icon: RiTiktokFill,
    href: "https://tiktok.com/@Cubo-Marketing-Digital",
    label: "TikTok",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden mb-0 pb-0">
      {/* Top separator */}
      <div className="relative w-full">
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute top-0 left-0 right-0 h-px bg-gray-400/30"
        />
      </div>

      {/* Main footer content */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10"
      >
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links - Left */}
          <div className="flex gap-3">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                }}
                whileTap={{ scale: 0.9 }}
                className="w-9 h-9 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:border-white/30 hover:text-white transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>

          {/* Copyright - Right */}
          <p className="text-gray-400 text-xs md:text-sm text-center sm:text-right">
            &copy; 2025 Cubo Marketing Digital. Todos los derechos reservados.
          </p>
        </div>
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
