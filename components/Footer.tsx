"use client";

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
    href: "https://www.tiktok.com/@cubo.marketing.di",
    label: "TikTok",
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-black text-white overflow-hidden mb-0 pb-0">
      {/* Top separator */}
      <div className="relative w-full">
        <div className="absolute top-0 left-0 right-0 h-px bg-gray-400/30 animate-scale-x" />
      </div>

      {/* Main footer content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 md:py-10 animate-slide-in-up">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Social Links - Left */}
          <div className="flex gap-3">
            {socialLinks.map((social, i) => {
              return (
                <a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white hover:bg-white/10 hover:border-white/20 hover:scale-110 active:scale-90 transition-all duration-300 shadow-lg hover:shadow-xl"
                  aria-label={social.label}
                >
                  <social.icon className="w-7 h-7" />
                </a>
              );
            })}
          </div>

          {/* Copyright - Right */}
          <p className="text-gray-400 text-xs md:text-sm text-center sm:text-right">
            &copy; 2025 Cubo Marketing Digital. Todos los derechos reservados.
          </p>
        </div>
      </div>

      {/* Decorative bottom accent */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#FF2C24] to-transparent opacity-20 animate-opacity-pulse" />
    </footer>
  );
}
