'use client';

import { useState } from "react";
import { Menu, X } from "lucide-react";
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
    <header className="fixed top-0 left-0 right-0 z-40 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div
          className="flex items-center space-x-2 cursor-pointer"
          onClick={() => scrollToSection("hero")}
        >
          <div className="w-8 h-8 bg-gradient-to-br from-cyan to-red flex items-center justify-center rounded-lg text-white font-bold">
            ◻
          </div>
          <span className="font-bold text-lg text-dark hidden sm:inline">
            Cubo
          </span>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("servicios")}
            className="text-sm font-medium text-gray-700 hover:text-cyan transition-colors"
          >
            Servicios
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-sm font-medium text-gray-700 hover:text-cyan transition-colors"
          >
            Portfolio
          </button>
          <button
            onClick={() => scrollToSection("testimonios")}
            className="text-sm font-medium text-gray-700 hover:text-cyan transition-colors"
          >
            Testimonios
          </button>
          <button
            onClick={() => scrollToSection("contacto")}
            className="text-sm font-medium text-gray-700 hover:text-cyan transition-colors"
          >
            Contacto
          </button>
          <a
            href="https://wa.me/541234567890"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-cyan text-white px-6 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium text-sm"
          >
            WhatsApp
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-gray-700"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 md:hidden">
            <div className="container mx-auto px-4 py-4 space-y-4">
              <button
                onClick={() => scrollToSection("servicios")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Servicios
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Portfolio
              </button>
              <button
                onClick={() => scrollToSection("testimonios")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Testimonios
              </button>
              <button
                onClick={() => scrollToSection("contacto")}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 rounded transition-colors"
              >
                Contacto
              </button>
              <a
                href="https://wa.me/541234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-cyan text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-all font-medium"
              >
                WhatsApp
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
