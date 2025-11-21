"use client";

import Image from "next/image";
import { useState, useEffect, memo, useCallback, useRef } from "react";
import { Menu, X } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";

const navItems = [
  { id: "hero", label: "Inicio" },
  { id: "servicios", label: "Servicios" },
  { id: "testimonios", label: "Testimonios" },
  { id: "clientes", label: "Clientes" },
];

const Header = memo(function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const lastScrolledValueRef = useRef(false);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const newScrolledValue = window.scrollY > 50;
          // Only update state if the value actually changed
          if (newScrolledValue !== lastScrolledValueRef.current) {
            setScrolled(newScrolledValue);
            lastScrolledValueRef.current = newScrolledValue;
          }
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = useCallback((id: string) => {
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
  }, []);

  const toggleMenu = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <>
      {/* Mobile Navigation Overlay - Outside header to ensure proper z-index */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[40] lg:hidden animate-fade-in"
          onClick={closeMenu}
        />
      )}

      <header className="fixed top-0 left-0 right-0 z-[100]">
        <div className="mx-auto w-full max-w-7xl px-4 md:px-6 lg:px-8">
          <nav
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
            <button
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
            </button>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, i) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-sm font-medium text-gray-300 hover:text-white px-4 py-2 rounded-lg hover:bg-white/5 transition-all duration-300 relative group animate-slide-in-down"
                  style={{ animationDelay: `${i * 0.05}s` }}
                >
                  {item.label}
                  <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0] group-hover:w-6 transition-all duration-300" />
                </button>
              ))}
            </div>

            {/* CTA Button */}
            <a
              href="https://wa.me/5493415958964"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-lg font-semibold text-sm text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-[0_8px_24px_rgba(255,44,36,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 group relative overflow-hidden animate-slide-in-right-delayed"
            >
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
              <RiWhatsappFill className="relative z-10 w-4 h-4" />
              <span className="relative z-10 whitespace-nowrap">
                Chatea con nosotros
              </span>
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="lg:hidden p-2 text-white relative z-50"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Mobile Navigation */}
            {isOpen && (
              <div
                className="fixed top-[76px] md:top-[92px] left-0 right-0 z-[70] lg:hidden pointer-events-none animate-slide-down"
              >
                <div className="mx-auto w-full max-w-7xl px-4 pointer-events-auto">
                  <div className="bg-gradient-to-b from-black to-black/95 border-l border-r border-b border-white/10 rounded-b-2xl shadow-2xl overflow-hidden">
                    <div className="pt-6 pl-4 pr-6 pb-6 flex flex-col">
                      <div className="space-y-2">
                        {navItems.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left px-4 py-3 text-base md:text-lg text-gray-200 hover:text-white hover:bg-white/5 rounded-lg transition-all duration-300 font-medium"
                          >
                            {item.label}
                          </button>
                        ))}
                      </div>
                      <a
                        href="https://wa.me/5493415958964"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 px-4 py-3.5 md:py-4 mt-4 rounded-lg font-semibold text-base md:text-lg text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-lg transition-all duration-300"
                      >
                        <RiWhatsappFill className="w-5 h-5 md:w-6 md:h-6" />
                        Chatea con nosotros
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </header>
    </>
  );
});

Header.displayName = "Header";

export default Header;
