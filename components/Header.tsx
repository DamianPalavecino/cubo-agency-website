"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { id: "servicios", label: "Servicios" },
  { id: "testimonios", label: "Testimonios" },
  { id: "clientes", label: "Clientes" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    if (id === "hero") {
      // Scroll to top of page
      window.scrollTo({ top: 0, behavior: "smooth" });
      setIsOpen(false);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        setIsOpen(false);
      }
    }
  };

  return (
    <>
      {/* Mobile Navigation Overlay - Outside header to ensure proper z-index */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[40] lg:hidden"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
      
      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <motion.nav
            initial={false}
            className={`flex h-16 md:h-20 items-center justify-between pl-3 pr-4 md:pl-4 md:pr-6 lg:pl-8 lg:pr-10 my-3 md:my-6 border transition-all duration-300 ${
              isOpen
                ? "rounded-t-2xl md:rounded-3xl"
                : "rounded-2xl md:rounded-3xl"
            } ${
              scrolled
                ? "border-white/20 bg-black/40 backdrop-blur-2xl shadow-2xl"
                : "border-white/5 bg-black/20 backdrop-blur-md"
            }`}
          >
          {/* Logo */}
          <motion.button
            onClick={() => scrollToSection("hero")}
            className="flex items-center cursor-pointer group relative -ml-2 md:-ml-0"
            aria-label="Ir al inicio"
          >
            <div className="relative h-14 w-36 md:h-16 md:w-40 lg:w-32">
              <Image
                src="/cubo-logo-small.png"
                alt="Cubo Marketing Digital"
                fill
                sizes="(max-width: 768px) 144px, (max-width: 1024px) 160px, 128px"
                className="object-contain drop-shadow-lg"
                priority
              />
            </div>
          </motion.button>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, i) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                onClick={() => scrollToSection(item.id)}
                className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0] group-hover:w-6 transition-all duration-300" />
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
            href="https://wa.me/5493415958964"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-[0_8px_24px_rgba(255,44,36,0.4)] transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <RiWhatsappFill className="relative z-10 w-4 h-4" />
            <span className="relative z-10 whitespace-nowrap">Chatea con nosotros</span>
          </motion.a>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-white relative z-50"
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
              <motion.div
                  initial={{ y: "-100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ type: "tween", duration: 0.3, ease: "easeOut" }}
                  className="fixed top-[76px] md:top-[92px] left-0 right-0 z-[70] lg:hidden pointer-events-none"
                >
                  <div className="mx-auto w-full max-w-7xl px-4 pointer-events-auto">
                    <div className="bg-gradient-to-b from-black to-black/95 border-l border-r border-b border-white/10 rounded-b-2xl shadow-2xl overflow-hidden">
                      <div className="pt-6 pl-4 pr-6 pb-6 flex flex-col">
                    <motion.div
                      className="space-y-2"
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
                            open: { opacity: 1, y: 0 },
                            closed: { opacity: 0, y: -20 },
                          }}
                          className="block w-full text-left px-4 py-3 text-base md:text-lg text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                        >
                          {item.label}
                        </motion.button>
                      ))}
                    </motion.div>
                    <motion.a
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      href="https://wa.me/5493415958964"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-4 py-3.5 md:py-4 mt-4 rounded-lg font-semibold text-base md:text-lg text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-lg transition-all duration-300"
                    >
                      <RiWhatsappFill className="w-5 h-5 md:w-6 md:h-6" />
                      Chatea con nosotros
                    </motion.a>
                      </div>
                    </div>
                  </div>
                </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </div>
    </header>
    </>
  );
}
