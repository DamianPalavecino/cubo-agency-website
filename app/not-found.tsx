"use client";

import Link from "next/link";
import { RiArrowLeftLine, RiHomeLine } from "react-icons/ri";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-black flex items-center justify-center px-4 md:px-6 lg:px-8 py-20 md:py-32">
      <div className="w-full max-w-4xl mx-auto text-center space-y-6 md:space-y-8">
        {/* 404 Number */}
        <div className="space-y-4 animate-scale-in">
          <h1 className="text-8xl md:text-9xl lg:text-[12rem] font-black text-transparent bg-clip-text bg-gradient-to-r from-[#FF2C24] from-40% via-[#FFD74A] via-70% to-[#27C7E0] leading-none">
            404
          </h1>
        </div>

        {/* Error Message */}
        <div className="space-y-4 animate-slide-in-up-delayed-1">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
            Página no encontrada
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            La ruta que estás buscando no existe o ha sido movida. 
            Volvé al inicio para seguir explorando nuestros servicios.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4 animate-slide-in-up-delayed-2">
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-white bg-gradient-to-r from-[#FF2C24] to-[#FFD74A] hover:shadow-[0_8px_24px_rgba(255,44,36,0.4)] transition-all duration-300 group relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
            <RiHomeLine className="relative z-10 w-5 h-5" />
            <span className="relative z-10">Ir al inicio</span>
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center justify-center gap-2 px-6 md:px-8 py-3 md:py-4 rounded-lg font-semibold text-white border-2 border-white/20 hover:border-white/40 hover:bg-white/5 transition-all duration-300"
          >
            <RiArrowLeftLine className="w-5 h-5" />
            <span>Volver atrás</span>
          </button>
        </div>
      </div>
    </div>
  );
}
