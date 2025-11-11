"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { RiWhatsappLine } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "servicios", label: "Servicios" },
  { id: "portfolio", label: "Portfolio" },
  { id: "testimonios", label: "Testimonios" },
  { id: "contacto", label: "Contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <nav
          className="flex h-16 md:h-20 items-center justify-between rounded-xl md:rounded-2xl px-4 md:px-6 lg:px-12 border border-white/10 my-2 md:my-4 shadow-lg md:shadow-none md:backdrop-blur-md"
          style={{
            backgroundColor: "#05080e",
            background: "#05080e",
          }}
        >
          <button
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection("hero")}
            aria-label="Ir al inicio"
          >
            <div className="relative h-20 w-20 md:h-32 md:w-32">
              <Image
                src="/cubo-logo.png"
                alt="Cubo Marketing Digital"
                fill
                sizes="(max-width: 768px) 80px, 160px"
                className="object-contain drop-shadow-[0_10px_24px_rgba(0,0,0,0.55)]"
                priority
              />
            </div>
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors leading-normal"
              >
                {item.label}
              </button>
            ))}
            <a
              href="https://wa.me/541234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm tracking-wide bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.4)] hover:bg-[#20BA5A] transition-all duration-200"
            >
              <RiWhatsappLine size={18} />
              Contáctanos
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Mobile Navigation - Slide from right */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Backdrop overlay */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] md:hidden"
                  onClick={() => setIsOpen(false)}
                />
                {/* Slide-in drawer from right */}
                <motion.div
                  initial={{ x: "100%" }}
                  animate={{ x: 0 }}
                  exit={{ x: "100%" }}
                  transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                  className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#080c13] border-l border-white/10 z-[70] md:hidden"
                >
                  <div className="flex flex-col h-full pt-20 px-6 pb-6">
                    <div className="space-y-2 flex-1">
                      {navItems.map((item) => (
                        <button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          className="block w-full text-left px-4 py-3 text-gray-200 hover:bg-white/5 rounded-lg transition-colors"
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                    <a
                      href="https://wa.me/541234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:shadow-[0_6px_16px_rgba(37,211,102,0.4)] hover:bg-[#20BA5A] transition-all duration-200"
                    >
                      <RiWhatsappLine size={18} />
                      Contáctanos
                    </a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
}
