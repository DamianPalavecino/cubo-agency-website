'use client';

import { ArrowRight } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-white to-gray-50 relative overflow-hidden mt-16"
    >
      {/* Geometric background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-cyan/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-red/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-yellow/5 rounded-lg blur-3xl rotate-45"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <div className="inline-block mb-6 px-4 py-2 bg-cyan/10 rounded-full border border-cyan/20">
            <p className="text-cyan font-semibold text-sm">
              ✨ Transformamos tu presencia digital
            </p>
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-dark mb-6 leading-tight">
            Crece online
            <span className="block bg-gradient-to-r from-cyan via-red to-yellow bg-clip-text text-transparent">
              con estrategia
            </span>
          </h1>

          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto">
            En Cubo Marketing Digital ayudamos a negocios como el tuyo a alcanzar
            sus objetivos digitales mediante estrategias personalizadas de
            marketing, SEO y desarrollo web.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="https://wa.me/541234567890"
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-cyan text-white rounded-lg font-semibold hover:bg-opacity-90 hover:shadow-lg transition-all flex items-center justify-center gap-2 group"
            >
              Hablemos por WhatsApp
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </a>
            <button
              onClick={() => scrollToSection("servicios")}
              className="px-8 py-4 border-2 border-gray-300 text-dark rounded-lg font-semibold hover:border-cyan hover:bg-cyan/5 transition-all"
            >
              Explorar servicios
            </button>
          </div>

          {/* Trust indicators */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600 text-sm mb-6">Confían en nosotros</p>
            <div className="flex flex-wrap justify-center gap-8 text-gray-600">
              <div className="text-center">
                <p className="text-2xl font-bold text-dark">+50</p>
                <p className="text-sm">Proyectos realizados</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-dark">+100</p>
                <p className="text-sm">Clientes satisfechos</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-dark">+5</p>
                <p className="text-sm">Años de experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
