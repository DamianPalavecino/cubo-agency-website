import { Facebook, Instagram, Music } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-cyan to-red flex items-center justify-center rounded-lg text-white font-bold">
                ◻
              </div>
              <span className="font-bold text-lg">Cubo</span>
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
                <a href="#servicios" className="hover:text-cyan transition">
                  Redes Sociales
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-cyan transition">
                  SEO y Google Ads
                </a>
              </li>
              <li>
                <a href="#servicios" className="hover:text-cyan transition">
                  Desarrollo Web
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-white mb-4">Empresa</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="#portfolio" className="hover:text-cyan transition">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#testimonios" className="hover:text-cyan transition">
                  Testimonios
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-cyan transition">
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
                className="text-gray-400 hover:text-cyan transition"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://facebook.com/Cubo-Marketing-Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan transition"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://tiktok.com/@Cubo-Marketing-Digital"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan transition"
                aria-label="TikTok"
              >
                <Music size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; 2024 Cubo Marketing Digital. Todos los derechos reservados.
            </p>
            <div className="flex space-x-6 text-sm text-gray-400 mt-4 md:mt-0">
              <a href="#" className="hover:text-cyan transition">
                Privacidad
              </a>
              <a href="#" className="hover:text-cyan transition">
                Términos
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
