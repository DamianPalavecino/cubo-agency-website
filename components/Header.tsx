"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-[100]">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className={`flex h-16 md:h-20 items-center justify-between rounded-2xl md:rounded-3xl pl-4 pr-6 md:pl-6 md:pr-8 lg:pl-8 lg:pr-10 my-3 md:my-6 border transition-all duration-300 ${
            scrolled
              ? "border-white/20 bg-black/40 backdrop-blur-2xl shadow-2xl"
              : "border-white/5 bg-black/20 backdrop-blur-md"
          }`}
        >
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center cursor-pointer group relative -ml-2 md:-ml-1"
            aria-label="Ir al inicio"
          >
            <div className="relative h-14 w-36 md:h-16 md:w-32">
              <Image
                src="/cubo-logo-small.png"
                alt="Cubo Marketing Digital"
                fill
                sizes="(max-width: 768px) 144px, 128px"
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => scrollToSection(item.id)}
                className="text-xs lg:text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#27C7E0] to-[#FFD74A] group-hover:w-6 transition-all duration-300" />
              </motion.button>
            ))}
          </div>

          {/* CTA Button */}
          <motion.a
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/541234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-xs lg:text-sm text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-[0_8px_24px_rgba(255,44,36,0.4)] transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <RiWhatsappLine size={16} className="relative z-10" />
            <span className="relative z-10">Chatea con nosotros</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white relative z-50"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={isOpen ? "close" : "open"}
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </AnimatePresence>
          </motion.button>

          {/* Mobile Navigation */}
          <AnimatePresence>
            {isOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[60] md:hidden"
                  onClick={() => setIsOpen(false)}
                />
                <motion.div
                  initial={{ x: "100%", opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: "100%", opacity: 0 }}
                  transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                  className="fixed top-0 right-0 h-screen w-80 max-w-[90vw] bg-gradient-to-b from-black to-black/95 border-l border-white/10 z-[70] md:hidden flex flex-col"
                >
                  <div className="pt-24 px-6 pb-6 flex flex-col h-full">
                    <motion.div
                      className="space-y-2 flex-1"
                      initial="closed"
                      animate="open"
                      variants={{
                        open: {
                          transition: { staggerChildren: 0.1 },
                        },
                        closed: {
                          transition: {
                            staggerChildren: 0.05,
                            staggerDirection: -1,
                          },
                        },
                      }}
                    >
                      {navItems.map((item) => (
                        <motion.button
                          key={item.id}
                          onClick={() => scrollToSection(item.id)}
                          variants={{
                            open: { opacity: 1, x: 0 },
                            closed: { opacity: 0, x: 50 },
                          }}
                          className="block w-full text-left px-4 py-3 text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </motion.div>
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      href="https://wa.me/541234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-lg transition-all duration-300"
                    >
                      <RiWhatsappLine size={18} />
                      Chatea con nosotros
                    </motion.a>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
  );
}
