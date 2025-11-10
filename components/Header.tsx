"use client";

import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { RiWhatsappFill } from "react-icons/ri";

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
    <header className="fixed top-0 left-0 right-0 z-40">
      <div className="mx-auto w-full max-w-7xl px-4 md:px-6">
        <nav className="flex h-20 items-center justify-between rounded-2xl bg-[#05080e]/80 px-6 md:px-12 backdrop-blur supports-[backdrop-filter]:bg-[#05080e]/60 border border-white/10 my-4">
        <button
          className="flex items-center cursor-pointer"
          onClick={() => scrollToSection("hero")}
          aria-label="Ir al inicio"
        >
          <div className="relative h-32 w-32">
            <Image
              src="/cubo-logo.png"
              alt="Cubo Marketing Digital"
              fill
              sizes="160px"
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
              className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
            >
              {item.label}
            </button>
          ))}
          <a
            href="https://wa.me/541234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full font-semibold text-sm tracking-wide shadow-lg hover:scale-105 transition-all"
            style={{
              backgroundColor: '#25D366',
              color: '#ffffff',
            }}
          >
            <RiWhatsappFill size={18} style={{ color: '#ffffff' }} />
            WhatsApp
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

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-[#080c13] border-b border-white/10 md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-2 text-gray-200 hover:bg-white/5 rounded transition-colors"
                >
                  {item.label}
                </button>
              ))}
              <a
                href="https://wa.me/541234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 px-4 py-2 rounded-full font-semibold shadow-lg hover:scale-105 transition-all"
                style={{
                  backgroundColor: '#25D366',
                  color: '#ffffff',
                }}
              >
                <RiWhatsappFill size={18} style={{ color: '#ffffff' }} />
                WhatsApp
              </a>
            </div>
          </div>
        )}
        </nav>
      </div>
    </header>
  );
}
