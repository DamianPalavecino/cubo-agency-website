import Image from "next/image";
import {
  RiFacebookFill,
  RiInstagramFill,
  RiTiktokFill,
} from "react-icons/ri";

export default function Footer() {
  return (
    <footer className="bg-[#030508] text-white pt-16 pb-8 border-t border-white/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="relative h-20 w-28">
                <Image
                  src="/cubo-logo.png"
                  alt="Cubo Marketing Digital"
                  fill
                  sizes="112px"
                  className="object-contain drop-shadow-[0_12px_28px_rgba(0,0,0,0.45)]"
                />
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Transformamos negocios a través de estrategias digitales
              innovadoras.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Servicios</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Redes Sociales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  SEO y Google Ads
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-white transition">
                  Desarrollo Web
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#portfolio" className="hover:text-white transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-white transition">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-white transition">
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a
                href="https://instagram.com/Cubo_agencia_de_marketing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Instagram"
              >
                <RiInstagramFill size={22} />
              </a>
              <a
                href="https://facebook.com/Cubo-Marketing-Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="Facebook"
              >
                <RiFacebookFill size={22} />
              </a>
              <a
                href="https://tiktok.com/@Cubo-Marketing-Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition"
                aria-label="TikTok"
              >
                <RiTiktokFill size={22} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Cubo Marketing Digital. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-white transition">
                Privacidad
              </a>
              <a href="#" className="hover:text-white transition">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
