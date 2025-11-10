import { Star } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Carlos García",
    role: "CEO, Consultorio Dental",
    testimonial:
      "Cubo transformó completamente nuestra presencia digital. De cero consultas en redes a 300+ mensuales en 3 meses. El equipo es profesional y muy atento.",
    rating: 5,
    image: "bg-gradient-to-br from-cyan to-blue-400",
  },
  {
    id: 2,
    name: "Sofía Martinez",
    role: "Gerente, E-commerce de Moda",
    testimonial:
      "Los resultados con Google Ads fueron insuperables. Pasamos de 10k a 500k en ventas en 6 meses. Recomiendo a Cubo sin dudarlo.",
    rating: 5,
    image: "bg-gradient-to-br from-red to-pink-400",
  },
  {
    id: 3,
    name: "Juan López",
    role: "Propietario, Agencia Inmobiliaria",
    testimonial:
      "La estrategia SEO + redes de Cubo nos posicionó como líderes en nuestra zona. Hemos vendido más propiedades en el último año que en los tres años anteriores.",
    rating: 5,
    image: "bg-gradient-to-br from-yellow to-amber-400",
  },
  {
    id: 4,
    name: "Ana Rodríguez",
    role: "Directora de Marketing, SaaS B2B",
    testimonial:
      "El contenido y SEO que Cubo implementó nos posicionó en las primeras búsquedas. Generamos miles de leads calificados sin aumentar presupuesto.",
    rating: 5,
    image: "bg-gradient-to-br from-cyan to-teal-400",
  },
  {
    id: 5,
    name: "Marco Fernández",
    role: "Dueño, Restaurante Premium",
    testimonial:
      "Nuestro restaurante estaba vacío. Con Cubo, en 4 meses llegamos a 80% de ocupación. Las redes sociales funcionan increíblemente.",
    rating: 5,
    image: "bg-gradient-to-br from-red to-rose-400",
  },
  {
    id: 6,
    name: "Laura Gómez",
    role: "Directora, Clínica Dental",
    testimonial:
      "El sitio web de Cubo es una máquina de generar citas. Pasamos de 50 pacientes nuevos/mes a 200+ en 3 meses. Excelente ROI.",
    rating: 5,
    image: "bg-gradient-to-br from-yellow to-lime-400",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-dark mb-4">
            Lo que dicen nuestros clientes
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Miles de empresas confían en Cubo para transformar su presencia
            digital
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="animate-fade-in-up bg-white rounded-xl p-8 border border-gray-200 hover:border-cyan hover:shadow-lg transition-all duration-300"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-yellow text-yellow"
                  />
                ))}
              </div>

              {/* Testimonial text */}
              <p className="text-gray-700 mb-6 leading-relaxed italic">
                &ldquo;{testimonial.testimonial}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div
                  className={`w-12 h-12 rounded-full ${testimonial.image}`}
                ></div>
                <div>
                  <p className="font-bold text-dark">{testimonial.name}</p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 pt-12 border-t border-gray-200">
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan mb-2">100+</p>
            <p className="text-gray-600">Clientes satisfechos</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan mb-2">4.9★</p>
            <p className="text-gray-600">Calificación promedio</p>
          </div>
          <div className="text-center">
            <p className="text-4xl font-bold text-cyan mb-2">5M+</p>
            <p className="text-gray-600">En resultados generados</p>
          </div>
        </div>
      </div>
    </section>
  );
}
